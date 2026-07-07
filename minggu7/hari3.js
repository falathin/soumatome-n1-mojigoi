// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m7h3 = [
  // --- GAMBAR 1 (BAGIAN ATAS / KOTAK) ---
  {
    id: 'm7h3_1',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'オイルショック',
    furigana: 'オイルショック',
    arti: 'Krisis Minyak Bumi (Oil Shock)',
    penjelasan: 'Berasal dari bahasa Inggris "oil shock". Merujuk pada krisis ekonomi global yang disebabkan oleh kelangkaan mendadak dan lonjakan harga minyak mentah di pasar internasional.',
    contoh1: '1973年に世界的なオイルショックが起きた。\n(Terjadi krisis minyak dunia pada tahun 1973.)',
    contoh2: 'オイルショックの影響で、トイレットペーパーなどの物資が品薄になった。\n(Akibat pengaruh krisis minyak, barang kebutuhan seperti tisu toilet menjadi langka.)'
  },
  {
    id: 'm7h3_2',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'オーダーメイド',
    furigana: 'オーダーメイド',
    arti: 'Dibuat Sesuai Pesanan (Custom-made)',
    penjelasan: 'Berasal dari istilah "order-made". Digunakan untuk barang-barang (terutama pakaian, jas, atau sepatu) yang diproduksi secara khusus sesuai dengan ukuran, desain, dan permintaan perorangan pembeli.',
    contoh1: '彼はオーダーメイドの高級なスーツを着ている。\n(Dia mengenakan setelan jas mewah yang dibuat khusus sesuai pesanan.)',
    contoh2: '自分だけのオーダーメイドの財布を職人に注文した。\n(Saya memesan dompet custom-made khusus untuk diri saya sendiri kepada pengrajin.)'
  },
  {
    id: 'm7h3_3',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'グレードアップ（する）',
    furigana: 'グレードアップ（する）',
    arti: 'Meningkatkan Mutu / Upgrade Kualitas',
    penjelasan: 'Berasal dari kata "grade up". Bermakna meningkatkan kualitas, kelas, mutu barang, atau beralih ke barang yang lebih mewah dan mahal daripada versi sebelumnya.',
    contoh1: '旅行会社がホテルの部屋をグレードアップしてくれた。\n(Agen perjalanan meningkatkan kelas [meng-upgrade] kamar hotel kami.)',
    contoh2: 'パソコンのパーツを交換して、性能をグレードアップする。\n(Mengganti komponen komputer untuk meningkatkan mutu/performa sistem.)'
  },
  {
    id: 'm7h3_4',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ペアルック',
    furigana: 'ペアルック',
    arti: 'Pakaian Kembaran Sepasang (Pair Look)',
    penjelasan: 'Berasal dari istilah Jepang-Inggris (wasei-eigo) "pair look". Merujuk pada tren sepasang kekasih, suami istri, atau teman dekat yang sengaja mengenakan baju dengan motif, warna, atau desain yang persis sama saat bepergian bersama.',
    contoh1: 'あの若いカップルはペアルックでデートをしている。\n(Pasangan muda itu sedang berkencan dengan mengenakan pakaian kembaran.)',
    contoh2: '周りの目が恥ずかしいので、ペアルックはしたくない。\n(Karena malu dilihat sekitar, saya tidak ingin memakai pakaian kembaran.)'
  },
  {
    id: 'm7h3_5',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ベッドタウン',
    furigana: 'ベッドタウン',
    arti: 'Kota Komuter / Kota Satelit (Bed Town)',
    penjelasan: 'Berasal dari kata "bed town" (commuter town). Merujuk pada daerah pinggiran kota atau kota satelit yang berfungsi sebagai kawasan pemukiman. Penduduknya bekerja di kota besar pada siang hari dan hanya pulang ke tempat tersebut untuk tidur.',
    contoh1: 'この地域は大きな都市のベッドタウンとして発展した。\n(Daerah ini berkembang sebagai kota satelit/komuter bagi kota besar.)',
    contoh2: 'ベッドタウンは昼間、住民が仕事に出かけるため静かになる。\n(Kota komuter menjadi sangat sepi di siang hari karena penduduknya pergi bekerja.)'
  },
  {
    id: 'm7h3_6',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'サラ金',
    furigana: 'サラきん',
    arti: 'Rentenir / Lembaga Keuangan Dana Cepat (Loan Shark)',
    penjelasan: 'Singkatan dari "Salaryman Kinyu". Merujuk pada perusahaan pembiayaan konsumen swasta yang meminjamkan uang tunai tanpa jaminan secara cepat dengan bunga yang sangat tinggi (rentenir/pinjol ilegal).',
    contoh1: 'サラ金からお金を借りると、利息が高くて大変なことになる。\n(Jika meminjam uang dari rentenir, bunganya tinggi dan akan menjadi masalah besar.)',
    contoh2: '彼はサラ金の返済に追われて、生活に困窮している。\n(Dia dikejar-kejar oleh pelunasan utang rentenir sehingga kesulitan hidup.)'
  },
  {
    id: 'm7h3_7',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ユニットバス',
    furigana: 'ユニットバス',
    arti: 'Kamar Mandi Modular / Kamar Mandi Prefabrikasi',
    penjelasan: 'Berasal dari kata "modular bath" atau "unit bath". Kamar mandi satu paket praktis yang dinding, lantai, bak mandi (bathtub), wastafel, bahkan toiletnya sudah dicetak menyatu di pabrik dan tinggal dipasang di apartemen.',
    contoh1: '日本の一人暮らし向けアパートはユニットバスが一般的だ。\n(Apartemen untuk orang yang tinggal sendiri di Jepang umumnya menggunakan kamar mandi modular.)',
    contoh2: 'ユニットバスは壁と床が防水なので、掃除が一度にできて楽だ。\n(Kamar mandi modular dinding dan lantainya tahan air, jadi mudah dibersihkan sekaligus.)'
  },
  {
    id: 'm7h3_8',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ゴールデンタイム',
    furigana: 'ゴールデンタイム',
    arti: 'Waktu Utama / Jam Tayang Utama (Prime Time)',
    penjelasan: 'Berasal dari kata "golden time". Merujuk pada waktu utama siaran televisi atau radio (biasanya antara jam 7 malam sampai jam 10 malam) di mana jumlah penonton berada pada tingkat tertinggi dalam sehari.',
    contoh1: 'ゴールデンタイムには各局が人気のバラエティ番組を放送する。\n(Pada jam tayang utama, setiap stasiun menyiarkan acara varietas yang populer.)',
    contoh2: 'ゴールデンタイムのテレビCMは広告料金が非常に高い。\n(Biaya iklan televisi pada waktu prime time sangatlah mahal.)'
  },
  {
    id: 'm7h3_9',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'バージョンアップ（する）',
    furigana: 'バージョンアップ（する）',
    arti: 'Memperbarui Versi / Meng-upgrade Sistem',
    penjelasan: 'Berasal dari kata "version up". Digunakan untuk menyatakan tindakan memperbarui perangkat lunak (software), aplikasi, atau sistem ke versi yang lebih baru guna menambah fungsi atau memperbaiki kesalahan.',
    contoh1: 'スマートフォンのOSを最新のものにバージョンアップする。\n(Memperbarui versi OS smartphone ke sistem yang paling baru.)',
    contoh2: 'アプリがバージョンアップしてから、動作が軽くなった。\n(Semenjak aplikasinya diperbarui versinya, jalannya aplikasi menjadi lebih lancar.)'
  },
  {
    id: 'm7h3_10',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ヘルスメーター',
    furigana: 'ヘルスメーター',
    arti: 'Timbangan Badan Rumah Tangga (Bathroom Scale)',
    penjelasan: 'Berasal dari istilah bahasa Jerman/Inggris buatan Jepang "health meter". Alat ukur yang diletakkan di dalam rumah (biasanya di dekat kamar mandi) untuk menimbang berat badan guna memantau kesehatan mandiri.',
    contoh1: 'お風呂上がりに毎日ヘルスメーターに乗って体重を測る。\n(Setiap selesai mandi, saya selalu naik ke atas timbangan badan untuk mengukur berat badan.)',
    contoh2: '新しいデジタル式のヘルスメーターは、体脂肪率も計算できる。\n(Timbangan badan digital yang baru dapat menghitung persentase lemak tubuh juga.)'
  },
  {
    id: 'm7h3_11',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ソーラーシステム',
    furigana: 'ソーラーシステム',
    arti: 'Sistem Tenaga Surya / Tata Surya',
    penjelasan: 'Berasal dari kata "solar system". Di Jepang, selain mengacu pada tata surya dalam astronomi, istilah ini sangat sering digunakan dalam kehidupan sehari-hari untuk menyebut instalasi panel penyerap energi matahari di atap rumah untuk listrik atau pemanas air.',
    contoh1: '電気代を節約するために、家の屋根にソーラーシステムを設置した。\n(Untuk menghemat biaya listrik, saya memasang sistem tenaga surya di atap rumah.)',
    contoh2: 'ソーラーシステムのおかげで、災害時にも電気が使えて安心だ。\n(Berkat sistem tenaga surya, saya tenang karena listrik tetap bisa digunakan saat bencana.)'
  },
  {
    id: 'm7h3_12',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'リップサービス（する）',
    furigana: 'リップサービス（する）',
    arti: 'Basa-basi / Pujian Manis di Bibir (Lip Service)',
    penjelasan: 'Berasal dari istilah "lip service". Tindakan memberikan kata-kata pujian atau janji manis yang menyenangkan hati orang lain, tetapi hanya sebatas ucapan di bibir tanpa ada niat nyata atau perasaan tulus di dalamnya.',
    contoh1: '政治家のあの発言は、ただのリップサービスにすぎない。\n(Ucapan politikus itu hanyalah sekadar basa-basi/manis di bibir saja.)',
    contoh2: '彼は人に好かれるために、いつもリップサービスをしている。\n(Dia selalu melemparkan pujian basa-basi agar disukai oleh orang-orang.)'
  },
  {
    id: 'm7h3_13',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'アダルトサイト',
    furigana: 'アダルトサイト',
    arti: 'Situs Dewasa / Situs Pornografi (Adult Site)',
    penjelasan: 'Berasal dari kata "adult site". Merujuk pada situs web di internet yang memuat konten khusus untuk orang dewasa atau materi pornografi yang dilarang diakses oleh anak di bawah umur.',
    contoh1: '不審なアダルトサイトにアクセスすると高額な請求をされる詐欺がある。\n(Ada penipuan berupa tagihan fiktif berbiaya mahal jika mengakses situs dewasa yang mencurigakan.)',
    contoh2: '子ども向けの端末には、アダルトサイトの閲覧を制限する設定をする。\n(Pada gawai anak-anak, dipasang pengaturan untuk membatasi akses ke situs dewasa.)'
  },

  // --- GAMBAR 1 (BAGIAN BAWAH / DAFTAR CONTOH KALIMAT) ---
  {
    id: 'm7h3_14',
    minggu: '7',
    hari: '3',
    kategori: 'kata sifat',
    kanji: 'ワンパターン（な）',
    furigana: 'ワンパターン（な）',
    arti: 'Monoton / Polanya Itu-itu Saja / Membosankan',
    penjelasan: 'Berasal dari istilah "one pattern". Menggambarkan sifat, perilaku, pemikiran, atau tindakan yang tidak memiliki variasi atau perubahan sama sekali sehingga terasa membosankan dan klise.',
    contoh1: '彼はいつも同じ話ばかりするワンパターンな人間だ。\n(Dia adalah orang yang monoton/membosankan karena selalu membicarakan hal yang sama saja.)',
    contoh2: 'このドラマの展開はワンパターンで面白みがない。\n(Alur cerita drama ini polanya itu-itu saja dan tidak menarik.)'
  },
  {
    id: 'm7h3_15',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'フリーター',
    furigana: 'フリーター',
    arti: 'Pekerja Lepas / Pekerja Paruh Waktu Profesional',
    penjelasan: 'Gabungan dari kata "free" (bahasa Inggris) dan "arbeiter" (bahasa Jerman). Istilah sosial di Jepang untuk merujuk pada orang usia produktif (biasanya 15-34 tahun) yang memilih bekerja paruh waktu atau serabutan, bukan menjadi karyawan tetap perusahaan.',
    contoh1: '彼は正社員ではなく、アルバイトで生計を立てているフリーターです。\n(Dia bukan karyawan tetap, melainkan seorang pekerja lepas yang menyambung hidup dengan kerja paruh waktu.)',
    contoh2: 'フリーターの期間が長いと、将来の経済面が不安定になりやすい。\n(Jika terlalu lama menjadi pekerja lepas, kondisi keuangan di masa depan cenderung tidak stabil.)'
  },
  {
    id: 'm7h3_16',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'Ｕターン（する）',
    furigana: 'Ｕターン（する）',
    arti: 'Putar Balik Kendaraan / Kembali ke Kampung Halaman',
    penjelasan: 'Berasal dari kata "U-turn". Memiliki dua arti: pertama, memutar balik arah kendaraan 180 derajat. Kedua (U-turn Genshou), fenomena sosial di mana orang yang merantau ke kota besar memutuskan untuk kembali dan menetap selamanya di kampung halaman asal mereka.',
    contoh1: '道を間違えて行き過ぎてしまったので、車をＵターンさせる。\n(Karena salah jalan dan terlewat jauh, saya memutar balik mobilnya.)',
    contoh2: '都会に出た人が故郷に戻る「Ｕターン現象」が近年増えている。\n(Fenomena orang merantau kembali menetap di kampung halaman [U-turn] belakangan ini meningkat.)'
  },
  {
    id: 'm7h3_17',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'プラスアルファ',
    furigana: 'プラスアルファ',
    arti: 'Nilai Tambah / Sedikit Bonus Ekstra (Plus Alpha)',
    penjelasan: 'Berasal dari istilah ciptaan Jepang "plus alpha" (+α). Mengindikasikan penambahan sejumlah nilai, keuntungan, bonus, atau performa kecil di atas jumlah dasar yang sudah ditentukan.',
    contoh1: '今月の報酬は１０万円プラスアルファになるだろう。\n(Imbalan kerja bulan ini tampaknya akan menjadi 100.000 yen ditambah sedikit bonus tambahan.)',
    contoh2: '合格するためには、基礎知識にプラスアルファの応用力が必要だ。\n(Untuk lulus, diperlukan kemampuan aplikasi ekstra sebagai nilai tambah di luar pengetahuan dasar.)'
  },
  {
    id: 'm7h3_18',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ペーパードライバー',
    furigana: 'ペーパードライバー',
    arti: 'Pengemudi Di Atas Kertas (Punya SIM tapi Tidak Pernah Menyetir)',
    penjelasan: 'Berasal dari kata "paper driver". Sebutan khusus bagi seseorang yang sah memiliki Surat Izin Mengemudi (SIM), tetapi dalam kehidupan sehari-hari hampir tidak pernah atau takut untuk menyetir mobil yang sesungguhnya.',
    contoh1: '私は免許を取ってから一度も運転していないペーパードライバーです。\n(Saya adalah pengemudi di atas kertas yang tidak pernah menyetir sekali pun sejak mendapatkan SIM.)',
    contoh2: 'ペーパードライバー向けの運転練習講習を受けることにした。\n(Saya memutuskan untuk mengambil kelas latihan menyetir khusus bagi para paper driver.)'
  },
  {
    id: 'm7h3_19',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'スリーサイズ',
    furigana: 'スリーサイズ',
    arti: 'Tiga Ukuran Tubuh (Lingkar Dada, Pinggang, Pinggul)',
    penjelasan: 'Berasal dari kata "three sizes". Merujuk kepada kombinasi tiga ukuran dimensi lingkar badan wanita yang digunakan dalam industri pakaian atau model, yaitu lingkar dada (bust), lingkar pinggang (waist), dan lingkar pinggul (hip).',
    contoh1: '衣装のサイズを合わせるために、モデルのスリーサイズを測る。\n(Mengukur tiga ukuran badan model untuk mencocokkan ukuran pakaiannya.)',
    contoh2: 'スリーサイズとは、バスト・ウエスト・ヒップの３つの部分の寸法のことだ。\n(Yang dimaksud dengan three sizes adalah ukuran dimensi dari tiga bagian tubuh: dada, pinggang, dan pinggul.)'
  },
  {
    id: 'm7h3_20',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'サイドビジネス',
    furigana: 'サイドビジネス',
    arti: 'Bisnis Sampingan / Pekerjaan Sampingan (Side Business)',
    penjelasan: 'Berasal dari istilah "side business". Memiliki arti yang sama dengan "fukugyou" (副業), yaitu usaha atau pekerjaan tambahan yang dijalankan seseorang di luar pekerjaan utama mereka untuk mencari penghasilan tambahan.',
    contoh1: 'その有名俳優はサイドビジネス（＝副業）でレストランを経営している。\n(Aktor terkenal itu mengelola sebuah restoran sebagai bisnis sampingannya.)',
    contoh2: '会社の給料だけでは生活が厳しいため、ネットでサイドビジネスを始めた。\n(Karena hidup sulit jika hanya mengandalkan gaji kantor, saya memulai bisnis sampingan lewat internet.)'
  },
  {
    id: 'm7h3_21',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'プラス / マイナス',
    furigana: 'プラス / マイナス',
    arti: 'Positif / Negatif (Keuntungan / Kerugian)',
    penjelasan: 'Berasal dari kata "plus" dan "minus". Dalam konteks pola pikir berarti cara pandang positif atau negatif. Dalam konteks finansial, digunakan untuk menyatakan surplus (keuntungan) atau defisit (kerugian/minus).',
    contoh1: '困難な状況に直面しても、物事をプラスに考えることが大切だ。\n(Penting untuk memikirkan segala hal secara positif meskipun dihadapkan pada situasi sulit.)',
    contoh2: '今月は出費が多くて収支がマイナスになり、マイナス材料ばかりだ。\n(Bulan ini pengeluaran banyak sehingga neraca keuangan menjadi minus, isinya faktor merugikan semua.)'
  },
  {
    id: 'm7h3_22',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ゴールイン（する）',
    furigana: 'ゴールイン（する）',
    arti: 'Mencapai Garis Finish / Menikah (Mencapai Pelaminan)',
    penjelasan: 'Berasal dari kata "goal in". Dalam olahraga, artinya adalah melewati garis finish. Namun dalam bahasa kiasan harian Jepang, kata ini sangat sering dipakai untuk menyatakan pasangan kekasih yang akhirnya sukses menuju ke jenjang pernikahan setelah sekian lama berpacaran.',
    contoh1: 'マラソンの先頭ランナーが、１着でゴールインした。\n(Pelari terdepan maraton sukses mencapai garis finish di posisi pertama.)',
    contoh2: '長年付き合ってきたそのカップルは、来春ついにゴールインする。\n(Pasangan yang telah lama berpacaran itu akhirnya akan menikah pada musim semi mendatang.)'
  },
  {
    id: 'm7h3_23',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: '満タン',
    furigana: 'まんタン',
    arti: 'Tangki Penuh (Full Tank)',
    penjelasan: 'Gabungan dari kanji "man" (penuh) dan kata serapan "tank" (tangki). Berarti mengisi wadah, cairan, atau bahan bakar kendaraan ke dalam tangkinya sampai batas maksimal atau benar-benar penuh.',
    contoh1: '長距離ドライブに出かける前に、ガソリンを満タンにする。\n(Sebelum pergi berkendara jarak jauh, saya mengisi bensin sampai tangki penuh.)',
    contoh2: 'ストーブ用の灯油タンクを満タンに補充しておいた。\n(Saya sudah mengisi ulang tangki minyak tanah untuk pemanas ruangan sampai penuh.)'
  },

  // --- GAMBAR 2 ---
  {
    id: 'm7h3_24',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ダブる',
    furigana: 'ダブる',
    arti: 'Tumpang Tindih / Ganda / Mengulang Tahun Kelas',
    penjelasan: 'Kata kerja yang dibuat dari kata dasar "double". Digunakan saat dua hal terlihat bertumpuk ganda, jadwal yang bentrok (overlapping), atau konteks akademis ketika seorang siswa tidak lulus tingkat dan terpaksa mengulang kelas yang sama (tinggal kelas).',
    contoh1: '目が疲れているせいか、印刷された文字がダブって（＝重なって）見える。\n(Mungkin karena mata saya lelah, huruf yang tercetak terlihat tumpang tindih/ganda.)',
    contoh2: '彼は大学の単位を落としてしまい、１年ダブる（＝留年する）ことになった。\n(Dia kekurangan satuan kredit semester [SKS] di kampus, sehingga terpaksa mengulang tinggal kelas satu tahun.)'
  },
  {
    id: 'm7h3_25',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'キレる',
    furigana: 'キレる',
    arti: 'Mengamuk / Meledak Marah / Lepas Kendali',
    penjelasan: 'Kata kerja slang yang berasal dari kata "kireru" (putus). Menggambarkan kondisi psikologis seseorang yang tali kesabarannya mendadak putus akibat tidak tahan lagi, sehingga ia menjadi sangat emosional, mengamuk, dan marah besar secara tiba-tiba.',
    contoh1: '彼は普段優しいが、突然キレて、周りに怒り出したので驚いた。\n(Dia biasanya baik, tapi saya kaget karena dia tiba-tiba mengamuk lepas kendali dan memarahi sekitar.)',
    contoh2: '理不尽な理由で何度も責められ、ついにキレてしまった。\n(Karena disalahkan berkali-kali secara tidak logis, akhirnya emosi saya meledak juga.)'
  },
  {
    id: 'm7h3_26',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'サボる',
    furigana: 'サボる',
    arti: 'Membolos / Mangkir / Malas-malasan (Sabotage)',
    penjelasan: 'Kata kerja buatan yang diserap dari bahasa Prancis "sabotage". Bermakna sengaja tidak menghadiri sekolah, membolos kerja, atau bermalas-malasan meninggalkan tugas tanggung jawabnya tanpa alasan yang sah atau jelas.',
    contoh1: '仮病を使って会社や仕事をサボるのは良くない行為だ。\n(Memakai alasan sakit palsu untuk mangkir/membolos dari pekerjaan adalah tindakan yang tidak baik.)',
    contoh2: '授業をサボって友達とカラオケに行ってしまった。\n(Saya membolos jam pelajaran sekolah lalu pergi ke karaoke bersama teman.)'
  },
  {
    id: 'm7h3_27',
    minggu: '7',
    hari: '3',
    kategori: 'kata sifat',
    kanji: 'ヤバい',
    furigana: 'ヤバい',
    arti: 'Gawat / Bahaya / Bermasalah Besar',
    penjelasan: 'Kata sifat kasual (slang) yang sangat populer. Makna dasarnya adalah situasi yang berbahaya, berisiko tinggi, atau menimbulkan masalah besar (困る/まずい). Namun dalam percakapan anak muda saat ini, kata ini juga bisa bermakna positif ekstrem seperti "luar biasa keren" atau "enak sekali".',
    contoh1: '絶対に人に知られてはいけないヤバい仕事（＝危ない仕事）に関わってはいけない。\n(Jangan pernah terlibat dalam pekerjaan gawat/berbahaya yang sama sekali tidak boleh diketahui orang.)',
    contoh2: '明日の試験の日に時間に遅れると非常にヤバい（＝まずい、困る）。\n(Akan gawat/bermasalah besar jika saya datang terlambat pada hari ujian besok.)'
  }
];

window.vocabData.push(...kosakata_m7h3);