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
    arti: 'Gaya Jepun',
    penjelasan: 'Sesuatu reka bentuk, corak, seni bina, masakan, atau gaya hidup yang berunsurkan budaya tradisional Jepun (antonimnya ialah 洋風 / youfuu - gaya Barat).',
    contoh1: '和風建築。\n(Seni bina bangunan gaya tradisional Jepun.)',
    contoh2: '今日は和風の料理を作りましょう。\n(Mari kita masak hidangan gaya Jepun hari ini.)'
  },
  {
    id: 'm5h2_2',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '和式',
    furigana: 'わしき',
    arti: 'Gaya Jepun (cth: tandas/format)',
    penjelasan: 'Merujuk kepada format, jenis, atau struktur gaya tradisional Jepun. Paling kerap digunakan dalam perbualan harian untuk merujuk kepada tandas jenis cangkung ala Jepun (berlawanan dengan 洋式 / youshiki - gaya Barat).',
    contoh1: '和式トイレ。\n(Tandas gaya cangkung Jepun.)',
    contoh2: 'この旅館の部屋は和式です。\n(Bilik di rumah penginapan tradisional ini adalah berkonsepkan gaya Jepun.)'
  },
  {
    id: 'm5h2_3',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '温和',
    furigana: 'おんわ',
    arti: 'Sederhana / Lembut',
    penjelasan: 'Boleh digunakan dalam dua situasi: pertama, cuaca atau iklim yang sederhana dan selesa (tidak terlalu sejuk atau panas). Kedua, merujuk kepada watak atau personaliti seseorang yang tenang, lemah lembut, dan tidak mudah marah.',
    contoh1: '温和な気候。\n(Iklim dan cuaca yang sederhana.)',
    contoh2: '彼女は温和な人です。\n(Dia adalah seorang yang berwatak lemah lembut.)'
  },
  {
    id: 'm5h2_4',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '調和',
    furigana: 'ちょうわ',
    arti: 'Harmoni / Keserasian',
    penjelasan: 'Keadaan di mana elemen-elemen yang berbeza bergabung dengan baik dan menghasilkan suasana yang sepadan, seimbang, harmoni, serta tidak kelihatan janggal.',
    contoh1: 'よく調和する。\n(Berpadu dan sepadan dengan sangat baik / sangat harmoni.)',
    contoh2: '自然と調和したデザイン。\n(Reka bentuk yang harmoni dan serasi dengan alam semula jadi.)'
  },
  {
    id: 'm5h2_5',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '和む',
    furigana: 'なごむ',
    arti: 'Menjadi tenang / Relaks',
    penjelasan: 'Perasaan di mana ketegangan hati, tekanan, atau suasana yang tegang beransur-ansur hilang, lalu bertukar menjadi tenang, santai, mesra, dan damai.',
    contoh1: '心が和む。\n(Hati berasa tenang dan relaks.)',
    contoh2: '赤ちゃんの笑顔を見ると和む。\n(Melihat senyuman bayi membuatkan suasana hati menjadi tenang.)'
  },

  // --- KANJI 図 (Zu/To) ---
  {
    id: 'm5h2_6',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '図案',
    furigana: 'ずあん',
    arti: 'Corak / Reka bentuk / Lakaran',
    penjelasan: 'Lakaran asas, draf, atau idea reka bentuk grafik, lukisan, dan corak yang dihasilkan untuk diaplikasikan kepada sesuatu projek seni, logo, mahupun produk industri.',
    contoh1: '図案を描く。\n(Melukis draf corak reka bentuk.)',
    contoh2: '新しい切手の図案。\n(Lakaran reka bentuk bagi setem baharu.)'
  },
  {
    id: 'm5h2_7',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '指図',
    furigana: 'さしず',
    arti: 'Arahan / Tunjuk ajar',
    penjelasan: 'Perbuatan memberi arahan, suruhan, atau perintah kepada orang lain tentang perkara yang perlu dilakukan. Ia kadangkala membawa nuansa yang agak mengongkong atau menjengkelkan jika arahan dibuat secara berlebihan.',
    contoh1: 'あれこれ指図する。\n(Memberikan pelbagai arahan itu dan ini.)',
    contoh2: '誰の指図も受けない。\n(Saya tidak akan menerima atau mengikut arahan daripada sesiapa pun.)'
  },

  // --- KANJI 実 (Jitsu/Mi) ---
  {
    id: 'm5h2_8',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '実態',
    furigana: 'じったい',
    arti: 'Keadaan sebenar / Realiti',
    penjelasan: 'Situasi sebenar, status hakikat, atau rupa sebenar sesuatu perkara yang sedang berlaku, yang biasanya mungkin berbeza dengan apa yang diuar-uarkan atau dilihat dari luaran.',
    contoh1: '実態を調査する。\n(Menjalankan siasatan mengenai keadaan / realiti sebenar.)',
    contoh2: '社会の実態を知る。\n(Mengetahui realiti sebenar mengenai masyarakat.)'
  },
  {
    id: 'm5h2_9',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '実業',
    furigana: 'じつぎょう',
    arti: 'Perniagaan sebenar / Industri',
    penjelasan: 'Merujuk kepada sektor perniagaan, perusahaan, komersial, atau industri dalam bidang seperti pembuatan, pertanian, dan perdagangan yang membentuk asas utama ekonomi.',
    contoh1: '実業家。\n(Ahli perniagaan / Pengusaha industri.)',
    contoh2: '彼は実業の世界で成功した。\n(Beliau telah mengecap kejayaan di dalam dunia perniagaan/industri.)'
  },
  {
    id: 'm5h2_10',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '誠実',
    furigana: 'せいじつ',
    arti: 'Jujur / Ikhlas',
    penjelasan: 'Sifat seseorang yang jujur, amanah, lurus hati, dan ikhlas dalam tutur kata serta perbuatan, sentiasa melakukan sesuatu tanpa wujudnya sebarang niat untuk menipu.',
    contoh1: '誠実な人。\n(Seseorang yang sangat jujur dan tulus ikhlas.)',
    contoh2: '誠実に対応する。\n(Memberikan respon dan layanan dengan penuh jujur serta ikhlas.)'
  },
  {
    id: 'm5h2_11',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '真実',
    furigana: 'しんじつ',
    arti: 'Kebenaran / Fakta',
    penjelasan: 'Kenyataan, hakikat, atau fakta yang benar-benar berlaku, sejati, dan tidak dipalsukan. Bebas sepenuhnya daripada pembohongan, penipuan, atau cerita rekaan semata-mata.',
    contoh1: '真実を語る。\n(Menceritakan mengenai fakta atau kebenaran.)',
    contoh2: 'いつか真実が明らかになる。\n(Suatu hari nanti kebenaran pasti akan terbongkar juga.)'
  },
  {
    id: 'm5h2_12',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '口実',
    furigana: 'こうじつ',
    arti: 'Alasan / Dalih',
    penjelasan: 'Alasan lemah yang sengaja dicipta atau digunakan oleh seseorang sebagai dalih untuk mewajarkan tindakan, mengelakkan diri dari tanggungjawab, atau menyembunyikan niat sebenar.',
    contoh1: '下手な口実。\n(Alasan atau dalih yang tidak munasabah/lemah.)',
    contoh2: '病気を口実にして休む。\n(Mengambil cuti dengan menjadikan alasan sakit sebagai dalih.)'
  },
  {
    id: 'm5h2_13',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '実入り',
    furigana: 'みいり',
    arti: 'Pendapatan / Keuntungan',
    penjelasan: 'Hasil pendapatan wang, tuai, atau pusingan keuntungan sebenar yang diperoleh daripada sesuatu perniagaan, kerjaya, pekerjaan, dan usaha yang dilakukan.',
    contoh1: '実入りのいい商売。\n(Perniagaan yang menjana pendapatan atau keuntungan yang sangat lumayan.)',
    contoh2: '今月は実入りが少ない。\n(Bulan ini, perolehan pendapatan amat sedikit.)'
  },

  // --- KANJI 公 (Kou/Ooyake) ---
  {
    id: 'm5h2_14',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '公正',
    furigana: 'こうせい',
    arti: 'Adil / Saksama',
    penjelasan: 'Sifat, tindakan, atau keputusan yang adil, telus, jujur, tidak berat sebelah, mematuhi peraturan dan perundangan tanpa menyebelahi mana-mana pihak dengan salah.',
    contoh1: '公正な取り引き。\n(Urus niaga dan transaksi yang adil.)',
    contoh2: '公正な裁判。\n(Proses perbicaraan mahkamah yang adil dan telus.)'
  },
  {
    id: 'm5h2_15',
    minggu: '5',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '公平',
    furigana: 'こうへい',
    arti: 'Sama rata / Adil',
    penjelasan: 'Memberikan layanan, hak, pembahagian, atau peluang yang saksama dan sama rata kepada semua orang dalam suatu kelompok, tanpa wujudnya sebarang diskriminasi atau unsur pilih kasih.',
    contoh1: '公平に分ける。\n(Membahagikan sesuatu dengan sama rata / adil.)',
    contoh2: '誰に対しても公平だ。\n(Bersikap adil dan sama rata terhadap sesiapa sahaja.)'
  },
  {
    id: 'm5h2_16',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公立',
    furigana: 'こうりつ',
    arti: 'Awam / Kerajaan',
    penjelasan: 'Institusi awam seperti sekolah, perpustakaan, atau hospital yang ditubuhkan, diselia, dan dibiayai oleh wang pihak berkuasa kerajaan tempatan (berlawanan dengan 私立 / shiritsu - institusi swasta).',
    contoh1: '公立の学校。\n(Sekolah kerajaan / sekolah awam.)',
    contoh2: '公立病院で働く。\n(Bekerja di hospital awam milik kerajaan.)'
  },
  {
    id: 'm5h2_17',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公用',
    furigana: 'こうよう',
    arti: 'Kegunaan rasmi / Awam',
    penjelasan: 'Barang, bahasa, fasiliti, atau kenderaan yang digunakan secara rasmi untuk urusan kerajaan, pentadbiran, atau organisasi sahaja, dan diharamkan untuk kegunaan peribadi sesuka hati.',
    contoh1: '公用語。\n(Bahasa rasmi.)',
    contoh2: '公用車を使う。\n(Menggunakan kereta/kenderaan rasmi jabatan.)'
  },
  {
    id: 'm5h2_18',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公私',
    furigana: 'こうし',
    arti: 'Awam dan peribadi (Public & Private)',
    penjelasan: 'Perkataan ini merujuk serentak kepada kedua-dua alam iaitu hal urusan rasmi/awam di tempat kerja dan juga hal urusan peribadi di rumah. Sering digabungkan menjadi frasa tentang mencampuradukkan kedua-dua urusan tersebut.',
    contoh1: '公私混同する。\n(Mencampuradukkan urusan awam rasmi dengan hal peribadi.)',
    contoh2: '公私の区別をつける。\n(Mengasingkan serta membezakan urusan tempat kerja dan peribadi.)'
  },
  {
    id: 'm5h2_19',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '主人公',
    furigana: 'しゅじんこう',
    arti: 'Watak utama / Hero',
    penjelasan: 'Merujuk kepada watak pusat, watak terpenting, pelakon utama, atau hero di dalam penceritaan sesebuah karya sastera, novel, anime, filem, dan drama.',
    contoh1: '物語の主人公。\n(Watak utama di dalam jalan cerita ini.)',
    contoh2: '映画の主人公になりきる。\n(Benar-benar menghayati dan menjelma menjadi watak utama filem itu.)'
  },
  {
    id: 'm5h2_20',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '公',
    furigana: 'おおやけ',
    arti: 'Umum / Terbuka / Rasmi',
    penjelasan: 'Sesuatu perkara, keadaan, maklumat, atau rahsia yang tidak lagi disembunyikan dan telah diketahui oleh orang ramai secara terbuka, atau diumumkan secara rasmi oleh pihak berkuasa.',
    contoh1: '事件が公になる。\n(Kejadian tersebut telah tersebar dan diketahui oleh khalayak umum.)',
    contoh2: '公の発表。\n(Satu pengumuman rasmi kepada pihak awam.)'
  },

  // --- KANJI 連 (Ren/Tsura) ---
  {
    id: 'm5h2_21',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '連休',
    furigana: 'れんきゅう',
    arti: 'Cuti berturut-turut',
    penjelasan: 'Cuti rehat, cuti umum, atau hari kelepasan kebangsaan yang bersambung-sambung selama beberapa hari (contohnya percutian hujung minggu yang bersambung dengan hari cuti kebangsaan di Jepun seperti Golden Week).',
    contoh1: '３日間の連休。\n(Cuti panjang yang berturut-turut selama 3 hari.)',
    contoh2: '連休を利用して旅行に行く。\n(Pergi melancong dengan memanfaatkan cuti panjang.)'
  },
  {
    id: 'm5h2_22',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '連帯',
    furigana: 'れんたい',
    arti: 'Solidariti / Tanggungjawab bersama',
    penjelasan: 'Ikatan perpaduan dan perasaan kebersamaan di mana ahli dalam sesuatu kumpulan menanggung tanggungjawab atau akibat perbuatan secara kolektif bersama-sama.',
    contoh1: '連帯責任。\n(Tanggungjawab bersama / kolektif akibat kesilapan kumpulan.)',
    contoh2: '連帯感を持つ。\n(Mempunyai perasaan perpaduan dan kebersamaan antara ahli.)'
  },
  {
    id: 'm5h2_23',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '連なる',
    furigana: 'つらなる',
    arti: 'Berbaris / Bersambung',
    penjelasan: 'Keadaan di mana sesuatu benda fizikal (seperti kenderaan di lebuh raya, deretan gunung, atau pulau) berbaris dengan sangat panjang dan bersambung-sambung merentasi jarak yang jauh.',
    contoh1: '渋滞で車が連なっている。\n(Deretan kereta berbaris panjang dan bersambung akibat kesesakan lalu lintas.)',
    contoh2: '山が連なる風景。\n(Pemandangan deretan gunung-ganang yang bersambung.)'
  },
  {
    id: 'm5h2_24',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '連ねる',
    furigana: 'つらねる',
    arti: 'Menyambung / Menyenaraikan',
    penjelasan: 'Tindakan aktif untuk meletakkan sesuatu secara berderet atau menyambungkannya menjadi satu barisan panjang. Selalunya digunakan juga sebagai simpulan bahasa "menyenaraikan/menambah nama ke dalam sebuah senarai".',
    contoh1: 'リストに名前を連ねる。\n(Menyenaraikan atau menambah nama supaya tersenarai di dalam senarai tersebut.)',
    contoh2: '車を連ねて走る。\n(Memandu kereta dengan berbaris/berkonvoi beramai-ramai.)'
  },

  // --- KANJI 告 (Koku/Tsu) ---
  {
    id: 'm5h2_25',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '告知',
    furigana: 'こくち',
    arti: 'Pemberitahuan / Notis',
    penjelasan: 'Makluman, pengumuman, atau pemberitahuan sesuatu kenyataan atau perkara penting secara rasmi. Sangat sering digunakan dalam konteks perubatan di mana doktor memaklumkan diagnosis penyakit kritikal kepada pesakit.',
    contoh1: 'ガンの告知をする。\n(Memberitahu / memberikan notis kepada pesakit bahawa beliau menghidap kanser.)',
    contoh2: 'イベントの告知を出す。\n(Mengeluarkan notis pengumuman mengenai acara tersebut.)'
  },
  {
    id: 'm5h2_26',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '告白',
    furigana: 'こくはく',
    arti: 'Pengakuan (cinta/dosa)',
    penjelasan: 'Tindakan menyatakan atau mendedahkan perasaan serta rahsia yang terpendam di dalam hati. Boleh digunakan dalam situasi romantis (meluahkan rasa cinta kepada seseorang) atau pengakuan salah/dosa.',
    contoh1: '罪を告白する。\n(Membuat pengakuan atas dosa/jenayah yang dilakukan.)',
    contoh2: '好きな人に告白した。\n(Saya telah meluahkan perasaan cinta saya kepada orang yang saya sukai.)'
  },
  {
    id: 'm5h2_27',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '予告',
    furigana: 'よこく',
    arti: 'Pemberitahuan awal / Prebiu',
    penjelasan: 'Pemberitahuan atau amaran ringkas mengenai sesuatu acara, filem, atau pendedahan yang akan berlaku dan ditayangkan pada masa hadapan (seperti \'trailer\' filem atau cuplikan episod siri televisyen minggu depan).',
    contoh1: '映画の予告。\n(Pemberitahuan awal / Prebiu trailer sesebuah filem.)',
    contoh2: '予告なしにテストが行われた。\n(Ujian telah diadakan secara mengejut tanpa sebarang pemberitahuan awal.)'
  },
  {
    id: 'm5h2_28',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '告げる',
    furigana: 'つげる',
    arti: 'Memberitahu / Mengumumkan',
    penjelasan: 'Satu ungkapan yang sedikit formal atau bernuansa sastera untuk menyampaikan berita, menyebut nama, atau mengumumkan maklumat/keputusan yang penting dengan menggunakan lisan kepada seseorang.',
    contoh1: '名前を告げる。\n(Memberitahu atau menyebut namanya.)',
    contoh2: '春の訪れを告げる。\n(Mengumumkan mengenai kedatangan musim bunga.)'
  },

  // --- KANJI 記 (Ki/Shiru) ---
  {
    id: 'm5h2_29',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '手記',
    furigana: 'しゅき',
    arti: 'Catatan peribadi / Memoir',
    penjelasan: 'Catatan, diari, nota, atau buku memoir yang ditulis sendiri oleh seseorang berdasarkan pengalaman hidup, perasaan peribadi, atau insiden yang benar-benar pernah dilaluinya sepanjang hidup.',
    contoh1: '体験を手記にまとめる。\n(Menulis dan membukukan tentang pengalaman yang dilalui ke dalam satu naskhah catatan peribadi.)',
    contoh2: '戦争の手記を読む。\n(Membaca catatan memoir peribadi mengenai sejarah zaman peperangan.)'
  },
  {
    id: 'm5h2_30',
    minggu: '5',
    hari: '2',
    kategori: 'kata benda',
    kanji: '伝記',
    furigana: 'でんき',
    arti: 'Biografi / Riwayat hidup',
    penjelasan: 'Sebuah karya tulisan sastera atau buku yang merekodkan serta menceritakan semula tentang sejarah kronologi riwayat hidup, cabaran, dan pencapaian cemerlang seorang tokoh yang terkenal atau bersejarah.',
    contoh1: '伝記を読む。\n(Membaca buku tulisan biografi seseorang.)',
    contoh2: 'リンカーンの伝記。\n(Buku biografi dan riwayat hidup Abraham Lincoln.)'
  },
  {
    id: 'm5h2_31',
    minggu: '5',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '記す',
    furigana: 'しるす',
    arti: 'Menulis / Mencatat',
    penjelasan: 'Kata kerja formal untuk perbuatan menulis, merekodkan, atau mencatatkan nama dan butiran maklumat di dalam dokumen. Boleh juga bermaksud memahat sesuatu peringatan atau azam dengan kuat di dalam hati.',
    contoh1: '名前を記す。\n(Menulis atau mencatatkan nama.)',
    contoh2: '心に記す。\n(Mencatat serta memahatnya dengan teguh di dalam ingatan dan hati.)'
  }
];

window.vocabData.push(...kosakata_m5h2);