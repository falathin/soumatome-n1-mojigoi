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
    arti: 'Menangkap / Menerima (Fisik)',
    penjelasan: 'Menangkap atau menahan benda/aliran fisik yang mengarah ke kita (bola, angin, sinar matahari).',
    contoh1: '両手でボールを受ける。\n(Menangkap bola dengan kedua tangan.)',
    contoh2: 'ヨットが風を受けて進む。\n(Kapal layar melaju dengan menangkap angin.)'
  },
  {
    id: 'm6h1_v2',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Menerima / Mendapatkan (Abstrak)',
    penjelasan: 'Menerima hal non-fisik seperti bantuan, pengaruh, saran, atau bimbingan.',
    contoh1: '外国から援助を受ける。\n(Menerima bantuan dari luar negeri.)',
    contoh2: '先生の影響を受ける。\n(Mendapat pengaruh dari guru.)'
  },
  {
    id: 'm6h1_v3',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Menjalani / Mengikuti',
    penjelasan: 'Mengikuti atau menjalani proses resmi seperti ujian, tes medis, wawancara, atau memenuhi undangan.',
    contoh1: '招待を受ける。\n(Menerima/memenuhi undangan.)',
    contoh2: '病院で検査を受ける。\n(Menjalani pemeriksaan medis di rumah sakit.)'
  },
  {
    id: 'm6h1_v4',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Populer / Bikin Ketawa (Slang)',
    penjelasan: 'Sering ditulis ウケる. Artinya sangat disukai publik atau sangat lucu/lucu banget.',
    contoh1: '若者に受ける映画。\n(Film yang disukai anak muda.)',
    contoh2: 'そのギャグは全くウケなかった。\n(Lelucon itu sama sekali tidak garing/tidak bikin ketawa.)'
  },

  // --- KOSAKATA GAMBAR: 滑る (suberu) ---
  {
    id: 'm6h1_v5',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '滑る',
    furigana: 'すべる',
    arti: 'Meluncur / Terpeleset',
    penjelasan: 'Bergerak di permukaan licin, baik disengaja (main ski) maupun tidak (terpeleset/terlepas dari tangan).',
    contoh1: '足が滑って転んだ。\n(Kakiku terpeleset lalu jatuh.)',
    contoh2: '手が滑ってコップを落とした。\n(Gelas terlepas dari tangan karena licin.)'
  },
  {
    id: 'm6h1_v6',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '滑る',
    furigana: 'すべる',
    arti: 'Keceplosan / Gagal Ujian (Kiasan)',
    penjelasan: 'Ungkapan khusus: 口が滑る (keceplosan) dan 試験に滑る (gagal ujian).',
    contoh1: 'つい口が滑って、秘密を話してしまった。\n(Tanpa sengaja keceplosan membocorkan rahasia.)',
    contoh2: '試験に滑って、がっかりしている。\n(Aku kecewa karena gagal ujian.)'
  },

  // --- KOSAKATA GAMBAR: つながる (tsunagaru) ---
  {
    id: 'm6h1_v7',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'つながる',
    furigana: 'つながる',
    arti: 'Tersambung / Deretan Beruntun',
    penjelasan: 'Terhubung secara nyata, seperti koneksi telepon, jalan, atau deretan mobil yang macet.',
    contoh1: '山奥だが、やっと電話がつながった。\n(Meski di dalam gunung, akhirnya telepon tersambung.)',
    contoh2: '渋滞で車が何キロもつながっている。\n(Karena macet, mobil mengantre berderet sampai ber-km.)'
  },
  {
    id: 'm6h1_v8',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'つながる',
    furigana: 'つながる',
    arti: 'Berhubungan / Berujung Pada',
    penjelasan: 'Hubungan abstrak seperti ikatan darah, keterkaitan kasus, atau sebab-akibat.',
    contoh1: '彼とは血がつながっている。\n(Aku dan dia ada hubungan darah.)',
    contoh2: 'この手掛かりは事件の解決につながる。\n(Petunjuk ini berujung pada penyelesaian kasus.)'
  },

  // --- KOSAKATA GAMBAR: 挟む (hasamu) ---
  {
    id: 'm6h1_v9',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '挟む',
    furigana: 'はさむ',
    arti: 'Menjepit / Menyisipkan',
    penjelasan: 'Menaruh atau meletakkan sesuatu di antara dua benda.',
    contoh1: '本にしおりを挟む。\n(Menyisipkan pembatas buku.)',
    contoh2: '不注意で指をドアに挟んだ。\n(Karena ceroboh, jari terjepit pintu.)'
  },
  {
    id: 'm6h1_v10',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '挟む',
    furigana: 'はさむ',
    arti: 'Mengapit / Diselingi',
    penjelasan: 'Posisinya berada di tengah-tengah dua benda/orang, atau menyelingi jeda waktu.',
    contoh1: 'テーブルを挟んで向かい合って座る。\n(Duduk berhadapan diapit meja.)',
    contoh2: '会議は10分の休憩を挟んで再開します。\n(Rapat dilanjutkan setelah diselingi istirahat 10 menit.)'
  },
  {
    id: 'm6h1_v11',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '挟む',
    furigana: 'はさむ',
    arti: 'Menyela / Kuping Sekilas Dengar (Idiom)',
    penjelasan: 'Ungkapan khusus: 口を挟む (potong pembicaraan) dan 耳に挟む (sekilas mendengar rumor).',
    contoh1: '他人の会話に口を挟むのは失礼だ。\n(Menyela pembicaraan orang lain itu tidak sopan.)',
    contoh2: '彼が辞めるといううわさを耳に挟んだ。\n(Aku sekilas mendengar rumor dia mau resign.)'
  }
];

window.vocabData.push(...kosakata_m6h1_verbs);