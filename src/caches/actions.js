import * as ApiUtils from 'core/ApiUtils';
import { API_PARAMETER_LANGUAGES } from 'utils/I18nUtils';
import expect from 'expect';
import LabelDescription from './LabelDescription';
import PropertyDescription from './PropertyDescription';

function buildQueueAction( type, maxBatch,
  isKeyValidF, buildPromiceF, convertResultToEntitiesF ) {
  expect( type ).toBeAn( 'string' );
  expect( maxBatch ).toBeA( 'number' );
  expect( isKeyValidF ).toBeA( 'function' );
  expect( buildPromiceF ).toBeA( 'function' );
  expect( convertResultToEntitiesF ).toBeA( 'function' );

  function scheduleQueuing() {
    return ( dispatch, getState ) => {

      const data = getState()[ type ];
      expect( data ).toBeAn( 'object', 'Cache not found: ' + type );
      const queue = data.queue;
      expect( queue ).toBeA( Set );

      if ( data.state === 'WAITING' && data.queue.size > 0 ) {
        dispatch( {
          type: 'CACHE_' + type + '_SET_STATE',
          state: 'SCHEDULED',
        } );

        const nextBatch = [ ...queue ].slice( 0, Math.min( maxBatch, queue.size ) );

        dispatch( {
          type: 'CACHE_' + type + '_REMOVE_FROM_QUEUE',
          keys: nextBatch,
        } );

        return buildPromiceF( nextBatch ).then( result => {
          if ( typeof result.error !== 'undefined' ) {
            mw.log.warn( result.error );
            throw new Error( result.error );
          }
          mw.log( 'Successfully received ' + nextBatch.length + 'items: ' + nextBatch );

          const cacheUpdate = convertResultToEntitiesF( result );
          expect( cacheUpdate ).toBeAn( 'object' );

          dispatch( {
            type: 'CACHE_' + type + '_PUT',
            cacheUpdate,
          } );

          dispatch( {
            type: 'CACHE_' + type + '_SET_STATE',
            state: 'WAITING',
          } );
          setTimeout( () => dispatch( scheduleQueuing() ), 0 );

        } ).catch( error => {
          mw.log.error( 'Unable to batch request following items: ' + nextBatch );
          mw.log.error( error );
          dispatch( {
            type: 'CACHE_' + type + '_SET_STATE',
            state: 'WAITING',
          } );
          setTimeout( () => dispatch( scheduleQueuing() ), 0 );
        } );
      }
    };
  }

  return key => {
    expect( key ).toBeAn( 'string' );

    return ( dispatch, getState ) => {

      const data = getState()[ type ];
      expect( data ).toBeAn( 'object', 'Cache not found: ' + type );

      const cache = data.cache;
      expect( cache ).toBeAn( 'object', 'Cache not found: ' + type );

      const test = isKeyValidF( key );
      if ( !test ) throw new Error( 'Provided cache key is not valid: ' + key );

      const cachedValue = cache[ key ];
      if ( cachedValue )
        return;

      const queue = data.queue;
      expect( queue ).toBeA( Set );

      if ( !queue.has( key ) ) {
        console.log( 'Queueing for cache population: ' + key );
        dispatch( {
          type: 'CACHE_' + type + '_QUEUE',
          key,
        } );
      }

      setTimeout( () => dispatch( scheduleQueuing( ) ), 0 );
    };
  };

}

export const labelDescriptionQueue = buildQueueAction( 'LABELDESCRIPTIONS', 50,
  key => key.match( /^[PQ](\d+)$/i ),
  keys => ApiUtils.getWikidataApi()
    .get( {
      action: 'wbgetentities',
      languages: API_PARAMETER_LANGUAGES,
      languagefallback: true,
      props: 'labels|descriptions',
      ids: keys.join( '|' ),
    } ),
  result => {
    const cacheUpdate = {};
    Object.values( result.entities ).forEach( entity => {
      const labelDescription = new LabelDescription( entity );
      cacheUpdate[ entity.id ] = Object.freeze( labelDescription );
    } );
    return cacheUpdate;
  }
);

export const propertyDescriptionQueue = buildQueueAction( 'PROPERTYDESCRIPTIONS', 50,
  key => key.match( /^P(\d+)$/i ),
  keys => ApiUtils.getWikidataApi()
    .get( {
      action: 'wbgetentities',
      languages: API_PARAMETER_LANGUAGES,
      languagefallback: true,
      props: 'claims|datatype|labels',
      ids: keys.join( '|' ),
    } ),
  result => {
    const cacheUpdate = {};
    Object.values( result.entities ).forEach( entity => {
      const propertyDescription = new PropertyDescription( entity );
      cacheUpdate[ entity.id ] = Object.freeze( propertyDescription );
    } );
    return cacheUpdate;
  }
);