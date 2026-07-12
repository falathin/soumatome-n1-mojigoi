// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m1h6 = [
  // ==========================================
  // Bagian 1: Gejala Fisik & Kondisi Tubuh (体調・症状)
  // ==========================================
  {
    id: 'm1h6_1',
    minggu: '1',
    hari: '6',
    kategori: 'kata sifat',
    kanji: '体がだるい',
    furigana: 'からだがだるい',
    arti: 'Badan terasa lesu / lemas',
    penjelasan: 'Menggunakan kata sifat "だるい" (lesu/berat). Kondisi di mana seluruh tubuh terasa berat, tidak bertenaga, dan malas bergerak. Biasanya disebabkan oleh kelelahan fisik, kurang tidur yang ekstrem, atau merupakan gejala awal dari penyakit seperti flu atau demam.',
    contoh1: '熱があって体がだるい。\n(Badan terasa lesu karena demam.)',
    contoh2: '寝不足で一日中体がだるかった。\n(Badanku lemas seharian karena kurang tidur.)'
  },
  {
    id: 'm1h6_2',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '寒気がする',
    furigana: 'さむけがする',
    arti: 'Merasa menggigil / Meriang',
    penjelasan: 'Perasaan dingin atau merinding yang tiba-tiba menyerang tubuh dari dalam, meskipun suhu ruangan tidak dingin. Frasa ini menggunakan kata kerja "する" yang menunjukkan sensasi/perasaan yang timbul. Biasanya ini adalah pertanda kuat tubuh akan demam tinggi atau masuk angin.',
    contoh1: '寒気がするので、風邪かもしれない。\n(Karena merasa meriang, mungkin saya kena flu.)',
    contoh2: '急に寒気がしてきた。\n(Tiba-tiba mulai merasa menggigil.)'
  },
  {
    id: 'm1h6_3',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '疲労で目がかすむ',
    furigana: 'ひろうでめがかすむ',
    arti: 'Mata berkunang-kunang/kabur karena kelelahan',
    penjelasan: 'Kondisi di mana pandangan mata menjadi tidak jelas, buram, atau berkunang-kunang (かすむ - kata kerja intransitif) akibat mata lelah bekerja terlalu lama (misalnya menatap layar komputer) atau karena stres fisik (疲労).',
    contoh1: 'パソコンを使いすぎて目がかすむ。\n(Pandangan kabur karena terlalu banyak memakai komputer.)',
    contoh2: '疲労で目がかすんで、文字が読めない。\n(Mata kabur karena lelah, sampai tidak bisa membaca huruf.)'
  },
  {
    id: 'm1h6_4',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '貧血になる',
    furigana: 'ひんけつになる',
    arti: 'Menderita kurang darah / Anemia',
    penjelasan: 'Kondisi medis di mana tubuh kekurangan sel darah merah. Dalam percakapan sehari-hari, frasa ini juga sering dipakai untuk menggambarkan kondisi pusing berkunang-kunang atau ingin pingsan saat berdiri terlalu cepat (hipotensi ortostatik).',
    contoh1: '立ち上がった瞬間、貧血になった。\n(Saat berdiri, tiba-tiba saya terkena anemia/pusing.)',
    contoh2: '彼女は貧血になりやすい。\n(Dia mudah terkena gejala kurang darah.)'
  },
  {
    id: 'm1h6_5',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '安静にする',
    furigana: 'あんせいにする',
    arti: 'Beristirahat total / Menenangkan diri',
    penjelasan: 'Instruksi medis untuk beristirahat total. "安静" (ansei) berarti tenang dan damai, ditambah "にする" menjadikannya tindakan untuk tidak melakukan aktivitas fisik yang berat, berbaring diam di tempat tidur, agar tubuh segera pulih dari penyakit atau cedera.',
    contoh1: '医者に数日は安静にするよう言われた。\n(Disuruh dokter untuk beristirahat total selama beberapa hari.)',
    contoh2: '薬を飲んで、部屋で安静にしている。\n(Minum obat dan beristirahat total di kamar.)'
  },
  {
    id: 'm1h6_6',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '虫に刺される',
    furigana: 'むしにさされる',
    arti: 'Digigit serangga',
    penjelasan: 'Merupakan bentuk pasif (ukemi) dari kata kerja 刺す (menusuk/menggigit). Dalam bahasa Jepang, gigitan nyamuk, lebah, atau serangga lainnya selalu diekspresikan dengan kata "ditusuk" (刺される) oleh serangga tersebut, bukan dikunyah.',
    contoh1: '蚊に刺されて、腕がかゆい。\n(Lengan terasa gatal karena digigit nyamuk.)',
    contoh2: '山で虫に刺された。\n(Digigit serangga saat berada di gunung.)'
  },
  {
    id: 'm1h6_7',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: 'とげが刺さる',
    furigana: 'とげがささる',
    arti: 'Tertusuk duri',
    penjelasan: 'Kondisi di mana serpihan tajam seperti kayu kecil (sliver), kaca, atau duri tanaman masuk dan menancap ke dalam kulit. Menggunakan kata kerja intransitif "刺さる" yang fokus pada keadaan duri tersebut yang menancap.',
    contoh1: '指にバラのとげが刺さった。\n(Jari tertusuk duri bunga mawar.)',
    contoh2: '足にとげが刺さって痛い。\n(Kaki terasa sakit karena tertusuk duri.)'
  },
  {
    id: 'm1h6_8',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: 'めまいがする',
    furigana: 'めまいがする',
    arti: 'Merasa pusing / Berkunang-kunang',
    penjelasan: 'Kondisi pusing di mana kepala terasa berputar, pandangan berayun, atau keseimbangan tubuh hilang seolah-olah mau jatuh. Sama seperti "寒気がする", frasa ini menggunakan "する" untuk sensasi fisik yang dialami tubuh.',
    contoh1: '急に立ち上がるとめまいがする。\n(Kalau tiba-tiba berdiri, terasa pusing berputar.)',
    contoh2: '熱でめまいがして倒れた。\n(Pingsan karena merasa pusing akibat demam.)'
  },
  {
    id: 'm1h6_9',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '意識がもうろうとする',
    furigana: 'いしきがもうろうとする',
    arti: 'Kesadaran sayup-sayup / Setengah sadar',
    penjelasan: 'Kondisi di mana pikiran tidak jernih, mengabur, atau seperti orang mengigau. Biasanya terjadi ketika seseorang hampir pingsan karena benturan keras, kurang oksigen, kelelahan parah, atau demam yang sangat tinggi.',
    contoh1: '高熱で意識がもうろうとしている。\n(Kesadarannya setengah sadar/sayup-sayup karena demam tinggi.)',
    contoh2: '事故の後、意識がもうろうとしていた。\n(Setelah kecelakaan, kesadarannya mengabur.)'
  },
  {
    id: 'm1h6_10',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '意識が遠ざかる',
    furigana: 'いしきがとおざかる',
    arti: 'Kesadaran perlahan menghilang / Mulai pingsan',
    penjelasan: 'Proses bertahap di mana seseorang perlahan-lahan kehilangan kesadarannya menuju pingsan. Kata "遠ざかる" secara harfiah berarti "menjauh", menggambarkan kesadaran yang semakin menjauh/hilang. Kebalikannya adalah 意識を取り戻す (sadar kembali).',
    contoh1: '痛みで意識が遠ざかっていった。\n(Kesadaran perlahan menghilang karena rasa sakit.)',
    contoh2: 'サイレンの音が次第に遠ざかる。\n(Suara sirene perlahan menjauh - contoh penggunaan dasar 遠ざかる)'
  },
  {
    id: 'm1h6_11',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '意識不明になる',
    furigana: 'いしきふめいになる',
    arti: 'Menjadi tidak sadarkan diri / Koma',
    penjelasan: 'Kondisi medis gawat darurat di mana seseorang benar-benar pingsan total atau koma dan sama sekali tidak merespons rangsangan dari luar. Berbeda dengan "もうろう", kondisi ini berarti kesadaran sudah 100% hilang.',
    contoh1: '彼は事故で意識不明になった。\n(Dia menjadi tidak sadar/koma karena kecelakaan.)',
    contoh2: '意識不明の重体。\n(Kondisi kritis tidak sadarkan diri.)'
  },
  {
    id: 'm1h6_12',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '足首をねんざする',
    furigana: 'あしくびをねんざする',
    arti: 'Pergelangan kaki terkilir / Keseleo',
    penjelasan: 'Mengalami cedera pada ligamen atau sendi akibat gerakan memutar yang tiba-tiba secara tidak wajar. Sering terjadi pada area pergelangan kaki (足首) atau tangan saat berolahraga atau tersandung.',
    contoh1: 'スポーツ中に足首をねんざした。\n(Pergelangan kaki terkilir saat berolahraga.)',
    contoh2: 'ねんざで歩くのが痛い。\n(Sakit untuk berjalan karena keseleo.)'
  },
  {
    id: 'm1h6_13',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '打ったところがはれる',
    furigana: 'うったところがはれる',
    arti: 'Bagian yang terbentur membengkak',
    penjelasan: 'Kondisi di mana kulit atau jaringan tubuh menjadi bengkak (はれる - kata kerja) sebagai reaksi peradangan akibat benturan fisik yang keras (打つ). Biasanya disertai dengan rasa sakit atau memar kebiruan.',
    contoh1: 'ドアに打ったところが大きくはれている。\n(Bagian yang terbentur pintu membengkak besar.)',
    contoh2: '泣きすぎて目がはれる。\n(Mata membengkak karena terlalu banyak menangis.)'
  },
  {
    id: 'm1h6_14',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '足がむくむ',
    furigana: 'あしがむくむ',
    arti: 'Kaki membengkak (edema)',
    penjelasan: 'Pembengkakan yang bukan karena benturan, melainkan akibat penumpukan cairan darah atau getah bening di bawah kulit. Sangat sering terjadi pada area kaki bagi pekerja yang duduk atau berdiri dalam waktu yang terlalu lama.',
    contoh1: '立ち仕事で足がむくむ。\n(Kaki membengkak karena pekerjaan yang mengharuskan berdiri.)',
    contoh2: '足のむくみをとるマッサージ。\n(Pijat untuk menghilangkan bengkak cairan di kaki.)'
  },
  {
    id: 'm1h6_15',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '下痢をする',
    furigana: 'げりをする',
    arti: 'Mengalami diare',
    penjelasan: 'Kondisi pencernaan yang terganggu, mengakibatkan buang air besar menjadi sangat encer atau cair. Biasanya terjadi karena salah makan, infeksi bakteri, atau kondisi perut yang kedinginan.',
    contoh1: '冷たいものを飲みすぎて下痢をした。\n(Terkena diare karena terlalu banyak minum minuman dingin.)',
    contoh2: '下痢の薬を飲む。\n(Minum obat diare.)'
  },
  {
    id: 'm1h6_16',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '便秘になる',
    furigana: 'べんぴになる',
    arti: 'Terkena sembelit / Susah BAB',
    penjelasan: 'Kondisi di mana frekuensi buang air besar menurun drastis dan feses menjadi keras, membuat penderitanya kesulitan buang air besar. Ini adalah kebalikan langsung dari diare (下痢). Biasanya diatasi dengan makan makanan berserat.',
    contoh1: '野菜不足で便秘になった。\n(Terkena sembelit karena kurang makan sayuran.)',
    contoh2: '便秘を治す。\n(Menyembuhkan sembelit.)'
  },
  {
    id: 'm1h6_17',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '妊娠する',
    furigana: 'にんしんする',
    arti: 'Hamil / Mengandung',
    penjelasan: 'Proses seorang wanita mengandung anak di dalam rahimnya. Istilah lain yang berkaitan dengan ini adalah 出産 (しゅっさん) yang berarti melahirkan bayi ke dunia.',
    contoh1: '妻が妊娠した。\n(Istri saya sedang hamil.)',
    contoh2: '妊娠3ヶ月です。\n(Sedang hamil 3 bulan.)'
  },
  {
    id: 'm1h6_18',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '歯を矯正する',
    furigana: 'はをきょうせいする',
    arti: 'Memakai kawat gigi / Meratakan gigi',
    penjelasan: 'Tindakan medis di dokter gigi untuk memperbaiki, merapikan, dan meratakan susunan gigi atau rahang yang tidak sejajar (perawatan ortodontik) dengan menggunakan alat seperti kawat gigi.',
    contoh1: '子供の頃に歯を矯正した。\n(Saya meratakan gigi/memakai kawat gigi saat masih anak-anak.)',
    contoh2: '歯の矯正には時間がかかる。\n(Butuh waktu berbulan-bulan/lama untuk meratakan gigi.)'
  },
  {
    id: 'm1h6_19',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '湿疹ができる',
    furigana: 'しっしんができる',
    arti: 'Timbul eksim / Ruam kulit',
    penjelasan: 'Kondisi medis di mana muncul bintik-bintik merah, ruam, atau peradangan pada kulit yang umumnya disertai rasa gatal dan iritasi. Bisa disebabkan oleh alergi, keringat, atau iritasi bahan kimia.',
    contoh1: '腕に湿疹ができてかゆい。\n(Terasa sangat gatal karena muncul ruam eksim di lengan.)',
    contoh2: '湿疹の薬を塗る。\n(Mengoleskan salep untuk eksim kulit.)'
  },
  {
    id: 'm1h6_20',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '皮膚をかく',
    furigana: 'ひふをかく',
    arti: 'Menggaruk kulit',
    penjelasan: 'Tindakan fisik menggunakan kuku jari untuk menggaruk permukaan kulit yang terasa gatal. Menggaruk terlalu keras bisa menyebabkan luka (引っかき傷).',
    contoh1: 'かゆくて皮膚をかいてしまった。\n(Karena gatal, saya tidak sengaja terus menggaruk kulit.)',
    contoh2: '寝ている間に顔をかく。\n(Tanpa sadar menggaruk wajah saat sedang tidur.)'
  },
  {
    id: 'm1h6_21',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '猫に引っかかれる',
    furigana: 'ねこにひっかかれる',
    arti: 'Dicakar kucing',
    penjelasan: 'Merupakan bentuk pasif (ukemi) dari kata kerja 引っかく (mencakar). Artinya subjek menerima tindakan cakaran atau goresan luka dari kuku tajam, dalam konteks ini adalah kuku kucing.',
    contoh1: '遊んでいたら、猫に引っかかれた。\n(Saat sedang asyik bermain, saya tiba-tiba dicakar kucing.)',
    contoh2: '腕に引っかき傷がある。\n(Ada luka bekas cakaran di lengan.)'
  },
  
  // ==========================================
  // Bagian 2: Perubahan Kondisi & Tindakan Medis (進行・治療)
  // ==========================================
  {
    id: 'm1h6_22',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '病気の進行が早まる',
    furigana: 'びょうきのしんこうがはやまる',
    arti: 'Perkembangan penyakit menjadi lebih cepat',
    penjelasan: 'Menunjukkan kondisi di mana penyakit menyebar atau memburuk lebih cepat dari waktu yang diperkirakan. Menggunakan kata kerja intransitif "早まる" yang berarti sesuatu terjadi lebih awal dengan sendirinya.',
    contoh1: '予想より病気の進行が早まった。\n(Perkembangan penyakit menjadi lebih cepat dari dugaan awal.)',
    contoh2: '出発の時間を早める。\n(Mempercepat waktu keberangkatan. - Contoh kata kerja transitif 早める)'
  },
  {
    id: 'm1h6_23',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '体が弱る',
    furigana: 'からだがよわる',
    arti: 'Tubuh menjadi lemah / Menurunnya stamina',
    penjelasan: 'Kondisi di mana stamina, energi, atau daya tahan tubuh menurun drastis secara internal (intransitif). Penurunan energi ini sering terjadi akibat penuaan, sakit yang berkepanjangan, atau malnutrisi.',
    contoh1: '年をとって体が弱ってきた。\n(Seiring bertambahnya usia, ketahanan tubuh mulai melemah.)',
    contoh2: '病気で胃腸が弱っている。\n(Fungsi lambung dan usus melemah karena sakit.)'
  },
  {
    id: 'm1h6_24',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '痛みが強まる／弱まる',
    furigana: 'いたみがつよまる／よわまる',
    arti: 'Rasa sakit menguat (makin sakit) / Melemah (mereda)',
    penjelasan: 'Kata kerja intransitif untuk menyatakan intensitas rasa sakit. "強まる" berarti sakitnya bertambah hebat/parah, sedangkan "弱まる" berarti sakitnya mulai berkurang/mereda secara perlahan.',
    contoh1: '夜になると痛みが強まる。\n(Rasa sakitnya terasa semakin menguat saat malam hari tiba.)',
    contoh2: '薬の効果で痛みが弱まった。\n(Rasa sakit perlahan melemah berkat efek obat.)'
  },
  {
    id: 'm1h6_25',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '痛みを和らげる',
    furigana: 'いたみをやわらげる',
    arti: 'Meredakan rasa sakit',
    penjelasan: 'Tindakan secara sengaja (transitif) untuk mengurangi intensitas penderitaan, rasa sakit, atau ketegangan otot agar terasa lebih nyaman. Obat pereda nyeri dalam bahasa Jepang sering disebut 鎮痛剤 (chintsuuzai).',
    contoh1: '薬で痛みを和らげる。\n(Meredakan rasa sakit dengan meminum obat.)',
    contoh2: '少し痛みが和らいだ。\n(Rasa sakitnya sudah sedikit mendingan/mereda dengan sendirinya. - Contoh bentuk intransitif 和らぐ)'
  },
  {
    id: 'm1h6_26',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: 'リハビリ（を）する',
    furigana: 'リハビリ（を）する',
    arti: 'Menjalani rehabilitasi',
    penjelasan: 'Melakukan program terapi atau latihan fisik berkala yang bertujuan mengembalikan fungsi normal tubuh atau motorik setelah mengalami operasi berat, cedera, patah tulang, atau penyakit lumpuh.',
    contoh1: '骨折の後、毎日リハビリをしている。\n(Setelah mengalami patah tulang, setiap hari menjalani rehabilitasi.)',
    contoh2: '専門病院でリハビリを受ける。\n(Menjalani program rehabilitasi di rumah sakit spesialis.)'
  },
  {
    id: 'm1h6_27',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '入院する',
    furigana: 'にゅういんする',
    arti: 'Masuk rumah sakit / Dirawat inap',
    penjelasan: 'Proses pasien didaftarkan masuk dan tinggal di rumah sakit untuk mendapatkan perawatan atau pengawasan intensif dari dokter. Lawan katanya adalah 退院する (たいいんする) yang berarti keluar/diperbolehkan pulang dari rumah sakit.',
    contoh1: '検査のために入院する。\n(Masuk rumah sakit untuk menjalani serangkaian pemeriksaan medis.)',
    contoh2: '明日、無事に退院する予定だ。\n(Besok dijadwalkan pulang dari RS setelah dinyatakan sembuh.)'
  },
  {
    id: 'm1h6_28',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '患者に付き添う',
    furigana: 'かんじゃにつきそう',
    arti: 'Mendampingi / Menjaga pasien',
    penjelasan: 'Tindakan berada di sisi seseorang (terutama pasien, anak kecil, atau lansia) untuk memberikan dukungan moral, membantu mobilitas mereka, merawat, dan menemani aktivitas mereka selama sakit.',
    contoh1: '母親が病気の子供に付き添う。\n(Ibu senantiasa mendampingi dan menjaga anaknya yang sedang sakit.)',
    contoh2: '病院の付き添いで疲れた。\n(Fisik terasa lelah karena berjaga/menemani pasien di rumah sakit.)'
  },
  {
    id: 'm1h6_29',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '面会に行く',
    furigana: 'めんかいにいく',
    arti: 'Pergi berkunjung / Menjenguk',
    penjelasan: 'Pergi untuk bertemu seseorang di suatu institusi seperti rumah sakit, penjara, atau asrama dengan izin resmi. Jika konteksnya khusus menjenguk orang yang sedang sakit untuk memberi semangat, kata yang lebih sering digunakan adalah お見舞いに行く (omimai ni iku).',
    contoh1: '入院中の友人の面会に行く。\n(Pergi berkunjung menemui teman yang sedang dirawat inap.)',
    contoh2: '病院へお見舞いに行く。\n(Pergi ke rumah sakit untuk menjenguk orang sakit sambil membawa buah tangan.)'
  },

  // ==========================================
  // Bagian 3: Nama-nama Penyakit (病名 - Byoumei)
  // ==========================================
  {
    id: 'm1h6_30',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '癌（ガン）',
    furigana: 'がん',
    arti: 'Kanker',
    penjelasan: 'Penyakit mematikan berupa tumor ganas yang selnya tumbuh tidak terkendali. Dalam tulisan atau artikel kesehatan di Jepang, kata ini sangat sering ditulis menggunakan huruf Katakana (ガン) untuk memudahkan pembacaan dibandingkan huruf Kanji-nya.',
    contoh1: '彼はガンと闘っている。\n(Dia sedang berjuang keras melawan penyakit kanker.)',
    contoh2: 'ガンの早期発見が大切だ。\n(Penemuan gejala kanker sejak dini sangatlah krusial untuk penyembuhan.)'
  },
  {
    id: 'm1h6_31',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'ぜんそく',
    furigana: 'ぜんそく',
    arti: 'Asma',
    penjelasan: 'Penyakit kronis pada saluran pernapasan yang menyebabkan penderitanya sesak napas. Kondisi di mana dada tiba-tiba sesak dan penderita sulit bernapas disebut sebagai serangan asma atau ぜんそくの発作 (ほっさ).',
    contoh1: '子供の頃からぜんそくを持っている。\n(Mempunyai riwayat penyakit asma sejak masih kanak-kanak.)',
    contoh2: '夜中にぜんそくの発作が起きた。\n(Tiba-tiba terjadi serangan asma di tengah malam.)'
  },
  {
    id: 'm1h6_32',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '気管支炎',
    furigana: 'きかんしえん',
    arti: 'Bronkitis',
    penjelasan: 'Kondisi medis berupa peradangan pada saluran bronkus (saluran udara utama yang menuju paru-paru). Penyakit ini biasanya memicu batuk berdahak yang sangat parah dan dada terasa sakit.',
    contoh1: '風邪をこじらせて気管支炎になった。\n(Gejala flunya memburuk dan berujung menjadi penyakit bronkitis.)',
    contoh2: '気管支炎で激しく咳き込む。\n(Batuk dengan sangat keras akibat peradangan bronkitis.)'
  },
  {
    id: 'm1h6_33',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '肺炎',
    furigana: 'はいえん',
    arti: 'Pneumonia / Radang paru-paru',
    penjelasan: 'Infeksi serius yang menyebabkan peradangan pada kantung udara (alveolus) di salah satu atau kedua paru-paru, yang bisa terisi cairan atau nanah. Sangat berbahaya terutama bagi kalangan lanjut usia.',
    contoh1: 'お年寄りは肺炎になりやすい。\n(Kalangan lanjut usia sangat rentan terkena radang paru-paru.)',
    contoh2: '肺炎で一週間入院した。\n(Harus dirawat inap selama seminggu karena menderita pneumonia.)'
  },
  {
    id: 'm1h6_34',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '皮膚炎',
    furigana: 'ひふえん',
    arti: 'Dermatitis / Radang kulit',
    penjelasan: 'Istilah umum untuk kondisi peradangan pada kulit yang ditandai dengan kulit merah, bengkak, kering, dan gatal. Jenis dermatitis kronis yang paling umum diderita akibat alergi sering disebut アトピー性皮膚炎 (Dermatitis atopik).',
    contoh1: '薬品に触れて皮膚炎を起こした。\n(Terkena peradangan kulit karena kulit tidak sengaja menyentuh bahan kimia keras.)',
    contoh2: 'アトピー性皮膚炎の薬を塗る。\n(Mengoleskan salep obat khusus untuk penyakit dermatitis atopik.)'
  },
  {
    id: 'm1h6_35',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'うつ病',
    furigana: 'うつびょう',
    arti: 'Depresi',
    penjelasan: 'Penyakit gangguan kesehatan mental serius yang ditandai dengan perasaan sedih yang mendalam, kehilangan motivasi hidup, dan hilangnya minat pada banyak hal yang terjadi secara terus-menerus dalam waktu lama.',
    contoh1: 'ストレスが原因でうつ病になる。\n(Bisa terkena penyakit depresi mental akibat tekanan stres yang berat.)',
    contoh2: 'うつ病の治療を受ける。\n(Menerima perawatan konseling dan medis untuk menyembuhkan depresi.)'
  },
  {
    id: 'm1h6_36',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '認知症',
    furigana: 'にんちしょう',
    arti: 'Demensia / Pikun',
    penjelasan: 'Sindrom penurunan drastis pada fungsi kognitif otak (terutama pada lansia) yang memengaruhi ingatan jangka pendek, cara berpikir, dan perilaku sehari-hari. Salah satu penyebab demensia yang paling umum dan terkenal adalah アルツハイマー病 (Penyakit Alzheimer).',
    contoh1: '祖母は認知症の症状が出始めた。\n(Nenek mulai menunjukkan gejala penyakit demensia/kepikunan.)',
    contoh2: 'アルツハイマー病の研究が進んでいる。\n(Penelitian sains mengenai penyembuhan penyakit Alzheimer sedang mengalami kemajuan pesat.)'
  },
  {
    id: 'm1h6_37',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '熱中症',
    furigana: 'ねっちゅうしょう',
    arti: 'Serangan panas / Heatstroke',
    penjelasan: 'Kondisi gawat darurat medis yang umum terjadi di musim panas Jepang (Natsu). Tubuh gagal mendinginkan suhunya sendiri akibat terpapar cuaca panas yang ekstrem tanpa diimbangi oleh asupan cairan dan garam yang cukup.',
    contoh1: '真夏は熱中症に気をつけてください。\n(Tolong berhati-hati terhadap serangan panas ekstrem di puncak musim panas.)',
    contoh2: '水分をとらないと熱中症になる。\n(Bisa terkena heatstroke fatal kalau tubuh tidak rutin minum air.)'
  },
  {
    id: 'm1h6_38',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '花粉症',
    furigana: 'かふんしょう',
    arti: 'Alergi serbuk sari / Hay fever',
    penjelasan: 'Penyakit alergi musiman di Jepang yang mayoritas terjadi saat awal musim semi (Maret-Mei). Gejalanya dipicu oleh beterbangan serbuk sari pohon (terutama pohon Sugi / cemara cedar), yang menyebabkan hidung meler tanpa henti, bersin parah, dan mata sangat gatal.',
    contoh1: '春になると花粉症で目が痛い。\n(Setiap musim semi tiba, mataku selalu perih dan gatal karena alergi serbuk sari.)',
    contoh2: '花粉症の薬を飲む。\n(Minum obat antihistamin pereda alergi serbuk sari.)'
  }
];

// Menambahkan kosakata dari file ini ke data master
window.vocabData.push(...kosakata_m1h6);