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
    penjelasan: 'Punya tekad atau niat kuat untuk mencapai cita-cita/profesi di masa depan.',
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
    penjelasan: 'Mencoba atau mengetes produk, metode, atau kemampuan diri untuk tahu hasilnya.',
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
    penjelasan: 'Digunakan khusus untuk melakukan hal negatif seperti melanggar hukum, dosa, atau kesalahan fatal.',
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
    penjelasan: 'Merusak aturan, ketertiban, atau ketenangan yang sudah rapi.',
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
    penjelasan: 'Mengisi wadah sampai penuh, atau memenuhi syarat dan keinginan seseorang.',
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
    penjelasan: 'Menyelesaikan tugas, janji, atau peran sampai tuntas.',
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
    penjelasan: 'Sengaja atau tidak sengaja melompati baris, poin, atau bagian dari suatu urutan.',
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
    penjelasan: 'Mengalahkan lawan dalam pertandingan, permainan, atau persaingan.',
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
    penjelasan: 'Hal yang bikin pusing, cemas, atau mengganggu pikiran (seperti kebisingan atau penyakit).',
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
    penjelasan: 'Melatih diri, panca indera, atau tubuh agar terbiasa dengan hal baru.',
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
    penjelasan: 'Merusak tempat atau ladang hingga berantakan dan hancur.',
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
    penjelasan: 'Menggunakan banyak waktu, energi, atau uang untuk suatu kegiatan.',
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
    arti: 'Menyusun matang-matang / Menguleni',
    penjelasan: 'Mematangkan rencana/ide secara mendalam. Bisa juga berarti menguleni adonan.',
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
    penjelasan: 'Kemampuan, insting, kepekaan, atau tekad yang menurun/berkurang ketajamannya.',
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
    penjelasan: 'Memiliki kualitas, kemampuan, atau kebahagiaan yang lebih hebat dibanding yang lain.',
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
    penjelasan: 'Mahir mengendalikan alat/mesin, menggunakan bahasa asing, atau mengontrol orang.',
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
    penjelasan: 'Orang atau hewan yang berkumpul/bergerombol banyak karena tertarik sesuatu.',
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
    penjelasan: 'Sudah memiliki bakat alami sejak lahir, atau tempat yang sudah dilengkapi fasilitas.',
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
    penjelasan: 'Aturan/sistem yang diperbarui, atau situasi/sikap yang berubah jadi kaku dan formal.',
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
    penjelasan: 'Menderita penyakit fisik, atau merasa cemas/stres karena kepikiran masalah.',
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
    penjelasan: 'Punya banyak ketersediaan (seperti sumber daya, pengalaman, atau ekspresi).',
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
    penjelasan: 'Memberi bantuan atau sedekah kepada orang butuh. Sering juga berarti berkah alam.',
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
    penjelasan: 'Mengelola bisnis/usaha, atau menjalani rutinitas kehidupan sehari-hari.',
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
    penjelasan: 'Khawatir atau ragu kalau acara/rencana bakalan gagal atau tidak berjalan lancar.',
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
    penjelasan: 'Menanggung beban tanggung jawab/utang, atau mengalami cedera/luka fisik.',
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
    penjelasan: 'Berjalan mengikuti jalur (sungai/jalan), atau bertindak sesuai harapan/pedoman.',
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
    penjelasan: 'Membuat hal baik jadi buruk (seperti merusak kesehatan atau merusak *suasana hati*).',
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
    penjelasan: 'Dua hal yang punya sifat, pola pikir, atau bentuk yang sangat mirip.',
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
    penjelasan: 'Tersipu malu-malu kucing (pipi memerah atau menunduk) saat canggung/digoda.',
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
    penjelasan: 'Menjaga kondisi, kualitas, atau situasi agar tetap stabil dan tidak memburuk.',
    contoh1: '部屋を清潔に保つ。\n(Menjaga dan mempertahankan kebersihan kamar.)',
    contoh2: '若さを保つ。\n(Menjaga tubuh agar tetap awet muda.)'
  }
];

window.vocabData.push(...kosakata_m5h4);