// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m8h5 = [
  // --- BAGIAN 1: おぼえましょう あいさつで (Salam & Sapaan) ---
  {
    id: 'm8h5_1',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: 'お手数をおかけしました',
    furigana: 'おてすうをおかけしました',
    arti: 'Maaf telah merepotkan Anda',
    penjelasan: 'Fungsi: Dipakai untuk berterima kasih sekaligus minta maaf setelah orang lain meluangkan waktu atau repot membantu kita (sangat sopan).',
    contoh1: 'お手数をおかけしました。\n(Maaf telah merepotkan Anda.)',
    contoh2: 'この度は大変お手数をおかけしました。\n(Kali ini saya benar-benar minta maaf karena telah sangat merepotkan Anda.)'
  },
  {
    id: 'm8h5_2',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: 'なにぶん(=なにとぞ)よろしくお願いいたします',
    furigana: 'なにぶん(=なにとぞ)よろしくおねがいいたします',
    arti: 'Mohon bantuannya dengan sangat',
    penjelasan: 'Fungsi: Dipakai untuk memohon bantuan, bimbingan, atau kerja sama dengan tingkat kesopanan ekstra tinggi (sangat formal, cocok untuk bisnis).',
    contoh1: 'なにぶんよろしくお願いいたします。\n(Mohon bantuannya dengan sangat.)',
    contoh2: '未熟者ですが、なにとぞよろしくお願いいたします。\n(Walaupun saya masih kurang berpengalaman, saya memohon bimbingan dan kerja sama Anda dengan sungguh-sungguh.)'
  },
  {
    id: 'm8h5_3',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '取り急ぎお礼まで',
    furigana: 'とりいそぎおれいまで',
    arti: 'Sekadar ucapan terima kasih kilat',
    penjelasan: 'Fungsi: Ditulis di akhir email atau surat untuk berterima kasih secepatnya (respon kilat) sebelum nanti membalas atau membahas lebih detail.',
    contoh1: '取り急ぎお礼まで。\n(Ini sekadar pesan singkat untuk mengucapkan terima kasih / Sekian ucapan terima kasih dari saya untuk saat ini.)',
    contoh2: 'まずはメールにて、取り急ぎお礼まで申し上げます。\n(Sebagai permulaan melalui email ini, saya ingin segera menyampaikan rasa terima kasih.)'
  },
  {
    id: 'm8h5_4',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '夜分遅く、すみませんが……',
    furigana: 'やぶんおそく、すみませんが……',
    arti: 'Maaf mengganggu larut malam',
    penjelasan: 'Fungsi: Kalimat basa-basi pembuka saat kita terpaksa menelpon, menge-chat, atau bertamu ke tempat orang lain di waktu yang sudah larut malam.',
    contoh1: '夜分遅く、すみませんが……。\n(Maaf mengganggu larut malam begini, tapi...)',
    contoh2: '夜分遅く、すみませんが、少しお時間よろしいでしょうか。\n(Maaf mengganggu malam-malam, tapi apakah Anda punya waktu sebentar untuk bicara?)'
  },
  {
    id: 'm8h5_5',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: 'お騒がせして申し訳ありません',
    furigana: 'おさわがせしてもうしわけありません',
    arti: 'Mohon maaf atas kegaduhan yang terjadi',
    penjelasan: 'Fungsi: Dipakai untuk minta maaf ke orang sekitar/tetangga setelah kita membuat keributan, kegaduhan, atau kepanikan.',
    contoh1: 'お騒がせして申し訳ありません。\n(Maaf karena telah menimbulkan kegaduhan/kebisingan.)',
    contoh2: '近隣の皆様には、大変お騒がせして申し訳ありませんでした。\n(Kami memohon maaf yang sebesar-besarnya kepada para tetangga karena telah membuat keributan.)'
  },

  // --- BAGIAN 2: いろいろな表現 (Berbagai Ekspresi) ---
  {
    id: 'm8h5_6',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '申し訳ありませんが、これをコピーしてください',
    furigana: 'もうしわけありませんが、これをコピーしてください',
    arti: 'Mohon maaf, tolong fotokopi ini',
    penjelasan: 'Fungsi: Trik menyuruh atau minta tolong (terutama di kantor) agar terdengar lebih sopan dan tidak "bossy" (tidak terkesan memerintah kasar).',
    contoh1: '申し訳ありませんが、これをコピーしてください。\n(Mohon maaf, tapi tolong fotokopi dokumen ini.)',
    contoh2: '申し訳ありませんが、もう一度説明していただけますか。\n(Mohon maaf, tapi bisakah Anda menjelaskannya sekali lagi?)'
  },
  {
    id: 'm8h5_7',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '悪いけど、そこの雑誌を取ってくれる？',
    furigana: 'わるいけど、そこのざっしをとってくれる？',
    arti: 'Maaf ya, bisa tolong ambilkan majalah itu?',
    penjelasan: 'Fungsi: Dipakai untuk minta tolong ke teman akrab. Mirip seperti "Eh sori, tolong ambilin itu dong" dalam bahasa Indonesia.',
    contoh1: '悪いけど、そこの雑誌を取ってくれる？\n(Maaf ya / Nggak enak nih, tapi bisa tolong ambilkan majalah di sana itu?)',
    contoh2: '悪いけど、今日少し遅れる。\n(Maaf ya, hari ini aku bakal telat sedikit.)'
  },
  {
    id: 'm8h5_8',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '……ですが、悪しからず',
    furigana: '……ですが、あしからず',
    arti: '..., jadi mohon dimaklumi',
    penjelasan: 'Fungsi: Dipakai di akhir kalimat penolakan atau berita buruk agar lawan bicara memaklumi dan tidak tersinggung ("Mohon pengertiannya ya").',
    contoh1: '……ですが、悪しからず。\n(..., jadi mohon jangan tersinggung / harap maklum.)',
    contoh2: 'ご期待に沿えないかもしれませんが、悪しからずご了承ください。\n(Mungkin kami tidak bisa memenuhi harapan Anda, jadi kami mohon pengertiannya agar tidak tersinggung.)'
  },
  {
    id: 'm8h5_9',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '差し支えなければ、……',
    furigana: 'さしつかえなければ、……',
    arti: 'Jika Anda tidak keberatan, ...',
    penjelasan: 'Fungsi: Dipakai sebagai basa-basi sopan sebelum menanyakan hal pribadi (seperti umur, nomor HP) atau saat meminta sesuatu tanpa unsur paksaan.',
    contoh1: '差し支えなければ、……。\n(Jika Anda tidak keberatan, ...)',
    contoh2: '差し支えなければ、お電話番号を教えていただけますか。\n(Jika tidak keberatan, bolehkah Anda memberitahu nomor telepon Anda?)'
  },
  {
    id: 'm8h5_10',
    minggu: '8',
    hari: '5',
    kategori: 'kata benda',
    kanji: 'いざというとき',
    furigana: 'いざというとき',
    arti: 'Saat darurat / Saat-saat genting',
    penjelasan: 'Fungsi: Menunjukkan momen darurat, tak terduga, atau saat-saat genting di mana persiapan atau tindakan cepat diperlukan ("Buat jaga-jaga").',
    contoh1: 'いざというとき(のため)に備えよう。\n(Mari bersiap sedia untuk menghadapi keadaan darurat / saat-saat genting!)',
    contoh2: '彼はいざというときに頼りになる。\n(Dia adalah orang yang bisa diandalkan di saat-saat genting/darurat.)'
  },
  {
    id: 'm8h5_11',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: 'そのことはいざ知らず、……',
    furigana: 'そのことはいざしらず、……',
    arti: 'Hal itu lain cerita, tapi...',
    penjelasan: 'Fungsi: Dipakai saat kita ingin mengabaikan satu topik ("Itu sih biarin aja / masa bodoh deh") agar bisa fokus membahas topik lain yang lebih penting.',
    contoh1: 'そのことはいざ知らず、……。\n(Terlepas dari hal itu / Mengesampingkan hal tersebut, ...)',
    contoh2: '昔のことはいざ知らず、今はとても真面目だ。\n(Terlepas dari masa lalunya yang entah bagaimana, sekarang dia sangat serius dan rajin.)'
  },
  {
    id: 'm8h5_12',
    minggu: '8',
    hari: '5',
    kategori: 'kata sifat',
    kanji: 'きりがいい',
    furigana: 'きりがいい',
    arti: 'Titik berhenti yang pas',
    penjelasan: 'Fungsi: Dipakai saat pekerjaan sudah sampai di titik yang pas untuk istirahat (posisinya rapi, jadi tidak nanggung kalau ditinggal sebentar).',
    contoh1: 'きりがいいところで休みましょう。\n(Mari beristirahat di titik yang pas / saat pekerjaan tidak nanggung.)',
    contoh2: '仕事のきりがいいので、今日は帰ります。\n(Karena pekerjaannya sudah sampai di titik perhentian yang pas, saya akan pulang hari ini.)'
  },
  {
    id: 'm8h5_13',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: 'きりがない',
    furigana: 'きりがない',
    arti: 'Tidak ada habisnya',
    penjelasan: 'Fungsi: Dipakai untuk mengeluhkan sesuatu yang tidak akan ada ujungnya/habisnya kalau terus-terusan diladeni atau dihitung.',
    contoh1: '欲を言えばきりがない。\n(Kalau terus menuruti keinginan/nafsu, tidak akan ada habisnya.)',
    contoh2: '彼の欠点を数え上げればきりがない。\n(Kalau kita mencoba menghitung kekurangan-kekurangannya, tidak akan ada habisnya.)'
  },
  {
    id: 'm8h5_14',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: 'ピンからキリまで',
    furigana: 'ピンからキリまで',
    arti: 'Dari kualitas terbaik hingga terburuk (bervariasi)',
    penjelasan: 'Fungsi: Dipakai untuk mendeskripsikan variasi harga atau kualitas suatu barang, mulai dari yang paling bagus (pin) sampai yang paling jelek/murah (kiri).',
    contoh1: 'ワインと言ってもピンからキリまである。\n(Walaupun sama-sama disebut wine, kualitasnya bermacam-macam dari yang terbaik sampai yang terburuk.)',
    contoh2: 'この店の商品の値段はピンキリだ。\n(Harga barang di toko ini sangat bervariasi dari yang sangat mahal sampai yang paling murah.)'
  },
  {
    id: 'm8h5_15',
    minggu: '8',
    hari: '5',
    kategori: 'kata keterangan',
    kanji: '一から十まで',
    furigana: 'いちからじゅうまで',
    arti: 'Dari awal sampai akhir / Secara menyeluruh',
    penjelasan: 'Fungsi: Dipakai untuk menjelaskan tindakan yang dilakukan sangat detail atau menyeluruh, benar-benar dari A sampai Z (tidak ada yang kelewat).',
    contoh1: '彼のことは一から十まで知っている。\n(Aku tahu segala hal tentangnya, dari awal sampai akhir / dari A sampai Z.)',
    contoh2: '新人に仕事のやり方を一から十まで教える。\n(Mengajari cara kerja kepada pegawai baru dari awal sampai akhir secara mendetail.)'
  },
  {
    id: 'm8h5_16',
    minggu: '8',
    hari: '5',
    kategori: 'kata keterangan',
    kanji: '来る～',
    furigana: 'きたる～',
    arti: '... yang akan datang',
    penjelasan: 'Fungsi: Kata formal yang diletakkan di depan hari atau tanggal untuk acara yang "akan datang" atau "segera tiba".',
    contoh1: '来る3月10日に卒業式が行われる。\n(Upacara kelulusan akan diadakan pada tanggal 10 Maret yang akan datang.)',
    contoh2: '来る日曜日、町内会の会議があります。\n(Pada hari Minggu besok/yang akan datang, akan ada rapat dewan lingkungan.)'
  },
  {
    id: 'm8h5_17',
    minggu: '8',
    hari: '5',
    kategori: 'kata keterangan',
    kanji: '去る～',
    furigana: 'さる～',
    arti: '... yang lalu',
    penjelasan: 'Fungsi: Kata formal yang diletakkan di depan hari atau tanggal untuk acara yang "baru saja berlalu" atau "sudah lewat".',
    contoh1: '去る3月10日に卒業式が行われた。\n(Upacara kelulusan telah diadakan pada tanggal 10 Maret yang lalu.)',
    contoh2: '去る5日、彼は海外へ出発した。\n(Pada tanggal 5 yang lalu, dia telah berangkat ke luar negeri.)'
  },

  // --- BAGIAN 3: たとえを使った慣用表現 (Ungkapan Idiom menggunakan Metafora) ---
  {
    id: 'm8h5_18',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '胸をえぐられるような',
    furigana: 'むねをえぐられるような',
    arti: 'Menyayat hati / Sangat menyedihkan',
    penjelasan: 'Fungsi: Kiasan untuk mengekspresikan rasa sedih atau sakit hati yang luar biasa, seolah-olah dada dirobek/disayat.',
    contoh1: '胸をえぐられるような思いをした。\n(Saya mengalami pengalaman yang sangat menyayat hati / menyedihkan.)',
    contoh2: '悲惨なニュースを聞いて、胸をえぐられるような悲しみを感じた。\n(Mendengar berita tragis itu, saya merasakan kesedihan mendalam yang bagaikan menyayat hati.)'
  },
  {
    id: 'm8h5_19',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '口から先に生まれたような',
    furigana: 'くちからさきにうまれたような',
    arti: 'Sangat banyak bicara / Cerewet',
    penjelasan: 'Fungsi: Kiasan sindiran untuk orang yang super cerewet dan tidak bisa berhenti ngomong (dianalogikan seolah-olah saat lahir, mulutnya yang keluar duluan).',
    contoh1: '彼は口から先に生まれたような男だ。\n(Dia adalah pria yang mulutnya tidak pernah berhenti bicara / cerewet sekali.)',
    contoh2: '彼女は口から先に生まれたように、一日中しゃべっている。\n(Dia bicara sepanjang hari seolah-olah mulutnya tercipta untuk terus mengoceh.)'
  },
  {
    id: 'm8h5_20',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '雲をつかむような',
    furigana: 'くもをつかむような',
    arti: 'Tidak realistis / Mengawang-awang',
    penjelasan: 'Fungsi: Kiasan untuk cerita, rencana, atau omongan yang tidak masuk akal, mustahil terwujud, dan ngawang (seperti mencoba menangkap awan).',
    contoh1: 'それは雲をつかむような話だ。\n(Itu adalah rencana/cerita yang sangat tidak realistis dan mengawang-awang.)',
    contoh2: '雲をつかむような夢ばかり見ていないで、現実を見なさい。\n(Jangan hanya bermimpi yang tidak realistis, lihatlah kenyataan.)'
  },
  {
    id: 'm8h5_21',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '顔から火が出るほど',
    furigana: 'かおからひがでるほど',
    arti: 'Sangat malu sekali',
    penjelasan: 'Fungsi: Kiasan saat seseorang mengalami kejadian yang bikin sangat amat malu sampai mukanya memerah panas (seperti keluar api).',
    contoh1: '顔から火が出るほど恥ずかしい。\n(Saya merasa sangat malu sampai rasanya wajah saya mau terbakar.)',
    contoh2: '人前で派手に転んで、顔から火が出るほど恥ずかしかった。\n(Saya jatuh dengan heboh di depan umum, rasanya malu sekali sampai wajah ini terasa terbakar.)'
  },
  {
    id: 'm8h5_22',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '猫の手も借りたいほど',
    furigana: 'ねこのてもかりたいほど',
    arti: 'Sangat sibuk hingga butuh bantuan apa pun',
    penjelasan: 'Fungsi: Kiasan untuk kondisi yang sangat super sibuk, saking sibuknya sampai butuh bantuan siapa saja (bahkan bantuan tangan kucing sekalipun).',
    contoh1: '猫の手も借りたいほど忙しい。\n(Saking sibuknya, saya sampai ingin meminjam tangan kucing / butuh bantuan siapapun.)',
    contoh2: '年末の店は、猫の手も借りたいほどの忙しさだった。\n(Toko di akhir tahun sibuknya luar biasa sampai-sampai butuh bantuan siapa saja.)'
  },
  {
    id: 'm8h5_23',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: '耳にたこができるほど',
    furigana: 'みみにたこができるほど',
    arti: 'Bosan mendengarnya karena terlalu sering diulang',
    penjelasan: 'Fungsi: Kiasan saat kita sudah terlalu bosan/muak mendengar omelan, nasihat, atau cerita yang sama terus-menerus (sampai telinga rasanya kapalan).',
    contoh1: 'それは耳にたこができるほど聞いた。\n(Hal itu sudah sangat sering kudengar sampai telingaku rasanya kapalan / bosan mendengarnya.)',
    contoh2: '母の説教は、耳にたこができるほど聞かされた。\n(Saya sudah disuguhi omelan ibu berulang kali sampai telinga ini terasa kapalan saking seringnya.)'
  },
  {
    id: 'm8h5_24',
    minggu: '8',
    hari: '5',
    kategori: 'ungkapan',
    kanji: 'のどから手が出るほど',
    furigana: 'のどからてがでるほど',
    arti: 'Sangat menginginkan sesuatu',
    penjelasan: 'Fungsi: Kiasan ketika kita sangat amat mengidamkan suatu barang atau hal (sampai rasanya tangan mau keluar dari tenggorokan saking ngebetnya mau mengambil barang itu).',
    contoh1: 'のどから手が出るほどほしい。\n(Saya benar-benar sangat menginginkan barang itu lebih dari apapun.)',
    contoh2: 'あの限定モデルの時計が、のどから手が出るほど欲しい。\n(Saya sangat mengidam-idamkan jam tangan edisi terbatas itu sampai rasanya tangan ini ingin keluar dari tenggorokan untuk mengambilnya.)'
  }
];

window.vocabData.push(...kosakata_m8h5);