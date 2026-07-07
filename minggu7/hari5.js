// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m7h5 = [
  // --- GAMBAR 1 (image_682ae4.jpg) ---
  {
    id: 'm7h5_1',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '取り込む',
    furigana: 'とりこむ',
    arti: 'Memasukkan / Mengambil (Jemuran) / Mengimpor (Data)',
    penjelasan: 'Memiliki dua arti utama: secara fisik berarti mengambil pakaian atau jemuran yang dijemur di luar rumah untuk dibawa masuk ke dalam. Secara digital/teknologi berarti memasukkan atau memindai data berupa gambar maupun dokumen dari perangkat luar ke dalam komputer.',
    contoh1: '雨が降りそうなので、急いで洗濯物を取り込む。\n(Karena sepertinya akan hujan, saya segera mengambil/memasukkan jemuran.)',
    contoh2: 'デジカメからパソコンに画像を取り込む。\n(Memasukkan/mengimpor gambar dari kamera digital ke komputer.)'
  },
  {
    id: 'm7h5_2',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '溶け込む',
    furigana: 'とけこむ',
    arti: 'Berbaur / Menyatu / Menyesuaikan Diri',
    penjelasan: 'Menggambarkan kondisi di mana seseorang dapat menyesuaikan diri dengan sangat harmonis, akrab, dan menjadi bagian utuh dari lingkungan sosial, ruang kelas, atau tempat kerja baru yang sebelumnya terasa asing.',
    contoh1: '彼女は新しい職場にすぐ溶け込むことができた。\n(Dia bisa segera berbaur/menyesuaikan diri di tempat kerja yang baru.)',
    contoh2: '日本の文化や生活習慣に溶け込むのは時間がかかる。\n(Menyatu dan menyesuaikan diri dengan budaya serta kebiasaan hidup Jepang membutuhkan waktu.)'
  },
  {
    id: 'm7h5_3',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '組み込む',
    furigana: 'くみこむ',
    arti: 'Memasukkan / Menyertakan / Mengintegrasikan',
    penjelasan: 'Tindakan menyisipkan atau memasukkan suatu elemen, rencana, fitur, maupun pos pengeluaran baru ke dalam suatu struktur, jadwal, sistem, atau anggaran belanja yang telah disusun sebelumnya.',
    contoh1: '今回の旅行の計画に、京都観光を組み込む。\n(Memasukkan/menyertakan wisata Kyoto ke dalam rencana perjalanan kali ini.)',
    contoh2: '新幹線の開発費用を来年度の予算に組み込む。\n(Memasukkan biaya pengembangan kereta cepat ke dalam anggaran tahun depan.)'
  },
  {
    id: 'm7h5_4',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '乗り込む',
    furigana: 'のりこむ',
    arti: 'Naik (Kendaraan) / Menuju Tempat Lawan dengan Berani',
    penjelasan: 'Dapat berarti menaiki kendaraan (seperti pesawat, kereta, atau kapal) dalam jumlah besar atau untuk tujuan tertentu. Arti lainnya adalah mendatangi atau mendobrak masuk ke wilayah musuh, tempat rapat, atau area target dengan sikap penuh keberanian.',
    contoh1: '出発の直前に大急ぎで飛行機に乗り込む。\n(Terburu-buru naik ke dalam pesawat tepat sebelum keberangkatan.)',
    contoh2: 'チーム全員で決戦のために敵地に乗り込む。\n(Seluruh tim menuju ke wilayah musuh dengan berani demi pertandingan penentuan.)'
  },
  {
    id: 'm7h5_5',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '踏み込む',
    furigana: 'ふみこむ',
    arti: 'Menginjak Dalam-dalam / Mencampuri Urusan Pribadi',
    penjelasan: 'Secara fisik berarti menginjakkan kaki atau pedal dengan kuat dan dalam (seperti menginjak gas mobil). Secara kiasan berarti terlibat terlalu dalam atau mencampuri urusan privasi orang lain, atau meneliti suatu masalah hingga ke akarnya.',
    contoh1: 'スピードを上げるためにアクセルを強く踏み込む。\n(Menginjak pedal gas dalam-dalam dengan kuat untuk meningkatkan kecepatan.)',
    contoh2: 'いくら親しい友人でも、他人の家庭事情に踏み込むべきではない。\n(Seakrab apa pun seorang teman, kita tidak boleh mencampuri urusan rumah tangga orang lain.)'
  },
  {
    id: 'm7h5_6',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '放り込む',
    furigana: 'ほうりこむ',
    arti: 'Melemparkan ke Dalam / Menjebloskan',
    penjelasan: 'Tindakan melemparkan atau memasukkan suatu benda ke dalam suatu wadah secara kasual atau sembarangan tanpa ditata dengan rapi. Dalam konteks hukum atau bentuk pasif, kata ini bermakna dijebloskan ke dalam penjara.',
    contoh1: '帰宅してすぐ、カバンの中に新聞を放り込む。\n(Begitu tiba di rumah, langsung melemparkan surat kabar ke dalam tas.)',
    contoh2: 'その凶悪犯はすぐに刑務所に放り込まれるだろう。\n(Penjahat kejam itu pasti akan segera dijebloskan ke dalam penjara.)'
  },
  {
    id: 'm7h5_7',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '打ち込む',
    furigana: 'うちこむ',
    arti: 'Mengetik (Input Data) / Menekuni Suatu Hal / Fokus Sepenuh Hati',
    penjelasan: 'Memiliki arti teknis yaitu memasukkan karakter, teks, atau data digital ke dalam komputer menggunakan papan ketik. Arti kiasannya yang sangat sering digunakan adalah mencurahkan seluruh fokus, energi, pikiran, dan jiwa raga untuk menekuni suatu hal (seperti pekerjaan, olahraga, atau hobi).',
    contoh1: '手元の資料を見ながら、パソコンにデータを打ち込む。\n(Memasukkan/mengetik data ke dalam komputer sambil melihat dokumen di tangan.)',
    contoh2: '彼は将来のために、毎日脇目も振らずに仕事に打ち込む。\n(Demi masa depan, setiap hari dia menekuni pekerjaan dengan fokus sepenuh hati tanpa teralih.)'
  },
  {
    id: 'm7h5_8',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '買い込む',
    furigana: 'かいこむ',
    arti: 'Memborong / Menyetok dalam Jumlah Banyak',
    penjelasan: 'Tindakan membeli barang kebutuhan, makanan, atau persediaan logistik dalam jumlah yang sangat banyak sekaligus sebagai langkah antisipasi atau persediaan stok untuk jangka waktu yang lama.',
    contoh1: '地震や災害の発生に備えて、水や缶詰を買い込む。\n(Membeli/menyetok air dan makanan kaleng dalam jumlah banyak untuk bersiap menghadapi gempa bumi atau bencana.)',
    contoh2: 'スーパーの特売日に日用品をたくさん買い込んだ。\n(Memborong banyak barang kebutuhan sehari-hari pada hari diskon khusus di supermarket.)'
  },
  {
    id: 'm7h5_9',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '引っ込む',
    furigana: 'ひっこむ',
    arti: 'Menarik Diri / Mundur / Pindah ke Tempat Sunyi',
    penjelasan: 'Berarti bergerak mundur ke area belakang agar tidak terlihat di depan umum. Kata ini juga sering dipakai untuk menggambarkan keputusan seseorang yang memilih pensiun atau menarik diri dari hiruk-pikuk kota besar demi tinggal di pedesaan yang tenang.',
    contoh1: '都会の生活に疲れて、定年後は田舎に引っ込むつもりだ。\n(Lelah dengan kehidupan kota besar, saya berniat menarik diri/pindah ke desa setelah pensiun.)',
    contoh2: '主役の挨拶が終わると、舞台の奥へと引っ込んだ。\n(Begitu salam dari pemeran utama selesai, dia langsung mundur ke bagian dalam panggung.)'
  },
  {
    id: 'm7h5_10',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '落ち込む',
    furigana: 'おちこむ',
    arti: 'Merasa Depresi (Down) / Merosot / Menurun',
    penjelasan: 'Memiliki makna psikologis berupa perasaan sedih, kecewa, atau patah semangat akibat kegagalan yang dialami. Selain itu, kata ini juga bermakna objektif untuk menunjukkan kemerosotan tajam atau penurunan pada nilai ekonomi, performa, maupun prestasi.',
    contoh1: 'テストの成績が激しく落ち込んでしまい、ショックだ。\n(Nilai ujian merosot tajam, sehingga membuat saya terkejut.)',
    contoh2: '大切な試合に負けて落ち込んでいる友人を慰める。\n(Menghibur teman yang sedang merasa sedih/down karena kalah dalam pertandingan penting.)'
  },
  {
    id: 'm7h5_11',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '持ち込む',
    furigana: 'もちこむ',
    arti: 'Membawa Masuk / Mengajukan (Keluhan atau Masalah)',
    penjelasan: 'Secara fisik berarti membawa makanan, minuman, atau barang tertentu dari luar ke dalam suatu area (misalnya area hotel, bioskop, atau pesawat). Secara abstrak berarti membawa atau mengajukan perkara, negosiasi, atau keluhan kepada pihak berwenang agar diproses.',
    contoh1: '外部からの飲食物をホテルに持ち込むことは禁止です。\n(Dilarang membawa masuk makanan dan minuman dari luar ke dalam hotel.)',
    contoh2: '不良品が見つかったので、カスタマーセンターに苦情を持ち込む。\n(Karena ditemukan barang cacat, saya mengajukan keluhan ke pusat layanan pelanggan.)'
  },
  {
    id: 'm7h5_12',
    minggu: '7',
    hari: '5',
    kategori: 'kata benda',
    kanji: '持ち込み',
    furigana: 'もちこみ',
    arti: 'Pembawaan Masuk / Barang Bawaan Luar',
    penjelasan: 'Bentuk kata benda dari kata kerja "mochikomu". Merujuk langsung pada aktivitas atau regulasi mengenai barang-barang yang dibawa masuk oleh pengunjung ke dalam fasilitas tertentu.',
    contoh1: 'この映画館は、スナック類の持ち込みが一切できない。\n(Bioskop ini sama sekali tidak mengizinkan pembawaan masuk camilan dari luar.)',
    contoh2: '飛行機内への危険物の持ち込みは法律で厳しく制限されている。\n(Pembawaan masuk barang berbahaya ke dalam kabin pesawat dibatasi dengan ketat oleh hukum.)'
  },
  {
    id: 'm7h5_13',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '飲み込む',
    furigana: 'のみこむ',
    arti: 'Menelan / Menguasai (Trik atau Inti Masalah)',
    penjelasan: 'Secara harfiah berarti memasukkan makanan, cairan, atau air liur dari mulut melewati tenggorokan. Secara kiasan bermakna memahami, menyerap, dan menguasai trik, cara kerja, atau esensi dari sebuah keahlian dengan sangat baik sehingga menjadi paham betul.',
    contoh1: '緊張のあまり、何度もつばを飲み込む。\n(Karena saking gugupnya, berkali-kali saya menelan air liur.)',
    contoh2: '何度も練習を重ねて、ようやく新しい仕事のコツを飲み込む。\n(Setelah berlatih berkali-kali, akhirnya saya menguasai/memahami trik pekerjaan baru ini.)'
  },
  {
    id: 'm7h5_14',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '抜け出す',
    furigana: 'ぬけだす',
    arti: 'Menyelinap Keluar / Meloloskan Diri diam-diam',
    penjelasan: 'Tindakan keluar dari sebuah ruangan, tempat, atau pertemuan secara diam-diam tanpa meminta izin atau tanpa disadari oleh orang-orang di sekitar. Dapat juga berarti berhasil membebaskan diri dari situasi sulit atau jeratan masalah.',
    contoh1: '退屈な会議の途中で、誰にも気づかれないように会社を抜け出す。\n(Menyelinap keluar dari kantor di tengah rapat yang membosankan agar tidak disadari siapa pun.)',
    contoh2: '努力の結果、ようやく貧しい生活から抜け出すことができた。\n(Berkat hasil usaha keras, akhirnya saya bisa meloloskan diri/keluar dari kehidupan yang miskin.)'
  },
  {
    id: 'm7h5_15',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '投げ出す',
    furigana: 'なげだす',
    arti: 'Terlempar Keluar / Menyerah (Menelantarkan Tugas)',
    penjelasan: 'Memiliki arti fisik berupa terlempar ke luar dengan daya yang kuat akibat benturan atau kecelakaan. Arti abstraknya adalah menyerah di tengah jalan serta menelantarkan tugas atau tanggung jawab karena merasa sudah tidak sanggup atau frustrasi.',
    contoh1: '激しい衝突事故で、運転手が車から外へ投げ出される。\n(Akibat kecelakaan tabrakan yang hebat, pengemudi terlempar keluar dari mobil.)',
    contoh2: 'どんなに困難でも、途中で仕事を投げ出すのは良くない。\n(Seberat apa pun kesulitannya, menyerah/menelantarkan pekerjaan di tengah jalan itu tidak baik.)'
  },
  {
    id: 'm7h5_16',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '放り出す',
    furigana: 'ほうりだす',
    arti: 'Menelantarkan / Menghentikan di Tengah Jalan / Mengusir',
    penjelasan: 'Mirip dengan kata "nagedasu", kata ini berarti melemparkan sesuatu ke luar atau membiarkan sebuah pekerjaan berhenti begitu saja di tengah jalan tanpa menyelesaikannya hingga tuntas.',
    contoh1: '嫌気が差したからといって、仕事を中途で放り出すのは無責任だ。\n(Hanya karena merasa muak, menelantarkan/menghentikan pekerjaan di tengah jalan adalah hal yang tidak bertanggung jawab.)',
    contoh2: '子供が部屋の床におもちゃを放り出したままにしている。\n(Anak-anak membiarkan/melemparkan mainan telantar begitu saja di lantai kamar.)'
  },
  {
    id: 'm7h5_17',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '逃げ出す',
    furigana: 'にげだす',
    arti: 'Melarikan Diri / Kabur dari Lokasi',
    penjelasan: 'Tindakan lari secara tergesa-gesa untuk meninggalkan tempat kejadian, situasi yang menakutkan, bahaya, atau tanggung jawab besar karena merasa tertekan atau terancam.',
    contoh1: '不審な男は、遠くからパトカーの音が聞こえるとすぐにその場から逃げ出した。\n(Pria mencurigakan itu langsung melarikan diri/kabur dari tempat kejadian begitu mendengar suara mobil polisi dari kejauhan.)',
    contoh2: 'あまりのプレッシャーの強さに、現実から逃げ出したくなる。\n(Karena tekanan yang saking kuatnya, saya menjadi ingin melarikan diri dari kenyataan.)'
  },
  {
    id: 'm7h5_18',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '突っ張る',
    furigana: 'つっぱる',
    arti: 'Kaku / Tegang / Alami Kram Otot',
    penjelasan: 'Kondisi di mana otot-otot di bagian tubuh tertentu terasa mengencang, kaku, tegang, atau mengalami kram sehingga memicu rasa sakit dan sulit untuk digerakkan dengan lentur.',
    contoh1: '激しい運動をした翌日は、足の筋肉が突っ張る。\n(Hari berikutnya setelah berolahraga berat, otot kaki saya terasa kaku/tegang.)',
    contoh2: '乾燥肌のせいで、洗顔後に顔の皮膚が突っ張る感じがする。\n(Akibat kulit kering, setelah mencuci muka kulit wajah terasa kencang/kaku.)'
  },
  {
    id: 'm7h5_19',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '出っ張る',
    furigana: 'でっぱる',
    arti: 'Menonjol Keluar / Menjorok / Buncit',
    penjelasan: 'Menyatakan keadaan suatu benda, struktur bangunan, atau bagian tubuh yang posisinya menonjol, buncit, atau menjorok ke arah luar melebihi rata-rata area di sekelilingnya.',
    contoh1: '最近は運動不足なので、少しお腹が出っ張ってきた。\n(Karena akhir-akhir ini kurang olahraga, perut saya agak menonjol keluar/buncit.)',
    contoh2: '通りを歩くとき、壁の一部が出っ張っているので頭をぶつけやすい。\n(Saat berjalan di jalan ini, sebagian dindingnya menjorok keluar sehingga mudah membuat kepala terbentur.)'
  },

  // --- GAMBAR 2 (image_682b3b.jpg) ---
  {
    id: 'm7h5_20',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '振り返る',
    furigana: 'ふりかえる',
    arti: 'Menoleh ke Belakang / Mengenang Masa Lalu',
    penjelasan: 'Secara fisik berarti memalingkan wajah atau memutar tubuh ke arah belakang untuk melihat sesuatu. Secara kiasan (mental) berarti meninjau kembali, merenungkan, atau mengenang peristiwa di masa lampau yang sudah dilewati.',
    contoh1: '自分の名前を呼ばれたような気がして、後ろを振り返る。\n(Merasa seperti ada yang memanggil nama sendiri, saya menoleh ke belakang.)',
    contoh2: 'たまには日記を読み返して、楽しい少年時代を振り返るのも良い。\n(Sesekali membaca ulang buku harian untuk mengenang kembali masa kecil yang menyenangkan itu adalah hal yang bagus.)'
  },
  {
    id: 'm7h5_21',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '折り返す',
    furigana: 'おりかえす',
    arti: 'Melipat Balik / Menelepon Balik Segera',
    penjelasan: 'Secara fisik bermakna melipat bagian ujung suatu kain atau pakaian ke arah luar (seperti menggulung lengan kemeja). Dalam komunikasi bisnis, kata ini sangat vital digunakan untuk menyatakan komitmen akan membalas pesan atau menelepon balik seseorang dalam waktu sesingkat-singkatnya.',
    contoh1: '暑くなってきたので、シャツの袖を折り返す。\n(Karena cuaca mulai mendingin/panas, saya melipat balik/menggulung lengan kemeja.)',
    contoh2: '担当者がただいま席を外しておりますので、折り返し、お電話いたします。\n(Karena penanggung jawab saat ini sedang tidak di tempat, kami akan segera menelepon Anda kembali.)'
  },
  {
    id: 'm7h5_22',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: 'かき回す',
    furigana: 'かきまわす',
    arti: 'Mengaduk / Mengacaukan Situasi',
    penjelasan: 'Secara fisik berarti menggerakkan sendok atau alat pengaduk di dalam cairan secara berputar agar tercampur merata. Secara kiasan berarti mengacaukan suasana yang awalnya tenang, merusak jalannya rapat, atau membuat situasi menjadi gaduh akibat ulah seseorang.',
    contoh1: 'スプーンを使って、砂糖を入れてコーヒーをよくかき回す。\n(Menggunakan sendok untuk memasukkan gula lalu mengaduk kopi dengan baik.)',
    contoh2: '彼の勝手な発言のせいで、せっかくの会議がかき回された。\n(Gara-gara pernyataannya yang egois, jalannya rapat yang sudah dipersiapkan menjadi dikacaukan.)'
  },
  {
    id: 'm7h5_23',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '埋め立てる',
    furigana: 'うめたてる',
    arti: 'Mereklamasi / Menguruk / Menimbun Perairan',
    penjelasan: 'Proses teknik sipil untuk menimbun kawasan perairan (seperti area laut, rawa, Teluk, atau danau) dengan menggunakan tanah, bebatuan, atau material padat lainnya guna menciptakan lahan daratan baru yang produktif.',
    contoh1: '近年、新しい工業地帯を作るために海を埋め立てる工事が進んでいる。\n(Beberapa tahun terakhir, proyek menguruk/mereklamasi laut demi membangun kawasan industri baru terus berjalan.)',
    contoh2: '使わなくなった古い池を土で埋め立てる。\n(Menimbun kolam lama yang sudah tidak terpakai menggunakan tanah.)'
  },
  {
    id: 'm7h5_24',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: 'かみ切る',
    furigana: 'かみきる',
    arti: 'Menggigit Putus / Mengunyah Sampai Putus',
    penjelasan: 'Tindakan memotong atau memutuskan suatu makanan yang teksturnya alot, liat, atau keras dengan menggunakan kekuatan gigi (gigi seri/geraham) pada saat mengunyah makanan tersebut.',
    contoh1: 'このステーキの肉は固くて、いくら噛んでもかみ切れない。\n(Daging bistik ini sangat keras, digigit berapa kali pun tetap tidak bisa putus.)',
    contoh2: '小さな子供が大きなイカの天ぷらを前歯で一生懸命かみ切る。\n(Anak kecil itu berusaha keras menggigit putus tempura cumi yang besar dengan gigi depannya.)'
  }
];

window.vocabData.push(...kosakata_m7h5);