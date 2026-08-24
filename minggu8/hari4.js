// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m8h4 = [
  // --- KUMPULAN 手 (Tangan) ---
  {
    id: 'm8h4_1',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を切る',
    furigana: 'てをきる',
    arti: 'Putus hubungan / Berhenti berhubungan',
    penjelasan: 'Berhenti berteman atau berurusan dengan seseorang atau kebiasaan yang buruk.',
    contoh1: '悪い仲間と手を切る。\n(Memutuskan hubungan dengan teman yang buruk.)',
    contoh2: '彼はギャンブルと手を切る決心をした。\n(Dia bertekad untuk berhenti total dari judi.)'
  },
  {
    id: 'm8h4_2',
    minggu: '8',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '手が足りない',
    furigana: 'てがたりない',
    arti: 'Kurang orang / Kurang tenaga kerja',
    penjelasan: 'Kondisi sibuk dan butuh tambahan orang untuk membantu pekerjaan.',
    contoh1: '手が足りないから、手伝ってくれ。\n(Karena kurang orang, tolong bantu aku.)',
    contoh2: '今は繁忙期で、店は手が足りない状態だ。\n(Sekarang lagi musim sibuk, toko kekurangan pegawai.)'
  },
  {
    id: 'm8h4_3',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手に余る',
    furigana: 'てにあまる',
    arti: 'Di luar kemampuan / Berat dilakukan sendiri',
    penjelasan: 'Pekerjaan atau masalah yang terlalu sulit untuk diselesaikan sendirian.',
    contoh1: '私の手に余る仕事。\n(Pekerjaan yang di luar kemampuan saya.)',
    contoh2: 'この問題は新入社員の手に余るだろう。\n(Masalah ini sepertinya terlalu berat untuk ditangani karyawan baru.)'
  },
  {
    id: 'm8h4_4',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を打つ',
    furigana: 'てをうつ',
    arti: 'Ambil tindakan / Mengatasi masalah',
    penjelasan: 'Melakukan langkah cepat untuk menangani masalah agar tidak makin parah.',
    contoh1: 'その問題に早く手を打つべきだ。\n(Kita harus segera mengambil tindakan atas masalah itu.)',
    contoh2: '被害が広がる前に、何らかの手を打たなければならない。\n(Sebelum dampaknya meluas, kita harus ambil tindakan.)'
  },
  {
    id: 'm8h4_5',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手に負えない',
    furigana: 'てにおえない',
    arti: 'Kebablasan / Tidak bisa diatur lagi',
    penjelasan: 'Seseorang atau situasi yang sudah sulit diatur, dikendalikan, atau diatasi.',
    contoh1: 'あの子は親の手に負えない。\n(Anak itu sudah tidak bisa diatur oleh orang tuanya.)',
    contoh2: '事態が悪化して、もはや私の手に負えない。\n(Kondisi makin parah dan sudah di luar kendali saya.)'
  },
  {
    id: 'm8h4_6',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を焼く',
    furigana: 'てをやく',
    arti: 'Repot / Bikin pusing',
    penjelasan: 'Pusing atau kerepotan menghadapi anak nakal atau masalah yang rumit.',
    contoh1: 'いたずらな生徒に手を焼く。\n(Kerepotan menghadapi murid yang nakal.)',
    contoh2: 'このパソコンの頻繁なエラーには本当に手を焼いている。\n(Saya pusing banget mengurus komputer yang sering error ini.)'
  },
  {
    id: 'm8h4_7',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を抜く',
    furigana: 'てをぬく',
    arti: 'Kerja asal-asalan / Cincai',
    penjelasan: 'Kerja tidak sungguh-sungguh atau sengaja mengurangi usaha agar cepat selesai.',
    contoh1: '仕事の手を抜く。\n(Bekerja secara asal-asalan.)',
    contoh2: 'ここで手を抜くと、後で大きな問題になるよ。\n(Kalau kerja asal-asalan di sini, nanti bisa jadi masalah besar.)'
  },
  {
    id: 'm8h4_8',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手を尽くす',
    furigana: 'てをつくす',
    arti: 'Mencoba segala cara',
    penjelasan: 'Melakukan semua cara yang bisa dilakukan demi menyelesaikan masalah.',
    contoh1: '問題解決のためにあらゆる手を尽くす。\n(Mencoba segala cara untuk menyelesaikan masalah.)',
    contoh2: '医者は患者を救うために手を尽くした。\n(Dokter sudah mencoba segala cara untuk menyelamatkan pasien.)'
  },
  {
    id: 'm8h4_9',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '手も足も出ない',
    furigana: 'てもあしもでない',
    arti: 'Pasrah / Tidak bisa berkutik',
    penjelasan: 'Tidak bisa berbuat apa-apa karena lawan terlalu kuat atau soal terlalu sulit.',
    contoh1: '手も足も出ない問題。\n(Soal yang sangat sulit sampai bingung harus mulai dari mana.)',
    contoh2: '相手が強すぎて、試合では手も足も出なかった。\n(Lawannya terlalu kuat, aku tidak bisa berkutik saat pertandingan.)'
  },

  // --- KUMPULAN 足 (Kaki) ---
  {
    id: 'm8h4_10',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '足が出る',
    furigana: 'あしがでる',
    arti: 'Nombok / Melebihi anggaran',
    penjelasan: 'Pengeluaran uang yang ternyata melebihi anggaran yang sudah disiapkan.',
    contoh1: '経費がかかりすぎて足が出た。\n(Biayanya kebanyakan, jadi nombok.)',
    contoh2: '買い物をしすぎて、今月は足が出てしまった。\n(Karena kebanyakan belanja, pengeluaran bulan ini melebihi anggaran.)'
  },
  {
    id: 'm8h4_11',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '足が棒になる',
    furigana: 'あしがぼうになる',
    arti: 'Kaki pegal banget / Kaki kaku',
    penjelasan: 'Kaki terasa sangat pegal dan kaku karena jalan kaki atau berdiri terlalu lama.',
    contoh1: '1日中歩いて足が棒になった。\n(Jalan seharian bikin kaki pegal banget.)',
    contoh2: '立ち仕事なので、夕方には足が棒になる。\n(Karena kerjanya berdiri, sore hari kaki terasa kaku.)'
  },
  {
    id: 'm8h4_12',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '足を引っ張る',
    furigana: 'あしをひっぱる',
    arti: 'Jadi beban / Mengganggu tim',
    penjelasan: 'Tindakan yang bikin orang lain atau tim jadi terhambat kesuksesannya.',
    contoh1: '同僚の足を引っ張る。\n(Menjadi beban bagi rekan kerja.)',
    contoh2: 'チームの足を引っ張らないように頑張ります。\n(Saya akan berusaha agar tidak menjadi beban bagi tim.)'
  },
  {
    id: 'm8h4_13',
    minggu: '8',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '足が早い',
    furigana: 'あしがはやい',
    arti: 'Cepat basi / Cepat rusak',
    penjelasan: 'Bahan makanan (seperti ikan atau sayur) yang gampang basi.',
    contoh1: '生ものは足が早い。\n(Makanan mentah sangat cepat basi.)',
    contoh2: '夏は食べ物の足が早いから注意してください。\n(Saat musim panas makanan cepat basi, jadi hati-hati ya.)'
  },

  // --- KUMPULAN 首 (Leher) ---
  {
    id: 'm8h4_14',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首を横に振る',
    furigana: 'くびをよこにふる',
    arti: 'Geleng kepala / Menolak',
    penjelasan: 'Menggelengkan kepala tanda tidak setuju atau menolak tawaran.',
    contoh1: '彼は提案に対して首を横に振った。\n(Dia menggelengkan kepala tanda tidak setuju pada usul itu.)',
    contoh2: '父は私の留学に首を横に振った。\n(Ayah menggelengkan kepala, tidak mengizinkan saya kuliah ke luar negeri.)'
  },
  {
    id: 'm8h4_15',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首を長くして待つ',
    furigana: 'くびをながくしてまつ',
    arti: 'Sangat menanti-nanti / Tidak sabar menunggu',
    penjelasan: 'Menunggu sesuatu atau seseorang dengan rasa sangat antusias.',
    contoh1: 'プレゼントを首を長くして待つ。\n(Menunggu kado dengan sangat antusias.)',
    contoh2: 'おじいちゃんは孫が来るのを首を長くして待っている。\n(Kakek sangat menanti-nanti kedatangan cucunya.)'
  },
  {
    id: 'm8h4_16',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首をひねる',
    furigana: 'くびをひねる',
    arti: 'Bingung / Merasa aneh',
    penjelasan: 'Memiringkan kepala karena merasa aneh, ragu, atau belum paham.',
    contoh1: '首をひねるような結果。\n(Hasil yang membingungkan / membuat aneh.)',
    contoh2: '彼の説明を聞いて、誰もが首をひねった。\n(Mendengar penjelasannya, semua orang jadi merasa bingung.)'
  },
  {
    id: 'm8h4_17',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首を突っ込む',
    furigana: 'くびをつっこむ',
    arti: 'Ikut campur / Kepo',
    penjelasan: 'Sengaja terlibat atau ikut campur dalam urusan orang lain.',
    contoh1: '厄介な問題に首を突っ込む。\n(Ikut campur dalam masalah yang rumit.)',
    contoh2: '他人の喧嘩に首を突っ込まないほうがいい。\n(Sebaiknya jangan ikut campur masalah pertengkaran orang lain.)'
  },
  {
    id: 'm8h4_18',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '首が回らない',
    furigana: 'くびがまわらない',
    arti: 'Terlilit utang / Susah uang',
    penjelasan: 'Kondisi keuangan yang sangat sulit karena utang menumpuk.',
    contoh1: '借金で首が回らない。\n(Terlilit utang sampai pusing / tidak berdaya.)',
    contoh2: 'ローンが重なって、今は首が回らない状態だ。\n(Utang cicilan menumpuk, sekarang kondisi keuangan lagi susah sekali.)'
  },

  // --- KUMPULAN 息 (Napas) ---
  {
    id: 'm8h4_19',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '息が切れる',
    furigana: 'いきがきれる',
    arti: 'Ngos-ngosan / Kehabisan napas',
    penjelasan: 'Napas jadi tersengal-sengal setelah olahraga atau naik tangga.',
    contoh1: '走って息が切れる。\n(Ngos-ngosan karena berlari.)',
    contoh2: '階段を上っただけで息が切れてしまった。\n(Baru naik tangga saja napas saya sudah ngos-ngosan.)'
  },
  {
    id: 'm8h4_20',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '息が詰まる',
    furigana: 'いきがつまる',
    arti: 'Pengap / Suasana bikin tegang',
    penjelasan: 'Merasa tegang atau tidak nyaman karena ruangan penuh atau rapat yang kaku.',
    contoh1: '満員電車で息が詰まりそうだ。\n(Rasanya pengap/sesak di dalam kereta yang penuh.)',
    contoh2: '会議の雰囲気が重くて息が詰まる。\n(Suasana rapat sangat kaku sampai bikin tegang/sesak.)'
  },
  {
    id: 'm8h4_21',
    minggu: '8',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '息が長い',
    furigana: 'いきがながい',
    arti: 'Awet / Tahan lama',
    penjelasan: 'Artis, produk, atau proyek yang bisa eksis dalam waktu sangat lama.',
    contoh1: '息が長い役者。\n(Aktor senior yang karirnya awet/bertahan lama.)',
    contoh2: 'これは息が長いプロジェクトになる。\n(Ini akan menjadi proyek jangka panjang.)'
  },
  {
    id: 'm8h4_22',
    minggu: '8',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '息もつかずに',
    furigana: 'いきもつかずに',
    arti: 'Tanpa henti / Tanpa istirahat',
    penjelasan: 'Melakukan sesuatu (seperti bicara atau baca) terus-menerus tanpa jeda.',
    contoh1: '彼は息もつかずにしゃべり続けた。\n(Dia terus bicara tanpa henti.)',
    contoh2: '息もつかずに一気に本を読み終えた。\n(Membaca habis buku sekaligus tanpa jeda karena asyik.)'
  },
  {
    id: 'm8h4_23',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '息を抜く',
    furigana: 'いきをぬく',
    arti: 'Istirahat sejenak / Santai dulu',
    penjelasan: 'Berhenti sejenak dari pekerjaan untuk melepas lelah.',
    contoh1: '息を抜く暇もないくらい忙しい。\n(Sangat sibuk sampai tidak ada waktu istirahat sejenak.)',
    contoh2: '週末くらいは少し息を抜いてください。\n(Minimal saat akhir pekan, santailah sejenak.)'
  },
  {
    id: 'm8h4_24',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '息をのむ',
    furigana: 'いきをのむ',
    arti: 'Terkagum-kagum / Menahan napas',
    penjelasan: 'Sangat kaget atau kagum sampai tanpa sadar menahan napas.',
    contoh1: '息をのむほど美しい景色。\n(Pemandangan yang sangat indah sampai bikin terperangah.)',
    contoh2: 'その映画の結末に、観客は息をのんだ。\n(Penonton menahan napas melihat akhir dari film itu.)'
  },

  // --- KUMPULAN 気 (Perasaan / Pikiran) ---
  {
    id: 'm8h4_25',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気がある',
    furigana: 'きがある',
    arti: 'Ada rasa / Suka / Berminat',
    penjelasan: 'Ada rasa suka secara romantis, atau ada minat pada suatu tawaran.',
    contoh1: '彼は田中さんに気があるらしい。\n(Sepertinya dia ada rasa sama Tanaka-san.)',
    contoh2: 'その仕事に気があるなら、挑戦してみて。\n(Kalau kamu berminat sama pekerjaan itu, coba saja.)'
  },
  {
    id: 'm8h4_26',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気が向かない',
    furigana: 'きがむかない',
    arti: 'Lagi malas / Tidak mood',
    penjelasan: 'Sedang tidak ada niat atau keinginan untuk melakukan sesuatu.',
    contoh1: '誘われたけど、気が向かない。\n(Diajak sih, tapi lagi tidak mood.)',
    contoh2: '気が向かない日は、無理して勉強しない。\n(Kalau lagi tidak mood, saya tidak memaksakan diri belajar.)'
  },
  {
    id: 'm8h4_27',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気を配る',
    furigana: 'きをくばる',
    arti: 'Perhatian / Peduli sekitar',
    penjelasan: 'Sikap peka dan memperhatikan kenyamanan orang-orang di sekitar.',
    contoh1: '彼は周囲に気を配る人だ。\n(Dia orang yang peduli dan perhatian sama sekitarnya.)',
    contoh2: 'お客様の要望に気を配る。\n(Memperhatikan kebutuhan pelanggan dengan baik.)'
  },
  {
    id: 'm8h4_28',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気が利く',
    furigana: 'きがきく',
    arti: 'Peka / Tanggap',
    penjelasan: 'Langsung tanggap membantu orang lain sebelum diminta.',
    contoh1: '彼女は気が利く人だ。\n(Dia orang yang sangat peka dan tanggap.)',
    contoh2: '気が利く店員が、すぐにお水を持ってきてくれた。\n(Pelayan yang tanggap itu langsung membawakan air minum.)'
  },
  {
    id: 'm8h4_29',
    minggu: '8',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '気が散る',
    furigana: 'きがちる',
    arti: 'Buyar / Hilang fokus',
    penjelasan: 'Fokus terganggu karena ada suara bising atau gangguan lain.',
    contoh1: '気が散って勉強が手につかない。\n(Fokus buyar jadi tidak bisa konsentrasi belajar.)',
    contoh2: 'テレビの音がうるさくて気が散る。\n(Suara TV bising banget bikin hilang fokus.)'
  }
];

window.vocabData.push(...kosakata_m8h4);