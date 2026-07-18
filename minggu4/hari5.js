// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m4h5 = [
  // --- KANJI 産 (San) ---
  {
    id: 'm4h5_1',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '産地',
    furigana: 'さんち',
    arti: 'Daerah penghasil',
    penjelasan: 'Tempat di mana suatu barang, hasil pertanian, atau sumber daya alam dihasilkan.',
    contoh1: 'リンゴの産地。\n(Daerah penghasil apel.)',
    contoh2: 'ここは有名なお茶の産地です。\n(Ini adalah daerah penghasil teh yang terkenal.)'
  },
  {
    id: 'm4h5_2',
    minggu: '4',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '産出',
    furigana: 'さんしゅつ',
    arti: 'Menghasilkan (sumber daya)',
    penjelasan: 'Proses menghasilkan suatu produk atau sumber daya alam, seperti minyak, gas, atau mineral.',
    contoh1: '石油産出国。\n(Negara penghasil minyak bumi.)',
    contoh2: 'この山では良質な石炭が産出される。\n(Batu bara berkualitas baik dihasilkan di gunung ini.)'
  },
  {
    id: 'm4h5_3',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '国産',
    furigana: 'こくさん',
    arti: 'Buatan dalam negeri',
    penjelasan: 'Barang buatan dalam negeri (kebalikan dari impor). Kalau ditambah 品 (hin) jadi 国産品 (produk dalam negeri).',
    contoh1: '国産車。\n(Mobil buatan dalam negeri.)',
    contoh2: '私はいつも国産の野菜を買う。\n(Saya selalu membeli sayuran lokal/dalam negeri.)'
  },
  {
    id: 'm4h5_4',
    minggu: '4',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '生産',
    furigana: 'せいさん',
    arti: 'Produksi',
    penjelasan: 'Kegiatan memproduksi atau menghasilkan barang dalam jumlah besar, seperti di pabrik.',
    contoh1: '大量に生産する。\n(Memproduksi dalam jumlah besar.)',
    contoh2: '工場の生産がストップした。\n(Produksi pabrik telah terhenti.)'
  },
  {
    id: 'm4h5_5',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '名産',
    furigana: 'めいさん',
    arti: 'Produk terkenal daerah',
    penjelasan: 'Produk khas yang sangat terkenal dari suatu daerah. Sering dijadikan suvenir atau oleh-oleh.',
    contoh1: 'この地方の名産品。\n(Produk terkenal dari daerah ini.)',
    contoh2: '京都の名産は抹茶です。\n(Produk terkenal Kyoto adalah matcha.)'
  },

  // --- KANJI 不 (Fu) ---
  {
    id: 'm4h5_6',
    minggu: '4',
    hari: '5',
    kategori: 'kata sifat',
    kanji: '不正',
    furigana: 'ふせい',
    arti: 'Ilegal / Curang / Tidak jujur',
    penjelasan: 'Sesuatu yang melanggar aturan, tidak jujur, atau curang. Misalnya curang saat ujian atau bisnis.',
    contoh1: '不正な取り引き。\n(Transaksi yang ilegal/tidak jujur.)',
    contoh2: 'テストで不正行為をした。\n(Melakukan tindakan curang saat ujian.)'
  },
  {
    id: 'm4h5_7',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '不通',
    furigana: 'ふつう',
    arti: 'Terputus / Tidak terhubung',
    penjelasan: 'Kondisi di mana alat komunikasi (telepon) atau transportasi (kereta/jalan) terputus dan tidak bisa digunakan.',
    contoh1: '音信不通。\n(Hilang kontak / komunikasi terputus.)',
    contoh2: '地震で電話が不通になった。\n(Telepon terputus akibat gempa bumi.)'
  },
  {
    id: 'm4h5_8',
    minggu: '4',
    hari: '5',
    kategori: 'kata sifat',
    kanji: '不明',
    furigana: 'ふめい',
    arti: 'Tidak jelas / Tidak diketahui (hilang)',
    penjelasan: 'Kondisi saat sesuatu belum jelas, tidak diketahui, atau hilang. Sering dipakai untuk orang hilang atau penyebab yang belum jelas.',
    contoh1: '行方不明。\n(Hilang / tidak diketahui keberadaannya.)',
    contoh2: '事故の原因はまだ不明だ。\n(Penyebab kecelakaannya masih belum jelas.)'
  },
  {
    id: 'm4h5_9',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '不良',
    furigana: 'ふりょう',
    arti: 'Buruk / Cacat / Nakal',
    penjelasan: 'Punya dua arti: 1. Anak/remaja nakal (不良少年). 2. Barang/produk yang cacat atau jelek (不良品).',
    contoh1: '不良少年。\n(Remaja yang nakal/berkelakuan buruk.)',
    contoh2: 'このパソコンは初期不良だった。\n(Komputer ini memiliki cacat dari pabrik.)'
  },

  // --- KANJI 特 (Toku) ---
  {
    id: 'm4h5_10',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '特色',
    furigana: 'とくしょく',
    arti: 'Ciri khas / Karakteristik',
    penjelasan: 'Ciri khas atau sifat khusus yang menonjol dan membedakan sesuatu dari yang lain.',
    contoh1: '特色を出す。\n(Menonjolkan ciri khas / karakteristik.)',
    contoh2: 'この大学の特色は国際的なところだ。\n(Ciri khas universitas ini adalah lingkungan internasionalnya.)'
  },
  {
    id: 'm4h5_11',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '特産',
    furigana: 'とくさん',
    arti: 'Produk khusus / Khas',
    penjelasan: 'Produk khusus atau hasil bumi asli dari suatu daerah. Artinya mirip dengan 名産 (meisan).',
    contoh1: 'この地方の特産物。\n(Produk khusus dari daerah ini.)',
    contoh2: '青森の特産はリンゴです。\n(Produk khas Aomori adalah apel.)'
  },
  {
    id: 'm4h5_12',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '特集',
    furigana: 'とくしゅう',
    arti: 'Edisi khusus / Liputan khusus',
    penjelasan: 'Artikel, program TV, atau majalah yang fokus membahas satu tema khusus secara mendalam.',
    contoh1: '特集記事。\n(Artikel liputan khusus.)',
    contoh2: 'テレビでハワイの特集を見ている。\n(Sedang menonton liputan khusus tentang Hawaii di TV.)'
  },
  {
    id: 'm4h5_13',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '特有',
    furigana: 'とくゆう',
    arti: 'Khas / Unik (hanya dimiliki olehnya)',
    penjelasan: 'Sifat atau ciri khas unik yang cuma dimiliki oleh satu orang, kelompok, atau tempat tertentu.',
    contoh1: 'この地方特有の習慣。\n(Kebiasaan/adat yang khas dari daerah ini.)',
    contoh2: 'これは猫に特有の病気です。\n(Ini adalah penyakit yang unik/khas hanya pada kucing.)'
  },

  // --- KANJI 代 (Dai) ---
  {
    id: 'm4h5_14',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '世代',
    furigana: 'せだい',
    arti: 'Generasi',
    penjelasan: 'Sekelompok orang yang lahir dan hidup di rentang waktu/zaman yang sama (generasi).',
    contoh1: '世代交代。\n(Pergantian generasi.)',
    contoh2: '私たちの世代はインターネットと共に育った。\n(Generasi kami tumbuh bersama internet.)'
  },
  {
    id: 'm4h5_15',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '代理',
    furigana: 'だいり',
    arti: 'Wakil / Pengganti (orang)',
    penjelasan: 'Orang yang mewakili atau menggantikan tugas orang lain sementara karena orang itu sedang berhalangan.',
    contoh1: '社長の代理をする。\n(Mewakili/menggantikan posisi presiden direktur sementara.)',
    contoh2: '親の代理で会議に出席する。\n(Hadir ke rapat sebagai wakil orang tua.)'
  },
  {
    id: 'm4h5_16',
    minggu: '4',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '代用',
    furigana: 'だいよう',
    arti: 'Pengganti (barang) / Memakai sbg ganti',
    penjelasan: 'Memakai suatu barang sebagai pengganti barang lain yang fungsinya sama, karena barang aslinya tidak ada.',
    contoh1: 'クッションを枕に代用する。\n(Menggunakan bantal sofa sebagai pengganti bantal tidur.)',
    contoh2: 'バターがないので、マーガリンで代用した。\n(Karena tidak ada mentega, saya menggunakan margarin sebagai pengganti.)'
  },

  // --- KANJI 場 (Ba/Jou) ---
  {
    id: 'm4h5_17',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '本場',
    furigana: 'ほんば',
    arti: 'Tempat asal / Pusatnya',
    penjelasan: 'Tempat asli di mana sesuatu pertama kali dibuat, paling terkenal, atau sangat otentik.',
    contoh1: 'イタリア料理を本場で学ぶ。\n(Mempelajari masakan Italia langsung di tempat asalnya.)',
    contoh2: '本場のカレーは辛い。\n(Kari dari tempat asalnya itu pedas.)'
  },
  {
    id: 'm4h5_18',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '市場',
    furigana: 'しじょう',
    arti: 'Pasar (Finansial / Ekonomi)',
    penjelasan: 'Jika dibaca "shijou", artinya pasar finansial/ekonomi. Jika dibaca "ichiba", artinya tempat pasar fisik (seperti pasar ikan).',
    contoh1: '金融市場。\n(Pasar finansial.)',
    contoh2: '新しい製品を市場に出す。\n(Meluncurkan produk baru ke pasar.)'
  },
  {
    id: 'm4h5_19',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '立場',
    furigana: 'たちば',
    arti: 'Posisi / Sudut pandang',
    penjelasan: 'Posisi, status, atau situasi seseorang (misal di tempat kerja). Bisa juga berarti sudut pandang.',
    contoh1: '苦しい立場。\n(Posisi/situasi yang sulit.)',
    contoh2: '相手の立場に立って考える。\n(Berpikir dengan menempatkan diri pada posisi orang lain.)'
  },

  // --- KANJI 事 (Ji) ---
  {
    id: 'm4h5_20',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '行事',
    furigana: 'ぎょうじ',
    arti: 'Acara / Kegiatan',
    penjelasan: 'Acara, perayaan, atau kegiatan rutin yang biasanya diadakan sekolah, komunitas, atau sebagai tradisi.',
    contoh1: '学校行事に参加する。\n(Berpartisipasi dalam acara sekolah.)',
    contoh2: '日本の伝統的な行事。\n(Acara/kegiatan tradisional Jepang.)'
  },
  {
    id: 'm4h5_21',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '人事',
    furigana: 'じんじ',
    arti: 'Personalia / SDM',
    penjelasan: 'Bagian HRD (Personalia) di perusahaan yang mengurus karyawan, rekrutmen, mutasi, dan gaji.',
    contoh1: '人事課。\n(Departemen/Bagian Personalia - HRD.)',
    contoh2: '人事異動が発表された。\n(Perubahan/mutasi kepegawaian telah diumumkan.)'
  },
  {
    id: 'm4h5_22',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '事前',
    furigana: 'じぜん',
    arti: 'Sebelumnya / Persiapan awal',
    penjelasan: 'Langkah persiapan atau waktu sebelum sesuatu (acara/rapat) dimulai.',
    contoh1: '事前に調べる。\n(Mencari tahu/memeriksa sebelumnya.)',
    contoh2: '事前の連絡をお願いします。\n(Mohon hubungi terlebih dahulu sebelumnya.)'
  },

  // --- KANJI 主 (Shu) ---
  {
    id: 'm4h5_23',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '主食',
    furigana: 'しゅしょく',
    arti: 'Makanan pokok',
    penjelasan: 'Makanan utama yang menjadi sumber karbohidrat (seperti nasi, roti, mi) dan dimakan bersama lauk pauk.',
    contoh1: '主食と副食。\n(Makanan pokok dan lauk pauk.)',
    contoh2: '日本人の主食は米です。\n(Makanan pokok orang Jepang adalah beras/nasi.)'
  },
  {
    id: 'm4h5_24',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '主体',
    furigana: 'しゅたい',
    arti: 'Subjek utama / Inti',
    penjelasan: 'Pusat penggerak, elemen utama, atau kelompok mayoritas dalam suatu organisasi.',
    contoh1: '女性が主体の職場。\n(Tempat kerja yang didominasi/dikendalikan oleh wanita.)',
    contoh2: '学生が主体となってイベントを企画する。\n(Para pelajar menjadi penggerak utama dalam merencanakan acara tersebut.)'
  },
  {
    id: 'm4h5_25',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '主題',
    furigana: 'しゅだい',
    arti: 'Tema / Topik utama',
    penjelasan: 'Tema atau topik utama dalam sebuah karya (film, lagu, buku). Sama artinya dengan テーマ (tema).',
    contoh1: '映画の主題歌。\n(Lagu tema sebuah film.)',
    contoh2: '論文の主題を決める。\n(Menentukan tema/topik utama skripsi.)'
  },

  // --- KANJI 生 (Sei/Ya/I) ---
  {
    id: 'm4h5_26',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '野生',
    furigana: 'やせい',
    arti: 'Liar (alam bebas)',
    penjelasan: 'Hewan atau tanaman yang hidup dan tumbuh liar di alam bebas tanpa dirawat manusia.',
    contoh1: '野生動物。\n(Hewan liar.)',
    contoh2: 'この花は野生で育った。\n(Bunga ini tumbuh liar di alam bebas.)'
  },
  {
    id: 'm4h5_27',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '生理',
    furigana: 'せいり',
    arti: 'Fisiologis / Menstruasi',
    penjelasan: 'Fungsi alami tubuh. Untuk wanita, kata ini sering dipakai untuk menyebut haid/menstruasi.',
    contoh1: '生理現象。\n(Fenomena fisiologis / reaksi alami tubuh.)',
    contoh2: '彼女は生理痛がひどい。\n(Dia mengalami nyeri haid yang parah.)'
  },
  {
    id: 'm4h5_28',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '生計',
    furigana: 'せいけい',
    arti: 'Mata pencaharian / Nafkah',
    penjelasan: 'Mata pencaharian, pekerjaan, atau sumber penghasilan untuk biaya hidup sehari-hari.',
    contoh1: '生計を立てる。\n(Mencari nafkah / membangun mata pencaharian.)',
    contoh2: '農業で生計を立てている。\n(Mencari nafkah dari pertanian.)'
  },
  {
    id: 'm4h5_29',
    minggu: '4',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '生かす',
    furigana: 'いかす',
    arti: 'Memanfaatkan / Mengaplikasikan',
    penjelasan: 'Memanfaatkan kemampuan, pengalaman, atau bahan sebaik mungkin agar berguna.',
    contoh1: '経験を生かす。\n(Memanfaatkan pengalaman.)',
    contoh2: 'デザインの才能を生かした仕事がしたい。\n(Saya ingin melakukan pekerjaan yang memanfaatkan bakat desain saya.)'
  },

  // --- KANJI 用 (You) ---
  {
    id: 'm4h5_30',
    minggu: '4',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '作用',
    furigana: 'さよう',
    arti: 'Reaksi / Efek / Kerja',
    penjelasan: 'Efek atau reaksi dari sesuatu. Sering dipakai untuk reaksi kimia atau efek obat.',
    contoh1: '化学作用。\n(Reaksi kimia.)',
    contoh2: 'この薬は神経に作用する。\n(Obat ini bekerja/bereaksi pada saraf.)'
  },
  {
    id: 'm4h5_31',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '用品',
    furigana: 'ようひん',
    arti: 'Barang / Perlengkapan',
    penjelasan: 'Barang atau perlengkapan khusus yang dipakai untuk kegiatan tertentu.',
    contoh1: 'スポーツ用品。\n(Barang / perlengkapan olahraga.)',
    contoh2: 'ここで学用品が買えます。\n(Anda bisa membeli perlengkapan sekolah di sini.)'
  },

  // --- KANJI 所 (Sho) ---
  {
    id: 'm4h5_32',
    minggu: '4',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '所有',
    furigana: 'しょゆう',
    arti: 'Kepemilikan / Memiliki',
    penjelasan: 'Kondisi memiliki hak milik atas suatu barang, tanah, atau aset.',
    contoh1: 'この土地は私が所有している。\n(Tanah ini adalah milik saya.)',
    contoh2: '多くの財産を所有している。\n(Memiliki banyak harta/kekayaan.)'
  },
  {
    id: 'm4h5_33',
    minggu: '4',
    hari: '5',
    kategori: 'kata benda',
    kanji: '長所',
    furigana: 'ちょうしょ',
    arti: 'Kelebihan / Poin kuat',
    penjelasan: 'Kelebihan atau poin kuat dari seseorang maupun suatu barang (kebalikan dari 短所 / kelemahan).',
    contoh1: '長所と短所。\n(Kelebihan dan kelemahan.)',
    contoh2: '自分の長所をアピールする。\n(Menonjolkan/menawarkan kelebihan diri sendiri.)'
  }
];

window.vocabData.push(...kosakata_m4h5);