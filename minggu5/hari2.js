// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m5h2 = [
  // --- KANJI 和 (Wa) ---
  {
    id: 'm5h2_1',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '和風',
    furigana: 'わふう',
    arti: 'Gaya / Ala Jepang',
    penjelasan: 'Segala sesuatu yang bernuansa atau bergaya tradisional Jepang (makanan, rumah, baju, dll). Kebalikan dari 洋風 (youfuu - gaya Barat).',
    contoh1: '和風建築。\n(Arsitektur bangunan gaya tradisional Jepang.)',
    contoh2: '今日は和風の料理を作りましょう。\n(Ayo masak hidangan gaya Jepang hari ini.)'
  },
  {
    id: 'm5h2_2',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '和式',
    furigana: 'わしき',
    arti: 'Gaya/Format Jepang',
    penjelasan: 'Tipe atau format standar khas Jepang. Paling sering dipakai untuk menyebut toilet jongkok ala Jepang (kebalikan dari 洋式 / youshiki - toilet duduk gaya Barat).',
    contoh1: '和式トイレ。\n(Toilet jongkok gaya Jepang.)',
    contoh2: 'この旅館の部屋は和式です。\n(Kamar di penginapan ini berkonsep gaya Jepang.)'
  },
  {
    id: 'm5h2_3',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '温和',
    furigana: 'おんわ',
    arti: 'Hangat / Lembut / Bersahabat',
    penjelasan: 'Bisa untuk cuaca/iklim yang hangat dan nyaman, atau untuk sifat orang yang lemah lembut, tenang, dan tidak gampang marah.',
    contoh1: '温和な気候。\n(Iklim dan cuaca yang hangat/bersahabat.)',
    contoh2: '彼女は温和な人です。\n(Dia adalah orang yang lemah lembut.)'
  },
  {
    id: 'm5h2_4',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '調和',
    furigana: 'ちょうわ',
    arti: 'Harmoni / Keselarasan',
    penjelasan: 'Kondisi ketika beberapa hal berbeda menyatu dengan pas, seimbang, dan terlihat serasi.',
    contoh1: 'よく調和する。\n(Menyatu dan serasi dengan sangat baik.)',
    contoh2: '自然と調和したデザイン。\n(Desain yang selaras dengan alam.)'
  },
  {
    id: 'm5h2_5',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '和む',
    furigana: 'なごむ',
    arti: 'Menjadi tenang / Rileks',
    penjelasan: 'Perasaan ketika stres atau suasana tegang berubah menjadi santai, tenang, dan damai.',
    contoh1: '心が和む。\n(Hati menjadi tenang dan rileks.)',
    contoh2: '赤ちゃんの笑顔を見ると和む。\n(Melihat senyuman bayi membuat hati jadi tenang.)'
  },

  // --- KANJI 図 (Zu/To) ---
  {
    id: 'm5h2_6',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '図案',
    furigana: 'ずあん',
    arti: 'Desain / Pola / Sketsa',
    penjelasan: 'Gambar draf, sketsa awal, atau pola desain untuk sebuah produk, seni, atau logo.',
    contoh1: '図案を描く。\n(Menggambar draf pola desain.)',
    contoh2: '新しい切手の図案。\n(Sketsa desain untuk prangko baru.)'
  },
  {
    id: 'm5h2_7',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '指図',
    furigana: 'さしず',
    arti: 'Perintah / Instruksi',
    penjelasan: 'Tindakan menyuruh atau memberi perintah kepada orang lain (sering terkesan suka mengatur/nyuruh-nyuruh).',
    contoh1: 'あれこれ指図する。\n(Memberi perintah ini dan itu.)',
    contoh2: '誰の指図も受けない。\n(Saya tidak akan mengikuti perintah dari siapa pun.)'
  },

  // --- KANJI 実 (Jitsu/Mi) ---
  {
    id: 'm5h2_8',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '実態',
    furigana: 'じったい',
    arti: 'Kondisi sebenarnya / Realitas',
    penjelasan: 'Fakta atau kenyataan asli di lapangan, bukan sekadar apa yang terlihat dari luar.',
    contoh1: '実態を調査する。\n(Menyelidiki kondisi sebenarnya.)',
    contoh2: '社会の実態を知る。\n(Mengetahui realitas sebenarnya tentang masyarakat.)'
  },
  {
    id: 'm5h2_9',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '実業',
    furigana: 'じつぎょう',
    arti: 'Bisnis / Industri nyata',
    penjelasan: 'Sektor bisnis atau industri yang menghasilkan barang/jasa nyata seperti manufaktur, perdagangan, dan pertanian.',
    contoh1: '実業家。\n(Pengusaha / Pebisnis.)',
    contoh2: '彼は実業の世界で成功した。\n(Dia telah sukses di dunia bisnis.)'
  },
  {
    id: 'm5h2_10',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '誠実',
    furigana: 'せいじつ',
    arti: 'Tulus / Jujur',
    penjelasan: 'Sifat orang yang jujur, tulus, dapat dipercaya, dan tidak suka menipu.',
    contoh1: '誠実な人。\n(Orang yang sangat jujur dan tulus.)',
    contoh2: '誠実に対応する。\n(Merespons/melayani dengan tulus dan jujur.)'
  },
  {
    id: 'm5h2_11',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '真実',
    furigana: 'しんじつ',
    arti: 'Kebenaran / Fakta',
    penjelasan: 'Kejadian nyata yang sesungguhnya dan tidak bohong.',
    contoh1: '真実を語る。\n(Mengungkapkan kebenaran.)',
    contoh2: 'いつか真実が明らかになる。\n(Suatu hari nanti kebenaran pasti terungkap.)'
  },
  {
    id: 'm5h2_12',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '口実',
    furigana: 'こうじつ',
    arti: 'Alasan / Dalih',
    penjelasan: 'Alasan yang dibuat-buat untuk menutupi kesalahan, menghindar, atau membenarkan diri.',
    contoh1: '下手な口実。\n(Alasan/dalih yang konyol.)',
    contoh2: '病気を口実にして休む。\n(Menggunakan alasan sakit sebagai dalih untuk libur.)'
  },
  {
    id: 'm5h2_13',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '実入り',
    furigana: 'みいり',
    arti: 'Penghasilan / Keuntungan',
    penjelasan: 'Pendapatan uang, hasil panen, atau keuntungan bersih dari suatu pekerjaan/usaha.',
    contoh1: '実入りのいい商売。\n(Bisnis yang menghasilkan keuntungan lumayan.)',
    contoh2: '今月は実入りが少ない。\n(Bulan ini penghasilan sangat sedikit.)'
  },

  // --- KANJI 公 (Kou/Ooyake) ---
  {
    id: 'm5h2_14',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '公正',
    furigana: 'こうせい',
    arti: 'Adil / Objektif',
    penjelasan: 'Sifat atau keputusan yang adil, jujur, sesuai aturan, dan tidak memihak.',
    contoh1: '公正な取り引き。\n(Transaksi bisnis yang adil.)',
    contoh2: '公正な裁判。\n(Proses peradilan yang adil.)'
  },
  {
    id: 'm5h2_15',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '公平',
    furigana: 'こうへい',
    arti: 'Sama rata / Adil',
    penjelasan: 'Memberikan bagian, kesempatan, atau perlakuan yang sama persis kepada semua orang tanpa membeda-bedakan.',
    contoh1: '公平に分ける。\n(Membagi sesuatu secara adil/sama rata.)',
    contoh2: '誰に対しても公平だ。\n(Bersikap adil kepada siapa saja.)'
  },
  {
    id: 'm5h2_16',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公立',
    furigana: 'こうりつ',
    arti: 'Negeri / Publik',
    penjelasan: 'Fasilitas umum (sekolah, RS, perpustakaan) milik pemerintah. Lawannya 私立 (shiritsu - swasta).',
    contoh1: '公立の学校。\n(Sekolah negeri.)',
    contoh2: '公立病院で働く。\n(Bekerja di rumah sakit umum pemerintah.)'
  },
  {
    id: 'm5h2_17',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公用',
    furigana: 'こうよう',
    arti: 'Penggunaan resmi / Dinas',
    penjelasan: 'Barang, kendaraan, atau bahasa yang digunakan untuk urusan dinas/pemerintah, bukan pribadi.',
    contoh1: '公用語。\n(Bahasa resmi.)',
    contoh2: '公用車を使う。\n(Menggunakan mobil dinas.)'
  },
  {
    id: 'm5h2_18',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公私',
    furigana: 'こうし',
    arti: 'Publik dan Pribadi',
    penjelasan: 'Mencakup dua urusan sekaligus: urusan kerjaan/dinas (publik) dan urusan keluarga/pribadi.',
    contoh1: '公私混同する。\n(Mencampuradukkan urusan kerjaan dan masalah pribadi.)',
    contoh2: '公私の区別をつける。\n(Memisahkan urusan kerjaan dari kehidupan pribadi.)'
  },
  {
    id: 'm5h2_19',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '主人公',
    furigana: 'しゅじんこう',
    arti: 'Karakter / Tokoh utama',
    penjelasan: 'Tokoh utama dalam cerita novel, anime, film, atau drama.',
    contoh1: '物語の主人公。\n(Tokoh utama dalam cerita ini.)',
    contoh2: '映画の主人公になりきる。\n(Menghayati peran menjadi tokoh utama film.)'
  },
  {
    id: 'm5h2_20',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公',
    furigana: 'おおやけ',
    arti: 'Publik / Umum / Resmi',
    penjelasan: 'Hal atau informasi yang terbuka untuk umum dan diketahui masyarakat luas.',
    contoh1: '事件が公になる。\n(Kejadian tersebut sudah diketahui oleh publik.)',
    contoh2: '公の発表。\n(Pengumuman resmi kepada masyarakat.)'
  },

  // --- KANJI 連 (Ren/Tsura) ---
  {
    id: 'm5h2_21',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '連休',
    furigana: 'れんきゅう',
    arti: 'Libur panjang berturut-turut',
    penjelasan: 'Hari libur yang bersambung selama beberapa hari berturut-turut.',
    contoh1: '３日間の連休。\n(Libur berturut-turut selama 3 hari.)',
    contoh2: '連休を利用して旅行に行く。\n(Pergi jalan-jalan memanfaatkan libur panjang.)'
  },
  {
    id: 'm5h2_22',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '連帯',
    furigana: 'れんたい',
    arti: 'Solidaritas / Tanggung jawab bersama',
    penjelasan: 'Rasa kebersamaan atau ikatan kelompok untuk menanggung beban/kesalahan secara bersama-sama.',
    contoh1: '連帯責任。\n(Tanggung jawab bersama / kolektif.)',
    contoh2: '連帯感を持つ。\n(Memiliki rasa solidaritas kelompok.)'
  },
  {
    id: 'm5h2_23',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '連なる',
    furigana: 'つらなる',
    arti: 'Berjejer / Membentang',
    penjelasan: 'Kondisi barang atau benda alam (seperti gunung, mobil) yang berjejer panjang dan bersambung.',
    contoh1: '渋滞で車が連なっている。\n(Mobil berjejer panjang karena macet.)',
    contoh2: '山が連なる風景。\n(Pemandangan deretan pegunungan yang membentang.)'
  },
  {
    id: 'm5h2_24',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '連ねる',
    furigana: 'つらねる',
    arti: 'Menderetkan / Mencantumkan',
    penjelasan: 'Menjejalkan sesuatu hingga berderet, atau menambahkan nama ke dalam daftar.',
    contoh1: 'リストに名前を連ねる。\n(Mencantumkan nama ke dalam daftar.)',
    contoh2: '車を連ねて走る。\n(Mengendarai mobil secara berkonvoi.)'
  },

  // --- KANJI 告 (Koku/Tsu) ---
  {
    id: 'm5h2_25',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '告知',
    furigana: 'こくち',
    arti: 'Pemberitahuan / Pengumuman',
    penjelasan: 'Pemberitahuan resmi. Sering dipakai juga saat dokter menyampaikan vonis penyakit kepada pasien.',
    contoh1: 'ガンの告知をする。\n(Memberitahukan vonis kanker kepada pasien.)',
    contoh2: 'イベントの告知を出す。\n(Mengeluarkan pengumuman acara.)'
  },
  {
    id: 'm5h2_26',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '告白',
    furigana: 'こくはく',
    arti: 'Pengakuan (cinta/dosa)',
    penjelasan: 'Mengungkapkan rahasia atau perasaan terpendam. Bisa untuk "menembak" gebetan atau mengakui kesalahan.',
    contoh1: '罪を告白する。\n(Mengakui kesalahan/dosa yang dilakukan.)',
    contoh2: '好きな人に告白した。\n(Saya sudah menyatakan cinta kepada orang yang disukai.)'
  },
  {
    id: 'm5h2_27',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '予告',
    furigana: 'よこく',
    arti: 'Pemberitahuan awal / Trailer',
    penjelasan: 'Info atau cuplikan awal tentang hal yang akan tayang/terjadi nanti (seperti trailer film).',
    contoh1: '映画の予告。\n(Trailer/cuplikan film.)',
    contoh2: '予告なしにテストが行われた。\n(Ujian diadakan mendadak tanpa pemberitahuan awal.)'
  },
  {
    id: 'm5h2_28',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '告げる',
    furigana: 'つげる',
    arti: 'Memberitahukan / Mengumumkan',
    penjelasan: 'Bahasa agak formal/puitis untuk menyampaikan kabar, nama, atau pengumuman secara lisan.',
    contoh1: '名前を告げる。\n(Memberitahukan atau menyebutkan nama.)',
    contoh2: '春の訪れを告げる。\n(Mengumumkan datangnya musim semi.)'
  },

  // --- KANJI 記 (Ki/Shiru) ---
  {
    id: 'm5h2_29',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '手記',
    furigana: 'しゅき',
    arti: 'Catatan pribadi / Memoar',
    penjelasan: 'Catatan pengalaman pribadi yang ditulis sendiri oleh orang yang mengalaminya.',
    contoh1: '体験を手記にまとめる。\n(Merangkum pengalaman ke dalam catatan pribadi.)',
    contoh2: '戦争の手記を読む。\n(Membaca catatan pribadi tentang kisah perang.)'
  },
  {
    id: 'm5h2_30',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '伝記',
    furigana: 'でんき',
    arti: 'Biografi',
    penjelasan: 'Buku yang menceritakan riwayat hidup dan perjalanan tokoh terkenal.',
    contoh1: '伝記を読む。\n(Membaca buku biografi.)',
    contoh2: 'リンカーンの伝記。\n(Buku biografi Abraham Lincoln.)'
  },
  {
    id: 'm5h2_31',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '記す',
    furigana: 'しるす',
    arti: 'Menuliskan / Mencatat',
    penjelasan: 'Kata kerja formal untuk menulis/mencatat sesuatu, atau mematri niat/janji di dalam hati.',
    contoh1: '名前を記す。\n(Menuliskan nama.)',
    contoh2: '心に記す。\n(Mematrikan di dalam hati/ingatan.)'
  }
];

window.vocabData.push(...kosakata_m5h2);