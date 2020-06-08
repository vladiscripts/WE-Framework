// @flow

// https://query.wikidata.org/sparql?query=SELECT%20%3Fcode%20%3Fproperty%20WHERE%20%7B%20%3Fproperty%20p%3AP1552%20%3Fstatement.%20%3Fstatement%20ps%3AP1552%20wd%3AQ26921380.%20%3Fstatement%20pq%3AP3295%20%3Fcode.%20%7D%20ORDER%20BY%20%3Fcode

const RESPONSE : any = { head: { vars: [ 'code', 'property' ] }, results: { bindings: [ { code: { type: 'literal', value: 'ARBABN' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P3788' } }, { code: { type: 'literal', value: 'B2Q' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P3280' } }, { code: { type: 'literal', value: 'BAV' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1017' } }, { code: { type: 'literal', value: 'BIBSYS' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1015' } }, { code: { type: 'literal', value: 'BLBNB' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P4619' } }, { code: { type: 'literal', value: 'BNC' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1273' } }, { code: { type: 'literal', value: 'BNCHL' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7369' } }, { code: { type: 'literal', value: 'BNE' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P950' } }, { code: { type: 'literal', value: 'BNF' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P268' } }, { code: { type: 'literal', value: 'BNL' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7028' } }, { code: { type: 'literal', value: 'CAOONL' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P8179' } }, { code: { type: 'literal', value: 'CYT' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1048' } }, { code: { type: 'literal', value: 'DBC' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P3846' } }, { code: { type: 'literal', value: 'DE663' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P5504' } }, { code: { type: 'literal', value: 'DNB' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P227' } }, { code: { type: 'literal', value: 'EGAXA' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1309' } }, { code: { type: 'literal', value: 'ERRR' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P6394' } }, { code: { type: 'literal', value: 'FAST' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P2163' } }, { code: { type: 'literal', value: 'GRATEVE' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P3348' } }, { code: { type: 'literal', value: 'GeoNames' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1566' } }, { code: { type: 'literal', value: 'ICCU' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P396' } }, { code: { type: 'literal', value: 'ISNI' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P213' } }, { code: { type: 'literal', value: 'Identities' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7859' } }, { code: { type: 'literal', value: 'J9U' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P8189' } }, { code: { type: 'literal', value: 'JPG' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P245' } }, { code: { type: 'literal', value: 'KRNLK' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P5034' } }, { code: { type: 'literal', value: 'LAC' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1670' } }, { code: { type: 'literal', value: 'LC' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P244' } }, { code: { type: 'literal', value: 'LIH' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7699' } }, { code: { type: 'literal', value: 'LNB' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1368' } }, { code: { type: 'literal', value: 'LNL' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7026' } }, { code: { type: 'literal', value: 'MRBNR' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7058' } }, { code: { type: 'literal', value: 'NDL' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P349' } }, { code: { type: 'literal', value: 'NII' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P271' } }, { code: { type: 'literal', value: 'NKC' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P691' } }, { code: { type: 'literal', value: 'NLA' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P409' } }, { code: { type: 'literal', value: 'NLB' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P3988' } }, { code: { type: 'literal', value: 'NLI' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P949' } }, { code: { type: 'literal', value: 'NLP' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1695' } }, { code: { type: 'literal', value: 'NLR' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7029' } }, { code: { type: 'literal', value: 'NSK' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1375' } }, { code: { type: 'literal', value: 'NSZL' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P951' } }, { code: { type: 'literal', value: 'NSZL' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P3133' } }, { code: { type: 'literal', value: 'NTA' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1006' } }, { code: { type: 'literal', value: 'NUKAT' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1207' } }, { code: { type: 'literal', value: 'PERSEUS' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7041' } }, { code: { type: 'literal', value: 'PLWABN' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7293' } }, { code: { type: 'literal', value: 'PTBNP' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1005' } }, { code: { type: 'literal', value: 'RERO' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P3065' } }, { code: { type: 'literal', value: 'SELIBR' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P906' } }, { code: { type: 'literal', value: 'SELIBR' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P5587' } }, { code: { type: 'literal', value: 'SIMACOB' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P1280' } }, { code: { type: 'literal', value: 'SKMASNL' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7700' } }, { code: { type: 'literal', value: 'SRP' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P6934' } }, { code: { type: 'literal', value: 'SUDOC' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P269' } }, { code: { type: 'literal', value: 'UIY' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7039' } }, { code: { type: 'literal', value: 'VLACC' }, property: { type: 'uri', value: 'http://www.wikidata.org/entity/P7024' } } ] } };

export default RESPONSE;
