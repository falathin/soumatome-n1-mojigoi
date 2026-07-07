// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m8h4 = [
  // --- KUMPULAN 手 (Tangan) ---
  {
    id: 'm8h4_1',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を切る',
    furigana: 'てをきる',
    arti: 'Memutuskan hubungan',
    penjelasan: 'Ungkapan idiomatik yang bermaksud memutuskan hubungan dengan seseorang secara tuntas. Selalunya digunakan apabila kita ingin menjauhkan diri daripada hubungan yang tidak baik, negatif, atau merugikan (seperti rakan yang buruk atau tabiat buruk).',
    contoh1: '悪い仲間と手を切る。\n(Memutuskan hubungan dengan kawan yang buruk.)',
    contoh2: '彼はギャンブルと手を切る決心をした。\n(Dia telah bertekad untuk berhenti sepenuhnya/memutuskan hubungan dari perjudian.)'
  },
  {
    id: 'm8h4_2',
    minggu: '8',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '手が足りない',
    furigana: 'てがたりない',
    arti: 'Kekurangan tenaga kerja / Kekurangan orang',
    penjelasan: 'Keadaan di mana jumlah pekerja atau orang yang membantu tidak mencukupi untuk menyelesaikan sesuatu tugasan atau pekerjaan. "Tangan" (手) di sini merujuk kepada tenaga kerja.',
    contoh1: '手が足りないから、手伝ってくれ。\n(Kerana kekurangan tenaga kerja, tolong bantu saya.)',
    contoh2: '今は繁忙期で、店は手が足りない状態だ。\n(Sekarang adalah musim sibuk, kedai dalam keadaan kekurangan kakitangan.)'
  },
  {
    id: 'm8h4_3',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手に余る',
    furigana: 'てにあまる',
    arti: 'Di luar kemampuan / Terlalu sukar',
    penjelasan: 'Merujuk kepada sesuatu pekerjaan, tugas, atau masalah yang terlalu besar, sukar, atau melampaui keupayaan seseorang untuk diselesaikan atau ditangani.',
    contoh1: '私の手に余る仕事。\n(Pekerjaan yang di luar batas kemampuan saya.)',
    contoh2: 'この問題は新入社員の手に余るだろう。\n(Masalah ini pastinya di luar keupayaan pekerja baharu untuk ditangani.)'
  },
  {
    id: 'm8h4_4',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を打つ',
    furigana: 'てをうつ',
    arti: 'Mengambil langkah / Mengambil tindakan',
    penjelasan: 'Bermaksud memikirkan dan melaksanakan langkah atau penyelesaian yang diperlukan untuk menangani sesuatu masalah, selalunya sebelum masalah tersebut menjadi lebih teruk.',
    contoh1: 'その問題に早く手を打つべきだ。\n(Kita patut mengambil tindakan segera terhadap masalah tersebut.)',
    contoh2: '被害が広がる前に、何らかの手を打たなければならない。\n(Sebelum kerosakan merebak, kita mesti mengambil suatu langkah pencegahan.)'
  },
  {
    id: 'm8h4_5',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手に負えない',
    furigana: 'てにおえない',
    arti: 'Tidak dapat dikawal / Tidak terkawal',
    penjelasan: 'Keadaan di mana seseorang sudah hilang kawalan atau tidak mampu lagi menguruskan sesuatu atau seseorang. Kerap digunakan untuk kanak-kanak yang terlalu nakal atau masalah yang sudah parah.',
    contoh1: 'あの子は親の手に負えない。\n(Budak itu sudah tidak dapat dikawal oleh ibu bapanya.)',
    contoh2: '事態が悪化して、もはや私の手に負えない。\n(Keadaan bertambah buruk dan kini sudah di luar kawalan saya.)'
  },
  {
    id: 'm8h4_6',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を焼く',
    furigana: 'てをやく',
    arti: 'Kesusahan menangani / Kerepotan',
    penjelasan: 'Menghadapi kesukaran, kepenatan, atau masalah besar dalam menguruskan seseorang atau sesuatu perkara kerana ia sangat degil atau rumit.',
    contoh1: 'いたずらな生徒に手を焼く。\n(Mengalami kesukaran/kerepotan menangani pelajar yang nakal.)',
    contoh2: 'このパソコンの頻繁なエラーには本当に手を焼いている。\n(Saya benar-benar pening/repot menguruskan ralat yang kerap berlaku pada komputer ini.)'
  },
  {
    id: 'm8h4_7',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を抜く',
    furigana: 'てをぬく',
    arti: 'Bekerja sambil lewa / Cincai',
    penjelasan: 'Sengaja tidak melakukan sesuatu pekerjaan dengan bersungguh-sungguh, mengabaikan proses yang sepatutnya, atau mengurangkan kualiti kerja demi menjimatkan masa dan tenaga.',
    contoh1: '仕事の手を抜く。\n(Membuat kerja secara sambil lewa / asal siap.)',
    contoh2: 'ここで手を抜くと、後で大きな問題になるよ。\n(Kalau kamu cincai di bahagian ini, ia akan menjadi masalah besar nanti.)'
  },
  {
    id: 'm8h4_8',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を尽くす',
    furigana: 'てをつくす',
    arti: 'Melakukan segala daya upaya / Mencuba pelbagai cara',
    penjelasan: 'Mencuba sedaya upaya dengan menggunakan segala kaedah, cara, dan kemungkinan yang ada untuk mencapai matlamat, menyelamatkan keadaan, atau menyelesaikan masalah.',
    contoh1: '問題解決のためにあらゆる手を尽くす。\n(Melakukan segala cara dan upaya untuk menyelesaikan masalah.)',
    contoh2: '医者は患者を救うために手を尽くした。\n(Doktor telah melakukan segala daya upaya untuk menyelamatkan pesakit itu.)'
  },
  {
    id: 'm8h4_9',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手も足も出ない',
    furigana: 'てもあしもでない',
    arti: 'Tidak mampu berbuat apa-apa / Terlalu sukar',
    penjelasan: 'Situasi di mana seseorang langsung tidak dapat melakukan apa-apa, biasanya kerana masalah terlalu sukar atau pihak lawan terlalu kuat sehinggakan diri menjadi tidak berdaya.',
    contoh1: '手も足も出ない問題。\n(Masalah yang sangat sukar hingga tidak tahu macam mana nak mula menyelesaikannya.)',
    contoh2: '相手が強すぎて、試合では手も足も出なかった。\n(Lawan terlalu kuat, saya langsung tidak berkutik/tidak dapat berbuat apa-apa dalam perlawanan itu.)'
  },

  // --- KUMPULAN 足 (Kaki) ---
  {
    id: 'm8h4_10',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '足が出る',
    furigana: 'あしがでる',
    arti: 'Melebihi bajet / Tekor',
    penjelasan: 'Ungkapan yang bermaksud jumlah perbelanjaan sebenar telah melebihi belanjawan atau bajet yang telah ditetapkan, menyebabkan kerugian atau kekurangan dana.',
    contoh1: '経費がかかりすぎて足が出た。\n(Kos perbelanjaan terlalu tinggi menyebabkan bajet tersasar/tekor.)',
    contoh2: '買い物をしすぎて、今月は足が出てしまった。\n(Kerana terlalu banyak membeli-belah, perbelanjaan bulan ini melebihi bajet.)'
  },
  {
    id: 'm8h4_11',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '足が棒になる',
    furigana: 'あしがぼうになる',
    arti: 'Kaki menjadi kebas/lenguh (sangat penat)',
    penjelasan: 'Satu simpulan bahasa untuk menggambarkan keadaan kaki yang berasa sangat kaku dan penat, seolah-olah berubah menjadi batang kayu, akibat berdiri atau berjalan terlalu lama.',
    contoh1: '1日中歩いて足が棒になった。\n(Berjalan sepanjang hari membuatkan kaki saya kebas dan sangat lenguh.)',
    contoh2: '立ち仕事なので、夕方には足が棒になる。\n(Kerana kerja yang memerlukan saya berdiri, menjelang petang kaki saya terasa seperti kayu.)'
  },
  {
    id: 'm8h4_12',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '足を引っ張る',
    furigana: 'あしをひっぱる',
    arti: 'Menjadi beban / Menghambat kemajuan orang lain',
    penjelasan: 'Menghalang atau mengganggu kelancaran, kemajuan, atau kejayaan orang lain atau pasukan, secara sengaja mahupun tidak sengaja (seperti menjadi beban kepada kumpulan).',
    contoh1: '同僚の足を引っ張る。\n(Menghalang kejayaan rakan sekerja / menjadi beban kepada rakan sekerja.)',
    contoh2: 'チームの足を引っ張らないように頑張ります。\n(Saya akan berusaha agar tidak menjadi beban/menghambat kemajuan pasukan.)'
  },
  {
    id: 'm8h4_13',
    minggu: '8',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '足が早い',
    furigana: 'あしがはやい',
    arti: 'Cepat rosak/basi (makanan)',
    penjelasan: 'Bukan bermaksud kaki yang berlari pantas, tetapi dalam konteks ini ia bermaksud makanan mentah atau basah yang mudah dan cepat menjadi rosak atau basi.',
    contoh1: '生ものは足が早い。\n(Makanan mentah sangat cepat basi/rosak.)',
    contoh2: '夏は食べ物の足が早いから注意してください。\n(Pada musim panas makanan lebih cepat rosak, jadi sila berhati-hati.)'
  },

  // --- KUMPULAN 首 (Leher) ---
  {
    id: 'm8h4_14',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首を横に振る',
    furigana: 'くびをよこにふる',
    arti: 'Menggelengkan kepala (tidak setuju)',
    penjelasan: 'Perbuatan menggelengkan kepala ke kiri dan ke kanan sebagai isyarat jelas untuk menolak, tidak bersetuju, atau mengatakan "tidak" terhadap sesuatu cadangan.',
    contoh1: '彼は提案に対して首を横に振った。\n(Dia menggelengkan kepalanya terhadap cadangan itu sebagai tanda tidak setuju.)',
    contoh2: '父は私の留学に首を横に振った。\n(Ayah menggelengkan kepalanya, menolak niat saya untuk belajar di luar negara.)'
  },
  {
    id: 'm8h4_15',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首を長くして待つ',
    furigana: 'くびをながくしてまつ',
    arti: 'Menunggu dengan penuh harapan',
    penjelasan: 'Kiasan yang bermaksud menunggu sesuatu dengan penuh kesabaran, debaran, dan harapan yang tinggi untuk masa yang lama (seolah-olah leher menjadi panjang kerana asyik menjenguk).',
    contoh1: 'プレゼントを首を長くして待つ。\n(Menunggu hadiah tersebut dengan penuh harapan.)',
    contoh2: 'おじいちゃんは孫が来るのを首を長くして待っている。\n(Datuk sedang menunggu kedatangan cucunya dengan penuh harapan.)'
  },
  {
    id: 'm8h4_16',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首をひねる',
    furigana: 'くびをひねる',
    arti: 'Berasa ragu-ragu / Bingung',
    penjelasan: 'Perbuatan menyengetkan kepala sedikit apabila berasa pelik, curiga, tidak faham, atau kurang berpuas hati terhadap sesuatu perkara atau hasil keputusan.',
    contoh1: '首をひねるような結果。\n(Hasil yang membingungkan / membuatkan kita ragu-ragu.)',
    contoh2: '彼の説明を聞いて、誰もが首をひねった。\n(Mendengar penjelasannya, semua orang berasa ragu-ragu/bingung.)'
  },
  {
    id: 'm8h4_17',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首を突っ込む',
    furigana: 'くびをつっこむ',
    arti: 'Mencampuri urusan / Terlibat',
    penjelasan: 'Mencampuri urusan orang lain secara sukarela, selalunya melibatkan diri ke dalam masalah, skandal, atau sesuatu hal yang sebenarnya tidak perlu dicampuri yang akhirnya menyusahkan diri.',
    contoh1: '厄介な問題に首を突っ込む。\n(Mencampuri atau terlibat dalam masalah yang rumit.)',
    contoh2: '他人の喧嘩に首を突っ込まないほうがいい。\n(Lebih baik jangan masuk campur dalam pergaduhan orang lain.)'
  },
  {
    id: 'm8h4_18',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首が回らない',
    furigana: 'くびがまわらない',
    arti: 'Terlilit hutang (sehingga buntu)',
    penjelasan: 'Keadaan di mana seseorang mempunyai terlalu banyak hutang atau masalah kewangan sehinggakan dia tidak mampu menyelesaikannya dan tidak berdaya untuk bergerak/berbuat apa-apa.',
    contoh1: '借金で首が回らない。\n(Tenggelam dalam beban hutang sehingga buntu/tidak berdaya.)',
    contoh2: 'ローンが重なって、今は首が回らない状態だ。\n(Hutang pinjaman bertimbun, sekarang keadaannya sangat buntu kewangan.)'
  },

  // --- KUMPULAN 息 (Nafas) ---
  {
    id: 'm8h4_19',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '息が切れる',
    furigana: 'いきがきれる',
    arti: 'Mengah / Kehabisan nafas',
    penjelasan: 'Keadaan di mana pernafasan menjadi tidak teratur dan tercungap-cungap selepas melakukan aktiviti fizikal yang memenatkan seperti berlari atau menaiki tangga.',
    contoh1: '走って息が切れる。\n(Mengah dan kehabisan nafas kerana berlari.)',
    contoh2: '階段を上っただけで息が切れてしまった。\n(Hanya kerana menaiki tangga, saya sudah tercungap-cungap kehabisan nafas.)'
  },
  {
    id: 'm8h4_20',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '息が詰まる',
    furigana: 'いきがつまる',
    arti: 'Rasa sesak nafas / Tercekik',
    penjelasan: 'Rasa sukar untuk bernafas atau seolah-olah tercekik, sama ada disebabkan oleh fizikal (seperti tempat yang terlalu sempit/padat) atau kerana tekanan emosi dalam suasana yang tegang.',
    contoh1: '満員電車で息が詰まりそうだ。\n(Saya rasa sesak nafas di dalam kereta api yang penuh sesak.)',
    contoh2: '会議の雰囲気が重くて息が詰まる。\n(Suasana mesyuarat sangat berat dan tegang membuatkan saya rasa sesak nafas.)'
  },
  {
    id: 'm8h4_21',
    minggu: '8',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '息が長い',
    furigana: 'いきがながい',
    arti: 'Bertahan lama / Berpanjangan (karier/kerjaya)',
    penjelasan: 'Digunakan untuk menggambarkan sesuatu kerjaya, populariti, atau aktiviti yang mampu bertahan untuk jangka masa yang sangat lama tanpa putus atau merosot.',
    contoh1: '息が長い役者。\n(Seorang pelakon veteran yang kerjayanya bertahan lama/awet.)',
    contoh2: 'これは息が長いプロジェクトになる。\n(Ini akan menjadi sebuah projek jangka masa panjang yang berterusan.)'
  },
  {
    id: 'm8h4_22',
    minggu: '8',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '息もつかずに',
    furigana: 'いきもつかずに',
    arti: 'Tanpa henti / Tanpa mengambil nafas',
    penjelasan: 'Melakukan sesuatu perbuatan (selalunya bercakap) dengan sangat pantas dan berterusan, sehinggakan kelihatan seperti tidak ada ruang pun untuk mengambil nafas.',
    contoh1: '彼は息もつかずにしゃべり続けた。\n(Dia terus bercakap tanpa henti dan tanpa mengambil nafas.)',
    contoh2: '息もつかずに一気に本を読み終えた。\n(Membaca habis buku tersebut sekaligus tanpa henti kerana terlalu asyik.)'
  },
  {
    id: 'm8h4_23',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '息を抜く',
    furigana: 'いきをぬく',
    arti: 'Berehat sebentar / Menarik nafas',
    penjelasan: 'Mendapat masa sebentar untuk berehat dari ketegangan, kesibukan, atau tekanan kerja. Sering digunakan dalam bentuk negatif (息を抜く暇もない) untuk menunjukkan kesibukan melampau.',
    contoh1: '息を抜く暇もないくらい忙しい。\n(Sangat sibuk sehinggakan masa untuk bernafas/berehat sebentar pun tiada.)',
    contoh2: '週末くらいは少し息を抜いてください。\n(Tolonglah ambil masa berehat sedikit sekurang-kurangnya pada hujung minggu.)'
  },
  {
    id: 'm8h4_24',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '息をのむ',
    furigana: 'いきをのむ',
    arti: 'Menahan nafas (kerana kagum/terkejut)',
    penjelasan: 'Tindakan menahan nafas secara refleks kerana terlalu terkejut, terpesona, atau terpegun dengan kecantikan yang luar biasa atau situasi yang menegangkan.',
    contoh1: '息をのむほど美しい景色。\n(Pemandangan yang sangat cantik sehinggakan membuatkan saya terpegun dan menahan nafas.)',
    contoh2: 'その映画の結末に、観客は息をのんだ。\n(Para penonton terkejut dan menahan nafas melihat pengakhiran filem itu.)'
  },

  // --- KUMPULAN 気 (Perasaan / Fikiran) ---
  {
    id: 'm8h4_25',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気がある',
    furigana: 'きがある',
    arti: 'Ada hati / Tertarik',
    penjelasan: 'Mempunyai minat, keinginan, atau perasaan romantis (suka) terhadap seseorang atau sesuatu.',
    contoh1: '彼は田中さんに気があるらしい。\n(Nampaknya dia ada hati/tertarik dengan Tanaka-san.)',
    contoh2: 'その仕事に気があるなら、挑戦してみて。\n(Kalau kamu berminat dengan kerja itu, cubalah sahut cabarannya.)'
  },
  {
    id: 'm8h4_26',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気が向かない',
    furigana: 'きがむかない',
    arti: 'Tiada mood / Tidak berminat',
    penjelasan: 'Keadaan di mana hati atau perasaan tidak terbuka untuk melakukan sesuatu perkara. Tidak mempunyai dorongan atau "mood" walaupun mungkin diajak.',
    contoh1: '誘われたけど、気が向かない。\n(Saya dijemput, tetapi saya tiada mood/tidak berminat untuk pergi.)',
    contoh2: '気が向かない日は、無理して勉強しない。\n(Pada hari di mana saya tiada mood, saya tidak akan memaksa diri untuk belajar.)'
  },
  {
    id: 'm8h4_27',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気を配る',
    furigana: 'きをくばる',
    arti: 'Memerhatikan orang lain / Bertimbang rasa',
    penjelasan: 'Mengambil berat dan memberikan perhatian yang saksama kepada orang di sekeliling atau terhadap suasana keadaan agar segalanya berjalan lancar. (Kata bendanya ialah 気配り - kikubari).',
    contoh1: '彼は周囲に気を配る人だ。\n(Dia adalah orang yang sentiasa memerhatikan dan bertimbang rasa terhadap sekelilingnya.)',
    contoh2: 'お客様の要望に気を配る。\n(Mengambil berat/memerhatikan kehendak pelanggan dengan teliti.)'
  },
  {
    id: 'm8h4_28',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気が利く',
    furigana: 'きがきく',
    arti: 'Peka / Perhatian / Bijaksana',
    penjelasan: 'Merujuk kepada sifat seseorang yang cepat menangkap situasi, pandai membawa diri, dan mampu bertindak membantu orang lain dengan tepat tanpa perlu disuruh.',
    contoh1: '彼女は気が利く人だ。\n(Dia merupakan seorang yang peka dan sangat perhatian.)',
    contoh2: '気が利く店員が、すぐにお水を持ってきてくれた。\n(Pekerja kedai yang peka itu segera membawakan kami air.)'
  },
  {
    id: 'm8h4_29',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気が散る',
    furigana: 'きがちる',
    arti: 'Hilang tumpuan / Terdistraksi',
    penjelasan: 'Perhatian atau fokus terganggu kerana sesuatu perkara, bunyi bising, atau kebimbangan, yang menyebabkan seseorang tidak dapat menumpukan perhatian pada apa yang sedang dilakukan.',
    contoh1: '気が散って勉強が手につかない。\n(Perhatian saya terganggu/hilang tumpuan sehingga tidak boleh belajar.)',
    contoh2: 'テレビの音がうるさくて気が散る。\n(Bunyi televisyen sangat bising sehingga menyebabkan fokus saya terganggu.)'
  }
];

window.vocabData.push(...kosakata_m8h4);