/* "Plan your night" routes for the Around the Corner guide.
   Each stop: [type, place name, minutes spent there, minutes walking to the next stop].
   Place names match the guide's venues, or the extra walk and show spots below. */

const PLAN_SPOTS = {
  "Washington Square Park":            {a:"Washington Square Park"},
  "Washington Mews":                   {a:"Washington Mews"},
  "Jefferson Market & Bleecker Street":{a:"425 6th Ave"},
  "Bleecker & MacDougal":              {a:"Bleecker St & MacDougal St"},
  "Christopher Street Pier":           {a:"Christopher Street Pier, Hudson River Park"},
  "Blue Note":                         {a:"131 W 3rd St",web:"https://www.bluenotejazz.com"},
  "Village Vanguard":                  {a:"178 7th Ave S",web:"https://villagevanguard.com"},
  "Comedy Cellar":                     {a:"117 MacDougal St",web:"https://www.comedycellar.com"}
};

const PLANS = {
  classic:{
    3:{start:"18:00",stops:[
      ["walk","Washington Square Park",25,8],
      ["dinner","Minetta Tavern",90,3],
      ["show","Blue Note",60,0]]},
    6:{start:"14:00",stops:[
      ["walk","Washington Square Park",30,6],
      ["lunch","Olio e Più",60,6],
      ["walk","Jefferson Market & Bleecker Street",60,5],
      ["drinks","Bar Pisellino",30,1],
      ["dinner","Via Carota",90,6],
      ["show","Village Vanguard",75,0]]}},
  date:{
    3:{start:"18:30",stops:[
      ["walk","Washington Square Park",15,6],
      ["drinks","Dante NYC",30,10],
      ["dinner","One if by Land, Two if by Sea",90,3],
      ["nightcap","Little Branch",40,0]]},
    6:{start:"15:00",stops:[
      ["walk","Washington Mews",30,12],
      ["lunch","Buvette",60,12],
      ["walk","Christopher Street Pier",45,8],
      ["drinks","Employees Only",45,5],
      ["dinner","L'Artusi",90,5],
      ["nightcap","Vin Sur Vingt",40,0]]}},
  laughs:{
    3:{start:"19:00",stops:[
      ["walk","Bleecker & MacDougal",15,3],
      ["dinner","Tacombi",50,5],
      ["show","Comedy Cellar",90,2],
      ["drinks","Dante NYC",25,0]]},
    6:{start:"16:00",stops:[
      ["walk","Washington Square Park",30,6],
      ["coffee","Caffe Reggio",30,3],
      ["walk","Bleecker & MacDougal",45,5],
      ["dinner","Carbone",90,5],
      ["show","Comedy Cellar",90,8],
      ["nightcap","Analogue",40,0]]}}
};

const PLAN_TXT = {
en:{ui:{plan_eyebrow:"New · Plan your night",plan_title:"Plan your night",plan_sub:"Choose how much time you have and the mood. We'll map out a walkable route, stop by stop, all in the Village.",plan_h3:"3 hours",plan_h6:"6 hours",plan_start:"Start at",plan_stops:"{n} stops",plan_route:"Open full route in Maps",plan_save:"Save these spots",plan_saved:"Saved to your list!",plan_note:"Book dinner and shows ahead, and check set times on the venue's site.",plan_cta:"Plan my night",plan_cta_sub:"Ready-made 3- or 6-hour routes",plan_walkto:"{n} min walk",plan_mins:"{n} min",
  st_walk:"Walk",st_lunch:"Lunch",st_coffee:"Coffee",st_dinner:"Dinner",st_drinks:"Drinks",st_show:"Show",st_nightcap:"Nightcap"},
 vibes:{classic:"Village classics",date:"Date night",laughs:"Laughs & late night"},
 notes:{
  classic3:["Start under the Arch, then loop past the fountain and the street performers.","Old New York at its best. Order the Black Label burger.","World-class jazz in an intimate room around the corner. Book the early set."],
  classic6:["Begin at the Arch and people-watch by the fountain.","Neapolitan pizza at a sunny sidewalk table.","Wander past Jefferson Market Library, then west along Bleecker Street to Grove Street.","Italian aperitivo hour: grab a spritz at the bar.","Right next door. Put your name down early; it's worth the wait.","The legendary jazz basement, open since 1935. Book ahead."],
  date3:["Watch the Arch light up at dusk.","Start with a Negroni at one of the world's great bars.","Candlelight, a piano and fireplaces. Reserve ahead.","Head underground for live jazz and a bespoke cocktail."],
  date6:["Start on the cobblestones of Washington Mews, then cross the square.","A tiny, romantic French café for a long, lazy lunch.","Walk to the Hudson River for sunset views from the pier.","Classic cocktails from white-jacketed bartenders.","Pasta, a serious wine list and olive oil cake.","End with a candlelit glass of French wine."],
  laughs3:["Soak up the buzz where Bleecker Street meets MacDougal.","Tacos and margaritas, quick and colorful.","New York's famous comedy club, where big names drop in. Book ahead.","A Negroni a few doors up MacDougal."],
  laughs6:["Catch the musicians and chess players in the park.","Espresso at the café open since 1927.","Browse the shops and bakeries along Bleecker Street.","Old-school Italian glamour. Book well ahead.","New York's famous comedy club, where big names drop in. Book ahead.","A nightcap with records spinning, back on 8th Street."]}},

es:{ui:{plan_eyebrow:"Nuevo · Planea tu noche",plan_title:"Planea tu noche",plan_sub:"Elige cuánto tiempo tienes y el ambiente. Te armamos una ruta a pie, parada por parada, todo en el Village.",plan_h3:"3 horas",plan_h6:"6 horas",plan_start:"Empieza a las",plan_stops:"{n} paradas",plan_route:"Abrir ruta completa en Maps",plan_save:"Guardar estos lugares",plan_saved:"¡Guardados en tu lista!",plan_note:"Reserva la cena y los espectáculos con antelación, y consulta los horarios en la web del local.",plan_cta:"Planea mi noche",plan_cta_sub:"Rutas listas de 3 o 6 horas",plan_walkto:"{n} min a pie",plan_mins:"{n} min",
  st_walk:"Paseo",st_lunch:"Almuerzo",st_coffee:"Café",st_dinner:"Cena",st_drinks:"Copas",st_show:"Espectáculo",st_nightcap:"Última copa"},
 vibes:{classic:"Clásicos del Village",date:"Noche romántica",laughs:"Risas y trasnoche"},
 notes:{
  classic3:["Empieza bajo el Arco y da una vuelta por la fuente y los artistas callejeros.","Lo mejor del viejo Nueva York. Pide la hamburguesa Black Label.","Jazz de primer nivel en una sala íntima a la vuelta de la esquina. Reserva el primer pase."],
  classic6:["Empieza en el Arco y mira pasar a la gente junto a la fuente.","Pizza napolitana en una mesa soleada en la acera.","Pasea frente a la Jefferson Market Library y sigue hacia el oeste por Bleecker Street hasta Grove Street.","Hora del aperitivo italiano: pide un spritz en la barra.","Justo al lado. Apúntate en la lista temprano; vale la pena esperar.","El legendario sótano de jazz, abierto desde 1935. Reserva con antelación."],
  date3:["Mira cómo se ilumina el Arco al atardecer.","Empieza con un Negroni en uno de los mejores bares del mundo.","Velas, un piano y chimeneas. Reserva con antelación.","Baja al subsuelo para jazz en vivo y un cóctel a medida."],
  date6:["Empieza en los adoquines de Washington Mews y luego cruza la plaza.","Un diminuto y romántico café francés para un almuerzo largo y sin prisa.","Camina hasta el río Hudson para ver el atardecer desde el muelle.","Cócteles clásicos de bartenders con chaqueta blanca.","Pasta, una carta de vinos seria y pastel de aceite de oliva.","Termina con una copa de vino francés a la luz de las velas."],
  laughs3:["Siente el ambiente donde Bleecker Street se cruza con MacDougal.","Tacos y margaritas, rápido y colorido.","El famoso club de comedia de Nueva York, donde aparecen grandes nombres. Reserva con antelación.","Un Negroni a pocos pasos, subiendo por MacDougal."],
  laughs6:["Disfruta de los músicos y los jugadores de ajedrez del parque.","Un espresso en el café abierto desde 1927.","Recorre las tiendas y panaderías de Bleecker Street.","Glamour italiano de la vieja escuela. Reserva con mucha antelación.","El famoso club de comedia de Nueva York, donde aparecen grandes nombres. Reserva con antelación.","Una última copa con vinilos sonando, de vuelta en la calle 8."]}},

fr:{ui:{plan_eyebrow:"Nouveau · Planifiez votre soirée",plan_title:"Planifiez votre soirée",plan_sub:"Choisissez votre temps disponible et l'ambiance. On trace un parcours à pied, étape par étape, dans le Village.",plan_h3:"3 heures",plan_h6:"6 heures",plan_start:"Départ à",plan_stops:"{n} étapes",plan_route:"Ouvrir l'itinéraire dans Maps",plan_save:"Enregistrer ces adresses",plan_saved:"Ajoutées à votre liste !",plan_note:"Réservez dîner et spectacles à l'avance, et vérifiez les horaires sur le site du lieu.",plan_cta:"Planifier ma soirée",plan_cta_sub:"Parcours prêts de 3 ou 6 heures",plan_walkto:"{n} min à pied",plan_mins:"{n} min",
  st_walk:"Balade",st_lunch:"Déjeuner",st_coffee:"Café",st_dinner:"Dîner",st_drinks:"Un verre",st_show:"Spectacle",st_nightcap:"Dernier verre"},
 vibes:{classic:"Classiques du Village",date:"Soirée en amoureux",laughs:"Rires et nuit blanche"},
 notes:{
  classic3:["Commencez sous l'Arche, puis faites le tour de la fontaine et des artistes de rue.","Le meilleur du vieux New York. Commandez le burger Black Label.","Du jazz de classe mondiale dans une salle intime, juste à côté. Réservez le premier set."],
  classic6:["Commencez à l'Arche et regardez passer les gens près de la fontaine.","Pizza napolitaine à une table ensoleillée en terrasse.","Passez devant la Jefferson Market Library, puis filez vers l'ouest sur Bleecker Street jusqu'à Grove Street.","L'heure de l'aperitivo : un spritz au comptoir.","Juste à côté. Inscrivez-vous tôt sur la liste, ça vaut l'attente.","La légendaire cave de jazz, ouverte depuis 1935. Réservez à l'avance."],
  date3:["Regardez l'Arche s'illuminer au crépuscule.","Commencez par un Negroni dans l'un des meilleurs bars du monde.","Chandelles, piano et cheminées. Réservez à l'avance.","Descendez au sous-sol pour du jazz live et un cocktail sur mesure."],
  date6:["Commencez sur les pavés de Washington Mews, puis traversez la place.","Un minuscule café français romantique pour un long déjeuner tranquille.","Marchez jusqu'à l'Hudson pour le coucher de soleil depuis la jetée.","Des cocktails classiques servis par des barmen en veste blanche.","Des pâtes, une belle carte des vins et le gâteau à l'huile d'olive.","Terminez par un verre de vin français à la lueur des bougies."],
  laughs3:["Profitez de l'animation au croisement de Bleecker Street et MacDougal.","Tacos et margaritas, rapide et coloré.","Le célèbre club de comédie de New York, où passent de grands noms. Réservez à l'avance.","Un Negroni à quelques portes de là, sur MacDougal."],
  laughs6:["Écoutez les musiciens et regardez les joueurs d'échecs dans le parc.","Un espresso au café ouvert depuis 1927.","Flânez parmi les boutiques et boulangeries de Bleecker Street.","Le glamour italien à l'ancienne. Réservez longtemps à l'avance.","Le célèbre club de comédie de New York, où passent de grands noms. Réservez à l'avance.","Un dernier verre au son des vinyles, de retour sur la 8th Street."]}},

it:{ui:{plan_eyebrow:"Novità · Organizza la serata",plan_title:"Organizza la serata",plan_sub:"Scegli quanto tempo hai e l'atmosfera. Ti tracciamo un percorso a piedi, tappa per tappa, tutto nel Village.",plan_h3:"3 ore",plan_h6:"6 ore",plan_start:"Inizio alle",plan_stops:"{n} tappe",plan_route:"Apri il percorso in Maps",plan_save:"Salva questi posti",plan_saved:"Salvati nella tua lista!",plan_note:"Prenota cena e spettacoli in anticipo e controlla gli orari sul sito del locale.",plan_cta:"Organizza la mia serata",plan_cta_sub:"Percorsi pronti da 3 o 6 ore",plan_walkto:"{n} min a piedi",plan_mins:"{n} min",
  st_walk:"Passeggiata",st_lunch:"Pranzo",st_coffee:"Caffè",st_dinner:"Cena",st_drinks:"Drink",st_show:"Spettacolo",st_nightcap:"Bicchiere della staffa"},
 vibes:{classic:"Classici del Village",date:"Serata romantica",laughs:"Risate e notte fonda"},
 notes:{
  classic3:["Inizia sotto l'Arco, poi fai un giro intorno alla fontana tra gli artisti di strada.","Il meglio della vecchia New York. Ordina il burger Black Label.","Jazz di livello mondiale in una sala intima dietro l'angolo. Prenota il primo set."],
  classic6:["Parti dall'Arco e guarda la gente passare vicino alla fontana.","Pizza napoletana a un tavolino al sole.","Passeggia davanti alla Jefferson Market Library, poi verso ovest lungo Bleecker Street fino a Grove Street.","L'ora dell'aperitivo: uno spritz al bancone.","Proprio accanto. Lascia il nome presto: vale l'attesa.","La leggendaria cantina del jazz, aperta dal 1935. Prenota in anticipo."],
  date3:["Guarda l'Arco illuminarsi al tramonto.","Inizia con un Negroni in uno dei migliori bar del mondo.","Candele, un pianoforte e camini. Prenota in anticipo.","Scendi nel sottosuolo per jazz dal vivo e un cocktail su misura."],
  date6:["Parti dal selciato di Washington Mews, poi attraversa la piazza.","Un minuscolo e romantico caffè francese per un pranzo lungo e rilassato.","Cammina fino all'Hudson per il tramonto dal molo.","Cocktail classici da bartender in giacca bianca.","Pasta, una carta dei vini importante e torta all'olio d'oliva.","Chiudi con un calice di vino francese a lume di candela."],
  laughs3:["Respira l'atmosfera dove Bleecker Street incrocia MacDougal.","Tacos e margarita, veloce e colorato.","Il famoso comedy club di New York, dove passano grandi nomi. Prenota in anticipo.","Un Negroni a pochi passi, salendo su MacDougal."],
  laughs6:["Goditi i musicisti e i giocatori di scacchi del parco.","Un espresso nel caffè aperto dal 1927.","Curiosa tra negozi e panetterie di Bleecker Street.","Glamour italiano d'altri tempi. Prenota con largo anticipo.","Il famoso comedy club di New York, dove passano grandi nomi. Prenota in anticipo.","Un ultimo bicchiere con i vinili che girano, di nuovo sull'8th Street."]}},

de:{ui:{plan_eyebrow:"Neu · Plane deinen Abend",plan_title:"Plane deinen Abend",plan_sub:"Wähle, wie viel Zeit du hast und welche Stimmung. Wir planen eine Route zu Fuß, Stopp für Stopp, alles im Village.",plan_h3:"3 Stunden",plan_h6:"6 Stunden",plan_start:"Start um",plan_stops:"{n} Stopps",plan_route:"Ganze Route in Maps öffnen",plan_save:"Diese Orte merken",plan_saved:"In deiner Liste gespeichert!",plan_note:"Abendessen und Shows vorab reservieren und Spielzeiten auf der Website prüfen.",plan_cta:"Plane meinen Abend",plan_cta_sub:"Fertige Routen für 3 oder 6 Stunden",plan_walkto:"{n} Min. zu Fuß",plan_mins:"{n} Min.",
  st_walk:"Spaziergang",st_lunch:"Mittagessen",st_coffee:"Kaffee",st_dinner:"Abendessen",st_drinks:"Drinks",st_show:"Show",st_nightcap:"Absacker"},
 vibes:{classic:"Village-Klassiker",date:"Date Night",laughs:"Lachen & lange Nacht"},
 notes:{
  classic3:["Starte unter dem Arch und drehe eine Runde um den Brunnen und die Straßenkünstler.","Das alte New York von seiner besten Seite. Bestelle den Black-Label-Burger.","Weltklasse-Jazz in einem intimen Raum gleich um die Ecke. Reserviere das frühe Set."],
  classic6:["Beginne am Arch und beobachte die Leute am Brunnen.","Neapolitanische Pizza an einem sonnigen Tisch draußen.","Schlendere an der Jefferson Market Library vorbei und dann westlich die Bleecker Street entlang bis zur Grove Street.","Aperitivo-Zeit: ein Spritz an der Bar.","Gleich nebenan. Früh auf die Liste setzen lassen, das Warten lohnt sich.","Der legendäre Jazzkeller, seit 1935 geöffnet. Unbedingt reservieren."],
  date3:["Sieh zu, wie der Arch in der Dämmerung erleuchtet wird.","Starte mit einem Negroni in einer der besten Bars der Welt.","Kerzenlicht, ein Klavier und Kamine. Unbedingt reservieren.","Ab in den Untergrund für Live-Jazz und einen maßgeschneiderten Cocktail."],
  date6:["Beginne auf dem Kopfsteinpflaster der Washington Mews und überquere dann den Platz.","Ein winziges, romantisches französisches Café für ein langes, gemütliches Mittagessen.","Spaziere zum Hudson River und genieße den Sonnenuntergang vom Pier.","Klassische Cocktails von Barkeepern in weißen Jacketts.","Pasta, eine ernstzunehmende Weinkarte und Olivenölkuchen.","Zum Abschluss ein Glas französischer Wein bei Kerzenlicht."],
  laughs3:["Spüre das Treiben, wo die Bleecker Street auf die MacDougal trifft.","Tacos und Margaritas, schnell und bunt.","New Yorks berühmter Comedy-Club, in dem große Namen spontan auftreten. Unbedingt reservieren.","Ein Negroni ein paar Türen weiter auf der MacDougal."],
  laughs6:["Lausche den Musikern und schau den Schachspielern im Park zu.","Espresso im Café, das seit 1927 geöffnet ist.","Stöbere in den Läden und Bäckereien der Bleecker Street.","Italienischer Glamour alter Schule. Lange im Voraus reservieren.","New Yorks berühmter Comedy-Club, in dem große Namen spontan auftreten. Unbedingt reservieren.","Ein Absacker mit Schallplattenmusik, zurück an der 8th Street."]}},

pt:{ui:{plan_eyebrow:"Novo · Planeje sua noite",plan_title:"Planeje sua noite",plan_sub:"Escolha quanto tempo você tem e o clima. Montamos um roteiro a pé, parada por parada, tudo no Village.",plan_h3:"3 horas",plan_h6:"6 horas",plan_start:"Começar às",plan_stops:"{n} paradas",plan_route:"Abrir roteiro completo no Maps",plan_save:"Salvar estes lugares",plan_saved:"Salvos na sua lista!",plan_note:"Reserve o jantar e os shows com antecedência e confira os horários no site do local.",plan_cta:"Planejar minha noite",plan_cta_sub:"Roteiros prontos de 3 ou 6 horas",plan_walkto:"{n} min a pé",plan_mins:"{n} min",
  st_walk:"Passeio",st_lunch:"Almoço",st_coffee:"Café",st_dinner:"Jantar",st_drinks:"Drinks",st_show:"Show",st_nightcap:"Saideira"},
 vibes:{classic:"Clássicos do Village",date:"Noite a dois",laughs:"Risadas e madrugada"},
 notes:{
  classic3:["Comece sob o Arco e dê uma volta pela fonte e pelos artistas de rua.","O melhor da velha Nova York. Peça o hambúrguer Black Label.","Jazz de nível mundial em uma sala intimista logo ali. Reserve a primeira sessão."],
  classic6:["Comece no Arco e observe o movimento perto da fonte.","Pizza napolitana em uma mesinha ensolarada na calçada.","Passe pela Jefferson Market Library e siga para oeste pela Bleecker Street até a Grove Street.","Hora do aperitivo italiano: peça um spritz no balcão.","Bem ao lado. Coloque seu nome na lista cedo; vale a espera.","O lendário porão do jazz, aberto desde 1935. Reserve com antecedência."],
  date3:["Veja o Arco se iluminar ao entardecer.","Comece com um Negroni em um dos melhores bares do mundo.","Velas, um piano e lareiras. Reserve com antecedência.","Desça ao subsolo para jazz ao vivo e um coquetel sob medida."],
  date6:["Comece pelos paralelepípedos da Washington Mews e depois atravesse a praça.","Um café francês minúsculo e romântico para um almoço longo e tranquilo.","Caminhe até o rio Hudson para ver o pôr do sol do píer.","Coquetéis clássicos de bartenders de paletó branco.","Massas, uma carta de vinhos séria e bolo de azeite.","Termine com uma taça de vinho francês à luz de velas."],
  laughs3:["Sinta o agito onde a Bleecker Street encontra a MacDougal.","Tacos e margaritas, rápido e colorido.","O famoso clube de comédia de Nova York, onde grandes nomes aparecem de surpresa. Reserve com antecedência.","Um Negroni a poucos passos, subindo a MacDougal."],
  laughs6:["Curta os músicos e os jogadores de xadrez do parque.","Um espresso no café aberto desde 1927.","Explore as lojas e padarias da Bleecker Street.","Glamour italiano das antigas. Reserve com muita antecedência.","O famoso clube de comédia de Nova York, onde grandes nomes aparecem de surpresa. Reserve com antecedência.","Uma saideira ao som de vinis, de volta à 8th Street."]}},

zh:{ui:{plan_eyebrow:"新功能 · 规划你的夜晚",plan_title:"规划你的夜晚",plan_sub:"选择你有多少时间和想要的氛围，我们为你规划一条步行路线，一站接一站，全在格林威治村。",plan_h3:"3 小时",plan_h6:"6 小时",plan_start:"开始时间",plan_stops:"{n} 站",plan_route:"在地图中打开完整路线",plan_save:"收藏这些地点",plan_saved:"已加入收藏！",plan_note:"晚餐和演出请提前预订，并在官网确认场次时间。",plan_cta:"规划我的夜晚",plan_cta_sub:"现成的 3 或 6 小时路线",plan_walkto:"步行 {n} 分钟",plan_mins:"{n} 分钟",
  st_walk:"散步",st_lunch:"午餐",st_coffee:"咖啡",st_dinner:"晚餐",st_drinks:"小酌",st_show:"演出",st_nightcap:"睡前酒"},
 vibes:{classic:"村中经典",date:"约会之夜",laughs:"欢笑与深夜"},
 notes:{
  classic3:["从拱门下出发，绕着喷泉和街头艺人走一圈。","老纽约的精华所在。点一份 Black Label 汉堡。","就在转角的私密空间里欣赏世界级爵士乐。建议预订早场。"],
  classic6:["从拱门出发，在喷泉边看看人来人往。","坐在阳光下的街边餐桌享用那不勒斯披萨。","经过杰斐逊市场图书馆，再沿布利克街向西走到格罗夫街。","意式开胃酒时间：在吧台点一杯 Spritz。","就在隔壁。早点登记排队，值得等待。","自 1935 年营业的传奇爵士地下室。请提前预订。"],
  date3:["看拱门在黄昏时分亮起灯光。","先在世界顶级酒吧之一来一杯内格罗尼。","烛光、钢琴与壁炉。请提前预订。","走进地下，享受现场爵士乐和量身调制的鸡尾酒。"],
  date6:["从华盛顿马厩街的鹅卵石路出发，再穿过广场。","小巧浪漫的法式咖啡馆，适合悠长慵懒的午餐。","步行到哈德逊河边，在码头看日落。","身穿白色外套的调酒师调制的经典鸡尾酒。","意面、分量十足的酒单和橄榄油蛋糕。","以一杯烛光下的法国葡萄酒收尾。"],
  laughs3:["在布利克街与麦克杜格尔街交汇处感受热闹氛围。","塔可和玛格丽特，快捷又多彩。","纽约著名的喜剧俱乐部，常有大牌明星突然登场。请提前预订。","沿麦克杜格尔街走几步，来一杯内格罗尼。"],
  laughs6:["在公园里欣赏街头音乐人和下棋的人。","在自 1927 年营业的咖啡馆喝一杯浓缩咖啡。","逛逛布利克街上的小店和面包房。","老派意式奢华。请尽早预订。","纽约著名的喜剧俱乐部，常有大牌明星突然登场。请提前预订。","回到第八街，伴着黑胶唱片喝一杯睡前酒。"]}},

ja:{ui:{plan_eyebrow:"新機能 · 夜のプラン",plan_title:"夜のプランを立てる",plan_sub:"使える時間と気分を選ぶだけ。ビレッジ内を歩いて回れるルートを、立ち寄り先ごとにご提案します。",plan_h3:"3時間",plan_h6:"6時間",plan_start:"開始時刻",plan_stops:"{n} か所",plan_route:"ルート全体をマップで開く",plan_save:"このスポットを保存",plan_saved:"リストに保存しました！",plan_note:"ディナーとショーは事前予約を。公演時間は各店のサイトでご確認ください。",plan_cta:"夜のプランを立てる",plan_cta_sub:"3時間・6時間のおすすめルート",plan_walkto:"徒歩 {n} 分",plan_mins:"{n} 分",
  st_walk:"散歩",st_lunch:"ランチ",st_coffee:"コーヒー",st_dinner:"ディナー",st_drinks:"ドリンク",st_show:"ショー",st_nightcap:"ナイトキャップ"},
 vibes:{classic:"ビレッジの定番",date:"デートの夜",laughs:"笑いと夜ふかし"},
 notes:{
  classic3:["アーチの下からスタートし、噴水とストリートパフォーマーの周りをひと回り。","古き良きニューヨークの真髄。ブラックレーベル・バーガーをぜひ。","角を曲がってすぐの親密な空間で、世界レベルのジャズを。早い回の予約がおすすめ。"],
  classic6:["アーチからスタートし、噴水のそばで人間観察を。","日当たりのいいテラス席でナポリピッツァを。","ジェファーソン・マーケット図書館の前を通り、ブリーカー・ストリートを西へグローブ・ストリートまで。","イタリアのアペリティーボ・タイム。バーでスプリッツを一杯。","すぐ隣です。早めに名前を書いておきましょう。待つ価値あり。","1935年から続く伝説のジャズ地下クラブ。予約がおすすめ。"],
  date3:["夕暮れにライトアップされるアーチを眺めて。","まずは世界屈指のバーでネグローニを一杯。","キャンドル、ピアノ、暖炉。予約がおすすめ。","地下へ降りて、ジャズの生演奏とオーダーメイドのカクテルを。"],
  date6:["ワシントン・ミューズの石畳から歩き始め、広場を横切って。","小さくロマンチックなフレンチカフェで、のんびり長めのランチを。","ハドソン川まで歩き、桟橋から夕日を眺めて。","白いジャケットのバーテンダーが作るクラシックカクテル。","パスタ、本格的なワインリスト、そしてオリーブオイルケーキ。","最後はキャンドルの灯りの中でフランスワインを一杯。"],
  laughs3:["ブリーカー・ストリートとマクドゥーガル・ストリートの交差点のにぎわいを楽しんで。","タコスとマルガリータ。手軽でカラフル。","大物がふらりと出演することもある、ニューヨークの有名コメディクラブ。予約がおすすめ。","マクドゥーガルを少し歩いた先でネグローニを。"],
  laughs6:["公園でミュージシャンやチェスを指す人たちを眺めて。","1927年創業のカフェでエスプレッソを。","ブリーカー・ストリートのお店やベーカリーを巡って。","古き良きイタリアンの華やかさ。早めの予約を。","大物がふらりと出演することもある、ニューヨークの有名コメディクラブ。予約がおすすめ。","8丁目に戻り、レコードの音色とともにナイトキャップを。"]}}
};
