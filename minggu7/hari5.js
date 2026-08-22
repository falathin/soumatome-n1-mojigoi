// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m7h5 = [
  // --- GAMBAR 1 ---
  {
    id: 'm7h5_1',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '取り込む',
    furigana: 'とりこむ',
    arti: 'Angkat jemuran / Import data',
    penjelasan: 'Memasukkan jemuran ke rumah, atau mengimpor data ke komputer.',
    contoh1: '雨が降りそうなので、急いで洗濯物を取り込む。\n(Karena sepertinya akan hujan, saya segera mengangkat jemuran.)',
    contoh2: 'デジカメからパソコンに画像を取り込む。\n(Mengimpor gambar dari kamera digital ke komputer.)'
  },
  {
    id: 'm7h5_2',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '溶け込む',
    furigana: 'とけこむ',
    arti: 'Berbaur / Menyatu',
    penjelasan: 'Menyesuaikan diri dan menyatu dengan lingkungan atau budaya baru.',
    contoh1: '彼女は新しい職場にすぐ溶け込むことができた。\n(Dia bisa segera berbaur di tempat kerja yang baru.)',
    contoh2: '日本の文化や生活習慣に溶け込むのは時間がかかる。\n(Menyatu dengan budaya dan kebiasaan hidup Jepang butuh waktu.)'
  },
  {
    id: 'm7h5_3',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '組み込む',
    furigana: 'くみこむ',
    arti: 'Menyertakan / Memasukkan',
    penjelasan: 'Menyelipkan jadwal, fitur, atau anggaran ke dalam rencana yang ada.',
    contoh1: '今回の旅行の計画に、京都観光を組み込む。\n(Memasukkan wisata Kyoto ke dalam rencana perjalanan kali ini.)',
    contoh2: '新幹線の開発費用を来年度の予算に組み込む。\n(Memasukkan biaya pengembangan kereta cepat ke anggaran tahun depan.)'
  },
  {
    id: 'm7h5_4',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '乗り込む',
    furigana: 'のりこむ',
    arti: 'Naik kendaraan / Mendatangi musuh',
    penjelasan: 'Naik ke kendaraan, atau mendatangi tempat lawan dengan berani.',
    contoh1: '出発の直前に大急ぎで飛行機に乗り込む。\n(Terburu-buru naik ke pesawat tepat sebelum berangkat.)',
    contoh2: 'チーム全員で決戦のために敵地に乗り込む。\n(Seluruh tim mendatangi wilayah musuh untuk laga penentuan.)'
  },
  {
    id: 'm7h5_5',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '踏み込む',
    furigana: 'ふみこむ',
    arti: 'Injak pedal / Campur tangan',
    penjelasan: 'Menginjak gas dalam-dalam, atau terlalu dalam mencampuri urusan orang.',
    contoh1: 'スピードを上げるためにアクセルを強く踏み込む。\n(Menginjak pedal gas dalam-dalam untuk menaikkan kecepatan.)',
    contoh2: 'いくら親しい友人でも、他人の家庭事情に踏み込むべきではない。\n(Seakrab apa pun, tidak boleh mencampuri urusan rumah tangga orang.)'
  },
  {
    id: 'm7h5_6',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '放り込む',
    furigana: 'ほうりこむ',
    arti: 'Melempar masuk / Menjebloskan',
    penjelasan: 'Melempar benda ke wadah, atau menjebloskan seseorang ke penjara.',
    contoh1: '帰宅してすぐ、カバンの中に新聞を放り込む。\n(Tiba di rumah, langsung melemparkan koran ke dalam tas.)',
    contoh2: 'その凶悪犯はすぐに刑務所に放り込まれるだろう。\n(Penjahat kejam itu pasti akan segera dijebloskan ke penjara.)'
  },
  {
    id: 'm7h5_7',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '打ち込む',
    furigana: 'うちこむ',
    arti: 'Mengetik / Tekun melakoni',
    penjelasan: 'Mengetik data ke komputer, atau fokus sepenuh hati menekuni suatu hal.',
    contoh1: '手元の資料を見ながら、パソコンにデータを打ち込む。\n(Mengetik data ke komputer sambil melihat dokumen.)',
    contoh2: '彼は将来のために、毎日脇目も振らずに仕事に打ち込む。\n(Demi masa depan, tiap hari dia fokus menekuni pekerjaannya.)'
  },
  {
    id: 'm7h5_8',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '買い込む',
    furigana: 'かいこむ',
    arti: 'Memborong / Stok barang',
    penjelasan: 'Membeli barang atau stok makanan dalam jumlah banyak sekaligus.',
    contoh1: '地震や災害の発生に備えて、水や缶詰を買い込む。\n(Membeli stok air dan makanan kaleng untuk siaga bencana.)',
    contoh2: 'スーパーの特売日に日用品をたくさん買い込んだ。\n(Memborong kebutuhan harian saat hari diskon di supermarket.)'
  },
  {
    id: 'm7h5_9',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '引っ込む',
    furigana: 'ひっこむ',
    arti: 'Mundur / Menyepi',
    penjelasan: 'Mundur ke belakang, atau menarik diri ke tempat tenang (desa).',
    contoh1: '都会の生活に疲れて、定年後は田舎に引っ込むつもりだ。\n(Lelah di kota, saya berniat menyepi ke desa setelah pensiun.)',
    contoh2: '主役の挨拶が終わると、舞台の奥へと引っ込んだ。\n(Selesai salam pemeran utama, dia mundur ke belakang panggung.)'
  },
  {
    id: 'm7h5_10',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '落ち込む',
    furigana: 'おちこむ',
    arti: 'Sedih down / Anjlok merosot',
    penjelasan: 'Perasaan down karena gagal, atau merosotnya angka ekonomi/nilai.',
    contoh1: 'テストの成績が激しく落ち込んでしまい、ショックだ。\n(Nilai ujian anjlok tajam, saya sangat terkejut.)',
    contoh2: '大切な試合に負けて落ち込んでいる友人を慰める。\n(Menghibur teman yang sedang merasa down karena kalah bertanding.)'
  },
  {
    id: 'm7h5_11',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '持ち込む',
    furigana: 'もちこむ',
    arti: 'Bawa masuk / Mengajukan',
    penjelasan: 'Membawa barang luar ke dalam tempat, atau mengajukan komplain/kasus.',
    contoh1: '外部からの飲食物をホテルに持ち込むことは禁止です。\n(Dilarang membawa masuk makanan luar ke dalam hotel.)',
    contoh2: '不良品が見つかったので、カスタマーセンターに苦情を持ち込む。\n(Karena ada cacat produk, saya mengajukan keluhan ke CS.)'
  },
  {
    id: 'm7h5_12',
    minggu: '7',
    hari: '5',
    kategori: 'kata benda',
    kanji: '持ち込み',
    furigana: 'もちこみ',
    arti: 'Barang bawaan dari luar',
    penjelasan: 'Sesuatu yang dibawa dari luar lokasi (bentuk kata benda dari 持ち込む).',
    contoh1: 'この映画館は、スナック類の持ち込みが一切できない。\n(Bioskop ini melarang bawaan camilan dari luar.)',
    contoh2: '飛行機内への危険物の持ち込みは法律で厳しく制限されている。\n(Bawaan barang berbahaya ke kabin pesawat dilarang keras.)'
  },
  {
    id: 'm7h5_13',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '飲み込む',
    furigana: 'のみこむ',
    arti: 'Menelan / Paham trik',
    penjelasan: 'Menelan makanan/ludah, atau paham dan menguasai trik pekerjaan.',
    contoh1: '緊張のあまり、何度もつばを飲み込む。\n(Saking gugupnya, berkali-kali menelan ludah.)',
    contoh2: '何度も練習を重ねて、ようやく新しい仕事のコツを飲み込む。\n(Sering berlatih, akhirnya paham trik pekerjaan baru ini.)'
  },
  {
    id: 'm7h5_14',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '抜け出す',
    furigana: 'ぬけだす',
    arti: 'Kabur diam-diam / Lolos',
    penjelasan: 'Menyelinap keluar tanpa ketahuan, atau bebas dari jerat kesusahan.',
    contoh1: '退屈な会議の途中で、誰にも気づかれないように会社を抜け出す。\n(Menyelinap keluar kantor saat rapat membosankan.)',
    contoh2: '努力の結果、ようやく貧しい生活から抜け出すことができた。\n(Berkat kerja keras, akhirnya bisa lolos dari kemiskinan.)'
  },
  {
    id: 'm7h5_15',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '投げ出す',
    furigana: 'なげだす',
    arti: 'Terlempar / Menyerah tengah jalan',
    penjelasan: 'Terlempar keluar, atau berhenti dan menelantarkan tugas begitu saja.',
    contoh1: '激しい衝突事故で、運転手が車から外へ投げ出される。\n(Akibat tabrakan keras, pengemudi terlempar keluar mobil.)',
    contoh2: 'どんなに困難でも、途中で仕事を投げ出すのは良くない。\n(Seberat apa pun, menyerah di tengah jalan itu tidak baik.)'
  },
  {
    id: 'm7h5_16',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '放り出す',
    furigana: 'ほうりだす',
    arti: 'Membiarkan telantar / Lempar keluar',
    penjelasan: 'Melempar keluar, atau menelantarkan barang/tugas begitu saja.',
    contoh1: '嫌気が差したからといって、仕事を中途で放り出すのは無責任だ。\n(Hanya karena muak, menelantarkan tugas di tengah jalan itu tidak bertanggung jawab.)',
    contoh2: '子供が部屋の床におもちゃを放り出したままにしている。\n(Anak membiarkan mainan telantar berantakan di lantai.)'
  },
  {
    id: 'm7h5_17',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '逃げ出す',
    furigana: 'にげだす',
    arti: 'Lari kabur / Kabur dari kenyataan',
    penjelasan: 'Lari meninggalkan ancaman, atau kabur dari beban tanggung jawab.',
    contoh1: '不審な男は、遠くからパトカーの音が聞こえるとすぐにその場から逃げ出した。\n(Pria mencurigakan kabur begitu mendengar sirine polisi.)',
    contoh2: 'あまりのプレッシャーの強さに、現実から逃げ出したくなる。\n(Karena tekanan berat, rasanya ingin kabur dari kenyataan.)'
  },
  {
    id: 'm7h5_18',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '突っ張る',
    furigana: 'つっぱる',
    arti: 'Tegang kaku (Otot/Kulit)',
    penjelasan: 'Kondisi otot tegang/kram, atau kulit terasa tertarik kencang.',
    contoh1: '激しい運動をした翌日は、足の筋肉が突っ張る。\n(Sehari usai olahraga berat, otot kaki terasa tegang kaku.)',
    contoh2: '乾燥肌のせいで、洗顔後に顔の皮膚が突っ張る感じがする。\n(Efek kulit kering, wajah terasa kencang/kaku usai cuci muka.)'
  },
  {
    id: 'm7h5_19',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '出っ張る',
    furigana: 'でっぱる',
    arti: 'Menonjol / Buncit',
    penjelasan: 'Benda yang menjorok keluar, atau perut yang makin buncit.',
    contoh1: '最近は運動不足なので、少しお腹が出っ張ってきた。\n(Kurang olahraga, perut mulai agak buncit/menonjol.)',
    contoh2: '通りを歩くとき、壁の一部が出っ張っているので頭をぶつけやすい。\n(Dindingnya menjorok keluar, rawan bikin kepala terbentur.)'
  },

  // --- GAMBAR 2 ---
  {
    id: 'm7h5_20',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '振り返る',
    furigana: 'ふりかえる',
    arti: 'Menoleh / Mengenang masa lalu',
    penjelasan: 'Menoleh ke belakang, atau merenungkan/mengenang masa lalu.',
    contoh1: '自分の名前を呼ばれたような気がして、後ろを振り返る。\n(Merasa dipanggil, saya menoleh ke belakang.)',
    contoh2: 'たまには日記を読み返して、楽しい少年時代を振り返るのも良い。\n(Sesekali baca diari untuk mengenang masa kecil itu menyenangkan.)'
  },
  {
    id: 'm7h5_21',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '折り返す',
    furigana: 'おりかえす',
    arti: 'Gulung lengan / Telepon balik',
    penjelasan: 'Melipat balik baju/celana, atau menanggapi panggilan telepon kembali.',
    contoh1: '暑くなってきたので、シャツの袖を折り返す。\n(Karena makin panas, saya menggulung lengan kemeja.)',
    contoh2: '担当者がただいま席を外しておりますので、折り返し、お電話いたします。\n(Staf kami sedang keluar, nanti kami akan telepon balik.)'
  },
  {
    id: 'm7h5_22',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: 'かき回す',
    furigana: 'かきまわす',
    arti: 'Mengaduk / Mengacaukan suasana',
    penjelasan: 'Mengaduk cairan, atau membuat suasana yang tenang jadi kacau.',
    contoh1: 'スプーンを使って、砂糖を入れてコーヒーをよくかき回す。\n(Pakai sendok, masukkan gula lalu aduk kopi sampai rata.)',
    contoh2: '彼の勝手な発言のせいで、せっかくの会議がかき回された。\n(Gara-gara omongan egoisnya, jalannya rapat jadi dikacaukan.)'
  },
  {
    id: 'm7h5_23',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '埋め立てる',
    furigana: 'うめたてる',
    arti: 'Mereklamasi / Menimbun',
    penjelasan: 'Menimbun laut/kolam dengan tanah untuk membuat daratan baru.',
    contoh1: '近年、新しい工業地帯を作るために海を埋め立てる工事が進んでいる。\n(Proyek mereklamasi laut untuk area industri baru sedang berjalan.)',
    contoh2: '使わなくなった古い池を土で埋め立てる。\n(Menimbun kolam tua yang tak terpakai dengan tanah.)'
  },
  {
    id: 'm7h5_24',
    minggu: '7',
    hari: '5',
    kategori: 'kata kerja',
    kanji: 'かみ切る',
    furigana: 'かみきる',
    arti: 'Menggigit putus',
    penjelasan: 'Menggigit makanan yang alot/keras menggunakan gigi sampai putus.',
    contoh1: 'このステーキの肉は固くて、いくら噛んでもかみ切れない。\n(Daging ini keras, digigit berapa kali pun tak bisa putus.)',
    contoh2: '小さな子供が大きなイカの天ぷらを前歯で一生懸命かみ切る。\n(Anak kecil berusaha gigit putus tempura cumi dengan gigi depan.)'
  }
];

window.vocabData.push(...kosakata_m7h5);