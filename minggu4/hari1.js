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
    arti: 'Taktik / Modus operandi',
    penjelasan: 'Merujuk kepada cara, teknik, atau kaedah licik yang digunakan oleh seseorang untuk melakukan sesuatu kejahatan, jenayah, atau taktik penipuan.',
    contoh1: '犯行の手口。\n(Modus operandi perbuatan jenayah tersebut.)',
    contoh2: '詐欺の手口に引っかかる。\n(Terpedaya dengan taktik penipuan yang terancang.)'
  },
  {
    id: 'm4h1_2',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手本',
    furigana: 'てほん',
    arti: 'Contoh (teladan) / Model',
    penjelasan: 'Sesuatu yang dijadikan panduan atau model rujukan untuk diikuti dan ditiru. Boleh jadi contoh tulisan (kaligrafi) untuk berlatih, mahupun kelakuan baik seseorang yang patut dicontohi.',
    contoh1: '習字の手本。\n(Contoh tulisan kaligrafi untuk panduan latihan meniru bentuk huruf.)',
    contoh2: '彼は生徒たちの良い手本だ。\n(Dia merupakan teladan rujukan yang amat baik untuk para pelajar.)'
  },
  {
    id: 'm4h1_3',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手軽（な）',
    furigana: 'てがる（な）',
    arti: 'Mudah / Ringkas',
    penjelasan: 'Menggambarkan sesuatu yang boleh dilakukan dengan senang, cepat, dan tanpa memerlukan banyak usaha, kos, atau persediaan yang terlalu rumit.',
    contoh1: '手軽な料理。\n(Masakan yang ringkas dan sangat mudah disediakan.)',
    contoh2: '手軽に情報を手に入れる。\n(Mendapatkan maklumat dengan cara yang mudah diakses.)'
  },
  {
    id: 'm4h1_4',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手近（な）',
    furigana: 'てぢか（な）',
    arti: 'Berdekatan / Mudah dicapai',
    penjelasan: 'Merujuk kepada sesuatu objek atau tempat yang berada di sekeliling atau dekat dengan kita, serta sangat mudah dicapai dengan tangan tanpa perlu pergi jauh.',
    contoh1: '手近な材料で作る。\n(Memasak masakan menggunakan bahan-bahan berdekatan yang sedia ada di dapur.)',
    contoh2: '辞書を手近に置く。\n(Meletakkan kamus berdekatan supaya ia sentiasa mudah dicapai bila perlu.)'
  },
  {
    id: 'm4h1_5',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手ごろ（な）',
    furigana: 'てごろ（な）',
    arti: 'Berpatutan / Sangat bersesuaian',
    penjelasan: 'Biasa digunakan untuk merujuk kepada harga yang berpatutan dan masuk akal (mampu milik), atau saiz serta berat sesuatu barang yang dirasakan amat ideal dan sesuai pada tangan.',
    contoh1: '手ごろな値段。\n(Harga kos yang berpatutan / mampu milik.)',
    contoh2: '手ごろな大きさのバッグ。\n(Beg yang saiz dan bentuknya sangat sesuai untuk dibawa ke mana-mana.)'
  },
  {
    id: 'm4h1_6',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手引き',
    furigana: 'てびき',
    arti: 'Panduan / Tunjuk ajar',
    penjelasan: 'Buku, dokumen ringkas, atau tunjuk ajar yang memberikan panduan, pengenalan, serta arahan asas tentang cara-cara untuk melakukan atau menggunakan sesuatu dengan betul.',
    contoh1: '海外旅行の手引き。\n(Buku manual panduan berkenaan cara untuk melancong ke luar negara.)',
    contoh2: 'パソコンの手引き書を読む。\n(Membaca buku panduan pengenalan asas berkenaan cara menggunakan komputer.)'
  },
  {
    id: 'm4h1_7',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手元',
    furigana: 'てもと',
    arti: 'Di sisi / Dalam jangkauan',
    penjelasan: 'Bermaksud benda atau individu tersebut berada bersama dengan kita secara fizikal pada waktu itu, berdekatan, atau berada betul-betul di dalam jangkauan dan genggaman tangan.',
    contoh1: 'それは、今、手元にない。\n(Benda tersebut sekarang ini tiada di dalam jangkauan saya / tiada di tangan saya.)',
    contoh2: '手元に現金を置いておく。\n(Menyimpan sejumlah kecil wang tunai sentiasa ada di sisi.)'
  },
  {
    id: 'm4h1_8',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '手分け（する）',
    furigana: 'てわけ（する）',
    arti: 'Membahagikan tugas / Berpecah',
    penjelasan: 'Tindakan berkumpulan yang membahagi-bahagikan kawasan pencarian atau pekerjaan kepada beberapa orang / kumpulan kecil supaya tugas tersebut dapat diselesaikan dengan jauh lebih pantas.',
    contoh1: '手分けして探す。\n(Kita berpecah kepada beberapa bahagian dan pergi mencari bersama-sama.)',
    contoh2: '3チームに手分けして作業を進める。\n(Membahagikan dan memecahkan kerja kepada 3 pasukan supaya ia dapat disegerakan.)'
  },
  {
    id: 'm4h1_9',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'お手上げ',
    furigana: 'おてあげ',
    arti: 'Buntu (hilang akal) / Menyerah (angkat tangan)',
    penjelasan: 'Ungkapan atau kiasan bagi keadaan di mana seseorang berasa sungguh buntu, kehilangan akal, serta menyerah kalah kerana tiada lagi walau satu cara atau jalan keluar untuk menyelesaikan masalah tersebut.',
    contoh1: 'こんなに景気が悪いとお手上げだ。\n(Jika keadaan ekonomi merosot teruk sebegini rupa, kita semua memang buntu dan menyerah kalah.)',
    contoh2: 'パソコンが壊れてしまってはお手上げだ。\n(Komputer saya rosak sepenuhnya, saya jadi buntu dan tidak boleh berbuat apa-apa lagi.)'
  },
  {
    id: 'm4h1_10',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手中',
    furigana: 'しゅちゅう',
    arti: 'Dalam genggaman / Penguasaan penuh',
    penjelasan: 'Satu frasa perlambangan yang membawa maksud sesuatu perkara yang besar (seperti kemenangan mutlak, kawalan, atau kuasa pemerintahan) telah berjaya ditawan, dikawal serta dikuasai sepenuhnya.',
    contoh1: '勝利を手中にする。\n(Akhirnya menggenggam / meraih kemenangan itu dalam tangan sepenuhnya.)',
    contoh2: '権力を手中に収める。\n(Berjaya mengambil alih tampuk kekuasaan secara penuh dalam genggamannya.)'
  },
  {
    id: 'm4h1_11',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '先手',
    furigana: 'せんて',
    arti: 'Langkah pertama / Bertindak awal',
    penjelasan: 'Tindakan menyerang, mengambil langkah proaktif, atau merancang strategi dengan pantas lebih awal sebelum pihak musuh/lawan sempat melakukannya.',
    contoh1: '先手を打つ。\n(Mengambil langkah pertama untuk bertindak awal sebelum pihak lawan memulakan serangan.)',
    contoh2: '相手に先手を取られる。\n(Telah didahului / ditebuk langkah terlebih awal oleh tindakan pantas pihak lawan.)'
  },
  {
    id: 'm4h1_12',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '右手',
    furigana: 'みぎて',
    arti: 'Bahagian sebelah kanan / Tangan kanan',
    penjelasan: 'Boleh merujuk secara literal kepada anggota tangan kanan pada tubuh manusia, ataupun merujuk kepada arah/posisi geografi yang terletak di sebelah kanan dari sudut pandangan seseorang.',
    contoh1: '右手の建物をごらんください。\n(Tuan/Puan, sila alihkan pandangan untuk melihat bangunan di sebelah kanan anda.)',
    contoh2: '右手を挙げて質問する。\n(Mengangkat tangan kanannya ke udara untuk memohon mengajukan soalan.)'
  },
  {
    id: 'm4h1_13',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '入手（する）',
    furigana: 'にゅうしゅ（する）',
    arti: 'Memperoleh / Mendapatkan',
    penjelasan: 'Kosa kata peringkat formal yang diguna pakai apabila seseorang itu telah berjaya mendapat dan memegang sesuatu, lazimnya merujuk kepada maklumat rahsia, barang yang sukar/sukar dicari, atau bukti penting.',
    contoh1: '情報を入手する。\n(Telah berjaya memperoleh dan memegang maklumat penting tersebut.)',
    contoh2: '入手困難なチケット。\n(Sekeping tiket yang tahapnya adalah terlampau sukar dan hampir mustahil untuk didapatkan.)'
  },
  {
    id: 'm4h1_14',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手はず',
    furigana: 'てはず',
    arti: 'Persiapan / Susunan langkah',
    penjelasan: 'Satu pelan, rancangan awal, atau prosedur berserta dengan persediaan susunan langkah ke demi langkah yang mesti ditetapkan sebelum melaksanakan sesuatu acara atau tugas penting secara realiti.',
    contoh1: '手はずを整える。\n(Menyusun segala persiapan dan mengatur prosedur aturcara dengan lengkap.)',
    contoh2: '引越しの手はずはもうできた。\n(Segala susunan jadual dan persiapan langkah-langkah untuk kerja berpindah telah pun siap dirangka.)'
  },
  {
    id: 'm4h1_15',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手がかり',
    furigana: 'てがかり',
    arti: 'Petunjuk / Jejak penyelesaian',
    penjelasan: 'Satu bentuk maklumat, jejak petunjuk, atau apa-apa sahaja penemuan kecil yang dapat menjadi titik rujukan untuk membantu dalam misi menyelesaikan suatu misteri atau siasatan masalah.',
    contoh1: '事件の手がかり。\n(Bahan atau petunjuk penting untuk merungkai insiden kes jenayah itu.)',
    contoh2: '問題を解決する手がかりを見つける。\n(Berjaya menemui satu petunjuk emas bagi menyelesaikan kebuntuan masalah tersebut.)'
  },

  // --- KANJI 分 (Bahagi/Peratusan/Memahami) ---
  {
    id: 'm4h1_16',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '塩分',
    furigana: 'えんぶん',
    arti: 'Kandungan garam',
    penjelasan: 'Terma sains atau pemakanan untuk merujuk kepada peratusan atau jumlah kuantiti kadar garam (sodium) yang terlarut atau terkandung di dalam makanan, minuman, dan bahan masakan.',
    contoh1: '塩分を控える。\n(Mengehadkan atau mengawal pengambilan kandungan garam untuk tujuan kesihatan.)',
    contoh2: 'このスープは塩分が多い。\n(Berdasarkan rasanya, sup ini mempunyai kadar kandungan garam yang agak tinggi.)'
  },
  {
    id: 'm4h1_17',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '分別（する）',
    furigana: 'ぶんべつ（する）',
    arti: 'Mengasingkan (sampah) / Memisahkan mengikut jenis',
    penjelasan: 'Kata ini digunakan secara khusus di Jepun untuk melambangkan perbuatan atau peraturan mengasingkan serta mengkategorikan jenis-jenis sampah-sarap dan barang buangan mengikut pengelasannya (seperti plastik asing, botol asing, kertas asing) untuk tujuan kitar semula.',
    contoh1: 'ゴミの分別。\n(Proses pengasingan buangan sampah-sarap domestik.)',
    contoh2: 'プラスチックと紙を分別する。\n(Memisahkan bahan jenis plastik dan bahan kertas ke dalam tong yang berbeza.)'
  },
  {
    id: 'm4h1_18',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '分別',
    furigana: 'ふんべつ',
    arti: 'Kebijaksanaan budi / Pertimbangan yang matang',
    penjelasan: 'Perhatikan bacaannya adalah (funbetsu). Ia bermaksud keupayaan kognitif seseorang individu yang mampu menilai, memikir panjang, serta berkeupayaan membezakan secara logik antara perkara yang baik mahupun perkara yang buruk menurut landasan akal sihat.',
    contoh1: '分別のある人。\n(Seseorang dewasa yang dikurniakan tahap kebijaksanaan fikiran dan pertimbangan akal budi yang sangat matang.)',
    contoh2: '若いが、とても分別がある。\n(Walaupun usianya masih mentah, namun dia sudah mempunyai pertimbangan kebijaksanaan yang hebat.)'
  },
  {
    id: 'm4h1_19',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '分野',
    furigana: 'ぶんや',
    arti: 'Bidang / Sektor',
    penjelasan: 'Merujuk secara formal kepada satu kategori khusus, cawangan kepakaran, atau lingkungan skop yang mendalam di dalam sesebuah sektor seperti penyelidikan akademik, sains, sastera, mahupun industri perniagaan.',
    contoh1: '専門分野。\n(Lingkungan bidang kepakaran teras.)',
    contoh2: '彼は様々な分野で活躍している。\n(Tokoh itu merupakan individu yang giat bergerak aktif menabur bakti dalam pelbagai sektor bidang yang berbeza-beza.)'
  },

  // --- KANJI 同 (Sama/Setara) ---
  {
    id: 'm4h1_20',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同上',
    furigana: 'どうじょう',
    arti: 'Sama seperti di atas (SSDA)',
    penjelasan: 'Frasa rasmi yang selalu digunakan secara meluas di dalam pengisian borang, laporan, surat rasmi, dan senarai bertulis bagi menunjukkan bahawa maklumat butirannya adalah persis sama dengan perenggan / baris yang telah pun ditulis di sebelah atasnya, bagi mengelakkan kerja penulisan ulangan.',
    contoh1: '同上の理由により……\n(Adalah kerana dan disebabkan oleh faktor-faktor yang sama seperti yang telah tertera di atas...)',
    contoh2: '職業：同上。\n(Kolum Pekerjaan: Sama seperti kenyataan di atas.)'
  },
  {
    id: 'm4h1_21',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同一',
    furigana: 'どういつ',
    arti: 'Identikal / Entiti yang sama persis',
    penjelasan: 'Satu pandangan atau keadaan mutlak di mana langsung tiada wujud waima satu pun perbezaan nyata di antara dua benda tersebut, sehingga menganggap dua atau lebih komponen fizikal yang dilihat itu pada asalnya adalah satu perkara atau satu entiti orang yang sama.',
    contoh1: '同一にみる。\n(Memandang, melayan dan menyamaratakannya sebagai suatu perkara yang identikal/persis seratus peratus sama kelakuannya.)',
    contoh2: '彼らは同一人物だ。\n(Penjenayah yang dicari-cari dan pesakit yang dirawat itu merupakan individu orang yang sebenarnya adalah sama (identikal).)'
  },
  {
    id: 'm4h1_22',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '同意（する）',
    furigana: 'どうい（する）',
    arti: 'Persetujuan bersama / Keizinan yang sama',
    penjelasan: 'Merupakan penzahiran perasaan menyokong tanpa bantahan, pencapaian satu muafakat bersama, atau memberikan keizinan lampu hijau secara terbuka ke atas kelulusan terhadap sesuatu idea pandangan, cadangan pelan, dan permohonan yang dilontarkan pihak lain.',
    contoh1: '同意を求める。\n(Memanjangkan satu kertas kerja bagi memohon persetujuan dan keizinan kelulusan daripada pihak atasan.)',
    contoh2: '彼の提案に同意する。\n(Saya tidak mempunyai apa-apa halangan lalu memuktamadkan bahawa saya bersetuju penuh dengan usul cadangan beliau.)'
  },
  {
    id: 'm4h1_23',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同い年',
    furigana: 'おないどし',
    arti: 'Sebaya umur',
    penjelasan: 'Ungkapan khas perbualan yang digunakan untuk menegaskan bahawa julat umur fizikal dan tahun kelahiran di antara dua orang individu, rakan, mahupun sekumpulan kumpulan adalah sama rata (sebaya usianya). Ia dibaca sebagai "onaidoshi".',
    contoh1: '彼と私は同い年だ。\n(Beliau dan juga saya merupakan dua pihak yang sebaya umurnya dan tidak mempunyai jurang usia.)',
    contoh2: '同い年の友達。\n(Rakan-rakan karib yang terdiri dari kalangan kanak-kanak yang sebaya usianya.)'
  },

  // --- KANJI 心 (Hati/Perasaan/Niat) ---
  {
    id: 'm4h1_24',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心当たり',
    furigana: 'こころあたり',
    arti: 'Bayangan fikiran / Petanda tekaan / Meneka gerangan',
    penjelasan: 'Satu memori, pengetahuan tidak rasmi, bayangan yang terlintas pantas secara spontan di dalam fikiran berlandaskan klu, apabila sesuatu perkara itu sedang hebat dibincangkan, disoal, atau ditanya gerangannya oleh seseorang.',
    contoh1: 'その件については、心当たりがない。\n(Berkenaan kes tersebut, saya sama sekali tidak dapat membayangkan, meneka mahupun mempunyai apa-apa pengetahuan mengenainya (tiada idea sama sekali). )',
    contoh2: '犯人の心当たりがある。\n(Saya dapat meneka / terbayang sedikit gerangan identiti siapakah pelaku tersebut berdasarkan petanda yang ditinggalkan.)'
  },
  {
    id: 'm4h1_25',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '下心',
    furigana: 'したごころ',
    arti: 'Udang di sebalik batu / Niat tersembunyi',
    penjelasan: 'Motif jahat, nafsu keinginan atau agenda kurang wajar yang disembunyikan kuat-kuat jauh di dalam sudut hati ketika bermuka-muka di sebalik kelakuan sopan santun atau tutur kata yang terlampau manis pada luaran orang tersebut.',
    contoh1: '下心がある。\n(Mempunyai satu niat tersembunyi yang mungkin tidak ikhlas pada asalnya.)',
    contoh2: '親切の裏には下心があった。\n(Mempunyai pepatah udang di sebalik batu di sebalik kelakuan kebaikannya yang secara tiba-tiba itu.)'
  },
  {
    id: 'm4h1_26',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '野心',
    furigana: 'やしん',
    arti: 'Cita-cita yang amat rakus / Hasrat impian',
    penjelasan: 'Hasrat ambisi dan nafsu yang sangat besar secara peribadi yang sangat luar biasa dan tidak kenal letih untuk mengecapi darjat kuasa pemerintahan, kejayaan material yang tersangat hebat, kedudukan kerjaya, atau kekayaan duniawi yang luar biasa besar tanpa mempedulikan sempadan kebiasaan.',
    contoh1: '野心がある。\n(Memiliki hasrat atau cita-cita penguasaan yang sangat tinggi dan besar impiannya.)',
    contoh2: '若い頃は野心に燃えていた。\n(Sewaktu berada pada usia era muda dan bertenaga dahulu, saya sangat berkobar-kobar semangatnya demi mencapai cita-cita hidup yang agung itu.)'
  },
  {
    id: 'm4h1_27',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心地',
    furigana: 'ここち',
    arti: 'Rasa pengalaman fizikal / Suasana keselesaan',
    penjelasan: 'Sebuah ukuran perasaan, penerimaan aura atau suasana keselesaan selesa-tidaknya yang dirasai secara emosi dan juga jasad ke atas tubuh badan ketika sedang merasai menduduki, memakai, berada atau menggunakan satu bentuk entiti, kawasan atau barang berkenaan.',
    contoh1: '住み心地がいい。\n(Merupakan sebuah kawasan tempat binaan kediaman yang persekitarannya adalah amat menenangkan serta memberi keselesaan untuk didiami secara terus menerus.)',
    contoh2: '座り心地の良いソファ。\n(Sebuah sofa yang gebu dan dapat membekalkan kelonggaran keselesaan ergonomik ketika seseorang itu menyandarkan postur bagi mendudukinya.)'
  },
  {
    id: 'm4h1_28',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '内心',
    furigana: 'ないしん',
    arti: 'Jauh di lubuk hati / Perasaan terpendam di sudut dalam',
    penjelasan: 'Menunjuk secara spesifik akan rasa peribadi, sifat atau fikiran tulen yang sebenar-benarnya yang bergolak jauh di lubuk sanubari yang terdalam, tetapi sama sekali dikawal sehabis mampu supaya tidak terkeluar lalu dipamerkan atau ditunjukkan terus riaknya kepada paparan wajah luaran.',
    contoh1: '内心、穏やかではない。\n(Sungguhpun raut senyumannya di bibir, namun hakikatnya jauh di dasar lubuk hatinya, perasaannya adalah sungguh-sungguh kacau bilau sangat tidak tenang.)',
    contoh2: '内心では喜んでいる。\n(Jauh di kedalaman persembunyian lubuk hati, dia sebenarnya amat menari-nari melompat gembira dengan perkhabaran kejadian baik tersebut.)'
  },
  {
    id: 'm4h1_29',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心中',
    furigana: 'しんちゅう',
    arti: 'Inti pati isi hati sebenar / Kepiluan rahsia di dada',
    penjelasan: 'Membawa erti yang amat mendalam iaitu rasa sebenar, beban dan inti pati kesakitan yang meronta di dalam rongga dada hati manusia. Kebiasaannya ungkapan ini digunakan dalam konteks sastera keperihatinan sosial untuk menzahirkan kata-kata meluahkan rasa simpati tinggi dengan percubaan berterusan menyelami penderitaan kepedihan bebanan emosi tersembunyi yang ditanggung oleh orang lain yang malang nasibnya.',
    contoh1: '心中を察する。\n(Cuba bertolak ansur secara empati menyelami dan bersimpati mendalam meneka perasaan penderitaan di sebalik beban hatinya.)',
    contoh2: '彼の心中は複雑だった。\n(Tanggungan beban perasaan kemanusiaan yang mendasari isi rongga hatinya pada kemelut waktu tersebut amatlah kusut masai, bercelaru, sedih dan cukup merumitkan.)'
  },
  {
    id: 'm4h1_30',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '心中（する）',
    furigana: 'しんじゅう（する）',
    arti: 'Bertindak menamatkan nyawa bersama-sama (Bunuh diri rombongan)',
    penjelasan: 'Perhatikan dan perhalusi bacaannya bertukar menjadi (shinjuu). Ia adalah perbuatan sadis mencabut nyawa memusnahkan riwayat masing-masing secara sukarela pada masa dan saat yang serupa. Secara tragis, sentiasa dan selalu dikaitkan secara dramatik dengan tindakan yang diambil oleh satu perhubungan pasangan suami isteri/kekasih gelap sejati malang yang gagal menemui apa-apa bantuan, lantas menemui jalan keputusasaan yang tiada hujungnya (mati), atau boleh jadi dalam konteks keluarga yang terdesak himpitan hutang dunia.',
    contoh1: '心中を図る。\n(Setelah nekad hilang arah jalan dan berputus arang dengan tekanan, mangsa bertindak merancang teliti untuk melaksanakan satu ikatan perjanjian bunuh diri bersama-sama pasangannya sebagai titik noktah.)',
    contoh2: '一家心中という悲しい事件。\n(Satu siaran liputan berita insiden ngeri di mana satu institusi sekeluarga terdesak kehidupan mereka dan akhirnya mereka telah mengambil keputusan jalan yang tergelap untuk membunuh diri dan anak-anak bersama mati kesemuanya.)'
  },
  {
    id: 'm4h1_31',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心遣い',
    furigana: 'こころづかい',
    arti: 'Kemuliaan timbang rasa / Budi keprihatinan',
    penjelasan: 'Tindakan tingkah laku menzahirkan empati budi pekerti serta keprihatinan murni dengan cara mengambil berat, melayan kehendak rapi secara halus secara psikologi dan ikhlas mendahulukan urusan memberi kesenangan kepada rakan dan sesiapa sahaja pihak tetamu sekeliling supaya tiada hati atau pihak tergores dengan layanannya. Merupakan salah satu sifat puji-pujian beradab orang Jepun.',
    contoh1: '親切な心遣い。\n(Nilai aura keprihatinan yang membahagiakan rohani serta tingkah laku yang murni menjaga tataetika mengambil berat terhadap yang uzur dan berkeperluan, yang disifatkan teramat baik serta suci kelakuannya.)',
    contoh2: '温かいお心遣いに感謝します。\n(Daripada sanubari saya, dengan penuh penghayatan, ingin memohon agar sudi kiranya tuan empunya diri dihormati untuk menerima ungkapan kata-kata apresiasi rasa pernghargaan kami atas kemurahan kebaikan keprihatinan anda yang telah bertungkus-lumus membekalkan sebegitu banyak kehangatan nilai ihsan bakti budi tersebut ke arah peribadi kami.)'
  }
];

window.vocabData.push(...kosakata_m4h1);