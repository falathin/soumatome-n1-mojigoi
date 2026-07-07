// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m6h3 = [
  // ==========================================
  // KELOMPOK 1: 張る (はる) - Menarik / Meregang / Membentang
  // ==========================================
  {
    id: 'm6h3_1',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '糸がピンと張る',
    furigana: 'いとがピンとはる',
    arti: 'Benang meregang kencang',
    penjelasan: 'Kata 張る (haru) di sini bermakna ditariknya sesuatu (seperti tali, benang, atau kawat) hingga tegang dan tidak kendur sama sekali. "ピンと" adalah onomatope yang menggambarkan tegangan tersebut.',
    contoh1: '凧を揚げるとき、糸がピンと張る。\n(Saat menerbangkan layang-layang, benangnya meregang kencang.)',
    contoh2: 'ギターの弦をピンと張る。\n(Meregangkan/mengencangkan senar gitar.)'
  },
  {
    id: 'm6h3_2',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '池に氷が張る',
    furigana: 'いけにこおりがはる',
    arti: 'Es membeku/terbentuk di kolam',
    penjelasan: 'Digunakan untuk fenomena alam ketika lapisan es tipis terbentuk dan menutupi permukaan air secara perlahan. 張る di sini memberikan nuansa "membentang menutupi permukaan".',
    contoh1: '冬の朝、池に氷が張っていた。\n(Di pagi musim dingin, es membeku menutupi kolam.)',
    contoh2: 'バケツの水に薄い氷が張った。\n(Lapisan es tipis terbentuk pada air di dalam ember.)'
  },
  {
    id: 'm6h3_3',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'おなかが張る',
    furigana: 'おなかがはる',
    arti: 'Perut kembung / Begah',
    penjelasan: 'Menjelaskan kondisi fisik ketika perut terasa penuh, kencang, atau kembung karena gas atau makan terlalu banyak. Seolah-olah kulit perut "meregang".',
    contoh1: '食べすぎておなかが張っている。\n(Perutku terasa begah/kembung karena makan terlalu banyak.)',
    contoh2: 'ガスが溜まっておなかが張る。\n(Perut terasa kembung karena gas menumpuk.)'
  },
  {
    id: 'm6h3_4',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '気が張る',
    furigana: 'きがはる',
    arti: 'Merasa tegang / Waspada',
    penjelasan: 'Merupakan ungkapan psikologis yang berarti pikiran dan perasaan sedang dalam kondisi siaga, tegang, atau tidak bisa bersantai. Sering terjadi saat menghadapi ujian atau acara penting.',
    contoh1: '試験前は気が張っていて眠れない。\n(Sebelum ujian, saya merasa tegang sehingga tidak bisa tidur.)',
    contoh2: '大勢の前でスピーチをするので気が張る。\n(Pikiran saya tegang karena harus berpidato di depan banyak orang.)'
  },
  {
    id: 'm6h3_5',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '見栄を張る',
    furigana: 'みえをはる',
    arti: 'Pamer / Menjaga gengsi',
    penjelasan: '見栄 (mie) berarti penampilan luar. "見栄を張る" adalah ungkapan untuk perilaku seseorang yang memaksakan diri tampil mewah, kaya, atau hebat agar dipandang baik oleh orang lain demi gengsi, padahal aslinya tidak demikian.',
    contoh1: '彼はお金がないのに、見栄を張って高い車を買った。\n(Meski tidak punya uang, dia menjaga gengsi dengan membeli mobil mahal.)',
    contoh2: '友達の前で見栄を張る必要はない。\n(Tidak perlu berpura-pura/pamer gengsi di depan teman-teman.)'
  },
  {
    id: 'm6h3_6',
    minggu: '6',
    hari: '3',
    kategori: 'kata benda',
    kanji: '見栄っ張り',
    furigana: 'みえっぱり',
    arti: 'Orang yang suka pamer / Gengsian',
    penjelasan: 'Ini adalah bentuk kata benda (nomina) dari frasa "見栄を張る". Digunakan untuk menyebut sifat atau merujuk langsung kepada seseorang yang sangat mempedulikan gengsi dan suka pamer.',
    contoh1: '彼は見栄っ張りで、いつもブランド服を着ている。\n(Dia adalah orang yang gengsian, selalu memakai baju bermerek.)',
    contoh2: '見栄っ張りな性格を直したい。\n(Saya ingin memperbaiki sifat saya yang suka pamer ini.)'
  },
  {
    id: 'm6h3_7',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ポスターを貼る',
    furigana: 'ポスターをはる',
    arti: 'Menempelkan poster',
    penjelasan: 'Perhatikan bahwa kanji yang digunakan adalah 貼る (menempel), bukan 張る, meskipun cara bacanya sama (haru). Digunakan saat menempelkan sesuatu yang pipih (kertas, stiker, poster) ke sebuah permukaan seperti dinding.',
    contoh1: '壁に映画のポスターを貼る。\n(Menempelkan poster film di dinding.)',
    contoh2: '掲示板にお知らせを貼っておきました。\n(Saya sudah menempelkan pengumuman di papan buletin.)'
  },
  {
    id: 'm6h3_8',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '根が深く張る',
    furigana: 'ねがふかくはる',
    arti: 'Akar menancap dalam',
    penjelasan: 'Digunakan untuk tanaman yang akar-akarnya menyebar dan mencengkeram tanah dengan kuat. Secara kiasan, bisa juga merujuk pada masalah atau tradisi yang sudah mengakar kuat dan sulit diubah.',
    contoh1: 'この木は根が深く張っているから、台風でも倒れない。\n(Karena akar pohon ini menancap dalam, ia tidak akan tumbang meski ada topan.)',
    contoh2: 'この問題は社会に深く根を張っている。\n(Masalah ini sudah mengakar dalam di masyarakat.)'
  },
  {
    id: 'm6h3_9',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'くもの巣が張る',
    furigana: 'くものすがはる',
    arti: 'Sarang laba-laba membentang',
    penjelasan: 'Digunakan untuk menjelaskan proses laba-laba yang menganyam dan membentangkan sarangnya di suatu tempat (seperti di sudut ruangan atau antar pepohonan).',
    contoh1: '天井の隅にくもの巣が張っている。\n(Sarang laba-laba membentang di sudut langit-langit.)',
    contoh2: '長い間空き家だったので、くもの巣が張っていた。\n(Karena rumah itu kosong dalam waktu lama, sarang laba-laba pun terbentuk di mana-mana.)'
  },
  {
    id: 'm6h3_10',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'テントを張る',
    furigana: 'テントをはる',
    arti: 'Mendirikan tenda',
    penjelasan: 'Kata kerja yang khusus digunakan untuk kegiatan mendirikan tenda saat berkemah. Ini karena mendirikan tenda melibatkan proses membentangkan dan menarik kain serta tali hingga kencang.',
    contoh1: 'キャンプ場に着いたら、まずテントを張ろう。\n(Begitu tiba di tempat perkemahan, mari kita dirikan tenda dulu.)',
    contoh2: '川の近くにテントを張るのは危険です。\n(Mendirikan tenda di dekat sungai itu berbahaya.)'
  },
  {
    id: 'm6h3_11',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '胸を張る',
    furigana: 'むねをはる',
    arti: 'Membusungkan dada / Percaya diri',
    penjelasan: 'Secara fisik berarti membusungkan dada agar postur tubuh tegak. Secara kiasan yang lebih sering dipakai, ini bermakna menunjukkan sikap penuh kebanggaan dan rasa percaya diri atas sebuah pencapaian.',
    contoh1: '優勝した彼は、胸を張ってメダルを受け取った。\n(Dia yang menjadi juara menerima medali dengan dada membusung/penuh kebanggaan.)',
    contoh2: '失敗を恐れず、胸を張って歩きなさい。\n(Jangan takut gagal, berjalanlah dengan penuh percaya diri.)'
  },

  // ==========================================
  // KELOMPOK 2: 送る (おくる) - Mengirim / Menghabiskan waktu
  // ==========================================
  {
    id: 'm6h3_12',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '扇風機で風を送る',
    furigana: 'せんぷうきでかぜをおくる',
    arti: 'Meniupkan angin (dengan kipas)',
    penjelasan: '送る tidak selalu berarti "mengirim paket". Di sini bermakna mengalirkan atau menyalurkan angin, udara, atau panas dari satu titik ke titik lain dengan menggunakan alat seperti kipas angin.',
    contoh1: '暑いので、扇風機で部屋全体に風を送る。\n(Karena panas, saya mengalirkan angin ke seluruh ruangan dengan kipas angin.)',
    contoh2: '火を起こすために、うちわで風を送った。\n(Saya mengipasi/mengalirkan angin dengan kipas tangan untuk menyalakan api.)'
  },
  {
    id: 'm6h3_13',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '送りがなを送る',
    furigana: 'おくりがなをおくる',
    arti: 'Membubuhkan okurigana',
    penjelasan: 'Dalam penulisan bahasa Jepang, "Okurigana" adalah kana yang mengikuti/ditambahkan setelah karakter Kanji untuk menunjukkan konjugasi kata (seperti huruf \'ku\' pada 歩く). "送る" di sini berarti menambahkan huruf tersebut.',
    contoh1: '漢字の後ろに正しい送りがなを送る。\n(Membubuhkan okurigana yang benar di belakang kanji.)',
    contoh2: '送りがなを送る規則をしっかり覚える。\n(Mengingat dengan baik aturan penambahan okurigana.)'
  },
  {
    id: 'm6h3_14',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '多忙な日を送る',
    furigana: 'たぼうなひをおくる',
    arti: 'Menjalani hari yang sibuk',
    penjelasan: 'Bila dipasangkan dengan kata yang berkaitan dengan waktu (seperti hari, kehidupan, atau masa muda), 送る berarti "menjalani" atau "menghabiskan waktu".',
    contoh1: '最近は仕事が多く、多忙な日を送っている。\n(Akhir-akhir ini pekerjaanku banyak, sehingga aku menjalani hari-hari yang sangat sibuk.)',
    contoh2: '田舎で穏やかな生活を送りたい。\n(Saya ingin menjalani kehidupan yang damai di pedesaan.)'
  },
  {
    id: 'm6h3_15',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目で合図を送る',
    furigana: 'めであいずをおくる',
    arti: 'Memberi kode/isyarat dengan mata',
    penjelasan: 'Digunakan ketika kita menyampaikan atau "mengirimkan" suatu pesan non-verbal kepada orang lain, misalnya mengedipkan mata, melambaikan tangan, atau memberikan isyarat (合図).',
    contoh1: '彼に目で合図を送って、部屋を出た。\n(Saya memberinya kode dengan mata, lalu keluar dari ruangan.)',
    contoh2: '試合中、監督が選手にサインを送る。\n(Di tengah pertandingan, pelatih mengirimkan isyarat kepada pemain.)'
  },
  {
    id: 'm6h3_16',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '使いの者を送る',
    furigana: 'つかいのものをおくる',
    arti: 'Mengirimkan utusan / orang',
    penjelasan: 'Digunakan dalam konteks menugaskan seseorang (utusan, wakil, atau staf) dan mengirim mereka ke suatu tempat untuk menyelesaikan urusan atau menyampaikan pesan.',
    contoh1: '取引先に使いの者を送って書類を届けさせた。\n(Saya mengirimkan utusan ke klien untuk mengantarkan dokumen.)',
    contoh2: '代表として彼を会議に送ることにした。\n(Kami memutuskan untuk mengirimnya ke rapat sebagai perwakilan.)'
  },
  {
    id: 'm6h3_17',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '駅まで送る',
    furigana: 'えきまでおくる',
    arti: 'Mengantar sampai ke stasiun',
    penjelasan: 'Jika merujuk pada orang, 送る bermakna menemani seseorang berjalan atau mengendarai kendaraan hingga ke tempat tujuan mereka (mengantar pergi/see off).',
    contoh1: '夜遅いから、車で家まで送るよ。\n(Karena sudah larut malam, aku akan mengantarmu sampai rumah dengan mobil.)',
    contoh2: '友達を駅まで送ってから帰宅した。\n(Saya pulang ke rumah setelah mengantar teman saya sampai stasiun.)'
  },
  {
    id: 'm6h3_18',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '拍手を送る',
    furigana: 'はくしゅをおくる',
    arti: 'Memberikan tepuk tangan',
    penjelasan: 'Kata ini sering dipakai untuk mengekspresikan "pemberian" sesuatu yang tak kasat mata berupa apresiasi, seperti memberikan sorakan, tepuk tangan, dukungan, atau doa.',
    contoh1: '素晴らしい演奏に、観客は大きな拍手を送った。\n(Penonton memberikan tepuk tangan yang meriah untuk pertunjukan yang luar biasa itu.)',
    contoh2: '頑張っている彼にエールを送る。\n(Memberikan sorakan semangat kepada dia yang sedang berjuang.)'
  },

  // ==========================================
  // KELOMPOK 3: とける (解ける / 溶ける) - Terlepas / Larut / Selesai
  // ==========================================
  {
    id: 'm6h3_19',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '靴のひもが解ける',
    furigana: 'くつのひもがとける',
    arti: 'Tali sepatu terlepas / kendur',
    penjelasan: 'Menggunakan kanji 解ける. Digunakan untuk hal-hal fisik yang sebelumnya diikat, disimpul, atau dililit, lalu kemudian menjadi terlepas, kendur, atau terurai dengan sendirinya.',
    contoh1: '歩いている途中で、靴のひもが解けてしまった。\n(Di tengah jalan, tali sepatuku terlepas.)',
    contoh2: 'きつく結んだので、なかなか解けない。\n(Karena diikat dengan kencang, ikatannya sulit terlepas.)'
  },
  {
    id: 'm6h3_20',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '洗剤が水に溶ける',
    furigana: 'せんざいがみずにとける',
    arti: 'Detergen larut dalam air',
    penjelasan: 'Menggunakan kanji 溶ける. Merujuk pada proses kimiawi di mana benda padat atau bubuk bercampur menjadi satu dengan cairan (larut).',
    contoh1: 'この洗剤は冷たい水にもよく溶ける。\n(Detergen ini mudah larut meskipun dalam air dingin.)',
    contoh2: '砂糖が紅茶に溶けるのを待つ。\n(Menunggu gulanya larut di dalam teh hitam.)'
  },
  {
    id: 'm6h3_21',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'アイスクリームが室温で溶ける',
    furigana: 'アイスクリームがしつおんでとける',
    arti: 'Es krim meleleh di suhu ruang',
    penjelasan: 'Sama-sama menggunakan kanji 溶ける, namun yang ini merujuk pada benda padat beku (seperti es, mentega, cokelat) yang mencair atau meleleh karena terkena suhu panas.',
    contoh1: '暑さでアイスクリームがすぐに溶けてしまった。\n(Karena cuaca panas, es krimnya langsung meleleh.)',
    contoh2: 'フライパンの上でバターが溶ける。\n(Mentega meleleh di atas wajan penggorengan.)'
  },
  {
    id: 'm6h3_22',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'この問題は難しくて解けない',
    furigana: 'このもんだいはむずかしくてとけない',
    arti: 'Masalah ini sulit dan tidak bisa dipecahkan',
    penjelasan: 'Menggunakan kanji 解ける. Berarti suatu teka-teki, persoalan matematika, atau misteri akhirnya dapat dipecahkan, dijawab, atau menemukan solusinya.',
    contoh1: '数学の難しい問題がようやく解けた。\n(Soal matematika yang sulit itu akhirnya berhasil kupecahkan/temukan jawabannya.)',
    contoh2: 'この謎は誰にも解けないだろう。\n(Misteri ini sepertinya tidak akan bisa dipecahkan oleh siapa pun.)'
  },
  {
    id: 'm6h3_23',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '停学処分が解ける',
    furigana: 'ていがくしょぶんがとける',
    arti: 'Hukuman skorsing sekolah dicabut',
    penjelasan: 'Digunakan ketika suatu ikatan tak kasat mata (seperti larangan, hukuman, status skors, atau kutukan) akhirnya berakhir, dicabut, atau ditiadakan.',
    contoh1: '停学処分が解けて、彼はまた通学している。\n(Hukuman skorsingnya telah dicabut, dan dia kini pergi ke sekolah lagi.)',
    contoh2: '魔法が解けて、元の姿に戻った。\n(Sihirnya terlepas, dan dia kembali ke wujud aslinya.)'
  },
  {
    id: 'm6h3_24',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '誤解が解ける',
    furigana: 'ごかいがとける',
    arti: 'Kesalahpahaman terselesaikan',
    penjelasan: 'Frasa yang sangat umum digunakan. Artinya adalah perasaan tidak enak, kecurigaan, atau kesalahpahaman antara dua belah pihak akhirnya luluh, terurai, dan masalah selesai.',
    contoh1: '話し合ったおかげで、彼との誤解が解けた。\n(Berkat obrolan kami, kesalahpahamanku dengannya telah terselesaikan.)',
    contoh2: '疑いが解けて、無実が証明された。\n(Rasa curiga telah hilang, dan ketidakbersalahannya terbukti.)'
  },

  // ==========================================
  // KELOMPOK 4: 飛ぶ (とぶ) - Terbang / Melompat / Lenyap
  // ==========================================
  {
    id: 'm6h3_25',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ヘリコプターが飛んでいる',
    furigana: 'ヘリコプターがとんでいる',
    arti: 'Helikopter sedang terbang',
    penjelasan: 'Ini adalah makna paling dasar dari 飛ぶ (tobu), yaitu melayang atau bergerak secara fisik di udara dengan sayap atau mesin terbang (seperti burung, pesawat, helikopter).',
    contoh1: '空を鳥が自由に飛んでいる。\n(Burung-burung terbang dengan bebas di langit.)',
    contoh2: '空高く飛行機が飛んでいった。\n(Pesawat terbang tinggi ke angkasa.)'
  },
  {
    id: 'm6h3_26',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '台風で看板が飛んだ',
    furigana: 'たいふうでかんばんがとんだ',
    arti: 'Papan reklame terbang terhempas topan',
    penjelasan: 'Sama dengan "空中に舞う" (melayang di udara). Digunakan saat benda-benda yang seharusnya diam atau menempel justru terhempas, terlempar, atau terbang karena dorongan angin atau ledakan yang kuat.',
    contoh1: '強風で帽子が飛んでしまった。\n(Topi saya terbang terhempas angin kencang.)',
    contoh2: '爆発の衝撃で窓ガラスが飛んだ。\n(Kaca jendela terlempar/terbang karena benturan ledakan.)'
  },
  {
    id: 'm6h3_27',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ニューヨークまで飛ぶ',
    furigana: 'ニューヨークまでとぶ',
    arti: 'Terbang (pergi) ke New York',
    penjelasan: 'Sama dengan "飛行機で目的地に行く". Idiom ini berarti bepergian dengan menumpang pesawat terbang menuju ke lokasi atau negara yang jauh.',
    contoh1: '仕事のために、明日パリへ飛びます。\n(Demi pekerjaan, besok saya akan terbang ke Paris.)',
    contoh2: '連休を利用してハワイへ飛んだ。\n(Memanfaatkan libur panjang, saya terbang liburan ke Hawaii.)'
  },
  {
    id: 'm6h3_28',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '水たまりの泥が飛ぶ',
    furigana: 'みずたまりのどろがとぶ',
    arti: 'Lumpur genangan air memercik',
    penjelasan: 'Sama dengan はねる. Digunakan saat cairan, cipratan air, lumpur, atau minyak melompat/memercik dan mengenai sesuatu (misalnya mengenai baju).',
    contoh1: '車が通り過ぎたとき、泥が飛んで服が汚れた。\n(Saat mobil lewat, lumpurnya memercik dan mengotori baju saya.)',
    contoh2: '揚げ物をすると油が飛ぶから気をつけて。\n(Hati-hati karena minyak akan memercik saat menggoreng makanan.)'
  },
  {
    id: 'm6h3_29',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ヒューズが飛ぶ',
    furigana: 'ヒューズがとぶ',
    arti: 'Sekring listrik putus/jeplak',
    penjelasan: 'Idiom spesifik dalam bahasa Jepang kelistrikan. Saat aliran listrik berlebih dan menyebabkan sekring (fuse) memutus arus (jeplak), orang Jepang menggunakan frasa "ヒューズが飛ぶ" (sekringnya terbang).',
    contoh1: '電子レンジとドライヤーを同時に使ったら、ヒューズが飛んだ。\n(Saat saya menggunakan microwave dan pengering rambut bersamaan, sekringnya putus/anjlok.)',
    contoh2: '雷が落ちてヒューズが飛んでしまった。\n(Petir menyambar dan menyebabkan sekring putus.)'
  },
  {
    id: 'm6h3_30',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '記者が現場に飛ぶ',
    furigana: 'きしゃがげんばにとぶ',
    arti: 'Wartawan bergegas ke lokasi',
    penjelasan: 'Sama dengan 急いで行く. Bermakna seseorang berlari atau bergegas pergi secepat kilat (seolah-olah terbang) menuju ke lokasi kejadian suatu peristiwa.',
    contoh1: '事故の知らせを聞いて、すぐに病院へ飛んでいった。\n(Mendengar kabar kecelakaan itu, saya langsung bergegas "terbang" ke rumah sakit.)',
    contoh2: '警察が事件現場に飛ぶ。\n(Polisi bergegas ke tempat kejadian perkara.)'
  },
  {
    id: 'm6h3_31',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ローンの返済でボーナスが飛ぶ',
    furigana: 'ローンのへんさいでボーナスがとぶ',
    arti: 'Bonus lenyap untuk bayar cicilan',
    penjelasan: 'Sama dengan 消えてなくなる. Frasa ini mendeskripsikan kondisi di mana uang, ingatan, atau data tiba-tiba lenyap, hangus, atau habis dalam sekejap tanpa sisa.',
    contoh1: 'パソコンがフリーズして、保存していないデータが飛んだ。\n(Komputer saya hang, dan data yang belum disimpan langsung lenyap.)',
    contoh2: 'ギャンブルで一ヶ月の給料が飛んだ。\n(Gaji sebulan lenyap begitu saja karena judi.)'
  },
  {
    id: 'm6h3_32',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '話があちこちに飛ぶ',
    furigana: 'はなしがあちこちにとぶ',
    arti: 'Pembicaraan melompat-lompat kesana kemari',
    penjelasan: 'Menjelaskan alur cerita, topik pembicaraan, atau pikiran yang tidak fokus dan melompat dari satu bahasan ke bahasan lain secara tidak teratur.',
    contoh1: '彼の話はあちこちに飛ぶので、何を言いたいのかわからない。\n(Karena pembicaraannya melompat kesana kemari, saya tidak mengerti apa yang ingin dia katakan.)',
    contoh2: 'プレゼンの最中に話題が飛んでしまった。\n(Di tengah presentasi, topiknya melenceng/melompat ke hal lain.)'
  },

  // ==========================================
  // KELOMPOK 5: 結ぶ (むすぶ) - Mengikat / Menghubungkan / Berbuah
  // ==========================================
  {
    id: 'm6h3_33',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '靴のひもを結ぶ',
    furigana: 'くつのひもをむすぶ',
    arti: 'Mengikat tali sepatu',
    penjelasan: 'Ini adalah makna yang paling umum dan harfiah, yaitu menyimpulkan atau mengikatkan dua ujung tali (atau rambut, pita) agar tidak terlepas.',
    contoh1: '出かける前に靴のひもをしっかり結ぶ。\n(Sebelum pergi, ikat tali sepatumu dengan kencang.)',
    contoh2: '長い髪を後ろで一つに結んだ。\n(Dia mengikat rambut panjangnya menjadi satu di belakang.)'
  },
  {
    id: 'm6h3_34',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '契約を結ぶ',
    furigana: 'けいやくをむすぶ',
    arti: 'Menandatangani / Menjalin kontrak',
    penjelasan: 'Dalam konteks bisnis atau hukum, "mengikat" merujuk pada proses meresmikan perjanjian, kontrak, atau persekutuan antara dua belah pihak.',
    contoh1: '新しい会社とビジネスの契約を結んだ。\n(Kami telah menjalin/menandatangani kontrak bisnis dengan perusahaan baru.)',
    contoh2: '両国は平和条約を結んだ。\n(Kedua negara telah menyepakati dan menandatangani perjanjian damai.)'
  },
  {
    id: 'm6h3_35',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '東京と大阪を結ぶバス',
    furigana: 'とうきょうとおおさかをおむすぶバス',
    arti: 'Bus yang menghubungkan Tokyo dan Osaka',
    penjelasan: 'Sama dengan 2つの地点をつなぐ. Digunakan untuk sarana transportasi (seperti bus, kereta, jembatan, jalan raya) yang berfungsi sebagai jalur penghubung antara satu kota/lokasi dengan lokasi lainnya.',
    contoh1: '本州と四国を結ぶ大きな橋が建設された。\n(Sebuah jembatan besar yang menghubungkan pulau Honshu dan Shikoku telah dibangun.)',
    contoh2: '二つの都市を結ぶ新しい鉄道路線が開通した。\n(Jalur kereta baru yang menghubungkan kedua kota tersebut telah beroperasi.)'
  },
  {
    id: 'm6h3_36',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '二人は信頼感で結ばれている',
    furigana: 'ふたりはしんらいかんでむすばれている',
    arti: 'Keduanya disatukan oleh rasa saling percaya',
    penjelasan: 'Sama dengan つながっている. Merujuk pada ikatan emosional, spiritual, atau ikatan batin antar manusia (seperti pernikahan, persahabatan, atau rasa percaya) yang sangat kuat sehingga mereka "terikat" satu sama lain.',
    contoh1: '彼らは強い絆で結ばれた親友だ。\n(Mereka adalah sahabat yang terikat oleh ikatan batin yang sangat kuat.)',
    contoh2: '長い交際を経て、ついに二人は結ばれた。\n(Setelah menjalin hubungan yang lama, akhirnya mereka berdua menikah/dipersatukan.)'
  },
  {
    id: 'm6h3_37',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '長年の努力が実を結ぶ',
    furigana: 'ながねんのどりょくがみをおむすぶ',
    arti: 'Kerja keras bertahun-tahun membuahkan hasil',
    penjelasan: 'Sama dengan 形になる (terbentuk/berwujud). Idiom "実を結ぶ" (mi o musubu) secara harfiah berarti pohon yang menghasilkan buah. Makna kiasannya adalah usaha, kerja keras, atau latihan akhirnya membuahkan hasil yang sukses.',
    contoh1: '毎日の厳しい練習がついに実を結び、優勝を勝ち取った。\n(Latihan keras setiap hari akhirnya membuahkan hasil, dan kami memenangkan kejuaraan.)',
    contoh2: '彼の研究が実を結ぶ日がきっと来るだろう。\n(Suatu saat pasti akan tiba harinya di mana penelitiannya membuahkan hasil.)'
  },
  {
    id: 'm6h3_38',
    minggu: '6',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '口を固く結ぶ',
    furigana: 'くちをかたくむすぶ',
    arti: 'Menutup mulut rapat-rapat',
    penjelasan: 'Idiom yang mendeskripsikan tindakan merapatkan kedua bibir (seolah mengikat mulut). Ini mencerminkan sikap seseorang yang menahan diri untuk tidak berbicara, menjaga rahasia, atau menahan emosi yang kuat.',
    contoh1: '彼は秘密を守るため、口を固く結んで何も話さなかった。\n(Demi menjaga rahasia, dia menutup mulutnya rapat-rapat dan tidak mengatakan apa pun.)',
    contoh2: '怒りをこらえて、口を固く結んだ。\n(Dia menahan amarahnya dan mengatupkan bibirnya rapat-rapat.)'
  }
];

window.vocabData.push(...kosakata_m6h3);