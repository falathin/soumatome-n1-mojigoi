// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m3h3 = [
  // --- GAMBAR 1: Onomatope & Kata Keterangan Berakhiran -ri ---
  {
    id: 'm3h3_1',
    minggu: '3',
    hari: '3',
    kategori: 'Onomatope / kata keterangan',
    kanji: 'じっくり',
    furigana: 'じっくり',
    arti: 'Dengan teliti / Masak-masak',
    penjelasan: 'Melakukan sesuatu tindakan (seperti berfikir, melihat, atau berbincang) dengan mengambil masa yang cukup lama, tidak tergesa-gesa, dan difikirkan secara sangat mendalam sebelum bertindak.',
    contoh1: 'じっくり考えてから返事をする。\n(Berfikir masak-masak/dengan teliti sebelum memberikan jawapan.)',
    contoh2: '肉をじっくり煮込む。\n(Mereneh daging perlahan-lahan dengan teliti hingga empuk.)'
  },
  {
    id: 'm3h3_2',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'じっとり(する)',
    furigana: 'じっとり(する)',
    arti: 'Basah berpeluh / Lembap melekit',
    penjelasan: 'Menggambarkan keadaan basah yang tidak selesa, berat, dan melekit. Selalunya merujuk kepada peluh pada kulit apabila cuaca panas atau kelembapan di udara yang sangat tinggi.',
    contoh1: 'じっとりと汗ばむ。\n(Berpeluh basah dan melekit di badan.)',
    contoh2: 'じっとりした空気。\n(Udara yang lembap, hangat dan merimaskan.)'
  },
  {
    id: 'm3h3_3',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'しっとり(する)',
    furigana: 'しっとり(する)',
    arti: 'Lembap (halus/lembut) / Tenang dan ayu',
    penjelasan: 'Mempunyai dua maksud positif: 1) Sesuatu yang basah sedikit memberi tekstur kelembapan yang halus dan lembut (seperti kek, kulit wajah). 2) Sifat, gaya, atau perwatakan seseorang (terutamanya wanita) yang tenang, ayu, dan matang.',
    contoh1: 'しっとりとぬれる。\n(Basah sedikit / mempunyai kelembapan yang lembut.)',
    contoh2: 'しっとりと落ち着いた女性。\n(Wanita yang perwatakannya tenang, ayu dan matang.)'
  },
  {
    id: 'm3h3_4',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'あっさり(する)',
    furigana: 'あっさり(する)',
    arti: 'Hambar (ringan) / Dengan mudah',
    penjelasan: '1) Rasa makanan, rekaan corak, atau solekan yang sangat ringkas, nipis, dan tidak berat/berlemak. 2) Kejadian (seperti kalah perlawanan atau bersetuju) yang berlaku dengan sangat mudah tanpa berfikir panjang atau memberikan tentangan.',
    contoh1: 'あっさりした味。\n(Rasa makanan yang ringan, hambar, dan tidak memuakkan.)',
    contoh2: '試合にあっさり負ける。\n(Kalah dalam perlawanan dengan begitu mudah sekali.)'
  },
  {
    id: 'm3h3_5',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'さっぱり(する)',
    furigana: 'さっぱり(する)',
    arti: 'Segar / Berterus terang / Langsung tidak',
    penjelasan: '1) Perasaan fizikal yang sangat segar dan ringan (seperti lepas mandi/potong rambut). 2) Karakter manusia yang berterus-terang dan tidak pendendam. 3) Jika dipadankan dengan kata nafi (~nai), bermaksud "langsung tidak (tahu/ingat)".',
    contoh1: 'お風呂に入ってさっぱりした。\n(Berasa sangat segar dan ringan selepas mandi.)',
    contoh2: 'さっぱり思い出せない。\n(Langsung tidak boleh ingat walau sedikit pun.)'
  },
  {
    id: 'm3h3_6',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'がっしり(する)',
    furigana: 'がっしり(する)',
    arti: 'Tegap / Sasa / Kukuh',
    penjelasan: 'Biasa digunakan untuk menggambarkan susuk tubuh manusia atau haiwan yang besar rangkanya, berotot, tegap, dan nampak gagah/kuat. Boleh juga dipakai untuk struktur benda/bangunan.',
    contoh1: 'がっしりした体つき。\n(Susuk tubuh badan yang sasa dan tegap.)',
    contoh2: 'がっしりとしたドア。\n(Pintu yang diperbuat daripada bahan yang kukuh dan kuat.)'
  },
  {
    id: 'm3h3_7',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'がっちり(する)',
    furigana: 'がっちり(する)',
    arti: 'Kukuh (binaan) / Berkira (cekap kumpul wang)',
    penjelasan: '1) Serupa dengan "gasshiri", bermaksud struktur atau binaan yang sangat teguh dan kukuh. 2) Ciri perwatakan seseorang yang sangat gigih, berhati-hati, dan agak berkira (kedekut) dalam usaha menyimpan atau menguruskan wang.',
    contoh1: 'がっちり（＝がっしり）した建物。\n(Bangunan yang struktur binaannya sangat kukuh/utuh.)',
    contoh2: 'がっちりお金をためる。\n(Menyimpan wang dengan gigih dan bijak/berkira.)'
  },
  {
    id: 'm3h3_8',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'がっくり(する)',
    furigana: 'がっくり(する)',
    arti: 'Sangat kecewa / Patah semangat / Terkulai',
    penjelasan: 'Reaksi fizikal akibat hentakan emosi di mana seseorang kehilangan sepenuh tenaga secara tiba-tiba kerana kekecewaan, kejutan, atau putus asa yang besar. Selalunya digambarkan dengan kepala atau bahu yang tertunduk lemah.',
    contoh1: '試験に落ちてがっくり（＝がっかり）した。\n(Berasa kecewa yang amat sangat dan patah semangat kerana gagal peperiksaan.)',
    contoh2: 'がっくりと首をたれる。\n(Menundukkan kepala (terkulai) tanpa daya kerana putus asa.)'
  },
  {
    id: 'm3h3_9',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'きっかり',
    furigana: 'きっかり',
    arti: 'Tepat (masa/jumlah)',
    penjelasan: 'Menunjukkan spesifikasi masa, jumlah, angka, atau ukuran yang sangat tepat "ngam-ngam", tanpa ada sebarang lebihan mahupun kurangan. Sangat serupa dengan maksud ちょうど (choudo).',
    contoh1: 'きっかり10時に開店する。\n(Membuka kedai tepat pada pukul 10, tidak awal atau lewat seminit pun.)',
    contoh2: '料金はきっかり1000円です。\n(Bayarannya adalah genap / tepat 1000 yen.)'
  },
  {
    id: 'm3h3_10',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'きっぱり',
    furigana: 'きっぱり',
    arti: 'Dengan tegas / Jelas',
    penjelasan: 'Sikap, kata-kata, atau tindakan ketika membuat penolakan, memutuskan hubungan, atau menyatakan pendirian secara sangat tegas, terang-terangan (direct), dan tanpa berlapik agar tidak wujud sebarang keraguan.',
    contoh1: 'きっぱり断る。\n(Menolak pelawaan/permintaan dengan sangat tegas dan jelas.)',
    contoh2: 'タバコをきっぱりやめる。\n(Mengambil keputusan muktamad dan tegas untuk berhenti merokok.)'
  },
  {
    id: 'm3h3_11',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'ぐったり(する)',
    furigana: 'ぐったり(する)',
    arti: 'Teramat letih / Longlai tak bermaya',
    penjelasan: 'Keadaan di mana tubuh badan atau tumbuhan kehilangan sepenuh tenaga lalu menjadi lembik, melentur, dan terbaring longlai. Biasa terjadi kerana penyakit, kerja keras yang melampau, atau kepanasan cuaca.',
    contoh1: '疲れてぐったりする。\n(Keletihan yang amat sangat sehinggakan badan terasa longlai/lembik.)',
    contoh2: '暑さで植物がぐったりしている。\n(Tumbuhan melentur dan layu teruk akibat kepanasan.)'
  },
  {
    id: 'm3h3_12',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'くっきり(する)',
    furigana: 'くっきり(する)',
    arti: 'Jelas nyata / Terang (Pemandangan/Garisan)',
    penjelasan: 'Menggambarkan rupa bentuk, bayangan, imej, atau sempadan sesuatu yang sangat jelas, tajam warnanya, dan menonjol perbezaannya dari latar belakang (high contrast).',
    contoh1: '晴れて富士山がくっきり見える。\n(Oleh kerana cuaca cerah, Gunung Fuji kelihatan dengan sangat terang dan jelas nyata.)',
    contoh2: 'テレビの画像がくっきりしている。\n(Imej/gambar di skrin televisyen sangat tajam dan jelas.)'
  },
  {
    id: 'm3h3_13',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'ぐっしょり / びっしょり',
    furigana: 'ぐっしょり / びっしょり',
    arti: 'Basah kuyup / Lencun',
    penjelasan: 'Dua perkataan ini membawa maksud yang sama. Menunjukkan keadaan pakaian, rambut, atau objek yang teramat basah, lencun meresap air dengan sangat banyak (kerana hujan lebat atau peluh).',
    contoh1: '汗でぐっしょりぬれる。\n(Lencun / basah kuyup akibat berpeluh dengan banyak.)',
    contoh2: 'にわか雨に降られてびっしょりになった。\n(Menjadi basah kuyup ditimpa hujan lebat yang turun tiba-tiba.)'
  },
  {
    id: 'm3h3_14',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'げっそり',
    furigana: 'げっそり',
    arti: 'Cengkung / Susut berat badan secara drastik',
    penjelasan: 'Keadaan fizikal, terutamanya pada kawasan pipi/muka, yang secara tiba-tiba kehilangan isi (lemak/otot) lalu menjadi cengkung dan kurus kering kerana penyakit berat, kepenatan melampau, kerisauan, atau tekanan hidup.',
    contoh1: '病気でげっそりやせる。\n(Susut berat badan secara mendadak dan pipi menjadi cengkung kerana sakit.)',
    contoh2: '苦労してげっそりした顔。\n(Raut wajah yang kurus cengkung kerana menanggung pelbagai kesusahan hidup.)'
  },
  {
    id: 'm3h3_15',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'てっきり',
    furigana: 'てっきり',
    arti: 'Pasti sungguh / Menyangka bulat-bulat',
    penjelasan: 'Digunakan dalam ayat untuk menyatakan bahawa pada mulanya, penutur yakin 100% dan percaya bulat-bulat sesuatu itu adalah benar, tetapi realiti atau hasil yang terbongkar rupanya salah dan sama sekali berbeza (tersilap sangka).',
    contoh1: 'てっきりみんな知っていると思っていた。\n(Saya sangkakan bulat-bulat bahawa kesemua orang sudah mengetahuinya.)',
    contoh2: 'てっきり雨が降ると思ったが、晴れた。\n(Saya yakin pasti hari ini akan hujan, namun rupanya cerah.)'
  },
  {
    id: 'm3h3_16',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'まる(っ)きり',
    furigana: 'まる(っ)きり',
    arti: 'Sama sekali (tidak) / Sepenuhnya',
    penjelasan: 'Selalunya digabungkan dengan perkataan berunsur negatif (seperti ない) di hujung ayat untuk menegaskan makna "langsung tidak" atau "sama sekali tidak". Ia bersinonim dengan perkataan まるで (marude) atau 全く (mattaku).',
    contoh1: '昔とまるっきり（＝まるで）違っている。\n(Keadaannya sudah berbeza sepenuhnya / berubah sama sekali berbanding zaman dahulu.)',
    contoh2: '彼の話はまるっきり嘘だ。\n(Kisah yang diceritakannya itu sama sekali bohong belaka.)'
  },

  // --- GAMBAR 2: Onomatope & Keterangan Berakhiran Lain ---
  {
    id: 'm3h3_17',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'うんざり(する)',
    furigana: 'うんざり(する)',
    arti: 'Sangat bosan / Jelak / Naik muak',
    penjelasan: 'Tindak balas emosi negatif (jemu, meluat, menyampah) apabila terpaksa menghadapi sesuatu perkara, perbuatan, atau bebelan yang berulang-ulang tanpa henti sehinggakan kesabaran hilang.',
    contoh1: 'その話はもううんざりだ。\n(Saya sudah naik muak/jelak asyik mendengar cerita yang sama itu.)',
    contoh2: '毎日の残業にうんざりする。\n(Berasa sangat bosan dan muak dengan keadaan perlu bekerja lebih masa setiap hari.)'
  },
  {
    id: 'm3h3_18',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'すんなり(する)',
    furigana: 'すんなり(する)',
    arti: 'Langsing / Mulus lancar tanpa halangan',
    penjelasan: 'Perkataan ini melambangkan tiada rintangan. 1) Bentuk fizikal manusia atau garisan yang halus, runcing, langsing, dan lurus ke bawah. 2) Segala bentuk urusan, perundingan, atau kerja yang berlalu dengan lancar dan mudah tanpa wujudnya sebarang bantahan.',
    contoh1: 'すんなりした手足。\n(Lengan dan kaki yang bentuknya runcing / langsing menawan.)',
    contoh2: '問題はすんなり解決した。\n(Masalah tersebut dapat diselesaikan dengan sangat lancar tanpa sebarang halangan.)'
  },
  {
    id: 'm3h3_19',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'さっと',
    furigana: 'さっと',
    arti: 'Dengan pantas / Sekelip mata / Cepat-cepat',
    penjelasan: 'Merujuk kepada pergerakan manusia, tindakan fizikal, atau perubahan keadaan alam yang berlaku secara tangkas, singkat, lincah, dan sekelip mata (ibarat tiupan angin lalu).',
    contoh1: 'テーブルをさっとふく。\n(Mengelap meja dengan pergerakan yang lincah dan sangat pantas.)',
    contoh2: '雨がさっと降って、すぐやんだ。\n(Hujan turun dengan deras secara tiba-tiba, kemudian berhenti sekelip mata.)'
  },
  {
    id: 'm3h3_20',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'はっと(する)',
    furigana: 'はっと(する)',
    arti: 'Terkejut tiba-tiba / Tersedar',
    penjelasan: 'Menggambarkan reaksi terkejut atau tersentak seketika akibat bunyi bising yang datang mengejut. Ia juga bermaksud perasaan di mana seseorang tiba-tiba teringat kembali atau menyedari sesuatu hal penting yang terlupa.',
    contoh1: '物音にはっとする（＝驚く）。\n(Terkejut / tersentak secara tiba-tiba akibat bunyi sesuatu objek yang jatuh/bising.)',
    contoh2: 'はっと気がつく。\n(Tiba-tiba tersedar akan satu kesilapan / teringat akan satu hal.)'
  },
  {
    id: 'm3h3_21',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'きちっと(する)',
    furigana: 'きちっと(する)',
    arti: 'Kemas / Rapi / Sempurna',
    penjelasan: 'Perbuatan meletakkan barang, memakai pakaian, atau menyusun sistem dengan sangat rapi, teratur, sempurna, tepat pada tempatnya tanpa wujud cacat cela. Sama maksud dan fungsinya seperti perkataan きちんと (kichinto).',
    contoh1: '引き出しにきちっと（＝きちんと）しまう。\n(Menyimpan barang ke dalam laci dengan susunan yang rapi dan teratur.)',
    contoh2: 'きちっとした服装。\n(Pemakaian baju yang lengkap, kemas, dan menuruti peraturan peribadi/syarikat.)'
  },
  {
    id: 'm3h3_22',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'ぎゅっと',
    furigana: 'ぎゅっと',
    arti: 'Kuat-kuat / Erat-erat / Mampat',
    penjelasan: 'Daya genggaman, pelukan, putaran, ikatan, atau perahan yang dilakukan menggunakan tenaga yang sangat kuat, ketat, dan mampat supaya tidak terlepas.',
    contoh1: '手をぎゅっと握る。\n(Menggenggam tangan orang dengan sekuat-kuatnya/erat-erat.)',
    contoh2: 'レモンをぎゅっと絞る。\n(Memerah sebiji lemon dengan kuat untuk mengeluarkan semua jusnya.)'
  },
  {
    id: 'm3h3_23',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'ぴたりと',
    furigana: 'ぴたりと',
    arti: 'Tepat sekali (tekaan) / Terhenti serta-merta',
    penjelasan: 'Terdapat dua kegunaan utama: 1) Apabila membuat satu tekaan, ia mengena sasaran / jawapan yang tepat 100%. 2) Keadaan atau fenomena (seperti pergerakan jentera, angin, tangisan) yang tiba-tiba berhenti kaku tanpa sebarang pergerakan lagi.',
    contoh1: 'ぴたりと言い当てる。\n(Meneka jawapan / meramal masa depan dengan tepat tanpa sedikit pun tersasar.)',
    contoh2: '風がぴたりと止んだ。\n(Tiupan angin kencang itu secara tiba-tiba terhenti secara serta-merta.)'
  },
  {
    id: 'm3h3_24',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'ずばり',
    furigana: 'ずばり',
    arti: 'Tepat pada intipatinya / Berterus-terang',
    penjelasan: 'Tindakan menyampaikan pendapat, membongkar rahsia, atau memberi kritikan secara berterus-terang, tidak berlapik (no filter), dan menusuk terus kepada inti pati isu atau kelemahan sebenar tanpa berselindung.',
    contoh1: 'ずばり一言で言ってください。\n(Sila berterus-terang dan sebutkan intipati sebenarnya dalam satu perkataan/ayat sahaja.)',
    contoh2: 'ずばり急所を突く。\n(Memberi komen / serangan lisan yang menikam tepat ke arah titik kelemahan pihak lawan.)'
  }
];

window.vocabData.push(...kosakata_m3h3);