// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m7h2 = [
  // --- GAMBAR 1 ---
  {
    id: 'm7h2_1',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'アットホーム（な）',
    furigana: 'アットホーム（な）',
    arti: 'Nyaman / Seperti di Rumah Sendiri (Cozy)',
    penjelasan: 'Berasal dari bahasa Inggris "at home". Menggambarkan suasana tempat, toko, atau restoran yang sangat ramah, hangat, santai, dan membuat seseorang merasa nyaman seperti berada di rumah sendiri.',
    contoh1: 'アットホームな雰囲気のレストラン。\n(Restoran dengan suasana yang nyaman dan hangat seperti di rumah.)',
    contoh2: 'この職場はアットホームで働きやすいです。\n(Tempat kerja ini sangat ramah/kekeluargaan sehingga mudah untuk bekerja.)'
  },
  {
    id: 'm7h2_2',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'ラフ（な）',
    furigana: 'ラフ（な）',
    arti: 'Kasual / Kasar / Sketsa Awal (Rough)',
    penjelasan: 'Berasal dari kata Inggris "rough". Memiliki dua makna utama dalam bahasa Jepang: pertama untuk pakaian yang santai atau kasual (casual), dan kedua untuk draf, gambar, atau sketsa kasar yang belum disempurnakan.',
    contoh1: 'ラフな服装（＝カジュアルな服装）。\n(Pakaian yang kasual / santai.)',
    contoh2: 'ラフな図面を書いて、設計のイメージを膨らませる。\n(Menggambar sketsa/draf kasar untuk mengembangkan gambaran desain.)'
  },
  {
    id: 'm7h2_3',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'ソフト（な）',
    furigana: 'ソフト（な）',
    arti: 'Lembut / Perangkat Lunak (Soft / Software)',
    penjelasan: 'Berasal dari kata "soft". Digunakan untuk mengekspresikan sifat yang lembut, ramah, atau tidak kasar (seperti cara berbicara). Selain itu, kata ini juga merupakan singkatan dari "software" (perangkat lunak komputer).',
    contoh1: 'ソフトな話し方をする人は好感が持てる。\n(Orang yang memiliki cara berbicara yang lembut memberikan kesan yang baik.)',
    contoh2: '新しいソフト（＝ソフトウェア）をパソコンにインストールした。\n(Menginstal perangkat lunak/software baru ke dalam komputer.)'
  },
  {
    id: 'm7h2_4',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'タイト（な）',
    furigana: 'タイト（な）',
    arti: 'Ketat / Padat (Tight)',
    penjelasan: 'Berasal dari kata "tight". Digunakan untuk menggambarkan pakaian (seperti rok) yang pas atau ketat di badan, serta situasi jadwal atau waktu yang sangat padat, mepet, dan tidak memiliki banyak kelonggaran.',
    contoh1: 'タイトスカートをはいて出かける。\n(Pergi keluar dengan mengenakan rok ketat.)',
    contoh2: '今週はタイトなスケジュールなので、風邪をひけない。\n(Minggu ini jadwalnya sangat padat, jadi saya tidak boleh sampai masuk angin.)'
  },
  {
    id: 'm7h2_5',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'シャープ（な）',
    furigana: 'シャープ（な）',
    arti: 'Tajam / Jelas (Sharp)',
    penjelasan: 'Berasal dari kata "sharp". Digunakan untuk mengekspresikan kualitas gambar atau foto yang sangat jelas/tajam (tidak buram), serta menggambarkan kecerdasan seseorang atau pikiran yang sangat tajam, pintar, dan cepat tanggap.',
    contoh1: 'デジタルカメラできれいなシャープな画像を撮影する。\n(Mengambil gambar/foto yang indah dan tajam jelas dengan kamera digital.)',
    contoh2: '彼はシャープな頭脳の持ち主で、問題解決能力が高い。\n(Dia adalah pemilik otak/pikiran yang tajam dan memiliki kemampuan memecahkan masalah yang tinggi.)'
  },
  {
    id: 'm7h2_6',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'デリケート（な）',
    furigana: 'デリケート（な）',
    arti: 'Sensitif / Halus / Rumit (Delicate)',
    penjelasan: 'Berasal dari kata "delicate". Menggambarkan kondisi emosional atau saraf seseorang yang sangat sensitif, peka, dan mudah tersinggung/terganggu. Kata ini juga digunakan untuk masalah atau urusan yang sensitif, pelik, dan memerlukan penanganan yang sangat hati-hati.',
    contoh1: '彼女はデリケートな神経の持ち主だ。\n(Dia memiliki sistem saraf/perasaan yang sangat sensitif [mudah stres/tersinggung].)',
    contoh2: 'これは政治的に非常にデリケートな問題です。\n(Ini adalah masalah yang secara politik sangat sensitif/pelik.)'
  },
  {
    id: 'm7h2_7',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'セキュリティ',
    furigana: 'セキュリティ',
    arti: 'Keamanan (Security)',
    penjelasan: 'Berasal dari bahasa Inggris "security". Merujuk pada sistem keamanan, perlindungan, atau penjagaan, baik dalam konteks fisik (keamanan gedung/rumah) maupun konteks digital (keamanan data/jaringan internet).',
    contoh1: 'このマンションはセキュリティがしっかりしている。\n(Apartemen ini memiliki sistem keamanan yang ketat/terjamin.)',
    contoh2: '個人情報を守るためにセキュリティを高める。\n(Meningkatkan keamanan untuk melindungi informasi pribadi.)'
  },
  {
    id: 'm7h2_8',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'エスカレーター',
    furigana: 'エスカレーター',
    arti: 'Eskalator / Sistem Pendidikan Tanpa Ujian Masuk',
    penjelasan: 'Selain berarti tangga berjalan (eskalator), istilah "Escalator-shiki" (エスカレーター式) dalam dunia pendidikan Jepang merujuk pada sistem sekolah terpadu (dari SD/SMP hingga Universitas) di mana siswa dapat naik ke jenjang berikutnya secara otomatis tanpa perlu mengikuti ujian saringan masuk lagi.',
    contoh1: 'エスカレーター式（＝入学試験なしに）に進学できる学校。\n(Sekolah di mana siswa dapat melanjutkan pendidikan ke jenjang berikutnya secara otomatis [tanpa ujian masuk].)',
    contoh2: '駅のエスカレーターを利用する。\n(Menggunakan eskalator di stasiun.)'
  },
  {
    id: 'm7h2_9',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ノルマ',
    furigana: 'ノルマ',
    arti: 'Target Kerja / Kuota / Target Minimum',
    penjelasan: 'Kata ini diserap dari bahasa Rusia "norma". Merujuk pada kuota, jumlah minimum tugas, atau target penjualan/pekerjaan yang dialokasikan kepada seseorang dan wajib diselesaikan dalam jangka waktu tertentu.',
    contoh1: '今日の仕事のノルマをこなす。\n(Menyelesaikan target/kuota pekerjaan hari ini.)',
    contoh2: '営業のノルマがきつくて大変だ。\n(Target minimum penjualan sangat ketat sehingga terasa berat.)'
  },
  {
    id: 'm7h2_10',
    minggu: '7',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ブレイク（する）',
    furigana: 'ブレイク（する）',
    arti: 'Istirahat Sejenak / Meledak Populer (Break)',
    penjelasan: 'Berasal dari kata "break". Memiliki makna ganda: pertama sebagai waktu istirahat singkat (coffee break), dan kedua sebagai kata kerja yang berarti meraih kesuksesan besar secara mendadak, menjadi sangat populer, atau meledak di pasaran (monster hit).',
    contoh1: 'コーヒーブレイクを挟んで会議を続ける。\n(Melanjutkan rapat setelah diselingi istirahat minum kopi sejenak.)',
    contoh2: 'その曲は去年大ブレイクした。\n(Lagu itu meledak sangat populer [menjadi hits besar] tahun lalu.)'
  },
  {
    id: 'm7h2_11',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'トラウマ',
    furigana: 'トラウマ',
    arti: 'Trauma Psikologis',
    penjelasan: 'Berasal dari kata medis/psikologis "trauma". Merujuk pada luka batin, trauma emosional, atau pengalaman masa lalu yang sangat buruk dan membekas dalam ingatan, sehingga memengaruhi kondisi psikologis seseorang hingga masa sekarang.',
    contoh1: '子どもの頃の体験がトラウマになる。\n(Pengalaman masa kecil berubah menjadi trauma psikologis.)',
    contoh2: '事故のトラウマで車に乗れなくなった。\n(Karena trauma kecelakaan, saya tidak bisa naik mobil lagi.)'
  },
  {
    id: 'm7h2_12',
    minggu: '7',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ゲット（する）',
    furigana: 'ゲット（する）',
    arti: 'Mendapatkan / Memperoleh (Get)',
    penjelasan: 'Berasal dari bahasa Inggris "get". Merupakan kata kasual yang digunakan saat seseorang berhasil mendapatkan, membeli, memperoleh, atau memenangkan suatu barang atau informasi.',
    contoh1: 'それ、どこでゲットしたの？\n(Benda itu, kamu dapatkan di mana?)',
    contoh2: '欲しかった限定品をようやくゲットした。\n(Akhirnya saya berhasil mendapatkan barang edisi terbatas yang saya inginkan.)'
  },
  {
    id: 'm7h2_13',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'アルコール',
    furigana: 'アルコール',
    arti: 'Alkohol / Minuman Keras',
    penjelasan: 'Berasal dari kata "alcohol". Selain merujuk pada senyawa kimia alkohol untuk sterilisasi, dalam percakapan sehari-hari kata ini lebih sering digunakan untuk merujuk pada minuman keras atau minuman beralkohol (sake).',
    contoh1: '私はアルコールは全くだめです。\n(Saya sama sekali tidak bisa minum alkohol.)',
    contoh2: '注射の前に肌をアルコールで消毒する。\n(Mensterilkan kulit dengan alkohol sebelum disuntik.)'
  },
  {
    id: 'm7h2_14',
    minggu: '7',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'オファー（する）',
    furigana: 'オファー（する）',
    arti: 'Tawaran / Menawarkan (Offer)',
    penjelasan: 'Berasal dari kata "offer". Digunakan ketika menerima atau memberikan sebuah tawaran resmi, baik berupa tawaran pekerjaan, kontrak kerja sama bisnis, peran dalam film, maupun pengajuan harga.',
    contoh1: '有名企業からオファーが来る。\n(Mendapat tawaran pekerjaan/kontrak dari perusahaan terkenal.)',
    contoh2: '彼に主役のオファーをする。\n(Memberikan tawaran peran utama kepadanya.)'
  },
  {
    id: 'm7h2_15',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ブランド',
    furigana: 'ブランド',
    arti: 'Merek / Barang Bermerek (Brand)',
    penjelasan: 'Berasal dari kata "brand". Merujuk pada merek terkenal yang memiliki gengsi tinggi. Ketika digabungkan menjadi "Brand-hin" (ブランド品), artinya merujuk khusus pada barang-barang mewah dari desainer terkenal luar negeri.',
    contoh1: 'ブランド品ばかりを好んで買う。\n(Gemar membeli barang-barang bermerek mewah saja.)',
    contoh2: 'この会社は独自のブランドを立ち上げた。\n(Perusahaan ini mendirikan merek dagang/brand milik mereka sendiri.)'
  },
  {
    id: 'm7h2_16',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'オプション',
    furigana: 'オプション',
    arti: 'Pilihan Opsional / Tambahan (Option)',
    penjelasan: 'Berasal dari kata "option". Merujuk pada layanan, komponen, atau aktivitas tambahan yang tidak wajib (opsional), di mana seseorang bebas memilih untuk menambahkannya atau tidak (biasanya memerlukan biaya ekstra).',
    contoh1: '市内観光はオプションになっている。\n(Tur keliling kota sifatnya opsional [pilihan tambahan].)',
    contoh2: '車のカーナビはオプションで追加しました。\n(Navigasi mobil ditambahkan sebagai opsi tambahan.)'
  },
  {
    id: 'm7h2_17',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'テンション',
    furigana: 'テンション',
    arti: 'Semangat / Tingkat Kehebohan (Excitement)',
    penjelasan: 'Berasal dari bahasa Inggris "tension". Namun, berbeda dengan arti bahasa Inggrisnya yang bermakna "tegang/stres", dalam bahasa Jepang slang kata ini berarti tingkat semangat, antusiasme, suasana hati, atau kegembiraan seseorang.',
    contoh1: 'お祭りに行くとテンションが上がる。\n(Ketika pergi ke festival, tingkat semangat/kegembiraan saya langsung naik.)',
    contoh2: '彼は今日、なぜかテンションが低い。\n(Hari ini entah mengapa dia terlihat tidak bersemangat/loyo.)'
  },

  // --- GAMBAR 2 ---
  {
    id: 'm7h2_18',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'プレッシャー',
    furigana: 'プレッシャー',
    arti: 'Tekanan Mental / Beban Pikiran (Pressure)',
    penjelasan: 'Berasal dari kata "pressure". Merujuk pada tekanan psikologis, beban mental, atau stres yang dirasakan seseorang akibat tuntutan tugas, ekspektasi dari orang lain, atau situasi menjelang ujian/pertandingan penting.',
    contoh1: '周囲の期待からプレッシャーがかかる。\n(Merasakan tekanan mental akibat ekspektasi orang-orang di sekitar.)',
    contoh2: 'プレッシャーに負けずに実力を発揮する。\n(Menunjukkan kemampuan terbaik tanpa kalah dari tekanan mental.)'
  },
  {
    id: 'm7h2_19',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ギャップ',
    furigana: 'ギャップ',
    arti: 'Celah / Kesenjangan / Perbedaan (Gap)',
    penjelasan: 'Berasal dari kata "gap". Digunakan untuk menggambarkan adanya celah perbedaan atau ketidakselarasan antara dua hal, misalnya kesenjangan pendapat antar generasi, perbedaan antara ekspektasi dan realita, atau perbedaan sifat asli seseorang dengan penampilannya.',
    contoh1: '世代間のギャップを感じる。\n(Merasakan adanya kesenjangan/perbedaan antargenerasi.)',
    contoh2: '理想と現実のギャップに悩む。\n(Merasa bingung/khawatir karena adanya celah antara idealisme dan kenyataan.)'
  },
  {
    id: 'm7h2_20',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'バブル',
    furigana: 'バブル',
    arti: 'Gelembung Ekonomi (Bubble)',
    penjelasan: 'Berasal dari kata "bubble". Secara khusus sering digunakan dalam istilah ekonomi (Bubble Keizai) untuk menggambarkan kondisi ekonomi yang melonjak tinggi tidak realistis lalu tiba-tiba hancur atau pecah (collapsed).',
    contoh1: 'バブル（経済）がはじける。\n(Gelembung ekonomi meletus/hancur.)',
    contoh2: '1990年代に日本のバブル経済崩壊が起きた。\n(Pada tahun 1990-an terjadi kehancuran ekonomi gelembung di Jepang.)'
  },
  {
    id: 'm7h2_21',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ストーカー',
    furigana: 'ストーカー',
    arti: 'Penguntit (Stalker)',
    penjelasan: 'Berasal dari kata "stalker". Merujuk pada pelaku kriminal atau seseorang yang memiliki obsesi tidak sehat terhadap orang lain, lalu terus-menerus mengikuti, mengintai, menguntit, atau mengganggu kehidupan pribadi orang tersebut secara obsesif.',
    contoh1: '最近、ストーカーに悩む人が増えている。\n(Belakangan ini, jumlah orang yang menderita akibat gangguan penguntit semakin meningkat.)',
    contoh2: 'ストーカー被害について警察に相談する。\n(Berkonsultasi dengan polisi mengenai kerugian/ancaman dari penguntit.)'
  },
  {
    id: 'm7h2_22',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'エリート',
    furigana: 'エリート',
    arti: 'Elit / Orang Pilihan / Golongan Atas (Elite)',
    penjelasan: 'Berasal dari kata "elite". Digunakan untuk menyebut kelompok orang atau individu yang memiliki keunggulan luar biasa, kepintaran di atas rata-rata, posisi tinggi, atau status sosial terbaik di dalam suatu organisasi atau masyarakat.',
    contoh1: '彼は一流大学を卒業したエリート社員だ。\n(Dia adalah karyawan elit yang lulus dari universitas ternama.)',
    contoh2: 'エリートコースを歩む。\n(Menapaki jalur karier kesuksesan para elit.)'
  },
  {
    id: 'm7h2_23',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'バリアフリー',
    furigana: 'バリアフリー',
    arti: 'Bebas Hambatan (Barrier-Free / Akses Difabel)',
    penjelasan: 'Berasal dari kata "barrier-free". Konsep desain arsitektur atau fasilitas umum yang dibuat tanpa undakan, tangga tajam, atau pembatas fisik lainnya, sehingga ramah, aman, dan mudah diakses oleh lansia maupun penyandang disabilitas (pengguna kursi roda).',
    contoh1: '祖父母のためにバリアフリーの家を建てる。\n(Membangun rumah ramah lansia/bebas hambatan demi kakek dan nenek.)',
    contoh2: 'この駅はバリアフリー化が進んでいる。\n(Stasiun ini sudah mengalami kemajuan dalam modernisasi fasilitas bebas hambatan [akses disabilitas].)'
  },
  {
    id: 'm7h2_24',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ニート',
    furigana: 'ニート',
    arti: 'NEET (Pengangguran Usia Produktif)',
    penjelasan: 'Akronim dari bahasa Inggris "Not in Education, Employment, or Training". Merujuk pada kelompok usia muda produktif yang tidak bekerja, tidak menempuh jalur pendidikan formal, dan juga tidak sedang mengikuti pelatihan keterampilan apa pun.',
    contoh1: '彼は大学卒業後、就職せずにニートになった。\n(Setelah lulus universitas, dia tidak mencari kerja dan menjadi NEET [pengangguran].)',
    contoh2: 'ニートの若者の社会復帰を支援するプログラム。\n(Program untuk mendukung kembalinya para pemuda NEET ke dalam lingkungan masyarakat/dunia kerja.)'
  }
];

window.vocabData.push(...kosakata_m7h2);