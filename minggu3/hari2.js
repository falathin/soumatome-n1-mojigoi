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
    arti: 'Pusing / Terhuyung-huyung',
    penjelasan: 'Kondisi fisik yang tidak stabil, seperti kepala pusing (berkunang-kunang) atau jalan terhuyung-huyung karena lelah atau sakit.',
    contoh1: '頭がふらふらする。\n(Kepala saya terasa pusing/berkunang-kunang.)',
    contoh2: '疲れてふらふら歩く。\n(Berjalan terhuyung-huyung karena terlalu lelah.)'
  },
  {
    id: 'm3h2_2',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'おどおど',
    furigana: 'おどおど',
    arti: 'Gugup / Ketakutan',
    penjelasan: 'Sikap gugup, cemas, atau takut-takut karena kurang percaya diri, terutama saat menghadapi situasi baru atau di depan orang banyak.',
    contoh1: '面接でおどおどする。\n(Bertingkah laku gugup dan kurang yakin saat wawancara.)',
    contoh2: '彼はいつもおどおどしている。\n(Dia selalu kelihatan cemas dan takut-takut.)'
  },
  {
    id: 'm3h2_3',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'くよくよ',
    furigana: 'くよくよ',
    arti: 'Merisaukan masa lalu / Murung',
    penjelasan: 'Terus-menerus memikirkan, meratapi, atau bersedih atas kegagalan masa lalu. Sering digunakan untuk membujuk seseorang agar berhenti bersedih.',
    contoh1: 'そんなにくよくよしないで。\n(Jangan terlalu murung/memikirkan hal itu lagi.)',
    contoh2: '失敗をくよくよ悩む。\n(Terus bersedih memikirkan kegagalan masa lalu.)'
  },
  {
    id: 'm3h2_4',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'ぴんぴん',
    furigana: 'ぴんぴん',
    arti: 'Sehat walafiat / Bugar',
    penjelasan: 'Keadaan seseorang (biasanya orang tua) yang masih sangat sehat, bugar, dan aktif tanpa ada tanda-tanda sakit sedikit pun.',
    contoh1: '祖父はぴんぴんしている。\n(Kakek saya masih sangat sehat walafiat / penuh tenaga.)',
    contoh2: '病気だと思っていたが、彼はぴんぴんしていた。\n(Saya kira dia sakit, rupanya dia sangat bugar.)'
  },
  {
    id: 'm3h2_5',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'ぺこぺこ',
    furigana: 'ぺこぺこ',
    arti: 'Sangat lapar / Menunduk hormat',
    penjelasan: 'Punya dua arti: 1) Perut yang sangat lapar hingga berbunyi. 2) Menundukkan kepala berkali-kali untuk memberi hormat atau meminta maaf.',
    contoh1: 'おなかがぺこぺこだ。\n(Perut saya sangat lapar.)',
    contoh2: 'ぺこぺこお辞儀をする。\n(Menunduk hormat berkali-kali.)'
  },
  {
    id: 'm3h2_6',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'こつこつ',
    furigana: 'こつこつ',
    arti: 'Sedikit demi sedikit / Bunyi ketukan',
    penjelasan: 'Punya dua arti: 1) Melakukan atau mengumpulkan sesuatu (seperti menabung uang) sedikit demi sedikit secara konsisten. 2) Bunyi ketukan (seperti suara sepatu atau pintu diketuk).',
    contoh1: 'こつこつ貯金する。\n(Menabung sedikit demi sedikit secara konsisten.)',
    contoh2: '靴音がこつこつと響く。\n(Bunyi langkah sepatu bergema berketak-ketuk.)'
  },
  {
    id: 'm3h2_7',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'ゆうゆう',
    furigana: 'ゆうゆう',
    arti: 'Dengan tenang / Masih banyak waktu',
    penjelasan: 'Melakukan sesuatu dengan santai, tenang, dan tidak terburu-buru sama sekali karena memiliki banyak waktu atau ruang yang cukup.',
    contoh1: '待ち合わせにゆうゆう間に合う。\n(Tiba awal di tempat pertemuan dengan waktu yang masih sangat santai.)',
    contoh2: 'ゆうゆうと散歩する。\n(Jalan-jalan bersantai dengan sangat tenang.)'
  },
  {
    id: 'm3h2_8',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'はらはら',
    furigana: 'はらはら',
    arti: 'Berdebar-debar / Gugur berguguran',
    penjelasan: 'Punya dua arti: 1) Berdebar-debar atau cemas saat melihat situasi yang menegangkan/berbahaya. 2) Benda ringan (seperti kelopak bunga atau air mata) yang jatuh berguguran dengan sunyi.',
    contoh1: '見ていてはらはらする。\n(Merasa berdebar-debar/cemas saat melihatnya.)',
    contoh2: '花びらがはらはらと散っている。\n(Kelopak bunga gugur berguguran ke tanah.)'
  },
  {
    id: 'm3h2_9',
    minggu: '3',
    hari: '2',
    kategori: 'onomatope',
    kanji: 'むかむか',
    furigana: 'むかむか',
    arti: 'Mual / Muak (marah)',
    penjelasan: 'Punya dua arti: 1) Perut terasa mual dan ingin muntah. 2) Merasa muak, marah, atau jengkel terhadap sikap seseorang (sering juga disebut むかつく).',
    contoh1: '胃がむかむかする。\n(Perut saya terasa mual.)',
    contoh2: '彼の態度にむかむかする（＝むかつく）。\n(Saya sangat muak/jengkel dengan sikapnya.)'
  },
  {
    id: 'm3h2_10',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'いやいや',
    furigana: 'いやいや',
    arti: 'Dengan terpaksa / Enggan',
    penjelasan: 'Melakukan suatu tugas atau permintaan dengan setengah hati, tidak rela, enggan, atau murni karena terpaksa.',
    contoh1: 'いやいや仕事をする。\n(Bekerja dengan rasa terpaksa / enggan.)',
    contoh2: 'いやいやながら承知した。\n(Setuju melakukannya meski dengan berat hati.)'
  },
  {
    id: 'm3h2_11',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'しぶしぶ',
    furigana: 'しぶしぶ',
    arti: 'Dengan berat hati / Segan',
    penjelasan: 'Akhirnya setuju atau melakukan sesuatu setelah terus didesak, tetapi dengan rasa sangat terpaksa dan berat hati yang terlihat jelas.',
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
    arti: 'Sangat terasa / Sepenuhnya',
    penjelasan: 'Merasakan sesuatu secara mendalam setelah merenung atau mengalaminya berkali-kali. Sering dipakai untuk menyatakan kekecewaan, keluhan, atau kesadaran penuh.',
    contoh1: '自分がつくづくいやになる。\n(Saya merasa betul-betul kecewa/muak dengan diri sendiri.)',
    contoh2: '彼のわがままにはつくづく呆れる。\n(Saya betul-betul kehabisan kata-kata melihat keegoisannya.)'
  },

  // --- 時 (Masa & Kekerapan) ---
  {
    id: 'm3h2_13',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'ぼつぼつ',
    furigana: 'ぼつぼつ',
    arti: 'Sudah tiba waktunya / Perlahan-lahan',
    penjelasan: 'Mirip dengan "soro-soro" (そろそろ). Digunakan saat merasa sudah waktunya untuk mulai bersiap, bertindak, atau pergi secara perlahan.',
    contoh1: 'さあ、ぼつぼつ（＝そろそろ）出かけよう。\n(Nah, sudah waktunya bagi kita untuk berangkat.)',
    contoh2: 'ぼつぼつ始めましょう。\n(Mari kita mulai perlahan-lahan dari sekarang.)'
  },
  {
    id: 'm3h2_14',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'ちょくちょく',
    furigana: 'ちょくちょく',
    arti: 'Sering / Kerap kali',
    penjelasan: 'Menunjukkan sesuatu yang terjadi berulang kali atau sangat sering dalam waktu dekat. Biasanya dipakai dalam percakapan kasual sehari-hari.',
    contoh1: '彼はちょくちょく遊びに来る。\n(Dia sering sekali datang main ke sini.)',
    contoh2: 'ちょくちょく電話をかける。\n(Terlalu sering menelepon.)'
  },
  {
    id: 'm3h2_15',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'しばしば',
    furigana: 'しばしば',
    arti: 'Sering terjadi / Kerap',
    penjelasan: 'Mirip dengan "tabitabi" (たびたび) tapi bernada lebih formal. Menunjukkan kejadian, peristiwa, atau fenomena yang sering terjadi.',
    contoh1: '地震がしばしば（＝たびたび）起こる。\n(Gempa bumi kerap / sering terjadi.)',
    contoh2: 'こういうミスはしばしばある。\n(Kesalahan seperti ini memang sering terjadi.)'
  },

  // --- その他 (Lain-lain / Kata Ganda Keterangan) ---
  {
    id: 'm3h2_16',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '代わる代わる',
    furigana: 'かわるがわる',
    arti: 'Berganti-ganti / Bergiliran',
    penjelasan: 'Melakukan sesuatu secara bergiliran atau bertukar posisi dengan orang lain. Maknanya sama dengan frasa "koutai de" (交代で).',
    contoh1: '代わる代わる（＝交代で）意見を述べる。\n(Memberikan pendapat secara bergiliran.)',
    contoh2: '友達と代わる代わる運転する。\n(Menyetir mobil bergantian dengan teman.)'
  },
  {
    id: 'm3h2_17',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'ところどころ',
    furigana: 'ところどころ',
    arti: 'Di sana-sini / Beberapa tempat',
    penjelasan: 'Keadaan yang tidak tersebar di semua tempat, melainkan hanya bisa dilihat di beberapa titik atau bagian tertentu saja.',
    contoh1: '壁がところどころ汚れている。\n(Dinding itu kotor di sana-sini / di beberapa bagian.)',
    contoh2: 'ところどころに花が咲いている。\n(Bunga mekar di beberapa titik tertentu.)'
  },
  {
    id: 'm3h2_18',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'わざわざ',
    furigana: 'わざわざ',
    arti: 'Bersusah payah / Secara khusus',
    penjelasan: 'Sengaja meluangkan waktu atau bersusah payah melakukan sesuatu yang tidak diwajibkan. Bisa bernada apresiasi (terima kasih) atau kritikan (mengapa repot-repot).',
    contoh1: 'わざわざお越しいただいて……。\n(Terima kasih sudah sudi bersusah payah datang...)',
    contoh2: 'わざわざ行く必要はない。\n(Tidak perlu repot-repot pergi ke sana.)'
  },
  {
    id: 'm3h2_19',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: 'くれぐれも',
    furigana: 'くれぐれも',
    arti: 'Tolonglah / Sepenuh hati',
    penjelasan: 'Ungkapan penegasan yang diletakkan di awal kalimat yang berarti "sungguh-sungguh" atau "tolonglah". Digunakan saat memberi pesan, peringatan, atau harapan.',
    contoh1: 'くれぐれもよろしくお伝えください。\n(Tolong sungguh-sungguh sampaikan salam hormat saya kepadanya.)',
    contoh2: 'くれぐれも体に気をつけてください。\n(Tolong sungguh-sungguh jaga kesehatan Anda.)'
  },
  {
    id: 'm3h2_20',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '方々',
    furigana: 'ほうぼう',
    arti: 'Di mana-mana / Ke berbagai arah',
    penjelasan: 'Ke mana-mana atau di berbagai tempat. Merujuk pada aktivitas berkeliling, mencari, atau bergerak secara meluas di banyak area.',
    contoh1: '方々歩き回る。\n(Berjalan merayau-rayau ke berbagai tempat.)',
    contoh2: '方々探し回ったが見つからなかった。\n(Puas mencari ke mana-mana namun tidak ketemu.)'
  },
  {
    id: 'm3h2_21',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '種々',
    furigana: 'しゅしゅ',
    arti: 'Beraneka ragam / Bermacam-macam',
    penjelasan: 'Menunjukkan banyak pilihan, bentuk, atau variasi. Ini adalah versi yang lebih formal dari kata "iroiro" (色々).',
    contoh1: 'サイズが種々ある。\n(Ukurannya bermacam-macam/beraneka ragam.)',
    contoh2: '種々の理由で断られた。\n(Ditolak dengan beraneka macam alasan.)'
  },
  {
    id: 'm3h2_22',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '着々',
    furigana: 'ちゃくちゃく',
    arti: 'Dengan lancar / Sesuai rencana',
    penjelasan: 'Menggambarkan suatu proses, persiapan, atau perkembangan yang terus berjalan dengan stabil dan lancar selangkah demi selangkah tanpa hambatan.',
    contoh1: '着々と進んでいる。\n(Sedang berjalan dengan lancar / berangsur maju secara teratur.)',
    contoh2: '準備は着々と進んでいる。\n(Persiapan sedang diselesaikan dengan lancar sesuai rencana.)'
  },
  {
    id: 'm3h2_23',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '長々',
    furigana: 'ながなが',
    arti: 'Sangat lama / Berlarut-larut',
    penjelasan: 'Waktu yang memakan durasi sangat panjang sehingga mungkin mengganggu orang lain, atau penjelasan yang meleret/berlarut-larut hingga membosankan.',
    contoh1: '長々とおじゃましました。\n(Maafkan saya karena sudah bertamu/mengganggu untuk waktu yang sangat lama.)',
    contoh2: '長々と話をする。\n(Berbicara dengan amat panjang dan berlarut-larut.)'
  },
  {
    id: 'm3h2_24',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '転々',
    furigana: 'てんてん',
    arti: 'Berpindah-pindah',
    penjelasan: 'Kondisi sering berpindah-pindah tempat tinggal, lokasi, atau pekerjaan tanpa pernah menetap lama di satu tempat.',
    contoh1: '職場を転々とする。\n(Sering berpindah-pindah tempat kerja.)',
    contoh2: '各地を転々として暮らす。\n(Menjalani hidup dengan berpindah-pindah dari satu daerah ke daerah lain.)'
  },
  {
    id: 'm3h2_25',
    minggu: '3',
    hari: '2',
    kategori: 'kata keterangan',
    kanji: '点々',
    furigana: 'てんてん',
    arti: 'Bertitik-titik / Tetesan tersebar',
    penjelasan: 'Berupa titik-titik (bintik-bintik) atau tetesan cairan kecil (seperti darah, keringat, atau hujan) yang jatuh dan tersebar di sebuah permukaan.',
    contoh1: '床に血が点々とついている。\n(Ada tetesan darah yang bertitik-titik tersebar di lantai.)',
    contoh2: '汗が点々と落ちる。\n(Keringat jatuh menetes.)'
  }
];

window.vocabData.push(...kosakata_m3h2);