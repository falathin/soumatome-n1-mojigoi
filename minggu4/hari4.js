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
    penjelasan: 'Merujuk pada suatu objek fizikal atau benda konkrit yang bentuk dan wujudnya dapat dilihat atau dirasakan. Perkataan ini sering kali digunakan untuk benda yang belum jelas identitinya, aneh, atau benda terbang.',
    contoh1: 'なぞの物体。\n(Objek yang misteri.)',
    contoh2: '空に光る物体が見えた。\n(Kelihatan objek bercahaya di langit.)'
  },
  {
    id: 'm4h4_2',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '立体',
    furigana: 'りったい',
    arti: 'Bentuk tiga dimensi',
    penjelasan: 'Sesuatu yang mempunyai bentuk, panjang, lebar, dan isi padu atau kedalaman (3D). Perkataan ini berlawanan dengan 平面 (heimen) yang bermaksud dua dimensi. Sering digunakan dalam konteks seni, geometri, atau gambaran visual yang tampak nyata.',
    contoh1: '立体的な絵。\n(Lukisan tiga dimensi / yang nampak hidup.)',
    contoh2: 'この図形は立体です。\n(Bentuk geometri ini adalah tiga dimensi.)'
  },
  {
    id: 'm4h4_3',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '正体',
    furigana: 'しょうたい',
    arti: 'Wujud asli / Identiti sebenar',
    penjelasan: 'Karakter, sifat, atau identiti asli seseorang atau sesuatu benda yang sebelumnya disembunyikan atau tidak diketahui oleh orang ramai. Biasanya digunakan apabila sebuah rahsia atau kebenaran akhirnya terbongkar.',
    contoh1: '正体を現す。\n(Menunjukkan wujud/identiti aslinya.)',
    contoh2: 'ついに犯人の正体が分かった。\n(Akhirnya identiti sebenar penjenayah itu diketahui.)'
  },
  
  // --- KANJI 意 (I) ---
  {
    id: 'm4h4_4',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '意向',
    furigana: 'いこう',
    arti: 'Niat / Maksud / Kehendak',
    penjelasan: 'Merujuk pada apa yang ingin dilakukan oleh seseorang atau sesuatu pihak. Kata ini sering digunakan dalam situasi formal atau bisnes untuk menanyakan pendapat, rancangan, atau niat dari pihak pelanggan/lawan bicara.',
    contoh1: '先方の意向を聞く。\n(Mendengar niat/maksud dari pihak sana.)',
    contoh2: '社長の意向に沿って計画を進める。\n(Meneruskan rancangan sejajar dengan kehendak pengarah.)'
  },
  {
    id: 'm4h4_5',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '意思',
    furigana: 'いし',
    arti: 'Kehendak / Kemahuan',
    penjelasan: 'Fikiran atau tekad seseorang untuk melakukan atau tidak melakukan sesuatu. Perkataan ini menekankan pada kekuatan hati seseorang serta bagaimana kehendak tersebut dinyatakan kepada orang lain.',
    contoh1: '意思表示をする。\n(Menzahirkan/mengekspresikan kehendak.)',
    contoh2: '彼女は意思が固い。\n(Dia mempunyai kemahuan/kehendak yang kuat.)'
  },
  {
    id: 'm4h4_6',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '意地',
    furigana: 'いじ',
    arti: 'Keras kepala / Kedegilan / Ego',
    penjelasan: 'Sikap berkeras hati atau keengganan untuk mengalah demi menjaga ego atau kebanggaan diri. Boleh membawa maksud kedegilan yang negatif (keras kepala) atau keteguhan hati yang enggan menyerah kalah.',
    contoh1: '意地を張る。\n(Bersikap keras kepala / menjaga ego.)',
    contoh2: 'あの子は意地っ張りだ。\n(Kanak-kanak itu adalah seorang yang keras kepala.)'
  },
  {
    id: 'm4h4_7',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '意図',
    furigana: 'いと',
    arti: 'Niat / Maksud / Tujuan',
    penjelasan: 'Tujuan, rancangan, atau motif tersembunyi di sebalik sesuatu tindakan. Digunakan apabila seseorang dengan sengaja merancang sesuatu bagi mencapai hasil yang diinginkan.',
    contoh1: '早期解散を意図する。\n(Bermaksud/merancang untuk membubarkan parlimen lebih awal.)',
    contoh2: '意図的にルールを破った。\n(Melanggar peraturan secara sengaja/dengan niat.)'
  },

  // --- KANJI 見 (Mi/Ken) ---
  {
    id: 'm4h4_8',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '見地',
    furigana: 'けんち',
    arti: 'Sudut pandangan / Perspektif',
    penjelasan: 'Titik tolak atau dasar asas pemikiran dalam menilai dan melihat sesuatu isu. Kebiasaannya digunakan dalam konteks perbincangan yang lebih profesional, akademik, atau rasmi seperti dari sudut pandang undang-undang, perubatan, dan pendidikan.',
    contoh1: '医学的見地から反対する。\n(Menentang dari sudut pandangan perubatan.)',
    contoh2: '教育的な見地から見ると、それは重要だ。\n(Jika dilihat dari perspektif pendidikan, hal itu sangat penting.)'
  },
  {
    id: 'm4h4_9',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '会見',
    furigana: 'かいけん',
    arti: 'Sidang media / Pertemuan rasmi / Temu ramah',
    penjelasan: 'Pertemuan rasmi dengan sekumpulan orang terutamanya pemberita atau wartawan, bagi tujuan menyampaikan maklumat rasmi atau menjawab persoalan. Sangat sinonim dengan perkataan "kisha kaiken" (sidang akhbar).',
    contoh1: '記者会見を開く。\n(Mengadakan sidang akhbar / media.)',
    contoh2: '首相は会見で新しい政策を発表した。\n(Perdana Menteri mengumumkan dasar baru dalam sidang rasminya.)'
  },
  {
    id: 'm4h4_10',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '見通し',
    furigana: 'みとおし',
    arti: 'Jarak penglihatan / Prospek / Jangkaan',
    penjelasan: 'Mempunyai dua konteks utama: pertama, kemampuan melihat ke hadapan secara fizikal (jarak penglihatan yang jelas atau terhalang); kedua, kebolehan meramal atau menjangkakan masa depan sesuatu situasi/keadaan.',
    contoh1: '見通しの悪い道路。\n(Jalan raya dengan jarak penglihatan yang teruk/terhalang.)',
    contoh2: '来年度の経済の見通し。\n(Jangkaan/prospek ekonomi bagi tahun hadapan.)'
  },
  {
    id: 'm4h4_11',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '見下す',
    furigana: 'みくだす',
    arti: 'Merendah-rendahkan / Memandang hina',
    penjelasan: 'Sikap memandang rendah terhadap orang lain, merasa diri sendiri lebih bagus atau superior, dan melayan individu lain dengan cara yang memperkecilkan mereka secara emosi atau mental.',
    contoh1: '人を見下す。\n(Memandang rendah/hina pada orang.)',
    contoh2: '彼は貧しい人々を見下している。\n(Dia merendah-rendahkan orang yang miskin.)'
  },
  {
    id: 'm4h4_12',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '見下ろす',
    furigana: 'みおろす',
    arti: 'Melihat ke bawah (secara fizikal)',
    penjelasan: 'Tindakan fizikal semata-mata di mana seseorang menghalakan pandangan matanya dari tempat yang tinggi menuju ke tempat yang lebih rendah, seperti dari atas bangunan, bumbung, atau puncak gunung.',
    contoh1: 'ビルの屋上から見下ろす。\n(Melihat ke bawah dari bumbung bangunan.)',
    contoh2: '山頂から町を見下ろした。\n(Melihat pemandangan bandar di bawah dari puncak gunung.)'
  },
  {
    id: 'm4h4_13',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '見合わせる',
    furigana: 'みあわせる',
    arti: 'Saling berpandangan / Menangguhkan',
    penjelasan: 'Perkataan ini membawa dua maksud berbeza: (1) saling melihat muka satu sama lain secara serentak kerana terkejut atau ragu-ragu; (2) menunda, menangguhkan, atau membatalkan buat sementara waktu suatu rancangan atas faktor keselamatan/cuaca.',
    contoh1: 'お互いに顔を見合わせる。\n(Saling berpandangan muka antara satu sama lain.)',
    contoh2: '大雨のため、出発を見合わせる。\n(Menangguhkan pergerakan bertolak akibat hujan lebat.)'
  },

  // --- KANJI 着 (Chaku) ---
  {
    id: 'm4h4_14',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '着手',
    furigana: 'ちゃくしゅ',
    arti: 'Mula mengerjakan / Memulakan langkah',
    penjelasan: 'Tindakan memulakan suatu kerja, projek, atau rancangan yang besar. Sering kali digunakan dalam situasi rasmi, penyelesaian masalah, perniagaan, mahupun siasatan polis.',
    contoh1: '新しい事業に着手する。\n(Mula mengerjakan perniagaan/projek baru.)',
    contoh2: '警察は事件の調査に着手した。\n(Pihak polis telah memulakan langkah siasatan ke atas kes itu.)'
  },
  {
    id: 'm4h4_15',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '着色',
    furigana: 'ちゃくしょく',
    arti: 'Mewarnakan / Memberi warna',
    penjelasan: 'Proses mencampurkan atau meletakkan warna kepada sesuatu bahan, seperti pada makanan, lukisan, atau produk pembuatan. Selalu digunakan bersama perkataan "ryou" (着色料) yang bermaksud pewarna tiruan.',
    contoh1: '着色料を使用する。\n(Menggunakan bahan pewarna.)',
    contoh2: 'このお菓子は人工的に着色されている。\n(Gula-gula ini diwarnakan secara tiruan/buatan.)'
  },
  {
    id: 'm4h4_16',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '着目',
    furigana: 'ちゃくもく',
    arti: 'Memberi perhatian / Memfokuskan kepada',
    penjelasan: 'Tindakan mengarahkan perhatian dan memfokuskan pandangan secara khusus pada satu aspek, sifat, atau titik tertentu kerana ia dirasakan unik, penting, atau mempunyai potensi yang besar.',
    contoh1: '子どもの個性に着目する。\n(Memberi perhatian/fokus kepada keperibadian unik kanak-kanak itu.)',
    contoh2: '新しい技術に着目して研究を進める。\n(Meneruskan penyelidikan dengan memfokuskan kepada teknologi baharu.)'
  },
  {
    id: 'm4h4_17',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '着工',
    furigana: 'ちゃっこう',
    arti: 'Mula pembinaan / Kerja pembinaan bermula',
    penjelasan: 'Istilah teknikal yang diguna pakai secara khusus untuk merujuk pada kerja-kerja awal permulaan pembinaan bangunan fizikal, infrastruktur, perumahan, atau empangan.',
    contoh1: '新ビルは来月着工する。\n(Bangunan baru akan mula dibina pada bulan hadapan.)',
    contoh2: 'ダムの着工が遅れている。\n(Kerja pembinaan empangan sedang mengalami kelewatan.)'
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
    penjelasan: 'Sama maksudnya dengan 昼も夜も (hiru mo yoru mo). Menggambarkan usaha gigih atau keadaan di mana sesuatu perkara itu dilakukan secara berterusan sepanjang waktu siang dan malam, tanpa mengira masa.',
    contoh1: '日夜勉強する。\n(Belajar siang dan malam.)',
    contoh2: '彼は研究に日夜没頭している。\n(Dia menumpukan sepenuh masa pada kajiannya siang dan malam.)'
  },
  {
    id: 'm4h4_19',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '日々',
    furigana: 'ひび',
    arti: 'Hari-hari / Kehidupan setiap hari',
    penjelasan: 'Menunjuk kepada peredaran hari yang berterusan. Sering digunakan untuk menceritakan mengenai cara hidup harian, rutin setiap hari, atau perasaan berkaitan keadaan hidup yang dilalui dari hari ke hari.',
    contoh1: '日々の暮らしに困る。\n(Kesusahan dalam meneruskan kehidupan hari-hari.)',
    contoh2: '平和な日々が続くことを願っている。\n(Berharap agar hari-hari yang aman damai akan sentiasa berterusan.)'
  },
  {
    id: 'm4h4_20',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '日ごろ',
    furigana: 'ひごろ',
    arti: 'Kebiasaan seharian / Pada kebiasaannya',
    penjelasan: 'Merujuk pada tabiat, amalan, atau rutin perilaku yang sudah dibiasakan pada setiap hari sejak sekian lama. Ia boleh menjadi perilaku yang baik mahupun sikap yang buruk.',
    contoh1: '日ごろの行い。\n(Kelakuan/amalan seharian.)',
    contoh2: '日ごろから運動するようにしている。\n(Saya mengamalkan senaman sebagai rutin kebiasaan seharian.)'
  },
  {
    id: 'm4h4_21',
    minggu: '4',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '終日',
    furigana: 'しゅうじつ',
    arti: 'Sepanjang hari / Satu hari suntuk',
    penjelasan: 'Perkataan rasmi dan formal untuk bermaksud 一日中 (ichinichijuu), iaitu sepanjang tempoh satu hari penuh. Sangat kerap dijumpai pada notis papan tanda, pengumuman rasmi, atau laporan perniagaan.',
    contoh1: '終日パソコンに向かう。\n(Berada di hadapan komputer sepanjang hari.)',
    contoh2: 'この道路は終日通行止めです。\n(Jalan ini ditutup sepenuhnya untuk laluan kenderaan sepanjang hari.)'
  },

  // --- KANJI 自 (Ji) ---
  {
    id: 'm4h4_22',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '自立',
    furigana: 'じりつ',
    arti: 'Berdikari / Mandiri',
    penjelasan: 'Keadaan di mana seseorang sudah mampu berdiri di atas kaki sendiri tanpa bergantung kepada bantuan atau sokongan orang lain, sama ada dari sudut ekonomi, fikiran, atau gaya hidup.',
    contoh1: '女性の自立。\n(Sikap berdikari dalam kalangan wanita.)',
    contoh2: '親から自立して一人暮らしを始める。\n(Mula hidup bersendirian dan berdikari daripada ibu bapa.)'
  },
  {
    id: 'm4h4_23',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '自主',
    furigana: 'じしゅ',
    arti: 'Inisiatif sendiri / Kehendak sendiri',
    penjelasan: 'Melakukan sesuatu berdasarkan kemampuan berfikir, kehendak, dan inisiatif diri sendiri tanpa perlu diarahkan, disuruh, atau dikawal oleh pihak luar.',
    contoh1: '自主的にトレーニングする。\n(Menjalani latihan atas inisiatif diri sendiri / secara bebas.)',
    contoh2: '生徒の自主性を尊重する。\n(Menghormati sifat inisiatif dan kemandirian para pelajar.)'
  },
  {
    id: 'm4h4_24',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '自首',
    furigana: 'じしゅ',
    arti: 'Menyerah diri',
    penjelasan: 'Tindakan yang kebiasaannya melibatkan seseorang pesalah atau suspek jenayah yang datang secara sukarela kepada pihak polis/berkuasa bagi mengakui kesalahan dan jenayah yang telah dilakukannya.',
    contoh1: '警察に自首する。\n(Menyerahkan diri kepada pihak polis.)',
    contoh2: '犯人は罪を悔いて自首した。\n(Penjenayah itu menyesali perbuatannya lalu menyerah diri.)'
  },

  // --- KANJI 売 (Bai/U) ---
  {
    id: 'm4h4_25',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '小売り',
    furigana: 'こうり',
    arti: 'Jualan runcit / Jual secara eceran',
    penjelasan: 'Model atau aktiviti penjualan produk kepada pengguna akhir dalam kuantiti yang sedikit dan berskala kecil, dan bukan menjual secara pukal (borong).',
    contoh1: 'これは小売りで５千円だ。\n(Barang ini harganya 5 ribu yen untuk jualan runcit.)',
    contoh2: '小売店で働く。\n(Bekerja di kedai runcit/eceran.)'
  },
  {
    id: 'm4h4_26',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '前売り',
    furigana: 'まえうり',
    arti: 'Jualan awal (Pre-sale)',
    penjelasan: 'Sistem penjualan tiket wayang, tiket konsert, atau produk sebelum majlis atau acara rasmi bermula. Selalunya ia dijual pada harga yang sedikit lebih murah daripada harga di hari kejadian.',
    contoh1: '映画の前売り券を買う。\n(Membeli tiket wayang jualan awal/pre-sale.)',
    contoh2: 'コンサートの前売りは明日から始まります。\n(Jualan awal tiket konsert akan bermula esok.)'
  },
  {
    id: 'm4h4_27',
    minggu: '4',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '売買',
    furigana: 'ばいばい',
    arti: 'Jual beli / Dagangan',
    penjelasan: 'Merujuk pada keseluruhan proses dan aktiviti yang melibatkan penjualan dan pembelian barangan, perkhidmatan, hartanah, mahupun saham. Ia adalah satu istilah perniagaan dan ekonomi yang formal.',
    contoh1: '株を売買する。\n(Melakukan jual beli / perdagangan saham.)',
    contoh2: '不動産の売買契約を結ぶ。\n(Memeterai kontrak jual beli hartanah.)'
  },

  // --- KANJI 間 (Kan/Ai/Ma) ---
  {
    id: 'm4h4_28',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '合間',
    furigana: 'あいま',
    arti: 'Masa terluang (di celah kesibukan)',
    penjelasan: 'Tempoh waktu rehat yang pendek di celah-celah dua jadual yang sibuk, atau masa terluang yang ada pada saat kerja terhenti buat sementara waktu.',
    contoh1: '仕事の合間。\n(Masa terluang di celah-celah kesibukan kerja.)',
    contoh2: '家事の合間に本を読む。\n(Membaca buku di masa terluang semasa sedang melakukan kerja rumah.)'
  },
  {
    id: 'm4h4_29',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '空間',
    furigana: 'くうかん',
    arti: 'Ruang / Ruangan / Spasi',
    penjelasan: 'Kawasan, ruang fizikal, atau dimensi di mana sesuatu objek boleh diletakkan atau aktiviti boleh dijalankan. Boleh merujuk kepada ruang sempit di dalam bilik mahupun ruang angkasa yang luas.',
    contoh1: '狭い空間を利用する。\n(Memanfaatkan ruangan/spasi yang sempit.)',
    contoh2: 'リラックスできる空間を作りたい。\n(Saya mahu membina satu ruang di mana orang boleh berehat dan tenang.)'
  },
  {
    id: 'm4h4_30',
    minggu: '4',
    hari: '4',
    kategori: 'kata benda',
    kanji: '民間',
    furigana: 'みんかん',
    arti: 'Swasta / Bukan kerajaan',
    penjelasan: 'Merujuk pada entiti, syarikat, atau organisasi dalam kalangan orang awam yang tidak dikawal, ditadbir, atau dimiliki oleh badan kerajaan negara.',
    contoh1: '民間企業。\n(Syarikat swasta.)',
    contoh2: 'このプロジェクトは民間の資金で運営されている。\n(Projek ini dikendalikan menggunakan dana kewangan dari pihak swasta.)'
  }
];

window.vocabData.push(...kosakata_m4h4);