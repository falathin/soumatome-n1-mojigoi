// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m2h2 = [
  // --- GAMBAR 1 (image_0a255e.jpg) ---
  {
    id: 'm2h2_1',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'かする',
    furigana: 'かする',
    arti: 'Menyerempet / Menggores',
    penjelasan: 'Menyentuh atau bergesekan sedikit pada permukaan objek lain saat melintas dengan kecepatan tinggi. Biasanya digunakan untuk peluru, kendaraan yang menyerempet dinding, atau luka goresan ringan.',
    contoh1: '弾が耳をかすった。\n(Peluru menyerempet telingaku.)',
    contoh2: '車が壁をかすって擦り傷がついた。\n(Mobil menyerempet dinding sehingga meninggalkan bekas goresan.)'
  },
  {
    id: 'm2h2_2',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ぶれる',
    furigana: 'ぶれる',
    arti: 'Buram / Goyah',
    penjelasan: 'Kondisi di mana kamera, tangan, atau sumbu fokus bergerak saat pengambilan gambar, sehingga menghasilkan foto atau video yang kabur, bergoyang, dan tidak tajam. Bisa juga digunakan untuk menggambarkan prinsip/pendirian seseorang yang goyah.',
    contoh1: '写真がぶれている。\n(Fotonya buram/goyang.)',
    contoh2: '手ブレのせいで、せっかくの動画がぶれてしまった。\n(Karena tangan gemetar, video yang sudah susah payah diambil malah jadi goyang/buram.)'
  },
  {
    id: 'm2h2_3',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ぼやける',
    furigana: 'ぼやける',
    arti: 'Menjadi kabur / Tidak jelas',
    penjelasan: 'Keadaan di mana bentuk, garis, batas, atau fokus visual menjadi samar dan tidak jelas terlihat (misalnya karena mata minus, kabut, atau air mata). Selain fisik, kata ini juga digunakan untuk ingatan atau inti masalah yang mengabur.',
    contoh1: '字がぼやけてよく見えない。\n(Hurufnya kabur dan tidak terlihat jelas.)',
    contoh2: '涙のせいで、目の前の景色がぼやけて見える。\n(Karena air mata, pemandangan di depan mataku terlihat kabur.)'
  },
  {
    id: 'm2h2_4',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'かさむ',
    furigana: 'かさむ',
    arti: 'Bertambah / Menumpuk (Biaya)',
    penjelasan: 'Kondisi ketika jumlah uang, pengeluaran, utang, atau biaya operasional terus bertambah hingga menumpuk dan melampaui batas yang diinginkan. Kata ini hampir selalu membawa konotasi negatif atau mengkhawatirkan.',
    contoh1: '経費がかさむ\n(Biaya/Pengeluaran membengkak.)',
    contoh2: '旅行に行くと、思わぬ出費がかさむものだ。\n(Saat pergi berwisata, pengeluaran tak terduga biasanya akan membengkak.)'
  },
  {
    id: 'm2h2_5',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'かさばる',
    furigana: 'かさばる',
    arti: 'Memakan tempat / Bulky',
    penjelasan: 'Sesuatu yang memiliki volume atau ukuran fisik yang besar, tebal, atau mengembang (meskipun beratnya mungkin ringan), sehingga merepotkan dan menghabiskan banyak ruang saat hendak dikemas, dibawa, atau disimpan.',
    contoh1: '荷物がかさばって持ちにくい。\n(Barang bawaan memakan tempat sehingga sulit dibawa.)',
    contoh2: '冬服はかさばるから、スーツケースに入れるのが大変だ。\n(Baju musim dingin itu memakan tempat, jadi susah memasukkannya ke dalam koper.)'
  },
  {
    id: 'm2h2_6',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '重なる',
    furigana: 'かさなる',
    arti: 'Bertumpuk / Tumpang tindih',
    penjelasan: 'Digunakan ketika benda-benda fisik diletakkan berlapis-lapis satu di atas yang lain. Selain fisik, kata ini sangat sering dipakai untuk kejadian abstrak seperti jadwal kerja yang bertabrakan atau kemalangan yang terjadi bersamaan.',
    contoh1: '予定が重なる\n(Jadwal bertabrakan / tumpang tindih.)',
    contoh2: '本を机の上に何冊も重ねる。\n(Menumpuk beberapa buah buku di atas meja. *Catatan: かさねる adalah bentuk transitifnya*)'
  },
  {
    id: 'm2h2_7',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'そびえる',
    furigana: 'そびえる',
    arti: 'Menjulang tinggi',
    penjelasan: 'Menggambarkan objek berukuran raksasa, kokoh, dan megah yang berdiri tegak lurus mengarah ke langit. Sering digunakan untuk pegunungan, gedung pencakar langit, menara komunikasi, atau pepohonan kuno yang sangat tinggi.',
    contoh1: '高層ビルが空にそびえている。\n(Gedung pencakar langit menjulang tinggi di langit.)',
    contoh2: '富士山が目の前に堂々とそびえている。\n(Gunung Fuji menjulang dengan megahnya di depan mata.)'
  },
  {
    id: 'm2h2_8',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'たるむ',
    furigana: 'たるむ',
    arti: 'Kendur / Malas',
    penjelasan: 'Berkurangnya ketegangan pada benda fisik seperti tali atau kulit sehingga menjadi longgar/bergelambir. Secara kiasan (metafora), kata ini juga menggambarkan hilangnya fokus, kedisiplinan, atau semangat kerja seseorang sehingga menjadi malas.',
    contoh1: 'ひもがたるんでいる\n(Talinya kendur.)',
    contoh2: '最近少し気持ちがたるんでいるから、気を引き締めよう。\n(Belakangan ini semangatku agak kendur/malas, mari kita fokus kembali.)'
  },
  {
    id: 'm2h2_9',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'とろける',
    furigana: 'とろける',
    arti: 'Meleleh / Lumer',
    penjelasan: 'Proses di mana zat padat melunak atau berubah menjadi cairan yang sangat lembut akibat suhu panas. Sering digunakan untuk menggambarkan makanan lezat yang lumer di mulut (keju, daging, cokelat) atau hati yang meleleh karena pesona seseorang.',
    contoh1: '口の中でチーズがとろける\n(Keju meleleh lumer di dalam mulut.)',
    contoh2: '彼女の笑顔を見ると、心がとろけるような気持ちになる。\n(Saat melihat senyumnya, rasanya hatiku sampai meleleh.)'
  },
  {
    id: 'm2h2_10',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'はげる',
    furigana: 'はげる',
    arti: 'Terkelupas / Botak',
    penjelasan: 'Lepas atau lunturnya lapisan penutup luar (seperti cat dinding, pelapis emas, atau warna pakaian) secara bertahap hingga bagian dasarnya terlihat. Kata ini juga digunakan untuk rontoknya rambut kepala hingga mengalami kebotakan.',
    contoh1: 'ペンキがはげる\n(Catnya terkelupas.)',
    contoh2: '祖父は年を取って、すっかり頭がはげてしまった。\n(Kakek sudah tua, kepalanya sudah benar-benar botak.)'
  },
  {
    id: 'm2h2_11',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'さえずる',
    furigana: 'さえずる',
    arti: 'Berkicau',
    penjelasan: 'Menggambarkan suara kicauan berirama yang merdu, nyaring, dan bersahut-sahutan dari burung-burung kecil (seperti burung pipit, kenari, atau walet), biasanya terdengar ramai pada pagi hari yang cerah.',
    contoh1: '小鳥がさえずる\n(Burung kecil berkicau.)',
    contoh2: '朝早くから、窓の外で鳥が楽しそうにさえずっている。\n(Sejak pagi-pagi sekali, burung-burung berkicau dengan gembira di luar jendela.)'
  },
  {
    id: 'm2h2_12',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'きしむ',
    furigana: 'きしむ',
    arti: 'Berderit',
    penjelasan: 'Suara gesekan yang kasar, tajam, dan kurang pelumas saat dua permukaan benda keras (terutama lantai kayu, engsel pintu, atau ranjang tua) saling bergesekan karena menahan beban berat atau sudah lapuk dimakan usia.',
    contoh1: '床がきしむ\n(Lantai berderit.)',
    contoh2: '古いドアを開けると、ギーときしむ音がする。\n(Saat membuka pintu tua itu, terdengar suara berderit \'gii\'.)'
  },
  {
    id: 'm2h2_13',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '弾く',
    furigana: 'はじく',
    arti: 'Menolak / Memetik',
    penjelasan: 'Memiliki dua makna utama: Pertama, sifat permukaan yang memantulkan cairan sehingga tidak meresap (seperti minyak menolak air atau kain anti-air). Kedua, gerakan mekanis memetik senar alat musik atau menjentikkan koin dengan jari.',
    contoh1: '油は水を弾く\n(Minyak menolak/memantulkan air.)',
    contoh2: '彼は上手にギターの弦を弾いて歌った。\n(Dia memetik senar gitar dengan mahir sambil bernyanyi.)'
  },
  {
    id: 'm2h2_14',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'はぐ',
    furigana: 'はぐ',
    arti: 'Menguliti / Mengelupas',
    penjelasan: 'Tindakan memisahkan, menarik, atau mengelupas lapisan terluar dari tempatnya menempel. Digunakan untuk kulit hewan/ikan, wallpaper dinding, atau tindakan menarik selimut dari tubuh seseorang secara paksa.',
    contoh1: '魚の皮をはぐ\n(Menguliti / mengelupas kulit ikan.)',
    contoh2: '壁の古い壁紙をはいで、新しいものに張り替えた。\n(Mengelupas wallpaper lama di dinding, lalu menggantinya dengan yang baru.)'
  },
  {
    id: 'm2h2_15',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '潤う',
    furigana: 'うるおう',
    arti: 'Menjadi lembap / Makmur',
    penjelasan: 'Secara fisik berarti mendapatkan kandungan air atau kelembapan yang cukup (untuk kulit, tanaman, atau tanah kering). Secara abstrak/ekonomi berarti menerima keuntungan finansial melimpah sehingga mendatangkan kemakmuran.',
    contoh1: '肌が潤う\n(Kulit menjadi lembap.)',
    contoh2: '新駅ができたおかげで、地元の経済が豊かに潤った。\n(Berkat dibangunnya stasiun baru, ekonomi lokal menjadi sangat makmur.)'
  },
  {
    id: 'm2h2_16',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '繕う',
    furigana: 'つくろう',
    arti: 'Memperbaiki / Menjaga penampilan',
    penjelasan: 'Secara harfiah berarti menjahit atau memperbaiki pakaian yang robek agar rapi kembali. Secara kiasan, berarti memoles kesalahan, kebohongan, atau situasi buruk agar terlihat tetap baik di mata publik demi menjaga gengsi atau citra.',
    contoh1: 'ほころびを繕う\n(Menjahit/memperbaiki robekan.)',
    contoh2: '彼は自分の失敗を隠すために、必死にその場を繕った。\n(Dia mati-matian menutupi situasi tersebut demi menyembunyikan kegagalannya.)'
  },
  {
    id: 'm2h2_17',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'はかどる',
    furigana: 'はかどる',
    arti: 'Maju / Berjalan lancar',
    penjelasan: 'Menunjukkan kemajuan (progres) dari sebuah aktivitas, pekerjaan, tugas akhir, atau studi yang berjalan dengan sangat cepat, efisien, dan minim hambatan, sehingga selesai lebih cepat dari target.',
    contoh1: '仕事がはかどる\n(Pekerjaan berjalan lancar / maju.)',
    contoh2: '静かなカフェで作業をすると、勉強がとてもはかどる。\n(Kalau mengerjakan tugas di kafe yang tenang, belajar menjadi sangat lancar.)'
  },

  // --- GAMBAR 2 (image_0a257b.jpg) ---
  {
    id: 'm2h2_18',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '差し掛かる',
    furigana: 'さしかかる',
    arti: 'Mencapai / Mendekati',
    penjelasan: 'Berada tepat di titik transisi atau batas persimpangan. Bisa berupa posisi fisik (seperti kendaraan yang mulai memasuki tikungan/jembatan) maupun fase kehidupan waktu (seperti anak yang memasuki usia pubertas atau masa kritis).',
    contoh1: '曲がり角に差し掛かる\n(Mendekati / mencapai tikungan.)',
    contoh2: '日本は今、深刻な少子化の国面に差し掛かっている。\n(Jepang saat ini sedang mencapai fase masalah penurunan angka kelahiran yang serius.)'
  },
  {
    id: 'm2h2_19',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '引きずる',
    furigana: 'ひきずる',
    arti: 'Menyeret',
    penjelasan: 'Menarik benda yang berat di atas permukaan lantai atau tanah tanpa mengangkatnya. Kata ini juga sering dipakai untuk tindakan menyeret kaki saat berjalan (pincang/lelah) atau belum bisa melupakan (terbayang-bayang) masalah masa lalu.',
    contoh1: '足を引きずる\n(Menyeret kaki / berjalan pincang.)',
    contoh2: '過去の失恋の痛みを、今でも引きずっている。\n(Sampai sekarang pun dia masih menyeret (terbayang-bayang) rasa sakit akibat patah hati di masa lalu.)'
  },
  {
    id: 'm2h2_20',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '反る',
    furigana: 'そる',
    arti: 'Melengkung',
    penjelasan: 'Perubahan bentuk pada material yang seharusnya lurus (seperti papan kayu, penggaris, atau kertas tebal) menjadi membengkok ke arah belakang atau melengkung akibat efek kelembapan, suhu panas, atau tekanan.',
    contoh1: '板が反る\n(Papan melengkung.)',
    contoh2: '乾燥のせいで、机の木の板が反ってしまった。\n(Karena kering, papan kayu pada meja itu menjadi melengkung.)'
  },
  {
    id: 'm2h2_21',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'とがる',
    furigana: 'とがる',
    arti: 'Menjadi tajam / Runcing',
    penjelasan: 'Bentuk ujung suatu objek yang mengecil, meruncing, dan menjadi sangat tajam (seperti ujung pisau, duri, atau pensil setelah diraut). Bisa juga digunakan untuk menggambarkan bentuk bibir yang manyun/maju karena sedang kesal.',
    contoh1: 'とがったナイフ\n(Pisau yang tajam / runcing.)',
    contoh2: '不満があると、彼女はすぐに口をとがらせる。\n(Kalau ada hal yang membuatnya tidak puas, dia langsung memanyunkan bibirnya.)'
  },
  {
    id: 'm2h2_22',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'はれる',
    furigana: 'はれる',
    arti: 'Membengkak',
    penjelasan: 'Kondisi medis di mana bagian tubuh tertentu (seperti kelopak mata, gusi, wajah, atau kulit) mengalami peradangan, infeksi, atau cedera fisik sehingga ukurannya membesar, memerah, dan menggembung.',
    contoh1: 'まぶたがはれる\n(Kelopak mata membengkak.)',
    contoh2: '泣きすぎたせいで、翌朝目が赤くはれてしまった。\n(Karena terlalu banyak menangis, keesokan paginya mataku menjadi merah dan membengkak.)'
  },
  {
    id: 'm2h2_23',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ずれる',
    furigana: 'ずれる',
    arti: 'Meleset / Melorot',
    penjelasan: 'Terjadinya pergeseran posisi dari tempat yang seharusnya (seperti kacamata yang melorot di hidung). Kata ini juga sangat umum digunakan dalam konteks non-fisik seperti jadwal yang meleset, atau pendapat yang tidak selaras.',
    contoh1: '眼鏡がずれる\n(Kacamata melorot / bergeser turun.)',
    contoh2: '二人の意見が少しずれているようだ。\n(Pendapat kedua orang itu tampaknya agak meleset/tidak sejalan.)'
  },
  {
    id: 'm2h2_24',
    minggu: '2',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'いかれる',
    furigana: 'いかれる',
    arti: 'Rusak / Gila (Slang)',
    penjelasan: 'Istilah ragam santai (slang) untuk menunjukkan bahwa fungsi mekanis suatu komponen atau mesin sudah rusak parah dan tidak berfungsi lagi. Jika ditujukan kepada manusia, artinya pikiran atau kewarasannya sudah terganggu.',
    contoh1: 'エンジンがいかれる\n(Mesinnya rusak / mati total.)',
    contoh2: '頭がいかれているとしか思えない行動だ。\n(Itu adalah tindakan yang hanya bisa dianggap dilakukan oleh orang yang otaknya sudah rusak/gila.)'
  }
];

// Menambahkan kosakata dari file ini ke data master di index.html
window.vocabData.push(...kosakata_m2h2);