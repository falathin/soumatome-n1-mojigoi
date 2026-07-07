// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m8h3 = [
  // ===============================
  // BAGIAN 1: KAO (顔) - WAJAH
  // ===============================
  {
    id: 'm8h3_1',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '顔が売れる',
    furigana: 'かおがうれる',
    arti: 'Terkenal / Dikenal luas',
    penjelasan: 'Ungkapan ini digunakan untuk mendeskripsikan seseorang yang wajahnya sangat familier atau sangat dikenal luas di suatu lingkungan, komunitas, atau wilayah tertentu. Sama halnya seperti barang yang "laku" (売れる), orang ini sangat populer.',
    contoh1: '彼はこの辺りでは顔が売れている。\n(Dia sangat terkenal di daerah sekitar sini.)',
    contoh2: 'テレビに出演したおかげで、すっかり顔が売れた。\n(Berkat tampil di televisi, dia jadi benar-benar terkenal di kalangan masyarakat.)'
  },
  {
    id: 'm8h3_2',
    minggu: '8',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '顔が広い',
    furigana: 'かおがひろい',
    arti: 'Punya banyak kenalan / Jaringannya luas',
    penjelasan: 'Secara harfiah berarti "wajahnya lebar", tetapi makna sebenarnya adalah ungkapan untuk seseorang yang memiliki jaringan pertemanan atau koneksi yang sangat luas di berbagai bidang. Orang ini pandai bersosialisasi dan relasinya banyak.',
    contoh1: '彼はとても顔が広い。\n(Dia memiliki koneksi atau jaringan pertemanan yang sangat luas.)',
    contoh2: '顔が広い彼女に頼めば、適任者を紹介してくれるだろう。\n(Kalau minta tolong padanya yang punya banyak kenalan, dia pasti akan memperkenalkan orang yang tepat.)'
  },
  {
    id: 'm8h3_3',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '顔が利く',
    furigana: 'かおがきく',
    arti: 'Punya pengaruh / Disegani (sehingga diberi perlakuan khusus)',
    penjelasan: 'Ungkapan untuk seseorang yang karena jabatan, reputasi, atau kedekatannya dengan suatu tempat/organisasi, ia memiliki pengaruh kuat sehingga permintaannya mudah dikabulkan atau sering mendapat perlakuan istimewa sebagai pelanggan VIP.',
    contoh1: '私はその店に顔が利く。\n(Saya punya pengaruh / dikenal baik di toko itu [sehingga biasa diberi perlakuan khusus].)',
    contoh2: '彼はこの業界で顔が利くので、仕事がスムーズに進む。\n(Karena dia punya pengaruh besar di industri ini, pekerjaannya bisa berjalan dengan lancar.)'
  },
  {
    id: 'm8h3_4',
    minggu: '8',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '合わせる顔がない',
    furigana: 'あわせるかおがない',
    arti: 'Tidak punya muka / Sangat malu untuk bertemu',
    penjelasan: 'Menggambarkan perasaan sangat malu, merasa bersalah, atau menyesal sehingga merasa tidak sanggup atau tidak pantas untuk bertatap muka dengan seseorang (biasanya orang yang telah dikecewakan).',
    contoh1: '親に合わせる顔がない。\n(Saya tidak punya muka / sangat malu untuk bisa bertemu dengan orang tua.)',
    contoh2: 'こんな大失敗をしてしまって、社長に合わせる顔がない。\n(Melakukan kesalahan besar seperti ini, saya tidak punya muka untuk menghadap presiden direktur.)'
  },
  {
    id: 'm8h3_5',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '顔を立てる',
    furigana: 'かおをたてる',
    arti: 'Menjaga kehormatan / Menyelamatkan muka seseorang',
    penjelasan: 'Tindakan melakukan sesuatu agar martabat, reputasi, atau harga diri orang lain (terutama atasan atau orang yang dihormati) tetap terjaga dan tidak dipermalukan di depan umum. (Catatan: bisa juga dipakai dalam bentuk 上司の顔が立つ).',
    contoh1: '上司の顔を立てる。\n(Mencoba menjaga kehormatan atau reputasi atasan.)',
    contoh2: '先生の顔を立てて、今回は私が我慢することにした。\n(Demi menjaga reputasi guru, kali ini saya memutuskan untuk menahan diri/bersabar.)'
  },

  // ===============================
  // BAGIAN 2: ME (目) - MATA
  // ===============================
  {
    id: 'm8h3_6',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目が回る',
    furigana: 'めがまわる',
    arti: 'Sangat sibuk (sampai pusing)',
    penjelasan: 'Sebuah kiasan yang menggambarkan kondisi di mana seseorang memiliki terlalu banyak pekerjaan atau jadwal yang sangat padat, hingga diibaratkan matanya berputar-putar (merasa pusing) karena kesibukan tersebut.',
    contoh1: '目が回るような忙しさ。\n(Kesibukan yang luar biasa sibuk sampai membuat mata serasa berputar.)',
    contoh2: '今日は朝から客が多くて、目が回るほどだった。\n(Hari ini dari pagi banyak sekali tamu, sibuknya sampai membuat mata berkunang-kunang.)'
  },
  {
    id: 'm8h3_7',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目に浮かぶ',
    furigana: 'めにうかぶ',
    arti: 'Terbayang di mata / Teringat dengan jelas',
    penjelasan: 'Digunakan ketika sebuah memori, kenangan masa lalu, atau bayangan tentang suatu tempat/orang tiba-teman muncul dengan sangat jelas di pelupuk mata atau di dalam pikiran kita seolah-olah sedang melihatnya langsung.',
    contoh1: '故郷の様子が目に浮かぶ。\n(Suasana atau pemandangan kampung halaman terbayang-bayang di depan mata.)',
    contoh2: '彼女の嬉しそうな顔が今でも目に浮かぶ。\n(Wajah bahagianya bahkan hingga saat ini masih terbayang jelas di mata saya.)'
  },
  {
    id: 'm8h3_8',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目を疑う',
    furigana: 'めをうたがう',
    arti: 'Tidak percaya dengan apa yang dilihat (karena kaget)',
    penjelasan: 'Kondisi di mana seseorang melihat sesuatu yang sangat luar biasa, aneh, atau mengejutkan, sehingga mereka merasa harus meragukan (疑う) mata mereka sendiri apakah yang mereka lihat itu sungguh-sungguh nyata atau tidak.',
    contoh1: '目を疑うような光景。\n(Pemandangan yang sukar dipercaya / membuat kita meragukan mata sendiri.)',
    contoh2: '宝くじに当たったという知らせを見て、自分の目を疑った。\n(Melihat pemberitahuan bahwa saya memenangkan lotre, saya sempat tidak mempercayai mata saya sendiri.)'
  },
  {
    id: 'm8h3_9',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目を離す',
    furigana: 'めをはなす',
    arti: 'Mengalihkan pandangan / Lengah pengawasan',
    penjelasan: 'Tindakan berhenti memperhatikan atau berhenti mengawasi seseorang/sesuatu yang seharusnya dijaga. Ungkapan ini sering dikonotasikan dengan peringatan untuk tidak lengah (terutama saat menjaga anak kecil atau hal penting).',
    contoh1: '子どもから目を離す。\n(Mengalihkan pandangan / lengah dalam mengawasi anak kecil.)',
    contoh2: '火を止めるまで、絶対に鍋から目を離さないでください。\n(Sampai apinya dimatikan, tolong jangan mengalihkan pandangan sama sekali dari panci itu.)'
  },
  {
    id: 'm8h3_10',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目を丸くする',
    furigana: 'めをまるくする',
    arti: 'Membelalakkan mata / Sangat terkejut',
    penjelasan: 'Ekspresi wajah yang khas ketika seseorang merasa sangat kaget atau terheran-heran, sehingga tanpa sadar mereka membuka mata sangat lebar hingga berbentuk bulat (丸く).',
    contoh1: '突然のプレゼントに目を丸くする。\n(Sangat terkejut / membelalakkan mata karena menerima hadiah yang tiba-tiba.)',
    contoh2: '信じられないニュースを聞いて、彼は目を丸くした。\n(Mendengar berita yang sulit dipercaya itu, dia membelalakkan matanya karena kaget.)'
  },
  {
    id: 'm8h3_11',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目を引く',
    furigana: 'めをひく',
    arti: 'Menarik perhatian / Mencolok',
    penjelasan: 'Sesuatu yang menonjol, indah, atau unik sehingga secara otomatis membuat pandangan orang tertuju padanya. Sering digunakan untuk memuji desain, warna, atau penampilan yang memikat (eye-catching).',
    contoh1: '目を引くデザイン。\n(Desain yang mencolok dan menarik perhatian banyak orang.)',
    contoh2: '彼女の赤いドレスは、パーティー会場で一番目を引いた。\n(Gaun merahnya adalah yang paling menarik perhatian di area pesta tersebut.)'
  },
  {
    id: 'm8h3_12',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目がさえる',
    furigana: 'めがさえる',
    arti: 'Mata menjadi segar / Tidak bisa tidur sama sekali',
    penjelasan: 'Kondisi saat pikiran terlalu waspada, bersemangat (misalnya habis minum kopi), atau banyak pikiran, sehingga rasa kantuk hilang sepenuhnya dan membuat mata menjadi "terang" benderang di malam hari.',
    contoh1: '目がさえて眠れない。\n(Matanya terlalu segar/terjaga sepenuhnya sehingga tidak bisa tidur.)',
    contoh2: '濃いコーヒーを飲んだら目がさえてしまった。\n(Setelah minum kopi yang pekat, mataku malah jadi terjaga dan tidak bisa tidur.)'
  },
  {
    id: 'm8h3_13',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目が届く',
    furigana: 'めがとどく',
    arti: 'Terjangkau oleh pandangan / Berada dalam pengawasan',
    penjelasan: 'Area atau jarak yang masih bisa dilihat atau diawasi secara langsung dengan mudah. Hal-hal yang penting biasanya ditaruh di tempat yang "matanya sampai" (bisa terus dipantau).',
    contoh1: '大事なものを目が届くところに置く。\n(Meletakkan barang yang penting di tempat yang bisa terjangkau oleh pandangan/pengawasan.)',
    contoh2: '親の目が届く範囲で遊ばせている。\n(Saya membiarkan anak-anak bermain dalam radius yang masih terjangkau oleh pengawasan orang tua.)'
  },
  {
    id: 'm8h3_14',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '長い目で見る',
    furigana: 'ながいめでみる',
    arti: 'Melihat dalam jangka panjang / Bersabar melihat perkembangan',
    penjelasan: 'Sikap tidak terburu-buru dalam menilai hasil atau kesuksesan sesuatu pada saat itu juga, melainkan memberi waktu, mengamati perkembangannya perlahan, dan menilainya dengan visi yang jauh ke depan.',
    contoh1: '子どもの将来を長い目で見る。\n(Memandang dan mengawasi masa depan anak dengan visi jangka panjang yang sabar.)',
    contoh2: '今は失敗が多いですが、どうか彼を長い目で見てやってください。\n(Saat ini dia memang banyak gagal, tetapi tolonglah bersabar dan lihat perkembangannya dalam jangka waktu lama.)'
  },
  {
    id: 'm8h3_15',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目が肥えている',
    furigana: 'めがこえている',
    arti: 'Memiliki apresiasi seni yang tinggi / Pintar menilai barang bagus',
    penjelasan: 'Sama dengan "目が高い" (me ga takai). Artinya memiliki "mata ahli". Karena sering melihat barang-barang berkualitas tinggi (seperti seni, barang antik), orang ini pandai membedakan mana barang asli/berkualitas dan mana yang tiruan/biasa.',
    contoh1: '彼は絵画に対して目が肥えている。（＝目が高い）\n(Dia memiliki mata yang sangat ahli / pandai menilai kualitas terhadap lukisan.)',
    contoh2: '目が肥えている客を満足させるのは難しい。\n(Sangat sulit untuk bisa memuaskan pelanggan yang punya apresiasi tinggi/pandai menilai produk.)'
  },

  // ===============================
  // BAGIAN 3: MIMI (耳) - TELINGA
  // ===============================
  {
    id: 'm8h3_16',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳を澄ます',
    furigana: 'みみをすます',
    arti: 'Memasang telinga / Mendengarkan dengan saksama',
    penjelasan: 'Mengkonsentrasikan indera pendengaran untuk menangkap suara sekecil apa pun, memusatkan fokus agar suara yang lamat-lamat bisa terdengar dengan jelas.',
    contoh1: '耳を澄ます。\n(Mendengarkan dengan penuh konsentrasi / memasang telinga baik-baik.)',
    contoh2: '森の中で耳を澄ますと、鳥の鳴き声が聞こえる。\n(Jika kita memasang telinga saksama di dalam hutan, akan terdengar suara kicauan burung.)'
  },
  {
    id: 'm8h3_17',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳を傾ける',
    furigana: 'みみをかたむける',
    arti: 'Menyimak dengan sungguh-sungguh / Memperhatikan pendapat orang',
    penjelasan: 'Tindakan secara aktif dan tulus mendengarkan apa yang dikatakan orang lain (seperti cerita, keluhan, atau nasihat). Menunjukkan empati dan respek terhadap pembicara.',
    contoh1: '子どもの話に耳を傾ける。\n(Menyimak atau mendengarkan apa yang diceritakan oleh anak dengan sungguh-sungguh.)',
    contoh2: '皆の意見に耳を傾けることが、リーダーには必要だ。\n(Mendengarkan pendapat semua orang dengan sungguh-sungguh adalah hal yang diperlukan oleh seorang pemimpin.)'
  },
  {
    id: 'm8h3_18',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳に障る',
    furigana: 'みみにさわる',
    arti: 'Terdengar mengganggu / Memekakkan atau mengesalkan telinga',
    penjelasan: 'Suara yang membuat telinga atau perasaan tidak nyaman. Bisa merujuk pada suara fisik yang bising dan berisik, ataupun ucapan seseorang yang tidak enak atau menyakitkan hati untuk didengar.',
    contoh1: '工事の音が耳に障る。\n(Suara dari proyek konstruksi itu sangat bising dan mengganggu telinga.)',
    contoh2: '彼の言い訳はいつも耳に障る。\n(Alasan-alasan yang dia buat selalu terasa tidak enak/mengesalkan untuk didengar.)'
  },
  {
    id: 'm8h3_19',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳をふさぐ',
    furigana: 'みみをふさぐ',
    arti: 'Menutup telinga / Menolak untuk mendengarkan',
    penjelasan: 'Tindakan fisik menutup telinga dengan tangan agar tidak mendengar suara, ATAU sikap mental tidak mau menerima nasihat, omelan, maupun kritikan dari orang lain sama sekali.',
    contoh1: '親の小言に耳をふさぐ。\n(Menutup telinga untuk memblokir atau menolak mendengarkan omelan orang tua.)',
    contoh2: '都合の悪い真実に耳をふさいではいけない。\n(Kita tidak boleh menutup telinga terhadap kebenaran yang tidak menguntungkan kita.)'
  },
  {
    id: 'm8h3_20',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳を貸す',
    furigana: 'みみをかす',
    arti: 'Mau mendengarkan / Menggubris (sering dalam bentuk negatif)',
    penjelasan: 'Artinya bersedia meluangkan waktu untuk mendengarkan masalah, permintaan, atau nasihat orang. Biasanya ungkapan ini muncul dalam bentuk negatif (耳を貸さない) yang berarti sama sekali tidak mau mendengar/tidak menggubris.',
    contoh1: '彼は私の話に耳を貸してくれなかった。\n(Dia sama sekali tidak meminjamkan telinganya / tidak mau mendengarkan apa yang saya bicarakan.)',
    contoh2: '何度忠告しても、彼は全く耳を貸そうとしない。\n(Berapa kali pun aku beri peringatan, dia sama sekali tidak berniat untuk mau mendengarkan.)'
  },
  {
    id: 'm8h3_21',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳について離れない',
    furigana: 'みみについてはなれない',
    arti: 'Terngiang-ngiang di telinga / Tidak bisa dilupakan',
    penjelasan: 'Kondisi di mana ada sebuah melodi, lagu, atau kalimat tertentu yang terus-menerus berputar dan bergema di dalam kepala tanpa henti, dan kita tidak bisa membuangnya dari pikiran.',
    contoh1: 'CMの音楽が耳について離れない。\n(Musik dari iklan tersebut terus terngiang-ngiang di kepala dan tidak mau hilang.)',
    contoh2: '彼のひどい言葉が耳について離れず、泣いてしまった。\n(Kata-katanya yang kejam terus terngiang di telinga, hingga membuatku menangis.)'
  },

  // ===============================
  // BAGIAN 4: HANA (鼻) - HIDUNG
  // ===============================
  {
    id: 'm8h3_22',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '鼻にかける',
    furigana: 'はなにかける',
    arti: 'Membanggakan sesuatu secara berlebihan / Menyombongkan',
    penjelasan: 'Sikap di mana seseorang merasa sombong atau sangat pamer (show-off) tentang kemampuan, penampilan, atau hal baik yang dimilikinya kepada orang lain. Biasanya memberikan kesan kurang menyenangkan bagi yang melihat.',
    contoh1: '彼女は美人を鼻にかけている。\n(Dia selalu membanggakan / menyombongkan kecantikan yang dia miliki.)',
    contoh2: '成績がいいからといって、それを鼻にかけるのはよくない。\n(Hanya karena nilaimu bagus, menyombongkannya seperti itu bukanlah hal yang baik.)'
  },
  {
    id: 'm8h3_23',
    minggu: '8',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '鼻が高い',
    furigana: 'はながたかい',
    arti: 'Merasa bangga (karena sesuatu yang hebat)',
    penjelasan: 'Sebuah perasaan bangga dan terhormat atas prestasi diri sendiri atau prestasi orang terdekat (seperti anak, murid, atau keluarga). Secara harfiah berarti "hidungnya tinggi". Ini bermakna positif, bukan sombong.',
    contoh1: '立派な息子を持って鼻が高い。\n(Saya merasa sangat bangga / besar hati karena memiliki anak laki-laki yang luar biasa hebat.)',
    contoh2: '生徒がコンクールで優勝し、先生も鼻が高い思いをした。\n(Muridnya menang dalam perlombaan, sehingga gurunya pun merasa sangat bangga.)'
  },
  {
    id: 'm8h3_24',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '鼻につく',
    furigana: 'はなにつく',
    arti: 'Merasa muak / Mengganggu / Menjengkelkan',
    penjelasan: 'Kondisi saat kata-kata, tingkah laku (terutama kesombongan), atau bau seseorang/sesuatu mulai terasa sangat mengganggu dan membuat kita merasa muak, jengkel, atau lelah untuk menghadapinya.',
    contoh1: '彼女の態度は鼻につく。\n(Sikap/tingkah lakunya terasa sangat menyebalkan dan membuatku muak.)',
    contoh2: '彼の自慢話はいつも鼻につく。\n(Cerita pamer dan sombongnya itu selalu membuatku jengkel/muak mendengarnya.)'
  },

  // ===============================
  // BAGIAN 5: KUCHI (口) - MULUT
  // ===============================
  {
    id: 'm8h3_25',
    minggu: '8',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '口が重い',
    furigana: 'くちがおもい',
    arti: 'Pendiam / Tidak banyak bicara',
    penjelasan: 'Sifat seseorang yang tidak banyak omong, jarang berbicara, atau sulit diajak berbincang santai. Diibaratkan mulutnya "berat" untuk dibuka dan mengeluarkan kata-kata.',
    contoh1: '彼は口が重い。\n(Dia sangat pendiam / orang yang tidak terlalu banyak bicara.)',
    contoh2: '普段は明るいが、今日はなんだか口が重いね。\n(Biasanya dia ceria, tapi entah kenapa hari ini dia sangat sedikit berbicara, ya.)'
  },
  {
    id: 'm8h3_26',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '口が滑る',
    furigana: 'くちがすべる',
    arti: 'Keceplosan / Tidak sengaja membeberkan rahasia',
    penjelasan: 'Kondisi di mana mulut kita "terpeleset", sehingga secara tidak sengaja mengatakan sesuatu yang seharusnya dirahasiakan, disembunyikan, atau tidak boleh diucapkan.',
    contoh1: 'つい口が滑った。\n(Tanpa sadar aku keceplosan membeberkan rahasia itu.)',
    contoh2: 'お酒を飲んで、うっかり口が滑ってしまった。\n(Karena minum alkohol, saya tanpa sengaja keceplosan mengatakan hal tersebut.)'
  },
  {
    id: 'm8h3_27',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '口が肥えている',
    furigana: 'くちがこえている',
    arti: 'Pintar menilai makanan / Punya cita rasa tinggi (Gourmet)',
    penjelasan: 'Sebutan untuk orang yang sering makan makanan enak dan mewah, sehingga lidahnya sangat terbiasa dengan rasa yang berkualitas. Alhasil, ia bisa dengan mudah menilai mana makanan yang benar-benar enak dan punya standar selera yang tinggi.',
    contoh1: '彼は口が肥えている。\n(Dia punya selera makanan yang sangat tinggi / pandai menilai rasa makanan [gourmet].)',
    contoh2: '高級料理ばかり食べている彼女は、とても口が肥えている。\n(Dia yang selalu makan makanan mewah, lidahnya sangat ahli dalam menilai masakan.)'
  },
  {
    id: 'm8h3_28',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '口を挟む',
    furigana: 'くちをはさむ',
    arti: 'Menyela pembicaraan / Ikut campur omongan orang',
    penjelasan: 'Tindakan menyisipkan (挟む) ucapan saat orang lain sedang asyik berbicara. Merupakan tindakan memotong obrolan atau ikut campur dalam perbincangan yang bukan urusannya.',
    contoh1: '話に口を挟むな。\n(Jangan memotong/menyela pembicaraan orang!)',
    contoh2: '大人の話に子どもが口を挟んではいけません。\n(Anak kecil tidak boleh ikut campur atau menyela saat orang dewasa sedang berbicara.)'
  },

  // ===============================
  // BAGIAN 6: ATAMA (頭) - KEPALA
  // ===============================
  {
    id: 'm8h3_29',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '頭を冷やす',
    furigana: 'あたまをひやす',
    arti: 'Mendinginkan kepala / Menenangkan pikiran',
    penjelasan: 'Saran atau tindakan untuk kembali tenang, mengendalikan emosi, dan meredakan amarah sebelum mengambil keputusan. Secara kiasan berarti mendinginkan kepala yang sedang "panas".',
    contoh1: '頭を冷やして考える。\n(Mendinginkan pikiran dan menenangkan diri terlebih dahulu sebelum memikirkannya lagi.)',
    contoh2: 'カッとなったら、まずは頭を冷やすことが大切だ。\n(Saat merasa naik pitam/marah besar, hal yang terpenting pertama kali adalah mendinginkan kepala.)'
  },
  {
    id: 'm8h3_30',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '頭を抱える',
    furigana: 'あたまをかかえる',
    arti: 'Pusing memikirkan masalah / Kebingungan mencari solusi',
    penjelasan: 'Gestur fisik memegang/memeluk kepala dengan kedua tangan saat dihadapkan pada masalah yang sangat berat, sulit, atau jalan buntu yang membuat stres dan kebingungan tak berujung.',
    contoh1: '頭を抱える問題\n(Masalah rumit yang membuat seseorang stres dan memegang kepalanya kebingungan.)',
    contoh2: '資金不足でプロジェクトが進まず、社長は頭を抱えている。\n(Karena kekurangan dana proyek tidak berjalan, presiden direktur pun memegang kepalanya kebingungan.)'
  },
  {
    id: 'm8h3_31',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '頭が切れる',
    furigana: 'あたまがきれる',
    arti: 'Berotak tajam / Cerdas dan tangkas',
    penjelasan: 'Kiasan untuk orang yang jalan pikirannya sangat cepat, kritis, pintar, dan solutif. Ia mampu menilai situasi dengan tajam, cepat paham, dan mahir dalam merespons dengan cerdas.',
    contoh1: '彼は頭がよく切れる。\n(Dia memiliki otak yang sangat tajam / perputaran otaknya sangat cepat dan cerdas.)',
    contoh2: '頭が切れる彼女のおかげで、トラブルはすぐに解決した。\n(Berkat dirinya yang berotak cerdas tangkas, masalahnya segera dapat dipecahkan.)'
  },
  {
    id: 'm8h3_32',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '頭が下がる',
    furigana: 'あたまがさがる',
    arti: 'Sangat hormat / Kagum (atas usaha/dedikasi seseorang)',
    penjelasan: 'Perasaan sangat menghargai, kagum, dan menaruh rasa hormat yang amat dalam atas kerja keras, kebaikan, atau perjuangan seseorang yang luar biasa. Secara alami membuat kita ingin menundukkan kepala untuk memberi hormat padanya.',
    contoh1: '彼の努力には頭が下がる。\n(Saya menaruh rasa hormat / kagum sedalam-dalamnya atas usaha dan kerja keras yang dia lakukan.)',
    contoh2: '雨の日も毎日ボランティアをしている彼女には、本当に頭が下がる思いだ。\n(Aku benar-benar merasa kagum dan hormat pada dirinya yang melakukan kerja sukarela setiap hari bahkan saat hujan turun.)'
  }
];

window.vocabData.push(...kosakata_m8h3);