// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m7h1 = [
  // ==========================================================
  // KELOMPOK 1: 省略に注意 (Singkatan yang Harus Diperhatikan)
  // ==========================================================
  {
    id: 'm7h1_1',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ハイテク',
    furigana: 'ハイテク',
    arti: 'Teknologi tinggi (High-tech)',
    penjelasan: 'Singkatan dari "ハイテクノロジー" (High Technology). Digunakan untuk mendeskripsikan industri modern, produk, atau keilmuan yang memanfaatkan teknologi paling mutakhir, seperti robotika, semikonduktor, kecerdasan buatan, dan komputer tingkat lanjut.',
    contoh1: 'わが国はハイテク産業に力を入れている。\n(Negara kami sedang memfokuskan kekuatan pada industri teknologi tinggi.)',
    contoh2: 'この工場では最先端のハイテク機器が導入されている。\n(Di pabrik ini, peralatan teknologi tinggi yang paling mutakhir telah diterapkan.)'
  },
  {
    id: 'm7h1_2',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'リストラ',
    furigana: 'リストラ',
    arti: 'Restrukturisasi / Pemutusan Hubungan Kerja (PHK)',
    penjelasan: 'Singkatan dari "リストラクチャリング" (Restructuring). Walaupun makna aslinya adalah penataan ulang struktur perusahaan, di Jepang istilah ini bergeser makna dan memiliki konotasi negatif yang kuat, yaitu pemecahan atau pengurangan jumlah karyawan (PHK) secara massal demi efisiensi biaya saat kondisi ekonomi memburuk.',
    contoh1: '不景気で多くの社員がリストラされた。\n(Karena resesi ekonomi, banyak karyawan yang terkena PHK/restrukturisasi.)',
    contoh2: '会社は倒産を防ぐためにリストラを敢行せざるを得なかった。\n(Perusahaan terpaksa melakukan PHK demi mencegah kebangkrutan.)'
  },
  {
    id: 'm7h1_3',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'コネ',
    furigana: 'コネ',
    arti: 'Koneksi / Orang dalam (Connection)',
    penjelasan: 'Singkatan dari "コネクション" (Connection). Merujuk pada jaringan hubungan sosial, kekerabatan, atau kenalan yang dimanfaatkan demi mendapatkan keuntungan sepihak secara tidak adil, misalnya untuk mempermudah kelulusan wawancara kerja atau memenangkan tender bisnis.',
    contoh1: 'コネを使って大企業に就職する。\n(Menggunakan koneksi/orang dalam untuk mendapatkan pekerjaan di perusahaan besar.)',
    contoh2: '実力ではなくコネで選ばれたのは不公平だ。\n(Dipilih karena koneksi dan bukan karena kemampuan nyata itu tidak adil.)'
  },
  {
    id: 'm7h1_4',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'セクハラ',
    furigana: 'セクハラ',
    arti: 'Pelecehan seksual (Sexual harassment)',
    penjelasan: 'Singkatan dari "セクシャルハラスメント" (Sexual Harassment). Tindakan, ucapan, bersenda gurau bernuansa seksual, atau perlakuan tidak menyenangkan di tempat kerja atau ruang publik yang membuat korban merasa tertekan, terhina, dan tidak nyaman.',
    contoh1: '上司からセクハラを受けて会社を辞めた。\n(Saya mengundurkan diri dari perusahaan karena menerima pelecehan seksual dari atasan.)',
    contoh2: '職場でのセクハラ防止に向けて厳格なガイドラインが作られた。\n(Panduan ketat telah dibuat untuk mencegah terjadinya pelecehan seksual di tempat kerja.)'
  },
  {
    id: 'm7h1_5',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'マザコン',
    furigana: 'マザコン',
    arti: 'Anak mama / Mother complex',
    penjelasan: 'Singkatan dari "マザーコンプレックス" (Mother Complex). Istilah sosial untuk menggambarkan seseorang (biasanya pria dewasa) yang memiliki keterikatan emosional terlalu berlebihan pada ibunya, tidak mandiri, dan selalu mengutamakan keputusan ibunya di atas segalanya. Kebalikannya adalah ファザコン (Father complex).',
    contoh1: '彼はマザコンだ。\n(Dia adalah seorang anak mama.)',
    contoh2: '何でも母親に聞かないと行動できないマザコンの男性とは結婚したくない。\n(Saya tidak mau menikah dengan pria manja anak mama yang tidak bisa bertindak tanpa bertanya dulu pada ibunya.)'
  },
  {
    id: 'm7h1_6',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ゼネコン',
    furigana: 'ゼネコン',
    arti: 'Kontraktor umum raksasa (General contractor)',
    penjelasan: 'Singkatan dari "ジェネラルコンストラクター" (General Contractor). Istilah khusus di Jepang untuk menyebut perusahaan konstruksi skala masif yang memegang kendali penuh atas proyek-proyek infrastruktur besar milik negara maupun swasta, seperti pembuatan gedung pencakar langit, jaringan bawah tanah, dan bendungan.',
    contoh1: '大手ゼネコンが新しい駅ビルの建設を受注した。\n(Kontraktor umum besar memenangkan kontrak pembangunan gedung stasiun yang baru.)',
    contoh2: '日本のゼネコン業界は海外でのインフラ開発にも積極的に参加している。\n(Industri kontraktor besar Jepang juga aktif berpartisipasi dalam pembangunan infrastruktur di luar negeri.)'
  },
  {
    id: 'm7h1_7',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'プレゼン',
    furigana: 'プレゼン',
    arti: 'Presentasi (Presentation)',
    penjelasan: 'Singkatan dari "プレゼンテーション" (Presentation). Proses pemaparan atau penyajian suatu ide, rencana kerja, rancangan produk, atau laporan riset di hadapan audiens, rekan kerja, atau klien dengan tujuan meyakinkan mereka.',
    contoh1: '会議でプレゼンをする。\n(Melakukan presentasi di dalam rapat.)',
    contoh2: '彼女のプレゼンは資料がとても見やすくて分かりやすかった。\n(Presentasi wanita itu sangat mudah dipahami karena dokumennya rapi.)'
  },
  {
    id: 'm7h1_8',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'バイオ',
    furigana: 'バイオ',
    arti: 'Bioteknologi (Biotechnology)',
    penjelasan: 'Singkatan dari "バイオテクノロジー" (Biotechnology). Merujuk pada bidang ilmu dan penerapan teknologi yang memanfaatkan rekayasa biologi, mikroorganisme, tumbuhan, atau sistem hayati demi kepentingan medis, pertanian, pangan, dan pelestarian lingkungan.',
    contoh1: '大学でバイオ研究に没頭している。\n(Saya sedang mendalami penelitian bioteknologi di universitas.)',
    contoh2: 'バイオテクノロジーの進歩により、病気に強い作物が作られた。\n(Berkat kemajuan bioteknologi, tanaman yang tahan penyakit berhasil diciptakan.)'
  },
  {
    id: 'm7h1_9',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ハンデ',
    furigana: 'ハンデ',
    arti: 'Hambatan / Kekurangan / Keuntungan tambahan (Handicap)',
    penjelasan: 'Singkatan dari "ハンディキャップ" (Handicap). Dalam kehidupan sosial, kata ini mengacu pada keterbatasan fisik atau situasi merugikan yang menjadi kendala. Namun dalam permainan atau olahraga, kata ini bermakna kompensasi skor atau keuntungan ekstra yang diberikan kepada pemain lemah agar jalannya kompetisi seimbang.',
    contoh1: 'ハンデを克服して、素晴らしい成果を収めた。\n(Mengatasi hambatan/kekurangan yang ada dan berhasil meraih pencapaian luar biasa.)',
    contoh2: '初心者なので、ゴルフの試合で少しハンデをもらった。\n(Karena saya seorang pemula, saya diberikan sedikit handicap/keuntungan tambahan dalam pertandingan golf.)'
  },
  {
    id: 'm7h1_10',
    minggu: '7',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'マンネリ',
    furigana: 'マンネリ',
    arti: 'Monoton / Klise / Kehilangan kesegaran rutinitas',
    penjelasan: 'Singkatan dari "マンネリズム" (Mannerism). Menggambarkan kondisi di mana metode kerja, karya seni, atau hubungan asmara sudah berjalan terlalu lama tanpa ada inovasi, perubahan, atau variasi baru, sehingga terasa jenuh, basi, dan membosankan.',
    contoh1: '毎日同じことの繰り返しで、仕事がマンネリ化している。\n(Pekerjaan menjadi monoton karena setiap hari hanya mengulang hal yang sama.)',
    contoh2: '付き合って３年が経ち、二人の関係がマンネリに陥っている。\n(Setelah tiga tahun berpacaran, hubungan keduanya terjebak dalam rutinitas yang membosankan.)'
  },
  {
    id: 'm7h1_11',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'エコ',
    furigana: 'エコ',
    arti: 'Ramah lingkungan / Eko (Eco)',
    penjelasan: 'Singkatan dari "エコロジー" (Ecology). Segala hal yang berkaitan dengan perlindungan alam, penghematan energi, dan pengurangan limbah bumi. Sering dilekatkan pada kata lain seperti エコ生活 (gaya hidup ramah lingkungan), エコグッズ (produk ramah lingkungan), dan エコカー (mobil ramah lingkungan).',
    contoh1: '環境のためにエコ生活を心がけている。\n(Saya mengusahakan gaya hidup ramah lingkungan demi alam.)',
    contoh2: 'スーパーに行くときはエコバッグを必ず持参する。\n(Saya selalu membawa kantong belanja ramah lingkungan saat pergi ke supermarket.)'
  },
  {
    id: 'm7h1_12',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ギャラ',
    furigana: 'ギャラ',
    arti: 'Honorarium / Upah / Gaji penampil (Guaranty)',
    penjelasan: 'Singkatan dari "ギャランティー" (Guaranty). Istilah khusus yang digunakan dalam dunia hiburan, pertunjukan, seni, atau pekerjaan lepasan (freelance) untuk menyebut imbalan uang, bayaran profesional, atau honorarium yang diterima oleh artis, model, pembicara, maupun kreator.',
    contoh1: 'あの芸能人は有名なのに、意外とギャラが安い。\n(Meskipun artis itu terkenal, ternyata honoriumnya lumayan murah.)',
    contoh2: 'ギャラの交渉がうまくいかず, 出演を辞退した。\n(Karena negosiasi honorarium tidak berjalan lancar, dia membatalkan penampilannya.)'
  },
  {
    id: 'm7h1_13',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'インテリ',
    furigana: 'インテリ',
    arti: 'Intelektual / Kaum terperajar / Cendekiawan',
    penjelasan: 'Berasal dari kata bahasa Rusia "intelligentsiya" (atau bahasa Inggris *intellectual*). Sebutan untuk kelompok masyarakat yang berpendidikan tinggi, memiliki wawasan akademik yang sangat luas, dan biasanya bekerja menggunakan kemampuan berpikir analitis.',
    contoh1: '彼は本をたくさん読むインテリな人だ。\n(Dia adalah orang intelektual yang membaca banyak sekali buku.)',
    contoh2: 'あの人のインテリ気取りの話し方が少し苦手だ。\n(Saya agak kurang suka dengan cara bicaranya yang sok intelektual itu.)'
  },
  {
    id: 'm7h1_14',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'セレブ',
    furigana: 'セレブ',
    arti: 'Orang kaya raya / Kaum jetset glamor (Celebrity)',
    penjelasan: 'Singkatan dari "セレブリティ" (Celebrity). Di dunia barat, maknanya adalah orang terkenal/artis. Namun di Jepang, maknanya bergeser secara spesifik untuk menyebut orang-orang yang memiliki kekayaan luar biasa melimpah, gaya hidup sangat mewah, sosialita, dan berkelas sosial tinggi.',
    contoh1: '高級住宅街には本物のセレブが多く住んでいる。\n(Di kawasan perumahan mewah, banyak ditinggali oleh orang kaya raya kelas atas yang asli.)',
    contoh2: '高級外車を何台も所有する彼女はまさにセレブだ。\n(Dia yang memiliki beberapa mobil mewah impor benar-benar seorang jetset.)'
  },

  // ==========================================================
  // KELOMPOK 2: 発音や意味に注意 (Perhatikan Lafal dan Maknanya)
  // ==========================================================
  {
    id: 'm7h1_15',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'マニア',
    furigana: 'マニア',
    arti: 'Penggemar berat / Penggila hobi / Mania',
    penjelasan: 'Merujuk pada seseorang yang memiliki hasrat, ketertarikan, dan pengetahuan yang sangat dalam serta mendetail terhadap satu bidang hobi spesifik (contoh: 切手マニア = kolektor prangko, 鉄道マニア = pencinta kereta api). Tingkat kegilaan mereka melampaui penggemar biasa.',
    contoh1: '兄は全国の電車を撮影して回る鉄道マニアだ。\n(Kakak laki-laki saya adalah seorang pencinta kereta api berat yang berkeliling memotret kereta.)',
    contoh2: 'この店にはカメラマニアが喜ぶ古くて珍しいレンズがある。\n(Di toko ini terdapat lensa tua dan langka yang akan membuat para penggila kamera senang.)'
  },
  {
    id: 'm7h1_16',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ドリル',
    furigana: 'ドリル',
    arti: 'Buku latihan soal / Alat bor mekanik (Drill)',
    penjelasan: 'Memiliki dua arti yang sangat berbeda tergantung konteks kalimat. Pertama, alat perkakas bertiras tajam untuk melubangi dinding atau benda keras (電気ドリル = bor listrik). Kedua, buku metode pembelajaran berisi latihan soal yang dikerjakan secara berulang-ulang demi mengasah keahlian (学習ドリル = buku latihan soal).',
    contoh1: '漢字のドリルを毎日３ページずつ解く。\n(Menyelesaikan buku latihan soal kanji sebanyak 3 halaman setiap hari.)',
    contoh2: '壁に穴を開けるために電気ドリルを借りた。\n(Saya meminjam bor listrik untuk membuat lubang di dinding.)'
  },
  {
    id: 'm7h1_17',
    minggu: '7',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'カンパする',
    furigana: 'カンパする',
    arti: 'Patungan / Menyumbang dana / Menggalang dana sukarela',
    penjelasan: 'Berasal dari kata bahasa Rusia "kampaniya" (Campaign). Aktivitas mengumpulkan kontribusi berupa uang secara sukarela dari sekelompok orang demi mendanai suatu kegiatan bersama, menyokong gerakan sosial, atau membantu sesama.',
    contoh1: 'サークルの合宿費用を一人500円ずつカンパする。\n(Patungan mengumpulkan uang masing-masing 500 yen untuk biaya kamp pelatihan klub.)',
    contoh2: '被災地を支援するため、みんなで資金をカンパした。\n(Kami semua menyumbangkan dana sukarela demi mendukung wilayah yang tertimpa bencana.)'
  },
  {
    id: 'm7h1_18',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ネック',
    furigana: 'ネック',
    arti: 'Hambatan utama / Kendala terbesar / Leher baju (Neck)',
    penjelasan: 'Berasal dari kata "Neck" (leher). Secara kiasan, digunakan untuk menggambarkan titik tersempit atau masalah paling krusial yang menghentikan dan menghambat kelancaran seluruh proyek atau rencana (paling sering dipadukan sebagai ボトルネック / bottleneck). Bisa juga merujuk pada jenis kerah pakaian (ハイネック = kerah tinggi).',
    contoh1: '予算がネックになって、この計画は進まない。\n(Masalah anggaran menjadi hambatan utama, sehingga rencana ini tidak bisa berjalan.)',
    contoh2: '開発において人手不足が最大のネックになっている。\n(Kekurangan tenaga kerja menjadi kendala terbesar dalam proses pengembangan.)'
  },

  // ==========================================================
  // KELOMPOK 3: GAMBAR 2 - Kosakata Katakana Tambahan Masa Kini
  // ==========================================================
  {
    id: 'm7h1_19',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'レントゲンを撮る',
    furigana: 'レントゲンをとる',
    arti: 'Melakukan foto rontgen / Sinar-X',
    penjelasan: 'Merujuk pada pengambilan foto bagian dalam tubuh menggunakan Sinar-X (X-ray) di rumah sakit untuk mendeteksi struktur tulang atau kondisi organ internal. Kata ini diambil dari nama penemu Sinar-X, Wilhelm Röntgen.',
    contoh1: '転んで足を強く打ったので、病院でレントゲンを撮った。\n(Karena terjatuh dan kaki terbentur keras, saya melakukan foto rontgen di rumah sakit.)',
    contoh2: 'レントゲンの結果、骨には異常がないことが分かった。\n(Berdasarkan hasil foto rontgen, dipastikan tidak ada kelainan pada tulang.)'
  },
  {
    id: 'm7h1_20',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ピンセットでつまむ',
    furigana: 'ピンセットでつまむ',
    arti: 'Menjepit dengan pinset',
    penjelasan: 'Berasal dari bahasa Belanda "pincet". Menggunakan alat penjepit kecil logam untuk mengambil, memegang, atau memindahkan objek yang sangat kecil, rumit, halus, atau steril yang tidak bisa ditangani secara akurat oleh jemari tangan telanjang.',
    contoh1: '指にトゲが刺さったので、ピンセットで慎重につまんで抜いた。\n(Karena jari tertusuk duri, saya menjepitnya dengan hati-hati menggunakan pinset lalu mencabutnya.)',
    contoh2: 'プラモデルの細かいパーツをピンセットで組み立てる。\n(Merakit bagian-bagian kecil model plastik dengan menggunakan alat jepit pinset.)'
  },
  {
    id: 'm7h1_21',
    minggu: '7',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'シックなデザイン',
    furigana: 'シックなデザイン',
    arti: 'Desain yang anggun / Elegan / Berkelas (Chic)',
    penjelasan: 'Kata serapan dari bahasa Prancis "chic". Menggambarkan penampilan, gaya busana, dekorasi rumah, atau barang yang berpenampilan dewasa, bernuansa warna tenang (tidak norak/mencolok), namun memancarkan cita rasa keindahan yang sangat tinggi, modis, dan elegan.',
    contoh1: '彼女は黒を基調としたシックなデザインのドレスを着ていた。\n(Dia mengenakan gaun dengan desain elegan nan anggun yang didominasi warna hitam.)',
    contoh2: 'このカフェの内装はシックで落ち着いた雰囲気がある。\n(Interior kafe ini memiliki atmosfer yang tenang, berkelas, dan elegan.)'
  },
  {
    id: 'm7h1_22',
    minggu: '7',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '時間にルーズな人',
    furigana: 'じかんにルーズなひと',
    arti: 'Orang yang tidak disiplin waktu / Karet / Ceroboh',
    penjelasan: 'Kata sifat golongan *na-adjective* yang diserap dari bahasa Inggris "loose" (longgar). Di Jepang, kata ini diaplikasikan untuk mengkritik perilaku seseorang yang sangat santai, mengabaikan aturan, lalai, atau ceroboh (paling sering dipadukan pada urutan waktu janji temu maupun pengelolaan uang).',
    contoh1: '彼は時間にルーズな人だから、今日もきっと遅刻するだろう。\n(Karena dia adalah orang yang tidak disiplin waktu, hari ini pun pasti dia akan terlambat.)',
    contoh2: '約束やお金にルーズな人とは、一緒に仕事をしない方がいい。\n(Lebih baik jangan bekerja sama dengan orang yang ceroboh dalam urusan janji maupun uang.)'
  },
  {
    id: 'm7h1_23',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ガーゼを当てる',
    furigana: 'ガーゼをあてる',
    arti: 'Menempelkan kain kasa pada luka',
    penjelasan: 'Diserap dari bahasa Jerman "Gaze". Sejenis kain tenun katun putih berpori longgar, sangat lembut, dan steril yang dipakai dalam dunia kedokteran untuk menutupi permukaan luka agar terhindar dari kotoran atau menyerap sekresi cairan darah.',
    contoh1: '傷口にガーゼを当てて、その上から包帯を巻いた。\n(Menempelkan kain kasa pada luka, lalu membalutnya dengan perban dari atas.)',
    contoh2: '赤ちゃんの肌は非常にデリケートなので、柔らかいガーゼで拭いてあげる。\n(Karena kulit bayi sangat sensitif, seka dengan menggunakan kain kasa yang lembut.)'
  },
  {
    id: 'm7h1_24',
    minggu: '7',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: '話がスムーズに進む',
    furigana: 'はなしがスムーズにすすむ',
    arti: 'Pembicaraan berlangsung lancar / Mulus (Smooth)',
    penjelasan: 'Diserap dari kata "Smooth". Digunakan sebagai kata keterangan (ditambah partikel に) untuk menyatakan bahwa jalannya diskusi, eksekusi rencana, proses birokrasi, atau alur kerja mengalir dengan sangat baik tanpa menghadapi hambatan, kendala berat, atau gesekan emosional.',
    contoh1: '念入りな準備のおかげで、話し合いがスムーズに進んだ。\n(Berkat persiapan yang matang, diskusi/pembicaraan dapat berjalan dengan sangat lancar.)',
    contoh2: '新しいシステムへの移行手続きがスムーズに行われた。\n(Prosedur transisi menuju sistem yang baru telah terlaksana dengan mulus.)'
  },
  {
    id: 'm7h1_25',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'アフターサービス',
    furigana: 'アフターサービス',
    arti: 'Layanan purna jual (After-sales service)',
    penjelasan: 'Istilah gabungan bahasa Inggris khas Jepang (*Wasei-eigo*). Merujuk pada penyediaan fasilitas perawatan berkala, garansi perbaikan gratis, atau bantuan kendala teknis yang disiapkan produsen kepada konsumen setelah barang terjual (memiliki arti serupa dengan アフターケア / aftercare).',
    contoh1: 'あの電気店はアフターサービスがいいので、安心して家電を買える。\n(Karena toko elektronik itu memiliki layanan purna jual yang bagus, kita bisa membeli produk elektronik dengan tenang.)',
    contoh2: '購入したパソコンが壊れたが、アフターサービスの保証期間内だったので無料で直った。\n(Komputer yang saya beli rusak, tetapi karena masih dalam masa garansi layanan purna jual, perbaikannya gratis.)'
  },
  {
    id: 'm7h1_26',
    minggu: '7',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '後継者にバトンタッチする',
    furigana: 'こうけいしゃにバトンタッチする',
    arti: 'Menyerahkan tongkat estafet kepemimpinan pada penerus',
    penjelasan: 'Secara harfiah diambil dari gerakan mengoper tongkat pada lari estafet. Secara kiasan yang sangat luas, bermakna mengalihkan seluruh wewenang, jabatan tinggi, tanggung jawab pekerjaan, atau peran sosial kepada generasi atau orang berikutnya secara resmi.',
    contoh1: '社長は若い後継者にバトンタッチして引退することにした。\n(Direktur memutuskan untuk pensiun setelah menyerahkan tongkat estafet kepemimpinan kepada penerus yang masih muda.)',
    contoh2: '定時になったので、夜勤のスタッフに業務をバトンタッチする。\n(Karena sudah jam pulang, saya menyerahkan kelanjutan tugas pekerjaan kepada staf sif malam.)'
  },
  {
    id: 'm7h1_27',
    minggu: '7',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'テストでカンニングする',
    furigana: 'テストでカンニングする',
    arti: 'Mencontek / Berbuat curang saat ujian',
    penjelasan: 'Kata serapan *Wasei-eigo* dari kata bahasa Inggris *cunning* (licik). Namun di Jepang, maknanya menyempit secara spesifik untuk perbuatan tidak terpuji berupa kecurangan saat ujian akademis berlangsung (seperti melirik lembar jawaban orang lain atau membawa catatan tersembunyi).',
    contoh1: 'テストでカンニングする行為は、見つかれば即座に失格となる。\n(Tindakan mencontek dalam ujian akan langsung berakibat pada diskualifikasi seketika jika ketahuan.)',
    contoh2: 'カンニングが試験官に見つかって、彼は停学処分を下された。\n(Ketahuan mencontek oleh pengawas ujian, dia akhirnya dijatuhi hukuman skors sekolah.)'
  },
  {
    id: 'm7h1_28',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ホースで庭に水をまく',
    furigana: 'ホースでにわにみずをまく',
    arti: 'Menyiram air di halaman menggunakan selang',
    penjelasan: 'Diserap dari bahasa Belanda "hoos" (atau bahasa Inggris *hose*). Tabung panjang pipa fleksibel elastis terbuat dari karet atau plastik elastis yang dipakai untuk mengalirkan air ke tempat yang jauh dari keran, umum digunakan untuk membersihkan kendaraan atau menyiram tanaman.',
    contoh1: '長いホースを使って、庭の隅々まで水をまく。\n(Menggunakan selang air yang panjang untuk menyiram hingga ke seluruh pelosok halaman rumah.)',
    contoh2: 'ホースに小さな穴が開いて、途中で水が漏れてしまっている。\n(Selang airnya bocor karena berlubang kecil, sehingga airnya terbuang di tengah jalan.)'
  }
];

window.vocabData.push(...kosakata_m7h1);