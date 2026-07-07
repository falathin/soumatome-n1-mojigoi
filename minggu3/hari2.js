// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m3h2 = [
  // --- GAMBAR 1: 様子・人 (Keadaan & Tingkah Laku Orang) ---
  {
    id: 'm3h2_1',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'ふらふら',
    furigana: 'ふらふら',
    arti: 'Pening / Terhuyung-hayang',
    penjelasan: 'Menggambarkan keadaan fizikal yang tidak stabil, seperti kepala yang berasa pening (mahu pitam), atau cara berjalan yang terhuyung-hayang akibat keletihan atau penyakit.',
    contoh1: '頭がふらふらする。\n(Kepala saya berasa pening/berpusing-pusing.)',
    contoh2: '疲れてふらふら歩く。\n(Berjalan terhuyung-hayang kerana terlampau letih.)'
  },
  {
    id: 'm3h2_2',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'おどおど',
    furigana: 'おどおど',
    arti: 'Gementar / Ketakutan',
    penjelasan: 'Menunjukkan tingkah laku seseorang yang sangat gementar, cemas, takut-takut, atau kurang keyakinan diri terutamanya apabila berhadapan dengan situasi baharu atau di hadapan orang lain.',
    contoh1: '面接でおどおどする。\n(Bertingkah laku gementar dan kurang yakin semasa temu duga.)',
    contoh2: '彼はいつもおどおどしている。\n(Dia sentiasa kelihatan cemas dan takut-takut.)'
  },
  {
    id: 'm3h2_3',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'くよくよ',
    furigana: 'くよくよ',
    arti: 'Merisaukan hal lepas / Murung',
    penjelasan: 'Sikap asyik memikirkan, meratapi, atau bersedih tentang kesilapan dan kegagalan yang telah berlalu. Selalunya digunakan dalam bentuk negatif untuk memujuk seseorang agar berhenti bersedih.',
    contoh1: 'そんなにくよくよしないで。\n(Janganlah asyik murung/merisaukan hal itu sangat.)',
    contoh2: '失敗をくよくよ悩む。\n(Asyik bersedih memikirkan kegagalan masa lalu.)'
  },
  {
    id: 'm3h2_4',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'ぴんぴん',
    furigana: 'ぴんぴん',
    arti: 'Sihat walafiat / Cergas',
    penjelasan: 'Menggambarkan keadaan seseorang (biasanya merujuk kepada orang tua) yang masih sangat sihat, bertenaga, cergas, dan aktif secara fizikal tanpa sebarang tanda penyakit.',
    contoh1: '祖父はぴんぴんしている。\n(Datuk saya masih sangat sihat walafiat / penuh bertenaga.)',
    contoh2: '病気だと思っていたが、彼はぴんぴんしていた。\n(Saya sangkakan dia sakit, rupanya dia sangat cergas.)'
  },
  {
    id: 'm3h2_5',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'ぺこぺこ',
    furigana: 'ぺこぺこ',
    arti: 'Sangat lapar / Menunduk hormat',
    penjelasan: 'Perkataan ini mempunyai dua maksud utama: 1) Perasaan perut yang teramat lapar (seperti perut berbunyi). 2) Perbuatan menundukkan kepala berulang kali secara merendah diri untuk menghormati seseorang atau memohon maaf.',
    contoh1: 'おなかがぺこぺこだ。\n(Perut saya sangat lapar.)',
    contoh2: 'ぺこぺこお辞儀をする。\n(Menunduk hormat berulang kali.)'
  },
  {
    id: 'm3h2_6',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'こつこつ',
    furigana: 'こつこつ',
    arti: 'Sedikit demi sedikit / Bunyi ketukan',
    penjelasan: 'Sama seperti "pekopeko", ini juga ada dua maksud: 1) Melakukan usaha atau mengumpul sesuatu (seperti duit atau pelajaran) sedikit demi sedikit secara konsisten dan gigih. 2) Bunyi ketukan tapak kasut yang keras atau benda yang diketuk.',
    contoh1: 'こつこつ貯金する。\n(Menyimpan wang sedikit demi sedikit secara konsisten.)',
    contoh2: '靴音がこつこつと響く。\n(Bunyi tapak kasut bergema berketak-ketuk.)'
  },
  {
    id: 'm3h2_7',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'ゆうゆう',
    furigana: 'ゆうゆう',
    arti: 'Dengan tenang / Masih banyak masa',
    penjelasan: 'Keadaan di mana seseorang mempunyai kelapangan masa, keupayaan, atau ruang yang cukup sehingga dapat melakukan sesuatu dengan tenang, santai, dan tidak perlu tergesa-gesa langsung.',
    contoh1: '待ち合わせにゆうゆう間に合う。\n(Tiba awal di tempat pertemuan dengan masa yang masih terluang/santai.)',
    contoh2: 'ゆうゆうと散歩する。\n(Berjalan-jalan bersiar-siar dengan sangat tenang.)'
  },
  {
    id: 'm3h2_8',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'はらはら',
    furigana: 'はらはら',
    arti: 'Berdebar-debar / Gugur berguguran',
    penjelasan: 'Mempunyai dua maksud berbeza: 1) Perasaan risau, cemas, atau berdebar-debar ketika melihat situasi yang berbahaya atau menegangkan. 2) Keadaan benda kecil dan ringan (seperti kelopak bunga atau air mata) yang jatuh berguguran dengan senyap.',
    contoh1: '見ていてはらはらする。\n(Berasa berdebar-debar/cemas apabila melihatnya.)',
    contoh2: '花びらがはらはらと散っている。\n(Kelopak bunga gugur berguguran ke tanah.)'
  },
  {
    id: 'm3h2_9',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'むかむか',
    furigana: 'むかむか',
    arti: 'Loya / Menyampah (marah)',
    penjelasan: '1) Perasaan tidak selesa pada perut seperti loya dan mahu muntah. 2) Perasaan marah, meluat, atau sangat menyampah terhadap sikap dan tingkah laku seseorang (juga sering disebut むかつく).',
    contoh1: '胃がむかむかする。\n(Perut saya berasa loya/mual.)',
    contoh2: '彼の態度にむかむかする（＝むかつく）。\n(Saya sangat menyampah dengan sikapnya.)'
  },
  {
    id: 'm3h2_10',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'いやいや',
    furigana: 'いやいや',
    arti: 'Dengan terpaksa / Enggan',
    penjelasan: 'Merujuk kepada perbuatan melakukan sesuatu tugas atau permintaan dengan perasaan tidak rela, enggan, separuh hati, atau kerana terpaksa (tiada pilihan lain).',
    contoh1: 'いやいや仕事をする。\n(Bekerja dengan rasa terpaksa / enggan.)',
    contoh2: 'いやいやながら承知した。\n(Bersetuju melakukkannya walau dengan hati yang berat.)'
  },
  {
    id: 'm3h2_11',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'しぶしぶ',
    furigana: 'しぶしぶ',
    arti: 'Dengan berat hati / Keberatan',
    penjelasan: 'Situasi di mana seseorang akhirnya bersetuju atau melakukan sesuatu selepas didesak, tetapi melakukannya dengan sangat teragak-agak dan dengan rasa berat hati yang sangat ketara.',
    contoh1: 'しぶしぶ承知する。\n(Bersetuju dengan rasa yang sangat berat hati.)',
    contoh2: 'しぶしぶ謝る。\n(Meminta maaf dengan terpaksa/tidak ikhlas.)'
  },
  {
    id: 'm3h2_12',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'つくづく',
    furigana: 'つくづく',
    arti: 'Betul-betul (terasanya) / Sepenuhnya',
    penjelasan: 'Perasaan kuat yang timbul secara mendalam dari lubuk hati setelah melalui proses memerhati, berfikir, atau mengalami sesuatu hal berulang kali. Sering digunakan untuk menunjukkan kekecewaan, kekesalan, atau kesedaran penuh.',
    contoh1: '自分がつくづくいやになる。\n(Saya berasa betul-betul kecewa/meluat dengan diri sendiri.)',
    contoh2: '彼のわがままにはつくづく呆れる。\n(Saya betul-betul terkedu dengan kedegilan dan sikap mementingkan dirinya.)'
  },

  // --- 時 (Masa & Kekerapan) ---
  {
    id: 'm3h2_13',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'ぼつぼつ',
    furigana: 'ぼつぼつ',
    arti: 'Sudah tiba masanya / Perlahan-lahan',
    penjelasan: 'Membawa makna yang hampir sama dengan そろそろ (sorosoro). Digunakan apabila mencadangkan sudah tiba masanya untuk memulakan persiapan, beredar, atau bertindak secara perlahan-lahan.',
    contoh1: 'さあ、ぼつぼつ（＝そろそろ）出かけよう。\n(Baiklah, sudah tiba masanya untuk kita bertolak.)',
    contoh2: 'ぼつぼつ始めましょう。\n(Mari kita mula lakukannya perlahan-lahan dari sekarang.)'
  },
  {
    id: 'm3h2_14',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'ちょくちょく',
    furigana: 'ちょくちょく',
    arti: 'Kerap kali / Acap kali',
    penjelasan: 'Menunjukkan bahawa sesuatu perkara atau tindakan itu berlaku berulang kali dalam selang masa yang agak singkat. Perkataan ini sering digunakan dalam perbualan harian (kasual).',
    contoh1: '彼はちょくちょく遊びに来る。\n(Dia kerap kali datang singgah bermain ke sini.)',
    contoh2: 'ちょくちょく電話をかける。\n(Terlalu kerap menelefon.)'
  },
  {
    id: 'm3h2_15',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'しばしば',
    furigana: 'しばしば',
    arti: 'Sering berlaku / Kerap',
    penjelasan: 'Membawa makna yang sama dengan たびたび (tabitabi) tetapi dengan nada yang lebih formal. Digunakan untuk merujuk kepada peristiwa, fenomena, atau kejadian yang berulang kali terjadi.',
    contoh1: '地震がしばしば（＝たびたび）起こる。\n(Gempa bumi kerap / sering berlaku.)',
    contoh2: 'こういうミスはしばしばある。\n(Kesilapan seperti ini memang sering terjadi.)'
  },

  // --- その他 (Lain-lain / Kata Ganda Keterangan) ---
  {
    id: 'm3h2_16',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '代わる代わる',
    furigana: 'かわるがわる',
    arti: 'Bergilir-gilir / Silih berganti',
    penjelasan: 'Satu tindakan yang dilakukan secara bergilir-gilir atau bertukar ganti orang untuk satu tugasan. Sama maksudnya dengan frasa 交代で (koutai de).',
    contoh1: '代わる代わる（＝交代で）意見を述べる。\n(Memberikan pendapat secara bergilir-gilir/berpas-pasan.)',
    contoh2: '友達と代わる代わる運転する。\n(Memandu kereta silih berganti dengan rakan.)'
  },
  {
    id: 'm3h2_17',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'ところどころ',
    furigana: 'ところどころ',
    arti: 'Di sana sini / Beberapa tempat',
    penjelasan: 'Merujuk kepada suatu keadaan yang tidak wujud di merata-rata tempat, tetapi hanya dapat dilihat berselerak di beberapa bahagian atau titik tertentu sahaja.',
    contoh1: '壁がところどころ汚れている。\n(Dinding itu kotor di beberapa bahagian / di sana sini.)',
    contoh2: 'ところどころに花が咲いている。\n(Bunga mekar di beberapa tempat tertentu.)'
  },
  {
    id: 'm3h2_18',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'わざわざ',
    furigana: 'わざわざ',
    arti: 'Bersusah payah / Secara khusus',
    penjelasan: 'Menunjukkan perbuatan seseorang yang sanggup meluangkan masa, usaha, atau kos tambahan untuk melakukan sesuatu yang sebenarnya tidak diwajibkan. Boleh mengandungi unsur penghargaan (terima kasih) atau kritikan (kenapa susahkan diri).',
    contoh1: 'わざわざお越しいただいて……。\n(Terima kasih kerana sudi bersusah payah datang...)',
    contoh2: 'わざわざ行く必要はない。\n(Tidak perlu bersusah payah pergi ke sana.)'
  },
  {
    id: 'm3h2_19',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'くれぐれも',
    furigana: 'くれぐれも',
    arti: 'Tolonglah sangat / Sepenuh hati',
    penjelasan: 'Satu ungkapan penegasan yang diletakkan pada awal ayat apabila kita ingin memberi pesanan, peringatan, atau harapan kepada seseorang dengan sungguh-sungguh.',
    contoh1: 'くれぐれもよろしくお伝えください。\n(Tolonglah sampaikan salam hormat saya kepada beliau.)',
    contoh2: 'くれぐれも体に気をつけてください。\n(Tolonglah sungguh-sungguh jaga kesihatan diri anda.)'
  },
  {
    id: 'm3h2_20',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '方々',
    furigana: 'ほうぼう',
    arti: 'Merata-rata / Di pelbagai arah',
    penjelasan: 'Merujuk kepada pergerakan mencari, berjalan, atau beredar ke arah yang sangat banyak atau merata-rata kawasan secara meluas.',
    contoh1: '方々歩き回る。\n(Berjalan merayau-rayau di merata-rata tempat.)',
    contoh2: '方々探し回ったが見つからなかった。\n(Puas mencari di merata-rata arah namun tidak menjumpainya.)'
  },
  {
    id: 'm3h2_21',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '種々',
    furigana: 'しゅしゅ',
    arti: 'Beraneka jenis / Bermacam-macam',
    penjelasan: 'Menunjukkan kewujudan kepelbagaian bentuk, saiz, pilihan, atau variasi dalam jumlah yang banyak. Ia adalah perkataan yang lebih formal berbanding 色々 (iroiro).',
    contoh1: 'サイズが種々ある。\n(Mempunyai saiz yang bermacam-macam/pelbagai jenis.)',
    contoh2: '種々の理由で断られた。\n(Ditolak atas beraneka jenis alasan.)'
  },
  {
    id: 'm3h2_22',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '着々',
    furigana: 'ちゃくちゃく',
    arti: 'Dengan lancar / Mengikut rancangan',
    penjelasan: 'Menggambarkan status satu proses kerja, perkembangan, atau persiapan yang sedang bergerak ke hadapan secara berterusan, stabil, dan lancar selangkah demi selangkah tanpa masalah.',
    contoh1: '着々と進んでいる。\n(Sedang berjalan dengan lancar / beransur maju secara teratur.)',
    contoh2: '準備は着々と進んでいる。\n(Persiapan sedang disiapkan dengan lancar mengikut perancangan.)'
  },
  {
    id: 'm3h2_23',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '長々',
    furigana: 'ながなが',
    arti: 'Sangat lama / Panjang meleret',
    penjelasan: 'Tempoh masa yang memakan masa terlalu panjang sehingga mungkin menyebabkan gangguan kepada orang lain, atau penerangan yang sangat meleret-leret sehingga membosankan.',
    contoh1: '長々とおじゃましました。\n(Maafkan saya kerana telah mengganggu/bertamu untuk waktu yang sangat lama.)',
    contoh2: '長々と話をする。\n(Bercakap dengan amat panjang berjela/meleret.)'
  },
  {
    id: 'm3h2_24',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '転々',
    furigana: 'てんてん',
    arti: 'Berpindah-pindah',
    penjelasan: 'Keadaan hidup di mana seseorang kerap mengubah lokasi, bertukar pekerjaan, alamat, atau tempat menginap dari satu destinasi ke destinasi yang baharu tanpa pernah menetap kekal.',
    contoh1: '職場を転々とする。\n(Kerap berpindah-pindah tempat kerja.)',
    contoh2: '各地を転々として暮らす。\n(Meneruskan hidup dengan silih berganti lokasi dari satu daerah ke daerah lain.)'
  },
  {
    id: 'm3h2_25',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '点々',
    furigana: 'てんてん',
    arti: 'Bertitik-titik / Titisan berselerak',
    penjelasan: 'Corak bintik-bintik, atau sisa titisan cecair kecil (seperti kesan darah, peluh, atau hujan) yang jatuh dan bertebaran pada sebuah permukaan secara bertitik-titik.',
    contoh1: '床に血が点々とついている。\n(Terdapat titisan darah yang bertitik-titik berselerakan pada lantai.)',
    contoh2: '汗が点々と落ちる。\n(Peluh jatuh menitik-nitik.)'
  }
];

window.vocabData.push(...kosakata_m3h2);