
// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m2h3 = [
  // --- GAMBAR 1 (image_0a2fea.jpg) ---
  {
    id: 'm2h3_1',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'こめる',
    furigana: 'こめる',
    arti: 'Mencurahkan / Memasukkan',
    penjelasan: 'Memasukkan atau mencurahkan perasaan, doa, atau harapan yang tulus ke dalam sesuatu.',
    contoh1: '心をこめて手紙を書いた。\n(Menulis surat dengan sepenuh hati.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_2',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '染める',
    furigana: 'そめる',
    arti: 'Mewarnai / Mencelup',
    penjelasan: 'Mewarnai sesuatu (seperti rambut atau kain) menggunakan zat pewarna.',
    contoh1: '髪を染める\n(Mewarnai rambut.)',
    contoh2: '（〜が）染まる\n(Diwarnai / Dicelup.)'
  },
  {
    id: 'm2h3_3',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '尽きる',
    furigana: 'つきる',
    arti: 'Habis / Berakhir',
    penjelasan: 'Sesuatu yang terus berkurang hingga akhirnya habis total atau tidak tersisa sama sekali.',
    contoh1: '資源が尽きる\n(Sumber daya habis.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_4',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '偏る',
    furigana: 'かたよる',
    arti: 'Condong / Berat sebelah',
    penjelasan: 'Tidak seimbang dan hanya condong ke satu arah atau satu pemikiran tertentu saja (bias).',
    contoh1: '偏った考え\n(Pemikiran yang berat sebelah / bias.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_5',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'はまる',
    furigana: 'はまる',
    arti: 'Terperosok / Pas / Tergila-gila',
    penjelasan: 'Bisa berarti terperosok ke dalam genangan, pas sesuai bentuknya, atau sangat menyukai sesuatu (kecanduan).',
    contoh1: '水たまりにはまる / 鍵がはまらない\n(Terperosok ke genangan air / Kunci tidak pas/masuk.)',
    contoh2: 'ゲームにはまる（＝熱中する）\n(Tergila-gila pada permainan video.)'
  },
  {
    id: 'm2h3_6',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'とどまる',
    furigana: 'とどまる',
    arti: 'Tinggal / Berhenti',
    penjelasan: 'Tetap berada di suatu tempat atau bertahan pada keadaan tertentu.',
    contoh1: 'この町にとどまる\n(Tinggal / menetap di kota ini.)',
    contoh2: '物価の上昇はとどまることがない。\n(Kenaikan harga barang tidak pernah berhenti.)'
  },
  {
    id: 'm2h3_7',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'とどめる',
    furigana: 'とどめる',
    arti: 'Membatasi / Menyimpan',
    penjelasan: 'Menahan sesuatu agar tidak melampaui batas tertentu, atau menyimpan sesuatu di dalam ingatan.',
    contoh1: '経費を最小限にとどめる\n(Menekan pengeluaran ke batas minimum.)',
    contoh2: '記憶にとどめる\n(Menyimpan dalam ingatan / mengingat.)'
  },
  {
    id: 'm2h3_8',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '途切れる',
    furigana: 'とぎれる',
    arti: 'Terputus (sementara)',
    penjelasan: 'Sesuatu yang sedang berlangsung (seperti percakapan) terhenti di tengah jalan dan menyisakan kekosongan.',
    contoh1: '会話が途切れる\n(Percakapan terputus / terhenti sejenak.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_9',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '途絶える',
    furigana: 'とだえる',
    arti: 'Terhenti sama sekali',
    penjelasan: 'Sesuatu yang sebelumnya terus berlanjut akhirnya terputus secara total (seperti komunikasi atau kabar).',
    contoh1: '便りが途絶える\n(Kabar berita terhenti sama sekali / hilang kontak.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_10',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'よみがえる',
    furigana: 'よみがえる',
    arti: 'Hidup kembali / Teringat',
    penjelasan: 'Sesuatu yang telah mati kembali hidup, atau kenangan dan perasaan lama yang kembali bangkit di pikiran.',
    contoh1: '死者がよみがえる\n(Orang mati hidup kembali.)',
    contoh2: 'あの感動が心によみがえる\n(Rasa haru saat itu bangkit kembali di dalam hati.)'
  },
  {
    id: 'm2h3_11',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ありふれる',
    furigana: 'ありふれる',
    arti: 'Biasa / Umum',
    penjelasan: 'Sesuatu yang sangat umum, sering ditemui, dan tidak ada istimewanya.',
    contoh1: 'ありふれた（＝平凡な）話\n(Cerita yang biasa/pasaran.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_12',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '廃れる',
    furigana: 'すたれる',
    arti: 'Menjadi usang / Ketinggalan zaman',
    penjelasan: 'Sesuatu (seperti tren) yang tadinya populer kini sudah ditinggalkan dan tidak laku lagi.',
    contoh1: '流行が廃れる\n(Tren/Masa kepopuleran telah usang atau berlalu.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_13',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'かぶれる',
    furigana: 'かぶれる',
    arti: 'Ruam / Terpengaruh kuat',
    penjelasan: 'Kondisi kulit yang mengalami iritasi/ruam, atau seseorang yang sangat terpengaruh oleh budaya/gaya tertentu.',
    contoh1: '肌がかぶれる\n(Kulit mengalami ruam/iritasi.)',
    contoh2: 'ロックにかぶれる\n(Sangat terpengaruh oleh gaya musik rock.)'
  },
  {
    id: 'm2h3_14',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '化ける',
    furigana: 'ばける',
    arti: 'Menyamar / Berubah wujud',
    penjelasan: 'Mengubah wujud, bentuk, atau penampilan sehingga menjadi sesuatu yang sama sekali berbeda.',
    contoh1: '女に化ける（＝女装する）\n(Menyamar menjadi perempuan / cross-dressing.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_15',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ばれる',
    furigana: 'ばれる',
    arti: 'Terbongkar',
    penjelasan: 'Sesuatu yang disembunyikan (seperti rahasia atau kebohongan) akhirnya diketahui oleh orang lain.',
    contoh1: 'うそがばれる\n(Kebohongan terbongkar.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_16',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '釣り合う',
    furigana: 'つりあう',
    arti: 'Seimbang / Cocok',
    penjelasan: 'Dua elemen yang sebanding atau berada dalam tingkat keseimbangan yang tepat.',
    contoh1: '収入と支出が釣り合う\n(Pemasukan dan pengeluaran seimbang.)',
    contoh2: '-'
  },

  // --- GAMBAR 2 (image_0a3006.jpg) ---
  {
    id: 'm2h3_17',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '絡む',
    furigana: 'からむ',
    arti: 'Terlilit / Terlibat / Menggoda',
    penjelasan: 'Benang yang kusut/terlilit, dahak yang menyangkut di tenggorokan, atau orang yang mencari gara-gara kepada orang lain.',
    contoh1: '毛糸が絡む / たんが絡む\n(Benang wol terlilit / Dahak tersangkut.)',
    contoh2: '酔っ払いに絡まれる\n(Diajak ribut / diganggu oleh pemabuk.)'
  },
  {
    id: 'm2h3_18',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '覆す',
    furigana: 'くつがえす',
    arti: 'Membalikkan / Meruntuhkan',
    penjelasan: 'Meruntuhkan pandangan, keputusan, atau akal sehat yang selama ini dianggap sebagai kebenaran.',
    contoh1: '常識を覆す\n(Meruntuhkan / membalikkan akal sehat atau norma umum.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_19',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '見なす',
    furigana: 'みなす',
    arti: 'Dianggap / Dipandang',
    penjelasan: 'Menilai, menganggap, atau memperlakukan sesuatu memiliki status atau arti tertentu.',
    contoh1: 'それは不正だと見なされている。\n(Hal tersebut dianggap sebagai ketidakjujuran / kecurangan.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_20',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'もたらす',
    furigana: 'もたらす',
    arti: 'Membawa / Menimbulkan',
    penjelasan: 'Menyebabkan terjadinya suatu hasil, dampak, atau situasi tertentu sebagai akibatnya.',
    contoh1: '被害をもたらす\n(Membawa/Menimbulkan kerugian atau kerusakan.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_21',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'しのぐ',
    furigana: 'しのぐ',
    arti: 'Menahan / Bertahan',
    penjelasan: 'Berhasil mengatasi atau menahan keadaan yang menyulitkan atau tidak nyaman, seperti suhu ekstrem.',
    contoh1: '夏の暑さをしのぐ\n(Bertahan dari / mengatasi teriknya musim panas.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_22',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '継ぐ',
    furigana: 'つぐ',
    arti: 'Mewarisi / Meneruskan',
    penjelasan: 'Meneruskan sesuatu dari generasi atau orang sebelumnya, seperti profesi, bisnis, atau jejak langkah keluarga.',
    contoh1: '父の仕事を継ぐ\n(Mewarisi / meneruskan pekerjaan ayah.)',
    contoh2: '-'
  },
  {
    id: 'm2h3_23',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'つ(っ)つく',
    furigana: 'つつく',
    arti: 'Menyodok / Menyenggol',
    penjelasan: 'Mendorong atau menusuk pelan sesuatu, biasanya menggunakan bagian tubuh seperti siku atau jari.',
    contoh1: 'ひじでつつく\n(Menyenggol / menyodok menggunakan siku.)',
    contoh2: '-'
  }
];

// Menambahkan kosakata dari file ini ke data master di index.html
window.vocabData.push(...kosakata_m2h3);