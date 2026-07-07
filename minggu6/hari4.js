// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m6h4 = [
  // ==========================================
  // KELOMPOK 1: 甘い (あまい) - Manis / Lembut / Naif / Longgar
  // ==========================================
  {
    id: 'm6h4_1',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'トマトが甘い',
    furigana: 'トマトがあまい',
    arti: 'Tomato yang manis',
    penjelasan: 'Perkataan 甘い (amai) di sini merujuk kepada makna yang paling asas dan harfiah, iaitu rasa manis pada makanan atau minuman. Ia menggambarkan kelazatan semulajadi seperti rasa gula atau buah-buahan yang sudah masak sepenuhnya.',
    contoh1: 'このトマトは甘くておいしい。\n(Tomato ini manis dan sedap.)',
    contoh2: '私は甘いお菓子が大好きです。\n(Saya sangat suka snek yang manis.)',
    contoh3: 'このケーキは甘すぎないから食べやすい。\n(Kek ini tidak terlalu manis, jadi ia sedap/mudah dimakan.)'
  },
  {
    id: 'm6h4_2',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'みそ汁が甘い',
    furigana: 'みそしるがあまい',
    arti: 'Sup miso yang kurang masin / tawar',
    penjelasan: 'Dalam konteks masakan tertentu (seperti sup atau hidangan berkuah), perkataan 甘い tidak bermaksud manis seperti gula, sebaliknya ia bermaksud rasa hidangan tersebut agak ringan atau tawar kerana kekurangan garam atau perasa (塩分が少ない).',
    contoh1: '今朝のみそ汁はちょっと甘い。\n(Sup miso pagi ini rasanya agak tawar / kurang masin.)',
    contoh2: '味が甘いので、少し塩を足してください。\n(Oleh kerana rasanya kurang masin, tolong tambahkan sedikit garam.)',
    contoh3: 'このスープは私には少し甘すぎる。\n(Sup ini terasa terlalu tawar/kurang perasa bagi saya.)'
  },
  {
    id: 'm6h4_3',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '甘い声でささやく',
    furigana: 'あまいこえでささやく',
    arti: 'Membisik dengan suara yang lembut / manis',
    penjelasan: 'Di sini, perkataan 甘い digunakan secara kiasan untuk menggambarkan suara yang sangat lembut, memikat hati, mesra, dan menyenangkan untuk didengar (優しく快い). Biasanya digunakan dalam konteks romantik atau pujukan.',
    contoh1: '彼は彼女に甘い声でささやいた。\n(Dia membisik di telinga wanita itu dengan suara yang lembut memikat.)',
    contoh2: '歌手の甘い声に魅了された。\n(Saya terpesona dengan suara penyanyi yang manis/lembut itu.)',
    contoh3: '甘い言葉に騙されないように気をつけて。\n(Berhati-hatilah agar tidak terpedaya dengan kata-kata manis.)'
  },
  {
    id: 'm6h4_4',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '子どもたちに甘い',
    furigana: 'こどもたちにあまい',
    arti: 'Terlalu berlembut / Memanjakan kanak-kanak',
    penjelasan: 'Apabila digunakan untuk menyifatkan sikap seseorang terhadap orang lain, 甘い bermaksud tidak tegas, terlalu berlembut, atau suka memanjakan (厳しくない). Ia selalunya membawa konotasi bahawa seseorang itu kurang disiplin dalam mendidik.',
    contoh1: '彼は子どもたちに甘い。\n(Dia terlalu berlembut / memanjakan anak-anaknya.)',
    contoh2: '先生はルールに関して少し甘いところがある。\n(Cikgu agak tidak tegas / berlembut mengenai peraturan.)',
    contoh3: '自分に甘く、他人に厳しい。\n(Berlembut pada diri sendiri, tetapi tegas terhadap orang lain.)'
  },
  {
    id: 'm6h4_5',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '考えが甘い',
    furigana: 'かんがえがあまい',
    arti: 'Pemikiran yang naif / Terlalu optimistik',
    penjelasan: 'Frasa ini bermaksud pemikiran atau perancangan seseorang itu terlalu mudah, naif, atau tidak mengambil kira kesukaran dan realiti sebenar sesuatu situasi (安易だ). Menunjukkan kurangnya kedalaman dalam berfikir.',
    contoh1: '君の考えは甘いよ。\n(Pemikiran awak terlalu naif / memandang mudah.)',
    contoh2: 'そんなに簡単に成功すると思うのは甘い。\n(Adalah naif untuk berfikir bahawa awak boleh berjaya dengan semudah itu.)',
    contoh3: '甘い考えを捨てて、現実を見なさい。\n(Buanglah pemikiran yang naif itu dan pandanglah pada realiti.)'
  },
  {
    id: 'm6h4_6',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '受験したのは甘かった',
    furigana: 'じゅけんしたのはあまかった',
    arti: 'Terlalu memandang mudah pada peperiksaan',
    penjelasan: 'Ini merujuk kepada sikap memandang rendah terhadap kesukaran sesuatu cabaran (seperti ujian atau peperiksaan) sehingga tidak membuat persediaan yang secukupnya. Ia bermakna tekaan seseorang tentang betapa mudahnya sesuatu itu ternyata salah.',
    contoh1: '準備なしで受験したのは甘かった。\n(Tindakan saya mengambil peperiksaan tanpa persediaan adalah satu kesilapan/terlalu memandang mudah.)',
    contoh2: '相手の強さを甘く見ていたのが敗因だ。\n(Punca kekalahan adalah kerana saya memandang remeh kekuatan pihak lawan.)',
    contoh3: 'こんなに難しいとは、私の認識が甘かった。\n(Saya terlalu memandang ringan sehingga tidak sangka ia sesukar ini.)'
  },
  {
    id: 'm6h4_7',
    minggu: '6',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '仕事を甘く見る',
    furigana: 'しごとをあまくみる',
    arti: 'Memandang remeh / Mengambil mudah terhadap kerja',
    penjelasan: 'Perkataan 甘い diubah menjadi kata keterangan (甘く) dan digabungkan dengan kata kerja 見る (melihat). Frasa ini bermakna seseorang itu tidak menganggap tugas atau kerja dengan serius, dan menganggapnya terlalu mudah.',
    contoh1: '新しい仕事を甘く（＝簡単に）見てはいけない。\n(Jangan sesekali memandang remeh pekerjaan baharu ini.)',
    contoh2: 'プロの世界を甘く見るな。\n(Jangan ambil mudah akan dunia profesional.)',
    contoh3: '彼はいつも状況を甘く見る癖がある。\n(Dia sentiasa mempunyai tabiat memandang enteng akan sesuatu situasi.)'
  },
  {
    id: 'm6h4_8',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '見通しが甘い',
    furigana: 'みとおしがあまい',
    arti: 'Jangkaan yang terlalu optimistik',
    penjelasan: '見通し bermaksud prospek, perancangan, atau ramalan tentang masa depan. Jika ia "甘い", ini bermaksud ramalan tersebut terlalu optimistik, tidak teliti, dan berkemungkinan besar akan gagal kerana tidak bersedia untuk senario terburuk.',
    contoh1: '計画の見通しが甘かったため、失敗した。\n(Oleh kerana jangkaan pelan tersebut terlalu optimistik/tidak teliti, ia telah gagal.)',
    contoh2: '売上の見通しが甘いと言わざるを得ない。\n(Saya terpaksa mengatakan bahawa jangkaan jualan ini terlalu optimistik.)',
    contoh3: '見通しが甘い経営はすぐに危機に陥る。\n(Pengurusan yang mempunyai perancangan naif akan segera jatuh ke dalam krisis.)'
  },
  {
    id: 'm6h4_9',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'ねじが甘い',
    furigana: 'ねじがあまい',
    arti: 'Skru yang longgar',
    penjelasan: 'Satu penggunaan yang agak unik dalam mekanik. Apabila komponen mekanikal seperti skru, penutup, atau ikatan disifatkan sebagai 甘い, ini bermaksud ia tidak diketatkan dengan betul, longgar (ゆるい), dan mudah tercabut.',
    contoh1: 'このねじは甘い（＝ゆるい）からすぐに外れる。\n(Skru ini longgar, jadi ia akan segera tertanggal/tercabut.)',
    contoh2: 'ふたの閉め方が甘かったので、水が漏れた。\n(Oleh kerana penutup itu ditutup dengan longgar, air telah bocor.)',
    contoh3: '結び目が甘いとほどけてしまいますよ。\n(Jika ikatannya longgar, ia akan terungkai nanti.)'
  },

  // ==========================================
  // KELOMPOK 2: かたい (固い / 堅い / 硬い) - Keras / Teguh / Ketat
  // ==========================================
  {
    id: 'm6h4_10',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'かたい椅子',
    furigana: 'かたいいす',
    arti: 'Kerusi yang keras',
    penjelasan: 'Merujuk kepada bentuk fizikal sesuatu objek yang padat, pejal, tidak lembut, dan tidak berubah bentuk apabila ditekan (seperti kayu, batu, atau kerusi yang tidak empuk). Antonimnya ialah やわらかい (lembut).',
    contoh1: 'かたい椅子に長時間座って腰が痛い。\n(Duduk di atas kerusi yang keras dalam masa yang lama membuatkan pinggang saya sakit.)',
    contoh2: 'この肉はかたくて食べにくい。\n(Daging ini keras dan sukar untuk dimakan.)',
    contoh3: 'かたい地面の上で寝るのは辛い。\n(Tidur di atas permukaan tanah yang keras sangat menyeksakan.)'
  },
  {
    id: 'm6h4_11',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'かたい握手を交わす',
    furigana: 'かたいあくしゅをかわす',
    arti: 'Bersalaman dengan erat / kuat',
    penjelasan: 'Digunakan secara metafora untuk menggambarkan tindakan yang dilakukan dengan penuh keyakinan, tenaga, dan ketegasan (しっかりとした). Bersalaman dengan "かたい" bermaksud genggaman tangan yang kuat dan padu.',
    contoh1: '二人の大統領はかたい握手を交わした。\n(Kedua-dua orang presiden itu saling bersalaman dengan erat.)',
    contoh2: 'チームメイトとかたい絆で結ばれている。\n(Saya terikat dengan ikatan persahabatan yang kuat/teguh bersama rakan sepasukan.)',
    contoh3: '私たちはかたい約束をした。\n(Kami telah membuat janji yang teguh.)'
  },
  {
    id: 'm6h4_12',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '口がかたい',
    furigana: 'くちがかたい',
    arti: 'Pandai menyimpan rahsia (Mulut yang ketat)',
    penjelasan: 'Satu simpulan bahasa (idiom). Seseorang yang "mulutnya keras" merujuk kepada individu yang sangat boleh dipercayai dalam menjaga rahsia dan tidak suka bergosip. Antonimnya ialah 口が軽い (mulut murai / suka membocorkan rahsia).',
    contoh1: '彼は口がかたいから、秘密を話しても大丈夫だ。\n(Dia seorang yang pandai menyimpan rahsia, jadi tidak mengapa jika kita memberitahunya.)',
    contoh2: '口がかたい人だけが信用される。\n(Hanya orang yang pandai menjaga rahsia sahaja yang akan dipercayai.)',
    contoh3: '職業柄、どうしても口がかたくなる。\n(Kerana tuntutan kerja, saya semestinya perlu sentiasa menjaga rahsia.)'
  },
  {
    id: 'm6h4_13',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '決意はかたい',
    furigana: 'けついはおかたい',
    arti: 'Keazaman yang teguh / Keputusan yang muktamad',
    penjelasan: 'Menunjukkan pendirian, keputusan, atau semangat yang tidak mudah goyah atau diubah oleh pengaruh luar. Ia menggambarkan ketegasan mental seseorang.',
    contoh1: '彼の辞職する決意はかたい。\n(Keazamannya untuk meletakkan jawatan adalah teguh / muktamad.)',
    contoh2: '何度説得しても、彼女の意志はかたかった。\n(Walaupun sudah berkali-kali dipujuk, pendiriannya tetap teguh.)',
    contoh3: '勝利への思いがかたい。\n(Hasrat dan keazamannya untuk menang sangat kuat.)'
  },
  {
    id: 'm6h4_14',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '表情がかたい',
    furigana: 'ひょうじょうがかたい',
    arti: 'Riak wajah yang kaku / Tegang',
    penjelasan: 'Apabila dikaitkan dengan riak muka, badan, atau pergerakan, ia bermaksud seseorang itu kelihatan sangat gemuruh, tegang (nervous), atau tidak senyum (serius). Kelihatan seolah-olah otot wajahnya "keras".',
    contoh1: '面接の前で、みんな表情がかたい。\n(Sebelum temu duga bermula, riak wajah semua orang kelihatan kaku dan tegang.)',
    contoh2: 'カメラの前に立つと、どうしても笑顔がかたくなる。\n(Apabila berdiri di hadapan kamera, senyuman saya pasti akan menjadi kaku.)',
    contoh3: 'もっとリラックスして、かたい表情を和らげてください。\n(Tolong lebih relaks dan kurangkan ketegangan pada wajah itu.)'
  },
  {
    id: 'm6h4_15',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'かたい商売',
    furigana: 'かたいしょうばい',
    arti: 'Perniagaan yang stabil / Selamat',
    penjelasan: 'Dalam konteks perniagaan, pelaburan, atau pekerjaan, "かたい" bermaksud bebas daripada risiko yang tinggi, sangat selamat (安全な), konvensional, dan pasti mendatangkan keuntungan yang stabil walaupun mungkin tidak besar.',
    contoh1: '彼はかたい（＝安全な）商売をしている。\n(Dia sedang menjalankan perniagaan yang stabil dan selamat.)',
    contoh2: '公務員はかたい職業だと言われている。\n(Penjawat awam dikatakan sebagai satu profesion yang stabil dan terjamin.)',
    contoh3: 'リスクを避けて、かたい投資を選ぶ。\n(Mengelakkan risiko dan memilih pelaburan yang selamat/kukuh.)'
  },
  {
    id: 'm6h4_16',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '合格はかたい',
    furigana: 'ごうかくはかたい',
    arti: 'Kelulusannya sudah terjamin / Pasti',
    penjelasan: 'Dalam konteks keputusan perlawanan, pilihan raya, atau peperiksaan, "かたい" bermaksud peluang untuk berjaya adalah hampir 100%, pasti (確実だ), dan sangat sukar untuk digugat oleh pihak lain.',
    contoh1: '今の成績なら、彼の合格はかたい（＝確実だ）。\n(Melihat pada markah semasanya, dia pasti akan lulus.)',
    contoh2: '今回の選挙は、現職の勝利がかたい。\n(Untuk pilihan raya kali ini, kemenangan penjawat penyandang sudah terjamin kukuh.)',
    contoh3: '優勝は彼らのチームでかたいだろう。\n(Gelaran juara hampir pasti akan menjadi milik pasukan mereka.)'
  },
  {
    id: 'm6h4_17',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '頭がかたい',
    furigana: 'あたまがかたい',
    arti: 'Kepala batu / Keras kepala',
    penjelasan: 'Frasa kiasan yang bermaksud seseorang (biasanya orang tua) itu tidak berfikiran terbuka, konservatif, tidak mahu menerima idea baharu, dan sangat berdegil (頑固だ).',
    contoh1: '私の父は頭がかたくて、新しい意見を全く聞かない。\n(Ayah saya sangat keras kepala dan langsung tidak mahu mendengar pendapat baharu.)',
    contoh2: '年を取ると頭がかたくなりがちだ。\n(Apabila usia semakin meningkat, seseorang cenderung menjadi lebih berkeras kepala.)',
    contoh3: '頭がかたい上司の下で働くのは疲れる。\n(Bekerja di bawah bos yang berfikiran tertutup sangat meletihkan.)'
  },
  {
    id: 'm6h4_18',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'かたい話',
    furigana: 'かたいはなし',
    arti: 'Topik perbualan yang berat / Serius',
    penjelasan: 'Merujuk kepada keadaan, atmosfera, buku, atau perbualan yang sangat formal, terlalu serius, rumit, atau kaku (難しい). Orang lazimnya berkata "mari berhenti bercakap tentang topik yang berat ini" semasa beriadah.',
    contoh1: '飲み会だから、かたい話はやめよう。\n(Ini hanyalah majlis minum-minum santai, jadi mari hentikan topik yang berat/serius ini.)',
    contoh2: '彼の書く文章は少しかたい。\n(Gaya penulisan karangannya agak kaku/terlalu formal.)',
    contoh3: 'かたい挨拶は抜きにして、楽しみましょう。\n(Mari ketepikan ucapan pembukaan yang formal dan terus berseronok.)'
  },
  {
    id: 'm6h4_19',
    minggu: '6',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '外出をかたく禁ずる',
    furigana: 'がいしゅつをかたくきんずる',
    arti: 'Melarang keluar dengan sekeras-kerasnya',
    penjelasan: 'Perkataan "かたい" di sini menjadi kata keterangan (かたく) yang bermaksud "secara mutlak" atau "dengan sekeras-kerasnya" (絶対に). Ia sering digabungkan dengan kata kerja larangan atau penolakan.',
    contoh1: '夜間の外出をかたく禁ずる。\n(Aktiviti keluar pada waktu malam dilarang dengan sekeras-kerasnya.)',
    contoh2: '社長はその提案をかたく拒否した。\n(Pengarah menolak cadangan tersebut dengan sekeras-kerasnya.)',
    contoh3: '関係者以外の立ち入りはかたくお断りします。\n(Kemasukan pihak selain daripada yang berkenaan dilarang dengan sekeras-kerasnya.)'
  },

  // ==========================================
  // KELOMPOK 3: まずい - Teruk / Kekok / Dalam Masalah
  // ==========================================
  {
    id: 'm6h4_20',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '対応がまずい',
    furigana: 'たいおうがまずい',
    arti: 'Tindakan yang buruk / Tidak wajar',
    penjelasan: 'Perkataan まずい biasanya merujuk kepada makanan yang "tidak sedap". Namun dalam urusan pekerjaan, ia bermakna cara seseorang mengendalikan sesuatu masalah adalah sangat buruk, tidak cekap, dan mengundang masalah (よくない).',
    contoh1: 'クレームへの対応がまずかったため、客を怒らせてしまった。\n(Tindakan balas terhadap aduan adalah sangat buruk, menyebabkan pelanggan itu marah.)',
    contoh2: '初期対応がまずいと、被害が拡大する。\n(Jika tindakan pada peringkat awal teruk, kerosakan akan menjadi lebih besar.)',
    contoh3: 'やり方がまずいから失敗するんだ。\n(Kamu gagal kerana cara pelaksanaannya sangat lemah/buruk.)'
  },
  {
    id: 'm6h4_21',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '顔がまずい',
    furigana: 'かおがまずい',
    arti: 'Wajah yang kurang menarik / Hodoh',
    penjelasan: 'Satu ungkapan yang agak kasar, bermaksud rupa paras yang tidak kacak, kurang menarik, atau hodoh (不細工だ). (Nota: Penggunaan ini sangat kasar dan jarang digunakan secara sopan).',
    contoh1: '彼は性格はいいが顔がまずい（＝不細工だ）。\n(Personalitinya baik tetapi rupa parasnya kurang menarik.)',
    contoh2: 'デザインがまずい商品は売れない。\n(Produk dengan rekaan luaran yang buruk tidak akan terjual.)',
    contoh3: '見た目がまずくても、味は最高です。\n(Walaupun luarannya nampak teruk, rasanya adalah yang terbaik.)'
  },
  {
    id: 'm6h4_22',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '歌がまずい',
    furigana: 'うたがまずい',
    arti: 'Nyanyian yang sumbang / Teruk',
    penjelasan: 'Merujuk kepada kemahiran, kebolehan, atau kecekapan seseorang yang sangat lemah dan tidak pandai (下手だ). Boleh digunakan untuk nyanyian, penulisan, atau kraf.',
    contoh1: '彼の歌はまずい（＝下手だ）が、一生懸命歌っている。\n(Nyanyiannya sangat teruk, tetapi dia menyanyi dengan bersungguh-sungguh.)',
    contoh2: '字がまずくて読めない。\n(Tulisan tangannya sangat buruk sehingga tidak dapat dibaca.)',
    contoh3: 'スピーチがまずくて、みんなを退屈させた。\n(Cara pidatonya sangat teruk sehingga membuatkan semua orang bosan.)'
  },
  {
    id: 'm6h4_23',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '人に聞かれるとまずい',
    furigana: 'ひとにきかれるとまずい',
    arti: 'Buruk padahnya jika didengari orang',
    penjelasan: 'Ini merujuk kepada situasi yang janggal, sensitif, atau akan mendatangkan masalah besar jika diketahui orang lain (都合が悪い). Sesuatu yang "まずい" di sini bermaksud "ia adalah keadaan yang merugikan".',
    contoh1: 'この話は人に聞かれるとまずいので、小声で話そう。\n(Sangat buruk padahnya jika perbualan ini didengari orang, mari bercakap dengan berbisik.)',
    contoh2: '遅刻したらまずいから、早く家を出よう。\n(Padah jika kita terlewat, jadi mari kita keluar rumah awal.)',
    contoh3: '親に見つかるとまずい。\n(Akan timbul masalah besar jika diketahui oleh ibu bapa.)'
  },
  {
    id: 'm6h4_24',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'まずいことになった',
    furigana: 'まずいことになった',
    arti: 'Berada dalam masalah besar / Keadaan teruk',
    penjelasan: 'Satu frasa seruan (Ah, mampus! / Alamak!) yang diucapkan apabila keadaan tiba-tiba bertukar menjadi sangat buruk, kecemasan, atau sesuatu kesalahan besar baru sahaja disedari berlaku.',
    contoh1: 'パソコンのデータが全部消えて、まずいことになった。\n(Semua data dalam komputer telah terpadam, saya benar-benar berada dalam masalah yang besar!)',
    contoh2: '財布を落としてしまって、非常にまずい状況だ。\n(Saya tercicir dompet, ini satu keadaan kecemasan yang amat teruk.)',
    contoh3: 'これはまずいぞ、急いで社長に報告しよう。\n(Ini sangat buruk, mari segera laporkan kepada presiden!)'
  },

  // ==========================================
  // KELOMPOK 4: 重い (おもい) - Berat / Lesu / Serius
  // ==========================================
  {
    id: 'm6h4_25',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '酸素は水素より重い',
    furigana: 'さんそはすいそよりおもい',
    arti: 'Oksigen lebih berat daripada hidrogen',
    penjelasan: 'Makna harfiah perkataan 重い (omoi), yang merujuk kepada ukuran fizikal, jisim, atau berat sesuatu benda berbanding benda yang lain.',
    contoh1: '酸素は水素より重い気体です。\n(Oksigen adalah gas yang lebih berat daripada hidrogen.)',
    contoh2: 'この荷物は一人で運ぶには重すぎる。\n(Barang ini terlalu berat untuk diangkat berseorangan.)',
    contoh3: '体重が前より重くなった。\n(Berat badan saya bertambah berbanding sebelum ini.)'
  },
  {
    id: 'm6h4_26',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'ペダルが重い',
    furigana: 'ペダルがおもい',
    arti: 'Pedal basikal terasa berat (sukar dikayuh)',
    penjelasan: 'Menyifatkan daya fizikal yang diperlukan untuk menggerakkan atau menarik sesuatu. "Berat" bermaksud ia memerlukan banyak tenaga atau rintangan pada objek tersebut terlalu kuat.',
    contoh1: '坂道なので、自転車のペダルが重い。\n(Kerana mendaki bukit, pedal basikal terasa sangat berat.)',
    contoh2: 'このドアは重くてなかなか開かない。\n(Pintu ini terasa berat dan sukar untuk dibuka.)',
    contoh3: '雪道を歩くのは足取りが重くなる。\n(Berjalan di atas jalan bersalji membuatkan langkah kaki terasa berat.)'
  },
  {
    id: 'm6h4_27',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '重い地位につく',
    furigana: 'おもいちいつく',
    arti: 'Memegang jawatan yang penting / Berat',
    penjelasan: 'Dalam konteks tanggungjawab, peranan, atau kesalahan undang-undang, perkataan 重い bermaksud ia sesuatu yang sangat penting (重要な), kritikal, atau melibatkan beban yang besar ke atas seseorang.',
    contoh1: '彼は会社で重い（＝重要な）地位についている。\n(Dia memegang satu jawatan yang sangat penting / berat tanggungjawabnya di syarikat.)',
    contoh2: '重い責任を任されてプレッシャーを感じる。\n(Saya merasakan tekanan kerana diamanahkan dengan tanggungjawab yang berat.)',
    contoh3: '彼は重い罪を犯した。\n(Dia telah melakukan satu jenayah yang berat/serius.)'
  },
  {
    id: 'm6h4_28',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '頭が重い',
    furigana: 'あたまがおもい',
    arti: 'Kepala terasa lesu / Berat',
    penjelasan: 'Secara fisiologi, ini bermakna badan atau kepala terasa tidak segar, lesu (すっきりしない), pening-pening lalat, atau kurang bertenaga akibat sakit atau kurang tidur.',
    contoh1: '寝不足で頭が重い。\n(Kepala saya terasa lesu akibat kurang tidur.)',
    contoh2: '風邪を引いたのか、体が重い。\n(Mungkin saya dijangkiti selesema, badan saya terasa sangat letih/berat.)',
    contoh3: '胃が重くて食欲がない。\n(Perut saya berasa senak/berat dan saya tiada selera makan.)'
  },
  {
    id: 'm6h4_29',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'パソコンの動きが重い',
    furigana: 'パソコンのうごきがおもい',
    arti: 'Pergerakan komputer perlahan',
    penjelasan: 'Dalam terma teknologi moden (seperti komputer, telefon, laman web), "重い" secara kiasannya bermaksud kelajuan peranti tersebut sangat perlahan (遅い), tersangkut-sangkut, atau "lag" kerana memori atau pemprosesannya terbeban.',
    contoh1: 'アプリをたくさん開いていると、パソコンの動きが重くなる。\n(Jika anda membuka banyak aplikasi, kelajuan komputer akan menjadi perlahan/berat.)',
    contoh2: '回線が混雑していて、ネットが重い。\n(Kerana trafik rangkaian sesak, capaian internet menjadi lambat.)',
    contoh3: 'このゲームはデータが重すぎてスマホで遊べない。\n(Data permainan ini terlalu besar/berat sehingga tidak dapat dimainkan di telefon pintar.)'
  },
  {
    id: 'm6h4_30',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '気が重い',
    furigana: 'きがおもい',
    arti: 'Berasa berat hati / Murung',
    penjelasan: 'Simpulan bahasa ini (気が重い) bermaksud keadaan emosi seseorang yang berasa tertekan, terbeban, tidak bermotivasi, atau bimbang (憂うつだ) mengenai sesuatu perkara yang akan datang atau perlu dilakukan.',
    contoh1: 'その仕事を断るのは気が重い。\n(Saya berasa berat hati untuk menolak kerja tersebut.)',
    contoh2: '明日は苦手なテストがあるので、今から気が重い。\n(Esok ada ujian untuk subjek yang saya lemah, jadi bermula dari sekarang saya sudah berasa murung/berat hati.)',
    contoh3: '謝りに行くのは気が重い仕事だ。\n(Pergi untuk memohon maaf adalah suatu tugas yang sangat berat bagi jiwa saya.)'
  },
  {
    id: 'm6h4_31',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '内容が重い',
    furigana: 'ないようがおもい',
    arti: 'Kandungan yang serius / Mencekam',
    penjelasan: 'Apabila digunakan untuk menerangkan topik, filem, berita, atau suasana, ia membawa erti bahawa mesej di dalamnya sangat serius, mendalam, tragis, atau berat (深刻だった) sehingga tidak boleh diambil secara sambil lewa.',
    contoh1: '今日の会議の内容は重かった。\n(Kandungan mesyuarat pada hari ini adalah sangat serius/berat.)',
    contoh2: '戦争をテーマにした重い映画を見た。\n(Saya telah menonton sebuah filem yang temanya sangat berat mengenai peperangan.)',
    contoh3: '空気（雰囲気）が重くて息苦しい。\n(Suasana pada waktu itu sangat tegang/berat sehingga terasa sesak nafas.)'
  },

  // ==========================================
  // KELOMPOK 5: 明るい (あかるい) - Cerah / Ceria / Mahir
  // ==========================================
  {
    id: 'm6h4_32',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '明るいブルー',
    furigana: 'あかるいブルー',
    arti: 'Biru cerah',
    penjelasan: 'Makna paling asas bagi 明るい (akarui). Selain daripada bermaksud bilik yang diterangi cahaya, apabila digabungkan dengan warna, ia bermaksud tona warna terang, berseri, dan cerah (antonim: 暗い - gelap).',
    contoh1: '彼女は明るいブルーのシャツを着ている。\n(Dia memakai kemeja berwarna biru cerah.)',
    contoh2: '部屋をもっと明るい色に塗りたい。\n(Saya mahu mengecat bilik ini dengan warna yang lebih cerah.)',
    contoh3: '春らしい明るい服が欲しい。\n(Saya mahukan baju berwarna terang yang bersesuaian dengan musim bunga.)'
  },
  {
    id: 'm6h4_33',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '明るい性格',
    furigana: 'あかるいせいかく',
    arti: 'Personaliti yang ceria',
    penjelasan: 'Bila merujuk kepada karakter atau personaliti seseorang, ia bermakna orang tersebut sentiasa kelihatan riang, gembira, peramah, positif, dan penuh semangat.',
    contoh1: '彼女は明るい性格で、誰からも好かれている。\n(Kerana dia mempunyai perwatakan yang ceria, dia disukai oleh semua orang.)',
    contoh2: 'つらい時でも明るく振る舞う。\n(Walaupun pada waktu yang sukar, dia tetap berkelakuan ceria.)',
    contoh3: '彼がいると職場が明るくなる。\n(Tempat kerja akan menjadi ceria dengan kehadirannya.)'
  },
  {
    id: 'm6h4_34',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '明るい声',
    furigana: 'あかるいこえ',
    arti: 'Suara yang riang',
    penjelasan: 'Menyifatkan nada suara atau cara bercakap yang bernada tinggi, bersemangat, dan menunjukkan perasaan gembira kepada pendengar.',
    contoh1: '電話越しに彼女の明るい声が聞こえた。\n(Dari seberang telefon, kedengaran suaranya yang riang ceria.)',
    contoh2: 'いつも明るい声で挨拶をしてくれる。\n(Dia sentiasa memberikan ucapan salam dengan suara yang riang.)',
    contoh3: 'アナウンサーの明るい声で一日が始まる。\n(Hari saya bermula dengan suara ceria penyiar radio tersebut.)'
  },
  {
    id: 'm6h4_35',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '見通しが明るい',
    furigana: 'みとおしがあかるい',
    arti: 'Prospek masa depan yang cerah',
    penjelasan: 'Berlawanan dengan 見通しが甘い (terlalu optimistik), 見通しが明るい membawa konotasi positif bahawa terdapat harapan yang kukuh, prospek yang sangat baik, dan peluang besar untuk berjaya pada masa hadapan.',
    contoh1: '新商品のヒットで、今後の見通しが明るい。\n(Disebabkan jualan produk baharu yang laris, prospek untuk masa hadapan kelihatan cerah.)',
    contoh2: '経済の回復により、未来は明るいと言える。\n(Berdasarkan kepada pemulihan ekonomi, boleh dikatakan bahawa masa depan kita cerah.)',
    contoh3: '手術は成功し、病状の見通しは明るい。\n(Pembedahan telah berjaya, dan prospek pemulihannya sangat positif.)'
  },
  {
    id: 'm6h4_36',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '政治に明るい',
    furigana: 'せいじにあかるい',
    arti: 'Sangat berpengetahuan / Mahir dalam bidang politik',
    penjelasan: 'Jika digabungkan dengan struktur (bidang/topik) + に明るい, ia bermakna seseorang itu mempunyai ilmu pengetahuan yang sangat mendalam, berpengalaman, dan berpengetahuan luas tentang sesuatu perkara tersebut (詳しい).',
    contoh1: '彼は政治に明るい（＝詳しい）。\n(Dia sangat berpengetahuan luas dalam selok-belok politik.)',
    contoh2: 'この町の地理に明るい人に案内してもらう。\n(Kita akan dipandu oleh seseorang yang sangat mahir dengan selok-belok geografi bandar ini.)',
    contoh3: 'IT関係に明るいスタッフを探している。\n(Kami sedang mencari staf yang mempunyai kepakaran/pengetahuan yang mendalam dalam bidang IT.)'
  }
];

window.vocabData.push(...kosakata_m6h4);