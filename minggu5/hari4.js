// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m5h4 = [
  // --- KELOMPOK 1 (す) ---
  {
    id: 'm5h4_1',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '志す',
    furigana: 'こころざす',
    arti: 'Bercita-cita / Menargetkan',
    penjelasan: 'Kata kerja ini digunakan ketika seseorang memiliki tekad, niat, atau cita-cita yang kuat untuk mencapai suatu tujuan atau profesi tertentu di masa depan.',
    contoh1: '学者を志す。\n(Bercita-cita menjadi seorang ilmuwan/sarjana.)',
    contoh2: '医者を志して勉強している。\n(Belajar keras dengan cita-cita menjadi seorang dokter.)'
  },
  {
    id: 'm5h4_2',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '試す',
    furigana: 'ためす',
    arti: 'Mencoba / Menguji',
    penjelasan: 'Merujuk pada tindakan mencoba atau mengetes sesuatu (seperti produk baru, metode, mesin, atau kemampuan) untuk mengetahui hasil, kualitas, atau efektivitasnya.',
    contoh1: '新商品を試す。\n(Mencoba menggunakan produk baru.)',
    contoh2: '自分の実力を試す。\n(Menguji sejauh mana kemampuan diri sendiri.)'
  },
  {
    id: 'm5h4_3',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '犯す',
    furigana: 'おかす',
    arti: 'Melakukan (kejahatan/kesalahan)',
    penjelasan: 'Digunakan secara spesifik untuk tindakan yang bersifat negatif, seperti melanggar hukum, aturan moral, melakukan tindak pidana, dosa, atau berbuat kesalahan yang fatal.',
    contoh1: '罪を犯す。\n(Melakukan tindak kejahatan atau dosa.)',
    contoh2: '大きなミスを犯してしまった。\n(Telah melakukan kesalahan yang sangat besar dan fatal.)'
  },
  {
    id: 'm5h4_4',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '乱す',
    furigana: 'みだす',
    arti: 'Mengacaukan / Mengganggu',
    penjelasan: 'Merupakan tindakan merusak tatanan, ketertiban, kedamaian, atau keteraturan yang sudah ada sebelumnya, sehingga kondisinya menjadi kacau balau atau tidak teratur.',
    contoh1: '秩序を乱す。\n(Mengacaukan sistem ketertiban yang ada.)',
    contoh2: '列を乱さないでください。\n(Tolong jangan mengacaukan barisan.)'
  },
  {
    id: 'm5h4_5',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '満たす',
    furigana: 'みたす',
    arti: 'Memenuhi / Memuaskan',
    penjelasan: 'Bisa berarti mengisi sesuatu hingga penuh (seperti air dalam wadah), atau memenuhi berbagai kebutuhan, persyaratan, kriteria, maupun permintaan seseorang sehingga tercapai kepuasan.',
    contoh1: '容器に水を満たす。\n(Mengisi wadah dengan air sampai penuh.)',
    contoh2: '要求を満たす。\n(Memenuhi tuntutan atau permintaan seseorang.)'
  },
  {
    id: 'm5h4_6',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '果たす',
    furigana: 'はたす',
    arti: 'Mencapai / Memenuhi (tugas/janji)',
    penjelasan: 'Tindakan melaksanakan atau menyelesaikan suatu tugas, tanggung jawab, tujuan akhir, peran, atau janji hingga tuntas dan berhasil sesuai dengan yang diharapkan.',
    contoh1: '目的を果たす。\n(Berhasil mencapai tujuan yang diinginkan.)',
    contoh2: '約束を果たす。\n(Menepati dan memenuhi janji yang telah dibuat.)'
  },
  {
    id: 'm5h4_7',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '抜かす',
    furigana: 'ぬかす',
    arti: 'Melewatkan / Melompati',
    penjelasan: 'Tindakan (baik disengaja maupun tidak) melewati, menghilangkan, atau melompati suatu bagian, baris, atau urutan yang seharusnya ada atau dibaca.',
    contoh1: '１行抜かして読む。\n(Membaca dengan melompati satu baris tulisan.)',
    contoh2: '重要な項目を抜かしてしまった。\n(Tanpa sengaja melewatkan satu poin yang sangat penting.)'
  },
  {
    id: 'm5h4_8',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '負かす',
    furigana: 'まかす',
    arti: 'Mengalahkan / Menaklukkan',
    penjelasan: 'Tindakan mengalahkan lawan dalam sebuah kompetisi, pertandingan, perdebatan, persaingan bisnis, atau peperangan sehingga mereka mengakui kekalahan.',
    contoh1: '敵を負かす。\n(Mengalahkan dan menaklukkan musuh.)',
    contoh2: '試合で相手チームを負かした。\n(Berhasil mengalahkan tim lawan dalam pertandingan tersebut.)'
  },
  {
    id: 'm5h4_9',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '悩ます',
    furigana: 'なやます',
    arti: 'Menyusahkan / Mengganggu pikiran',
    penjelasan: 'Sesuatu yang membuat seseorang merasa terganggu, kesulitan, cemas, atau pusing memikirkan jalan keluarnya (seperti diganggu suara bising, penyakit, atau masalah berat).',
    contoh1: '騒音に悩まされる。\n(Dibuat pusing dan terganggu oleh suara bising yang terus-menerus.)',
    contoh2: '頭痛が彼を悩ませている。\n(Penyakit sakit kepala sedang menyusahkannya akhir-akhir ini.)'
  },
  {
    id: 'm5h4_10',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '慣らす',
    furigana: 'ならす',
    arti: 'Membiasakan / Melatih',
    penjelasan: 'Proses membuat diri sendiri, tubuh, atau panca indera (seperti telinga dan mata) menjadi terbiasa dan beradaptasi dengan kondisi, rangsangan, atau lingkungan baru melalui repetisi/latihan.',
    contoh1: '耳を慣らす。\n(Melatih dan membiasakan telinga untuk mendengar bahasa asing.)',
    contoh2: '新しい靴を足に慣らす。\n(Membiasakan kaki dengan sepatu yang baru dibeli agar tidak lecet.)'
  },
  {
    id: 'm5h4_11',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '荒らす',
    furigana: 'あらす',
    arti: 'Merusak / Mengobrak-abrik',
    penjelasan: 'Tindakan menghancurkan, merusak alam, atau mengobrak-abrik suatu tempat sehingga kondisinya menjadi sangat buruk, berantakan, dan kehilangan nilainya.',
    contoh1: 'イノシシが作物を荒らす。\n(Babi hutan merusak tanaman dan hasil panen di ladang.)',
    contoh2: '泥棒が部屋を荒らした。\n(Pencuri telah mengobrak-abrik isi ruangan tersebut.)'
  },
  {
    id: 'm5h4_12',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '費やす',
    furigana: 'ついやす',
    arti: 'Menghabiskan (waktu/uang/energi)',
    penjelasan: 'Menggunakan sumber daya yang berharga seperti waktu, energi, tenaga, atau uang dalam jumlah yang banyak atau durasi yang lama untuk menyelesaikan suatu aktivitas atau proyek.',
    contoh1: 'エネルギーを費やす。\n(Banyak menghabiskan energi dan tenaga.)',
    contoh2: '研究に長い年月を費やす。\n(Menghabiskan waktu bertahun-tahun untuk menyelesaikan penelitian.)'
  },

  // --- KELOMPOK 2 (る) ---
  {
    id: 'm5h4_13',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '練る',
    furigana: 'ねる',
    arti: 'Menyusun dengan matang / Menguleni',
    penjelasan: 'Secara abstrak berarti memikirkan dan merencanakan suatu konsep secara mendalam dan teliti agar hasilnya sempurna. Secara fisik berarti menguleni bahan adonan hingga kalis (dalam memasak).',
    contoh1: '計画を練る。\n(Menyusun rencana dengan pemikiran yang matang.)',
    contoh2: 'パンの生地をよく練る。\n(Menguleni adonan roti dengan baik agar teksturnya lembut.)'
  },
  {
    id: 'm5h4_14',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '鈍る',
    furigana: 'にぶる',
    arti: 'Menjadi tumpul / Melemah',
    penjelasan: 'Kondisi di mana kepekaan, intuisi, insting, kemampuan pisau, kecepatan bereaksi, atau bahkan tekad seseorang menjadi menurun, kurang tajam, atau melambat dibanding kondisi puncaknya.',
    contoh1: '勘が鈍る。\n(Insting atau intuisinya menjadi tumpul dan melemah.)',
    contoh2: '決心が鈍った。\n(Tekad dan kebulatan hatinya sempat melemah.)'
  },
  {
    id: 'm5h4_15',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '勝る',
    furigana: 'まさる',
    arti: 'Lebih unggul / Melebihi',
    penjelasan: 'Menunjukkan bahwa suatu hal memiliki kualitas, nilai, tingkat kebahagiaan, kemampuan, atau kekuatan yang jauh lebih baik dan lebih hebat jika dibandingkan dengan pihak atau hal yang lain.',
    contoh1: 'これに勝る喜びはない。\n(Tidak ada rasa kebahagiaan yang dapat melebihi hal ini.)',
    contoh2: '実力において彼が勝っている。\n(Dalam hal kemampuan murni, dia jauh lebih unggul.)'
  },
  {
    id: 'm5h4_16',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '操る',
    furigana: 'あやつる',
    arti: 'Mengendalikan / Mengoperasikan',
    penjelasan: 'Keterampilan untuk menggunakan, mengontrol, dan mengoperasikan objek (seperti mesin, alat, boneka), bahasa, atau bahkan memanipulasi manusia sesuai dengan kehendak diri sendiri secara leluasa.',
    contoh1: '機械を上手に操る。\n(Mampu mengoperasikan mesin tersebut dengan sangat mahir.)',
    contoh2: '3カ国語を操る。\n(Menguasai dan mampu menggunakan 3 bahasa asing dengan fasih.)'
  },
  {
    id: 'm5h4_17',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '群がる',
    furigana: 'むらがる',
    arti: 'Berkerumun / Berkumpul',
    penjelasan: 'Perilaku hewan atau sekumpulan manusia yang berkumpul, berkerumun, atau bergerombol dalam jumlah massal di satu titik yang sama karena tertarik pada sesuatu hal.',
    contoh1: 'アリが砂糖に群がる。\n(Sekawanan semut berkerumun pada gula yang tumpah.)',
    contoh2: '有名人にファンが群がる。\n(Para penggemar berkerumun mengelilingi orang terkenal tersebut.)'
  },
  {
    id: 'm5h4_18',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '備わる',
    furigana: 'そなわる',
    arti: 'Dilengkapi / Terbekali (secara alami)',
    penjelasan: 'Menunjukkan keadaan di mana seseorang atau sebuah barang sudah terbekali atau dilengkapi dengan suatu bakat, sifat bawaan, fasilitas khusus, atau fitur perlengkapan sejak awal atau secara alami.',
    contoh1: '才能が備わっている。\n(Sudah terbekali bakat alami dari lahir.)',
    contoh2: 'この部屋にはエアコンが備わっている。\n(Kamar ini sudah dilengkapi dengan fasilitas AC/pendingin ruangan.)'
  },
  {
    id: 'm5h4_19',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '改まる',
    furigana: 'あらたまる',
    arti: 'Diperbarui / Menjadi formal',
    penjelasan: 'Bisa merujuk pada perubahan suatu aturan, sistem, atau keadaan ke arah yang lebih baru/lebih baik. Dapat juga bermakna perubahan suasana atau sikap menjadi sangat kaku, formal, dan resmi.',
    contoh1: '規則が改まる。\n(Peraturannya diperbarui ke sistem yang baru.)',
    contoh2: '改まった場所。\n(Tempat atau situasi pertemuan yang sangat formal dan resmi.)'
  },

  // --- KELOMPOK 3 (む) ---
  {
    id: 'm5h4_20',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '病む',
    furigana: 'やむ',
    arti: 'Menderita penyakit / Tertekan (mental)',
    penjelasan: 'Kondisi di mana seseorang jatuh sakit atau menderita suatu penyakit fisik kronis (seperti penyakit paru-paru). Juga sering digunakan (気に病む) untuk menunjukkan tekanan mental dan kecemasan akibat overthinking.',
    contoh1: '肺を病む。\n(Menderita gangguan penyakit pada paru-paru.)',
    contoh2: '失敗を気に病む。\n(Merasa sangat tertekan dan terlalu mengkhawatirkan kegagalan yang terjadi.)'
  },
  {
    id: 'm5h4_21',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '富む',
    furigana: 'とむ',
    arti: 'Kaya akan / Berlimpah',
    penjelasan: 'Menunjukkan bahwa suatu benda, tempat, atau seseorang memiliki persediaan, ketersediaan, atau elemen yang sangat berlimpah. Misalnya kaya akan sumber daya alam, variasi, ekspresi, atau pengalaman.',
    contoh1: '天然資源に富む。\n(Kaya akan ketersediaan sumber daya alam.)',
    contoh2: '経験に富んだスタッフ。\n(Seorang staf yang kaya akan pengalaman kerja.)'
  },
  {
    id: 'm5h4_22',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '恵む',
    furigana: 'めぐむ',
    arti: 'Memberikan (berkah/sedekah)',
    penjelasan: 'Tindakan mulia memberikan bantuan berupa uang, makanan, atau kemurahan hati kepada pihak yang kekurangan atau sedang membutuhkan pertolongan. Sering juga dikaitkan dengan berkah atau karunia.',
    contoh1: '食べ物を恵む。\n(Memberikan sedekah makanan kepada yang membutuhkan.)',
    contoh2: '恵みの雨が降る。\n(Turunnya hujan yang membawa rahmat dan berkah.)'
  },
  {
    id: 'm5h4_23',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '営む',
    furigana: 'いとなむ',
    arti: 'Menjalankan (usaha/kehidupan)',
    penjelasan: 'Melakukan kegiatan, menjalankan, mengelola, atau mengurus suatu pekerjaan bisnis/perusahaan, profesi, atau menjalani aktivitas siklus kehidupan sehari-hari secara rutin dan terus-menerus.',
    contoh1: '日常生活を営む。\n(Menjalani rutinitas aktivitas kehidupan sehari-hari dengan normal.)',
    contoh2: '旅館を営む。\n(Menjalankan dan mengelola bisnis penginapan bergaya Jepang / Ryokan.)'
  },
  {
    id: 'm5h4_24',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '危ぶむ',
    furigana: 'あやぶむ',
    arti: 'Mengkhawatirkan / Meragukan',
    penjelasan: 'Timbulnya perasaan khawatir, cemas, atau ragu-ragu di dalam hati bahwa suatu hal, acara, atau rencana mungkin tidak akan bisa berjalan lancar atau kemungkinan besar akan terancam batal/gagal.',
    contoh1: '会議の開催が危ぶまれる。\n(Pelaksanaan konferensi tersebut diragukan dan dikhawatirkan akan batal.)',
    contoh2: '会社の将来を危ぶむ。\n(Sangat mengkhawatirkan bagaimana nasib masa depan perusahaan tersebut.)'
  },

  // --- KELOMPOK 4 (う, つ) ---
  {
    id: 'm5h4_25',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '負う',
    furigana: 'おう',
    arti: 'Memikul (tanggung jawab) / Menderita (luka)',
    penjelasan: 'Memikul atau menanggung suatu beban, baik yang bersifat abstrak maupun material seperti tanggung jawab dan utang. Kata ini juga merujuk pada penderitaan fisik, seperti menderita luka parah atau luka bakar.',
    contoh1: '責任を負う。\n(Harus memikul tanggung jawab atas perbuatan tersebut.)',
    contoh2: 'やけどを負う。\n(Menderita luka bakar akibat kecelakaan.)'
  },
  {
    id: 'm5h4_26',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '沿う',
    furigana: 'そう',
    arti: 'Menyusuri / Sejalan dengan',
    penjelasan: 'Bergerak sejajar menelusuri sesuatu yang memiliki garis atau bentangan panjang (seperti sungai, rel, atau jalan pantai). Juga bermakna bertindak menyesuaikan dengan pedoman atau harapan orang lain.',
    contoh1: '川に沿って進む。\n(Maju terus menyusuri sepanjang jalur aliran sungai.)',
    contoh2: 'お客様のご希望に沿うように努力します。\n(Kami akan berusaha sebaik mungkin agar sejalan dengan ekspektasi/harapan pelanggan.)'
  },
  {
    id: 'm5h4_27',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '損なう',
    furigana: 'そこなう',
    arti: 'Merusak / Membahayakan',
    penjelasan: 'Tindakan yang menyebabkan kerusakan, kerugian, atau menurunnya kondisi sesuatu yang asalnya baik menjadi memburuk. Misalnya merusak kesehatan tubuh, merusak pemandangan, atau merusak suasana hati (mood) orang lain.',
    contoh1: '健康を損なう。\n(Membahayakan dan merusak kondisi kesehatan.)',
    contoh2: '人の機嫌を損なう。\n(Merusak suasana hati seseorang atau membuatnya menjadi kesal.)'
  },
  {
    id: 'm5h4_28',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '似通う',
    furigana: 'にかよう',
    arti: 'Sangat mirip / Serupa',
    penjelasan: 'Keadaan di mana sifat, pola pikir, bentuk fisik, sifat dasar, atau penampilan dari dua hal memiliki tingkat kesamaan dan kemiripan yang sangat kuat satu sama lain.',
    contoh1: '似通った考え。\n(Cara dan pola pikir yang sangat mirip/serupa.)',
    contoh2: '2つの事件は手口が似通っている。\n(Kedua kasus kejahatan tersebut memiliki modus operandi yang sangat serupa.)'
  },
  {
    id: 'm5h4_29',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '恥じらう',
    furigana: 'はじらう',
    arti: 'Merasa tersipu malu',
    penjelasan: 'Ekspresi yang menunjukkan rasa malu yang polos, malu-malu kucing, atau grogi (biasanya karena canggung, digoda, atau karena berhadapan dengan lawan jenis), yang sering kali ditunjukkan dengan rona pipi memerah atau tertunduk malu.',
    contoh1: '下を向いて恥じらう。\n(Menundukkan wajah karena merasa tersipu malu.)',
    contoh2: '彼女は恥じらいながら微笑んだ。\n(Dia tersenyum manis dengan malu-malu.)'
  },
  {
    id: 'm5h4_30',
    minggu: '5',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '保つ',
    furigana: 'たもつ',
    arti: 'Menjaga / Mempertahankan',
    penjelasan: 'Berusaha menjaga agar suatu kondisi, kualitas, jarak, hubungan, atau keadaan sesuatu benda dan situasi tetap terjaga secara stabil pada level tertentu, dan mencegahnya memburuk dari keadaan aslinya.',
    contoh1: '部屋を清潔に保つ。\n(Menjaga dan mempertahankan kebersihan kamar.)',
    contoh2: '若さを保つ。\n(Menjaga tubuh agar tetap awet muda.)'
  }
];

window.vocabData.push(...kosakata_m5h4);