// @flow

// https://query.wikidata.org/sparql?query=SELECT%20%3Fcode%20%3Fproperty%20WHERE%20%7B%20%3Fproperty%20p%3AP1552%20%3Fstatement.%20%3Fstatement%20ps%3AP1552%20wd%3AQ26921380.%20%3Fstatement%20pq%3AP3295%20%3Fcode.%20%7D%20ORDER%20BY%20%3Fcode

const RESPONSE : any = { viafID: '66477450', ARBABN: [ '000029747' ], B2Q: [ '0000075154' ], BAV: [ 'ADV10217094' ], BIBSYS: [ '97000967' ], BLBNB: [ '000281084' ], BNC: [ '.a10141716', 'BNC10000000000000000034797' ], BNCHL: [ 'BNC10000000000000000034797' ], BNE: [ 'XX910058' ], BNF: [ 'FRBNF120073754' ], CAOONL: [ 'ncf10157237' ], DBC: [ '870979.68840759' ], DE663: [ 'pe31654' ], DNB: [ 'http://d-nb.info/gnd/118641816' ], EGAXA: [ 'vtls001098006' ], ERRR: [ 'a11173397', 'a11135578' ], GRATEVE: [ '329313', '171112' ], ICCU: [ 'IT\\ICCU\\CFIV\\001053' ], ISNI: [ '0000000121372055' ], J9U: [ '987007310784505171' ], JPG: [ '500324476' ], KRNLK: [ 'KAC199622271' ], LC: [ 'n80036579' ], LIH: [ 'LNB:V*4828;=BI' ], LNB: [ 'LNB:V*4828;=BI', 'LNC10-000011860' ], LNL: [ '52485' ], N6I: [ 'vtls000026383' ], NDL: [ '00453465' ], NII: [ 'DA00383486' ], NKC: [ 'jn19990210513' ], NLA: [ '000036246179' ], NLR: [ 'RU\\NLR\\AUTH\\771614' ], NSK: [ '000043891' ], NTA: [ '068556977' ], NUKAT: [ 'vtls000526480' ], PLWABN: [ '9810702870405606' ], PTBNP: [ '58530' ], RERO: [ 'vtls021720820' ], SELIBR: [ '75kmjwfr4d93z03' ], SIMACOB: [ '5923939' ], SKMASNL: [ 'vtls001130496' ], SUDOC: [ '028188012' ], SZ: [ 'http://d-nb.info/gnd/118641816' ], UIY: [ '000057048' ], VLACC: [ '000033841' ], WKP: [ 'Q7200' ], Identities: [ 'https://www.worldcat.org/identities/lccn-n80036579' ], Wikipedia: [ 'https://af.wikipedia.org/wiki/Aleksander_Poesjkin', 'https://als.wikipedia.org/wiki/Alexander_Sergejewitsch_Puschkin', 'https://am.wikipedia.org/wiki/አሌክሳንደር_ፑሽኪን', 'https://an.wikipedia.org/wiki/Alexander_Pushkin', 'https://ar.wikipedia.org/wiki/ألكسندر_بوشكين', 'https://arz.wikipedia.org/wiki/بوشكين', 'https://ast.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://av.wikipedia.org/wiki/Пушкин,_Сергейил_Александр', 'https://ay.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://az.wikipedia.org/wiki/Aleksandr_Puşkin', 'https://ba.wikipedia.org/wiki/Пушкин_Александр_Сергеевич', 'https://bar.wikipedia.org/wiki/Alexander_Puschkin', 'https://bat_smg.wikipedia.org/wiki/Aleksandros_Poškėns', 'https://be.wikipedia.org/wiki/Аляксандр_Сяргеевіч_Пушкін', 'https://be_x_old.wikipedia.org/wiki/Аляксандар_Пушкін', 'https://bg.wikipedia.org/wiki/Александър_Пушкин', 'https://bi.wikipedia.org/wiki/Alexander_Pushkin', 'https://bn.wikipedia.org/wiki/আলেক্সান্দ্‌র_পুশকিন', 'https://br.wikipedia.org/wiki/Aleksandr_Sergeyevitch_Pouchkin', 'https://bs.wikipedia.org/wiki/Aleksandar_Puškin', 'https://bxr.wikipedia.org/wiki/Александр_Пушкин', 'https://ca.wikipedia.org/wiki/Aleksandr_Puixkin', 'https://cdo.wikipedia.org/wiki/Aleksandr_Sergeyevich_Pushkin', 'https://ce.wikipedia.org/wiki/Пушкин,_Александр_Сергеевич', 'https://ceb.wikipedia.org/wiki/Alexander_Pushkin', 'https://ckb.wikipedia.org/wiki/ئەلێکساندر_پوشکین', 'https://co.wikipedia.org/wiki/Aleksandr_Sergeevič_Puškin', 'https://crh.wikipedia.org/wiki/Aleksandr_Puşkin', 'https://cs.wikipedia.org/wiki/Alexandr_Sergejevič_Puškin', 'https://cv.wikipedia.org/wiki/Пушкин_Александр_Сергеевич', 'https://cy.wikipedia.org/wiki/Alexandr_Pushkin', 'https://da.wikipedia.org/wiki/Aleksandr_Sergejevitj_Pusjkin', 'https://de.wikipedia.org/wiki/Alexander_Sergejewitsch_Puschkin', 'https://diq.wikipedia.org/wiki/Aleksandr_Puşkin', 'https://el.wikipedia.org/wiki/Αλεξάντρ_Σεργκέγεβιτς_Πούσκιν', 'https://en.wikipedia.org/wiki/Alexander_Pushkin', 'https://eo.wikipedia.org/wiki/Aleksandr_Puŝkin', 'https://es.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://et.wikipedia.org/wiki/Aleksandr_Puškin', 'https://eu.wikipedia.org/wiki/Aleksandr_Puxkin', 'https://ext.wikipedia.org/wiki/Alexander_Pushkin', 'https://fa.wikipedia.org/wiki/الکساندر_پوشکین', 'https://fi.wikipedia.org/wiki/Aleksandr_Puškin', 'https://fo.wikipedia.org/wiki/Aleksandr_Pusjkin', 'https://fr.wikipedia.org/wiki/Alexandre_Pouchkine', 'https://frr.wikipedia.org/wiki/Aleksander_Puschkin', 'https://fy.wikipedia.org/wiki/Aleksander_Pûsjkin', 'https://ga.wikipedia.org/wiki/Alexander_Pushkin', 'https://gl.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://gv.wikipedia.org/wiki/Alexander_Pushkin', 'https://hak.wikipedia.org/wiki/Aleksandr_Sergeyevich_Pushkin', 'https://he.wikipedia.org/wiki/אלכסנדר_פושקין', 'https://hi.wikipedia.org/wiki/अलेक्सांद्र_पूश्किन', 'https://hif.wikipedia.org/wiki/Alexander_Pushkin', 'https://hr.wikipedia.org/wiki/Aleksandar_Sergejevič_Puškin', 'https://hsb.wikipedia.org/wiki/Aleksander_Sergejewič_Puškin', 'https://hu.wikipedia.org/wiki/Alekszandr_Szergejevics_Puskin', 'https://hy.wikipedia.org/wiki/Ալեքսանդր_Պուշկին', 'https://ia.wikipedia.org/wiki/Alexander_Pushkin', 'https://id.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://ilo.wikipedia.org/wiki/Alexander_Pushkin', 'https://io.wikipedia.org/wiki/Alexander_Pushkin', 'https://is.wikipedia.org/wiki/Alexandr_Púshkín', 'https://it.wikipedia.org/wiki/Aleksandr_Sergeevič_Puškin', 'https://ja.wikipedia.org/wiki/アレクサンドル・プーシキン', 'https://jbo.wikipedia.org/wiki/aleksandr._puckin', 'https://jv.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://ka.wikipedia.org/wiki/ალექსანდრე_პუშკინი', 'https://kaa.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://kbd.wikipedia.org/wiki/Александр_Пушкин', 'https://kbp.wikipedia.org/wiki/Alexandre_Pouchkine', 'https://kk.wikipedia.org/wiki/Александр_Сергеевич_Пушкин', 'https://ko.wikipedia.org/wiki/알렉산드르_푸시킨', 'https://ku.wikipedia.org/wiki/Aleksandr_Pûşkîn', 'https://kv.wikipedia.org/wiki/Пушкин_Александр_Сергеевич', 'https://ky.wikipedia.org/wiki/Александр_Пушкин', 'https://la.wikipedia.org/wiki/Alexander_Puškin', 'https://lb.wikipedia.org/wiki/Alexander_Sergejewitsch_Puschkin', 'https://lbe.wikipedia.org/wiki/Александр_Пушкин', 'https://lez.wikipedia.org/wiki/Александр_Сергеевич_Пушкин', 'https://li.wikipedia.org/wiki/Alexander_Poesjkin', 'https://lt.wikipedia.org/wiki/Aleksandras_Puškinas', 'https://lv.wikipedia.org/wiki/Aleksandrs_Puškins', 'https://mg.wikipedia.org/wiki/Alexander_Pushkin', 'https://mhr.wikipedia.org/wiki/Пушкин,_Александр_Сергеевич', 'https://min.wikipedia.org/wiki/Alexander_Pushkin', 'https://mk.wikipedia.org/wiki/Александар_Сергеевич_Пушкин', 'https://ml.wikipedia.org/wiki/അലക്സാണ്ടർ_പുഷ്കിൻ', 'https://mn.wikipedia.org/wiki/Александр_Сергеевич_Пушкин', 'https://mr.wikipedia.org/wiki/अलेक्सांद्र_पुश्किन', 'https://mrj.wikipedia.org/wiki/Пушкин,_Александр_Сергеевич', 'https://ms.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://my.wikipedia.org/wiki/အလက်ဇန်းဒါး_ပုရှ်ကင်', 'https://myv.wikipedia.org/wiki/Пушкин,_Александр_Сергеевич', 'https://ne.wikipedia.org/wiki/अलेक्जान्डर_पुस्किन', 'https://new.wikipedia.org/wiki/अलेक्सान्द्र_पुश्किन', 'https://nl.wikipedia.org/wiki/Aleksandr_Poesjkin', 'https://nn.wikipedia.org/wiki/Aleksandr_Pusjkin', 'https://no.wikipedia.org/wiki/Aleksandr_Pusjkin', 'https://oc.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://os.wikipedia.org/wiki/Пушкин,_Александр_Сергейы_фырт', 'https://pa.wikipedia.org/wiki/ਅਲੈਗਜ਼ੈਂਡਰ_ਪੁਸ਼ਕਿਨ', 'https://pcd.wikipedia.org/wiki/Alexandre_Sergueïevitch_Pouchkine', 'https://pl.wikipedia.org/wiki/Aleksander_Puszkin', 'https://pms.wikipedia.org/wiki/Aleksandr_Puškin', 'https://pnb.wikipedia.org/wiki/پشکن', 'https://pt.wikipedia.org/wiki/Alexandre_Pushkin', 'https://qu.wikipedia.org/wiki/Aleksandr_Puxkin', 'https://ro.wikipedia.org/wiki/Aleksandr_Pușkin', 'https://ru.wikipedia.org/wiki/Пушкин,_Александр_Сергеевич', 'https://rue.wikipedia.org/wiki/Александр_Пушкин', 'https://sah.wikipedia.org/wiki/Александр_Пушкин', 'https://sat.wikipedia.org/wiki/ᱯᱩᱥᱠᱤᱱ_ᱟᱞᱮᱠᱡᱟᱱᱰᱟᱨ', 'https://scn.wikipedia.org/wiki/Alexander_Pushkin', 'https://sco.wikipedia.org/wiki/Alexander_Pushkin', 'https://sd.wikipedia.org/wiki/اليگزينڊر_پشڪن', 'https://sh.wikipedia.org/wiki/Aleksandar_Puškin', 'https://simple.wikipedia.org/wiki/Alexander_Pushkin', 'https://sk.wikipedia.org/wiki/Alexandr_Sergejevič_Puškin', 'https://sl.wikipedia.org/wiki/Aleksander_Sergejevič_Puškin', 'https://sq.wikipedia.org/wiki/Aleksandër_Pushkini', 'https://sr.wikipedia.org/wiki/Александар_Пушкин', 'https://stq.wikipedia.org/wiki/Alexander_Sergejewitsch_Puschkin', 'https://sv.wikipedia.org/wiki/Aleksandr_Pusjkin', 'https://sw.wikipedia.org/wiki/Aleksander_Pushkin', 'https://szl.wikipedia.org/wiki/Aleksandr_Puszkin', 'https://ta.wikipedia.org/wiki/அலெக்சாந்தர்_பூஷ்கின்', 'https://te.wikipedia.org/wiki/అలెగ్జాండర్_పుష్కిన్', 'https://tg.wikipedia.org/wiki/Александр_Пушкин', 'https://th.wikipedia.org/wiki/อะเลคซันดร์_พุชกิน', 'https://tk.wikipedia.org/wiki/Aleksandr_Sergeýewiç_Puşkin', 'https://tr.wikipedia.org/wiki/Aleksandr_Puşkin', 'https://tt.wikipedia.org/wiki/Александр_Пушкин', 'https://tyv.wikipedia.org/wiki/Пушкин,_Александр_Сергеевич', 'https://udm.wikipedia.org/wiki/Пушкин,_Александр_Сергеевич', 'https://uk.wikipedia.org/wiki/Пушкін_Олександр_Сергійович', 'https://ur.wikipedia.org/wiki/الیکزاندر_پوشکن', 'https://uz.wikipedia.org/wiki/Aleksandr_Pushkin', 'https://vep.wikipedia.org/wiki/Puškin_Aleksandr', 'https://vi.wikipedia.org/wiki/Aleksandr_Sergeyevich_Pushkin', 'https://vls.wikipedia.org/wiki/Alexander_Poesjkin', 'https://vo.wikipedia.org/wiki/Aleksandr_Pujkin', 'https://war.wikipedia.org/wiki/Alexander_Pushkin', 'https://wuu.wikipedia.org/wiki/亚历山大·谢尔盖耶维奇·普希金', 'https://xmf.wikipedia.org/wiki/ალექსანდრე_პუშკინი', 'https://yi.wikipedia.org/wiki/אלעקסאנדער_פושקין', 'https://yo.wikipedia.org/wiki/Alexander_Pushkin', 'https://zh.wikipedia.org/wiki/亚历山大·谢尔盖耶维奇·普希金', 'https://zh_min_nan.wikipedia.org/wiki/Alexander_Pushkin', 'https://zh_yue.wikipedia.org/wiki/普希金' ] };

export default RESPONSE;
