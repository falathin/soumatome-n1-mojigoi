// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m3h3 = [
  // --- GAMBAR 1: Onomatope & Kata Keterangan Berakhiran -ri ---
  {
    id: 'm3h3_1',
    minggu: '3',
    hari: '3',
    kategori: 'Onomatope',
    kanji: 'じっくり',
    furigana: 'じっくり',
    arti: 'Dengan teliti / Masak-masak',
    penjelasan: 'Melakukan sesuatu dengan pelan-pelan, tidak tergesa-gesa, dan dipikirkan secara mendalam.',
    contoh1: 'じっくり考えてから返事をする。\n(Berpikir masak-masak sebelum memberikan jawaban.)',
    contoh2: '肉をじっくり煮込む。\n(Merebus daging perlahan-lahan dengan teliti hingga empuk.)'
  },
  {
    id: 'm3h3_2',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'じっとり(する)',
    furigana: 'じっとり(する)',
    arti: 'Basah berpeluh / Lembap lengket',
    penjelasan: 'Kondisi basah yang lembap dan lengket, biasanya karena berkeringat atau udara yang sangat pengap sehingga terasa tidak nyaman.',
    contoh1: 'じっとりと汗ばむ。\n(Berkeringat basah dan lengket di badan.)',
    contoh2: 'じっとりした空気。\n(Udara yang lembap, hangat, dan membuat gerah.)'
  },
  {
    id: 'm3h3_3',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'しっとり(する)',
    furigana: 'しっとり(する)',
    arti: 'Lembap (halus/lembut) / Tenang dan anggun',
    penjelasan: '1) Sedikit lembap tapi memberikan tekstur yang halus dan lembut (seperti kue atau kulit). 2) Sifat seseorang (khususnya wanita) yang tenang, anggun, dan dewasa.',
    contoh1: 'しっとりとぬれる。\n(Basah sedikit / memiliki kelembapan yang lembut.)',
    contoh2: 'しっとりと落ち着いた女性。\n(Wanita yang perwatakannya tenang, anggun, dan dewasa.)'
  },
  {
    id: 'm3h3_4',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'あっさり(する)',
    furigana: 'あっさり(する)',
    arti: 'Hambar (ringan) / Dengan mudah',
    penjelasan: '1) Sesuatu yang ringan, sederhana, dan tidak berminyak (seperti rasa makanan). 2) Sesuatu yang terjadi atau diselesaikan dengan sangat mudah tanpa banyak penolakan.',
    contoh1: 'あっさりした味。\n(Rasa makanan yang ringan, tidak pekat, dan tidak membuat mual.)',
    contoh2: '試合にあっさり負ける。\n(Kalah dalam pertandingan dengan sangat mudah.)'
  },
  {
    id: 'm3h3_5',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'さっぱり(する)',
    furigana: 'さっぱり(する)',
    arti: 'Segar / Berterus terang / Sama sekali tidak',
    penjelasan: '1) Terasa sangat segar dan ringan (misalnya setelah mandi/potong rambut). 2) Sifat yang berterus-terang. 3) Jika ditambah kata negatif (~nai), artinya "sama sekali tidak (tahu/ingat)".',
    contoh1: 'お風呂に入ってさっぱりした。\n(Terasa sangat segar dan ringan setelah mandi.)',
    contoh2: 'さっぱり思い出せない。\n(Sama sekali tidak bisa mengingatnya walau sedikit pun.)'
  },
  {
    id: 'm3h3_6',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'がっしり(する)',
    furigana: 'がっしり(する)',
    arti: 'Tegap / Sasa / Kokoh',
    penjelasan: 'Menggambarkan bentuk tubuh yang besar kerangkanya, berotot, dan tegap. Bisa juga digunakan untuk benda/bangunan yang strukturnya kuat.',
    contoh1: 'がっしりした体つき。\n(Bentuk tubuh yang kekar dan tegap.)',
    contoh2: 'がっしりとしたドア。\n(Pintu yang terbuat dari bahan yang kokoh dan kuat.)'
  },
  {
    id: 'm3h3_7',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'がっちり(する)',
    furigana: 'がっちり(する)',
    arti: 'Kokoh (bangunan) / Pintar menabung',
    penjelasan: '1) Bangunan atau struktur yang sangat kuat dan kokoh (sama seperti "gasshiri"). 2) Sifat orang yang sangat teliti, berhitung, dan gigih dalam menabung atau mengelola uang.',
    contoh1: 'がっちり（＝がっしり）した建物。\n(Bangunan yang struktur buatannya sangat kokoh.)',
    contoh2: 'がっちりお金をためる。\n(Menyimpan uang dengan gigih dan bijak/penuh perhitungan.)'
  },
  {
    id: 'm3h3_8',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'がっくり(する)',
    furigana: 'がっくり(する)',
    arti: 'Sangat kecewa / Patah semangat / Terkulai',
    penjelasan: 'Reaksi fisik (seperti kepala tertunduk lemas) karena merasa sangat kecewa, putus asa, atau kaget hingga kehilangan tenaga secara tiba-tiba.',
    contoh1: '試験に落ちてがっくり（＝がっかり）した。\n(Merasa sangat kecewa dan patah semangat karena gagal ujian.)',
    contoh2: 'がっくりと首をたれる。\n(Menundukkan kepala terkulai lemas karena putus asa.)'
  },
  {
    id: 'm3h3_9',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'きっかり',
    furigana: 'きっかり',
    arti: 'Tepat (waktu/jumlah)',
    penjelasan: 'Menunjukkan waktu, jumlah, atau ukuran yang sangat pas dan akurat tanpa lebih atau kurang sedikit pun. Mirip dengan arti ちょうど (choudo).',
    contoh1: 'きっかり10時に開店する。\n(Buka toko tepat pada jam 10, tidak awal atau telat semenit pun.)',
    contoh2: '料金はきっかり1000円です。\n(Biayanya pas / genap 1000 yen.)'
  },
  {
    id: 'm3h3_10',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'きっぱり',
    furigana: 'きっぱり',
    arti: 'Dengan tegas / Jelas',
    penjelasan: 'Bersikap atau berbicara dengan sangat tegas dan jelas, terutama saat menolak, memutuskan hubungan, atau menyatakan pendirian tanpa keragu-raguan.',
    contoh1: 'きっぱり断る。\n(Menolak ajakan/permintaan dengan sangat tegas dan jelas.)',
    contoh2: 'タバコをきっぱりやめる。\n(Mengambil keputusan bulat dan tegas untuk berhenti merokok.)'
  },
  {
    id: 'm3h3_11',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'ぐったり(する)',
    furigana: 'ぐったり(する)',
    arti: 'Sangat letih / Lemas tak berdaya',
    penjelasan: 'Kondisi tubuh atau tanaman yang sangat lemas dan tidak bertenaga karena sakit, kelelahan parah, atau cuaca yang terlalu panas.',
    contoh1: '疲れてぐったりする。\n(Kelelahan yang amat sangat sampai badan terasa lemas/longlai.)',
    contoh2: '暑さで植物がぐったりしている。\n(Tanaman layu parah akibat kepanasan.)'
  },
  {
    id: 'm3h3_12',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'くっきり(する)',
    furigana: 'くっきり(する)',
    arti: 'Jelas nyata / Terang (Pemandangan/Garis)',
    penjelasan: 'Sesuatu yang terlihat dengan sangat jelas, tajam, dan memiliki kontras tinggi yang menonjol dari latar belakangnya (seperti gambar di TV atau pemandangan).',
    contoh1: '晴れて富士山がくっきり見える。\n(Karena cuaca cerah, Gunung Fuji terlihat dengan sangat terang dan jelas nyata.)',
    contoh2: 'テレビの画像がくっきりしている。\n(Gambar di layar televisi sangat tajam dan jelas.)'
  },
  {
    id: 'm3h3_13',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'ぐっしょり / びっしょり',
    furigana: 'ぐっしょり / びっしょり',
    arti: 'Basah kuyup / Lencun',
    penjelasan: 'Kondisi pakaian, rambut, atau badan yang sangat basah kuyup karena keringat berlebih atau kehujanan.',
    contoh1: '汗でぐっしょりぬれる。\n(Basah kuyup akibat berkeringat sangat banyak.)',
    contoh2: 'にわか雨に降られてびっしょりになった。\n(Menjadi basah kuyup tertimpa hujan deras yang turun tiba-tiba.)'
  },
  {
    id: 'm3h3_14',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'げっそり',
    furigana: 'げっそり',
    arti: 'Cekung / Turun berat badan drastis',
    penjelasan: 'Kondisi wajah (terutama pipi) yang tiba-tiba menjadi tirus, cekung, dan kurus karena penyakit berat, kelelahan, atau banyak pikiran.',
    contoh1: '病気でげっそりやせる。\n(Turun berat badan drastis dan pipi menjadi cekung karena sakit.)',
    contoh2: '苦労してげっそりした顔。\n(Raut wajah yang kurus cekung karena menanggung banyak beban hidup.)'
  },
  {
    id: 'm3h3_15',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'てっきり',
    furigana: 'てっきり',
    arti: 'Pasti sungguh / Menyangka bulat-bulat',
    penjelasan: 'Menunjukkan situasi di mana kita awalnya yakin 100% akan sesuatu, tapi ternyata kenyataannya berbeda sama sekali (salah sangka).',
    contoh1: 'てっきりみんな知っていると思っていた。\n(Saya mengira 100% bahwa semua orang sudah mengetahuinya.)',
    contoh2: 'てっきり雨が降ると思ったが、晴れた。\n(Saya yakin pasti akan hujan, tapi ternyata cerah.)'
  },
  {
    id: 'm3h3_16',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'まる(っ)きり',
    furigana: 'まる(っ)きり',
    arti: 'Sama sekali (tidak) / Sepenuhnya',
    penjelasan: 'Biasanya diikuti dengan kata negatif (seperti ない) untuk menegaskan makna "sama sekali tidak". Sinonim dengan kata まるで (marude) atau 全く (mattaku).',
    contoh1: '昔とまるっきり（＝まるで）違っている。\n(Keadaannya sudah berbeda sepenuhnya dibandingkan zaman dahulu.)',
    contoh2: '彼の話はまるっきり嘘だ。\n(Ceritanya itu sama sekali bohong belaka.)'
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
    penjelasan: 'Perasaan sangat bosan, muak, atau lelah hati karena harus menghadapi hal menjengkelkan atau omelan yang terjadi berulang-ulang tanpa henti.',
    contoh1: 'その話はもううんざりだ。\n(Saya sudah muak terus-terusan mendengar cerita yang sama itu.)',
    contoh2: '毎日の残業にうんざりする。\n(Merasa sangat bosan dan muak dengan kondisi harus lembur setiap hari.)'
  },
  {
    id: 'm3h3_18',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'すんなり(する)',
    furigana: 'すんなり(する)',
    arti: 'Langsing / Mulus lancar tanpa halangan',
    penjelasan: '1) Bentuk fisik manusia atau garis yang halus, ramping, dan lurus ke bawah. 2) Segala urusan atau negosiasi yang diselesaikan dengan sangat lancar tanpa hambatan.',
    contoh1: 'すんなりした手足。\n(Lengan dan kaki yang bentuknya ramping dan menawan.)',
    contoh2: '問題はすんなり解決した。\n(Masalah tersebut dapat diselesaikan dengan sangat lancar tanpa kendala.)'
  },
  {
    id: 'm3h3_19',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'さっと',
    furigana: 'さっと',
    arti: 'Dengan pantas / Sekelip mata / Cepat-cepat',
    penjelasan: 'Gerakan, tindakan fisik, atau kejadian alam yang berlangsung dengan sangat cepat, lincah, dan seketika (ibarat tiupan angin).',
    contoh1: 'テーブルをさっとふく。\n(Mengelap meja dengan gerakan yang lincah dan sangat cepat.)',
    contoh2: '雨がさっと降って、すぐやんだ。\n(Hujan turun dengan deras tiba-tiba, lalu berhenti dalam sekelip mata.)'
  },
  {
    id: 'm3h3_20',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'はっと(する)',
    furigana: 'はっと(する)',
    arti: 'Terkejut tiba-tiba / Tersadar',
    penjelasan: '1) Terkejut secara tiba-tiba (karena suara berisik atau kejadian mengejutkan). 2) Tiba-tiba sadar atau teringat kembali akan suatu hal penting yang terlupa.',
    contoh1: '物音にはっとする（＝驚く）。\n(Terkejut tiba-tiba akibat bunyi suatu benda yang jatuh.)',
    contoh2: 'はっと気がつく。\n(Tiba-tiba tersadar akan sebuah kesalahan / teringat sesuatu.)'
  },
  {
    id: 'm3h3_21',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'きちっと(する)',
    furigana: 'きちっと(する)',
    arti: 'Kemas / Rapi / Sempurna',
    penjelasan: 'Melakukan sesuatu (menyimpan barang, memakai baju, menyusun sesuatu) dengan sangat rapi, teratur, dan tepat pada tempatnya. Fungsinya sama seperti きちんと (kichinto).',
    contoh1: '引き出しにきちっと（＝きちんと）しまう。\n(Menyimpan barang ke dalam laci dengan susunan yang sangat rapi.)',
    contoh2: 'きちっとした服装。\n(Pakaian yang lengkap, rapi, dan menuruti aturan.)'
  },
  {
    id: 'm3h3_22',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'ぎゅっと',
    furigana: 'ぎゅっと',
    arti: 'Kuat-kuat / Erat-erat / Mampat',
    penjelasan: 'Menggenggam, memeluk, memutar, atau memeras menggunakan tenaga yang sangat kuat, erat, dan ketat agar tidak terlepas.',
    contoh1: '手をぎゅっと握る。\n(Menggenggam tangan dengan sekuat-kuatnya/erat-erat.)',
    contoh2: 'レモンをぎゅっと絞る。\n(Memeras lemon dengan kuat untuk mengeluarkan semua jusnya.)'
  },
  {
    id: 'm3h3_23',
    minggu: '3',
    hari: '3',
    kategori: 'onomatope',
    kanji: 'ぴたりと',
    furigana: 'ぴたりと',
    arti: 'Tepat sekali (tebakan) / Terhenti seketika',
    penjelasan: '1) Tebakan yang mengena sasaran dengan 100% akurat. 2) Sesuatu yang tiba-tiba berhenti kaku secara seketika (seperti mesin, angin, tangisan).',
    contoh1: 'ぴたりと言い当てる。\n(Menebak jawaban / meramal masa depan dengan tepat tanpa meleset sedikit pun.)',
    contoh2: '風がぴたりと止んだ。\n(Tiupan angin kencang itu seketika berhenti total.)'
  },
  {
    id: 'm3h3_24',
    minggu: '3',
    hari: '3',
    kategori: 'kata keterangan',
    kanji: 'ずばり',
    furigana: 'ずばり',
    arti: 'Tepat pada intinya / Berterus terang',
    penjelasan: 'Mengatakan pendapat, membongkar rahasia, atau memberi kritikan secara berterus-terang, langsung pada intinya (to the point), tanpa disembunyikan.',
    contoh1: 'ずばり一言で言ってください。\n(Tolong berterus terang dan sebutkan intinya dalam satu kata/kalimat saja.)',
    contoh2: 'ずばり急所を突く。\n(Memberi komentar yang menikam tepat sasaran ke arah titik kelemahan.)'
  }
];

window.vocabData.push(...kosakata_m3h3);