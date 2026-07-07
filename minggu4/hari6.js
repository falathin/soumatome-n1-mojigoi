// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m4h6 = [
  // --- KANJI 国 (Koku) ---
  {
    id: 'm4h6_1',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '国民',
    furigana: 'こくみん',
    arti: 'Warga negara / Rakyat',
    penjelasan: 'Merujuk pada seluruh individu atau orang-orang yang secara sah menjadi anggota atau penduduk dari suatu negara.',
    contoh1: '国民の義務。\n(Kewajiban warga negara.)',
    contoh2: '政府は国民の声を聞くべきだ。\n(Pemerintah seharusnya mendengarkan suara rakyat.)'
  },
  {
    id: 'm4h6_2',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '国家',
    furigana: 'こっか',
    arti: 'Negara',
    penjelasan: 'Negara dilihat sebagai sebuah entitas politik, struktur pemerintahan yang berdaulat, atau institusi yang mewakili sebuah bangsa.',
    contoh1: '国家試験。\n(Ujian tingkat nasional / negara.)',
    contoh2: '国家の安全を守る。\n(Menjaga keamanan negara.)'
  },
  {
    id: 'm4h6_3',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '国会',
    furigana: 'こっかい',
    arti: 'Parlemen / Majelis Nasional',
    penjelasan: 'Badan legislatif tertinggi di suatu negara tempat para wakil rakyat berkumpul untuk merumuskan dan mengesahkan undang-undang (di Jepang disebut Diet).',
    contoh1: '国会を解散する。\n(Membubarkan parlemen.)',
    contoh2: '国会で新しい法律が承認された。\n(Undang-undang baru telah disetujui di parlemen.)'
  },
  {
    id: 'm4h6_4',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '国有',
    furigana: 'こくゆう',
    arti: 'Milik negara',
    penjelasan: 'Segala sesuatu, seperti tanah, kekayaan alam, properti, atau perusahaan, yang secara resmi dimiliki, dikelola, dan dikendalikan oleh negara atau pemerintah.',
    contoh1: '国有財産。\n(Kekayaan/aset milik negara.)',
    contoh2: 'この土地は国有地です。\n(Tanah ini adalah tanah milik negara.)'
  },
  {
    id: 'm4h6_5',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '母国',
    furigana: 'ぼこく',
    arti: 'Tanah air / Negara asal',
    penjelasan: 'Negara tempat seseorang dilahirkan atau negara asalnya. Kata ini sering digunakan saat seseorang sedang menetap di luar negeri dan membicarakan negaranya sendiri.',
    contoh1: '母国に帰る。\n(Pulang ke tanah air/negara asal.)',
    contoh2: '母国の料理が懐かしい。\n(Merasa rindu dengan masakan dari negara asal.)'
  },
  {
    id: 'm4h6_6',
    minggu: '4',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '帰国',
    furigana: 'きこく',
    arti: 'Pulang ke negara asal',
    penjelasan: 'Tindakan atau proses kembali ke negara asal seseorang setelah bepergian, menempuh pendidikan, atau tinggal menetap di luar negeri.',
    contoh1: '帰国子女。\n(Anak-anak yang kembali ke negara asalnya setelah lama tinggal di luar negeri.)',
    contoh2: '来月、日本へ帰国します。\n(Bulan depan, saya akan pulang kembali ke Jepang.)'
  },
  {
    id: 'm4h6_7',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '国土',
    furigana: 'こくど',
    arti: 'Wilayah negara / Teritorial',
    penjelasan: 'Keseluruhan area daratan, wilayah, atau teritori geografis yang berada secara sah di bawah kedaulatan sebuah negara.',
    contoh1: '国土計画。\n(Perencanaan wilayah nasional.)',
    contoh2: '日本の国土は狭い。\n(Wilayah negara Jepang itu sempit.)'
  },

  // --- KANJI 新 (Shin) ---
  {
    id: 'm4h6_8',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '新入り',
    furigana: 'しんいり',
    arti: 'Pendatang baru / Anggota baru',
    penjelasan: 'Seseorang yang baru saja bergabung dengan sebuah kelompok, klub, atau lingkungan tertentu. Kata ini memiliki nuansa percakapan kasual.',
    contoh1: '新入りの会員。\n(Anggota pendatang baru.)',
    contoh2: '彼はこのチームの新入りだ。\n(Dia adalah anggota pendatang baru di tim ini.)'
  },
  {
    id: 'm4h6_9',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '新入',
    furigana: 'しんにゅう',
    arti: 'Masuk baru (sekolah/perusahaan)',
    penjelasan: 'Istilah ini sering digunakan sebagai awalan (prefix) yang disematkan pada kata lain untuk merujuk pada orang yang baru masuk ke sebuah institusi.',
    contoh1: '新入生。\n(Siswa / mahasiswa baru.)',
    contoh2: '新入社員の研修が始まる。\n(Pelatihan untuk karyawan baru akan dimulai.)'
  },
  {
    id: 'm4h6_10',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '新人',
    furigana: 'しんじん',
    arti: 'Wajah baru / Rookie',
    penjelasan: 'Orang yang baru merintis karir, memulai debut, atau baru muncul di suatu bidang profesional, seperti dalam dunia hiburan, olahraga, atau bisnis.',
    contoh1: '新人歌手。\n(Penyanyi pendatang baru.)',
    contoh2: '彼は今年の新人賞を取った。\n(Dia memenangkan penghargaan wajah baru / rookie of the year tahun ini.)'
  },

  // --- KANJI 土 (Do/To) ---
  {
    id: 'm4h6_11',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '土台',
    furigana: 'どだい',
    arti: 'Fondasi / Dasar',
    penjelasan: 'Bagian paling bawah dan kuat yang menopang struktur bangunan. Secara kiasan, berarti dasar pemikiran atau konsep untuk hal yang lebih besar.',
    contoh1: '家の土台。\n(Fondasi rumah.)',
    contoh2: '良い教育は人生の土台となる。\n(Pendidikan yang baik akan menjadi fondasi kehidupan.)'
  },
  {
    id: 'm4h6_12',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '土手',
    furigana: 'どて',
    arti: 'Tanggul / Bantaran sungai',
    penjelasan: 'Gundukan tanah panjang dan tinggi yang sengaja dibuat di pinggiran sungai atau danau untuk mencegah air meluap dan menyebabkan banjir.',
    contoh1: '土手を歩く。\n(Berjalan di sepanjang tanggul sungai.)',
    contoh2: '土手に桜が咲いている。\n(Bunga sakura mekar bermekaran di tanggul sungai.)'
  },
  {
    id: 'm4h6_13',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '土砂',
    furigana: 'どしゃ',
    arti: 'Tanah dan pasir / Lumpur',
    penjelasan: 'Campuran materi yang terdiri dari tanah, lumpur, pasir, dan bebatuan kecil. Sering digunakan ketika membicarakan bencana alam longsor (土砂崩れ).',
    contoh1: '土砂崩れが起きる。\n(Terjadi bencana tanah longsor.)',
    contoh2: '大雨で土砂が流れ込んだ。\n(Tanah dan lumpur mengalir masuk akibat hujan lebat.)'
  },

  // --- KANJI 業 (Gyou) ---
  {
    id: 'm4h6_14',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '業者',
    furigana: 'ぎょうしゃ',
    arti: 'Pelaku usaha / Vendor / Agen',
    penjelasan: 'Seseorang, pihak, atau perusahaan yang menjalankan sebuah bisnis perniagaan tertentu untuk menyediakan barang, jasa, atau layanan kepada pihak lain.',
    contoh1: '旅行業者。\n(Agen perjalanan / travel agent.)',
    contoh2: '輸出業者と契約を結んだ。\n(Telah menandatangani kontrak dengan vendor eksportir.)'
  },
  {
    id: 'm4h6_15',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '事業',
    furigana: 'じぎょう',
    arti: 'Proyek bisnis / Usaha',
    penjelasan: 'Aktivitas perniagaan, proyek, atau usaha yang dijalankan secara serius dan terorganisir dalam skala yang besar demi kepentingan ekonomi, publik, atau sosial.',
    contoh1: '事業を始める。\n(Memulai usaha / proyek bisnis.)',
    contoh2: '社会事業に貢献する。\n(Berkontribusi pada proyek/pekerjaan sosial.)'
  },
  {
    id: 'm4h6_16',
    minggu: '4',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '分業',
    furigana: 'ぶんぎょう',
    arti: 'Pembagian kerja',
    penjelasan: 'Metode membagi-bagikan tahapan pekerjaan dalam sebuah proses produksi supaya masing-masing orang mengerjakan bagian spesifik guna mencapai efisiensi.',
    contoh1: '分業で仕事をする。\n(Bekerja dengan membagi-bagikan tugas/pekerjaan.)',
    contoh2: '工場では分業が進んでいる。\n(Sistem pembagian kerja sangat dikembangkan di pabrik itu.)'
  },

  // --- KANJI 音 (Ne/On) ---
  {
    id: 'm4h6_17',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '音色',
    furigana: 'ねいろ',
    arti: 'Warna suara / Timbre',
    penjelasan: 'Karakteristik khas, nuansa, atau kualitas suara yang dihasilkan oleh alat musik atau suara seseorang, yang membuatnya berbeda dari sumber suara yang lain.',
    contoh1: '澄んだ音色。\n(Warna suara/timbre yang sangat jernih.)',
    contoh2: 'バイオリンの美しい音色。\n(Warna suara yang indah dari sebuah biola.)'
  },
  {
    id: 'm4h6_18',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '本音',
    furigana: 'ほんね',
    arti: 'Niat asli / Perasaan sebenarnya',
    penjelasan: 'Perasaan, pendapat, atau niat hati yang seutuhnya nyata dan sebenarnya, yang kerap kali disembunyikan dan berlawanan dengan apa yang diekspresikan di publik (建前 / tatemae).',
    contoh1: '本音と建前。\n(Niat asli dan basa-basi/sikap di depan umum.)',
    contoh2: 'お酒を飲んで本音を語る。\n(Mengutarakan perasaan yang sebenarnya setelah meminum alkohol.)'
  },

  // --- KANJI 発 (Hatsu/Hotsu) ---
  {
    id: 'm4h6_19',
    minggu: '4',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '発足',
    furigana: 'ほっそく',
    arti: 'Peresmian / Mulai beroperasi',
    penjelasan: 'Momen awal di mana sebuah organisasi, komite, lembaga, atau sistem yang baru dibentuk secara resmi diluncurkan dan mulai menjalankan fungsinya (perhatikan: dibaca "hossoku", bukan "hassoku").',
    contoh1: '組織が発足する。\n(Organisasi telah diresmikan/mulai beroperasi.)',
    contoh2: '新しい委員会が発足した。\n(Sebuah komite yang baru telah dibentuk dan mulai berjalan.)'
  },
  {
    id: 'm4h6_20',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '自発',
    furigana: 'じはつ',
    arti: 'Inisiatif sendiri / Spontan',
    penjelasan: 'Melakukan atau memulai suatu perbuatan atas dasar dorongan dan kemauan dari dalam diri sendiri secara proaktif, tanpa paksaan atau suruhan dari pihak lain.',
    contoh1: '自発的に勉強する。\n(Belajar atas inisiatif diri sendiri.)',
    contoh2: '社員の自発性を高める。\n(Meningkatkan inisiatif dan kemandirian para karyawan.)'
  },

  // --- KANJI 風 (Fuu) ---
  {
    id: 'm4h6_21',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '風習',
    furigana: 'ふうしゅう',
    arti: 'Adat istiadat / Kebiasaan (sosial)',
    penjelasan: 'Praktik, budaya, adat, atau kebiasaan turun-temurun yang masih terus dijaga dan dilakukan oleh masyarakat di dalam wilayah atau kelompok sosial tertentu.',
    contoh1: '昔の風習を守る。\n(Menjaga dan melestarikan adat istiadat peninggalan masa lalu.)',
    contoh2: 'この地域には独特の風習がある。\n(Di wilayah ini terdapat adat istiadat yang unik dan khas.)'
  },
  {
    id: 'm4h6_22',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '風土',
    furigana: 'ふうど',
    arti: 'Kondisi alam / Iklim dan topografi',
    penjelasan: 'Karakteristik alam yang melingkupi iklim, cuaca, jenis tanah, dan lingkungan alam di suatu daerah, yang secara langsung membentuk budaya dan gaya hidup penduduk lokalnya.',
    contoh1: '日本の風土。\n(Kondisi alam dan iklim wilayah Jepang.)',
    contoh2: 'その土地の風土に合った家。\n(Rumah yang dibangun menyesuaikan dengan kondisi alam di tanah tersebut.)'
  },

  // --- KANJI 春 (Shun) ---
  {
    id: 'm4h6_23',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '青春',
    furigana: 'せいしゅん',
    arti: 'Masa muda (remaja)',
    penjelasan: 'Periode kehidupan di rentang masa remaja hingga awal usia dewasa, yang sarat dengan energi, gairah, harapan, romansa, keluguan, serta pencarian jati diri.',
    contoh1: '青春時代。\n(Masa-masa muda.)',
    contoh2: '青春を楽しむ。\n(Menikmati masa muda dengan sebaik mungkin.)'
  },
  {
    id: 'm4h6_24',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '思春期',
    furigana: 'ししゅんき',
    arti: 'Masa pubertas',
    penjelasan: 'Fase medis dan psikologis saat anak-anak bertransisi menuju tahap keremajaan dan kedewasaan, biasanya ditandai dengan perubahan biologis dan emosi yang labil.',
    contoh1: '思春期の少年少女。\n(Anak laki-laki dan perempuan di usia pubertas/remaja.)',
    contoh2: '彼は今、思春期で反抗的だ。\n(Dia sekarang sedang berada di masa pubertas dan bersikap memberontak.)'
  },

  // --- KANJI 台 (Dai) ---
  {
    id: 'm4h6_25',
    minggu: '4',
    hari: '6',
    kategori: 'kata sifat',
    kanji: '台無し',
    furigana: 'だいなし',
    arti: 'Hancur / Sia-sia / Berantakan',
    penjelasan: 'Situasi atau keadaan di mana sesuatu (rencana, karya, usaha, pemandangan) yang sudah dibangun dengan baik berubah menjadi berantakan, rusak, atau tidak berguna lagi.',
    contoh1: '雨で桜が台無しになる。\n(Bunga sakura menjadi hancur/berantakan dikarenakan hujan.)',
    contoh2: '今までの努力が台無しになった。\n(Seluruh upaya/usaha yang telah dilakukan selama ini menjadi sia-sia.)'
  },
  {
    id: 'm4h6_26',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '台本',
    furigana: 'だいほん',
    arti: 'Naskah / Skrip',
    penjelasan: 'Sebuah dokumen atau buku teks tertulis yang berisikan alur cerita, dialog, dan petunjuk arah bagi sutradara maupun para aktor dalam sebuah film atau pertunjukan teater.',
    contoh1: '台本を読む。\n(Membaca naskah/skrip.)',
    contoh2: '映画の台本を覚える。\n(Menghafalkan naskah dialog film tersebut.)'
  },

  // --- その他 (Lain-lain) ---
  {
    id: 'm4h6_27',
    minggu: '4',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '強行',
    furigana: 'きょうこう',
    arti: 'Memaksakan / Melakukan secara paksa',
    penjelasan: 'Tindakan ngotot dalam melaksanakan atau memaksakan sebuah rencana atau kebijakan meskipun terdapat banyak tentangan, kerugian, atau kondisi alam yang sangat buruk.',
    contoh1: '増税を強行する。\n(Memaksakan implementasi kenaikan pajak.)',
    contoh2: '悪天候の中で試合を強行した。\n(Memaksakan pertandingan untuk tetap digelar di tengah cuaca yang buruk.)'
  },
  {
    id: 'm4h6_28',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '正味',
    furigana: 'しょうみ',
    arti: 'Bersih (berat/waktu) / Aktual',
    penjelasan: 'Menyatakan kuantitas, berat, atau waktu riil/bersih setelah dikurangi bagian yang tidak esensial (seperti mengurangi waktu istirahat dari total jam kerja, atau berat wadah kemasan).',
    contoh1: '正味８時間働く。\n(Bekerja selama 8 jam bersih / secara aktual.)',
    contoh2: 'このお菓子の正味は100グラムです。\n(Berat bersih dari camilan ini adalah 100 gram.)'
  },
  {
    id: 'm4h6_29',
    minggu: '4',
    hari: '6',
    kategori: 'kata sifat',
    kanji: '有力',
    furigana: 'ゆうりょく',
    arti: 'Kuat / Paling potensial / Berpengaruh',
    penjelasan: 'Memiliki kekuasaan, pengaruh, dukungan besar, atau memiliki kemungkinan dan probabilitas yang paling tinggi untuk terpilih, menang, atau benar (misal: kandidat kuat, bukti kuat).',
    contoh1: '有力な政党。\n(Partai politik yang berkuasa / memiliki pengaruh kuat.)',
    contoh2: '彼が次の社長の最有力候補だ。\n(Dia adalah kandidat paling terkuat/potensial untuk menjadi direktur perusahaan selanjutnya.)'
  },
  {
    id: 'm4h6_30',
    minggu: '4',
    hari: '6',
    kategori: 'kata sifat',
    kanji: '早急',
    furigana: 'そうきゅう',
    arti: 'Segera / Sangat mendesak',
    penjelasan: 'Tingkat urgensi tinggi yang menuntut agar sebuah permasalahan, tindakan, atau urusan diselesaikan dengan secepat mungkin tanpa boleh ditunda. (Juga bisa dibaca "sakkyuu").',
    contoh1: '早急に解決する。\n(Menyelesaikan persoalan tersebut dengan segera.)',
    contoh2: '早急な対応が求められる。\n(Tanggapan atau tindakan yang segera sangatlah dituntut dalam hal ini.)'
  },
  {
    id: 'm4h6_31',
    minggu: '4',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '思考',
    furigana: 'しこう',
    arti: 'Pemikiran / Nalar berpikir',
    penjelasan: 'Proses mental kognitif dalam otak yang berfungsi memproses informasi, mempertimbangkan masalah secara logis, dan merumuskan kesimpulan atau ide.',
    contoh1: '思考力が低下する。\n(Kemampuan nalar berpikir mengalami penurunan / sulit untuk berpikir lurus.)',
    contoh2: 'プラス思考を持つ。\n(Mempunyai pemikiran atau pola pikir yang positif.)'
  },
  {
    id: 'm4h6_32',
    minggu: '4',
    hari: '6',
    kategori: 'kata benda',
    kanji: '口頭',
    furigana: 'こうとう',
    arti: 'Lisan / Secara verbal',
    penjelasan: 'Cara berkomunikasi, menjawab pertanyaan, menyampaikan pesan, atau memberikan laporan dengan menggunakan ucapan/perkataan langsung dari mulut, bukan melalui tulisan dokumen.',
    contoh1: '口頭で報告する。\n(Melaporkan atau memberitahu secara lisan.)',
    contoh2: '口頭試験が行われた。\n(Ujian lisan telah dilaksanakan.)'
  }
];

window.vocabData.push(...kosakata_m4h6);