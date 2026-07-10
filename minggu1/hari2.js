// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m1h2 = [
  {
    id: 'm1h2_1',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '情けない',
    furigana: 'なさけない',
    arti: 'Menyedihkan / Memalukan',
    penjelasan:
      'Menggambarkan perasaan sangat kecewa, sedih, atau malu terhadap diri sendiri maupun situasi karena hasilnya sangat jauh dari harapan (menyedihkan).',
    contoh1:
      'また負けてしまって情けない。\n(Aku merasa sangat memalukan dan kecewa pada diri sendiri karena kalah lagi.)',
    contoh2:
      '情けない言い訳をする。\n(Membuat alasan yang sangat menyedihkan dan tidak masuk akal.)'
  },
  {
    id: 'm1h2_2',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '望ましい',
    furigana: 'のぞましい',
    arti: 'Diharapkan / Ideal',
    penjelasan:
      'Kondisi atau hasil yang paling ideal, diharapkan, atau sangat dianjurkan untuk terjadi demi kebaikan bersama.',
    contoh1:
      '運動は毎日続けることが望ましい。\n(Sangat dianjurkan / idealnya olahraga dilakukan secara rutin setiap hari.)',
    contoh2:
      '望ましい結果が得られた。\n(Telah didapatkan hasil ideal seperti yang diharapkan.)'
  },
  {
    id: 'm1h2_3',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '好ましい',
    furigana: 'このましい',
    arti: 'Pantas / Disukai / Baik',
    penjelasan:
      'Sesuatu yang memberikan kesan positif, disukai, pantas, atau memberikan pengaruh yang baik di mata orang lain.',
    contoh1:
      '好ましい服装。\n(Pakaian yang pantas, sopan, dan memberikan kesan baik.)',
    contoh2:
      '好ましい影響を与える。\n(Memberikan pengaruh yang positif dan baik.)'
  },
  {
    id: 'm1h2_4',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '申し分がない',
    furigana: 'もうしぶんがない',
    arti: 'Sempurna / Tidak ada cela',
    penjelasan:
      'Kondisi yang sudah sangat sempurna, luar biasa baik, dan sama sekali tidak ada celah untuk dikritik atau dikomplain.',
    contoh1:
      '申し分（が）ない作品。\n(Sebuah karya yang sempurna tanpa cela sedikit pun.)',
    contoh2:
      '彼の態度は申し分ない。\n(Sikapnya sangat luar biasa baik dan tidak ada kurangnya.)'
  },
  {
    id: 'm1h2_5',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '快い',
    furigana: 'こころよい',
    arti: 'Menyenangkan / Dengan senang hati',
    penjelasan:
      'Perasaan yang nyaman dan menyenangkan, atau sikap bersedia melakukan/menerima sesuatu dengan tulus dan senang hati tanpa beban.',
    contoh1:
      '申し出を快く承諾する。\n(Menerima tawaran tersebut dengan sangat senang hati.)',
    contoh2:
      '快い返事。\n(Jawaban ramah yang menyenangkan hati pendengarnya.)'
  },
  {
    id: 'm1h2_6',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'すがすがしい',
    furigana: 'すがすがしい',
    arti: 'Menyegarkan / Melegakan',
    penjelasan:
      'Rasa segar, bersih, dan plong, biasanya digunakan untuk menggambarkan udara pagi yang sejuk atau perasaan lega setelah masalah selesai.',
    contoh1:
      'すがすがしい朝。\n(Udara pagi yang sangat menyegarkan dan sejuk.)',
    contoh2:
      'すがすがしい気分になる。\n(Perasaan menjadi segar dan plong/lega.)'
  },
  {
    id: 'm1h2_7',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '爽快な',
    furigana: 'そうかいな',
    arti: 'Segar / Nyaman (Refreshing)',
    penjelasan:
      'Sensasi kesegaran fisik atau mental yang luar biasa, seperti perasaan setelah berolahraga, mandi, atau minum minuman dingin.',
    contoh1:
      '気分爽快。\n(Perasaan yang sangat segar, ceria, dan bersemangat.)',
    contoh2:
      '爽快な目覚め。\n(Bangun tidur dengan kondisi tubuh yang bugar dan segar.)'
  },
  {
    id: 'm1h2_8',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '待ち遠しい',
    furigana: 'まちどおしい',
    arti: 'Tidak sabar menunggu',
    penjelasan:
      'Perasaan sangat menantikan suatu acara atau kejadian menyenangkan di masa depan hingga rasanya waktu berjalan terlalu lambat.',
    contoh1:
      '春の訪れが待ち遠しい。\n(Sudah tidak sabar menantikan datangnya musim semi.)',
    contoh2:
      '週末が待ち遠しい。\n(Aku benar-benar tidak sabar menunggu akhir pekan tiba.)'
  },
  {
    id: 'm1h2_9',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '心強い',
    furigana: 'こころづよい',
    arti: 'Merasa aman / Tenteram',
    penjelasan:
      'Merasa kuat, berani, aman, dan tenang karena memiliki dukungan yang bisa diandalkan dalam menghadapi suatu tantangan.',
    contoh1:
      'あなたと一緒だと心強い。\n(Aku merasa aman dan berani asalkan bersama denganmu.)',
    contoh2:
      '彼の応援が心強い。\n(Dukungannya membuatku merasa jauh lebih tenang dan percaya diri.)'
  },
  {
    id: 'm1h2_10',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '心細い',
    furigana: 'こころぼそい',
    arti: 'Cemas / Kesepian',
    penjelasan:
      'Kebalikan dari 心強い; merasa cemas, was-was, tidak aman, dan khawatir karena harus menghadapi sesuatu sendirian tanpa dukungan.',
    contoh1:
      '一人では心細い。\n(Aku merasa sangat cemas dan kesepian kalau sendirian.)',
    contoh2:
      '夜道は心細い。\n(Berjalan sendirian di malam hari terasa sangat menakutkan dan membuat was-was.)'
  },
  {
    id: 'm1h2_11',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '空しい',
    furigana: 'むなしい',
    arti: 'Hampa / Kosong / Sia-sia',
    penjelasan:
      'Perasaan hampa di dalam hati, atau menggambarkan suatu usaha dan tindakan keras yang berujung sia-sia tanpa hasil sama sekali.',
    contoh1:
      '喜びが何もない空しい生活。\n(Kehidupan yang terasa hampa dan kosong tanpa ada kegembiraan sama sekali.)',
    contoh2:
      '空しい努力に終わった。\n(Berakhir menjadi usaha yang sia-sia belaka.)'
  },
  {
    id: 'm1h2_12',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '切ない',
    furigana: 'せつない',
    arti: 'Sedih / Pilu (Menyesakkan dada)',
    penjelasan:
      'Perasaan sedih, rindu, atau sesak di dada yang mendalam, sering kali berhubungan dengan cinta bertepuk sebelah tangan atau perpisahan.',
    contoh1:
      '彼と離れるのはとても切ない。\n(Rasanya sangat sedih dan pilu saat harus berpisah dengannya.)',
    contoh2:
      '切ない恋の物語。\n(Sebuah kisah cinta yang sangat menyayat hati/pilu.)'
  },
  {
    id: 'm1h2_13',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '物足りない',
    furigana: 'ものたりない',
    arti: 'Kurang memuaskan / Ada yang kurang',
    penjelasan:
      'Perasaan belum sepenuhnya puas atau merasa ada sesuatu yang kurang (entah itu rasa, porsi, atau kualitas) meskipun sebenarnya tidak buruk.',
    contoh1:
      '食事の量が物足りない。\n(Porsi makanannya terasa kurang nendang / kurang membuat kenyang.)',
    contoh2:
      'この味付けは少し物足りない。\n(Bumbu masakan ini rasanya agak nanggung / ada yang kurang.)'
  },
  {
    id: 'm1h2_14',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'わずらわしい',
    furigana: 'わずらわしい',
    arti: 'Merepotkan / Ribet',
    penjelasan:
      'Segala hal yang memakan waktu, rumit, ribet, dan menguras emosi atau pikiran sehingga sangat merepotkan untuk diurus.',
    contoh1:
      '隣人との付き合いがわずらわしい。\n(Basa-basi bersosialisasi dengan tetangga itu kadang sangat merepotkan.)',
    contoh2:
      'わずらわしい手続き。\n(Prosedur administrasi yang sangat ribet dan memusingkan.)'
  },
  {
    id: 'm1h2_15',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'うっとうしい',
    furigana: 'うっとうしい',
    arti: 'Sumpek / Mengganggu',
    penjelasan:
      'Rasa terganggu, risih, atau sumpek, baik karena cuaca yang terus-terusan mendung (suram) maupun karena kehadiran seseorang yang menjengkelkan.',
    contoh1:
      'うっとうしい天気。\n(Cuaca yang suram dan bikin sumpek/bad mood.)',
    contoh2:
      '彼の態度はうっとうしい。\n(Sikap orang itu benar-benar mengganggu dan membuat risih.)'
  },
  {
    id: 'm1h2_16',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'うざい',
    furigana: 'うざい',
    arti: 'Menyebalkan / Nyebelin (Slang)',
    penjelasan:
      'Kosakata bahasa gaul (slang) yang mengekspresikan rasa jengkel luar biasa terhadap sesuatu atau seseorang yang berisik, ribet, atau sangat mengganggu.',
    contoh1:
      'あの人、本当にうざい。\n(Orang itu benar-benar nyebelin banget.)',
    contoh2:
      'うざい虫が飛んでいる。\n(Ada serangga terbang yang sangat mengganggu/bikin risih.)'
  },
  {
    id: 'm1h2_17',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'ばかばかしい',
    furigana: 'ばかばかしい',
    arti: 'Konyol / Bodoh / Buang waktu',
    penjelasan:
      'Hal konyol yang sangat tidak masuk akal, menggelikan, atau membuang-buang waktu sehingga tidak pantas untuk ditanggapi secara serius.',
    contoh1:
      'ばかばかしい話。\n(Cerita omong kosong yang sangat bodoh dan konyol.)',
    contoh2:
      'そんなことで怒るなんてばかばかしい。\n(Marah hanya karena hal sepele seperti itu sungguh membuang energi / konyol.)'
  },
  {
    id: 'm1h2_18',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '痛ましい',
    furigana: 'いたましい',
    arti: 'Menyedihkan / Mengenaskan',
    penjelasan:
      'Pemandangan, kejadian, atau kondisi yang sangat tragis dan mengenaskan hingga membuat hati orang yang melihatnya ikut terasa sakit (simpati).',
    contoh1:
      '痛ましい事故現場。\n(Lokasi kecelakaan yang sangat tragis dan mengenaskan.)',
    contoh2:
      '痛ましい姿。\n(Kondisi/penampilan yang sangat memprihatinkan dan membuat iba.)'
  },
  {
    id: 'm1h2_19',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'きまりが悪い',
    furigana: 'きまりがわるい',
    arti: 'Canggung / Salah tingkah',
    penjelasan:
      'Rasa canggung, salah tingkah, atau malu (awkward) karena berada dalam situasi yang memalukan atau karena melakukan kesalahan konyol di depan publik.',
    contoh1:
      '会議に遅れてきまり（が）悪かった。\n(Merasa sangat canggung dan salah tingkah karena datang terlambat ke rapat.)',
    contoh2:
      '人前で転んで、きまりが悪かった。\n(Sangat malu rasanya saat terjatuh di depan banyak orang.)'
  },
  {
    id: 'm1h2_20',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'あさましい',
    furigana: 'あさましい',
    arti: 'Hina / Licik / Sangat memalukan',
    penjelasan:
      'Karakter atau niat yang sangat rendah, hina, licik, atau tamak, yang sangat memalukan secara moral dan membuat orang lain jijik.',
    contoh1:
      '彼は根性があさましい。\n(Dia memiliki watak dasar yang sangat hina dan licik.)',
    contoh2:
      'あさましい争い。\n(Pertikaian perebutan harta/kekuasaan yang sangat memalukan.)'
  },
  {
    id: 'm1h2_21',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'おっかない',
    furigana: 'おっかない',
    arti: 'Seram / Mengerikan',
    penjelasan:
      'Istilah kasual (sering dipakai dalam percakapan lisan) untuk menyatakan rasa takut, seram, atau terancam, sama artinya dengan "怖い" (kowai).',
    contoh1:
      'この辺りは夜になるとおっかない。\n(Daerah sekitar sini menjadi sangat seram kalau sudah malam.)',
    contoh2:
      'おっかない顔で怒る。\n(Memarahi dengan ekspresi wajah yang sangat mengerikan.)'
  },
  {
    id: 'm1h2_22',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'ふさわしい',
    furigana: 'ふさわしい',
    arti: 'Pantas / Cocok / Sepadan',
    penjelasan:
      'Sesuatu yang sangat sepadan, pantas, tepat, atau ideal untuk dipadukan dengan suatu peran, acara, maupun posisi tertentu.',
    contoh1:
      '彼はリーダーとしてふさわしい。\n(Dia memiliki kualitas yang sangat pantas untuk menjadi seorang pemimpin.)',
    contoh2:
      'その場にふさわしい服装。\n(Pakaian yang sangat cocok dan sesuai dengan etiket acara tersebut.)'
  },
  {
    id: 'm1h2_23',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '見苦しい',
    furigana: 'みぐるしい',
    arti: 'Tidak pantas dilihat / Memalukan',
    penjelasan:
      'Sesuatu (bisa penampilan atau tindakan) yang sangat buruk, tidak sedap dipandang, atau memalukan sehingga membuat orang lain merasa risih melihatnya.',
    contoh1:
      '見苦しい態度。\n(Sikap ngotot/buruk yang sangat tidak pantas untuk dilihat.)',
    contoh2:
      '見苦しい言い訳はやめなさい。\n(Hentikan alasan-alasan yang memalukan itu, terimalah kekalahanmu.)'
  },
  {
    id: 'm1h2_24',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '心苦しい',
    furigana: 'こころぐるしい',
    arti: 'Merasa tidak enak hati / Segan',
    penjelasan:
      'Rasa bersalah yang mengganjal di hati, merasa sangat tidak enak, segan, atau berdosa saat harus menolak atau meminta bantuan yang merepotkan orang lain.',
    contoh1:
      'こんなことを頼むのは心苦しい。\n(Sebenarnya aku merasa sangat tidak enak hati/segan untuk meminta tolong hal merepotkan seperti ini.)',
    contoh2:
      'お断りするのは心苦しいのですが…。\n(Walaupun rasanya sangat berat hati untuk menolaknya, namun...)'
  },
  {
    id: 'm1h2_25',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '焦る',
    furigana: 'あせる',
    arti: 'Panik / Terburu-buru / Grusa-grusu',
    penjelasan:
      'Keadaan panik, kalut, dan kehilangan ketenangan karena dikejar waktu, situasi darurat, atau ekspektasi yang tinggi.',
    contoh1:
      '試験で時間がなくて焦った。\n(Aku jadi sangat panik karena kehabisan waktu saat ujian.)',
    contoh2:
      '焦ってミスをしてしまった。\n(Aku malah melakukan kecerobohan akibat terlalu panik dan terburu-buru.)'
  },
  {
    id: 'm1h2_26',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'あきれる',
    furigana: 'あきれる',
    arti: 'Tercengang / Habis pikir',
    penjelasan:
      'Perasaan terkejut (dalam konotasi negatif), geleng-geleng kepala, dan kehabisan kata-kata melihat tindakan bodoh atau keterlaluan dari seseorang.',
    contoh1:
      'あまりに高い値段にあきれた。\n(Aku geleng-geleng kepala / tercengang melihat harganya yang sangat tidak masuk akal mahalnya.)',
    contoh2:
      '彼のひどい態度にはあきれる。\n(Aku benar-benar habis pikir melihat kelakuannya yang seburuk itu.)'
  },
  {
    id: 'm1h2_27',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '気に障る',
    furigana: 'きにさわる',
    arti: 'Menyinggung perasaan',
    penjelasan:
      'Ucapan atau perbuatan yang melukai, menyinggung perasaan, dan membuat orang lain menjadi bad mood atau sakit hati.',
    contoh1:
      '人の気に障るようなことを言ってはいけない。\n(Jangan mengatakan hal-hal yang dapat menyinggung dan melukai perasaan orang lain.)',
    contoh2:
      '私の言葉が彼の気に障ったようだ。\n(Sepertinya perkataanku tadi menyinggung perasaan / menohok hatinya.)'
  },
  {
    id: 'm1h2_28',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'しゃくに障る',
    furigana: 'しゃくにさわる',
    arti: 'Menjengkelkan / Membuat naik pitam',
    penjelasan:
      'Segala sesuatu yang sangat memicu emosi, membuat darah mendidih, atau sangat menjengkelkan hingga sulit dimaafkan. Sinonim: かんに障る.',
    contoh1:
      '彼の態度がしゃくに障った。\n(Tingkah lakunya itu benar-benar memancing amarahku.)',
    contoh2:
      'かんに障る言い方をする。\n(Dia menggunakan gaya bicara yang sangat menjengkelkan dan memancing emosi.)'
  },
  {
    id: 'm1h2_29',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '気兼ねする',
    furigana: 'きがねする',
    arti: 'Sungkan / Jaga image (Jaim)',
    penjelasan:
      'Rasa sungkan, canggung, atau jaim karena khawatir merepotkan atau mengganggu privasi orang lain, sehingga tidak bisa bersikap bebas.',
    contoh1:
      'ホームステイの家族に気兼ねする。\n(Aku merasa sungkan / harus menjaga sikap dengan keluarga homestay-ku.)',
    contoh2:
      '気兼ねなく話せる友達。\n(Teman akrab yang dengannya aku bisa mengobrol bebas tanpa rasa sungkan sedikit pun.)'
  },
  {
    id: 'm1h2_30',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'すねる',
    furigana: 'すねる',
    arti: 'Ngambek / Merajuk',
    penjelasan:
      'Tindakan ngambek, merajuk, atau memalingkan muka karena merasa kesal/tidak puas, sering ditunjukkan oleh anak-anak ketika permintaannya ditolak.',
    contoh1:
      '子どもがすねている。\n(Anak itu sedang ngambek/merajuk.)',
    contoh2:
      '注意されてすねてしまった。\n(Dia malah merajuk setelah ditegur atas kesalahannya.)'
  },
  {
    id: 'm1h2_31',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'むかつく',
    furigana: 'むかつく',
    arti: 'Sangat kesal / Mual (Eneg)',
    penjelasan:
      'Kata ini memiliki dua arti: (1) Rasa marah dan jengkel yang memuncak melihat sesuatu, atau (2) Rasa mual/eneg secara fisik di bagian perut atau dada.',
    contoh1:
      '彼の顔を見るだけでむかつく。\n(Melihat wajahnya saja sudah bikin aku sangat kesal/emosi.)',
    contoh2:
      '船に酔って、胸がむかつく。\n(Karena mabuk laut, dadaku terasa sangat mual dan eneg.)'
  },
  {
    id: 'm1h2_32',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '恥をかく',
    furigana: 'はじをかく',
    arti: 'Mempermalukan diri sendiri',
    penjelasan:
      'Tindakan atau kejadian yang membuat seseorang kehilangan muka, dipermalukan, atau menanggung rasa malu yang besar di depan publik.',
    contoh1:
      'みんなの前で恥をかいた。\n(Aku mempermalukan diriku sendiri di depan semua orang.)',
    contoh2:
      'とんでもない間違いをして恥をかいた。\n(Aku menanggung malu yang besar karena melakukan kesalahan yang sangat fatal.)'
  }
];

// Menambahkan kosakata dari file ini ke data master
window.vocabData.push(...kosakata_m1h2);