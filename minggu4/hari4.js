// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m4h4 = [
  // --- KANJI 体 (Karada/Tai) ---
  {
    id: 'm4h4_1',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '物体',
    furigana: 'ぶったい',
    arti: 'Benda / Objek',
    penjelasan: 'Benda fisik atau objek nyata yang bentuknya bisa dilihat atau dirasakan. Kata ini sering dipakai untuk nyebut benda yang belum jelas identitasnya, aneh, atau benda terbang (seperti UFO).',
    contoh1: 'なぞの物体。\n(Objek yang misterius.)',
    contoh2: '空に光る物体が見えた。\n(Kelihatan ada objek bercahaya di langit.)'
  },
  {
    id: 'm4h4_2',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '立体',
    furigana: 'りったい',
    arti: 'Bentuk tiga dimensi (3D)',
    penjelasan: 'Bentuk 3D yang punya panjang, lebar, dan volume atau kedalaman. Kebalikan dari 平面 (heimen) atau dua dimensi. Sering dipakai dalam seni, geometri, atau gambar yang kelihatan nyata/hidup.',
    contoh1: '立体的な絵。\n(Lukisan tiga dimensi / yang kelihatan hidup.)',
    contoh2: 'この図形は立体です。\n(Bentuk geometri ini adalah tiga dimensi.)'
  },
  {
    id: 'm4h4_3',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '正体',
    furigana: 'しょうたい',
    arti: 'Wujud asli / Identitas asli',
    penjelasan: 'Sifat, karakter, atau identitas asli dari seseorang atau sesuatu yang sebelumnya disembunyikan. Biasanya dipakai saat ada rahasia, sosok misterius, atau kebenaran yang akhirnya terbongkar.',
    contoh1: '正体を現す。\n(Menunjukkan wujud/identitas aslinya.)',
    contoh2: 'ついに犯人の正体が分かった。\n(Akhirnya identitas asli si penjahat ketahuan.)'
  },
  
  // --- KANJI 意 (I) ---
  {
    id: 'm4h4_4',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '意向',
    furigana: 'いこう',
    arti: 'Niat / Maksud / Keinginan',
    penjelasan: 'Niat atau apa yang ingin dilakukan oleh seseorang/suatu pihak. Kata ini sering dipakai di situasi formal atau bisnis buat nanyain pendapat, rencana, atau kemauan dari klien/lawan bicara.',
    contoh1: '先方の意向を聞く。\n(Mendengar niat/maksud dari pihak sana.)',
    contoh2: '社長の意向に沿って計画を進める。\n(Meneruskan rencana sesuai dengan keinginan direktur.)'
  },
  {
    id: 'm4h4_5',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '意思',
    furigana: 'いし',
    arti: 'Kemauan / Tekad',
    penjelasan: 'Pikiran atau tekad kuat seseorang untuk melakukan (atau tidak melakukan) sesuatu. Fokusnya ke kekuatan hati dan bagaimana kemauan itu ditunjukkan ke orang lain.',
    contoh1: '意思表示をする。\n(Menunjukkan/mengekspresikan kemauan.)',
    contoh2: '彼女は意思が固い。\n(Dia punya kemauan/tekad yang kuat.)'
  },
  {
    id: 'm4h4_6',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '意地',
    furigana: 'いじ',
    arti: 'Keras kepala / Gengsi / Ego',
    penjelasan: 'Sikap nggak mau ngalah atau keras kepala demi menjaga ego/harga diri. Bisa berarti gengsi yang negatif (batu), atau keteguhan hati yang pantang menyerah.',
    contoh1: '意地を張る。\n(Keras kepala / nurutin gengsi.)',
    contoh2: 'あの子は意地っ張りだ。\n(Anak itu keras kepala banget.)'
  },
  {
    id: 'm4h4_7',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '意図',
    furigana: 'いと',
    arti: 'Niat / Maksud / Tujuan',
    penjelasan: 'Tujuan atau motif tertentu di balik suatu tindakan. Dipakai kalau seseorang dengan sengaja merencanakan sesuatu buat dapet hasil yang dia mau.',
    contoh1: '早期解散を意図する。\n(Bermaksud/merencanakan pembubaran parlemen lebih awal.)',
    contoh2: '意図的にルールを破った。\n(Melanggar aturan secara sengaja.)'
  },

  // --- KANJI 見 (Mi/Ken) ---
  {
    id: 'm4h4_8',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '見地',
    furigana: 'けんち',
    arti: 'Sudut pandang / Perspektif',
    penjelasan: 'Sudut pandang atau dasar pemikiran buat menilai suatu masalah. Biasanya dipakai di obrolan yang lebih profesional, akademik, atau resmi, misalnya dari sudut pandang medis, hukum, atau pendidikan.',
    contoh1: '医学的見地から反対する。\n(Menentang dari sudut pandang medis.)',
    contoh2: '教育的な見地から見ると、それは重要だ。\n(Kalau dilihat dari perspektif pendidikan, hal itu sangat penting.)'
  },
  {
    id: 'm4h4_9',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '会見',
    furigana: 'かいけん',
    arti: 'Konferensi pers / Pertemuan resmi',
    penjelasan: 'Pertemuan resmi, wawancara, atau konferensi dengan wartawan/publik untuk menyampaikan informasi penting. Paling sering dipakai dalam frasa "kisha kaiken" (konferensi pers wartawan).',
    contoh1: '記者会見を開く。\n(Menggelar konferensi pers.)',
    contoh2: '首相は会見で新しい政策を発表した。\n(Perdana Menteri mengumumkan kebijakan baru dalam konferensi resminya.)'
  },
  {
    id: 'm4h4_10',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '見通し',
    furigana: 'みとおし',
    arti: 'Jarak pandang / Prospek / Prediksi',
    penjelasan: 'Punya dua arti utama: (1) Jarak pandang fisik (misalnya pandangan di jalan raya terhalang kabut); (2) Prospek atau kemampuan buat memprediksi dan meramal masa depan dari suatu kondisi.',
    contoh1: '見通しの悪い道路。\n(Jalanan dengan jarak pandang yang buruk.)',
    contoh2: '来年度の経済の見通し。\n(Prediksi/prospek ekonomi untuk tahun depan.)'
  },
  {
    id: 'm4h4_11',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '見下す',
    furigana: 'みくだす',
    arti: 'Meremehkan / Merendahkan',
    penjelasan: 'Sikap merendahkan atau memandang hina orang lain. Merasa diri sendiri lebih hebat dan memperlakukan orang lain dengan cara yang bikin mental/emosi mereka jatuh.',
    contoh1: '人を見下す。\n(Merendahkan orang lain.)',
    contoh2: '彼は貧しい人々を見下している。\n(Dia merendahkan orang-orang miskin.)'
  },
  {
    id: 'm4h4_12',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '見下ろす',
    furigana: 'みおろす',
    arti: 'Melihat ke bawah (secara fisik)',
    penjelasan: 'Tindakan fisik melihat ke bawah dari tempat yang tinggi. Misalnya melihat pemandangan dari atas gedung, atap, atau puncak gunung.',
    contoh1: 'ビルの屋上から見下ろす。\n(Melihat ke bawah dari atap gedung.)',
    contoh2: '山頂から町を見下ろした。\n(Melihat pemandangan kota di bawah dari puncak gunung.)'
  },
  {
    id: 'm4h4_13',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '見合わせる',
    furigana: 'みあわせる',
    arti: 'Saling tatap / Menunda',
    penjelasan: 'Punya dua arti beda: (1) saling tatap-tatapan muka karena kaget atau ragu; (2) menunda atau membatalkan sementara suatu rencana (seperti jadwal kereta) karena alasan keamanan atau cuaca buruk.',
    contoh1: 'お互いに顔を見合わせる。\n(Saling bertatap-tatapan muka.)',
    contoh2: '大雨のため、出発を見合わせる。\n(Menunda keberangkatan karena hujan lebat.)'
  },

  // --- KANJI 着 (Chaku) ---
  {
    id: 'm4h4_14',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '着手',
    furigana: 'ちゃくしゅ',
    arti: 'Mulai mengerjakan / Turun tangan',
    penjelasan: 'Mulai mengerjakan suatu pekerjaan, proyek, atau rencana besar. Sering dipakai di situasi resmi, bisnis, atau saat polisi mulai menyelidiki suatu kasus.',
    contoh1: '新しい事業に着手する。\n(Mulai mengerjakan bisnis/proyek baru.)',
    contoh2: '警察は事件の調査に着手した。\n(Polisi udah mulai menyelidiki kasus tersebut.)'
  },
  {
    id: 'm4h4_15',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '着色',
    furigana: 'ちゃくしょく',
    arti: 'Mewarnai / Memberi warna',
    penjelasan: 'Proses ngasih atau nyampurin warna ke suatu bahan, kayak makanan, lukisan, atau produk pabrik. Sering banget dipakai bareng kata "ryou" (着色料) yang artinya pewarna buatan.',
    contoh1: '着色料を使用する。\n(Menggunakan bahan pewarna.)',
    contoh2: 'このお菓子は人工的に着色されている。\n(Jajanan ini diwarnai secara buatan.)'
  },
  {
    id: 'm4h4_16',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '着目',
    furigana: 'ちゃくもく',
    arti: 'Fokus pada / Memperhatikan (suatu poin)',
    penjelasan: 'Fokus atau ngasih perhatian khusus ke satu titik, aspek, atau sifat tertentu karena dianggap unik, penting, atau punya potensi bagus ke depannya.',
    contoh1: '子どもの個性に着目する。\n(Fokus memperhatikan keperibadian unik anak tersebut.)',
    contoh2: '新しい技術に着目して研究を進める。\n(Meneruskan penelitian dengan fokus pada teknologi baru.)'
  },
  {
    id: 'm4h4_17',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '着工',
    furigana: 'ちゃっこう',
    arti: 'Mulai konstruksi / Peletakan batu pertama',
    penjelasan: 'Istilah teknis yang khusus dipakai waktu pengerjaan awal konstruksi atau pembangunan fisik mulai jalan, seperti bangun gedung, perumahan, atau bendungan.',
    contoh1: '新ビルは来月着工する。\n(Gedung baru akan mulai dibangun bulan depan.)',
    contoh2: 'ダムの着工が遅れている。\n(Proyek pengerjaan bendungan mengalami keterlambatan.)'
  },

  // --- KANJI 日 (Nichi/Hi) ---
  {
    id: 'm4h4_18',
    minggu: '4',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '日夜',
    furigana: 'にちや',
    arti: 'Siang dan malam / Tanpa henti',
    penjelasan: 'Artinya sama kayak 昼も夜も (hiru mo yoru mo). Menggambarkan usaha keras ngelakuin sesuatu secara terus-terusan, siang dan malam, tanpa kenal waktu.',
    contoh1: '日夜勉強する。\n(Belajar siang dan malam.)',
    contoh2: '彼は研究に日夜没頭している。\n(Dia fokus ngerjain penelitiannya siang dan malam tanpa henti.)'
  },
  {
    id: 'm4h4_19',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '日々',
    furigana: 'ひび',
    arti: 'Hari-hari / Keseharian',
    penjelasan: 'Menunjuk pada keseharian. Sering dipakai buat nyeritain gaya hidup harian, rutinitas, atau perasaan tentang kehidupan yang dilewati dari hari ke hari.',
    contoh1: '日々の暮らしに困る。\n(Kesulitan dalam kehidupan sehari-hari.)',
    contoh2: '平和な日々が続くことを願っている。\n(Berharap hari-hari yang damai ini terus berlanjut.)'
  },
  {
    id: 'm4h4_20',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '日ごろ',
    furigana: 'ひごろ',
    arti: 'Kebiasaan sehari-hari',
    penjelasan: 'Merujuk pada kebiasaan, rutinitas, atau kelakuan yang udah biasa dilakuin sehari-hari sejak lama. Bisa untuk kebiasaan yang baik maupun yang buruk.',
    contoh1: '日ごろの行い。\n(Kelakuan/perilaku sehari-hari.)',
    contoh2: '日ごろから運動するようにしている。\n(Saya biasakan olahraga sebagai rutinitas sehari-hari.)'
  },
  {
    id: 'm4h4_21',
    minggu: '4',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '終日',
    furigana: 'しゅうじつ',
    arti: 'Sepanjang hari / Seharian penuh',
    penjelasan: 'Kata yang lebih resmi dan formal buat "sepanjang hari penuh" (ichinichijuu). Sering banget muncul di papan pengumuman, pemberitahuan resmi, atau laporan bisnis.',
    contoh1: '終日パソコンに向かう。\n(Nghadap komputer seharian penuh.)',
    contoh2: 'この道路は終日通行止めです。\n(Jalan ini ditutup untuk lalu lintas sepanjang hari.)'
  },

  // --- KANJI 自 (Ji) ---
  {
    id: 'm4h4_22',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '自立',
    furigana: 'じりつ',
    arti: 'Mandiri / Berdikari',
    penjelasan: 'Kondisi di mana seseorang udah bisa berdiri sendiri tanpa bergantung pada bantuan orang lain, baik secara ekonomi, mental, maupun gaya hidup.',
    contoh1: '女性の自立。\n(Kemandirian wanita.)',
    contoh2: '親から自立して一人暮らしを始める。\n(Mulai hidup mandiri pisah dari orang tua dan tinggal sendiri.)'
  },
  {
    id: 'm4h4_23',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '自主',
    furigana: 'じしゅ',
    arti: 'Inisiatif sendiri / Keinginan sendiri',
    penjelasan: 'Melakukan sesuatu atas inisiatif dan kemauan sendiri. Nggak nunggu disuruh, diarahkan, atau dikontrol sama pihak lain.',
    contoh1: '自主的にトレーニングする。\n(Latihan atas inisiatif sendiri / mandiri.)',
    contoh2: '生徒の自主性を尊重する。\n(Menghargai inisiatif dan kemandirian para siswa.)'
  },
  {
    id: 'm4h4_24',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '自首',
    furigana: 'じしゅ',
    arti: 'Menyerahkan diri',
    penjelasan: 'Tindakan yang biasanya dilakukan sama pelaku kejahatan yang secara sukarela datang ke polisi buat ngakuin kesalahan/kejahatan yang udah dia lakuin.',
    contoh1: '警察に自首する。\n(Menyerahkan diri ke polisi.)',
    contoh2: '犯人は罪を悔いて自首した。\n(Penjahat itu menyesali perbuatannya lalu menyerahkan diri.)'
  },

  // --- KANJI 売 (Bai/U) ---
  {
    id: 'm4h4_25',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '小売り',
    furigana: 'こうり',
    arti: 'Jual eceran / Ritel',
    penjelasan: 'Jualan produk langsung ke konsumen akhir dalam jumlah sedikit (satuan). Kebalikan dari jualan grosir atau borongan.',
    contoh1: 'これは小売りで５千円だ。\n(Barang ini harga ecerannya 5 ribu yen.)',
    contoh2: '小売店で働く。\n(Bekerja di toko ritel/eceran.)'
  },
  {
    id: 'm4h4_26',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '前売り',
    furigana: 'まえうり',
    arti: 'Jualan awal / Pre-sale',
    penjelasan: 'Sistem jual tiket bioskop, konser, atau produk sebelum hari-H acara resminya mulai. Biasanya harganya lebih murah dari harga normal.',
    contoh1: '映画の前売り券を買う。\n(Beli tiket bioskop pre-sale / jualan awal.)',
    contoh2: 'コンサートの前売りは明日から始まります。\n(Pre-sale tiket konser bakal mulai besok.)'
  },
  {
    id: 'm4h4_27',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '売買',
    furigana: 'ばいばい',
    arti: 'Jual beli / Perdagangan',
    penjelasan: 'Proses atau aktivitas jual beli barang, jasa, properti, atau saham. Ini adalah istilah ekonomi dan bisnis yang formal.',
    contoh1: '株を売買する。\n(Melakukan jual beli saham.)',
    contoh2: '不動産の売買契約を結ぶ。\n(Tanda tangan kontrak jual beli properti/tanah.)'
  },

  // --- KANJI 間 (Kan/Ai/Ma) ---
  {
    id: 'm4h4_28',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '合間',
    furigana: 'あいま',
    arti: 'Waktu luang (di sela kesibukan) / Jeda',
    penjelasan: 'Waktu luang atau jeda singkat di sela-sela rutinitas yang sibuk. Misalnya waktu senggang sebentar pas lagi istirahat kerja atau ngerjain tugas rumah.',
    contoh1: '仕事の合間。\n(Waktu luang di sela-sela kesibukan kerja.)',
    contoh2: '家事の合間に本を読む。\n(Membaca buku di sela-sela ngerjain pekerjaan rumah.)'
  },
  {
    id: 'm4h4_29',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '空間',
    furigana: 'くうかん',
    arti: 'Ruang / Ruangan / Spasi',
    penjelasan: 'Area, spasi, atau tempat fisik. Bisa merujuk ke ruang kosong/sempit di dalam kamar, sampai ke luar angkasa (uchuu kuukan) yang luas.',
    contoh1: '狭い空間を利用する。\n(Memanfaatkan ruangan/spasi yang sempit.)',
    contoh2: 'リラックスできる空間を作りたい。\n(Aku pengen bikin ruangan yang bikin orang bisa rileks.)'
  },
  {
    id: 'm4h4_30',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '民間',
    furigana: 'みんかん',
    arti: 'Swasta / Sipil',
    penjelasan: 'Merujuk ke perusahaan, organisasi, atau pihak umum (swasta) yang tidak dikontrol, diurus, atau dimiliki oleh pemerintah.',
    contoh1: '民間企業。\n(Perusahaan swasta.)',
    contoh2: 'このプロジェクトは民間の資金で運営されている。\n(Proyek ini dijalankan pakai dana dari pihak swasta.)'
  }
];

window.vocabData.push(...kosakata_m4h4);