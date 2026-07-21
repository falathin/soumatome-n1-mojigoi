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
    arti: 'Tomat yang manis',
    penjelasan: 'Kata 甘い (amai) di sini merujuk pada arti dasarnya, yaitu rasa manis pada makanan atau minuman (seperti gula atau buah yang matang sempurna).',
    contoh1: 'このトマトは甘くておいしい。\n(Tomat ini manis dan enak.)',
    contoh2: '私は甘いお菓子が大好きです。\n(Saya sangat suka camilan yang manis.)',
    contoh3: 'このケーキは甘すぎないから食べやすい。\n(Kue ini tidak terlalu manis, jadi enak/mudah dimakan.)'
  },
  {
    id: 'm6h4_2',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'みそ汁が甘い',
    furigana: 'みそしるがあまい',
    arti: 'Sup miso yang kurang asin / hambar',
    penjelasan: 'Dalam konteks masakan berkuah, kata 甘い bukan berarti manis seperti gula, melainkan rasanya agak hambar atau kurang bumbu/garam.',
    contoh1: '今朝のみそ汁はちょっと甘い。\n(Sup miso pagi ini rasanya agak hambar / kurang asin.)',
    contoh2: '味が甘いので、少し塩を足してください。\n(Karena rasanya kurang asin, tolong tambahkan sedikit garam.)',
    contoh3: 'このスープは私には少し甘すぎる。\n(Sup ini terasa terlalu hambar/kurang bumbu bagi saya.)'
  },
  {
    id: 'm6h4_3',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '甘い声でささやく',
    furigana: 'あまいこえでささやく',
    arti: 'Membisikkan dengan suara yang lembut / manis',
    penjelasan: 'Di sini, kata 甘い digunakan sebagai kiasan untuk suara yang sangat lembut, memikat hati, ramah, dan enak didengar. Biasanya dipakai dalam konteks romantis atau rayuan.',
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
    arti: 'Terlalu memanjakan anak-anak',
    penjelasan: 'Jika digunakan untuk sifat seseorang, 甘い berarti tidak tegas, lembek, atau terlalu memanjakan. Ini menunjukkan orang tersebut kurang disiplin dalam mendidik.',
    contoh1: '彼は子どもたちに甘い。\n(Dia terlalu memanjakan anak-anaknya.)',
    contoh2: '先生はルールに関して少し甘いところがある。\n(Guru itu agak tidak tegas / lembek mengenai peraturan.)',
    contoh3: '自分に甘く、他人に厳しい。\n(Lembek/memanjakan diri sendiri, tapi keras terhadap orang lain.)'
  },
  {
    id: 'm6h4_5',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '考えが甘い',
    furigana: 'かんがえがあまい',
    arti: 'Pemikiran yang naif / Terlalu gampang (optimistis)',
    penjelasan: 'Frasa ini berarti pemikiran atau rencana seseorang terlalu menyepelekan masalah, naif, atau tidak memikirkan kesulitan di dunia nyata. Menunjukkan pola pikir yang dangkal.',
    contoh1: '君の考えは甘いよ。\n(Pemikiranmu terlalu naif / menyepelekan.)',
    contoh2: 'そんなに簡単に成功すると思うのは甘い。\n(Terlalu naif jika kamu berpikir bisa sukses semudah itu.)',
    contoh3: '甘い考えを捨てて、現実を見なさい。\n(Buanglah pemikiran naif itu dan tataplah realita.)'
  },
  {
    id: 'm6h4_6',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '受験したのは甘かった',
    furigana: 'じゅけんしたのはあまかった',
    arti: 'Terlalu meremehkan ujian',
    penjelasan: 'Merujuk pada sikap yang meremehkan tingkat kesulitan suatu tantangan (seperti ujian) sehingga kurang persiapan. Artinya, tebakannya kalau hal itu gampang ternyata salah besar.',
    contoh1: '準備なしで受験したのは甘かった。\n(Tindakan saya ikut ujian tanpa persiapan adalah sebuah kesalahan / terlalu meremehkan.)',
    contoh2: '相手の強さを甘く見ていたのが敗因だ。\n(Penyebab kekalahan adalah karena saya meremehkan kekuatan lawan.)',
    contoh3: 'こんなに難しいとは、私の認識が甘かった。\n(Saya terlalu meremehkannya sampai tidak menyangka ternyata sesulit ini.)'
  },
  {
    id: 'm6h4_7',
    minggu: '6',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '仕事を甘く見る',
    furigana: 'しごとをあまくみる',
    arti: 'Menganggap remeh / Menyepelekan pekerjaan',
    penjelasan: 'Kata 甘い diubah menjadi kata keterangan (甘く) dan digabungkan dengan kata kerja 見る (melihat). Artinya seseorang tidak menganggap serius suatu tugas dan menganggapnya terlalu mudah.',
    contoh1: '新しい仕事を甘く（＝簡単に）見てはいけない。\n(Jangan pernah menyepelekan pekerjaan baru ini.)',
    contoh2: 'プロの世界を甘く見るな。\n(Jangan anggap remeh dunia profesional.)',
    contoh3: '彼はいつも状況を甘く見る癖がある。\n(Dia punya kebiasaan selalu menganggap remeh suatu situasi.)'
  },
  {
    id: 'm6h4_8',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '見通しが甘い',
    furigana: 'みとおしがあまい',
    arti: 'Perkiraan yang terlalu optimistis',
    penjelasan: '見通し berarti prospek, rencana, atau prediksi masa depan. Jika disebut "甘い", berarti prediksinya terlalu optimistis, kurang teliti, dan rentan gagal karena tidak siap menghadapi skenario terburuk.',
    contoh1: '計画の見通しが甘かったため、失敗した。\n(Karena perkiraan rencana tersebut terlalu optimistis/kurang teliti, rencana itu gagal.)',
    contoh2: '売上の見通しが甘いと言わざるを得ない。\n(Saya terpaksa harus bilang bahwa prediksi penjualan ini terlalu optimistis.)',
    contoh3: '見通しが甘い経営はすぐに危機に陥る。\n(Manajemen yang perencanaannya naif akan segera jatuh ke dalam krisis.)'
  },
  {
    id: 'm6h4_9',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'ねじが甘い',
    furigana: 'ねじがあまい',
    arti: 'Sekrup yang longgar',
    penjelasan: 'Penggunaan unik dalam dunia mekanik. Jika komponen seperti sekrup, tutup botol, atau ikatan disebut 甘い, artinya tidak dikencangkan dengan benar, longgar, dan mudah lepas.',
    contoh1: 'このねじは甘い（＝ゆるい）からすぐに外れる。\n(Sekrup ini longgar, jadi cepat atau lambat akan lepas.)',
    contoh2: 'ふたの閉め方が甘かったので、水が漏れた。\n(Karena tutupnya kurang kencang/longgar, airnya bocor.)',
    contoh3: '結び目が甘いとほどけてしまいますよ。\n(Kalau ikatannya longgar, nanti akan terlepas lho.)'
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
    arti: 'Kursi yang keras',
    penjelasan: 'Merujuk pada bentuk fisik benda yang padat, pejal, tidak empuk, dan tidak berubah bentuk saat ditekan (seperti kayu atau batu). Lawan katanya adalah やわらかい (lembut/empuk).',
    contoh1: 'かたい椅子に長時間座って腰が痛い。\n(Duduk di kursi yang keras terlalu lama membuat pinggang saya sakit.)',
    contoh2: 'この肉はかたくて食べにくい。\n(Daging ini keras dan susah dimakan.)',
    contoh3: 'かたい地面の上で寝るのは辛い。\n(Tidur di atas tanah yang keras sangat menyiksa.)'
  },
  {
    id: 'm6h4_11',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'かたい握手を交わす',
    furigana: 'かたいあくしゅをかわす',
    arti: 'Berjabat tangan dengan erat / kuat',
    penjelasan: 'Digunakan sebagai kiasan untuk tindakan yang dilakukan dengan penuh keyakinan, bertenaga, dan mantap. Berjabat tangan dengan "かたい" berarti genggamannya kuat dan padu.',
    contoh1: '二人の大統領はかたい握手を交わした。\n(Kedua presiden tersebut saling berjabat tangan dengan erat.)',
    contoh2: 'チームメイトとかたい絆で結ばれている。\n(Saya terikat oleh ikatan persahabatan yang kuat dengan rekan setim.)',
    contoh3: '私たちはかたい約束をした。\n(Kami telah membuat janji yang teguh.)'
  },
  {
    id: 'm6h4_12',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '口がかたい',
    furigana: 'くちがかたい',
    arti: 'Pandai menjaga rahasia (Mulut yang rapat)',
    penjelasan: 'Ini adalah ungkapan idiom. Seseorang yang "mulutnya keras (rapat)" adalah orang yang sangat bisa dipercaya menjaga rahasia dan tidak suka bergosip. Lawan katanya adalah 口が軽い (mulut ember / suka membocorkan rahasia).',
    contoh1: '彼は口がかたいから、秘密を話しても大丈夫だ。\n(Dia orang yang pandai menjaga rahasia, jadi tidak masalah kalau kita beri tahu.)',
    contoh2: '口がかたい人だけが信用される。\n(Hanya orang yang pandai menjaga rahasia yang bisa dipercaya.)',
    contoh3: '職業柄、どうしても口がかたくなる。\n(Karena tuntutan pekerjaan, saya mau tak mau harus selalu tutup mulut/menjaga rahasia.)'
  },
  {
    id: 'm6h4_13',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '決意はかたい',
    furigana: 'けついはおかたい',
    arti: 'Tekad yang kuat / Keputusan yang bulat',
    penjelasan: 'Menunjukkan pendirian, keputusan, atau semangat yang pantang menyerah dan tidak mudah goyah oleh pengaruh luar. Menggambarkan ketangguhan mental seseorang.',
    contoh1: '彼の辞職する決意はかたい。\n(Tekadnya untuk mengundurkan diri sudah bulat / mantap.)',
    contoh2: '何度説得しても、彼女の意志はかたかった。\n(Walaupun sudah berkali-kali dibujuk, pendiriannya tetap teguh.)',
    contoh3: '勝利への思いがかたい。\n(Keinginan dan tekadnya untuk menang sangat kuat.)'
  },
  {
    id: 'm6h4_14',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '表情がかたい',
    furigana: 'ひょうじょうがかたい',
    arti: 'Ekspresi wajah yang kaku / Tegang',
    penjelasan: 'Saat dikaitkan dengan raut wajah atau gerakan tubuh, ini berarti seseorang terlihat sangat gugup, tegang (nervous), atau terlalu serius sampai tidak bisa tersenyum. Seolah-olah otot wajahnya "keras".',
    contoh1: '面接の前で、みんな表情がかたい。\n(Sebelum wawancara dimulai, raut wajah semua orang terlihat kaku dan tegang.)',
    contoh2: 'カメラの前に立つと、どうしても笑顔がかたくなる。\n(Saat berdiri di depan kamera, senyum saya pasti jadi kaku.)',
    contoh3: 'もっとリラックスして、かたい表情を和らげてください。\n(Tolong lebih relaks dan kurangi ketegangan di wajah itu.)'
  },
  {
    id: 'm6h4_15',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'かたい商売',
    furigana: 'かたいしょうばい',
    arti: 'Bisnis yang stabil / Aman',
    penjelasan: 'Dalam konteks bisnis, investasi, atau pekerjaan, "かたい" berarti minim risiko, sangat aman, konvensional, dan pasti mendatangkan keuntungan yang stabil walau mungkin tidak besar.',
    contoh1: '彼はかたい（＝安全な）商売をしている。\n(Dia menjalankan bisnis yang stabil dan aman.)',
    contoh2: '公務員はかたい職業だと言われている。\n(PNS disebut-sebut sebagai pekerjaan yang stabil dan terjamin.)',
    contoh3: 'リスクを避けて、かたい投資を選ぶ。\n(Menghindari risiko dan memilih investasi yang aman.)'
  },
  {
    id: 'm6h4_16',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '合格はかたい',
    furigana: 'ごうかくはかたい',
    arti: 'Kelulusannya sudah pasti / Terjamin',
    penjelasan: 'Dalam konteks hasil pertandingan, pemilu, atau ujian, "かたい" berarti peluang suksesnya hampir 100%, pasti, dan sangat sulit digoyahkan oleh pihak lawan.',
    contoh1: '今の成績なら、彼の合格はかたい（＝確実だ）。\n(Melihat nilainya sekarang, dia pasti akan lulus.)',
    contoh2: '今回の選挙は、現職の勝利がかたい。\n(Untuk pemilu kali ini, kemenangan petahana sudah dipastikan aman.)',
    contoh3: '優勝は彼らのチームでかたいだろう。\n(Gelar juara hampir dipastikan menjadi milik tim mereka.)'
  },
  {
    id: 'm6h4_17',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '頭がかたい',
    furigana: 'あたまがかたい',
    arti: 'Kepala batu / Keras kepala',
    penjelasan: 'Kiasan yang berarti seseorang (biasanya orang tua) berpikiran sempit, konservatif, tidak mau menerima ide baru, dan sangat keras kepala/bandel.',
    contoh1: '私の父は頭がかたくて、新しい意見を全く聞かない。\n(Ayah saya sangat keras kepala dan sama sekali tidak mau mendengar pendapat baru.)',
    contoh2: '年を取ると頭がかたくなりがちだ。\n(Saat usia makin bertambah, orang cenderung menjadi lebih keras kepala.)',
    contoh3: '頭がかたい上司の下で働くのは疲れる。\n(Bekerja di bawah bos yang kaku/konservatif sangat melelahkan.)'
  },
  {
    id: 'm6h4_18',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'かたい話',
    furigana: 'かたいはなし',
    arti: 'Topik pembicaraan yang berat / Serius',
    penjelasan: 'Merujuk pada suasana, buku, atau percakapan yang sangat formal, terlalu serius, rumit, atau kaku. Biasanya orang berkata "mari berhenti bicara topik yang berat" saat sedang bersantai.',
    contoh1: '飲み会だから、かたい話はやめよう。\n(Ini acara minum santai, jadi mari hentikan topik yang berat/serius ini.)',
    contoh2: '彼の書く文章は少しかたい。\n(Gaya penulisan karangannya agak kaku/terlalu formal.)',
    contoh3: 'かたい挨拶は抜きにして、楽しみましょう。\n(Mari kesampingkan ucapan pembukaan yang kaku dan langsung bersenang-senang.)'
  },
  {
    id: 'm6h4_19',
    minggu: '6',
    hari: '4',
    kategori: 'kata kerja',
    kanji: '外出をかたく禁ずる',
    furigana: 'がいしゅつをかたくきんずる',
    arti: 'Melarang keluar dengan tegas / keras',
    penjelasan: 'Kata "かたい" di sini menjadi kata keterangan (かたく) yang berarti "secara mutlak" atau "dengan sangat tegas". Sering digabungkan dengan kata kerja larangan atau penolakan.',
    contoh1: '夜間の外出をかたく禁ずる。\n(Keluar di malam hari dilarang dengan keras.)',
    contoh2: '社長はその提案をかたく拒否した。\n(Direktur menolak usulan tersebut dengan tegas.)',
    contoh3: '関係者以外の立ち入りはかたくお断りします。\n(Selain pihak yang berkepentingan dilarang keras masuk.)'
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
    arti: 'Penanganan yang buruk / Tidak tepat',
    penjelasan: 'Kata まずい biasanya untuk makanan yang "tidak enak". Tapi dalam pekerjaan, ini berarti cara seseorang menangani suatu masalah sangat buruk, tidak cekatan, dan bisa memicu masalah baru.',
    contoh1: 'クレームへの対応がまずかったため、客を怒らせてしまった。\n(Karena penanganan komplainnya sangat buruk, pelanggan itu jadi marah.)',
    contoh2: '初期対応がまずいと、被害が拡大する。\n(Jika penanganan awalnya buruk, kerugiannya akan makin membesar.)',
    contoh3: 'やり方がまずいから失敗するんだ。\n(Kamu gagal karena cara kerjamu yang payah/buruk.)'
  },
  {
    id: 'm6h4_21',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '顔がまずい',
    furigana: 'かおがまずい',
    arti: 'Wajah yang kurang menarik / Jelek',
    penjelasan: 'Ungkapan kasar yang berarti rupa atau penampilan fisik yang tidak tampan/cantik, atau jelek. (Catatan: Penggunaan ini sangat kasar dan sebaiknya dihindari dalam situasi sopan).',
    contoh1: '彼は性格はいいが顔がまずい（＝不細工だ）。\n(Sifatnya baik tapi wajahnya kurang menarik / jelek.)',
    contoh2: 'デザインがまずい商品は売れない。\n(Produk dengan desain yang jelek tidak akan laku.)',
    contoh3: '見た目がまずくても、味は最高です。\n(Meskipun penampilannya jelek, rasanya luar biasa.)'
  },
  {
    id: 'm6h4_22',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '歌がまずい',
    furigana: 'うたがまずい',
    arti: 'Nyanyian yang sumbang / Payah',
    penjelasan: 'Merujuk pada kemampuan atau keahlian seseorang yang sangat lemah atau tidak jago. Bisa digunakan untuk nyanyian, tulisan tangan, atau kerajinan.',
    contoh1: '彼の歌はまずい（＝下手だ）が、一生懸命歌っている。\n(Nyanyiannya sangat payah, tapi dia bernyanyi dengan sungguh-sungguh.)',
    contoh2: '字がまずくて読めない。\n(Tulisan tangannya sangat jelek sampai tidak bisa dibaca.)',
    contoh3: 'スピーチがまずくて、みんなを退屈させた。\n(Pidatonya sangat payah sampai membuat semua orang bosan.)'
  },
  {
    id: 'm6h4_23',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '人に聞かれるとまずい',
    furigana: 'ひとにきかれるとまずい',
    arti: 'Gawat / Berbahaya kalau sampai ketahuan orang',
    penjelasan: 'Merujuk pada situasi yang canggung, sensitif, atau akan memicu masalah besar jika diketahui orang lain. Sesuatu yang "まずい" di sini berarti "situasi yang sangat merugikan/gawat".',
    contoh1: 'この話は人に聞かれるとまずいので、小声で話そう。\n(Bahaya kalau percakapan ini didengar orang lain, mari bicara dengan suara pelan.)',
    contoh2: '遅刻したらまずいから、早く家を出よう。\n(Gawat kalau kita sampai telat, mari berangkat lebih awal.)',
    contoh3: '親に見つかるとまずい。\n(Gawat kalau sampai ketahuan orang tua.)'
  },
  {
    id: 'm6h4_24',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'まずいことになった',
    furigana: 'まずいことになった',
    arti: 'Berada dalam masalah besar / Situasi gawat',
    penjelasan: 'Ungkapan seruan (Waduh! / Gawat!) yang diucapkan saat keadaan tiba-tiba berubah memburuk, darurat, atau saat baru sadar melakukan kesalahan besar.',
    contoh1: 'パソコンのデータが全部消えて、まずいことになった。\n(Semua data di komputer terhapus, kita benar-benar dalam masalah besar!)',
    contoh2: '財布を落としてしまって、非常にまずい状況だ。\n(Dompet saya jatuh/hilang, ini benar-benar situasi yang gawat.)',
    contoh3: 'これはまずいぞ、急いで社長に報告しよう。\n(Ini gawat, ayo buru-buru laporkan ke direktur!)'
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
    penjelasan: 'Ini adalah makna harfiah (sebenarnya) dari kata 重い (omoi), yang merujuk pada ukuran fisik, massa, atau berat suatu benda dibandingkan benda lain.',
    contoh1: '酸素は水素より重い気体です。\n(Oksigen adalah gas yang lebih berat daripada hidrogen.)',
    contoh2: 'この荷物は一人で運ぶには重すぎる。\n(Barang ini terlalu berat untuk dibawa sendirian.)',
    contoh3: '体重が前より重くなった。\n(Berat badan saya bertambah dibanding sebelumnya.)'
  },
  {
    id: 'm6h4_26',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'ペダルが重い',
    furigana: 'ペダルがおもい',
    arti: 'Pedal sepeda terasa berat (susah dikayuh)',
    penjelasan: 'Menggambarkan tenaga fisik yang diperlukan untuk menggerakkan suatu benda. "Berat" di sini berarti butuh tenaga ekstra atau hambatannya terlalu kuat.',
    contoh1: '坂道なので、自転車のペダルが重い。\n(Karena jalanan menanjak, pedal sepeda terasa sangat berat.)',
    contoh2: 'このドアは重くてなかなか開かない。\n(Pintu ini berat dan susah dibuka.)',
    contoh3: '雪道を歩くのは足取りが重くなる。\n(Berjalan di jalan bersalju membuat langkah kaki terasa berat.)'
  },
  {
    id: 'm6h4_27',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '重い地位につく',
    furigana: 'おもいちいつく',
    arti: 'Memegang jabatan yang penting / Berat',
    penjelasan: 'Dalam konteks tanggung jawab, peran, atau hukuman, kata 重い berarti hal tersebut sangat penting, krusial, atau membebankan tanggung jawab yang besar pada seseorang.',
    contoh1: '彼は会社で重い（＝重要な）地位についている。\n(Dia memegang posisi/jabatan yang sangat penting / berat di perusahaan.)',
    contoh2: '重い責任を任されてプレッシャーを感じる。\n(Saya merasa tertekan karena dipercaya mengemban tanggung jawab yang berat.)',
    contoh3: '彼は重い罪を犯した。\n(Dia telah melakukan tindak kejahatan yang berat/serius.)'
  },
  {
    id: 'm6h4_28',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '頭が重い',
    furigana: 'あたまがおもい',
    arti: 'Kepala terasa berat / Penat',
    penjelasan: 'Secara fisik, ini berarti badan atau kepala terasa tidak segar, penat, pusing, atau kurang bertenaga karena sakit atau kurang tidur.',
    contoh1: '寝不足で頭が重い。\n(Kepala saya terasa penat/berat karena kurang tidur.)',
    contoh2: '風邪を引いたのか、体が重い。\n(Mungkin karena masuk angin, badan saya terasa sangat berat/lelah.)',
    contoh3: '胃が重くて食欲がない。\n(Perut saya terasa begah/berat dan saya tidak ada nafsu makan.)'
  },
  {
    id: 'm6h4_29',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: 'パソコンの動きが重い',
    furigana: 'パソコンのうごきがおもい',
    arti: 'Kinerja komputer lambat (lemot)',
    penjelasan: 'Dalam dunia teknologi (seperti komputer, HP, internet), "重い" adalah kiasan yang berarti perangkat atau koneksi tersebut sangat lambat (lemot) atau "lag" karena memori/prosesornya terbebani.',
    contoh1: 'アプリをたくさん開いていると、パソコンの動きが重くなる。\n(Kalau membuka banyak aplikasi, kinerja komputer akan jadi lambat/lemot.)',
    contoh2: '回線が混雑していて、ネットが重い。\n(Karena jaringan sedang sibuk, koneksi internet jadi lemot.)',
    contoh3: 'このゲームはデータが重すぎてスマホで遊べない。\n(Data game ini terlalu besar/berat sehingga tidak bisa dimainkan di HP.)'
  },
  {
    id: 'm6h4_30',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '気が重い',
    furigana: 'きがおもい',
    arti: 'Merasa berat hati / Suntuk (malas)',
    penjelasan: 'Idiom (気が重い) ini berarti kondisi emosi seseorang yang merasa terbebani, tertekan, tidak termotivasi, atau khawatir mengenai sesuatu yang harus dilakukannya.',
    contoh1: 'その仕事を断るのは気が重い。\n(Saya merasa berat hati untuk menolak pekerjaan itu.)',
    contoh2: '明日は苦手なテストがあるので、今から気が重い。\n(Besok ada ujian untuk mata pelajaran yang saya kurang kuasai, dari sekarang saya sudah merasa suntuk/malas.)',
    contoh3: '謝りに行くのは気が重い仕事だ。\n(Pergi untuk meminta maaf adalah tugas yang sangat berat di hati.)'
  },
  {
    id: 'm6h4_31',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '内容が重い',
    furigana: 'ないようがおもい',
    arti: 'Konten/topik yang berat / Serius (mencekam)',
    penjelasan: 'Saat digunakan untuk menjelaskan topik, film, berita, atau suasana, ini berarti pesannya sangat serius, mendalam, tragis, atau berat, sehingga tidak bisa dianggap main-main.',
    contoh1: '今日の会議の内容は重かった。\n(Konten rapat hari ini sangat berat/serius.)',
    contoh2: '戦争をテーマにした重い映画を見た。\n(Saya menonton film dengan tema perang yang sangat berat/kelam.)',
    contoh3: '空気（雰囲気）が重くて息苦しい。\n(Suasananya sangat berat/tegang sampai terasa sesak napas.)'
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
    penjelasan: 'Makna paling dasar dari 明るい (akarui). Selain berarti ruangan yang terang oleh cahaya, jika digabungkan dengan warna, artinya warna tersebut bernada terang dan cerah (Lawan kata: 暗い - gelap).',
    contoh1: '彼女は明るいブルーのシャツを着ている。\n(Dia memakai kemeja berwarna biru cerah.)',
    contoh2: '部屋をもっと明るい色に塗りたい。\n(Saya ingin mengecat kamar dengan warna yang lebih cerah.)',
    contoh3: '春らしい明るい服が欲しい。\n(Saya ingin baju berwarna cerah khas musim semi.)'
  },
  {
    id: 'm6h4_33',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '明るい性格',
    furigana: 'あかるいせいかく',
    arti: 'Kepribadian yang ceria',
    penjelasan: 'Jika merujuk pada karakter seseorang, artinya orang tersebut selalu terlihat riang, gembira, ramah, berpikiran positif, dan penuh semangat.',
    contoh1: '彼女は明るい性格で、誰からも好かれている。\n(Karena sifatnya yang ceria, dia disukai oleh semua orang.)',
    contoh2: 'つらい時でも明るく振る舞う。\n(Walau di saat sulit, dia tetap bersikap riang/ceria.)',
    contoh3: '彼がいると職場が明るくなる。\n(Kalau ada dia, suasana tempat kerja jadi ceria.)'
  },
  {
    id: 'm6h4_34',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '明るい声',
    furigana: 'あかるいこえ',
    arti: 'Suara yang riang',
    penjelasan: 'Menggambarkan nada suara atau cara bicara yang bernada tinggi, bersemangat, dan memancarkan perasaan gembira kepada pendengarnya.',
    contoh1: '電話越しに彼女の明るい声が聞こえた。\n(Dari seberang telepon, terdengar suaranya yang riang ceria.)',
    contoh2: 'いつも明るい声で挨拶をしてくれる。\n(Dia selalu menyapa dengan suara yang riang.)',
    contoh3: 'アナウンサーの明るい声で一日が始まる。\n(Hari saya dimulai dengan suara ceria penyiar radio itu.)'
  },
  {
    id: 'm6h4_35',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '見通しが明るい',
    furigana: 'みとおしがあかるい',
    arti: 'Prospek masa depan yang cerah',
    penjelasan: 'Kebalikan dari 見通しが甘い (terlalu optimistis/naif). 見通しが明るい membawa konotasi positif bahwa ada harapan kuat, prospek yang sangat bagus, dan peluang besar untuk sukses di masa depan.',
    contoh1: '新商品のヒットで、今後の見通しが明るい。\n(Karena produk baru laris manis, prospek masa depannya terlihat cerah.)',
    contoh2: '経済の回復により、未来は明るいと言える。\n(Karena pemulihan ekonomi, bisa dibilang masa depan kita cerah.)',
    contoh3: '手術は成功し、病状の見通しは明るい。\n(Operasi berhasil, dan prospek pemulihannya sangat positif/cerah.)'
  },
  {
    id: 'm6h4_36',
    minggu: '6',
    hari: '4',
    kategori: 'kata sifat',
    kanji: '政治に明るい',
    furigana: 'せいじにあかるい',
    arti: 'Sangat berpengetahuan / Paham betul soal politik',
    penjelasan: 'Jika digabungkan dengan pola (bidang/topik) + に明るい, artinya seseorang punya ilmu yang sangat mendalam, berpengalaman, dan wawasannya luas mengenai hal tersebut.',
    contoh1: '彼は政治に明るい（＝詳しい）。\n(Dia sangat berwawasan / paham betul tentang seluk-beluk politik.)',
    contoh2: 'この町の地理に明るい人に案内してもらう。\n(Kita akan dipandu oleh orang yang sangat paham dengan geografi kota ini.)',
    contoh3: 'IT関係に明るいスタッフを探している。\n(Kami sedang mencari staf yang punya pengetahuan mendalam tentang dunia IT.)'
  }
];

window.vocabData.push(...kosakata_m6h4);