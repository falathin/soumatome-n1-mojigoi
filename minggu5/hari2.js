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
    arti: 'Gaya Jepang / Ala Jepang',
    penjelasan: 'Desain, pola, arsitektur, masakan, atau gaya hidup yang bernuansa budaya tradisional Jepang (lawannya adalah 洋風 / youfuu - gaya Barat).',
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
    arti: 'Gaya Jepang (misal: toilet/format)',
    penjelasan: 'Merujuk pada format, jenis, atau struktur gaya tradisional Jepang. Paling sering dipakai dalam percakapan sehari-hari untuk menyebut toilet jongkok ala Jepang (kebalikannya 洋式 / youshiki - gaya Barat).',
    contoh1: '和式トイレ。\n(Toilet jongkok gaya Jepang.)',
    contoh2: 'この旅館の部屋は和式です。\n(Kamar di penginapan tradisional ini berkonsep gaya Jepang.)'
  },
  {
    id: 'm5h2_3',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '温和',
    furigana: 'おんわ',
    arti: 'Hangat / Lembut / Bersahabat (cuaca)',
    penjelasan: 'Bisa dipakai dalam dua situasi: pertama, cuaca atau iklim yang bersahabat dan nyaman (tidak terlalu dingin atau panas). Kedua, merujuk pada watak atau kepribadian seseorang yang tenang, lemah lembut, dan tidak gampang marah.',
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
    penjelasan: 'Kondisi di mana elemen-elemen yang berbeda menyatu dengan baik dan menghasilkan suasana yang pas, seimbang, serasi, dan tidak terlihat janggal.',
    contoh1: 'よく調和する。\n(Menyatu dan serasi dengan sangat baik / sangat harmonis.)',
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
    penjelasan: 'Perasaan di mana ketegangan hati, stres, atau suasana tegang berangsur-angsur hilang, lalu berubah menjadi tenang, santai, akrab, dan damai.',
    contoh1: '心が和む。\n(Hati menjadi tenang dan rileks.)',
    contoh2: '赤ちゃんの笑顔を見ると和む。\n(Melihat senyuman bayi membuat suasana hati jadi tenang.)'
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
    penjelasan: 'Sketsa dasar, draf, atau ide desain grafis, lukisan, dan pola yang dibuat untuk diterapkan pada sebuah proyek seni, logo, maupun produk industri.',
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
    penjelasan: 'Tindakan memberi perintah atau instruksi kepada orang lain tentang apa yang harus dilakukan. Kadang memiliki nuansa yang agak mengekang atau menjengkelkan jika dilakukan berlebihan (suka nyuruh-nyuruh).',
    contoh1: 'あれこれ指図する。\n(Memberi perintah ini dan itu.)',
    contoh2: '誰の指図も受けない。\n(Saya tidak akan menerima atau mengikuti perintah dari siapa pun.)'
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
    penjelasan: 'Situasi asli, status sesungguhnya, atau wujud sebenarnya dari sesuatu yang sedang terjadi, yang biasanya mungkin berbeda dengan apa yang digembar-gemborkan atau terlihat dari luar.',
    contoh1: '実態を調査する。\n(Menyelidiki kondisi atau realitas sebenarnya.)',
    contoh2: '社会の実態を知る。\n(Mengetahui realitas sebenarnya tentang masyarakat.)'
  },
  {
    id: 'm5h2_9',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '実業',
    furigana: 'じつぎょう',
    arti: 'Bisnis / Industri',
    penjelasan: 'Merujuk pada sektor bisnis, perusahaan, komersial, atau industri dalam bidang seperti manufaktur, pertanian, dan perdagangan yang menjadi fondasi utama ekonomi.',
    contoh1: '実業家。\n(Pengusaha bisnis / Pelaku industri.)',
    contoh2: '彼は実業の世界で成功した。\n(Beliau telah meraih kesuksesan di dunia bisnis/industri.)'
  },
  {
    id: 'm5h2_10',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '誠実',
    furigana: 'せいじつ',
    arti: 'Tulus / Jujur',
    penjelasan: 'Sifat seseorang yang jujur, bisa dipercaya, lurus hati, dan tulus dalam tutur kata maupun perbuatan, serta selalu bertindak tanpa ada niat menipu.',
    contoh1: '誠実な人。\n(Orang yang sangat jujur dan tulus.)',
    contoh2: '誠実に対応する。\n(Merespons dan melayani dengan tulus dan jujur.)'
  },
  {
    id: 'm5h2_11',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '真実',
    furigana: 'しんじつ',
    arti: 'Kebenaran / Fakta',
    penjelasan: 'Kenyataan, hakikat, atau fakta yang benar-benar terjadi, sejati, dan tidak dipalsukan. Sepenuhnya bebas dari kebohongan, tipuan, atau cerita karangan semata.',
    contoh1: '真実を語る。\n(Mengungkapkan fakta atau kebenaran.)',
    contoh2: 'いつか真実が明らかになる。\n(Suatu hari nanti kebenaran pasti akan terungkap.)'
  },
  {
    id: 'm5h2_12',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '口実',
    furigana: 'こうじつ',
    arti: 'Alasan / Dalih',
    penjelasan: 'Alasan yang sengaja dibuat-buat atau digunakan oleh seseorang sebagai dalih untuk membenarkan tindakan, menghindari tanggung jawab, atau menyembunyikan niat aslinya.',
    contoh1: '下手な口実。\n(Alasan atau dalih yang konyol/tidak masuk akal.)',
    contoh2: '病気を口実にして休む。\n(Mengambil cuti dengan menjadikan alasan sakit sebagai dalih.)'
  },
  {
    id: 'm5h2_13',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '実入り',
    furigana: 'みいり',
    arti: 'Penghasilan / Pemasukan',
    penjelasan: 'Hasil pendapatan uang, panen, atau keuntungan bersih yang diperoleh dari suatu bisnis, karier, pekerjaan, atau usaha yang dilakukan.',
    contoh1: '実入りのいい商売。\n(Bisnis yang menghasilkan pemasukan atau keuntungan lumayan.)',
    contoh2: '今月は実入りが少ない。\n(Bulan ini, pemasukan sangat sedikit.)'
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
    penjelasan: 'Sifat, tindakan, atau keputusan yang adil, transparan, jujur, tidak berat sebelah, dan mematuhi aturan serta hukum tanpa memihak secara salah.',
    contoh1: '公正な取り引き。\n(Transaksi dan urusan bisnis yang adil.)',
    contoh2: '公正な裁判。\n(Proses peradilan pengadilan yang adil dan transparan.)'
  },
  {
    id: 'm5h2_15',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '公平',
    furigana: 'こうへい',
    arti: 'Sama rata / Adil',
    penjelasan: 'Memberikan perlakuan, hak, pembagian, atau peluang yang setara dan sama rata kepada semua orang dalam sebuah kelompok, tanpa adanya diskriminasi atau pilih kasih.',
    contoh1: '公平に分ける。\n(Membagi sesuatu dengan sama rata / adil.)',
    contoh2: '誰に対しても公平だ。\n(Bersikap adil dan sama rata terhadap siapa saja.)'
  },
  {
    id: 'm5h2_16',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公立',
    furigana: 'こうりつ',
    arti: 'Negeri / Publik',
    penjelasan: 'Institusi publik seperti sekolah, perpustakaan, atau rumah sakit yang didirikan, diawasi, dan didanai oleh pemerintah (kebalikannya adalah 私立 / shiritsu - institusi swasta).',
    contoh1: '公立の学校。\n(Sekolah negeri / sekolah publik.)',
    contoh2: '公立病院で働く。\n(Bekerja di rumah sakit umum milik pemerintah.)'
  },
  {
    id: 'm5h2_17',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公用',
    furigana: 'こうよう',
    arti: 'Penggunaan resmi / Dinas',
    penjelasan: 'Barang, bahasa, fasilitas, atau kendaraan yang digunakan secara resmi untuk urusan pemerintah, administrasi, atau organisasi saja, dan dilarang dipakai untuk kepentingan pribadi.',
    contoh1: '公用語。\n(Bahasa resmi.)',
    contoh2: '公用車を使う。\n(Menggunakan mobil/kendaraan dinas.)'
  },
  {
    id: 'm5h2_18',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公私',
    furigana: 'こうし',
    arti: 'Publik dan Pribadi (Urusan kantor & pribadi)',
    penjelasan: 'Kata ini mencakup dua dunia sekaligus, yaitu urusan resmi/pekerjaan dan urusan pribadi di rumah. Sering dipakai dalam ungkapan tentang mencampuradukkan kedua urusan tersebut.',
    contoh1: '公私混同する。\n(Mencampuradukkan urusan pekerjaan/dinas dengan masalah pribadi.)',
    contoh2: '公私の区別をつける。\n(Membedakan dan memisahkan urusan pekerjaan dengan kehidupan pribadi.)'
  },
  {
    id: 'm5h2_19',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '主人公',
    furigana: 'しゅじんこう',
    arti: 'Karakter utama / Tokoh utama',
    penjelasan: 'Merujuk pada karakter pusat, tokoh terpenting, pemeran utama, atau pahlawan dalam cerita sebuah karya sastra, novel, anime, film, atau drama.',
    contoh1: '物語の主人公。\n(Karakter utama dalam jalan cerita ini.)',
    contoh2: '映画の主人公になりきる。\n(Benar-benar menghayati dan menjelma menjadi tokoh utama film itu.)'
  },
  {
    id: 'm5h2_20',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公',
    furigana: 'おおやけ',
    arti: 'Publik / Umum / Resmi',
    penjelasan: 'Suatu hal, kondisi, informasi, atau rahasia yang tidak lagi disembunyikan dan sudah diketahui oleh masyarakat luas secara terbuka, atau diumumkan secara resmi oleh pihak berwenang.',
    contoh1: '事件が公になる。\n(Kejadian tersebut telah tersebar dan diketahui oleh publik.)',
    contoh2: '公の発表。\n(Sebuah pengumuman resmi kepada masyarakat umum.)'
  },

  // --- KANJI 連 (Ren/Tsura) ---
  {
    id: 'm5h2_21',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '連休',
    furigana: 'れんきゅう',
    arti: 'Libur panjang / Libur berturut-turut',
    penjelasan: 'Hari libur, cuti bersama, atau hari libur nasional yang bersambung selama beberapa hari (misalnya libur akhir pekan yang menyambung dengan libur nasional seperti Golden Week di Jepang).',
    contoh1: '３日間の連休。\n(Libur panjang berturut-turut selama 3 hari.)',
    contoh2: '連休を利用して旅行に行く。\n(Pergi jalan-jalan dengan memanfaatkan libur panjang.)'
  },
  {
    id: 'm5h2_22',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '連帯',
    furigana: 'れんたい',
    arti: 'Solidaritas / Tanggung jawab bersama',
    penjelasan: 'Ikatan persatuan dan rasa kebersamaan di mana anggota dalam suatu kelompok menanggung tanggung jawab atau akibat dari suatu perbuatan secara bersama-sama (kolektif).',
    contoh1: '連帯責任。\n(Tanggung jawab renteng / kolektif akibat kesalahan kelompok.)',
    contoh2: '連帯感を持つ。\n(Memiliki rasa solidaritas dan kebersamaan antar anggota.)'
  },
  {
    id: 'm5h2_23',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '連なる',
    furigana: 'つらなる',
    arti: 'Berjejer / Membentang',
    penjelasan: 'Kondisi di mana suatu benda fisik (seperti kendaraan di jalan tol, deretan gunung, atau pulau) berjejer panjang dan bersambung melintasi jarak yang jauh.',
    contoh1: '渋滞で車が連なっている。\n(Deretan mobil berjejer panjang karena macet.)',
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
    penjelasan: 'Tindakan aktif menjejalkan sesuatu secara berderet atau menyambungkannya menjadi barisan panjang. Sering juga dipakai sebagai ungkapan kiasan "mencantumkan/menambahkan nama ke dalam sebuah daftar".',
    contoh1: 'リストに名前を連ねる。\n(Mencantumkan atau menambahkan nama agar masuk ke dalam daftar tersebut.)',
    contoh2: '車を連ねて走る。\n(Mengendarai mobil dengan berjejer/berkonvoi beramai-ramai.)'
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
    penjelasan: 'Informasi, pengumuman, atau pemberitahuan tentang hal penting secara resmi. Sangat sering dipakai dalam konteks medis ketika dokter memberitahukan diagnosis penyakit kritis kepada pasien.',
    contoh1: 'ガンの告知をする。\n(Memberitahukan vonis kanker kepada pasien.)',
    contoh2: 'イベントの告知を出す。\n(Mengeluarkan pengumuman terkait acara tersebut.)'
  },
  {
    id: 'm5h2_26',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '告白',
    furigana: 'こくはく',
    arti: 'Pengakuan (cinta/dosa) / Menembak (cinta)',
    penjelasan: 'Tindakan menyatakan atau mengungkapkan perasaan serta rahasia yang terpendam di hati. Bisa dipakai dalam situasi romantis (mengungkapkan cinta) atau pengakuan kesalahan/dosa.',
    contoh1: '罪を告白する。\n(Membuat pengakuan atas dosa/kejahatan yang dilakukan.)',
    contoh2: '好きな人に告白した。\n(Saya sudah menyatakan cinta kepada orang yang saya sukai.)'
  },
  {
    id: 'm5h2_27',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '予告',
    furigana: 'よこく',
    arti: 'Pemberitahuan awal / Cuplikan (Trailer)',
    penjelasan: 'Pemberitahuan atau peringatan singkat mengenai acara, film, atau hal yang akan terjadi dan tayang di masa depan (seperti trailer film atau cuplikan episode serial TV minggu depan).',
    contoh1: '映画の予告。\n(Cuplikan/Trailer sebuah film.)',
    contoh2: '予告なしにテストが行われた。\n(Ujian diadakan secara mendadak tanpa ada pemberitahuan awal.)'
  },
  {
    id: 'm5h2_28',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '告げる',
    furigana: 'つげる',
    arti: 'Memberitahukan / Mengumumkan',
    penjelasan: 'Ungkapan yang agak formal atau puitis untuk menyampaikan berita, menyebut nama, atau mengumumkan informasi/keputusan penting secara lisan kepada seseorang.',
    contoh1: '名前を告げる。\n(Memberitahukan atau menyebutkan namanya.)',
    contoh2: '春の訪れを告げる。\n(Mengumumkan kedatangan musim semi.)'
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
    penjelasan: 'Catatan, buku harian, atau memoar yang ditulis sendiri oleh seseorang berdasarkan pengalaman hidup, perasaan pribadi, atau kejadian yang benar-benar dialaminya.',
    contoh1: '体験を手記にまとめる。\n(Menulis dan merangkum pengalaman yang dialami ke dalam sebuah catatan pribadi.)',
    contoh2: '戦争の手記を読む。\n(Membaca buku catatan memoar pribadi tentang sejarah zaman perang.)'
  },
  {
    id: 'm5h2_30',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '伝記',
    furigana: 'でんき',
    arti: 'Biografi / Riwayat hidup',
    penjelasan: 'Karya tulis atau buku yang mencatat dan menceritakan kembali tentang sejarah kronologi hidup, tantangan, dan pencapaian luar biasa seorang tokoh terkenal atau bersejarah.',
    contoh1: '伝記を読む。\n(Membaca buku biografi seseorang.)',
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
    penjelasan: 'Kata kerja formal untuk tindakan menulis, merekam, atau mencatat nama dan detail informasi di dalam dokumen. Bisa juga berarti mematrikan sebuah peringatan atau tekad dengan kuat di dalam hati.',
    contoh1: '名前を記す。\n(Menulis atau mencatatkan nama.)',
    contoh2: '心に記す。\n(Mencatat dan mematrinya dengan teguh di dalam hati/ingatan.)'
  }
];

window.vocabData.push(...kosakata_m5h2);