(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(81),i=n.n(a),r=n(645),o=n.n(r),s=n(667),c=n.n(s),d=new URL(n(313),n.b),p=o()(i()),l=c()(d);p.push([e.id,"body{background-image:url("+l+");background-size:cover;background-repeat:no-repeat;position:relative;box-sizing:border-box}header{width:320px;margin:0 auto;display:flex;justify-content:space-between;padding:10px;font-size:20px;color:#23ff7e;font-weight:bold}.score{display:flex}main{width:320px;margin:0 auto;margin-top:20px;background-color:rgba(173,173,173,.6235294118);padding:10px}.painting-img{min-height:300px;max-height:400px;width:300px;margin:0 auto;background-size:contain;background-repeat:no-repeat;background-position:center}.painting-about-btn{display:block;margin:10px auto;background-color:gray;color:#505050}.painting-about-btn-active{background-color:#fff;color:green}.painting-about-window{box-sizing:border-box;position:fixed;top:75px;min-height:400px;width:320px;background-color:#9e9e9e;padding:20px 10px;transform:scale(0);transition:.5s}.painting-popup-active{transform:scale(1)}.answer-variant{display:flex;justify-content:space-between}.variant-btn{width:50%;height:30px;text-align:center;vertical-align:middle;border:1px solid #000;background-color:aqua;padding-top:5px;box-sizing:border-box}.variant-btn-active{background-color:#018f8f}.painting-variant{border-radius:20px 0 0 0}.painter-variant{border-radius:0 20px 0 0}.answers-paintings,.answers-painters{height:130px}.answers-disactive{display:none}li::marker{color:#f0f8ff}.wrong-answer::marker{color:red}.right-answer::marker{color:green}ul{font-size:18px;font-weight:400}.next-question-btn{display:block;margin:0 auto}.next-question-btn:hover{cursor:pointer}.next-question-btn-disactive{background-color:gray}.next-question-btn-disactive:hover{background-color:gray;cursor:default}.painter-about{box-sizing:border-box;position:fixed;top:75px;min-height:400px;width:320px;background-color:#9e9e9e;padding:20px 10px;transform:scale(0);transition:.5s}.painter-about-active{transform:scale(1)}.painter-about-img{min-height:300px;max-height:400px;width:300px;margin:0 auto;background-size:contain;background-repeat:no-repeat;background-position:center}.menu{width:320px;margin:0 auto;margin-top:45vh;background-color:#b6b4b4;padding:20px}.start-btn{display:block;margin:0 auto;font-size:20px;font-weight:bold}.finish{width:320px;margin:0 auto;border-radius:10px;background-color:#b6b4b4;padding:10px;margin-top:100px}.finish-text{font-size:20px}.finish-btn{font-size:22px;color:#0f8a0f;font-weight:bold;border-radius:5px;display:block;margin:0 auto}",""]);const u=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);a&&o[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},o=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],p=r[d]||0,l="".concat(d," ").concat(p);r[d]=p+1;var u=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var g=i(m,a);a.byIndex=s,t.splice(s,0,{identifier:l,updater:g,references:1})}o.push(l)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var s=n(r[o]);t[s].references--}for(var c=a(e,i),d=0;d<r.length;d++){var p=n(r[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},313:(e,t,n)=>{e.exports=n.p+"d2e85d405e81caffbd9e.png"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),i=n.n(a),r=n(569),o=n.n(r),s=n(565),c=n.n(s),d=n(216),p=n.n(d),l=n(589),u=n.n(l),m=n(99),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=o().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const b=[{id:0,name:"Диего Веласкес",image:"../images/author_img/diego_velaskes.jpg",about:"Дие́го Родри́гес де Си́льва-и-Вела́скес (исп. Diego Rodríguez de Silva y Velázquez; 6 июня 1599, Севилья, Королевство Кастилия и Леон — 6 августа 1660, Мадрид, Испания) — испанский художник, крупнейший представитель мадридской школы времён золотого века испанской живописи, придворный живописец короля Филиппа IV. Диего в начале творческой жизни посвятил свои скромные картины жизни бедных людей. Он изображал ремесленников, поваров, мастеров в процессе работы. Жанр, использованный Веласкесом, назывался «бодегонес» (в переводе с испанского «трактир», «дешёвая столовая»)."},{id:1,name:"Сальвадор Дали",image:"../images/paintngs/postoianstvo_pamiati.jpg",about:"Сальвадо́р Дали́ (полное имя Сальвадор Доме́нек Фелип Жасинт Дали-и-Доме́нек, маркиз де Дали де Пу́боль, кат. Salvador Domènec Felip Jacint Dalí i Domènech, Marqués de Dalí de Púbol, исп. Salvador Domingo Felipe Jacinto Dalí i Domènech, Marqués de Dalí y de Púbol; 11 мая 1904, Фигерас, Каталония, Испания — 23 января 1989, там же) — испанский живописец, график, скульптор, режиссёр и писатель. Один из самых известных представителей сюрреализма."},{id:2,name:"Пабло Пикассо",image:"../images/author_img/picasso.jpg",about:"Па́бло Руи́с-и-Пика́ссо (полное имя — Па́бло Дие́го Хосе́ Франси́ско де Па́ула Хуа́н Непомусе́но Мари́я де лос Реме́диос Сиприа́но де ла Санти́сима Тринида́д Ма́ртир Патри́сио Руи́с-и-Пика́ссо. Основоположник кубизма (совместно с Жоржем Браком и Хуаном Грисом), в котором трёхмерное тело в оригинальной манере изображалось как ряд совмещённых воедино плоскостей. Пикассо много работал как график, скульптор, керамист и т. д. Вызвал к жизни массу подражателей и оказал исключительное влияние на развитие изобразительного искусства в XX веке. Согласно оценке Музея современного искусства (Нью-Йорк), Пикассо за свою жизнь создал около 20 тысяч работ."},{id:3,name:"Рембрандт Харменс ван Рейн",image:"../images/author_img/rembrandt.jpg",about:"Ре́мбрандт Ха́рменс ван Рейн (нидерл. Rembrandt Harmenszoon van Rijn, нидерландский: [ˈrɛmbrɑnt ˈɦɑrmə(n)soːn vɑn ˈrɛin]); (15 июля 1606 — 4 октября 1669) — голландский художник, гравёр, великий мастер светотени, крупнейший представитель золотого века голландской живописи. Он сумел воплотить в своих произведениях весь спектр человеческих переживаний с такой эмоциональной насыщенностью, которой до него не знало изобразительное искусство[10]. Работы Рембрандта, чрезвычайно разнообразные по жанровой принадлежности, открывают зрителю вневременной духовный мир человеческих переживаний и чувств"},{id:4,name:"Иван Константинович Айвазовский",image:"../images/author_img/Aivazovski.jpg",about:"Ива́н Константи́нович Айвазо́вский  — русский живописец-маринист армянского происхождения, коллекционер, меценат. Живописец Главного Морского штаба, действительный тайный советник, академик и почётный член Императорской Академии художеств в Санкт-Петербурге, почётный член Академий художеств в Амстердаме, Риме, Париже, Флоренции и Штутгарте. Наиболее выдающийся художник армянского происхождения XIX века[4][5]. Брат армянского историка и архиепископа Армянской Апостольской Церкви Габриэла Айвазовского. Будучи художником с мировой известностью, Иван Константинович Айвазовский предпочитал жить и работать на своей родине — в Крыму. Айвазовский наиболее известен своими морскими пейзажами, которые составляют больше половины его работ. Художник считается одним из величайших маринистов всех времён."},{id:5,name:"Эжен Делакруа",image:"../images/author_img/delakrua.jpg",about:"Фердина́н Викто́р Эже́н Делакруа́ (фр. Ferdinand Victor Eugène Delacroix; 26 апреля 1798 года, близ Парижа, Франция — 13 августа 1863 года, Париж, Франция) — французский живописец и график, предводитель романтического направления в европейской живописи. Он возглавил национальную французскую романтическую школу, отступив от четких правил академизма. Шёл к официальному признанию многие годы, и его искусство было признано лишь в конце его жизни, Делакруа стал кумиром многих молодых художников Франции."},{id:6,name:"Клод Моне",image:"../images/author_img/mone.jpg",about:"Клод Моне – художник, который не только стал одним из основателей импрессионизма, но и дал название этому направлению живописи. Именно из-за его картины, описывающий восход солнца в порту Гавра впоследствии так назовут новое художественное течение."},{id:7,name:"Сандро Боттичелли",image:"../images/author_img/boticcelli.jpg",about:"Са́ндро Боттиче́лли (итал. Sandro Botticelli, настоящее имя Алесса́ндро ди Мариа́но ди Ва́нни Филипе́пи (итал. Alessandro di Mariano di Vanni Filipepi); 1445 — 17 мая 1510) — итальянский живописец, один из значимых мастеров эпохи раннего итальянского Возрождения, представитель флорентийской школы живописи периода кватроченто."},{id:8,name:"Леонардо да Винчи",image:"../images/author_img/da_vinchi.jpg",about:"Леона́рдо ди сер Пье́ро да Ви́нчи (итал. Leonardo di ser Piero da Vinci; 15 апреля 1452, селение Анкиано, около городка Винчи, близ Флоренции — 2 мая 1519, замок Кло-Люсе, близ Амбуаза, Турень, Франция) — итальянский художник (живописец, скульптор, архитектор) и учёный (анатом, естествоиспытатель), изобретатель, писатель, музыкант, один из крупнейших представителей искусства Высокого Возрождения, яркий пример «универсального человека» (лат. homo universalis)."},{id:9,name:"Гюнтер Генслер",image:"../images/author_img/gunter.jpg",about:"Гюнтер Генслер, также Иоганн Гюнтер Генслер (нем. Johann Günther Gensler; 28 февраля 1803, Гамбург — 28 мая 1884, Гамбург) — немецкий художник, рисовальщик и график."},{id:10,name:"Дмитрий Ремез",image:"../images/author_img/eGk1dmRFpLg2.jpg",about:"Ремез Дмитрий Леонидович (13 июля 1995 г. Горки, Могилевская обл. Беларусь). Горецкий инженер и тунеядец. Творческие способности открылись достаточно поздно, поэтому на его счету всего несколько работ. Но это не помешало им стать признанными мировыми шедеврами исксства."},{id:11,name:"Джузеппе Арчимбольдо",image:"../images/author_img/arcimboldo.jpg",about:"Джузе́ппе Арчимбо́льдо (итал. Giuseppe Arcimboldo, лат. Josephus Arcimboldus; 1526 или 1527, Милан — 11 июля 1593, там же) — итальянский живописец и художник-декоратор, обычно причисляемый к представителям маньеризма. В его творчестве некоторые критики и художники XX века усматривали предвосхищение сюрреализма."}],h=[{id:1,name:"Менины",author:b[0],discription:"Полотно изображает сцену написания Веласкесом совместного портрета испанского короля Филиппа IV с его супругой и племянницей Марианной Австрийской в присутствии их дочери инфанты Маргариты Терезы со свитой. Сложная и загадочная композиция картины поднимает вопросы об иллюзии и реальности, а также о неопределённости связи между зрителем и персонажами.",image:"../images/paintngs/menini.jpg"},{id:2,name:"Постоянство памяти",author:b[1],discription:"Известна также как «Мягкие часы», «Утекающее время», «Твердость памяти» или «Стойкость памяти» или «Течение времени» или «Время». Эта небольшая картина (24х33 см) — вероятно, самая известная работа Дали. Размягченность висящих и стекающих часов — образ, выражающий уход от линейного понимания времени. Здесь присутствует и сам Дали в виде спящей головы, уже появлявшейся в «Траурной игре» и других картинах. Сообразно своему методу, художник объяснял происхождение сюжета размышлением о природе сыра камамбер; пейзаж с Порт Лигат был уже готов, так что написать картину было делом двух часов. Вернувшись из кино, куда она ходила в тот вечер, Гала совершенно правильно предсказала, что никто, раз увидев «Постоянство памяти», уже его не забудет. Написанию картины, по-видимому, могли способствовать ассоциации, возникавшие у Дали при виде плавленого сыра (на это указывает его высказывание)",image:"../images/paintngs/postoianstvo_pamiati.jpg"},{id:3,name:"Содомское самоудовлетворение невинной девы",author:b[1],discription:"Часто можно прочесть легенду о том, что эта работа — месть Дали его сестре в ответ на публикацию весьма нелицеприятной биографии художника. И действительно, главная героиня здесь похожа на «Фигуру у окна» (1925), для которой позировала Ана Мария. На самом же деле «молодая девственница» взята с фотографии из секс-журнала 1930-х годов. Картина долгое время входила в коллекцию «Особняка „Плейбой“», а в 2003 году была продана в Лондоне за 1,35 миллиона фунтов стерлингов.",image:"../images/paintngs/408943.jpg"},{id:4,name:"Герника",author:b[2],discription:"«Ге́рника» (исп. Guernica) — картина Пабло Пикассо, написанная в мае 1937 года по заказу правительства Испанской Республики для испанского павильона на Всемирной выставке в Париже. Тема картины, исполненной в манере кубизма и в чёрно-белой гамме, — бомбардировка Герники, произошедшая незадолго до этого, а также ужас апрельской испанской революции (1931) и Гражданской войны в Испании (1936—1939).",image:"../images/paintngs/gernika.jpg"},{id:5,name:"Старый гитарист",author:b[2],discription:"Картина была нарисована в 1903 году в честь друга художника, Касагемаса, после его смерти в результате самоубийства. Это было время, когда он проникся сочувствием к угнетенным и нищим. Отсюда и картина. Она была создана в Мадриде и нарисована в искаженном стиле, перенятом от Эль Греко. Картина изображает согнутого и слепого мужчину с большой коричневой гитарой в руках. Коричневый цвет - единственное отклонение от цветовой схемы всей картины. Не только физически, но и символически - гитара наполняет пространство вокруг старого мужчины, который забывает о своей слепоте и нищете, пока играет.",image:"../images/paintngs/gitarist.jpg"},{id:6,name:"Девушка перед зеркалом",author:b[2],discription:"Нарисованная в 1932 году, картина представляет портрет французской любовницы Пикассо - Марии Терезы Вальтер. Стиль, в котором нарисована картина, называется кубизм. Основная идея Кубизма - взять и разбить определённый объект на более простые части, а затем помочь показать его с разных точек зрения путем переноса этих частей на холст. Эта картина изображает тщеславие. На первый взгляд картина может показаться простой, но при ближайшем рассмотрении можно обнаружить множество символов, скрытых в разных элементах картины.",image:"../images/paintngs/pered_zercalom.jpg"},{id:7,name:"Возвращение блудного сына",author:b[3],discription:'Эту картину можно назвать самой большой из всех религиозных картин Рембрандта. В картине можно увидеть завершающую сцену притчи о возвращении блудного сына. На переднем плане две фигуры - отец и сын, который вернулся в отцовский дом. Отец рад видеть сына. Никто не знает кто остальные четыре человека на картине - некоторые предполагают, что это братья и сестры "блудного сына". Бытует мнение, что два человека справа - отец и сын перед уходом сына. Картина приобретена русским послом и дипломатом Дмитрием Голицыным во Франции, а затем отдана в Эрмитаж в 1766 году.',image:"../images/paintngs/vozvraschenie_bludnogo_sina.jpg"},{id:8,name:"Даная",author:b[3],discription:"Картина, которая пережила страшные разрушения, полученные после того, как ее облил кислотой и порезал ножом психически больной человек. Несколько лет тяжелых работ реставраторов Государственного Эрмитажа снова вернули ее зрителям. Эта картина — величайшая вершина в творчестве художника. Она изображает лежащую в постели Данаю, которую обольщает Юпитер, превратившись в золотой дождь. Золотой свет проникает в комнату и освещает роскошное тело женщины. Каждая ямочка на теле глубоко реалистична, кажется, что сквозь тонную кожу просвечиваются пульсирующие голубые жилки вен Данаи. Ее рука протянута в сторону дождя, голова слегка приподнята и обращена к свету. А из за занавеси выглядывает беспокойная служанка, готовая прийти на первый зов хозяйки.",image:"../images/paintngs/danaia.jpeg"},{id:9,name:"Ночной дозор",author:b[3],discription:"«Ночно́й дозо́р» (нидерл. Nachtwacht) — название, под которым известна знаменитая картина Рембрандта «Выступление стрелковой роты капитана Франса Баннинга Кока и лейтенанта Виллема ван Рёйтенбюрга». Картина написана в 1642 году. Это одна из самых известных и самая большая (379,5 × 453,5 см) картина «золотого века» голландской живописи. Рота ополченцев отправляется в поход. Мушкетеры пришли в движение, подбадриваемые барабанной дробью, вспугнувшей уличного пса: разворачивается знамя, оружие приводится в боевую готовность. Острые пики вздыбились, ополчение готово отправиться в бой. Среди солдат люди разного возраста, социального положения, уровня доходов. Всех объединяет патриотический порыв. Тщательно выписанные лица героев монументального полотна создают ощущение достоверности и полной реалистичности происходящего. Выполняя обычный для того времени заказ, предполагающий создание статичного группового портрета, автор разрушает границы жанра. Для него важно не только внешнее сходство героев, но и внутреннее настроение каждого из них. Полотно можно изучать несколько месяцев, открывая все новые связи, взаимоотношения героев. Полна работа и загадок.",image:"../images/paintngs/night_dozor.jpg"},{id:10,name:"Девятый вал",author:b[4],discription:"Раннее утро, первые лучи солнца, пробивающиеся, чтобы осветить воды моря, вздымающиеся почти до небес, и кажущееся совсем низким небо, которое практически слилось с высокими волнами. Воображению даже страшно представить, какая необузданная стихия бушевала ночью, и что пришлось пережить морякам с потерпевшего крушение судна. Описать «9 вал» Айвазовского не так легко, как кажется, ведь художник смог до восхищения тонко передать всю мощь, силу, величие и непередаваемую красоту морской стихии. На переднем плане этого буйства несколько спасшихся моряков, пытающихся удержаться на обломках мачт разбитого корабля. Они в отчаянии, но пытаются вместе противостоять огромной, вспененной волне, которая вот-вот на них обрушится. Удастся ли? Никто не знает…",image:"../images/paintngs/9val.jpg"},{id:11,name:"Свобода, ведущая народ",author:b[5],discription:"Делакруа создал картину по мотивам июльской революции 1830 года, положившей конец режиму Реставрации монархии Бурбонов. После многочисленных подготовительных эскизов ему потребовалось всего три месяца, чтобы написать картину. В письме брату 12 октября 1830 года Делакруа пишет: «Если я не сражался за Родину, то я хотя бы буду для неё писать». Впервые «Свобода, ведущая народ» была выставлена в Парижском салоне в мае 1831 года, где картина была восторженно принята и тотчас куплена государством. Из-за революционного сюжета полотно в течение приблизительно 25 лет не выставлялось на публике.",image:"../images/paintngs/svoboda.jpg"},{id:12,name:"Прогулка. Дама с зонтиком",author:b[6],discription:"Картина считается началом цикла картин, первая и главная из которых была написана именно в 1875 году. Моделью для портрета стала первая жена художника – Камилла. Работа считается крупнейшей в творческом периоде 1870-х. На полотне изображена Камилла вместе с сыном на диких полях вблизи Коломба и Женивье. Мадам Моне стоит полубоком, словно внезапно обнаружила зрителя. Ее платье развевается на ветру. Фигура слегка смещена вправо, что компенсируется наклоненным парасолем, в куполе которого отражается яркая луговая зелень. Чуть поодаль, видимый лишь по пояс, стоит сын Моне, словно внимательно взирающий на зрителя. Картина была написана с натуры на пленэре, скорее всего, за один сеанс. В период создания полотна в работах художника постепенно начинает преобладать тщательная проработка персонажей, вытесняющих собой пейзажи. Тем не менее, великий импрессионист не забывает передавать зрителю ускользающий солнечный свет, отчего картина выглядит словно живой. Особой изюминкой полотна можно считать расположение женского персонажа на холсте и низкую линию горизонта, что придает картине в целом монументальный вид – это довольно необычная подача для французского импрессиониста.",image:"../images/paintngs/dama_s_zontikom.jpg"},{id:13,name:"Впечатление. Восходящее солнце",author:b[6],discription:"Удивительное полотно рождает множество эмоций. Фрагментарное рассмотрение обнаруживает некую неряшливость – быстрая техника, мелкие мазки, фигуры едва намечены. Однако новаторство было в том, что художник не копировал реальность, не стремился к достоверности, а перенёс на полотно своё впечатление от увиденного. Мастер демонстрирует неразрывную взаимосвязь между синей водой и восходом солнца. Очень сложно визуально размежевать небо и море, к горизонту все краски сливаются. В центре внимания небольшой красный диск солнца и яркие всполохи, ложащиеся неровными линиями на ребристую поверхность моря.",image:"../images/paintngs/voshod_solnca.jpg"},{id:14,name:"Карта Ада",author:b[7],discription:"Боттичелли изобразил ад в виде воронки. Некрещёные младенцы и добродетельные нехристиане в лимбе преданы безболезненной скорби; сладострастники, попавшие во второй круг за похоть, терпят кручение и истязание ураганом; чревоугодники в третьем круге гниют под дождём и градом; скупцы и расточители перетаскивают тяжести с места на место в четвёртом круге; гневливые и ленивые вечно дерутся в болотах пятого круга; еретики и лжепророки лежат в раскалённых могилах шестого; всевозможные насильники, в зависимости от предмета надругательства, мучаются в разных поясах седьмого круга — кипят во рву из раскалённой крови, терзаемы гарпиями или изнывают в пустыне под огненным дождём; обманщики не доверившихся томятся в щелях восьмого круга: кто влип в кал зловонный, кто кипит в смоле, кто в цепи закован, кто мучим гадами, кто выпотрошен; и девятый круг уготовлен обманщикам. В числе последних — и вмёрзший в лёд Люцифер, который терзает в трёх своих пастях предателей величества земного и небесного (Иуду, Марка Юния Брута и Кассия — предателей Иисуса и Цезаря соответственно).",image:"../images/paintngs/carta_ada.jpg"},{id:15,name:"Венера и Марс",author:b[7],discription:"Любовь побеждает войну — это послание Боттичелли в «Венере и Марсе». Марс, бог войны, спит и безоружен, а Венера, богиня любви, бодрствует и бдительна. Боттичелли, скорее всего, находился под влиянием утраченной картины, изображающей брак Александра Македонского с Роксаной. На той картине купидоны играли с доспехами и копьем Александра, как на картине Боттичелли сатиры, которые крадут копье и доспехи Марса. Расположенная в лесу с привидениями, сцена имеет очень компактное ощущение перспективы.",image:"../images/paintngs/venera_mars.jpg"},{id:16,name:"Клевета",author:b[7],discription:"На полотне «Клевета» известного Сандро Боттичелли от 1495 года показан итальянский период эпохи Возрождения. Событие отнесено к 1495 году, посвящено другу автора Сеньягвиди. По сюжету из трактата Лукиана вынесена основная идея, формировавшая главную мысль автора. Название «О клевете» получено из-за настоящих описаний картины художником Древней Греции. Имя творца Апеллес. По простому замыслу, применению аллегорических высказываний происходит формирование творческой концепции. Царь Мидас сидел на троне, изображение ослиных ушей нужно понимать аллегорично, упрекать невежественное отношение, инородные высказывания и странные мнения. Красавица – девушка показывает Клевету, обличенную в вид невинности. Зависть коварно подстрекает данную особу. Спутница Клеветы — коварная представительница, несущая Обман, как следующее выражение сути замысла. Происходит возвеличивание пороков, а также показано Раскаяние в виде фигуры, облаченной в траурные одежды старой женщины, почти обнаженной. Выступление Истины, смотрящей наверх, впечатляет, возвышает.",image:"../images/paintngs/kleveta.jpg"},{id:17,name:"Искушение Христа",author:b[7],discription:"На фресковом полотне автора «Искушение Христа» от 1482 года можно увидеть лики разных людей. Находится творение в Ватиканской Сикстинской капелле. День 27 октября года 1480 был ознаменован собранием художников Флоренции Гирландайо, Росселли, направляющихся в Рим по приглашению для проектного участие. Примирительная цель стала основой творчества. Правитель Флоренции и папа Сикст 4 должны были встретиться. В весеннее время 1481 года начались работ в Сикстинской капелле. Участие принимал Перуджино. Тематика росписи заключалась в выборе исторической параллели между событиями жизни Моисея, Иисуса Христа. Присутствует символика преемственности Ветхого, Нового завета. Прочтение закона Моисея, послания Иисуса становится целью проекта. Происходит выбор Святого Петра, явившегося Римским епископом. Для воцарения законности наследования Святым Петром, его последователей был внедрен данный закон. Римские папы будут на официальных основаниях участвовать в проекте.",image:"../images/paintngs/iskufshenie_hrista.jpg"},{id:18,name:"Мадонна в скалах",author:b[8],discription:"В оригинале художник разработал сюжет по заказу францисканского монашеского Братства Непорочного зачатия Девы Марии для часовни церкви Сан- Франческо Гранде в Милане (сохранилась документация об условиях и всех стадиях работы). Живописец изобразил Мадонну, Младенца Христа, поднявшего руку в благословляющем жесте, маленького святого Иоанна и архангела, скорее всего Уриэля, ассоциирующегося с ним. В Национальной галерее хранятся две панели для этого сюжета с изображением музицирующих ангелов, но первоначально они принадлежали луврской картине. Иконография полотна богата и сложна. Возможно, Мадонна показана в скалах в связи с францисканской теологией, так как святой Франциск получил свои стигматы, молясь Христу возле горы с трещинами и расщелинами. И это только один скрытый смысл отдельного элемента, которых в работе множество.",image:"../images/paintngs/madonna_v_skalah.jpg"},{id:19,name:"Собрание членов Гамбургского союза художников",author:b[9],discription:"Просто картина Гюнтера",image:"../images/paintngs/sobranie_hudozhnikov.jpg"},{id:20,name:"Ищадие",author:b[10],discription:"Первая работа автора, которая моментально стала шедевром искусства. Казалось бы, на картине изображен простой кот, но в его бездонные глаза множно смотерть вечно. Так же очень удивительно выглядят его лапы. Но больше всего в глаза бросается шерсть животного. Она выполнена по особой технологии, которую далеко не многие художники могли применить в своих картинах. К большому сожалению, этот шедевр был утерян в период великой чистки комнаты. ",image:"../images/paintngs/kot.jpg"},{id:21,name:"Библиотекарь",author:b[11],discription:"Картина представляет собой набор предметов, характерных для профессии библиотекаря, скомпонованных таким образом, чтобы они складывались в выразительный и запоминающийся портрет. Основа изображения – многочисленные книги разных размеров и толщины. Они уложены так, чтобы своими страницами и корешками формировать внешний облик человека. Раскрытая книга с топорщащимися страницами – это волосы; ленты, которыми завязывался томик, образуют ухо; небольшая книжка, расположенная корешком под углом – нос библиотекаря. Его торс сформирован сложенными стопкой книгами, а лежащая на плоскости рука – это несколько книг большого размера, уложенных так, чтобы имитировать плечо и предплечье. Вложенные в книжку закладки успешно подражают пальцам. Завершает форму крупная драпировка на заднем плане, накинутая на «плечо» библиотекаря как плащ. Цветовая гамма картины светлая, изящная. Охристый нейтральный фон, серовато-голубоватая «дымная» ткань драпировки, золотисто-бежевые книги, крупный том и несколько мелких элементов абрикосового оттенка придают полотну воздушность и легкость.",image:"../images/paintngs/bibliotekar.jpg"},{id:22,name:"Юрист",author:b[11],discription:" Установлено, что изображение юриста на знаменитом полотне художника – это не абстракция, а известный человек, Ульрих Цазиус, адвокат при дворе императора Максимилиана II. Тот факт, что аллегоричное изображение – это портрет конкретного человека, только добавляет ценности уникальной работе. На полотне изображен пожилой мужчина в профиль. Он одет в красновато-коричневый плащ с богатой отделкой рыжеватым мехом. Под плащом у него темный узорчатый камзол с белым пышным воротничком. При ближайшем рассмотрении наряд оказывается черной папкой с кипой торчащих из нее бумаг. Основа всего этого – стопка массивных книг по юриспруденции. Но самое интересное представляет собой лицо персонажа. Оно полностью составлено из различных продуктов: лоб и щеки – это половинка отварной курицы, нижняя челюсть – это целая рыба, рот образован рыбьей головой, а вот нос и даже глаз сформирован из тушки цыпленка с головой и клювом. Его темные лапки изображают франтовато подвитые усы юриста. Оригинальное изображение лица создает исключительно выразительный и запоминающийся образ. В этой работе использованы скупые, но очень эффектные методы изображения, полностью соответствующие серьезности профессии персонажа.",image:"../images/paintngs/lawer.jpg"}],v=()=>{for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild)},f=(e,t)=>{let n={},a=[];for(let i=0;i<t;++i){let t=Math.floor(Math.random()*(e-i));a.push((t in n?n[t]:t)+0);let r=e-i-1;n[t]=r in n?n[r]:r}return a},x=(e,t)=>{let n;const a=()=>{n=f(e,4),n.includes(t)&&a()};return a(),n.push(t),n.sort((()=>Math.round(100*Math.random())-50))},y=(e,t,n,a)=>{for(let i=0;i<5;i++){const r=document.createElement("li");e.append(r),r.classList.add(t),document.querySelectorAll("."+t)[i].innerHTML=a[n[i]].name,"painter-name"===t&&(r.id=n[i])}};let L=f(h.length,10),w=0,k={painting:!1,painter:!1},j={painting:5,painter:5,all:0};const E=()=>{document.querySelector(".painting-img").style.backgroundImage=`url(${h[L[w]].image.slice(1)})`;const e=document.querySelector(".answers-paintings");for(;e.firstChild;)e.removeChild(e.firstChild);let t=x(h.length,L[w]);y(e,"painting-name",t,h);const n=document.querySelector(".answers-painters");for(;n.firstChild;)n.removeChild(n.firstChild);let a=x(b.length,b.findIndex((e=>e.name===h[L[w]].author.name)));console.log(a,b.length,b.findIndex((e=>e.name===h[L[w]].author.name))),y(n,"painter-name",a,b),n.insertAdjacentHTML("beforeend","<button class = painter-about-btn>О художнике</button>"),S(),document.querySelector(".painter-about-btn").addEventListener("click",q)},q=()=>{const e=document.querySelector(".painter-about");e.classList.add("painter-about-active"),document.addEventListener("click",(t=>{t.target!==popup&&e.classList.remove("painter-about-active")}))},S=()=>{const e=document.querySelectorAll(".painter-name");console.log(e[0]),e.forEach((e=>e.addEventListener("click",(()=>{console.log(e.id);const t=document.querySelector(".painter-about-img"),n=document.querySelector(".painter-about-text");t.style.backgroundImage=`url(${b[e.id].image})`,n.innerHTML=`${b[e.id].about}`}))))},M=()=>{const e=document.querySelectorAll(".painting-name"),t=document.querySelectorAll(".painter-name");e.forEach((e=>{e.addEventListener("click",(()=>{console.log(e,h[L[w]].author.name),k.painting||(e.innerHTML===h[L[w]].name?(k.painting=!0,e.classList.add("right-answer"),j.all+=j.painting,T(),j.painting=5,H(),console.log("score:",j.all)):(e.classList.add("wrong-answer"),0!==j.painting&&(j.painting-=1)))}))})),t.forEach((e=>{e.addEventListener("click",(()=>{console.log(t,e.innerHTML),k.painter||(e.innerHTML===h[L[w]].author.name?(e.classList.add("right-answer"),k.painter=!0,j.all+=j.painter,T(),j.painter=5,H()):(e.classList.add("wrong-answer"),0!==j.painter&&(j.painter-=1)))}))}))},T=()=>{document.querySelector(".score-num").innerHTML=j.all},_=()=>{w+=1,document.querySelector(".question").innerHTML=`${w+1} вопрос из 10`,k.painting=!1,k.painter=!1,E(),M();const e=document.querySelector(".next-question-btn"),t=document.querySelector(".painting-about-btn");t.classList.remove("painting-about-btn-active"),t.removeEventListener("click",z),e.removeEventListener("click",_),e.classList.add("next-question-btn-disactive")},H=()=>{if(k.painter&&k.painting){const e=document.querySelector(".next-question-btn");e.classList.remove("next-question-btn-disactive");const t=document.querySelector(".painting-about-btn");t.classList.add("painting-about-btn-active"),t.addEventListener("click",z),9===w&&(e.innerHTML="Показать результаты",e.addEventListener("click",I)),e.addEventListener("click",_)}},z=()=>{const e=document.querySelector(".painting-about-window");e.innerHTML=h[L[w]].discription,e.classList.add("painting-popup-active"),document.addEventListener("click",(t=>{t.target===e&&e.classList.remove("painting-popup-active")}))},A=()=>{let e=document.createElement("div");document.body.append(e),e.classList.add("menu"),e.insertAdjacentHTML("beforeend","<button class = start-btn>Старт</buttonp>"),e.firstChild.addEventListener("click",C)},C=(document.querySelector(".start-btn"),()=>{v(),L=f(h.length,10),w=0,k={painting:!1,painter:!1},j={painting:5,painter:5,all:0},(()=>{let e=document.createElement("header");document.body.append(e);const t=document.querySelector("header");let n=document.createElement("div");t.append(n),n.classList.add("question"),n.innerHTML="1 вопрос из 10";let a=document.createElement("div");t.append(a),a.classList.add("score");let i=["score-text","score-num"];for(let e=0;e<2;e++){let t=document.createElement("div");a.append(t),t.classList.add(`${i[e]}`),0===e&&(t.innerHTML="Очки:")}})(),(()=>{let e=document.createElement("main");document.body.append(e);const t=document.querySelector("main"),n=document.createElement("div");t.append(n),n.classList.add("painting");const a=document.querySelector(".painting"),i=document.createElement("div");a.append(i),i.classList.add("painting-img");const r=document.createElement("div");a.append(r),r.classList.add("painting-about"),r.insertAdjacentHTML("beforeend","<div class = painting-about-window></div>"),r.insertAdjacentHTML("beforeend","<button class = painting-about-btn>О картине</button>");const o=document.createElement("div");t.append(o),o.classList.add("answers");const s=document.querySelector(".answers"),c=document.createElement("div");o.append(c),c.classList.add("answer-variant");const d=["painting-variant","painter-variant"],p=["Картина","Художник"];for(let e=0;e<2;e++){const t=document.createElement("div");c.append(t),t.classList.add(`${d[e]}`,"variant-btn"),t.innerHTML=p[e],0===e&&t.classList.add("variant-btn-active")}const l=document.createElement("ul");s.append(l),l.classList.add("answers-paintings");const u=document.createElement("ul");s.append(u),u.classList.add("answers-painters","answers-disactive");const m=document.createElement("div");t.append(m),m.classList.add("painter-about");const g=document.querySelector(".painter-about"),b=document.createElement("div");g.append(b),b.classList.add("painter-about-img");const h=document.createElement("div");g.append(h),h.classList.add("painter-about-text");const v=document.createElement("button");t.append(v),v.classList.add("next-question-btn","next-question-btn-disactive"),v.innerHTML="Следующий вопрос"})(),E(),(()=>{const e=document.querySelector(".painting-variant"),t=document.querySelector(".painter-variant"),n=document.querySelector(".answers-paintings"),a=document.querySelector(".answers-painters");t.addEventListener("click",(()=>{e.classList.contains("variant-btn-active")&&(e.classList.remove("variant-btn-active"),t.classList.add("variant-btn-active"),n.classList.add("answers-disactive"),a.classList.remove("answers-disactive"))})),e.addEventListener("click",(()=>{t.classList.contains("variant-btn-active")&&(t.classList.remove("variant-btn-active"),e.classList.add("variant-btn-active"),a.classList.add("answers-disactive"),n.classList.remove("answers-disactive"))}))})(),M()}),I=()=>{v(),(()=>{const e=document.createElement("div");document.body.append(e),e.classList.add("finish");const t=document.createElement("div");e.append(t),t.classList.add("finish-text");let n=`Поздравляем, вы прошли викторину и получили ${j.all} баллов! `;j.all>90?t.innerHTML=n+"Вы отлично знакомы с произведениями искусства! Поробуете повторить свой результат? :)":j.all>30?t.innerHTML=n+"Вы неплохо знакомы с произведениями искусства! Поробуете улучшить свой результат? :)":t.innerHTML=n+"Вы - неуч! Но не отчаивайтесь, у Вас все получится!",e.insertAdjacentHTML("beforeend","<button class = finish-btn>Вернуться в меню</buttonp>"),document.querySelector(".finish-btn").addEventListener("click",(()=>{v(),A()}))})()};A()})()})();