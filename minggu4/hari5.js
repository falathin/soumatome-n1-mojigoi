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
    penjelasan: 'Tempat atau wilayah di mana suatu produk, terutama hasil pertanian, perkebunan, atau sumber daya alam, diproduksi atau tumbuh secara alami.',
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
    penjelasan: 'Proses atau kegiatan menghasilkan suatu produk atau sumber daya. Biasanya istilah ini merujuk pada hasil bumi, seperti minyak, gas, atau mineral yang ditambang atau diproduksi oleh suatu negara.',
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
    penjelasan: 'Barang atau produk yang diproduksi dan dibuat di dalam negara sendiri. Ini adalah kebalikan dari barang impor. Jika ditambahkan 品 (hin) menjadi 国産品 (produk dalam negeri).',
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
    penjelasan: 'Kegiatan membuat atau menghasilkan barang dari bahan baku, biasanya dalam skala besar seperti di pabrik atau fasilitas manufaktur, untuk memenuhi kebutuhan pasar.',
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
    penjelasan: 'Barang, makanan, atau hasil bumi yang sangat khas dan terkenal dari suatu daerah atau wilayah tertentu. Sering dibeli sebagai suvenir atau oleh-oleh khas.',
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
    penjelasan: 'Sesuatu yang melanggar aturan, hukum, atau norma moral. Tindakan curang, tidak adil, atau tidak benar dalam konteks bisnis, ujian, atau prosedur formal.',
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
    penjelasan: 'Keadaan di mana jalur komunikasi (telepon, surat), transportasi (kereta, jalan), atau hubungan terputus dan tidak dapat berfungsi sebagaimana mestinya akibat suatu gangguan.',
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
    penjelasan: 'Kondisi di mana sesuatu belum dapat dipastikan kejelasannya, tidak diketahui, atau hilang jejak. Sering digunakan dalam konteks orang hilang (行方不明) atau penyebab yang belum pasti (原因不明).',
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
    penjelasan: 'Memiliki dua penggunaan utama: pertama, merujuk pada anak/remaja yang nakal (不良少年). Kedua, merujuk pada produk yang kualitasnya buruk atau cacat (不良品).',
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
    penjelasan: 'Sifat, warna, atau ciri khusus yang sangat menonjol dan membedakan sesuatu (sekolah, kota, karya) dengan jelas dari yang lainnya.',
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
    penjelasan: 'Barang atau hasil bumi yang secara khusus dihasilkan di suatu daerah dan menjadi identitas daerah tersebut. Memiliki nuansa makna yang hampir sama dengan 名産 (meisan).',
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
    penjelasan: 'Sebuah artikel, program televisi, atau edisi majalah yang dikumpulkan dan difokuskan secara khusus untuk membahas satu tema secara mendalam.',
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
    penjelasan: 'Sifat, kebiasaan, bau, atau karakteristik unik yang hanya dimiliki secara eksklusif oleh seseorang, kelompok, budaya, atau tempat tertentu saja.',
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
    penjelasan: 'Sekelompok orang yang lahir, hidup, dan tumbuh pada rentang waktu yang sama. Sering digunakan saat membahas perbedaan pandangan (gap generasi) atau pergantian masa.',
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
    penjelasan: 'Orang yang bertindak atas nama orang lain atau mengambil alih sementara tugas/kewajiban orang lain karena orang tersebut berhalangan hadir atau absen.',
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
    penjelasan: 'Tindakan menggunakan suatu barang sebagai pengganti barang lain yang memiliki fungsi atau tujuan yang sama, karena barang yang seharusnya dipakai tidak tersedia.',
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
    penjelasan: 'Tempat di mana sesuatu pertama kali dibuat, otentik, paling terkenal akan tradisinya, atau pusat dari tempat sesuatu itu berkembang.',
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
    penjelasan: 'Bila dibaca "shijou", ini merujuk pada konsep pasar secara finansial atau ekonomi, seperti pasar saham atau pangsa pasar. Jika dibaca "ichiba", merujuk pada tempat fisik jual beli (seperti 魚市場/pasar ikan).',
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
    penjelasan: 'Kedudukan, peran, status, atau situasi seseorang di dalam masyarakat, tempat kerja, atau saat menghadapi sebuah masalah. Bisa juga bermakna sudut pandang.',
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
    penjelasan: 'Suatu perayaan, acara formal, atau kegiatan yang biasanya rutin diselenggarakan oleh sekolah, komunitas, atau merupakan bagian dari tradisi tahunan.',
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
    penjelasan: 'Bagian, departemen, atau urusan yang menangani manajemen sumber daya manusia di sebuah perusahaan, termasuk perekrutan, promosi, mutasi, dan gaji.',
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
    penjelasan: 'Tahap, waktu, atau langkah yang diambil sebelum sesuatu (acara, rapat, masalah) terjadi atau dimulai. Merujuk pada langkah antisipasi.',
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
    penjelasan: 'Makanan utama yang dikonsumsi secara rutin oleh masyarakat untuk memberi tenaga pokok, biasanya tinggi karbohidrat seperti beras (nasi), roti, atau mi, yang dimakan bersama lauk pauk (副食 - fukushoku).',
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
    penjelasan: 'Pusat penggerak, elemen terpenting, atau mayoritas pembentuk dalam suatu kelompok, organisasi, atau gerakan.',
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
    penjelasan: 'Gagasan utama, pesan, atau topik pokok yang diangkat dalam sebuah karya, seperti film, lagu, buku, tesis, atau diskusi. (Sinonim dengan テーマ).',
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
    penjelasan: 'Hewan atau tanaman yang hidup, tumbuh, dan berkembang biak secara alami di alam bebas tanpa campur tangan, pemeliharaan, atau budidaya dari manusia.',
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
    penjelasan: 'Fungsi biologis dan mekanisme alami yang terjadi pada tubuh makhluk hidup. Dalam konteks spesifik wanita, kata ini sering digunakan secara umum untuk merujuk pada haid/menstruasi.',
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
    penjelasan: 'Cara, usaha, pekerjaan, atau sumber penghasilan uang yang diandalkan oleh seseorang untuk membiayai dan mempertahankan kehidupan sehari-harinya.',
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
    penjelasan: 'Menggunakan kemampuan, keterampilan, bahan, atau pengalaman masa lalu secara efektif dan maksimal agar berguna pada situasi saat ini.',
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
    penjelasan: 'Pengaruh, efek, atau tindakan yang ditimbulkan oleh suatu hal terhadap hal lain. Sering digunakan dalam ranah ilmiah seperti reaksi kimia, atau bidang medis untuk efek obat.',
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
    penjelasan: 'Alat-alat, perlengkapan, atau barang-barang habis pakai yang disiapkan dan dikhususkan untuk suatu aktivitas, keperluan, atau bidang tertentu.',
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
    penjelasan: 'Keadaan di mana seseorang memegang hak milik penuh atas suatu benda, aset, lahan, properti, atau hak cipta secara legal atau formal.',
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
    penjelasan: 'Sifat baik, keunggulan, bakat, atau aspek positif yang dimiliki oleh kepribadian seseorang atau suatu barang (antonimnya adalah 短所 / kelemahan).',
    contoh1: '長所と短所。\n(Kelebihan dan kelemahan.)',
    contoh2: '自分の長所をアピールする。\n(Menonjolkan/menawarkan kelebihan diri sendiri.)'
  }
];

window.vocabData.push(...kosakata_m4h5);