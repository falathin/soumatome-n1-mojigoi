// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m3h1 = [
  // --- GAMBAR 1: Onomatope (Kata Tiruan Keadaan / Bunyi) ---
  {
    id: 'm3h1_1',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'こうこうと',
    furigana: 'こうこうと',
    arti: 'Terang benderang',
    penjelasan: 'Menggambarkan keadaan cahaya (seperti lampu, senter, atau bulan) yang menyala dengan sangat terang dan bersinar kuat menembus kegelapan.',
    contoh1: 'ライトがこうこうとついている。\n(Lampu menyala dengan terang benderang.)',
    contoh2: '月がこうこうと照っている。\n(Bulan bersinar terang benderang.)'
  },
  {
    id: 'm3h1_2',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'ごしごし',
    furigana: 'ごしごし',
    arti: 'Menggosok dengan kuat',
    penjelasan: 'Kata tiruan bunyi untuk gerakan menggosok atau menyikat sesuatu dengan tenaga yang kuat, biasanya saat membersihkan noda membandel pada panci, lantai, atau mencuci.',
    contoh1: '鍋をごしごしこすって洗う。\n(Mencuci panci dengan menggosoknya kuat-kuat.)',
    contoh2: '床をごしごし磨く。\n(Menggosok lantai kuat-kuat hingga bersih.)'
  },
  {
    id: 'm3h1_3',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'すらすら',
    furigana: 'すらすら',
    arti: 'Lancar / Tanpa hambatan',
    penjelasan: 'Menunjukkan sesuatu yang berjalan dengan sangat mulus dan lancar tanpa terhenti atau kesulitan. Sering digunakan untuk kemampuan membaca, berbicara bahasa asing, atau menyelesaikan soal.',
    contoh1: '難問をすらすら解く。\n(Menyelesaikan soal sulit dengan sangat lancar.)',
    contoh2: '英語をすらすら話す。\n(Berbicara bahasa Inggris dengan sangat lancar.)'
  },
  {
    id: 'm3h1_4',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'ずるずる',
    furigana: 'ずるずる',
    arti: 'Menyeret / Berlarut-larut',
    penjelasan: 'Memiliki dua arti utama. Pertama: Bunyi/keadaan menyeret benda berat di lantai. Kedua: Keadaan di mana suatu masalah, acara, atau konflik ditarik ulur dan berlarut-larut tanpa ada penyelesaian yang jelas.',
    contoh1: '重い荷物をずるずる引きずる。\n(Menyeret barang bawaan yang berat.)',
    contoh2: 'ストがずるずる長引く。\n(Mogok kerja berlarut-larut semakin panjang.)'
  },
  {
    id: 'm3h1_5',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'ばらばら',
    furigana: 'ばらばら',
    arti: 'Terpisah-pisah / Berantakan',
    penjelasan: 'Keadaan di mana sesuatu yang seharusnya menyatu menjadi terpisah, tercerai-berai, atau dibongkar ke dalam bagian-bagian kecil. Bisa digunakan untuk benda (mesin dibongkar) maupun manusia (keluarga yang berpisah).',
    contoh1: '機械をばらばらにする。\n(Membongkar mesin menjadi terpisah-pisah.)',
    contoh2: '一家がばらばらになる。\n(Keluarga menjadi tercerai-berai/berpisah.)'
  },
  {
    id: 'm3h1_6',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'じめじめ(する)',
    furigana: 'じめじめ(する)',
    arti: 'Lembap / Suram',
    penjelasan: 'Menggambarkan tingkat kelembapan yang tinggi, basah, dan tidak nyaman (seperti saat musim hujan). Bisa juga mengkiaskan kepribadian atau suasana cerita yang suram, melankolis, dan tidak ceria.',
    contoh1: '梅雨で部屋がじめじめしている。\n(Kamar terasa lembap karena musim hujan.)',
    contoh2: 'じめじめした話。\n(Cerita yang suram/murung.)'
  },
  {
    id: 'm3h1_7',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'ざあざあ',
    furigana: 'ざあざあ',
    arti: 'Lebat / Deras (hujan)',
    penjelasan: 'Kata tiruan bunyi aliran air yang turun dengan deras. Paling sering digunakan untuk menggambarkan hujan yang turun dengan sangat lebat (hujan deras).',
    contoh1: '雨がざあざあ降っている。\n(Hujan turun dengan sangat lebat.)',
    contoh2: '水道の水をざあざあ流す。\n(Mengucurkan air keran dengan deras.)'
  },
  {
    id: 'm3h1_8',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'がんがん(する)',
    furigana: 'がんがん(する)',
    arti: 'Berdenyut keras / Berdenging kuat',
    penjelasan: 'Menggambarkan rasa sakit yang memukul-mukul atau berdenyut keras dari dalam, khususnya untuk sakit kepala yang sangat hebat. Juga bisa berarti suara bising yang memekakkan telinga.',
    contoh1: '頭ががんがんする。\n(Kepalaku berdenyut-denyut sakit / pusing luar biasa.)',
    contoh2: '工事の音ががんがん響く。\n(Suara proyek konstruksi berdenging keras memekakkan telinga.)'
  },
  {
    id: 'm3h1_9',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'かんかん',
    furigana: 'かんかん',
    arti: 'Sangat marah / Terik (matahari)',
    penjelasan: 'Memiliki dua arti yang berbeda. Pertama: Keadaan seseorang yang sedang murka atau marah besar hingga meledak-ledak. Kedua: Matahari musim panas yang bersinar sangat terik dan menyengat.',
    contoh1: '父がかんかんに怒っている。\n(Ayah sedang marah besar / mengamuk.)',
    contoh2: '夏の太陽がかんかんに照りつける。\n(Matahari musim panas bersinar sangat terik menyorot.)'
  },
  {
    id: 'm3h1_10',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'だらだら',
    furigana: 'だらだら',
    arti: 'Mengucur / Bermalas-malasan / Bertele-tele',
    penjelasan: 'Digunakan untuk tiga hal: 1) Cairan (keringat/darah) yang mengalir terus-menerus. 2) Melakukan tindakan secara lambat, malas, dan tidak efisien. 3) Hal yang panjang bertele-tele dan membosankan.',
    contoh1: '汗をだらだら流す。\n(Keringat mengucur deras.)',
    contoh2: 'だらだらと仕事をする。\n(Bekerja dengan bermalas-malasan / lamban tanpa semangat.)'
  },
  {
    id: 'm3h1_11',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'だぶだぶ',
    furigana: 'だぶだぶ',
    arti: 'Kedodoran / Sangat longgar',
    penjelasan: 'Ukuran pakaian (celana, baju) yang terlalu besar dan melebihi ukuran tubuh pemakainya sehingga terlihat longgar dan kedodoran. Sinonimnya adalah ぶかぶか (bukabuka).',
    contoh1: 'だぶだぶ（＝ぶかぶか）のズボン。\n(Celana yang kedodoran / kebesaran.)',
    contoh2: 'このシャツはだぶだぶだ。\n(Kemeja ini sangat kebesaran/kedodoran.)'
  },
  {
    id: 'm3h1_12',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'つやつや(する)',
    furigana: 'つやつや(する)',
    arti: 'Berkilau / Halus bercahaya',
    penjelasan: 'Permukaan benda atau anggota tubuh (seperti rambut, kulit, kuku, atau buah) yang sehat, mulus, dan memantulkan cahaya indah sehingga tampak berkilau dan terawat.',
    contoh1: 'つやつやしている髪。\n(Rambut yang berkilau dan halus bak sutra.)',
    contoh2: 'つやつやした肌。\n(Kulit yang halus, sehat, dan bercahaya.)'
  },
  {
    id: 'm3h1_13',
    minggu: '3',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'まちまち',
    furigana: 'まちまち',
    arti: 'Berbeda-beda / Beragam',
    penjelasan: 'Menunjukkan bahwa ada banyak variasi, pendapat, bentuk, atau cara dari setiap orang/benda sehingga tidak ada satu pun yang seragam (bervariasi). Merupakan kata sifat-na.',
    contoh1: '人の意見はまちまちだ。\n(Pendapat orang itu berbeda-beda / bermacam-macam.)',
    contoh2: '服装はまちまちだった。\n(Pakaian yang mereka kenakan berbeda-beda/beragam.)'
  },
  {
    id: 'm3h1_14',
    minggu: '3',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: '丸々',
    furigana: 'まるまる',
    arti: 'Sepenuhnya / Gemuk bulat',
    penjelasan: 'Digunakan dalam dua konteks: 1) Bentuk fisik (seperti bayi atau hewan) yang bulat montok karena banyak dagingnya. 2) Menunjukkan keseluruhan kuantitas waktu/jumlah tanpa dikurangi sedikit pun (sepenuhnya/genap).',
    contoh1: '丸々太っている赤ちゃん。\n(Bayi yang gemuk dan bulat montok.)',
    contoh2: 'それをやるには丸々三日かかる。\n(Untuk melakukannya butuh waktu tiga hari penuh/genap.)'
  },
  {
    id: 'm3h1_15',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'ひらひら(する)',
    furigana: 'ひらひら(する)',
    arti: 'Melambai-lambai / Berkibar',
    penjelasan: 'Gerakan benda yang ringan dan tipis (seperti kelopak bunga sakura, kertas, tirai, daun) yang tertiup angin dan menari-nari atau berjatuhan dengan lembut di udara.',
    contoh1: 'カーテンがひらひらしている。\n(Tirai melambai-lambai tertiup angin.)',
    contoh2: '蝶がひらひらと飛んでいる。\n(Kupu-kupu terbang menari-nari.)'
  },
  {
    id: 'm3h1_16',
    minggu: '3',
    hari: '1',
    kategori: 'onomatope',
    kanji: 'ぐちゃぐちゃ',
    furigana: 'ぐちゃぐちゃ',
    arti: 'Kacau balau / Berantakan / Benyek',
    penjelasan: 'Kondisi yang sangat tidak teratur, berantakan parah (seperti isi tas atau jadwal), atau tekstur benda padat yang hancur menjadi lembek/benyek karena terinjak atau basah.',
    contoh1: 'かばんの中がぐちゃぐちゃになっている。\n(Isi di dalam tas menjadi kacau balau/berantakan.)',
    contoh2: 'トマトを踏んでぐちゃぐちゃになった。\n(Tomatnya terinjak dan hancur benyek.)'
  },

  // --- GAMBAR 2: Tingkatan / Derajat (程度を表す言葉) ---
  {
    id: 'm3h1_17',
    minggu: '3',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'むちゃくちゃ',
    furigana: 'むちゃくちゃ',
    arti: 'Sangat luar biasa / Tidak masuk akal',
    penjelasan: 'Dalam percakapan kasual, bisa berarti "sangat/banget" (ekstrem). Namun, arti aslinya merujuk pada situasi, pendapat, atau logika yang tidak masuk akal, ngawur, dan serba kacau.',
    contoh1: '電車がむちゃくちゃ混む。\n(Keretanya luar biasa sangat penuh sesak.)',
    contoh2: 'むちゃくちゃな意見。\n(Pendapat yang ngawur/tidak masuk akal.)'
  },
  {
    id: 'm3h1_18',
    minggu: '3',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: 'さんざん',
    furigana: 'さんざん',
    arti: 'Habis-habisan / Sangat sial',
    penjelasan: 'Keadaan di mana seseorang menerima tindakan buruk secara berkali-kali hingga parah (seperti dimarahi habis-habisan), atau mengalami nasib yang sangat buruk, apes, dan menyedihkan.',
    contoh1: 'さんざん注意される。\n(Diperingatkan / dimarahi habis-habisan dengan keras.)',
    contoh2: 'さんざんな目にあう。\n(Mengalami nasib/pengalaman yang sangat sial dan buruk.)'
  },
  {
    id: 'm3h1_19',
    minggu: '3',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: 'ほどほど',
    furigana: 'ほどほど',
    arti: 'Secukupnya / Sewajarnya',
    penjelasan: 'Menjaga takaran, porsi, atau tindakan agar berada di batas tengah yang wajar. Tidak berlebihan, tetapi juga tidak terlalu sedikit. Menyarankan untuk tahu batas.',
    contoh1: 'ほどほどにお酒を飲む。\n(Minum alkohol secukupnya / tidak berlebihan.)',
    contoh2: '冗談はほどほどにしなさい。\n(Bercandanya sewajarnya saja / jangan kelewatan.)'
  },
  {
    id: 'm3h1_20',
    minggu: '3',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: 'そこそこ',
    furigana: 'そこそこ',
    arti: 'Lumayan / Cukup baik',
    penjelasan: 'Tingkat pencapaian atau hasil yang meskipun tidak sempurna atau bukan yang terbaik, tapi sudah lumayan, dapat diterima, dan dianggap cukup baik (passable/alright).',
    contoh1: '試験でそこそこいい点を取る。\n(Mendapat nilai yang lumayan bagus di ujian.)',
    contoh2: '料理はそこそこできる。\n(Bisa memasak lumayan lah / cukup baik.)'
  },
  {
    id: 'm3h1_21',
    minggu: '3',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: '甚だ',
    furigana: 'はなはだ',
    arti: 'Amat sangat / Sangat parah',
    penjelasan: 'Merupakan versi kata keterangan dari 甚だしい (hanahadashii). Ini adalah kata yang sangat formal untuk menekankan tingkatan ekstrem, umumnya dipasangkan dengan hal yang membebani atau negatif.',
    contoh1: '甚だ迷惑である。\n(Sangat amat mengganggu / sangat merepotkan.)',
    contoh2: '甚だ遺憾に存じます。\n(Sangat amat disayangkan / saya sangat menyesal.)'
  }
];

window.vocabData.push(...kosakata_m3h1);