// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m2h2 = [
  // --- GAMBAR 1 (image_0a255e.jpg) ---
  {
    id: 'm2h2_1',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'かする',
    furigana: 'かする',
    arti: 'Menyerempet / Menggores',
    penjelasan: 'Menyentuh sedikit atau bergesekan saat melintas. Sering digunakan untuk peluru atau luka ringan.',
    contoh1: '弾が耳をかすった。\n(Peluru menyerempet telingaku.)',
    contoh2: 'かすり傷 / すり傷\n(Luka lecet / luka gores.)'
  },
  {
    id: 'm2h2_2',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ぶれる',
    furigana: 'ぶれる',
    arti: 'Buram / Goyah',
    penjelasan: 'Kondisi di mana sesuatu (seperti foto atau kamera) tidak fokus atau bergoyang sehingga hasilnya kabur.',
    contoh1: '写真がぶれている。\n(Fotonya buram/goyang.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_3',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ぼやける',
    furigana: 'ぼやける',
    arti: 'Menjadi kabur / Tidak jelas',
    penjelasan: 'Bentuk atau batasan sesuatu menjadi tidak jelas terlihat. Bisa juga digunakan untuk ingatan.',
    contoh1: '字がぼやけてよく見えない。\n(Hurufnya kabur dan tidak terlihat jelas.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_4',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'かさむ',
    furigana: 'かさむ',
    arti: 'Bertambah / Menumpuk (Biaya)',
    penjelasan: 'Jumlah atau volume sesuatu bertambah banyak, biasanya berkonotasi negatif seperti membengkaknya pengeluaran.',
    contoh1: '経費がかさむ\n(Biaya/Pengeluaran membengkak.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_5',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'かさばる',
    furigana: 'かさばる',
    arti: 'Memakan tempat / Bulky',
    penjelasan: 'Benda yang ukurannya membesar atau bervolume besar sehingga repot untuk dibawa atau disimpan.',
    contoh1: '荷物がかさばって持ちにくい。\n(Barang bawaan memakan tempat sehingga sulit dibawa.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_6',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '重なる',
    furigana: 'かさなる',
    arti: 'Bertumpuk / Tumpang tindih',
    penjelasan: 'Sesuatu yang terjadi bersamaan (seperti jadwal) atau diletakkan satu di atas yang lain.',
    contoh1: '予定が重なる\n(Jadwal bertabrakan / tumpang tindih.)',
    contoh2: '（〜を）重ねる\n(Menumpuk sesuatu / Pile up.)'
  },
  {
    id: 'm2h2_7',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'そびえる',
    furigana: 'そびえる',
    arti: 'Menjulang tinggi',
    penjelasan: 'Berdiri atau vmenjulang sangat tinggi ke arah langit, biasanya untuk gedung, gunung, atau pohon.',
    contoh1: '高層ビルが空にそびえている。\n(Gedung pencakar langit menjulang tinggi di langit.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_8',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'たるむ',
    furigana: 'たるむ',
    arti: 'Kendur / Malas',
    penjelasan: 'Sesuatu yang tadinya tegang menjadi kendur (seperti tali), atau hilangnya semangat/kedisiplinan (malas).',
    contoh1: 'ひもがたるんでいる\n(Talinya kendur.)',
    contoh2: '気持ちがたるむ\n(Perasaan/Semangat menjadi malas atau kendur.)'
  },
  {
    id: 'm2h2_9',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'とろける',
    furigana: 'とろける',
    arti: 'Meleleh / Lumer',
    penjelasan: 'Sesuatu benda padat yang meleleh menjadi cair atau lembut, sering digunakan untuk makanan lezat (keju, daging, dll).',
    contoh1: '口の中でチーズがとろける\n(Keju meleleh lumer di dalam mulut.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_10',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'はげる',
    furigana: 'はげる',
    arti: 'Terkelupas / Botak',
    penjelasan: 'Lapisan luar yang lepas/luntur (seperti cat), atau rambut yang rontok sehingga menjadi botak.',
    contoh1: 'ペンキがはげる\n(Catnya terkelupas.)',
    contoh2: '頭がはげる\n(Kepala menjadi botak.)'
  },
  {
    id: 'm2h2_11',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'さえずる',
    furigana: 'さえずる',
    arti: 'Berkicau',
    penjelasan: 'Suara burung-burung kecil yang bernyanyi atau berkicau.',
    contoh1: '小鳥がさえずる\n(Burung kecil berkicau.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_12',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'きしむ',
    furigana: 'きしむ',
    arti: 'Berderit',
    penjelasan: 'Suara gesekan benda keras, seperti lantai kayu atau engsel pintu yang sudah tua.',
    contoh1: '床がきしむ\n(Lantai berderit.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_13',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '弾く',
    furigana: 'はじく',
    arti: 'Menolak / Memetik',
    penjelasan: 'Memantulkan atau tidak menyerap sesuatu (seperti air/minyak), atau memetik (seperti senar gitar).',
    contoh1: '油は水を弾く\n(Minyak menolak/memantulkan air.)',
    contoh2: 'ギターの弦を弾く\n(Memetik senar gitar.)'
  },
  {
    id: 'm2h2_14',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'はぐ',
    furigana: 'はぐ',
    arti: 'Menguliti / Mengelupas',
    penjelasan: 'Melepaskan atau membuang kulit, selimut, atau lapisan luar dari tempatnya.',
    contoh1: '魚の皮をはぐ\n(Menguliti / mengelupas kulit ikan.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_15',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '潤う',
    furigana: 'うるおう',
    arti: 'Menjadi lembap / Makmur',
    penjelasan: 'Mendapat kelembapan (seperti kulit atau tanah), atau mendapat keuntungan ekonomi sehingga menjadi makmur.',
    contoh1: '肌が潤う\n(Kulit menjadi lembap.)',
    contoh2: '駅ができて商店街が潤う。\n(Jalan perbelanjaan menjadi makmur karena stasiun dibangun.)'
  },
  {
    id: 'm2h2_16',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '繕う',
    furigana: 'つくろう',
    arti: 'Memperbaiki / Menjaga penampilan',
    penjelasan: 'Memperbaiki robekan (pakaian) atau menutupi kekurangan diri demi menjaga citra atau gengsi di depan orang.',
    contoh1: 'ほころびを繕う\n(Menjahit/memperbaiki robekan.)',
    contoh2: '体裁を繕う\n(Menjaga penampilan / citra dari luar.)'
  },
  {
    id: 'm2h2_17',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'はかどる',
    furigana: 'はかどる',
    arti: 'Maju / Berjalan lancar',
    penjelasan: 'Progres sebuah pekerjaan atau tugas berjalan dengan baik, lancar, dan cepat.',
    contoh1: '仕事がはかどる\n(Pekerjaan berjalan lancar / maju.)',
    contoh2: '-'
  },

  // --- GAMBAR 2 (image_0a257b.jpg) ---
  {
    id: 'm2h2_18',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '差し掛かる',
    furigana: 'さしかかる',
    arti: 'Mencapai / Mendekati',
    penjelasan: 'Tiba atau mendekati suatu tempat (titik tertentu) atau suatu masa (fase kehidupan).',
    contoh1: '曲がり角に差し掛かる\n(Mendekati / mencapai tikungan.)',
    contoh2: '子どもが思春期に差し掛かる\n(Anak mencapai masa pubertas.)'
  },
  {
    id: 'm2h2_19',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '引きずる',
    furigana: 'ひきずる',
    arti: 'Menyeret',
    penjelasan: 'Menarik sesuatu menyusuri tanah, atau berjalan dengan menyeret kaki (pincang).',
    contoh1: '足を引きずる\n(Menyeret kaki / berjalan pincang.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_20',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '反る',
    furigana: 'そる',
    arti: 'Melengkung',
    penjelasan: 'Sesuatu yang lurus (seperti kayu atau papan) membengkok atau melengkung ke belakang.',
    contoh1: '板が反る\n(Papan melengkung.)',
    contoh2: 'ひげをそる\n(Mencukur jenggot. *Catatan: Biasanya menggunakan kanji 剃る*)'
  },
  {
    id: 'm2h2_21',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'とがる',
    furigana: 'とがる',
    arti: 'Menjadi tajam / Runcing',
    penjelasan: 'Ujung sesuatu bentuknya mengecil dan tajam (seperti pisau atau pensil).',
    contoh1: 'とがったナイフ\n(Pisau yang tajam / runcing.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_22',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'はれる',
    furigana: 'はれる',
    arti: 'Membengkak',
    penjelasan: 'Bagian tubuh yang membesar/menggembung akibat peradangan, penyakit, atau pukulan.',
    contoh1: 'まぶたがはれる\n(Kelopak mata membengkak.)',
    contoh2: '-'
  },
  {
    id: 'm2h2_23',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ずれる',
    furigana: 'ずれる',
    arti: 'Meleset / Melorot',
    penjelasan: 'Posisi yang bergeser turun dari tempat asalnya, atau waktu/rencana yang tidak pas atau meleset.',
    contoh1: '眼鏡がずれる\n(Kacamata melorot / bergeser turun.)',
    contoh2: 'タイミングがずれる\n(Waktunya meleset / tidak pas.)'
  },
  {
    id: 'm2h2_24',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'いかれる',
    furigana: 'いかれる',
    arti: 'Rusak / Gila (Slang)',
    penjelasan: 'Kata slang (bahasa gaul) yang berarti sesuatu (seperti mesin) telah rusak parah atau tidak berfungsi lagi.',
    contoh1: 'エンジンがいかれる\n(Mesinnya rusak / mati total.)',
    contoh2: '-'
  }
];

// Menambahkan kosakata dari file ini ke data master di index.html
window.vocabData.push(...kosakata_m2h2);