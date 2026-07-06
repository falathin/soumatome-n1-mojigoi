// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m1h4 = [
  // ==========================================
  // Bagian 1: <人>を... (Objek orang menggunakan partikel を)
  // ==========================================
  {
    id: 'm1h4_1',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'なだめる',
    furigana: 'なだめる',
    arti: 'Menenangkan / Membujuk',
    penjelasan: 'Digunakan saat menenangkan orang yang sedang marah, menangis, atau bersedih agar perasaannya kembali tenang.',
    contoh1: '泣いている妹をなだめる。\n(Menenangkan adik perempuan yang sedang menangis.)',
    contoh2: '怒っている客をなだめた。\n(Telah menenangkan pelanggan yang sedang marah.)'
  },
  {
    id: 'm1h4_2',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'いたわる',
    furigana: 'いたわる',
    arti: 'Bersikap baik / Merawat / Menyayangi',
    penjelasan: 'Bersikap penuh perhatian, ramah, dan merawat seseorang (terutama kepada orang yang lebih tua, sakit, atau lemah).',
    contoh1: 'お年寄りをいたわる。\n(Bersikap baik/perhatian kepada lansia.)',
    contoh2: '部下をいたわる優しい上司。\n(Atasan yang baik dan mengayomi bawahannya.)'
  },
  {
    id: 'm1h4_3',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'しつける',
    furigana: 'しつける',
    arti: 'Mendidik / Mendisiplinkan',
    penjelasan: 'Mengajarkan tata krama, sopan santun, atau kebiasaan baik kepada anak-anak atau hewan peliharaan.',
    contoh1: '子供を厳しくしつける。\n(Mendidik anak dengan tegas/disiplin.)',
    contoh2: '犬をきちんとしつける。\n(Melatih/mendisiplinkan anjing dengan benar.)'
  },
  {
    id: 'm1h4_4',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'ちやほやする',
    furigana: 'ちやほやする',
    arti: 'Memanjakan / Menyanjung-nyanjung',
    penjelasan: 'Memperlakukan seseorang dengan terlalu spesial, terus-menerus memujinya atau memanjakannya sehingga terkadang membuatnya manja.',
    contoh1: '彼は親にちやほやされて育った。\n(Dia dibesarkan dengan dimanja oleh orang tuanya.)',
    contoh2: '若い女性をちやほやする。\n(Menyanjung-nyanjung wanita muda.)'
  },
  {
    id: 'm1h4_5',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'おだてる',
    furigana: 'おだてる',
    arti: 'Menyanjung / Mengangkat-angkat (Flatter)',
    penjelasan: 'Memuji atau mengangkat seseorang dengan tujuan tertentu (agar orang tersebut senang dan mau melakukan sesuatu).',
    contoh1: '彼をおだてて、仕事をやらせる。\n(Menyanjungnya agar dia mau mengerjakan pekerjaan itu.)',
    contoh2: '豚はおだてると木に登る。\n(Peribahasa: Babi pun kalau dipuji akan memanjat pohon / Siapapun akan senang bila dipuji.)'
  },
  {
    id: 'm1h4_6',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'あざ笑う',
    furigana: 'あざわらう',
    arti: 'Menertawakan / Mengejek',
    penjelasan: 'Menertawakan kegagalan atau kebodohan orang lain dengan nada merendahkan.',
    contoh1: '失敗した人をあざ笑う。\n(Menertawakan orang yang gagal.)',
    contoh2: '彼はいつも人をあざ笑うような態度をとる。\n(Dia selalu bersikap seolah mengejek orang lain.)'
  },
  {
    id: 'm1h4_7',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'あざむく',
    furigana: 'あざむく',
    arti: 'Menipu / Memperdaya',
    penjelasan: 'Membohongi orang lain dengan kata-kata atau tindakan palsu demi keuntungan sendiri.',
    contoh1: '敵をあざむく。\n(Memperdaya musuh.)',
    contoh2: '消費者をあざむく行為は許されない。\n(Tindakan menipu konsumen tidak bisa dimaafkan.)'
  },
  {
    id: 'm1h4_8',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'ねたむ',
    furigana: 'ねたむ',
    arti: 'Iri hati / Dengki',
    penjelasan: 'Merasa cemburu atau tidak suka melihat kesuksesan atau kebahagiaan orang lain.',
    contoh1: '他人の成功をねたむ。\n(Iri hati pada kesuksesan orang lain.)',
    contoh2: '同僚の昇進をねたんでいる。\n(Dengki dengan promosi rekan kerjanya.)'
  },
  {
    id: 'm1h4_9',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'さらう / 誘拐する',
    furigana: 'さらう / ゆうかいする',
    arti: 'Menculik',
    penjelasan: 'Membawa kabur seseorang secara paksa. さらう sering digunakan dalam percakapan, sedangkan 誘拐する lebih formal/berita.',
    contoh1: '子供がさらわれた。\n(Seorang anak telah diculik.)',
    contoh2: '身代金目的で人を誘拐する。\n(Menculik orang untuk tujuan meminta tebusan.)'
  },
  {
    id: 'm1h4_10',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '殴る',
    furigana: 'なぐる',
    arti: 'Memukul / Meninju',
    penjelasan: 'Memukul seseorang menggunakan tangan (tinju).',
    contoh1: '友達の顔を殴る。\n(Meninju wajah teman.)',
    contoh2: '彼に強く殴られた。\n(Saya dipukul dengan keras olehnya.)'
  },
  {
    id: 'm1h4_11',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '裁く',
    furigana: 'さばく',
    arti: 'Mengadili / Menghakimi',
    penjelasan: 'Memberikan keputusan yang adil mengenai benar atau salah (biasanya di pengadilan).',
    contoh1: '裁判官が罪人を裁く。\n(Hakim mengadili orang yang bersalah/berdosa.)',
    contoh2: '法に従って裁かれる。\n(Diadili menurut hukum.)'
  },
  {
    id: 'm1h4_12',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'かばう',
    furigana: 'かばう',
    arti: 'Melindungi / Membela',
    penjelasan: 'Melindungi seseorang agar tidak terkena bahaya, hukuman, atau kritikan.',
    contoh1: 'いじめられている子をかばう。\n(Membela anak yang sedang ditindas/di-bully.)',
    contoh2: '親はいつも子供の失敗をかばう。\n(Orang tua selalu menutupi/melindungi kesalahan anak.)'
  },
  {
    id: 'm1h4_13',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '励ます',
    furigana: 'はげます',
    arti: 'Memberi semangat / Mendorong',
    penjelasan: 'Memberikan kata-kata positif kepada seseorang yang sedang sedih atau berusaha agar dia bersemangat lagi.',
    contoh1: '落ち込んでいる友人を励ます。\n(Memberi semangat teman yang sedang terpuruk/sedih.)',
    contoh2: '先生に励まされて、頑張った。\n(Telah berjuang karena didorong/disemangati oleh guru.)'
  },
  {
    id: 'm1h4_14',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'もてなす',
    furigana: 'もてなす',
    arti: 'Menjamu / Melayani tamu',
    penjelasan: 'Menyambut dan melayani tamu dengan sepenuh hati (memberikan makanan, kenyamanan, dll).',
    contoh1: 'お客様を豪華な料理でもてなす。\n(Menjamu tamu dengan hidangan mewah.)',
    contoh2: '温かくもてなしてくれてありがとう。\n(Terima kasih sudah melayaniku dengan hangat.)'
  },
  {
    id: 'm1h4_15',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '冷やかす',
    furigana: 'ひやかす',
    arti: 'Menggoda / Mengolok-olok (Bercanda)',
    penjelasan: 'Mengejek atau menggoda teman (misal soal pacar atau baju baru) dengan niat bercanda.',
    contoh1: '新婚の友人を冷やかす。\n(Menggoda teman yang baru menikah.)',
    contoh2: '彼と歩いているところを冷やかされた。\n(Saya digoda saat ketahuan sedang berjalan dengannya.)'
  },
  {
    id: 'm1h4_16',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'おどす',
    furigana: 'おどす',
    arti: 'Mengancam / Menakut-nakuti',
    penjelasan: 'Membuat orang lain merasa takut dengan mengatakan hal yang buruk jika tidak dituruti.',
    contoh1: 'ナイフでおどしてお金を奪う。\n(Merampas uang dengan mengancam pakai pisau.)',
    contoh2: '彼におどされている。\n(Saya sedang diancam olehnya.)'
  },
  {
    id: 'm1h4_17',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'けなす',
    furigana: 'けなす',
    arti: 'Mencela / Menjelek-jelekkan',
    penjelasan: 'Mengkritik dengan keras dan mengatakan hal-hal buruk tentang kemampuan atau karya orang lain.',
    contoh1: '人の作品をけなす。\n(Mencela karya orang lain.)',
    contoh2: 'けなされて自信をなくした。\n(Kehilangan rasa percaya diri karena dijelek-jelekkan.)'
  },
  {
    id: 'm1h4_18',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'ののしる',
    furigana: 'ののしる',
    arti: 'Memaki / Mengumpat',
    penjelasan: 'Marah dengan menggunakan kata-kata kasar atau kotor.',
    contoh1: 'ひどい言葉で相手をののしる。\n(Memaki lawan dengan kata-kata yang kasar.)',
    contoh2: '大声でののしり合う。\n(Saling memaki dengan suara keras.)'
  },
  {
    id: 'm1h4_19',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'なじる',
    furigana: 'なじる',
    arti: 'Menegur keras / Mencerca',
    penjelasan: 'Menyalahkan atau menanyakan kesalahan orang lain dengan nada tajam dan menyudutkan.',
    contoh1: '約束を破った友人をなじる。\n(Menegur keras teman yang mengingkari janji.)',
    contoh2: '失敗をなじられて泣いてしまった。\n(Menangis karena dicerca akibat kegagalan.)'
  },
  {
    id: 'm1h4_20',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'とがめる',
    furigana: 'とがめる',
    arti: 'Menyalahkan / Menegur kesalahan',
    penjelasan: 'Menyoroti kesalahan seseorang atau merasa bersalah dalam hati (気がとがめる).',
    contoh1: '人の過ちをとがめる。\n(Menyalahkan kesalahan orang lain.)',
    contoh2: '嘘をついたので気がとがめる。\n(Perasaanku tidak enak/merasa bersalah karena berbohong.)'
  },
  {
    id: 'm1h4_21',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'やっつける',
    furigana: 'やっつける',
    arti: 'Mengalahkan / Menghabisi',
    penjelasan: 'Mengalahkan musuh dengan telak atau menyelesaikan pekerjaan dengan cepat.',
    contoh1: '試合で敵をやっつける。\n(Mengalahkan musuh telak di pertandingan.)',
    contoh2: 'この仕事を早くやっつけよう。\n(Ayo kita bereskan/selesaikan pekerjaan ini secepatnya.)'
  },

  // ==========================================
  // Bagian 2: <人>に... (Objek orang menggunakan partikel に) & Frasa lainnya
  // ==========================================
  {
    id: 'm1h4_22',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '恋する',
    furigana: 'こいする',
    arti: 'Jatuh cinta',
    penjelasan: 'Memiliki perasaan romantis kepada seseorang.',
    contoh1: '彼に恋する。\n(Jatuh cinta padanya.)',
    contoh2: '初めて恋をした。\n(Jatuh cinta untuk pertama kalinya.)'
  },
  {
    id: 'm1h4_23',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '片思い（を）する',
    furigana: 'かたおもい（を）する',
    arti: 'Cinta bertepuk sebelah tangan',
    penjelasan: 'Menyukai seseorang tetapi orang tersebut tidak membalas perasaannya.',
    contoh1: 'ずっと彼に片思いをしている。\n(Sudah lama saya menyukainya secara sepihak.)',
    contoh2: '片思いはつらい。\n(Cinta bertepuk sebelah tangan itu menyakitkan.)'
  },
  {
    id: 'm1h4_24',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '尽くす',
    furigana: 'つくす',
    arti: 'Mengabdi / Melakukan yang terbaik',
    penjelasan: 'Berusaha keras dan mengorbankan diri demi orang lain (pasangan, keluarga, bos).',
    contoh1: '夫に尽くす妻。\n(Istri yang mengabdi pada suaminya.)',
    contoh2: '全力を尽くす。\n(Melakukan yang terbaik / Mengerahkan seluruh tenaga.)'
  },
  {
    id: 'm1h4_25',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '食事をおごる',
    furigana: 'しょくじをおごる',
    arti: 'Mentraktir makan',
    penjelasan: 'Membayarkan tagihan makanan untuk orang lain.',
    contoh1: '後輩に食事をおごる。\n(Mentraktir makan junior.)',
    contoh2: '今日は僕がおごります。\n(Hari ini aku yang traktir.)'
  },
  {
    id: 'm1h4_26',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'お小遣いをねだる',
    furigana: 'おこづかいをねだる',
    arti: 'Merengek meminta uang jajan',
    penjelasan: 'Meminta sesuatu dengan cara merengek atau membujuk (biasanya anak ke orang tua).',
    contoh1: '親にお小遣いをねだる。\n(Merengek minta uang jajan ke orang tua.)',
    contoh2: 'おもちゃをねだられて困った。\n(Saya repot karena dia merengek minta mainan.)'
  },
  {
    id: 'm1h4_27',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '寄付を強いる',
    furigana: 'きふをしいる',
    arti: 'Memaksa untuk berdonasi',
    penjelasan: 'Memaksa orang lain melakukan sesuatu yang sebenarnya tidak ia inginkan (dalam hal ini, berdonasi).',
    contoh1: '人に寄付を強いるのはよくない。\n(Memaksa orang memberikan donasi itu tidak baik.)',
    contoh2: '無理な労働を強いられた。\n(Dipaksa melakukan kerja paksa/berat.)'
  },
  {
    id: 'm1h4_28',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '見せびらかす',
    furigana: 'みせびらかす',
    arti: 'Memamerkan',
    penjelasan: 'Menunjukkan barang berharga atau barang baru kepada orang lain agar mereka iri.',
    contoh1: '新しいバッグを友達に見せびらかす。\n(Memamerkan tas baru ke teman-teman.)',
    contoh2: 'お金持ちであることを見せびらかす。\n(Memamerkan fakta bahwa dia orang kaya.)'
  },
  {
    id: 'm1h4_29',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'なつく',
    furigana: 'なつく',
    arti: 'Menjadi akrab / Jinak',
    penjelasan: 'Anak kecil atau hewan yang menyukai dan menempel/manja kepada seseorang.',
    contoh1: '犬が私にすっかりなついている。\n(Anjing itu sudah sangat jinak/lengket denganku.)',
    contoh2: '子供がすぐになついた。\n(Anak itu langsung akrab/nempel.)'
  },
  {
    id: 'm1h4_30',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '親しまれる',
    furigana: 'したしまれる',
    arti: 'Disukai / Diakrabi',
    penjelasan: 'Seseorang atau sesuatu yang sangat disukai dan populer di kalangan banyak orang.',
    contoh1: '彼らはみんなに親しまれている。\n(Mereka disukai oleh semua orang.)',
    contoh2: '地元の人に親しまれる店。\n(Toko yang diakrabi/disukai oleh penduduk lokal.)'
  },
  {
    id: 'm1h4_31',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'もてる',
    furigana: 'もてる',
    arti: 'Populer (di kalangan lawan jenis)',
    penjelasan: 'Sangat disukai atau populer, biasanya merujuk pada daya tarik terhadap pria/wanita.',
    contoh1: '彼は女性にとてももてる。\n(Dia sangat populer di kalangan wanita.)',
    contoh2: '学生時代はもてなかった。\n(Saat masa sekolah, aku tidak populer.)'
  },
  {
    id: 'm1h4_32',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '出くわす',
    furigana: 'でくわす',
    arti: 'Kebetulan bertemu / Berpapasan',
    penjelasan: 'Bertemu dengan seseorang secara tidak sengaja (sama artinya dengan たまたま出会う).',
    contoh1: '街で偶然昔の友人と出くわした。\n(Tanpa sengaja berpapasan dengan teman lama di kota.)',
    contoh2: '先生に出くわして驚いた。\n(Terkejut karena kebetulan bertemu guru.)'
  },
  {
    id: 'm1h4_33',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '言いつける',
    furigana: 'いいつける',
    arti: 'Mengadukan / Memerintahkan',
    penjelasan: 'Bisa berarti melaporkan keburukan orang lain (kepada guru/orang tua) atau memerintahkan sesuatu.',
    contoh1: '兄の悪さを親に言いつける。\n(Mengadukan kenakalan kakak laki-laki ke orang tua.)',
    contoh2: '先生に言いつけられた仕事。\n(Pekerjaan yang diperintahkan oleh guru.)'
  },
  {
    id: 'm1h4_34',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '告げ口（を）する',
    furigana: 'つげぐち（を）する',
    arti: 'Mengadu / Membocorkan (hal buruk)',
    penjelasan: 'Memberitahukan kesalahan atau rahasia orang lain secara sembunyi-sembunyi.',
    contoh1: '先生に告げ口をする。\n(Mengadu kepada guru.)',
    contoh2: '告げ口されて怒られた。\n(Saya dimarahi karena ada yang mengadu.)'
  },
  {
    id: 'm1h4_35',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '嫌がらせ（を）する',
    furigana: 'いやがらせ（を）する',
    arti: 'Melakukan hal yang tidak menyenangkan / Mengganggu',
    penjelasan: 'Sengaja melakukan perbuatan yang membuat orang lain merasa tidak nyaman atau marah.',
    contoh1: '近所の人に嫌がらせをする。\n(Melakukan tindakan tidak menyenangkan pada tetangga.)',
    contoh2: '嫌がらせの電話がかかってきた。\n(Mendapat panggilan telepon yang mengganggu/meneror.)'
  },
  {
    id: 'm1h4_36',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '秘密をばらす',
    furigana: 'ひみつをばらす',
    arti: 'Membocorkan rahasia',
    penjelasan: 'Menceritakan rahasia seseorang kepada orang lain.',
    contoh1: '友達の秘密をばらす。\n(Membocorkan rahasia teman.)',
    contoh2: '彼にばらされてしまった。\n(Telah dibocorkan olehnya.)'
  },

  // ==========================================
  // Bagian 3: もっとおぼえましょう (Mari ingat lebih banyak)
  // ==========================================
  {
    id: 'm1h4_37',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'もめる',
    furigana: 'もめる',
    arti: 'Berselisih / Cekcok',
    penjelasan: 'Terjadi pertengkaran atau ketidaksepakatan masalah dengan orang lain.',
    contoh1: '近所の人ともめる。\n(Berselisih dengan tetangga.)',
    contoh2: '遺産問題でもめている。\n(Sedang cekcok masalah warisan.)'
  },
  {
    id: 'm1h4_38',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '養う',
    furigana: 'やしなう',
    arti: 'Menafkahi / Memelihara',
    penjelasan: 'Memberikan makan dan memenuhi kebutuhan hidup anggota keluarga.',
    contoh1: '家族を養うために一生懸命働く。\n(Bekerja keras demi menafkahi keluarga.)',
    contoh2: '親に養ってもらっている。\n(Masih ditanggung/dinafkahi oleh orang tua.)'
  },
  {
    id: 'm1h4_39',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '名付ける',
    furigana: 'なづける',
    arti: 'Memberi nama',
    penjelasan: 'Memberikan nama kepada anak, hewan peliharaan, atau barang. (名付け親 = orang tua baptis / yang memberikan nama).',
    contoh1: '赤ちゃんを「太郎」と名付けた。\n(Memberi nama bayi itu "Taro".)',
    contoh2: '彼は私を名付け親だ。\n(Dia adalah orang yang memberiku nama.)'
  },
  {
    id: 'm1h4_40',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '人見知りする',
    furigana: 'ひとみしりする',
    arti: 'Malu kepada orang asing',
    penjelasan: 'Sifat (biasanya pada bayi/anak kecil atau orang introvert) yang merasa takut atau malu saat bertemu orang yang tidak dikenal.',
    contoh1: 'この子は人見知りする。\n(Anak ini takut/malu pada orang asing.)',
    contoh2: '人見知りが激しい。\n(Rasa takut pada orang asingnya sangat parah.)'
  },
  {
    id: 'm1h4_41',
    minggu: '1',
    hari: '4',
    kategori: 'kata sifat', // Walau berupa frase kerja, sifat dasarnya 'humble'
    kanji: 'へりくだった態度',
    furigana: 'へりくだったたいど',
    arti: 'Sikap rendah hati',
    penjelasan: 'Sikap merendahkan diri sendiri untuk menghormati lawan bicara (biasanya dalam urusan bisnis/sopan santun).',
    contoh1: 'へりくだった態度で接する。\n(Melayani/berinteraksi dengan sikap rendah hati.)',
    contoh2: '彼はいつもへりくだっている。\n(Dia selalu bersikap rendah hati.)'
  },
  {
    id: 'm1h4_42',
    minggu: '1',
    hari: '4',
    kategori: 'kata kerja',
    kanji: 'こじれる',
    furigana: 'こじれる',
    arti: 'Menjadi rumit / Memburuk',
    penjelasan: 'Suatu hubungan atau masalah yang awalnya sederhana menjadi sulit diselesaikan atau memburuk. (風邪をこじらせる = memperparah flu).',
    contoh1: '二人の関係がこじれる。\n(Hubungan keduanya menjadi memburuk/rumit.)',
    contoh2: '話がこじれてしまった。\n(Pembicaraan/masalahnya terlanjur menjadi rumit.)'
  }
];

// Menambahkan kosakata dari file ini ke data master
window.vocabData.push(...kosakata_m1h4);