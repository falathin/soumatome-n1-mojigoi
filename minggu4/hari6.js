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
    penjelasan: 'Semua orang yang menjadi warga atau penduduk resmi di suatu negara.',
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
    penjelasan: 'Negara sebagai sebuah lembaga, pemerintahan, atau kesatuan politik.',
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
    penjelasan: 'Tempat para wakil rakyat (parlemen) berkumpul untuk membuat undang-undang. Di Jepang disebut "Diet".',
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
    penjelasan: 'Barang, tanah, atau perusahaan yang dimiliki dan diurus oleh negara/pemerintah.',
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
    penjelasan: 'Negara asal atau tanah kelahiran. Sering dipakai saat orang tersebut sedang berada di luar negeri.',
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
    penjelasan: 'Pulang ke negara asal setelah pergi atau tinggal di luar negeri.',
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
    penjelasan: 'Seluruh wilayah daratan atau daerah yang menjadi milik suatu negara.',
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
    penjelasan: 'Orang yang baru bergabung di suatu kelompok, klub, atau tempat kerja. Kesannya lebih kasual.',
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
    penjelasan: 'Kata awalan untuk orang yang baru masuk ke sekolah atau perusahaan (contoh: murid baru, pegawai baru).',
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
    penjelasan: 'Pendatang baru yang baru memulai karir atau debut di suatu bidang (seperti artis, atlet, atau pekerja baru).',
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
    penjelasan: 'Fondasi bangunan atau dasar dari suatu pemikiran/hal penting.',
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
    penjelasan: 'Gundukan tanah tinggi (tanggul) di pinggir sungai atau danau untuk mencegah banjir.',
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
    penjelasan: 'Campuran tanah, lumpur, dan pasir. Sering dipakai untuk menyebut bencana tanah longsor (土砂崩れ).',
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
    penjelasan: 'Orang atau perusahaan yang berbisnis menyediakan barang atau jasa tertentu (vendor/agen).',
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
    penjelasan: 'Proyek bisnis atau usaha besar yang dijalankan secara serius dan terorganisir.',
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
    penjelasan: 'Membagi-bagi tugas atau pekerjaan agar setiap orang mengerjakan bagian yang berbeda supaya lebih cepat dan efisien.',
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
    penjelasan: 'Ciri khas atau kualitas suara dari sebuah alat musik atau suara manusia.',
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
    penjelasan: 'Perasaan atau niat asli yang sebenarnya di dalam hati (kebalikan dari basa-basi atau tatemae).',
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
    penjelasan: 'Peresmian atau mulainya sebuah organisasi/panitia yang baru dibentuk. Ingat, bacanya "hossoku", bukan "hassoku".',
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
    penjelasan: 'Melakukan sesuatu atas kemauan dan inisiatif sendiri, tanpa disuruh orang lain.',
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
    penjelasan: 'Adat, budaya, atau kebiasaan turun-temurun di suatu daerah atau kelompok masyarakat.',
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
    penjelasan: 'Kondisi alam, cuaca, dan iklim di suatu daerah yang memengaruhi gaya hidup penduduknya.',
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
    penjelasan: 'Masa muda atau masa remaja yang penuh semangat, impian, dan cinta.',
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
    penjelasan: 'Masa pubertas saat anak-anak beranjak remaja, biasanya ditandai dengan emosi yang labil.',
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
    penjelasan: 'Keadaan di mana sesuatu yang sudah dibuat/direncanakan dengan baik jadi hancur, berantakan, atau sia-sia.',
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
    penjelasan: 'Naskah atau skrip yang berisi jalan cerita dan dialog untuk aktor/sutradara dalam film atau teater.',
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
    penjelasan: 'Memaksakan diri untuk tetap melakukan sesuatu meskipun ada rintangan, tentangan, atau cuaca buruk.',
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
    penjelasan: 'Berat bersih (tanpa kemasan) atau waktu aktual/bersih (setelah dikurangi jam istirahat).',
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
    penjelasan: 'Punya pengaruh besar atau paling berpotensi untuk menang/terpilih (seperti kandidat kuat).',
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
    penjelasan: 'Sangat mendesak dan harus segera diselesaikan secepat mungkin. (Bisa juga dibaca "sakkyuu").',
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
    penjelasan: 'Proses berpikir atau jalan pikiran seseorang.',
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
    penjelasan: 'Berkomunikasi secara lisan atau langsung dari mulut, bukan lewat tulisan.',
    contoh1: '口頭で報告する。\n(Melaporkan atau memberitahu secara lisan.)',
    contoh2: '口頭試験が行われた。\n(Ujian lisan telah dilaksanakan.)'
  }
];

window.vocabData.push(...kosakata_m4h6);