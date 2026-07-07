// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m3h4 = [
  // --- BAHAGIAN 1: 時を表す言葉 (kata keterangan Waktu) ---
  {
    id: 'm3h4_1',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '先に',
    furigana: 'さきに',
    arti: 'Terlebih dahulu / Sebelum ini',
    penjelasan: 'Merujuk kepada masa yang telah berlalu, atau tindakan yang dilakukan mendahului orang lain mahupun perkara lain. Boleh digunakan untuk pergerakan mahupun percakapan.',
    contoh1: '先に述べたように……\n(Seperti yang telah saya nyatakan terlebih dahulu...)',
    contoh2: 'お先に失礼します。\n(Saya minta diri untuk pulang/pergi terlebih dahulu.)'
  },
  {
    id: 'm3h4_2',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'じきに',
    furigana: 'じきに',
    arti: 'Tidak lama lagi / Sebentar lagi',
    penjelasan: 'Menunjukkan bahawa sesuatu perkara, kejadian, atau masa akan tiba dalam tempoh yang sangat terdekat (sangat singkat). Bersinonim dengan "sugu ni" atau "mamonaku".',
    contoh1: 'にわか雨だからじきにやむよ。\n(Ia sekadar hujan panas, jadi ia akan berhenti tidak lama lagi.)',
    contoh2: 'じきに春が来る。\n(Musim bunga akan tiba tidak lama lagi.)'
  },
  {
    id: 'm3h4_3',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'さなか',
    furigana: 'さなか',
    arti: 'Di tengah-tengah (kejadian) / Kemuncak',
    penjelasan: 'Menunjukkan tepat pada detik di mana suatu keadaan, fasa, musim, atau aktiviti itu sedang memuncak hebat atau sangat rancak berlangsung.',
    contoh1: '暑いさなかに外出する。\n(Keluar berjalan di tengah-tengah keadaan cuaca yang sedang panas terik.)',
    contoh2: '会議のさなかに電話が鳴った。\n(Telefon berbunyi pada kemuncak / di tengah-tengah mesyuarat yang sedang berlangsung.)'
  },
  {
    id: 'm3h4_4',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'とっさに',
    furigana: 'とっさに',
    arti: 'Secara refleks / Serta-merta',
    penjelasan: 'Satu tindakan pantas yang terhasil dalam sekelip mata (secara automatik) tanpa sempat berfikir panjang, biasanya sebagai reaksi kepada insiden mengejut atau kecemasan.',
    contoh1: 'とっさにブレーキを踏んだ。\n(Saya menekan brek secara refleks / serta-merta tanpa berfikir panjang.)',
    contoh2: '転びそうになって、とっさに手をついた。\n(Hampir terjatuh, dan saya menahan badan dengan tangan secara refleks.)'
  },
  {
    id: 'm3h4_5',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '不意に',
    furigana: 'ふいに',
    arti: 'Tiba-tiba / Tanpa diduga',
    penjelasan: 'Berlaku secara mendadak di mana ia sama sekali tidak dijangka, tiada persediaan, tiada amaran, atau tiada perancangan awal. Kejadian yang tidak terlintas langsung dalam fikiran.',
    contoh1: '不意に訪問される。\n(Diziarahi orang secara tiba-tiba tanpa sebarang notis/diduga.)',
    contoh2: '不意に後ろから声をかけられた。\n(Seseorang menegur saya dari arah belakang secara mengejut.)'
  },
  {
    id: 'm3h4_6',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '今さら',
    furigana: 'いまさら',
    arti: 'Baru sekarang / Sudah terlambat',
    penjelasan: 'Satu keluhan emosi untuk menyatakan bahawa perkara itu sudah terlampau lewat untuk disesali, ditarik balik, diubah, mahupun dilakukan buat masa ini kerana masanya telah berlepas pergi.',
    contoh1: '今さらできないと言われても困る。\n(Saya susah hati jika awak baru sekarang nak maklumkan bahawa awak tak boleh melakukannya.)',
    contoh2: '今さら言うまでもないが…\n(Walaupun sudah terlambat rasanya nak diperkatakan baru sekarang, tetapi...)'
  },
  {
    id: 'm3h4_7',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '今に',
    furigana: 'いまに',
    arti: 'Suatu hari nanti / Kelak',
    penjelasan: 'Perkataan yang bersifat ramalan. Ia menandakan jika satu keadaan berterusan begitu, lambat laun (suatu masa kelak) keputusannya pasti akan menimpa diri (biasanya bernada ancaman atau negatif).',
    contoh1: 'そんなことをしていると、今に後悔しますよ。\n(Jika awak asyik terus berbuat begitu, kelak suatu hari nanti awak pasti akan menyesal.)',
    contoh2: '今に見ていろ。\n(Tunggu dan lihatlah nanti (apa akibatnya).)'
  },
  {
    id: 'm3h4_8',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '今にも',
    furigana: 'いまにも',
    arti: 'Bila-bila masa sahaja (hampir terjadi)',
    penjelasan: 'Sentiasa digandingkan dengan corak tatabahasa ～そうだ (~sou da / kelihatan seperti). Ia menghuraikan detik yang seolah-olah sesuatu itu sudah berada di ambang kejadian (tinggal saat sahaja untuk ia berlaku).',
    contoh1: '今にも雨が降りそうだ。\n(Kelihatan seakan-akan hujan akan turun pada bila-bila masa sahaja dari sekarang.)',
    contoh2: '彼女は今にも泣き出しそうだった。\n(Dia kelihatan hampir menangis teresak-esak pada bila-bila masa sahaja.)'
  },
  {
    id: 'm3h4_9',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '未だに',
    furigana: 'いまだに',
    arti: 'Masih lagi (sehingga ke hari ini)',
    penjelasan: 'Luahan perasaan yang mengandungi elemen kehairanan, geram, atau terkejut kerana tempoh masa yang sewajarnya berlalu sudah panjang, namun keadaan tetap tidak berubah-ubah dari dulu sehinggalah saat ini.',
    contoh1: '未だにその事件は解決していない。\n(Insiden tersebut masih lagi belum dapat diselesaikan meskipun sudah lama berlalu sehingga hari ini.)',
    contoh2: '昔の恋人を未だに忘れられない。\n(Saya masih lagi belum berupaya melupakan bekas kekasih saya dulu.)'
  },
  {
    id: 'm3h4_10',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'いざ',
    furigana: 'いざ',
    arti: 'Sewaktu kecemasan / Apabila tiba detiknya',
    penjelasan: 'Merujuk kepada saat genting, detik penentuan (moment of truth), atau waktu kritikal yang mendesak berlakunya suatu tindakan sebenar atau perlunya persediaan.',
    contoh1: 'いざとなれば、私も働きます。\n(Apabila tiba saat yang begitu mendesak/genting nanti, saya juga akan mula bekerja.)',
    contoh2: 'いざという時に備える。\n(Sediakan payung sebelum hujan / buat persediaan untuk menghadapi sebarang kemungkinan kecemasan.)'
  },
  {
    id: 'm3h4_11',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'あらかじめ',
    furigana: 'あらかじめ',
    arti: 'Lebih awal / Terlebih dahulu',
    penjelasan: 'Perbuatan menyelesaikan persiapan, rancangan, pesanan, atau makluman awal-awal lagi sebelum tarikh atau masa sesuatu acara itu tiba. Ia membawa maksud yang sama dengan 前もって (maemotte) cuma lebih formal.',
    contoh1: '欠席の場合は、あらかじめご連絡ください。\n(Sekiranya tidak dapat menghadirkan diri, harap maklumkan kepada kami dari awal-awal lagi.)',
    contoh2: 'あらかじめ資料を読んでおく。\n(Membaca bahan rujukan terlebih dahulu sebagai persediaan awal.)'
  },
  {
    id: 'm3h4_12',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'かねて',
    furigana: 'かねて',
    arti: 'Sejak dari dahulu lagi / Telah lama',
    penjelasan: 'Digunakan untuk menceritakan perihal perancangan, hasrat, atau pengetahuan yang secara hakikatnya telah pun wujud sejak suatu tempoh yang panjang (sebelum waktu kini). Agak formal pengunaannya.',
    contoh1: 'かねて計画していた旅行をする。\n(Memulakan pelancongan yang telah dirancang sejak dari dahulu lagi.)',
    contoh2: 'お名前はかねてから伺っております。\n(Nama tuan/puan memang telah lama kami dengar/tahu.)'
  },
  {
    id: 'm3h4_13',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'かつて',
    furigana: 'かつて',
    arti: 'Pernah suatu ketika dahulu / (Belum) pernah',
    penjelasan: 'Mempunyai dua aspek: 1) Sesuatu keadaan atau kegemilangan yang wujud pada masa silam (tapi kini tidak lagi). 2) Apabila dicantum bersama kata nafi, ia bermaksud "tidak/belum pernah langsung berlaku sebelum ini".',
    contoh1: 'かつて住んでいた場所。\n(Lokasi yang mana saya pernah menetap suatu ketika dahulu.)',
    contoh2: 'かつてないにぎわい。\n(Kemeriahan yang belum pernah dirasai / terjadi walau sekali pun sebelum ini.)'
  },

  // --- BAHAGIAN 2: 頻度を表す言葉 (kata keterangan) ---
  {
    id: 'm3h4_14',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'しょっちゅう',
    furigana: 'しょっちゅう',
    arti: 'Kerap kali / Selalu sangat',
    penjelasan: 'Banyak digunakan dalam perbualan harian kasual berbanding tulisan rasmi. Menggambarkan tindakan yang berlaku berulang-ulang kali pada kekerapan yang terlampau tinggi sehingga menjadi resam (selalu).',
    contoh1: '彼はしょっちゅう酒を飲む。\n(Dia selalu sangat minum minuman beralhohol.)',
    contoh2: 'しょっちゅう忘れ物をする。\n(Kerap kali / selalu sangat tertinggal barang.)'
  },
  {
    id: 'm3h4_15',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '絶えず',
    furigana: 'たえず',
    arti: 'Sentiasa berterusan / Tanpa henti',
    penjelasan: 'Kekal berlangsung secara berterusan (24 jam) dalam satu aliran masa yang berpanjangan tanpa sebarang wujudnya titik pemberhentian (jeda).',
    contoh1: '絶えず水が流れている。\n(Air terus-menerus mengalir tanpa henti.)',
    contoh2: '彼女は絶えず努力している。\n(Dia sentiasa gigih berusaha tanpa wujud istilah berhenti berehat.)'
  },
  {
    id: 'm3h4_16',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '再三',
    furigana: 'さいさん',
    arti: 'Berkali-kali / Berulang-ulang kali',
    penjelasan: 'Biasa digunakan untuk aktiviti melibatkan penuturan (seperti menasihati, memberi amaran, memohon). Menerangkan hakikat bahawa teguran itu bukan sekali, tapi sudah berkali-kali diulang.',
    contoh1: '再三、注意する。\n(Memberikan amaran/teguran secara berkali-kali.)',
    contoh2: '再三のお願いにもかかわらず、断られた。\n(Walaupun saya merayu memohon berulang-ulang kali, saya tetap ditolak.)'
  },
  {
    id: 'm3h4_17',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '片時も',
    furigana: 'かたときも',
    arti: 'Walau sesaat pun (tidak)',
    penjelasan: 'Dalam tatabahasa Jepun, ia sentiasa berpasangan dengan imbuhan kata negatif (～ない). Ia adalah analogi menekankan "walaupun dalam jangka masa sekecip mata sekalipun, kejadian itu tidak berlaku".',
    contoh1: '子どもから片時も目が離せない。\n(Mata ini langsung tidak boleh dialihkan daripada mengawasi kanak-kanak itu walau sesaat pun.)',
    contoh2: 'あなたのことを片時も忘れたことはない。\n(Saya tidak pernah sama sekali melupakan hal awak waima sedetik pun.)'
  },
  {
    id: 'm3h4_18',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '四六時中',
    furigana: 'しろくじちゅう',
    arti: 'Sepanjang hari (24 jam) / Siang malam',
    penjelasan: 'Perkataan kiasan yang terbentuk daripada sifir 4 didarab 6 (menjadi 24 jam). Digunakan untuk perbuatan yang berlarutan dan berterusan sepanjang waktu siang mahupun malam tanpa henti.',
    contoh1: '彼は四六時中、食べている。\n(Lelaki itu asyik makan sahaja sepanjang hari siang dan malam (24 jam).)',
    contoh2: '四六時中スマホを見ている。\n(Mata asyik tertumpu merenung telefon pintar sepanjang masa tiada henti.)'
  },
  {
    id: 'm3h4_19',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '時折',
    furigana: 'ときおり',
    arti: 'Kadang-kala / Sesekali',
    penjelasan: 'Merujuk kepada kekerapan (frekuensi) yang ada sela masa (tidak selalu tapi tetap ada). Ia membawa maksud yang serupa dengan 時々 (tokidoki) tetapi nadanya lebih bernuansa penulisan / sastera formal.',
    contoh1: '時折、鳥の鳴き声がする。\n(Kadang-kala, ada kedengaran bunyi kicauan burung di situ.)',
    contoh2: '故郷を時折思い出す。\n(Sesekali ingatan saya melayang terkenangkan kampung halaman.)'
  },

  // --- BAHAGIAN 3: 否定語が後に来る言葉 (Diikuti Kata Negatif) ---
  {
    id: 'm3h4_20',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '到底～ない',
    furigana: 'とうてい～ない',
    arti: 'Mustahil sama sekali / Tidak mungkin dapat',
    penjelasan: 'Digandingkan kuat dengan keupayaan berbuat sesuatu (bentuk keupayaan/potensi). Digunakan untuk mengakui hakikat bahawa setinggi mana pun daya usaha dicuba, ia memang tidak dapat (mustahil) dicapai.',
    contoh1: '到底間に合わない。\n(Memang tidak mungkin dapat / mustahil sama sekali untuk tiba tepat pada waktunya.)',
    contoh2: 'その条件は到底受け入れられない。\n(Syarat tersebut langsung mustahil / tiada daya untuk diterima oleh pihak kami.)'
  },
  {
    id: 'm3h4_21',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '一向に～ない',
    furigana: 'いっこうに～ない',
    arti: 'Langsung tidak menampakkan (kemajuan/perubahan)',
    penjelasan: 'Menyatakan rasa hampa bahawa walaupun penantian sudah lama atau pelbagai inisiatif diusahakan, sesuatu isu tersebut tidak berganjak (darjat 0%) malah kekal tiada sedikit pun tanda-tanda pemulihan/penyelesaian.',
    contoh1: '話が一向に進まない。\n(Perbincangan mesyuarat itu langsung tidak berganjak / menampakkan sebarang hasil kemajuan.)',
    contoh2: '彼は一向に気にしない。\n(Dia langsung tidak mempedulikan walau sekelumit pun / langsung tak heran.)'
  },
  {
    id: 'm3h4_22',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: '一切～ない',
    furigana: 'いっさい～ない',
    arti: 'Sama sekali tidak ada / Tiada kaitan langsung',
    penjelasan: 'Menafikan secara keras dan total (100% penolakan). Membawa indikasi bahawa tiada sebarang pengecualian, kompromi, sentuhan, mahupun penglibatan yang dibenarkan.',
    contoh1: '私はその事件とは一切関係ない。\n(Saya sama sekali tiada kaitan langsung 100% dengan insiden/kes tersebut.)',
    contoh2: '肉は一切食べない。\n(Sama sekali tidak memakan sebarang daging (semua jenis daging ditolak).)'
  },
  {
    id: 'm3h4_23',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'さっぱり～ない',
    furigana: 'さっぱり～ない',
    arti: 'Langsung tidak (faham/berhasil)',
    penjelasan: 'Sering diguna pakai dalam hal pemahaman atau jangkaan kelakuan yang terbantut. Sesuatu perkara berada di luar kefahaman sehingga si penutur "zero" (sepenuhnya buntu dan tidak mengerti apa-apa langsung).',
    contoh1: '講義がさっぱりわからない。\n(Saya langsung tidak memahami walau sepatah pun mengenai isi kandungan kuliah ini.)',
    contoh2: '今日はさっぱり魚が釣れなかった。\n(Hari ini sangat hampa langsung tidak berjaya mendapat seekor ikan tangkapan pun.)'
  },
  {
    id: 'm3h4_24',
    minggu: '3',
    hari: '4',
    kategori: 'kata keterangan',
    kanji: 'さほど～ない',
    furigana: 'さほど～ない',
    arti: 'Tidaklah sebegitu / Tidak berapa',
    penjelasan: 'Bentuk formal bagi それほど～ない (sorehodo~nai). Menerangkan tahap / darjat ciri (kepanasan, kesusahan, kecantikan) yang tidaklah seteruk atau sehebat yang pada awalnya digembar-gemburkan (sekadar biasa-biasa).',
    contoh1: '今日はさほど（＝それほど）寒くない。\n(Hari ini suhu sejuknya tidaklah sebegitu melampau berbanding biasa.)',
    contoh2: 'その映画はさほど面白くなかった。\n(Kehebatan filem itu tidaklah seberapa seronok berbanding jangkaan saya pada awalnya.)'
  }
];

window.vocabData.push(...kosakata_m3h4);