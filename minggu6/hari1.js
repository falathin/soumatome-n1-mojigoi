// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m6h1_verbs = [
  // --- KOSAKATA GAMBAR: 受ける (ukeru) ---
  {
    id: 'm6h1_v1',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Menerima / Menangkap (Fisik)',
    penjelasan: 'Digunakan untuk tindakan fisik menerima atau menangkap sesuatu yang datang ke arah kita. Objeknya bisa berupa benda berwujud seperti bola, atau sesuatu yang bersifat fisik dari alam seperti hembusan angin.',
    contoh1: '両手でボールを受ける。\n(Menangkap bola dengan kedua belah tangan.)',
    contoh2: 'ヨットが風を受けて進む。\n(Kapal layar melaju dengan menerima hembusan angin.)'
  },
  {
    id: 'm6h1_v2',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Menerima (Abstrak / Dukungan)',
    penjelasan: 'Digunakan dalam konteks abstrak untuk menyatakan bahwa seseorang atau suatu pihak mendapatkan sesuatu yang tidak berwujud dari pihak lain, seperti bantuan, pengaruh, sambutan, atau sesi konsultasi.',
    contoh1: '外国から援助を受ける。\n(Menerima bantuan/subsidi dari luar negeri.)',
    contoh2: '先生の影響を受ける。\n(Menerima pengaruh dari guru.)'
  },
  {
    id: 'm6h1_v3',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Menjalani / Mendapat (Perlakuan)',
    penjelasan: 'Menunjukkan tindakan mematuhi atau menjalani suatu proses yang diberikan oleh pihak lain (seperti undangan atau pemeriksaan medis), atau mengalami suatu benturan emosional secara psikologis (seperti rasa syok).',
    contoh1: '招待を受ける。\n(Menerima undangan.)',
    contoh2: '病院で検査を受ける。\n(Menjalani pemeriksaan medis di rumah sakit.)'
  },
  {
    id: 'm6h1_v4',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Populer / Laku / Mendapat reaksi baik',
    penjelasan: 'Sering ditulis dengan huruf katakana (ウケる). Maknanya bergeser menjadi sesuatu yang sangat populer, disukai, atau mendapatkan respons tertawaan yang positif dari orang-orang (terutama untuk candaan atau lelucon).',
    contoh1: '若者に受ける映画。\n(Film yang populer/disukai di kalangan anak muda.)',
    contoh2: 'そのギャグは全くウケなかった。\n(Lelucon/Gag itu sama sekali tidak mendapat reaksi lucu / tidak laku.)'
  },

  // --- KOSAKATA GAMBAR: 滑る (suberu) ---
  {
    id: 'm6h1_v5',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '滑る',
    furigana: 'すべる',
    arti: 'Meluncur / Terpeleset / Licin',
    penjelasan: 'Arti harfiahnya adalah benda atau anggota tubuh yang meluncur di atas permukaan yang licin. Bisa berarti sengaja meluncur seperti saat bermain ski, atau ketidaksengajaan yang menyebabkan kecelakaan seperti terpeleset atau barang terlepas dari genggaman karena licin.',
    contoh1: '足が滑って転んだ。\n(Kakiku terpeleset dan aku pun terjatuh.)',
    contoh2: '手が滑ってコップを落とした。\n(Tanganku licin sehingga menjatuhkan gelas.)'
  },
  {
    id: 'm6h1_v6',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '滑る',
    furigana: 'すべる',
    arti: 'Keceplosan / Gagal ujian (Kiasan)',
    penjelasan: 'Penggunaan idiomatik/kiasan. "口が滑る" (kuchi ga suberu) bermakna mulut terpeleset alias keceplosan mengatakan rahasia atau hal yang tidak seharusnya dikatakan. Sedangkan "試験に滑る" (shiken ni suberu) adalah ungkapan untuk menyatakan gagal atau tidak lulus dalam ujian (sama dengan 落ちる).',
    contoh1: 'つい口が滑って、秘密を話してしまった。\n(Tanpa sengaja saya keceplosan dan menceritakan rahasia tersebut.)',
    contoh2: '試験に滑って、がっかりしている。\n(Saya merasa sangat kecewa karena gagal/tidak lulus ujian.)'
  },

  // --- KOSAKATA GAMBAR: つながる (tsunagaru) ---
  {
    id: 'm6h1_v7',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'つながる',
    furigana: 'つながる',
    arti: 'Tersambung / Terhubung (Fisik / Jalur)',
    penjelasan: 'Menggambarkan kondisi di mana dua hal atau lebih tersambung menjadi satu kesatuan. Ini bisa merujuk pada koneksi jalur komunikasi (seperti saluran telepon), jalur fisik (jalan raya), atau benda/kendaraan yang berbaris panjang saling menyambung (seperti kemacetan).',
    contoh1: '山奥だが、やっと電話がつながった。\n(Meskipun di pelosok gunung, akhirnya saluran telepon tersambung.)',
    contoh2: '渋滞で車が何キロもつながっている。\n(Mobil-mobil terhubung/mengantre panjang hingga beberapa kilometer karena macet.)'
  },
  {
    id: 'm6h1_v8',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'つながる',
    furigana: 'つながる',
    arti: 'Berkaitan / Berujung pada / Memiliki hubungan',
    penjelasan: 'Digunakan dalam arti kiasan untuk menunjukkan adanya kaitan abstrak. Misalnya hubungan darah (血がつながっている), keterkaitan seseorang dengan suatu insiden kriminal, atau suatu usaha/pembicaraan yang pada akhirnya berujung/terhubung pada pencapaian keuntungan.',
    contoh1: '彼とは血がつながっている。\n(Saya dan dia memiliki hubungan darah / bersaudara.)',
    contoh2: 'この手掛かりは事件の解決につながる。\n(Petunjuk ini akan berujung/terhubung pada penyelesaian kasus tersebut.)'
  },

  // --- KOSAKATA GAMBAR: 挟む (hasamu) ---
  {
    id: 'm6h1_v9',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '挟む',
    furigana: 'はさむ',
    arti: 'Menjepit / Menyisipkan (Fisik)',
    penjelasan: 'Tindakan fisik menjepit sesuatu di antara dua benda atau lebih. Contohnya seperti menyisipkan pembatas tipis ke dalam halaman buku, menjepit kotoran/serangga dengan sumpit, atau kejadian malang di mana anggota tubuh (seperti jari) terjepit pintu yang tertutup.',
    contoh1: '本にしおりを挟む。\n(Menyisipkan pembatas buku ke dalam buku.)',
    contoh2: '不注意で指をドアに挟んだ。\n(Karena kurang hati-hati, jariku terjepit di pintu.)'
  },
  {
    id: 'm6h1_v10',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '挟む',
    furigana: 'はさむ',
    arti: 'Mengapit / Memberikan jeda waktu',
    penjelasan: 'Menggambarkan posisi mengapit, di mana ada suatu benda yang diletakkan di tengah-tengah dua subjek (misalnya duduk saling berhadapan dengan meja di tengahnya). Selain posisi, juga merujuk pada menyisipkan waktu luang/jeda istirahat di tengah-tengah rentetan acara atau rapat.',
    contoh1: 'テーブルを挟んで向かい合って座る。\n(Duduk saling berhadapan diapit oleh meja.)',
    contoh2: '会議は10分の休憩を挟んで再開します。\n(Rapat akan dilanjutkan kembali dengan menyisipkan jeda istirahat 10 menit.)'
  },
  {
    id: 'm6h1_v11',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '挟む',
    furigana: 'はさむ',
    arti: 'Menyela (pembicaraan) / Mendengar selentingan',
    penjelasan: 'Berupa ungkapan kiasan (idiom) dalam komunikasi. "口を挟む" (kuchi o hasamu) artinya menyela atau memotong pembicaraan orang lain yang sedang berlangsung. Sedangkan "耳に挟む" (mimi ni hasamu) bermakna kebetulan mendengar selentingan, gosip, atau kabar burung secara tidak sengaja.',
    contoh1: '他人の会話に口を挟むのは失礼だ。\n(Menyela/memotong pembicaraan orang lain itu tidak sopan.)',
    contoh2: '彼が辞めるといううわさを耳に挟んだ。\n(Saya kebetulan mendengar selentingan kabar bahwa dia akan berhenti/resign.)'
  }
];

window.vocabData.push(...kosakata_m6h1_verbs);