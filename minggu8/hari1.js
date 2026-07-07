// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m8h1 = [
  // --- GAMBAR 1 ---
  {
    id: 'm8h1_1',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '心がける',
    furigana: 'こころがける',
    arti: 'Berusaha / Selalu mengingat',
    penjelasan: 'Sikap mental untuk selalu menanamkan dalam hati, mengingat, dan mengusahakan suatu tindakan atau kebiasaan yang baik dan positif dalam kehidupan sehari-hari.',
    contoh1: '安全運転を心がける。\n(Berusaha untuk selalu mengemudi dengan aman.)',
    contoh2: '健康のために、毎日の軽い運動を心がけている。\n(Demi kesehatan, saya selalu mengusahakan untuk berolahraga ringan setiap hari.)'
  },
  {
    id: 'm8h1_2',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '心得る',
    furigana: 'こころえる',
    arti: 'Memahami / Mengerti dengan baik',
    penjelasan: 'Memiliki pemahaman yang mendalam mengenai posisi diri sendiri, aturan, etika, tata krama, atau cara kerja sesuatu sehingga tahu bagaimana harus bersikap dengan benar.',
    contoh1: '自分の立場を心得る。\n(Memahami dengan baik posisi atau kedudukan diri sendiri.)',
    contoh2: '社会人としての作法を心得ている。\n(Mengerti dengan baik tata krama sebagai anggota masyarakat dewasa.)'
  },
  {
    id: 'm8h1_3',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'ゆがむ',
    furigana: 'ゆがむ',
    arti: 'Miring / Bengkok / Menyimpang',
    penjelasan: 'Kondisi di mana bentuk fisik suatu benda menjadi tidak lurus, tidak simetris, atau berubah dari bentuk aslinya. Secara abstrak juga digunakan untuk menggambarkan sifat atau pikiran seseorang yang tidak lurus.',
    contoh1: 'ネクタイがゆがんでいる。\n(Dasinya dalam keadaan miring/tidak lurus.)',
    contoh2: '彼は性格がゆがんでいる。\n(Dia memiliki kepribadian atau sifat yang bengkok/menyimpang.)'
  },
  {
    id: 'm8h1_4',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'ねじれる',
    furigana: 'ねじれる',
    arti: 'Terpelintir / Melilit',
    penjelasan: 'Kondisi fisik di mana benda yang panjang, lentur, atau berbentuk helaian (seperti kabel, tali, atau benang) berputar berlawanan arah atau saling melilit secara tidak teratur sehingga menjadi kusut.',
    contoh1: 'コードがねじれている。\n(Kabelnya terpelintir atau melilit kusut.)',
    contoh2: '体がねじれるような強い痛みを感じた。\n(Merasakan sakit yang luar biasa sampai tubuh rasanya seperti terpelintir.)'
  },
  {
    id: 'm8h1_5',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'こじれる',
    furigana: 'こじれる',
    arti: 'Menjadi rumit / Memburuk',
    penjelasan: 'Suatu situasi (seperti negosiasi, hubungan antarmanusia, atau konflik) yang menjadi semakin pelik dan sulit diselesaikan. Bisa juga merujuk pada kondisi penyakit yang kian parah akibat penanganan yang salah.',
    contoh1: '交渉がこじれる。\n(Negosiasi menjadi semakin rumit dan sulit mencapai kesepakatan.)',
    contoh2: '風邪がこじれて入院することになった。\n(Penyakit flunya memburuk hingga akhirnya harus masuk rumah sakit.)'
  },
  {
    id: 'm8h1_6',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'ほどける',
    furigana: 'ほどける',
    arti: 'Terlepas / Terurai (ikatan)',
    penjelasan: 'Kondisi di mana ikatan tali, simpul pita, tali sepatu, atau benang yang sebelumnya terikat kuat menjadi melonggar lalu terlepas dengan sendirinya.',
    contoh1: 'リボンがほどける。\n(Pita bajunya terlepas/terurai.)',
    contoh2: '歩いている途中で靴ひもがほどけた。\n(Di tengah-tengah sedang berjalan, tali sepatu saya terlepas.)'
  },
  {
    id: 'm8h1_7',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'ほころびる',
    furigana: 'ほころびる',
    arti: 'Jahitan robek sedikit / Mulai mekar',
    penjelasan: 'Bagian sambungan jahitan pada pakaian atau kain yang mulai terlepas atau terbuka sedikit demi sedikit. Dalam konteks sastra, kata ini juga digunakan untuk kuncup bunga yang mulai merekah terbuka.',
    contoh1: 'スカートの裾がほころびている。\n(Jahitan di ujung bagian bawah rok mulai robek/terlepas sedikit.)',
    contoh2: '庭の桜のつぼみがほころび始めた。\n(Kuncup bunga sakura di halaman rumah sudah mulai merekah/mekar.)'
  },
  {
    id: 'm8h1_8',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'にじむ',
    furigana: 'にじむ',
    arti: 'Merembes / Luntur / Menggenang',
    penjelasan: 'Cairan yang menyebar luas ke permukaan kertas atau kain sehingga membuat coretan tulisan/warna menjadi kabur. Digunakan juga untuk air mata atau darah yang keluar dan menggenang perlahan.',
    contoh1: '雨でハガキの字がにじむ。\n(Tulisan di kartu pos menjadi luntur akibat merembes terkena air hujan.)',
    contoh2: '痛みをこらえる彼の目に涙がにじむ。\n(Air mata menggenang di matanya saat ia menahan rasa sakit.)'
  },
  {
    id: 'm8h1_9',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'しみる',
    furigana: 'しみる',
    arti: 'Menyengat (perih) / Meresap',
    penjelasan: 'Rasa tajam atau perih yang merangsang organ tubuh (seperti mata yang perih karena asap, gigi ngilu karena air dingin). Bisa juga merujuk pada zat cair/keringat yang meresap masuk ke serat kain.',
    contoh1: '煙が目にしみる。\n(Asapnya menyengat dan membuat perih di mata.)',
    contoh2: 'シャツに汗が染みる。\n(Keringat meresap dengan jelas ke dalam kemeja.)'
  },
  {
    id: 'm8h1_10',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'しなびる',
    furigana: 'しなびる',
    arti: 'Layu / Mengkerut',
    penjelasan: 'Kondisi sayur-sayuran, buah-buahan, atau permukaan kulit yang kehilangan kadar air dan kelembapan aslinya, sehingga teksturnya tidak segar lagi dan tampak berkerut.',
    contoh1: '野菜がしなびる。\n(Sayur-sayurannya menjadi layu dan kehilangan kesegarannya.)',
    contoh2: '数日放置したため、果物の皮がしなびてしまった。\n(Karena dibiarkan beberapa hari, kulit buahnya menjadi mengkerut.)'
  },
  {
    id: 'm8h1_11',
    minggu: '8',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'かれる',
    furigana: 'かれる',
    arti: 'Mati (pohon) / Serak (suara) / Kering',
    penjelasan: 'Kata kerja multi-konteks: 1) Tanaman yang mengering lalu mati; 2) Suara yang parau/habis akibat terlalu banyak berteriak atau bernyanyi; 3) Sumber air atau kolam yang mengering habis.',
    contoh1: '木が枯れる。\n(Pohonnya mengering lalu mati.)',
    contoh2: '大声を出したせいで、声が枯れる。\n(Suara menjadi serak/parau karena terlalu banyak mengeluarkan suara keras.)'
  },
  {
    id: 'm8h1_12',
    minggu: '8',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: 'じきに',
    furigana: 'じきに',
    arti: 'Segera / Tidak lama lagi',
    penjelasan: 'Kata keterangan waktu yang menunjukkan bahwa suatu peristiwa atau perubahan keadaan akan terjadi dalam waktu dekat atau sebentar lagi (sinonim dekat dengan すぐに).',
    contoh1: '雨はじきにあがるでしょう。\n(Hujannya kemungkinan besar akan segera reda dalam waktu dekat.)',
    contoh2: '薬を飲めば、じきに良くなりますよ。\n(Kalau minum obat, kamu akan segera membaik kok.)'
  },
  {
    id: 'm8h1_13',
    minggu: '8',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: 'じかに',
    furigana: 'じかに',
    arti: 'Secara langsung / Tanpa perantara',
    penjelasan: 'Melakukan suatu tindakan atau komunikasi secara tatap muka langsung, atau menempelkan sesuatu benda ke permukaan tanpa adanya pembatas/alas di tengahnya (sinonim dekat dengan 直接).',
    contoh1: '社長とじかに話す。\n(Berbicara secara langsung dengan presiden direktur perusahaan.)',
    contoh2: '地面にじかに座る。\n(Duduk secara langsung di atas tanah tanpa menggunakan alas.)'
  },
  {
    id: 'm8h1_14',
    minggu: '8',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: '何もかも',
    furigana: 'なにもかも',
    arti: 'Segala-galanya / Semuanya',
    penjelasan: 'Ungkapan yang menekankan seluruh hal secara menyeluruh tanpa ada satu pun yang dikecualikan, mencakup segala aspek yang ada (sinonim dekat dengan すべて).',
    contoh1: '何もかもいやになった。\n(Saya sudah muak dengan segala-galanya/semua hal ini.)',
    contoh2: '火事で何もかも失ってしまった。\n(Dia kehilangan segala-galanya akibat musibah kebakaran.)'
  },
  {
    id: 'm8h1_15',
    minggu: '8',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: '何でもかんでも',
    furigana: 'なんでもかんでも',
    arti: 'Apa saja / Apa pun itu tanpa milih',
    penjelasan: 'Melakukan tindakan atau mengambil sesuatu secara impulsif dan acak tanpa memikirkan alasan, batasan, ataupun menyaringnya terlebih dahulu.',
    contoh1: 'うちの犬は、何でもかんでもかじる。\n(Anjing peliharaan di rumah saya menggigit apa saja/apa pun yang ada di depannya.)',
    contoh2: '何でもかんでもカバンに入れると重くなるよ。\n(Kalau apa saja kamu masukkan ke dalam tas, nanti tasnya jadi berat lho.)'
  },
  {
    id: 'm8h1_16',
    minggu: '8',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: '何だかんだ',
    furigana: 'なんだかんだ',
    arti: 'Ini itu / Bagaimanapun juga',
    penjelasan: 'Merujuk pada berbagai hal kecil, alasan, keluhan, atau hambatan yang terjadi di sana-sini, namun pada akhirnya kesimpulan atau hasil akhirnya tidak berubah (sinonim dekat dengan あれこれ).',
    contoh1: '何だかんだ言っても、彼は偉い。\n(Meskipun orang-orang mengatakan ini itu tentangnya, dia tetaplah sosok yang hebat.)',
    contoh2: '何だかんだ忙しくて連絡が遅れました。\n(Karena sibuk urusan ini itu, saya sampai terlambat memberi kabar.)'
  },

  // --- GAMBAR 2 ---
  {
    id: 'm8h1_17',
    minggu: '8',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: 'いかに',
    furigana: 'いかに',
    arti: 'Bagaimana / Betapa pun / Seberapa pun',
    penjelasan: 'Memiliki fungsi ganda: 1) Menanyakan cara/metode pelaksanaan (sinonim: どのように); 2) Digunakan bersama bentuk konsesif (~ても) untuk menegaskan bahwa seberapa besar pun usahanya, hasilnya tetap sama (sinonim: どんなに).',
    contoh1: 'それをいかに実現するかが問題だ。\n(Masalah utamanya adalah bagaimana cara untuk mewujudkan hal tersebut.)',
    contoh2: 'いかに急いでも間に合わないだろう。\n(Seberapa pun kita bergegas, tampaknya kita tetap tidak akan keburu.)'
  },
  {
    id: 'm8h1_18',
    minggu: '8',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: 'いかににも',
    furigana: 'いかににも',
    arti: 'Benar-benar / Sangat / Sungguh',
    penjelasan: 'Menunjukkan penekanan kuat bahwa suatu keadaan sangat cocok dengan dugaan, atau menggambarkan karakteristik khas seseorang yang terlihat sangat kental dan asli.',
    contoh1: 'それはいかにも残念です。\n(Hal tersebut sungguh/sangat disayangkan.)',
    contoh2: '彼はいかにも学者らしい。\n(Dia benar-benar terlihat sangat berwibawa layaknya seorang akademisi.)'
  },
  {
    id: 'm8h1_19',
    minggu: '8',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ひび',
    furigana: 'ひび',
    arti: 'Retakan / Celah retak',
    penjelasan: 'Garis pecah atau retakan tipis yang muncul pada permukaan benda keras seperti dinding, kaca, piring. Secara kiasan juga melambangkan keretakan hubungan sosial.',
    contoh1: '壁にひびが入っている。\n(Terdapat celah retakan pada bagian permukaan dinding.)',
    contoh2: '小さな誤解から二人の関係にひびが入った。\n(Berawal dari kesalahpahaman kecil, hubungan mereka berdua menjadi retak.)'
  },
  {
    id: 'm8h1_20',
    minggu: '8',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'すき間',
    furigana: 'すきま',
    arti: 'Celah / Ruang kosong sempit',
    penjelasan: 'Ruang kosong atau sela sempit yang terbentuk di antara dua objek yang diletakkan berdekatan, atau bisa berarti sela-sela waktu luang di tengah jadwal sibuk.',
    contoh1: '机とタンスのすき間。\n(Celah sempit yang berada di antara meja dan lemari baju.)',
    contoh2: '電車のドアのすき間に注意してください。\n(Harap berhati-hati dengan celah pada pintu kereta api.)'
  },
  {
    id: 'm8h1_21',
    minggu: '8',
    hari: '1',
    kategori: 'kata benda',
    kanji: '粒',
    furigana: 'つぶ',
    arti: 'Butir / Biji / Tetesan besar',
    penjelasan: 'Kata benda sekaligus kata bantu bilangan untuk menghitung objek yang berukuran kecil dan berbentuk bulat atau butiran, seperti sebutir beras, obat, atau bulir air hujan yang besar.',
    contoh1: '一粒の米。\n(Sebutir beras.)',
    contoh2: '大粒の雨が降り始めた。\n(Hujan dengan tetesan yang besar-besar mulai turun.)'
  },
  {
    id: 'm8h1_22',
    minggu: '8',
    hari: '1',
    kategori: 'kata benda',
    kanji: '滴',
    furigana: 'しずく',
    arti: 'Tetesan air / Cairan menetes',
    penjelasan: 'Butiran zat cair yang terbentuk lalu jatuh menetes ke bawah dari posisi yang lebih tinggi, seperti air hujan dari dedaunan atau rembesan dari atap yang bocor.',
    contoh1: '雨の滴。\n(Tetesan air hujan.)',
    contoh2: '窓ガラスに水滴がたれている。\n(Tetesan-tetesan air mengalir menetes di kaca jendela.)'
  },
  {
    id: 'm8h1_23',
    minggu: '8',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'あか',
    furigana: 'あか',
    arti: 'Daki / Kotoran kulit',
    penjelasan: 'Kotoran atau sel-sel kulit mati yang menumpuk di permukaan tubuh manusia atau terselip di sela-sela kuku akibat perpaduan debu dan keringat.',
    contoh1: '爪のあか。\n(Kotoran/daki yang terselip di dalam kuku.)',
    contoh2: 'お風呂に入ってあかを落とす。\n(Mandi berendam untuk membersihkan dan merontokkan daki di tubuh.)'
  },
  {
    id: 'm8h1_24',
    minggu: '8',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'あざ',
    furigana: 'あざ',
    arti: 'Memar / Tanda lahir',
    penjelasan: 'Perubahan warna pigmen kulit menjadi biru, ungu, atau merah. Hal ini bisa terjadi akibat benturan fisik keras (lebam/memar) ataupun bercak bawaan alami sejak lahir.',
    contoh1: '足をぶつけてあざができる。\n(Kaki terbentur sehingga membekas memar/lebam.)',
    contoh2: '彼女は生まれつきのあざが腕にある。\n(Dia memiliki tanda lahir bawaan sejak lahir di bagian lengannya.)'
  }
];

window.vocabData.push(...kosakata_m8h1);