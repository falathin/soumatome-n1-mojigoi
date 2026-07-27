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
    arti: 'Maap yaa udah bikin repot kakak~',
    penjelasan: 'Ini dibilang kalau dedek habis minta tolong atau bikin kakak capek bantuin dedek. Kayak bilang makasih tapi campur minta maap karena udah ngerepotin!',
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
    arti: 'Tolongin dedek yaa, pweease~',
    penjelasan: 'Ini ucapan sopaaan banget buat minta tolong. Kayak dedek mohon-mohon sama om/tante, janji bakal jadi anak baik kalau dibantuin~',
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
    arti: 'Makasih yaa cepet-cepet!',
    penjelasan: 'Kalau dedek dikasih permen, langsung bilang makasih detik itu juga sebelum ngomong panjang-panjang! Biasanya ditulis di akhir surat atau email.',
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
    arti: 'Maap ya malem-malem ganggu bobok...',
    penjelasan: 'Kalau dedek mau bangunin papa mama pas udah gelap buat minta susu, bilangnya gini dulu biar ndak dimarahin karena ganggu waktu tidur.',
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
    arti: 'Maap ya dedek tadi berisik nangeees...',
    penjelasan: 'Kalau dedek abis teriak-teriak atau bikin rumah heboh dan berantakan, bilang ini biar semua orang maafin dedek karena udah bikin gaduh.',
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
    arti: 'Maap ya, tolong kopi-in ini dong~',
    penjelasan: 'Ini cara minta tolong yang pintel! Dedek bilang maap dulu baru nyuruh kakak lakuin sesuatu, biar kakaknya ndak cembelut.',
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
    arti: 'Maap niih, bisa tolong ambilin itu ndak?',
    penjelasan: 'Kalau dedek lagi main sama temen terus mager jalan, minta tolongnya pake ini. Cuma boleh dipakai ke temen deket aja ya!',
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
    arti: '..., jadi jangan ngambek yaa~',
    penjelasan: 'Kalau dedek ndak bisa bagi mainan atau lakuin sesuatu yang dipengenin temen, dedek bilang ini biar temennya ndak nangis atau marah-marah.',
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
    arti: 'Kalau kakak ndak keberatan...',
    penjelasan: 'Cara aluuus banget buat nanya sesuatu. Jadi kalau kakaknya ndak mau kasih tau atau ndak mau bantuin, ndak apa-apa deh dedek ndak maksa~',
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
    arti: 'Pas lagi gawat daruraaat!',
    penjelasan: 'Waktu tiba-tiba ada kejadian kaget atau uha-uha! Kayak dedek butuh popok sekarang jugaaaa, jadi harus selalu siap sedia!',
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
    arti: 'Kalau itu dedek ndak tau deh, taapii...',
    penjelasan: 'Biarin aja hal yang dedek ndak ngerti atau ndak pasti, mendingan kita ngobrolin hal lain yang dedek ngerti aja yuk!',
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
    arti: 'Waktu yang pas buat stop main~',
    penjelasan: 'Kalau main baloknya udah jadi satu bentuk rumah, nah itu waktu yang pas banget buat istirahat mamam dulu. Ndak nanggung deh!',
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
    arti: 'Ndak ada habisnya euy!',
    penjelasan: 'Kayak minta permen terus-terusan, ndak brenti-brenti. Kalau diturutin terus, nanti giginya dedek ompong semua deh!',
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
    arti: 'Dari yang paling bagus sampe yang jelek~',
    penjelasan: 'Mainan itu macem-macem lho! Ada yang harganya mahal banget, ada yang dapet hadiah dari ciki. Pokoknya macem-macem tingkatannya!',
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
    arti: 'Dari awal sampe akhir bangeet~',
    penjelasan: 'Artinya dari satu sampe sepuluh! Berarti dedek tau semuanya dari awal sampe tamat, ndak ada yang kelewat satupun. Dedek pintel!',
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
    arti: 'Nanti di waktu yang akan dataaang~',
    penjelasan: 'Buat ngasih tau jadwal masa depan. Kayak, "Hari Minggu yang akan datang, dedek mau diajak jalan-jalan ke taman!"',
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
    arti: 'Kemarin-kemarin yang udah lewaaat~',
    penjelasan: 'Kebalikannya yang tadi. Ini buat cerita waktu atau hari yang udah beres dilewatin, kayak "Kemarin tanggal 5 yang lalu, dedek mam es krim".',
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
    arti: 'Sediih banget rasanya atit di dada :(',
    penjelasan: 'Rasanya sediiiih banget kayak hati dedek ditusuk-tusuk sampe nangis guling-guling dan ndak mau makan.',
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
    arti: 'Cerewet banget ih ndak bisa diem~',
    penjelasan: 'Buat temen dedek yang ngomoong terus kayak burung beo. Pas lahir dari perut mama, kayaknya yang keluar mulutnya duluan kali ya!',
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
    arti: 'Ngarang banget, mana bisa nangkep awan!',
    penjelasan: 'Ngomongin sesuatu yang ndak mungkin kejadian beneran. Masa awan di langit mau ditangkep pake tangan dedek yang kecil, ya ndak bisa dong!',
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
    arti: 'Maluu banget sampe pipinya merah panas!',
    penjelasan: 'Pas dedek jatoh atau salah panggil mama orang lain, aduuuh malunya! Pipi dedek rasanya panas kayak mau keluar apinya.',
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
    arti: 'Sibuuk banget, mpus tolongin dedek dong!',
    penjelasan: 'Saking repotnya beresin mainan, rasanya tangan kucing (mpus) yang ndak bisa apa-apa itu mau dedek pinjem juga buat bantuin!',
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
    arti: 'Bosen dengerinnya telinga dedek sampe kapalan!',
    penjelasan: 'Kalau mama ngomel suruh bobok siang terus-terusan, telinga dedek rasanya bosen banget dan berasa kayak ada tebal kapalannya!',
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
    arti: 'Pengen banget-bangetan sumpaah!',
    penjelasan: 'Kalo dedek liat mainan baru yang kerennn banget, rasanya pengen banget punya, sampe kayak ada tangan mau keluar dari mulut dedek buat nyomot mainannya!',
    contoh1: 'のどから手が出るほどほしい。\n(Saya benar-benar sangat menginginkan barang itu lebih dari apapun.)',
    contoh2: 'あの限定モデルの時計が、のどから手が出るほど欲しい。\n(Saya sangat mengidam-idamkan jam tangan edisi terbatas itu sampai rasanya tangan ini ingin keluar dari tenggorokan untuk mengambilnya.)'
  }
];

window.vocabData.push(...kosakata_m8h5);