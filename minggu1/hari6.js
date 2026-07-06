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
    kategori: 'kata keterangan',
    kanji: '体がだるい',
    furigana: 'からだがだるい',
    arti: 'Badan terasa lesu / lemas',
    penjelasan: 'Kondisi di mana tubuh terasa berat, tidak bertenaga, dan malas bergerak. Biasanya disebabkan oleh kelelahan, kurang tidur, atau gejala awal flu.',
    contoh1: '熱があって体がだるい。\n(Badan terasa lesu karena demam.)',
    contoh2: '寝不足で一日中体がだるかった。\n(Badanku lemas seharian karena kurang tidur.)'
  },
  {
    id: 'm1h6_2',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '寒気がする',
    furigana: 'さむけがする',
    arti: 'Merasa menggigil / Meriang',
    penjelasan: 'Perasaan dingin yang tiba-tiba menyerang tubuh dari dalam, biasanya merupakan pertanda tubuh akan demam atau masuk angin.',
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
    penjelasan: 'Kondisi pandangan menjadi tidak jelas, buram, atau berkunang-kunang (かすむ) akibat mata lelah bekerja terlalu lama atau stres fisik (疲労).',
    contoh1: 'パソコンを使いすぎて目がかすむ。\n(Pandangan kabur karena terlalu banyak memakai komputer.)',
    contoh2: '疲労で目がかすんで、文字が読めない。\n(Mata kabur karena lelah, sampai tidak bisa membaca huruf.)'
  },
  {
    id: 'm1h6_4',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '貧血になる',
    furigana: 'ひんけつになる',
    arti: 'Kekurangan darah / Anemia',
    penjelasan: 'Kondisi pusing atau ingin pingsan saat berdiri terlalu cepat karena tekanan darah rendah atau kekurangan sel darah merah.',
    contoh1: '立ち上がった瞬間、貧血になった。\n(Saat berdiri, tiba-tiba saya terkena anemia/pusing.)',
    contoh2: '彼女は貧血になりやすい。\n(Dia mudah terkena kurang darah.)'
  },
  {
    id: 'm1h6_5',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '安静にする',
    furigana: 'あんせいにする',
    arti: 'Beristirahat total / Menenangkan diri',
    penjelasan: 'Instruksi dokter untuk tidak melakukan aktivitas berat, berbaring diam di tempat tidur, dan memulihkan kondisi tubuh.',
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
    penjelasan: 'Bentuk pasif dari 刺す (menusuk/menggigit). Digunakan saat kulit digigit nyamuk, lebah, atau serangga lainnya.',
    contoh1: '蚊に刺されて、腕がかゆい。\n(Lengan terasa gatal karena digigit nyamuk.)',
    contoh2: '山で虫に刺された。\n(Digigit serangga di gunung.)'
  },
  {
    id: 'm1h6_7',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: 'とげが刺さる',
    furigana: 'とげがささる',
    arti: 'Tertusuk duri',
    penjelasan: 'Kondisi di mana serpihan kayu kecil (sliver) atau duri masuk dan menancap (刺さる - intransitif) ke dalam kulit.',
    contoh1: '指にバラのとげが刺さった。\n(Jari tertusuk duri bunga mawar.)',
    contoh2: '足にとげが刺さって痛い。\n(Kaki terasa sakit karena tertusuk duri.)'
  },
  {
    id: 'm1h6_8',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'めまいがする',
    furigana: 'めまいがする',
    arti: 'Merasa pusing / Berkunang-kunang',
    penjelasan: 'Rasa pusing di mana seolah-olah kepala berputar atau keseimbangan tubuh hilang.',
    contoh1: '急に立ち上がるとめまいがする。\n(Kalau tiba-tiba berdiri, terasa pusing berputar.)',
    contoh2: '熱でめまいがして倒れた。\n(Pingsan karena pusing akibat demam.)'
  },
  {
    id: 'm1h6_9',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '意識がもうろうとする',
    furigana: 'いしきがもうろうとする',
    arti: 'Kesadaran sayup-sayup / Setengah sadar',
    penjelasan: 'Kondisi pikiran yang tidak jernih, seperti orang mengigau atau hampir pingsan karena benturan atau demam tinggi.',
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
    penjelasan: 'Proses di mana seseorang perlahan-lahan kehilangan kesadaran menuju pingsan. Kata turunannya (〜を) 遠ざける berarti "menjauhkan sesuatu".',
    contoh1: '痛みで意識が遠ざかっていった。\n(Kesadaran perlahan menghilang karena rasa sakit.)',
    contoh2: '薬を遠ざける。\n(Menjauhkan obat. - Contoh turunan 遠ざける)',
  },
  {
    id: 'm1h6_11',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '意識不明になる',
    furigana: 'いしきふめいになる',
    arti: 'Menjadi tidak sadar / Koma',
    penjelasan: 'Kondisi pingsan total atau koma di mana seseorang sama sekali tidak merespons rangsangan dari luar.',
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
    penjelasan: 'Mengalami cedera pada sendi (biasanya kaki atau tangan) karena gerakan memutar yang tiba-tiba.',
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
    penjelasan: 'Kulit atau bagian tubuh menjadi bengkak (はれる) akibat benturan keras (打つ).',
    contoh1: 'ドアに打ったところが大きくはれている。\n(Bagian yang terbentur pintu membengkak besar.)',
    contoh2: '顔がはれる。\n(Wajahnya membengkak.)'
  },
  {
    id: 'm1h6_14',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '足がむくむ',
    furigana: 'あしがむくむ',
    arti: 'Kaki membengkak (edema)',
    penjelasan: 'Pembengkakan karena penumpukan cairan (bukan karena benturan). Sering terjadi pada kaki setelah duduk atau berdiri terlalu lama. Kata bendanya adalah むくみ (bengkak).',
    contoh1: '立ち仕事で足がむくむ。\n(Kaki membengkak karena pekerjaan yang mengharuskan berdiri.)',
    contoh2: '足のむくみをとるマッサージ。\n(Pijat untuk menghilangkan bengkak di kaki.)'
  },
  {
    id: 'm1h6_15',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '下痢をする',
    furigana: 'げりをする',
    arti: 'Diare',
    penjelasan: 'Kondisi buang air besar yang encer, biasanya karena salah makan atau sakit perut.',
    contoh1: '冷たいものを飲みすぎて下痢をした。\n(Terkena diare karena terlalu banyak minum minuman dingin.)',
    contoh2: '下痢の薬を飲む。\n(Minum obat diare.)'
  },
  {
    id: 'm1h6_16',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '便秘になる',
    furigana: 'べんぴになる',
    arti: 'Sembelit / Susah buang air besar',
    penjelasan: 'Kondisi pencernaan yang sulit buang air besar (kebalikan dari diare).',
    contoh1: '野菜不足で便秘になった。\n(Terkena sembelit karena kurang makan sayur.)',
    contoh2: '便秘を治す。\n(Menyembuhkan sembelit.)'
  },
  {
    id: 'm1h6_17',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '妊娠する',
    furigana: 'にんしんする',
    arti: 'Hamil',
    penjelasan: 'Mengandung anak. Kata terkaitnya adalah 出産 (しゅっさん) atau お産 (おさん) yang berarti melahirkan.',
    contoh1: '妻が妊娠した。\n(Istri saya hamil.)',
    contoh2: '無事に出産（お産）を終えた。\n(Telah menyelesaikan proses melahirkan dengan selamat.)'
  },
  {
    id: 'm1h6_18',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '歯を矯正する',
    furigana: 'はをきょうせいする',
    arti: 'Memakai kawat gigi / Meratakan gigi',
    penjelasan: 'Tindakan medis untuk memperbaiki susunan gigi yang tidak rata (ortodontik).',
    contoh1: '子供の頃に歯を矯正した。\n(Saya meratakan gigi/memakai kawat gigi saat masih anak-anak.)',
    contoh2: '歯の矯正には時間がかかる。\n(Butuh waktu lama untuk perbaikan/meratakan gigi.)'
  },
  {
    id: 'm1h6_19',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '湿疹ができる',
    furigana: 'しっしんができる',
    arti: 'Terkena eksim / Ruam kulit',
    penjelasan: 'Timbulnya bintik-bintik merah, ruam, atau radang pada kulit yang biasanya terasa gatal. Mirip dengan じんましん (biduran/kaligata).',
    contoh1: '腕に湿疹ができてかゆい。\n(Terasa gatal karena muncul ruam/eksim di lengan.)',
    contoh2: 'エビを食べてじんましんが出た。\n(Makan udang lalu muncul biduran.)'
  },
  {
    id: 'm1h6_20',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '皮膚をかく',
    furigana: 'ひふをかく',
    arti: 'Menggaruk kulit',
    penjelasan: 'Menggunakan kuku untuk menggaruk permukaan kulit yang gatal.',
    contoh1: 'かゆくて皮膚をかいてしまった。\n(Karena gatal, saya tidak sengaja menggaruk kulit.)',
    contoh2: '寝ている間に顔をかく。\n(Menggaruk wajah saat sedang tidur.)'
  },
  {
    id: 'm1h6_21',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '猫に引っかかれる',
    furigana: 'ねこにひっかかれる',
    arti: 'Dicakar kucing',
    penjelasan: 'Bentuk pasif dari 引っかく (mencakar). Mengalami luka gores akibat kuku tajam kucing.',
    contoh1: '遊んでいたら、猫に引っかかれた。\n(Saat sedang bermain, saya dicakar kucing.)',
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
    arti: 'Perkembangan penyakit semakin cepat',
    penjelasan: 'Penyakit memburuk lebih cepat dari perkiraan (早まる - intransitif). Jika kita yang mempercepat sesuatu, gunakan 早める (hayameru - transitif).',
    contoh1: '予想より病気の進行が早まった。\n(Perkembangan penyakit lebih cepat dari dugaan.)',
    contoh2: '出発の時間を早める。\n(Mempercepat waktu keberangkatan. - Contoh 早める)'
  },
  {
    id: 'm1h6_23',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '体が弱る',
    furigana: 'からだがよわる',
    arti: 'Tubuh menjadi lemah',
    penjelasan: 'Stamina atau daya tahan tubuh menurun (intransitif), biasanya karena umur tua atau penyakit berkepanjangan.',
    contoh1: '年をとって体が弱ってきた。\n(Seiring bertambahnya usia, tubuh mulai melemah.)',
    contoh2: '病気で胃腸が弱っている。\n(Lambung dan usus melemah karena sakit.)'
  },
  {
    id: 'm1h6_24',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '痛みが強まる／弱まる',
    furigana: 'いたみがつよまる／よわまる',
    arti: 'Rasa sakit menguat / Melemah',
    penjelasan: 'Rasa sakit yang dirasakan bertambah parah (強まる) atau mulai mereda (弱まる). Bentuk transitifnya adalah 強める (menguatkan/meningkatkan) dan 弱める (melemahkan/menurunkan).',
    contoh1: '夜になると痛みが強まる。\n(Rasa sakitnya menguat saat malam hari.)',
    contoh2: '薬の効果で痛みが弱まった。\n(Rasa sakit melemah karena efek obat.)'
  },
  {
    id: 'm1h6_25',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '痛みを和らげる',
    furigana: 'いたみをやわらげる',
    arti: 'Meredakan rasa sakit',
    penjelasan: 'Mengurangi intensitas penderitaan, sakit, atau ketegangan (transitif). Bentuk intransitifnya adalah 和らぐ (yawaragu), yang berarti mendingan/mereda dengan sendirinya.',
    contoh1: '薬で痛みを和らげる。\n(Meredakan rasa sakit dengan obat.)',
    contoh2: '少し痛みが和らいだ。\n(Rasa sakitnya sudah sedikit mereda/mendingan. - Contoh 和らぐ)'
  },
  {
    id: 'm1h6_26',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: 'リハビリ（を）する',
    furigana: 'リハビリ（を）する',
    arti: 'Menjalani rehabilitasi',
    penjelasan: 'Melakukan terapi atau latihan fisik untuk mengembalikan fungsi tubuh setelah operasi, cedera, atau penyakit berat. Bisa juga disebut リハビリを受ける.',
    contoh1: '骨折の後、毎日リハビリをしている。\n(Setelah patah tulang, setiap hari menjalani rehabilitasi.)',
    contoh2: '専門病院でリハビリを受ける。\n(Menjalani rehabilitasi di rumah sakit spesialis.)'
  },
  {
    id: 'm1h6_27',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '入院する',
    furigana: 'にゅういんする',
    arti: 'Masuk rumah sakit / Dirawat inap',
    penjelasan: 'Masuk ke rumah sakit untuk mendapatkan perawatan intensif. Lawan katanya adalah 退院する (たいいんする) yang berarti keluar/pulang dari rumah sakit.',
    contoh1: '検査のために入院する。\n(Masuk rumah sakit untuk pemeriksaan.)',
    contoh2: '明日、無事に退院する予定だ。\n(Besok dijadwalkan pulang dari RS dengan selamat.)'
  },
  {
    id: 'm1h6_28',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '患者に付き添う',
    furigana: 'かんじゃにつきそう',
    arti: 'Mendampingi / Menemani pasien',
    penjelasan: 'Berada di sisi seseorang (terutama pasien, orang tua, atau anak) untuk memberikan bantuan, merawat, atau menemani mereka.',
    contoh1: '母親が病気の子供に付き添う。\n(Ibu mendampingi/menemani anaknya yang sedang sakit.)',
    contoh2: '病院の付き添いで疲れた。\n(Lelah karena menemani di rumah sakit.)'
  },
  {
    id: 'm1h6_29',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '面会に行く',
    furigana: 'めんかいにいく',
    arti: 'Pergi menjenguk / Bertemu',
    penjelasan: 'Pergi berkunjung untuk bertemu seseorang di institusi (seperti rumah sakit, penjara, atau asrama). Sinonim yang lebih spesifik untuk menjenguk orang sakit adalah お見舞いに行く (おみまいにいく).',
    contoh1: '入院中の友人の面会に行く。\n(Pergi menjenguk teman yang sedang dirawat inap.)',
    contoh2: '病院へお見舞いに行く。\n(Pergi ke rumah sakit untuk menjenguk orang sakit.)'
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
    penjelasan: 'Penyakit tumor ganas. Dalam tulisan Jepang, sering sekali ditulis menggunakan Katakana (ガン) daripada Kanji.',
    contoh1: '彼はガンと闘っている。\n(Dia sedang berjuang melawan kanker.)',
    contoh2: 'ガンの早期発見が大切だ。\n(Penemuan kanker sejak dini sangatlah penting.)'
  },
  {
    id: 'm1h6_31',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'ぜんそく',
    furigana: 'ぜんそく',
    arti: 'Asma',
    penjelasan: 'Penyakit saluran pernapasan. Serangan asma yang tiba-tiba disebut ぜんそくの発作 (ほっさ).',
    contoh1: '子供の頃からぜんそくを持っている。\n(Mempunyai asma sejak masih anak-anak.)',
    contoh2: '夜中にぜんそくの発作が起きた。\n(Terjadi serangan asma di tengah malam.)'
  },
  {
    id: 'm1h6_32',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '気管支炎',
    furigana: 'きかんしえん',
    arti: 'Bronkitis',
    penjelasan: 'Peradangan pada saluran bronkus (saluran udara ke paru-paru) yang menyebabkan batuk parah.',
    contoh1: '風邪をこじらせて気管支炎になった。\n(Flunya memburuk dan berubah menjadi bronkitis.)',
    contoh2: '気管支炎で激しく咳き込む。\n(Batuk keras karena bronkitis.)'
  },
  {
    id: 'm1h6_33',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '肺炎',
    furigana: 'はいえん',
    arti: 'Pneumonia / Radang paru-paru',
    penjelasan: 'Infeksi yang menyebabkan radang pada kantung udara di salah satu atau kedua paru-paru.',
    contoh1: 'お年寄りは肺炎になりやすい。\n(Lansia rentan terkena radang paru-paru.)',
    contoh2: '肺炎で一週間入院した。\n(Dirawat inap selama seminggu karena pneumonia.)'
  },
  {
    id: 'm1h6_34',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '皮膚炎',
    furigana: 'ひふえん',
    arti: 'Dermatitis / Radang kulit',
    penjelasan: 'Peradangan pada kulit. Varian alergi yang sangat umum disebut アトピー性皮膚炎 (Dermatitis atopik).',
    contoh1: '薬品に触れて皮膚炎を起こした。\n(Terkena radang kulit karena menyentuh bahan kimia.)',
    contoh2: 'アトピー性皮膚炎の薬を塗る。\n(Mengoleskan obat untuk dermatitis atopik.)'
  },
  {
    id: 'm1h6_35',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'うつ病',
    furigana: 'うつびょう',
    arti: 'Depresi',
    penjelasan: 'Penyakit gangguan kesehatan mental yang ditandai dengan kesedihan dan hilangnya minat yang terus-menerus.',
    contoh1: 'ストレスが原因でうつ病になる。\n(Terkena depresi karena stres.)',
    contoh2: 'うつ病の治療を受ける。\n(Menerima perawatan untuk depresi.)'
  },
  {
    id: 'm1h6_36',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '認知症',
    furigana: 'にんちしょう',
    arti: 'Demensia / Pikun',
    penjelasan: 'Penurunan fungsi kognitif yang memengaruhi ingatan dan perilaku. Salah satu jenisnya yang paling terkenal adalah アルツハイマー病 (Penyakit Alzheimer).',
    contoh1: '祖母は認知症の症状が出始めた。\n(Nenek mulai menunjukkan gejala demensia.)',
    contoh2: 'アルツハイマー病の研究が進んでいる。\n(Penelitian mengenai penyakit Alzheimer sedang mengalami kemajuan.)'
  },
  {
    id: 'm1h6_37',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '熱中症',
    furigana: 'ねっちゅうしょう',
    arti: 'Serangan panas / Heatstroke',
    penjelasan: 'Kondisi gawat darurat akibat tubuh terpapar cuaca panas ekstrem tanpa asupan cairan yang cukup.',
    contoh1: '真夏は熱中症に気をつけてください。\n(Tolong berhati-hati terhadap serangan panas di puncak musim panas.)',
    contoh2: '水分をとらないと熱中症になる。\n(Bisa terkena heatstroke kalau tidak minum air.)'
  },
  {
    id: 'm1h6_38',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '花粉症',
    furigana: 'かふんしょう',
    arti: 'Alergi serbuk sari / Hay fever',
    penjelasan: 'Alergi musiman di Jepang yang terjadi saat musim semi akibat serbuk sari pohon (terutama pohon cemara cedar). Gejalanya meliputi bersin dan mata gatal.',
    contoh1: '春になると花粉症で目が痛い。\n(Saat musim semi tiba, mataku sakit karena alergi serbuk sari.)',
    contoh2: '花粉症の薬を飲む。\n(Minum obat alergi serbuk sari.)'
  }
];

// Menambahkan kosakata dari file ini ke data master
window.vocabData.push(...kosakata_m1h6);