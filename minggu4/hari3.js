// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m4h3 = [
  // --- KANJI 目 (Mata / Pandangan) ---
  {
    id: 'm4h3_1',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '目方',
    furigana: 'めかた',
    arti: 'Berat / Timbangan',
    penjelasan: 'Merujuk kepada ukuran jisim atau berat sesuatu barang mahupun berat fizikal badan seseorang. Ia sangat sinonim dan sering kali digunakan secara bertukar ganti dengan perkataan 重さ (omosa) atau 体重 (taijuu).',
    contoh1: '目方（＝重さ、体重）を量る。\n(Menimbang berat badan atau berat barang secara fizikal.)',
    contoh2: '荷物の目方を量ってもらった。\n(Saya telah meminta bantuan petugas agar berat bagasi saya ditimbang.)'
  },
  {
    id: 'm4h3_2',
    minggu: '4',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: '目下',
    furigana: 'もっか',
    arti: 'Buat masa ini / Sekarang ini',
    penjelasan: 'Satu terma formal yang menyatakan tentang keadaan, status kehidupan, atau situasi yang sedang berlaku bertepatan pada detik masa ini tanpa memikirkan apa yang bakal terjadi pada masa hadapan.',
    contoh1: '目下、失業中である。\n(Buat masa ini, saya sedang berada dalam fasa menganggur / tiada pekerjaan.)',
    contoh2: '目下のところ、問題はありません。\n(Buat masa sekarang ini sekurang-kurangnya, belum ada apa-apa masalah yang timbul.)'
  },
  {
    id: 'm4h3_3',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '目下',
    furigana: 'めした',
    arti: 'Orang bawahan / Lebih muda',
    penjelasan: 'Perhatikan bacaan furigana berbeza (meshita). Ia merujuk kepada profil seseorang yang mempunyai kedudukan pangkat yang lebih rendah, umur yang lebih muda, atau tahap pengalaman yang kurang berbanding dengan penutur.',
    contoh1: '目下の人。\n(Golongan orang bawahan / staf junior / mereka yang lebih rendah kedudukannya.)',
    contoh2: '目下の人にも丁寧に話す。\n(Bercakap menggunakan bahasa yang sopan walaupun terhadap orang bawahan.)'
  },
  {
    id: 'm4h3_4',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '切れ目',
    furigana: 'きれめ',
    arti: 'Potongan / Jeda (ayat)',
    penjelasan: 'Tempat, titik perhentian, pemisah, atau celah di mana sesuatu itu dipotong secara fizikal seperti kelaran pada makanan, ataupun titik pemisah pernafasan/jeda di dalam sesuatu penulisan karangan ayat.',
    contoh1: '肉に切れ目を入れる。\n(Mencipta potongan atau kelaran kecil pada permukaan daging sebelum dimasak.)',
    contoh2: '文章の切れ目（＝区切り）。\n(Jeda atau titik ruang pemisah dalam sesebuah pembacaan ayat / karangan.)'
  },
  {
    id: 'm4h3_5',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '目先',
    furigana: 'めさき',
    arti: 'Masa depan terdekat / Depan mata',
    penjelasan: 'Sesuatu perkara, sasaran, atau matlamat yang berada sangat hampir pada waktu ini. Ia sering kali digabungkan dalam kiasan "keuntungan jangka pendek" untuk menggambarkan tindakan yang hanya melihat habuan di hadapan mata.',
    contoh1: '目先の利益を追う。\n(Sikap yang hanya mengejar keuntungan jangka pendek yang ada di hadapan mata.)',
    contoh2: '目先のことに囚われないでください。\n(Tolonglah jangan terlalu terikat dan taksub dengan hal-hal jangka pendek sahaja.)'
  },
  {
    id: 'm4h3_6',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '大目',
    furigana: 'おおめ',
    arti: 'Kelonggaran / Pemaaf',
    penjelasan: 'Pada lazimnya, ia tidak digunakan secara bersendirian melainkan dipadankan secara terus dengan kata kerja (大目に見る) yang bermaksud memaafkan kesilapan kecil atau memberi kelonggaran tanpa menghukum dengan begitu tegas.',
    contoh1: '大目に見る。\n(Melihat dengan penuh toleransi / melepaskan dan memaafkan kesalahan kecil.)',
    contoh2: '今回だけは大目に見てあげよう。\n(Hanya untuk pengecualian pada kali ini, saya akan berikan kelonggaran dan memaafkan awak.)'
  },

  // --- KANJI 明 (Terang / Jelas) ---
  {
    id: 'm4h3_7',
    minggu: '4',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '明白（な）',
    furigana: 'めいはく（な）',
    arti: 'Jelas / Nyata',
    penjelasan: 'Menggambarkan bahawa sesuatu fakta, kejadian, niat, atau kebenaran itu adalah terlampau terang bersuluh, nyata di depan mata, dan langsung tidak mempunyai waima sekelumit ruang pun untuk dipersoalkan mahupun diragui.',
    contoh1: '明白な証拠。\n(Sejumlah bukti yang sangat jelas, kukuh dan nyata tanpa sebarang sekelumit ragu.)',
    contoh2: '彼の嘘は誰の目にも明白だった。\n(Taktik pembohongannya itu adalah amat jelas serta nyata pada pandangan mata kasar semua orang.)'
  },
  {
    id: 'm4h3_8',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '声明',
    furigana: 'せいめい',
    arti: 'Kenyataan rasmi / Pengumuman',
    penjelasan: 'Satu bentuk siaran pengumuman, luahan pendirian rasmi, atau dokumen pemakluman yang dikeluarkan secara sah oleh entiti individu ternama, pertubuhan, mahupun kerajaan untuk memaklumkan satu isu kepada khalayak umum.',
    contoh1: '声明を発表する。\n(Bertindak mengeluarkan, menyebarkan atau mengumumkan satu kenyataan rasmi kepada umum.)',
    contoh2: '政府は事件に関する声明を出した。\n(Pihak kerajaan pusat telah merilis sebuah kenyataan rasmi berhubung dengan insiden malang tersebut.)'
  },
  {
    id: 'm4h3_9',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '夜明け',
    furigana: 'よあけ',
    arti: 'Fajar / Permulaan (Era baru)',
    penjelasan: 'Satu terminologi yang membawa dua makna: secara harfiahnya bermaksud waktu subuh/fajar apabila cahaya matahari mula terbit menyingsing, dan secara kiasan ia puitis menandakan detik permulaan bagi satu kebangkitan era/zaman yang baharu.',
    contoh1: '夜明け（＝明け方）まで仕事をする。\n(Berhempas-pulas bekerja secara berterusan sehinggalah fajar menyingsing/waktu subuh.)',
    contoh2: '宇宙時代の夜明け。\n(Fajar yang menyingsing menanda permulaan detik kemunculan era penerokaan angkasa lepas.)'
  },
  {
    id: 'm4h3_10',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '文明',
    furigana: 'ぶんめい',
    arti: 'Peradaban / Ketamadunan',
    penjelasan: 'Merujuk kepada tahap tertinggi pencapaian kemajuan sosial, warisan budaya, corak pentadbiran, dan penguasaan sains teknologi yang berjaya dicapai oleh sekelompok masyarakat manusia dalam mana-mana rentetan lipatan sejarah peradaban dunia.',
    contoh1: '古代文明。\n(Warisan peradaban ketamadunan manusia pada zaman empayar purba dahulukala.)',
    contoh2: '科学技術が文明を発展させた。\n(Kemajuan pergerakan sains teknologi yang serba canggih telah berjaya mengembangkan tahap peradaban umat manusia.)'
  },
  {
    id: 'm4h3_11',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '明かす',
    furigana: 'あかす',
    arti: 'Mendedahkan rahsia / Berjaga malam',
    penjelasan: 'Kata kerja unik yang bermaksud perbuatan membocorkan / mendedahkan isi kebenaran atau rahsia di dada yang selama ini disimpan ketat. Dalam situasi (夜を明かす), ia juga bermaksud perbuatan berjaga secara total untuk menghabiskan masa semalaman suntuk.',
    contoh1: '秘密を明かす。\n(Perbuatan mendedahkan, membocorkan, atau memecahkan rahsia tersembunyi kepada orang lain.)',
    contoh2: '一夜を明かす。\n(Sengaja berjaga secara sedar dan menghabiskan masa sepanjang satu malam suntuk tersebut tanpa tidur.)'
  },

  // --- KANJI 家 (Rumah / Keluarga) ---
  {
    id: 'm4h3_12',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '家計',
    furigana: 'かけい',
    arti: 'Kewangan keluarga / Belanjawan isi rumah',
    penjelasan: 'Kosa kata penting dalam perihal dompet keluarga; ia merujuk kepada sistem perakaunan, kemampuan menanggung kos sara hidup, perbelanjaan runcit, serta sumber wang keluar-masuk (belanjawan) bagi kelangsungan sesebuah keluarga.',
    contoh1: '家計が苦しい。\n(Situasi di mana keadaan bajet kewangan/dompet keluarga menjadi agak terdesak dan bersusah payah.)',
    contoh2: '妻が家計をやり繰りしている。\n(Isteri tercinta saya merupakan individu utama yang menguruskan putaran belanjawan kewangan keluarga kami.)'
  },
  {
    id: 'm4h3_13',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '家業',
    furigana: 'かぎょう',
    arti: 'Perniagaan keluarga / Profesion warisan',
    penjelasan: 'Apa jua bentuk pekerjaan, kemahiran kraf tradisional, kilang, atau sistem perniagaan komersial yang telah dibina dan diwarisi secara turun-temurun dari susur galur satu generasi terus ke generasi pelapis di dalam sesebuah keluarga/kerabat.',
    contoh1: '家業を継ぐ。\n(Mengambil alih kepimpinan untuk mewarisi dan meneruskan syarikat perniagaan warisan milik keluarga.)',
    contoh2: '彼は家業のレストランを手伝っている。\n(Seusai tamat pengajian, beliau kini sedang bergiat membantu menguruskan restoran perniagaan keluarganya sendiri.)'
  },
  {
    id: 'm4h3_14',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '家主',
    furigana: 'やぬし',
    arti: 'Pemilik rumah sewa / Tuan rumah',
    penjelasan: 'Di dalam era moden, terma ini secara spesifiknya banyak merujuk kepada empunya/individu sah yang memiliki sebarang bentuk aset hartanah (seperti apartmen atau rumah teres) yang bertujuan disewakan kepada pihak penyewa, dengan mengutip hasil bayaran sewa.',
    contoh1: '（＝貸家の所有者＝大家）。\n(Tuan empunya, geran hak milik atau pemilik sebenar hartanah/kediaman yang disewakan.)',
    contoh2: '（＝一家の主人）。\n(Susuk ketua rumah bagi sesebuah kediaman isi keluarga tersebut.)'
  },
  {
    id: 'm4h3_15',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '家来',
    furigana: 'けらい',
    arti: 'Pengikut setia / Hamba suruhan',
    penjelasan: 'Satu terma sejarah lama (sering ditonton dalam wayang / anime berlatar sejarah); ia menunjuk kepada profil seseorang yang berkhidmat berhempas-pulas, memberikan taat setia mutlak, dan patuh mengikut arahan ketenteraan di bawah kuasa tuannya.',
    contoh1: '家来とその主人。\n(Gambaran profil seorang pengikut/orang suruhan bersama-sama dengan tuan empunya yang dipatuhinya.)',
    contoh2: '昔の武将には多くの家来がいた。\n(Para panglima jeneral tentera pada zaman pergolakan sejarah perang dahulu mempunyai skuad pengikut setia yang sangat ramai.)'
  },
  {
    id: 'm4h3_16',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '大家',
    furigana: 'たいか',
    arti: 'Pakar tersohor / Master agung',
    penjelasan: 'Sila bezakan dengan bacaan (ooya=pemilik rumah). Apabila dibaca "taika", ia adalah sanjungan untuk seseorang (virtuoso) yang memegang tahap kemahiran di taraf paling dewa, sangat dihormati, dan diiktiraf dunia sebagai seorang pakar terkemuka di dalam mana-mana bidang cabang kesenian.',
    contoh1: '絵の大家。\n(Seorang susuk pakar seni master yang tersohor dan sangat disanjung bakatnya dalam bidang kesenian lukisan visual.)',
    contoh2: '彼は書道の大家として知られている。\n(Beliau amat dikenali di serata tempat sebagai seorang pakar terulung/master agung dalam penulisan kaligrafi Jepun.)'
  },

  // --- KANJI 人 (Orang) ---
  {
    id: 'm4h3_17',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '社会人',
    furigana: 'しゃかいじん',
    arti: 'Orang bekerjaya / Ahli masyarakat matang',
    penjelasan: 'Di Jepun, frasa ini dikhaskan untuk sesiapa sahaja yang baru/telah menamatkan alam persekolahan mahupun pengajian pendidikan tinggi (graduan) dan kini mula menempuh alam pekerjaan sebagai seorang manusia dewasa yang menyara kehidupan serta memikul peranan penting dalam masyarakat.',
    contoh1: '社会人になる。\n(Beralih fasa menamatkan alam pelajar, lalu melangkah memikul tanggungjawab kerjaya bagi bergelar ahli masyarakat yang rasmi.)',
    contoh2: '社会人としての自覚を持つ。\n(Perlulah sentiasa tersemat kesedaran diri serta nilai kebertanggungjawapan moral yang utuh sebagai seorang dewasa yang bekerja.)'
  },
  {
    id: 'm4h3_18',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '万人',
    furigana: 'ばんにん',
    arti: 'Segenap manusia / Semua golongan orang ramai',
    penjelasan: 'Merangkumi dan merujuk terus kepada pihak masyarakat umum di luar sana, pelbagai lapisan umur dan masyarakat tanpa sedikit pun mengira perbezaan pangkat, rupa, atau usia; bermaksud "sesuai atau tersedia untuk semua pihak tanpa batas diskriminasi".',
    contoh1: '万人向けの製品。\n(Produk pasaran yang memang direka, disasarkan, dan sangat sesuai untuk kegunaan umum dari segenap masyarakat.)',
    contoh2: 'この味は万人に好まれるだろう。\n(Resipi kelazatan rasa makanan masakan ini dijangka pastinya akan mudah digemari oleh semua lapisan orang yang memakannya.)'
  },
  {
    id: 'm4h3_19',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '人目',
    furigana: 'ひとめ',
    arti: 'Pandangan umum / Perhatian awam',
    penjelasan: 'Membawa makna tumpuan deria pemerhatian dan pandangan mata pihak khalayak sekeliling. Amat kerap digunakan untuk melabel keadaan yang terlalu drastik sehingga mudah menarik perhatian umum, atau kelakuan menyorok bersembunyi dari bertembung dengan pandangan khalayak (mengelak).',
    contoh1: '人目につく。\n(Ciri atau kelakuan yang sangat menonjol keluar dan terlalu mudah menggamit tarikan pemerhatian umum/awam di situ.)',
    contoh2: '人目を避けて会う。\n(Memilih merancang untuk berjumpa sesama sendiri secara sembunyi-sembunyi dan rahsia untuk mengelak daripada dikesan oleh khalayak ramai.)'
  },
  {
    id: 'm4h3_20',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '住人',
    furigana: 'じゅうにん',
    arti: 'Penghuni / Penduduk kediaman',
    penjelasan: 'Individu persendirian, susuk sekeluarga, atau sekumpulan ahli masyarakat yang telah secara sah menyewa, membeli, menetap, dan mendiami di dalam lingkungan sebuah ruang kapasiti geografi (rumah teres, pangsapuri tinggi, flat binaan, malah keseluruhan sesebuah pulau / benua kawasan perumahan).',
    contoh1: 'アパートの住人。\n(Rangkuman senarai nama penghuni yang mendiami di bangunan pangsapuri tersebut.)',
    contoh2: '島の住人たちはとても親切だ。\n(Penghuni-penghuni yang lahir, membesar, dan menetap mendiami sekitar pulau terpencil itu hakikatnya sangatlah mesra dan baik hati layanannya.)'
  },

  // --- KANJI 進 (Maju / Mara) ---
  {
    id: 'm4h3_21',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '進行（する）',
    furigana: 'しんこう（する）',
    arti: 'Sedang berlangsung / Kemajuan pergerakan operasi',
    penjelasan: 'Kosa kata yang menjurus kepada pergerakan aktiviti, apa sahaja program majlis, operasi tugas, proses kerosakan jasad (akibat suatu penyakit di hospital), atau kertas-kertas kerja rancangan yang kini sedang giat secara fizikalnya "bergerak maju dari fasa pertama", "dilancarkan secara rasmi", atau "masih dalam proses pelaksanaan di pertengahan jalan".',
    contoh1: '調査が順調に進行している。\n(Proses fasa tindakan siasatan operasi risikan itu sedang berlangsung pantas berjalan dengan sungguh lancar mengikut pergerakan proses kemajuan yang diharapkan.)',
    contoh2: '会議の進行を任される。\n(Dipertanggungjawabkan beban tugas rasmi sebagai pengendali moderator untuk menyelia kelancaran dan perjalanan proses agenda mesyuarat korporat.)'
  },
  {
    id: 'm4h3_22',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '進出（する）',
    furigana: 'しんしゅつ（する）',
    arti: 'Ekspansi sayap pasaran / Melangkah mara menembusi',
    penjelasan: 'Satu aksi agresif bertindak cemerlang menumbangkan rintangan sempadan untuk berekspansi secara luas. Kerap digunakan bila sesebuah syarikat berjaya melebarkan empayar produk mereka masuk bertanding secara sengit menembusi pintu pasaran luar negara yang serba baharu, ataupun merujuk kepada sebuah pencapaian kemaraan cemerlang pasukan / kelab sukan yang berjaya melangkah melepasi fasa sukar untuk masuk ke pusingan peringkat (perlawanan) yang jauh lebih tinggi dan elit.',
    contoh1: '海外に進出する。\n(Cita-cita syarikat adalah untuk mula mengembangkan perluasan sayap perniagaan jenama supaya ia berjaya melangkah berani masuk bertapak menembusi pasaran terbuka di persada luar negara.)',
    contoh2: '決勝戦への進出を決めた。\n(Sorakan kebanggaan pasukan negara kerana telah secara mutlaknya berjaya menumpaskan musuh sekali gus mengesahkan tiket kemaraan berharga melangkah masuk bermain sehingga ke peringkat pusingan perlawanan kemuncak akhir final.)'
  },
  {
    id: 'm4h3_23',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '進度',
    furigana: 'しんど',
    arti: 'Darjah tahap kelajuan progres / Kadar kepantasan maju',
    penjelasan: 'Ukuran metrik saintifik/penilaian kasar secara numerik, yang menilai kadar skala kepantasan kelajuan, atau memantau tahap kemajuan (perkembangan semasa) bagi sesuatu perihal seperti silibus proses pengajaran pendidikan/pembelajaran sekolah, jumlah peratusan penyiapan pelan rangka kerja operasi binaan, dan menyiapkan sisa senarai kerja. Penanda aras darjah untuk mengesan dan menunjukkan sama ada "ia mengikut jadual" atau "tercicir ke belakang".',
    contoh1: '学習の進度。\n(Skala peratusan dan tahap kadar kelajuan / kelambatan pergerakan progres proses input kefahaman dalam silibus pembelajaran kurikulum pendidikan seseorang pelajar/murid di dalam bilik darjahnya.)',
    contoh2: '工事の進度を確認する。\n(Jurutera penyelia itu bertugas menyemak, menilai selia, serta memastikan kelancaran ukuran kadar tahap peratusan kemajuan kerja-kerja projek tapak pembinaan bangunan mega tersebut agar ianya selaras dengan rangka masa asal.)'
  },
  {
    id: 'm4h3_24',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '行進（する）',
    furigana: 'こうしん（する）',
    arti: 'Berarak / Formasi perbarisan berjalan',
    penjelasan: 'Perbuatan membentuk barisan rapi kemudian melangkah berjalan secara beramai-ramai dalam unit kumpulan berskala besar (membentuk formasi barisan yang sungguh teratur susunannya). Tindakan ini dapat kita saksikan sering berlaku semasa berlangsungnya upacara perarakan sambutan hari kebangsaan, festival kawad kaki sukan sekolah, aktiviti demonstrasi nyanyian di jalan raya, atau gerakan pergerakan operasi taktikal unit ketenteraan yang lengkap beruniform.',
    contoh1: '大通りを行進する。\n(Kumpulan perarakan muzik kumpulan berauditorium dan kadet pakaian rasmi melangkah gagah melakukan perarakan rentak perbarisan berjalan kaki beramai-ramai di ruang litar laluan pejalan raya dataran utama ibu kota.)',
    contoh2: '選手たちがグラウンドを行進する。\n(Para kontinjen wakil atlet peserta dan pemain kesukanan tersebut melakukan upacara berjalan secara berbaris masuk dengan segak ke kawasan tengah padang upacara.)'
  },

  // --- KANJI 先 (Depan / Awal) ---
  {
    id: 'm4h3_25',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '先頭',
    furigana: 'せんとう',
    arti: 'Hujung paling depan / Ketua pacak barisan terawal',
    penjelasan: 'Melambangkan satu posisi kedudukan kerusi puncak di mana individu, rombongan kelab, mahupun struktur fizikal kenderaan itu telah berjaya menempatkan atau menduduki dan membolot bahagian barisan tangga yang paling terhadapan sekali (tiada sesiapa atau entiti lain di hadapannya), menewaskan pihak saingan belakang dalam sebuah gerombolan kelompok berskala orang ramai (fizikal) mahupun mendahului dalam sesuatu ikutan gelombang trend/pasaran (kiasan abstrak).',
    contoh1: '先頭に立つ。\n(Individu tersebut dengan keazaman gagah, melangkah lalu berdiri mengambil posisi menerajui kepimpinan dengan berani berada dalam saf barisan paksi hadapan yang paling utama sekali tanpa gentar.)',
    contoh2: '彼は常に先頭を走っている。\n(Lelaki handalan ini dengan staminanya yang luar biasa sentiasa mendahului kelajuan rakan-rakan sebayanya yang lain secara mutlak dengan meninggalkan dan berlari kencang menerajui persaingan di kawasan bahagian saf paling hadapan trek.)'
  },
  {
    id: 'm4h3_26',
    minggu: '4',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '先行（する）',
    furigana: 'せんこう（する）',
    arti: 'Mendahului / Pra-jualan (Pelancaran langkah awal)',
    penjelasan: 'Terma pergerakan proaktif yang membawa perbuatan bertindak "selangkah" (atau "satu langkah pergerakan taktikal") pantas merintis kemajuan jauh lebih awal mendahului pencapaian purata umum / manusia konvensional, mahupun pencapaian inovasi yang mendahului kecanggihan teknologi zaman. Juga kerap merujuk ke dalam bidang komersial, iaitu sesi pelaksanaan fasa penawaran promosi istimewa atau program jualan tiket/produk yang ditawarkan dan dilancarkan secara istimewa lebih awal khas kepada pembeli tertentu sebelum tarikh pembukaan besar-besaran (pra-jualan eksklusif) kepada khalayak awam terbuka.',
    contoh1: '時代に先行する。\n(Inovasi penemuannya serta konsep ideanya itu nyata dan sangat jauh melangkaui, mengatasi, atau berjaya mendahului teknologi dan kemajuan pemikiran normal pada era peredaran zamannya (Ahead of its time).)',
    contoh2: '先行発売。\n(Satu acara kempen pemasaran komersial berbentuk pra-jualan tertutup / Pelancaran jualan prapendaftaran yang diutamakan dan dibuka pintunya dengan tempoh keistimewaan jauh lebih awal khusus untuk faedah ahli dan para pembeli terpilih/tertentu sebelum pengedarannya dikomersialkan kepada seluruh pelosok rakyat marhaen.)'
  },
  {
    id: 'm4h3_27',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '先着',
    furigana: 'せんちゃく',
    arti: 'Tiba dahulu / (Aturan kemasukan) Siapa cepat dia dapat',
    penjelasan: 'Sebuah kaedah penyaringan penerimaan bersyarat. Lazimnya digunakan di mana sahaja tempat untuk membuat tapisan tawaran terhadap mereka/individu-individu yang berjaya mempercepat langkah dan tiba lapor diri secara fizikal (atau log masuk atas talian) terlebih awal untuk merebut tawaran tersebut. Sangat dominan digunakan di papan tanda tawaran jualan atau pendaftaran hadiah kuota berteraskan "First-come, first-served basis" di premis-premis kedai/perkhidmatan terhad yang eksklusif.',
    contoh1: '先着10名様限り。\n(Tawaran emas rebat khas tersebut hanya ditawarkan eksklusif serta terhad sama sekali untuk sejumlah 10 orang kelompok pelanggan terawal yang berjaya menjejakkan kaki (tiba dahulu) di depan pintu premis/kaunter kedai kami.)',
    contoh2: '参加者は先着順で受け付けます。\n(Tugasan jawatankuasa adalah untuk memastikan bahawa nama semua peserta yang mendaftar kursus tersebut hanya akan disahkan dan diterima secara bersyarat dan adil, iaitu semuanya berdasarkan sistem pemprosesan giliran pendaftaran "konsep siapa cepat, dia akan secara automatik dapat / keutamaan siapa masuk tiba dahulu akan menerima keutamaan akses penyertaan program" tanpa tolak ansur kelewatan.)'
  },
  {
    id: 'm4h3_28',
    minggu: '4',
    hari: '3',
    kategori: 'kata benda',
    kanji: '先方',
    furigana: 'せんぽう',
    arti: 'Pihak sana (Rakan niaga) / Pihak lawan bicara',
    penjelasan: 'Ini adalah satu frasa kosa kata profesional di dalam terma "keigo" perbincangan rasmi korporat perniagaan; merupakan ganti nama merujuk secara formal lagi amat bersopan-santun dalam pertuturan untuk menggelarkan rakan kongsi kolaborasi, mana-mana staf yang mewakili, individu perantara klien perniagaan (Business client), syarikat prospek vendor pelaburan, atau "the other party" dari sudut/belah pihak yang satu lagi (iaitu mana-mana entiti organisasi selain dari pihak syarikat peribadi penutur) semasa berada di meja sesi perundingan / urusan rundingan perniagaan / berurusan perbalahan surat-menyurat di pejabat perhubungan antara syarikat.',
    contoh1: '先方（＝相手）の意見を聞く。\n(Sebagai bentuk penghormatan tataetika profesional, pihak kita seharusnya terlebih dahulu memberi laluan teliti mendengarkan segala butiran luahan masalah mahupun cadangan pandangan yang dimajukan oleh wakil pihak syarikat sana (pihak lawan urus niaga) dengan cermat di meja mesyuarat.)',
    contoh2: 'まずは先方に連絡をとってみます。\n(Seandainya tiada usul baharu, sebagai prosedur langkah mitigasi yang terawal dalam mengatasi permasalahan teknikal ini, saya berikrar dan berjanji akan cuba sebaik mungkin untuk mewakili bahagian ini, seterusnya terus membuat perhubungan talian menelefon (bertanya) syarikat pihak rakan pembekal perkhidmatan di sana (pihak vendor/lawan bicara) terlebih awal untuk kepastian kesahihan status laporan tersebut.)'
  }
];

window.vocabData.push(...kosakata_m4h3);