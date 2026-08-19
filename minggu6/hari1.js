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
    penjelasan: 'Dipakai saat tubuh/tangan kita secara fisik menangkap atau menahan benda/elemen alam yang mengarah ke kita (seperti bola, angin, atau sinar matahari).',
    contoh1: '両手でボールを受ける。\n(Menangkap bola dengan kedua belah tangan.)',
    contoh2: 'ヨットが風を受けて進む。\n(Kapal layar melaju dengan memanfaatkan hembusan angin.)'
  },
  {
    id: 'm6h1_v2',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Menerima / Mendapatkan (Abstrak)',
    penjelasan: 'Dipakai untuk hal yang tidak berwujud/non-fisik, seperti menerima bantuan, pengaruh, sambutan, bimbingan, atau saran dari orang lain.',
    contoh1: '外国から援助を受ける。\n(Menerima bantuan/subsidi dari luar negeri.)',
    contoh2: '先生の影響を受ける。\n(Mendapatkan/terpengaruh oleh ajaran guru.)'
  },
  {
    id: 'm6h1_v3',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '受ける',
    furigana: 'うける',
    arti: 'Menjalani / Mengalami (Proses atau Perlakuan)',
    penjelasan: 'Dipakai saat kita menjalani suatu prosedur/proses (seperti tes medis, ujian, atau wawancara) atau menerima perlakuan/undangan dari pihak lain.',
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
    arti: 'Populer / Disukai / Laku (Bahasa Gaul/Santai)',
    penjelasan: 'Sering ditulis katakana (ウケる). Artinya mendapat respons positif, sangat disukai publik, atau bikin orang tertawa terbahak-bahak (untuk lelucon).',
    contoh1: '若者に受ける映画。\n(Film yang sangat populer/disukai di kalangan anak muda.)',
    contoh2: 'そのギャグは全くウケなかった。\n(Lelucon itu sama sekali tidak lucu / gagal total membuat orang tertawa.)'
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
    penjelasan: 'Arti fisiknya adalah bergerak meluncur di atas permukaan licin. Bisa sengaja (bermain ski/es) atau tidak sengaja (terpeleset, atau barang terlepas dari tangan).',
    contoh1: '足が滑って転んだ。\n(Kakiku terpeleset lalu jatuh.)',
    contoh2: '手が滑ってコップを落とした。\n(Cangkir terlepas dari tanganku karena licin lalu jatuh.)'
  },
  {
    id: 'm6h1_v6',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '滑る',
    furigana: 'すべる',
    arti: 'Keceplosan / Gagal Ujian (Ungkapan Kiasan)',
    penjelasan: '• 口が滑る (mulut terpeleset) = Keceplosan omongan/rahasia.\n• 試験に滑る (terpeleset ujian) = Gagal/tidak lulus ujian (ungkapan lain dari 落ちる).',
    contoh1: 'つい口が滑って、秘密を話してしまった。\n(Tanpa sengaja mulutku keceplosan dan membocorkan rahasia.)',
    contoh2: '試験に滑って、がっかりしている。\n(Aku sangat kecewa karena gagal/tidak lulus ujian.)'
  },

  // --- KOSAKATA GAMBAR: つながる (tsunagaru) ---
  {
    id: 'm6h1_v7',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'つながる',
    furigana: 'つながる',
    arti: 'Tersambung / Terhubung (Fisik atau Saluran)',
    penjelasan: 'Menunjukkan sesuatu yang saling terhubung secara nyata, seperti sinyal/saluran telepon, jalan raya, atau deretan kendaraan yang mengantre panjang.',
    contoh1: '山奥だが、やっと電話がつながった。\n(Meskipun di dalam gunung/pelosok, akhirnya teleponnya tersambung.)',
    contoh2: '渋滞で車が何キロもつながっている。\n(Karena macet, mobil-mobil mengantre/bersambungan sampai beberapa kilometer.)'
  },
  {
    id: 'm6h1_v8',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'つながる',
    furigana: 'つながる',
    arti: 'Berkaitan / Memiliki Hubungan / Berujung Pada',
    penjelasan: 'Dipakai untuk hubungan non-fisik: seperti ikatan keluarga/darah (血がつながっている), keterkaitan dengan kasus hukum, atau tindakan yang berujung pada suatu hasil.',
    contoh1: '彼とは血がつながっている。\n(Aku dan dia memiliki hubungan darah / bersaudara.)',
    contoh2: 'この手掛かりは事件の解決につながる。\n(Petunjuk ini akan berujung pada penyelesaian kasus.)'
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
    penjelasan: 'Tindakan menaruh atau menjepit sesuatu di antara dua benda. Contohnya menyisipkan pembatas buku, menjepit makanan dengan sumpit, atau jari yang terjepit pintu.',
    contoh1: '本にしおりを挟む。\n(Menyisipkan pembatas buku di antara halaman buku.)',
    contoh2: '不注意で指をドアに挟んだ。\n(Karena tidak hati-hati, jariku terjepit pintu.)'
  },
  {
    id: 'm6h1_v10',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '挟む',
    furigana: 'はさむ',
    arti: 'Mengapit (Posisi) / Menyelingi (Waktu)',
    penjelasan: '1. Mengapit: Ada posisi benda di tengah dua orang (misal: meja di antara 2 kursi).\n2. Menyelingi: Menyisipkan jeda waktu/istirahat di tengah acara.',
    contoh1: 'テーブルを挟んで向かい合って座る。\n(Duduk saling berhadapan diapit oleh meja di tengahnya.)',
    contoh2: '会議は10分の休憩を挟んで再開します。\n(Rapat akan dilanjutkan kembali setelah diselingi istirahat 10 menit.)'
  },
  {
    id: 'm6h1_v11',
    minggu: '6',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '挟む',
    furigana: 'はさむ',
    arti: 'Menyela / Kebetulan Mendengar (Idiom)',
    penjelasan: '• 口を挟む (menyisipkan mulut) = Menyela/memotong pembicaraan orang.\n• 耳に挟む (menyisipkan telinga) = Ketidaksengajaan mendengar selentingan/gosip.',
    contoh1: '他人の会話に口を挟むのは失礼だ。\n(Menyela/memotong pembicaraan orang lain itu tidak sopan.)',
    contoh2: '彼が辞めるといううわさを耳に挟んだ。\n(Aku tidak sengaja mendengar kabar angin bahwa dia mau resign.)'
  }
];

window.vocabData.push(...kosakata_m6h1_verbs);