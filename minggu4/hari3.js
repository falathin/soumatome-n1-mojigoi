// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m4h3 = [
  // --- KANJI 目 (Mata / Pandangan) ---
  {
    id: 'm4h3_1',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '目方',
    furigana: 'めかた',
    arti: 'Berat / Bobot',
    penjelasan: 'Merujuk pada ukuran berat suatu barang atau berat badan seseorang. Kata ini sangat mirip dan sering dipakai bergantian dengan kata 重さ (omosa) atau 体重 (taijuu).',
    contoh1: '目方（＝重さ、体重）を量る。\n(Menimbang berat badan atau berat barang.)',
    contoh2: '荷物の目方を量ってもらった。\n(Saya meminta bantuan agar berat barang bawaan saya ditimbang.)'
  },
  {
    id: 'm4h3_2',
    minggu: '4',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: '目下',
    furigana: 'もっか',
    arti: 'Saat ini / Sekarang ini',
    penjelasan: 'Kata formal untuk menyatakan kondisi atau situasi yang sedang terjadi tepat pada saat ini, tanpa memikirkan apa yang akan terjadi nanti.',
    contoh1: '目下、失業中である。\n(Saat ini, saya sedang menganggur / tidak punya pekerjaan.)',
    contoh2: '目下のところ、問題はありません。\n(Setidaknya untuk saat ini, belum ada masalah yang muncul.)'
  },
  {
    id: 'm4h3_3',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '目下',
    furigana: 'めした',
    arti: 'Bawahan / Orang yang lebih muda',
    penjelasan: 'Perhatikan cara bacanya (meshita). Ini merujuk pada orang yang punya jabatan lebih rendah, usia lebih muda, atau pengalaman yang lebih sedikit dibandingkan kita.',
    contoh1: '目下の人。\n(Orang bawahan / staf junior / orang yang kedudukannya di bawah kita.)',
    contoh2: '目下の人にも丁寧に話す。\n(Berbicara dengan sopan meskipun kepada bawahan.)'
  },
  {
    id: 'm4h3_4',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '切れ目',
    furigana: 'きれめ',
    arti: 'Potongan / Jeda',
    penjelasan: 'Celah atau bagian yang dipotong pada suatu benda (seperti irisan sayatan pada daging), atau titik jeda/pemberhentian saat membaca kalimat.',
    contoh1: '肉に切れ目を入れる。\n(Memberi irisan atau sayatan kecil pada daging sebelum dimasak.)',
    contoh2: '文章の切れ目（＝区切り）。\n(Jeda atau titik pemisah dalam sebuah kalimat bacaan.)'
  },
  {
    id: 'm4h3_5',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '目先',
    furigana: 'めさき',
    arti: 'Waktu dekat / Depan mata',
    penjelasan: 'Sesuatu atau tujuan yang ada tepat di depan mata atau terjadi dalam waktu dekat. Sering dipakai untuk menyindir orang yang cuma memikirkan "keuntungan sesaat".',
    contoh1: '目先の利益を追う。\n(Hanya mengejar keuntungan jangka pendek yang ada di depan mata.)',
    contoh2: '目先のことに囚われないでください。\n(Tolong jangan terlalu terpaku pada hal-hal jangka pendek saja.)'
  },
  {
    id: 'm4h3_6',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '大目',
    furigana: 'おおめ',
    arti: 'Toleransi / Maklum',
    penjelasan: 'Biasanya digabung menjadi "大目に見る" (oome ni miru), yang artinya memaklumi, memaafkan kesalahan kecil, atau memberi kelonggaran tanpa menghukum secara tegas.',
    contoh1: '大目に見る。\n(Memaklumi / memaafkan kesalahan kecil.)',
    contoh2: '今回だけは大目に見てあげよう。\n(Khusus kali ini saja, aku akan beri kelonggaran dan memaafkanmu.)'
  },

  // --- KANJI 明 (Terang / Jelas) ---
  {
    id: 'm4h3_7',
    minggu: '4',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '明白（な）',
    furigana: 'めいはく（な）',
    arti: 'Jelas / Nyata',
    penjelasan: 'Menggambarkan fakta, kejadian, atau kebenaran yang sangat jelas, terang benderang, dan tidak ada ruang untuk diragukan lagi.',
    contoh1: '明白な証拠。\n(Bukti yang sangat jelas dan nyata tanpa keraguan.)',
    contoh2: '彼の嘘は誰の目にも明白だった。\n(Kebohongannya sangat jelas dan bisa dilihat oleh semua orang.)'
  },
  {
    id: 'm4h3_8',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '声明',
    furigana: 'せいめい',
    arti: 'Pernyataan resmi',
    penjelasan: 'Pengumuman atau pernyataan resmi yang dikeluarkan oleh tokoh penting, organisasi, atau pemerintah untuk memberitahu publik tentang suatu isu.',
    contoh1: '声明を発表する。\n(Mengumumkan pernyataan resmi kepada publik.)',
    contoh2: '政府は事件に関する声明を出した。\n(Pemerintah merilis pernyataan resmi terkait insiden tersebut.)'
  },
  {
    id: 'm4h3_9',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '夜明け',
    furigana: 'よあけ',
    arti: 'Fajar / Awal mula',
    penjelasan: 'Punya dua arti: secara harfiah berarti waktu fajar/subuh saat matahari terbit, dan secara kiasan berarti awal mula dari sebuah zaman atau era baru.',
    contoh1: '夜明け（＝明け方）まで仕事をする。\n(Bekerja terus-menerus sampai fajar menyingsing / subuh.)',
    contoh2: '宇宙時代の夜明け。\n(Awal mula dimulainya era penjelajahan luar angkasa.)'
  },
  {
    id: 'm4h3_10',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '文明',
    furigana: 'ぶんめい',
    arti: 'Peradaban',
    penjelasan: 'Merujuk pada kemajuan sosial, budaya, dan teknologi yang dicapai oleh sekelompok manusia dalam sejarah.',
    contoh1: '古代文明。\n(Peradaban kuno zaman dahulu.)',
    contoh2: '科学技術が文明を発展させた。\n(Kemajuan ilmu pengetahuan dan teknologi telah mengembangkan peradaban manusia.)'
  },
  {
    id: 'm4h3_11',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '明かす',
    furigana: 'あかす',
    arti: 'Mengungkapkan rahasia / Begadang',
    penjelasan: 'Berarti membongkar atau menceritakan rahasia yang selama ini disembunyikan. Jika dipakai dalam frasa "夜を明かす" (yoru o akasu), artinya begadang semalaman suntuk tanpa tidur.',
    contoh1: '秘密を明かす。\n(Membongkar atau mengungkapkan sebuah rahasia.)',
    contoh2: '一夜を明かす。\n(Begadang dan menghabiskan waktu semalaman suntuk tanpa tidur.)'
  },

  // --- KANJI 家 (Rumah / Keluarga) ---
  {
    id: 'm4h3_12',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '家計',
    furigana: 'かけい',
    arti: 'Keuangan keluarga / Uang belanja',
    penjelasan: 'Berkaitan dengan kondisi dompet keluarga; mencakup pemasukan, pengeluaran, dan biaya hidup sehari-hari dalam sebuah rumah tangga.',
    contoh1: '家計が苦しい。\n(Kondisi keuangan keluarga sedang sulit / pas-pasan.)',
    contoh2: '妻が家計をやり繰りしている。\n(Istri saya yang mengatur dan mengelola keuangan keluarga.)'
  },
  {
    id: 'm4h3_13',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '家業',
    furigana: 'かぎょう',
    arti: 'Bisnis keluarga / Usaha turun-temurun',
    penjelasan: 'Pekerjaan, toko, atau bisnis yang dibangun dan diwariskan dari generasi ke generasi di dalam sebuah keluarga.',
    contoh1: '家業を継ぐ。\n(Mewarisi dan meneruskan bisnis keluarga.)',
    contoh2: '彼は家業のレストランを手伝っている。\n(Dia membantu mengurus restoran warisan keluarganya.)'
  },
  {
    id: 'm4h3_14',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '家主',
    furigana: 'やぬし',
    arti: 'Pemilik rumah (sewa) / Tuan rumah',
    penjelasan: 'Pemilik asli dari sebuah properti (seperti rumah atau apartemen) yang menyewakannya kepada orang lain. Bisa juga berarti kepala keluarga dari sebuah rumah.',
    contoh1: '（＝貸家の所有者＝大家）。\n(Pemilik asli rumah kontrakan atau apartemen yang disewakan.)',
    contoh2: '（＝一家の主人）。\n(Kepala keluarga dari rumah tersebut.)'
  },
  {
    id: 'm4h3_15',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '家来',
    furigana: 'けらい',
    arti: 'Pengikut / Bawahan setia',
    penjelasan: 'Istilah zaman dulu (sering ada di film/anime sejarah) untuk menyebut pengikut, pelayan, atau bawahan yang sangat setia dan patuh pada tuannya.',
    contoh1: '家来とその主人。\n(Seorang pengikut beserta majikan/tuannya.)',
    contoh2: '昔の武将には多くの家来がいた。\n(Panglima perang zaman dulu memiliki banyak pengikut setia.)'
  },
  {
    id: 'm4h3_16',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '大家',
    furigana: 'たいか',
    arti: 'Pakar hebat / Maestro',
    penjelasan: 'Jangan tertukar dengan bacaan "ooya" (pemilik rumah). Jika dibaca "taika", artinya seorang ahli, pakar, atau seniman hebat yang sangat dihormati di bidangnya.',
    contoh1: '絵の大家。\n(Seorang maestro pelukis yang sangat hebat dan dihormati.)',
    contoh2: '彼は書道の大家として知られている。\n(Dia sangat dikenal sebagai pakar kaligrafi yang hebat.)'
  },

  // --- KANJI 人 (Orang) ---
  {
    id: 'm4h3_17',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '社会人',
    furigana: 'しゃかいじん',
    arti: 'Orang yang sudah bekerja / Anggota masyarakat dewasa',
    penjelasan: 'Di Jepang, istilah ini dipakai untuk orang yang sudah lulus sekolah/kuliah dan mulai masuk ke dunia kerja sebagai orang dewasa yang mandiri.',
    contoh1: '社会人になる。\n(Mulai masuk dunia kerja dan menjadi orang dewasa yang mandiri.)',
    contoh2: '社会人としての自覚を持つ。\n(Punya kesadaran diri dan tanggung jawab sebagai orang yang sudah bekerja.)'
  },
  {
    id: 'm4h3_18',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '万人',
    furigana: 'ばんにん',
    arti: 'Semua orang / Kalangan umum',
    penjelasan: 'Merujuk pada masyarakat luas tanpa memandang usia, status, atau rupa. Sering dipakai untuk menyatakan sesuatu yang "cocok untuk semua orang".',
    contoh1: '万人向けの製品。\n(Produk yang dibuat dan cocok untuk digunakan semua kalangan.)',
    contoh2: 'この味は万人に好まれるだろう。\n(Rasa makanan ini sepertinya akan disukai oleh semua orang.)'
  },
  {
    id: 'm4h3_19',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '人目',
    furigana: 'ひとめ',
    arti: 'Pandangan orang / Perhatian publik',
    penjelasan: 'Pandangan atau perhatian dari orang-orang di sekitar. Sering dipakai untuk hal yang mencolok atau saat kita ingin menghindari tatapan orang lain.',
    contoh1: '人目につく。\n(Sangat mencolok dan mudah menarik perhatian orang di sekitar.)',
    contoh2: '人目を避けて会う。\n(Bertemu secara diam-diam untuk menghindari pandangan orang lain.)'
  },
  {
    id: 'm4h3_20',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '住人',
    furigana: 'じゅうにん',
    arti: 'Penghuni / Penduduk',
    penjelasan: 'Orang-orang yang tinggal dan menetap di suatu tempat, seperti di apartemen, perumahan, atau sebuah pulau.',
    contoh1: 'アパートの住人。\n(Para penghuni yang tinggal di apartemen tersebut.)',
    contoh2: '島の住人たちはとても親切だ。\n(Penduduk yang tinggal di pulau itu sangat ramah dan baik hati.)'
  },

  // --- KANJI 進 (Maju / Mara) ---
  {
    id: 'm4h3_21',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '進行（する）',
    furigana: 'しんこう（する）',
    arti: 'Sedang berlangsung / Maju',
    penjelasan: 'Kegiatan, acara, rapat, penyelidikan, atau penyakit yang saat ini sedang berjalan, berlangsung, atau berproses maju ke tahap selanjutnya.',
    contoh1: '調査が順調に進行している。\n(Proses penyelidikan sedang berlangsung dengan lancar sesuai rencana.)',
    contoh2: '会議の進行を任される。\n(Diberi tugas sebagai moderator untuk memandu jalannya rapat.)'
  },
  {
    id: 'm4h3_22',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '進出（する）',
    furigana: 'しんしゅつ（する）',
    arti: 'Melebarkan sayap / Lolos ke babak berikutnya',
    penjelasan: 'Melangkah maju menembus bidang atau wilayah baru. Sering dipakai saat perusahaan buka cabang di luar negeri, atau tim olahraga yang berhasil maju ke babak kompetisi yang lebih tinggi.',
    contoh1: '海外に進出する。\n(Melebarkan sayap bisnis agar bisa masuk ke pasar luar negeri.)',
    contoh2: '決勝戦への進出を決めた。\n(Berhasil lolos dan melaju ke babak pertandingan final.)'
  },
  {
    id: 'm4h3_23',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '進度',
    furigana: 'しんど',
    arti: 'Tingkat kemajuan / Kecepatan progres',
    penjelasan: 'Ukuran seberapa cepat atau sejauh mana suatu pekerjaan, proyek, atau pelajaran telah diselesaikan sejauh ini.',
    contoh1: '学習の進度。\n(Tingkat kemajuan atau kecepatan pemahaman siswa dalam belajar di kelas.)',
    contoh2: '工事の進度を確認する。\n(Mengecek sejauh mana progres proyek pembangunan tersebut sudah berjalan.)'
  },
  {
    id: 'm4h3_24',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '行進（する）',
    furigana: 'こうしん（する）',
    arti: 'Berbaris / Parade berjalan',
    penjelasan: 'Berjalan bersama-sama dalam barisan yang rapi. Biasanya terlihat di acara parade, festival, upacara olahraga, atau kegiatan baris-berbaris.',
    contoh1: '大通りを行進する。\n(Melakukan parade berjalan kaki dalam barisan di jalan utama kota.)',
    contoh2: '選手たちがグラウンドを行進する。\n(Para atlet berjalan berbaris rapi memasuki lapangan upacara.)'
  },

  // --- KANJI 先 (Depan / Awal) ---
  {
    id: 'm4h3_25',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '先頭',
    furigana: 'せんとう',
    arti: 'Paling depan / Barisan pertama',
    penjelasan: 'Posisi atau urutan yang paling depan dari sebuah kelompok, antrean, atau perlombaan lari.',
    contoh1: '先頭に立つ。\n(Berdiri di posisi paling depan / memimpin barisan.)',
    contoh2: '彼は常に先頭を走っている。\n(Dia selalu berlari memimpin di posisi paling depan.)'
  },
  {
    id: 'm4h3_26',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '先行（する）',
    furigana: 'せんこう（する）',
    arti: 'Mendahului / Rilis lebih awal',
    penjelasan: 'Melangkah atau bertindak lebih dulu dari yang lain. Dalam bisnis, sering berarti penjualan awal (pra-jualan) sebelum produk dibuka untuk umum.',
    contoh1: '時代に先行する。\n(Pola pikir atau teknologinya sangat maju mendahului zamannya.)',
    contoh2: '先行発売。\n(Penjualan awal atau pra-pesan yang dibuka sebelum produk resmi dirilis ke publik.)'
  },
  {
    id: 'm4h3_27',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '先着',
    furigana: 'せんちゃく',
    arti: 'Tiba lebih dulu / Siapa cepat dia dapat',
    penjelasan: 'Sistem yang mengutamakan orang yang datang atau mendaftar lebih awal. Sangat sering ditemui dalam promo terbatas berkonsep "First-come, first-served".',
    contoh1: '先着10名様限り。\n(Promo terbatas hanya untuk 10 orang pertama yang datang lebih dulu.)',
    contoh2: '参加者は先着順で受け付けます。\n(Pendaftaran peserta akan diterima berdasarkan urutan siapa yang mendaftar lebih dulu.)'
  },
  {
    id: 'm4h3_28',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '先方',
    furigana: 'せんぽう',
    arti: 'Pihak sana / Lawan bicara',
    penjelasan: 'Kata ganti formal dalam dunia bisnis untuk menyebut "pihak sana" atau "mitra kerja/klien" yang sedang berurusan dengan perusahaan kita.',
    contoh1: '先方（＝相手）の意見を聞く。\n(Mendengarkan pendapat atau masukan dari pihak klien/mitra bisnis di sana.)',
    contoh2: 'まずは先方に連絡をとってみます。\n(Pertama-tama, saya akan coba menghubungi pihak sana (mitra/klien) terlebih dahulu untuk memastikan.)'
  }
];

window.vocabData.push(...kosakata_m4h3);