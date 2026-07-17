// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m4h1 = [
  // --- KANJI 手 (Tangan) ---
  {
    id: 'm4h1_1',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手口',
    furigana: 'てぐち',
    arti: 'Modus operandi / Taktik kejahatan',
    penjelasan: 'Cara, teknik, atau taktik licik yang digunakan oleh seseorang untuk melakukan tindak kejahatan atau penipuan.',
    contoh1: '犯行の手口。\n(Modus operandi dari perbuatan kejahatan tersebut.)',
    contoh2: '詐欺の手口に引っかかる。\n(Terpedaya oleh taktik penipuan yang terencana.)'
  },
  {
    id: 'm4h1_2',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手本',
    furigana: 'てほん',
    arti: 'Contoh (teladan) / Model',
    penjelasan: 'Sesuatu yang dijadikan panduan atau model untuk ditiru. Bisa berupa contoh tulisan untuk latihan kaligrafi, maupun kelakuan baik seseorang yang patut dicontoh.',
    contoh1: '習字の手本。\n(Contoh tulisan kaligrafi untuk panduan latihan.)',
    contoh2: '彼は生徒たちの良い手本だ。\n(Dia adalah teladan yang sangat baik bagi para murid.)'
  },
  {
    id: 'm4h1_3',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手軽（な）',
    furigana: 'てがる（な）',
    arti: 'Praktis / Mudah / Ringkas',
    penjelasan: 'Menggambarkan sesuatu yang bisa dilakukan dengan gampang, cepat, dan tanpa butuh banyak usaha, biaya, atau persiapan yang rumit.',
    contoh1: '手軽な料理。\n(Masakan yang ringkas dan sangat mudah dibuat.)',
    contoh2: '手軽に情報を手に入れる。\n(Mendapatkan informasi dengan cara yang praktis dan mudah.)'
  },
  {
    id: 'm4h1_4',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手近（な）',
    furigana: 'てぢか（な）',
    arti: 'Dekat / Mudah dijangkau',
    penjelasan: 'Merujuk pada benda atau tempat yang berada di sekeliling kita dan mudah dijangkau dengan tangan tanpa perlu pergi jauh.',
    contoh1: '手近な材料で作る。\n(Memasak menggunakan bahan-bahan yang sudah tersedia di dekat kita/dapur.)',
    contoh2: '辞書を手近に置く。\n(Meletakkan kamus di dekat kita agar mudah dijangkau saat dibutuhkan.)'
  },
  {
    id: 'm4h1_5',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手ごろ（な）',
    furigana: 'てごろ（な）',
    arti: 'Terjangkau / Pas (ukuran)',
    penjelasan: 'Biasa digunakan untuk harga yang pas di kantong (terjangkau), atau ukuran dan berat suatu barang yang terasa sangat pas dan nyaman di tangan.',
    contoh1: '手ごろな値段。\n(Harga yang terjangkau / masuk akal.)',
    contoh2: '手ごろな大きさのバッグ。\n(Tas dengan ukuran yang pas dan nyaman untuk dibawa ke mana-mana.)'
  },
  {
    id: 'm4h1_6',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手引き',
    furigana: 'てびき',
    arti: 'Panduan / Buku petunjuk',
    penjelasan: 'Buku atau dokumen ringkas yang memberikan panduan, pengenalan, serta arahan dasar tentang cara melakukan atau menggunakan sesuatu dengan benar.',
    contoh1: '海外旅行の手引き。\n(Buku panduan wisata ke luar negeri.)',
    contoh2: 'パソコンの手引き書を読む。\n(Membaca buku panduan dasar cara menggunakan komputer.)'
  },
  {
    id: 'm4h1_7',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手元',
    furigana: 'てもと',
    arti: 'Di tangan / Di dekat kita',
    penjelasan: 'Benda yang saat ini ada secara fisik di dekat kita, atau berada tepat di dalam jangkauan/genggaman tangan saat itu juga.',
    contoh1: 'それは、今、手元にない。\n(Barang tersebut saat ini sedang tidak ada di tangan saya.)',
    contoh2: '手元に現金を置いておく。\n(Menyimpan sejumlah uang tunai agar selalu ada di dekat kita / siap pakai.)'
  },
  {
    id: 'm4h1_8',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '手分け（する）',
    furigana: 'てわけ（する）',
    arti: 'Berbagi tugas / Berpencar',
    penjelasan: 'Tindakan membagi-bagi area pencarian atau pekerjaan kepada beberapa orang/kelompok kecil agar tugas tersebut bisa selesai jauh lebih cepat.',
    contoh1: '手分けして探す。\n(Kita berpencar dan mencari bersama-sama.)',
    contoh2: '3チームに手分けして作業を進める。\n(Membagi pekerjaan ke dalam 3 tim agar bisa segera diselesaikan.)'
  },
  {
    id: 'm4h1_9',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'お手上げ',
    furigana: 'おてあげ',
    arti: 'Menyerah / Buntu / Angkat tangan',
    penjelasan: 'Ungkapan kiasan ketika seseorang merasa sangat buntu, hilang akal, dan menyerah karena tidak ada lagi cara untuk menyelesaikan masalah tersebut.',
    contoh1: 'こんなに景気が悪いとお手上げだ。\n(Jika kondisi ekonomi seburuk ini, kita benar-benar buntu dan angkat tangan.)',
    contoh2: 'パソコンが壊れてしまってはお手上げだ。\n(Komputernya rusak total, saya jadi buntu dan tidak bisa berbuat apa-apa lagi.)'
  },
  {
    id: 'm4h1_10',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手中',
    furigana: 'しゅちゅう',
    arti: 'Dalam genggaman / Penguasaan penuh',
    penjelasan: 'Kiasan yang berarti sesuatu yang besar (seperti kemenangan mutlak, kendali, atau kekuasaan) telah berhasil ditaklukkan atau dikuasai sepenuhnya.',
    contoh1: '勝利を手中にする。\n(Akhirnya meraih kemenangan itu sepenuhnya di dalam genggaman.)',
    contoh2: '権力を手中に収める。\n(Berhasil mengambil alih kekuasaan penuh di tangannya.)'
  },
  {
    id: 'm4h1_11',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '先手',
    furigana: 'せんて',
    arti: 'Langkah pertama / Inisiatif (Bertindak lebih dulu)',
    penjelasan: 'Tindakan menyerang, mengambil langkah proaktif, atau merencanakan strategi lebih awal sebelum pihak lawan sempat melakukannya.',
    contoh1: '先手を打つ。\n(Mengambil langkah pertama untuk bertindak sebelum pihak lawan menyerang.)',
    contoh2: '相手に先手を取られる。\n(Telah didahului / keduluan oleh tindakan cepat pihak lawan.)'
  },
  {
    id: 'm4h1_12',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '右手',
    furigana: 'みぎて',
    arti: 'Tangan kanan / Sebelah kanan',
    penjelasan: 'Secara harfiah berarti anggota tangan kanan manusia, atau bisa juga merujuk pada arah/posisi yang terletak di sebelah kanan dari sudut pandang seseorang.',
    contoh1: '右手の建物をごらんください。\n(Silakan lihat bangunan di sebelah kanan Anda.)',
    contoh2: '右手を挙げて質問する。\n(Mengangkat tangan kanan untuk mengajukan pertanyaan.)'
  },
  {
    id: 'm4h1_13',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '入手（する）',
    furigana: 'にゅうしゅ（する）',
    arti: 'Memperoleh / Mendapatkan',
    penjelasan: 'Kata formal yang digunakan saat seseorang berhasil mendapatkan sesuatu, biasanya merujuk pada informasi penting, barang langka, atau barang bukti.',
    contoh1: '情報を入手する。\n(Berhasil memperoleh informasi penting tersebut.)',
    contoh2: '入手困難なチケット。\n(Tiket yang sangat sulit dan hampir mustahil untuk didapatkan.)'
  },
  {
    id: 'm4h1_14',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手はず',
    furigana: 'てはず',
    arti: 'Persiapan / Rencana langkah-langkah',
    penjelasan: 'Rencana atau prosedur beserta persiapan langkah demi langkah yang harus diatur sebelum melaksanakan suatu acara atau tugas penting secara nyata.',
    contoh1: '手はずを整える。\n(Menyusun segala persiapan dan mengatur prosedurnya dengan lengkap.)',
    contoh2: '引越しの手はずはもうできた。\n(Rencana langkah-langkah dan persiapan untuk pindahan sudah beres.)'
  },
  {
    id: 'm4h1_15',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手がかり',
    furigana: 'てがかり',
    arti: 'Petunjuk / Jejak (Clue)',
    penjelasan: 'Informasi, jejak, atau penemuan kecil yang menjadi titik terang untuk membantu memecahkan suatu misteri, masalah, atau penyelidikan.',
    contoh1: '事件の手がかり。\n(Petunjuk penting untuk mengungkap kasus tersebut.)',
    contoh2: '問題を解決する手がかりを見つける。\n(Berhasil menemukan petunjuk untuk menyelesaikan masalah itu.)'
  },

  // --- KANJI 分 (Bagi/Bagian/Memahami) ---
  {
    id: 'm4h1_16',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '塩分',
    furigana: 'えんぶん',
    arti: 'Kandungan garam',
    penjelasan: 'Istilah untuk merujuk pada persentase atau jumlah kadar garam (sodium) yang terkandung di dalam makanan, minuman, atau bahan masakan.',
    contoh1: '塩分を控える。\n(Membatasi asupan kandungan garam demi kesehatan.)',
    contoh2: 'このスープは塩分が多い。\n(Sup ini memiliki kadar garam yang cukup tinggi.)'
  },
  {
    id: 'm4h1_17',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '分別（する）',
    furigana: 'ぶんべつ（する）',
    arti: 'Memilah (sampah) / Memisahkan sesuai jenis',
    penjelasan: 'Kata ini khusus digunakan di Jepang untuk aturan atau kegiatan memilah dan mengelompokkan jenis sampah (seperti plastik, botol, kertas) untuk tujuan daur ulang.',
    contoh1: 'ゴミの分別。\n(Proses pemilahan sampah rumah tangga.)',
    contoh2: 'プラスチックと紙を分別する。\n(Memisahkan sampah berbahan plastik dan kertas ke tempat yang berbeda.)'
  },
  {
    id: 'm4h1_18',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '分別',
    furigana: 'ふんべつ',
    arti: 'Kebijaksanaan / Akal sehat / Pertimbangan matang',
    penjelasan: 'Perhatikan bacanya: (ふんべつ / funbetsu). Kemampuan seseorang untuk berpikir panjang, menilai, dan membedakan secara logis antara yang baik dan buruk berdasarkan akal sehat.',
    contoh1: '分別のある人。\n(Orang dewasa yang memiliki pemikiran dan kebijaksanaan yang sangat matang.)',
    contoh2: '若いが、とても分別がある。\n(Meski usianya masih muda, ia sudah memiliki pertimbangan dan akal sehat yang hebat.)'
  },
  {
    id: 'm4h1_19',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '分野',
    furigana: 'ぶんや',
    arti: 'Bidang / Sektor',
    penjelasan: 'Merujuk secara formal pada satu kategori khusus, cabang keahlian, atau ranah dalam sebuah sektor seperti akademik, sains, seni, maupun industri.',
    contoh1: '専門分野。\n(Bidang keahlian khusus.)',
    contoh2: '彼は様々な分野で活躍している。\n(Dia adalah orang yang aktif berkiprah di berbagai bidang/sektor yang berbeda-beda.)'
  },

  // --- KANJI 同 (Sama/Setara) ---
  {
    id: 'm4h1_20',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同上',
    furigana: 'どうじょう',
    arti: 'Sama seperti di atas (Sda)',
    penjelasan: 'Istilah resmi dalam pengisian formulir, laporan, atau daftar tertulis untuk menunjukkan bahwa informasinya persis sama dengan baris yang sudah ditulis di atasnya, guna menghindari penulisan ulang.',
    contoh1: '同上の理由により……\n(Dikarenakan alasan yang sama seperti yang tertera di atas...)',
    contoh2: '職業：同上。\n(Kolom Pekerjaan: Sama seperti di atas.)'
  },
  {
    id: 'm4h1_21',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同一',
    furigana: 'どういつ',
    arti: 'Identik / Sama persis',
    penjelasan: 'Keadaan di mana sama sekali tidak ada perbedaan antara dua hal, sehingga dianggap sebagai satu kesatuan, barang, atau orang yang sama persis.',
    contoh1: '同一にみる。\n(Memandang, memperlakukan, atau menyamaratakannya sebagai suatu hal yang identik.)',
    contoh2: '彼らは同一人物だ。\n(Mereka sebenarnya adalah orang (individu) yang sama.)'
  },
  {
    id: 'm4h1_22',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '同意（する）',
    furigana: 'どうい（する）',
    arti: 'Persetujuan / Sepakat',
    penjelasan: 'Perasaan mendukung tanpa keberatan, mencapai kesepakatan bersama, atau memberikan izin atas suatu ide, pendapat, atau usulan dari pihak lain.',
    contoh1: '同意を求める。\n(Meminta persetujuan atau izin dari pihak lain.)',
    contoh2: '彼の提案に同意する。\n(Saya sepakat dan menyetujui usulan dari beliau.)'
  },
  {
    id: 'm4h1_23',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同い年',
    furigana: 'おないどし',
    arti: 'Seumuran / Sebaya',
    penjelasan: 'Ungkapan percakapan sehari-hari untuk menegaskan bahwa usia atau tahun kelahiran antara dua orang atau lebih adalah sama (sebaya).',
    contoh1: '彼と私は同い年だ。\n(Dia dan saya seumuran / sebaya.)',
    contoh2: '同い年の友達。\n(Teman-teman akrab yang seusia.)'
  },

  // --- KANJI 心 (Hati/Perasaan/Niat) ---
  {
    id: 'm4h1_24',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心当たり',
    furigana: 'こころあたり',
    arti: 'Ada bayangan / Terlintas di pikiran / Punya petunjuk',
    penjelasan: 'Ingatan, pengetahuan, atau bayangan yang terlintas di pikiran secara spontan ketika suatu hal sedang dibahas, ditanyakan, atau dicari oleh seseorang.',
    contoh1: 'その件については、心当たりがない。\n(Mengenai kasus tersebut, saya tidak punya bayangan atau petunjuk sama sekali.)',
    contoh2: '犯人の心当たりがある。\n(Saya sedikit terbayang/bisa menebak identitas pelaku berdasarkan petunjuk yang ada.)'
  },
  {
    id: 'm4h1_25',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '下心',
    furigana: 'したごころ',
    arti: 'Niat tersembunyi / Udang di balik batu',
    penjelasan: 'Motif, keinginan, atau agenda kurang baik yang disembunyikan rapat-rapat di balik kelakuan sopan atau tutur kata yang manis dari seseorang.',
    contoh1: '下心がある。\n(Memiliki niat tersembunyi yang mungkin tidak tulus.)',
    contoh2: '親切の裏には下心があった。\n(Ada udang di balik batu di balik kebaikannya yang tiba-tiba itu.)'
  },
  {
    id: 'm4h1_26',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '野心',
    furigana: 'やしん',
    arti: 'Ambisi / Cita-cita besar',
    penjelasan: 'Ambisi dan hasrat pribadi yang sangat besar untuk mencapai kekuasaan, kesuksesan karier, atau kekayaan, yang seringkali mendobrak batas kewajaran.',
    contoh1: '野心がある。\n(Memiliki ambisi atau cita-cita penguasaan yang sangat tinggi.)',
    contoh2: '若い頃は野心に燃えていた。\n(Saat masih muda dulu, saya sangat menggebu-gebu untuk mencapai cita-cita hidup yang besar itu.)'
  },
  {
    id: 'm4h1_27',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心地',
    furigana: 'ここち',
    arti: 'Perasaan kenyamanan (Fisik / Suasana)',
    penjelasan: 'Ukuran perasaan atau kenyamanan yang dirasakan secara emosi maupun fisik ketika sedang menempati, memakai, atau menggunakan suatu tempat atau barang.',
    contoh1: '住み心地がいい。\n(Lingkungan tempat tinggal yang sangat menenangkan dan nyaman untuk didiami.)',
    contoh2: '座り心地の良いソファ。\n(Sofa yang empuk dan sangat nyaman ketika diduduki.)'
  },
  {
    id: 'm4h1_28',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '内心',
    furigana: 'ないしん',
    arti: 'Di dalam hati / Perasaan yang sebenarnya',
    penjelasan: 'Perasaan pribadi atau pikiran asli yang benar-benar ada di lubuk hati terdalam, namun berusaha ditutupi agar tidak terlihat dari ekspresi wajah luar.',
    contoh1: '内心、穏やかではない。\n(Meski terlihat tersenyum, sebenarnya di dalam hatinya sangat kacau dan tidak tenang.)',
    contoh2: '内心では喜んでいる。\n(Jauh di lubuk hatinya, dia sebenarnya sangat gembira mendengar hal tersebut.)'
  },
  {
    id: 'm4h1_29',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心中',
    furigana: 'しんちゅう',
    arti: 'Isi hati / Perasaan terdalam',
    penjelasan: 'Perasaan, beban, atau isi hati seseorang yang sesungguhnya. Biasanya digunakan dalam konteks simpati, saat mencoba memahami penderitaan atau kepedihan emosi yang ditanggung orang lain.',
    contoh1: '心中を察する。\n(Mencoba bersimpati dan memahami perasaan penderitaan di balik beban hatinya.)',
    contoh2: '彼の心中は複雑だった。\n(Beban perasaan di dalam hatinya saat itu sangat kalut, sedih, dan rumit.)'
  },
  {
    id: 'm4h1_30',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '心中（する）',
    furigana: 'しんじゅう（する）',
    arti: 'Bunuh diri bersama (Pasangan/Keluarga)',
    penjelasan: 'Perhatikan bacanya: (しんじゅう / shinjuu). Tindakan tragis mencabut nyawa bersama-sama secara sukarela di waktu yang sama. Sering dikaitkan dengan pasangan atau keluarga yang putus asa menghadapi masalah berat seperti hutang.',
    contoh1: '心中を図る。\n(Setelah putus asa, mereka merencanakan kesepakatan untuk bunuh diri bersama-sama.)',
    contoh2: '一家心中という悲しい事件。\n(Berita insiden tragis di mana satu keluarga nekat bunuh diri bersama.)'
  },
  {
    id: 'm4h1_31',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心遣い',
    furigana: 'こころづかい',
    arti: 'Perhatian / Pertimbangan perasaan orang lain',
    penjelasan: 'Tindakan menunjukkan empati dan kepedulian yang tulus dengan memperhatikan kebutuhan serta kenyamanan orang di sekitarnya. Merupakan salah satu tata krama dan nilai luhur yang sangat dihargai di Jepang.',
    contoh1: '親切な心遣い。\n(Kepedulian dan kebaikan hati yang murni dalam menjaga perasaan orang lain.)',
    contoh2: '温かいお心遣いに感謝します。\n(Saya sangat berterima kasih atas perhatian dan kepedulian Anda yang begitu hangat.)'
  }
];

window.vocabData.push(...kosakata_m4h1);