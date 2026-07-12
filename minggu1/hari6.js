// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m1h6 = [
  // ==========================================
  // Bagian 1: Gejala Fisik & Kondisi Tubuh (体調・症状)
  // ==========================================
  {
    id: 'm1h6_1',
    minggu: '1',
    hari: '6',
    kategori: 'kata sifat',
    kanji: '体がだるい',
    furigana: 'からだがだるい',
    arti: 'Badan terasa lesu / lemas',
    penjelasan: 'Kondisi di mana seluruh tubuh terasa berat, tidak bertenaga, dan sangat malas atau sulit untuk bergerak. Gejala ini biasanya disebabkan oleh kelelahan fisik yang menumpuk, kurang tidur yang parah, atau sebagai gejala awal sebelum terserang penyakit seperti flu atau demam.',
    contoh1: '熱が39度もあって、起き上がれないほど体がだるいです。\n(Demamnya mencapai 39 derajat, dan badan terasa sangat lesu hingga saya tidak bisa bangun.)',
    contoh2: '最近、残業続きでしっかり寝ていないせいか、一日中体がだるくて仕事に集中できません。\n(Akhir-akhir ini, mungkin karena terus lembur dan tidak tidur nyenyak, badanku lemas seharian dan tidak bisa fokus bekerja.)'
  },
  {
    id: 'm1h6_2',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '寒気がする',
    furigana: 'さむけがする',
    arti: 'Merasa menggigil / Meriang',
    penjelasan: 'Perasaan dingin yang tiba-tiba menyerang tubuh dari dalam hingga menyebabkan tubuh gemetar, meskipun suhu ruangan tidak dingin. Ini biasanya merupakan pertanda kuat bahwa suhu tubuh akan naik (demam) atau gejala awal masuk angin yang membutuhkan istirahat.',
    contoh1: '夕方から急に悪寒（おかん）というか、背中ゾクゾクするような寒気がしてきたので、早めに薬を飲んで寝ます。\n(Sejak sore tiba-tiba merasa meriang seperti punggung merinding, jadi saya akan minum obat lebih awal dan tidur.)',
    contoh2: 'エアコンの風に当たりすぎたせいか、ひどい寒気がして風邪を引いたようです。\n(Mungkin karena terlalu banyak terkena angin AC, saya merasa sangat menggigil dan sepertinya terkena flu.)'
  },
  {
    id: 'm1h6_3',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '疲労で目がかすむ',
    furigana: 'ひろうでめがかすむ',
    arti: 'Mata berkunang-kunang / kabur karena kelelahan',
    penjelasan: 'Kondisi di mana pandangan mata menjadi tidak jelas, buram, berbayang, atau berkunang-kunang. Hal ini secara khusus terjadi akibat mata lelah karena terlalu lama menatap layar (seperti komputer atau ponsel), membaca di tempat gelap, atau karena akumulasi stres fisik dan kurang tidur.',
    contoh1: '毎日夜遅くまでパソコンの画面を見つめて仕事をしているため、疲労で目がかすんで文字が読みづらくなりました。\n(Karena bekerja menatap layar komputer sampai larut malam setiap hari, mataku kabur karena kelelahan sehingga huruf-huruf menjadi sulit dibaca.)',
    contoh2: '運転中に疲労で目がかすみ始めたら、すぐに車を停めて休憩を取るべきです。\n(Jika pandangan mulai berkunang-kunang karena kelelahan saat mengemudi, Anda harus segera menghentikan mobil dan beristirahat.)'
  },
  {
    id: 'm1h6_4',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '貧血になる',
    furigana: 'ひんけつになる',
    arti: 'Kekurangan darah / Anemia',
    penjelasan: 'Suatu kondisi medis di mana tubuh mengalami pusing, berkunang-kunang, atau bahkan hampir pingsan. Hal ini sering terjadi ketika berdiri terlalu cepat (hipotensi ortostatik), karena kurangnya zat besi dalam darah, atau tekanan darah yang sedang turun drastis.',
    contoh1: '朝礼で長時間立っていたら、急に貧血になって倒れそうになりました。\n(Saat berdiri terlalu lama di apel pagi, saya tiba-tiba terkena anemia/pusing dan hampir pingsan.)',
    contoh2: '彼女はもともと貧血になりやすい体質なので、普段から鉄分を多く含む食事を心がけています。\n(Karena pada dasarnya dia memiliki tubuh yang mudah terkena kurang darah, dia selalu memperhatikan untuk mengonsumsi makanan yang mengandung banyak zat besi.)'
  },
  {
    id: 'm1h6_5',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '安静にする',
    furigana: 'あんせいにする',
    arti: 'Beristirahat total / Menenangkan diri',
    penjelasan: 'Perintah atau anjuran medis untuk beristirahat secara fisik dan mental. Ini berarti tidak melakukan aktivitas berat sama sekali, lebih baik berbaring diam di tempat tidur, agar tubuh dapat fokus memulihkan diri dari penyakit atau cedera.',
    contoh1: '医者に「熱が下がるまでは無理をせず、家で絶対安静にするように」と厳しく言われました。\n(Dokter dengan tegas berkata kepada saya, "Jangan memaksakan diri sampai demam turun, pastikan beristirahat total di rumah.")',
    contoh2: '手術後はしばらくベッドの上で安静にして、傷口が開かないように注意しなければなりません。\n(Setelah operasi, harus beristirahat total di atas tempat tidur untuk sementara waktu dan berhati-hati agar luka tidak terbuka.)'
  },
  {
    id: 'm1h6_6',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja pasif)',
    kanji: '虫に刺される',
    furigana: 'むしにさされる',
    arti: 'Digigit serangga',
    penjelasan: 'Merupakan bentuk pasif dari kata kerja 刺す (menusuk/menggigit). Digunakan untuk mendeskripsikan kondisi di mana kulit disengat atau digigit oleh serangga seperti nyamuk, lebah, kutu, atau semut, yang biasanya meninggalkan bekas merah, bengkak, dan rasa gatal atau sakit.',
    contoh1: 'キャンプ場で半袖を着ていたら、たくさんの蚊や虫に刺されて腕が真っ赤に腫れてしまった。\n(Saat memakai baju lengan pendek di tempat perkemahan, saya digigit oleh banyak nyamuk dan serangga sehingga lengan membengkak merah.)',
    contoh2: 'もし蜂などの危険な虫に刺された場合は、すぐに病院で診察を受ける必要があります。\n(Jika Anda disengat/digigit serangga berbahaya seperti lebah, Anda harus segera pergi ke rumah sakit untuk diperiksa.)'
  },
  {
    id: 'm1h6_7',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja intransitif)',
    kanji: 'とげが刺さる',
    furigana: 'とげがささる',
    arti: 'Tertusuk duri',
    penjelasan: 'Kondisi di mana benda tajam berukuran kecil, seperti serpihan kayu, jarum kecil, atau duri tanaman, masuk dan menancap ke dalam kulit. Karena menggunakan kata kerja intransitif (刺さる), fokus kalimat ini adalah pada keadaan duri yang tertancap di kulit, bukan pada siapa yang menusukkannya.',
    contoh1: '庭でバラの世話をしていたら、誤って指に鋭いとげが深く刺さって血が出てきました。\n(Saat sedang merawat bunga mawar di kebun, jari saya tidak sengaja tertusuk duri tajam cukup dalam hingga berdarah.)',
    contoh2: '足の裏に木片のとげが刺さったままで、歩くたびにチクチクとした痛みを感じます。\n(Serpihan duri kayu masih menancap di telapak kaki, dan saya merasakan rasa sakit menusuk setiap kali berjalan.)'
  },
  {
    id: 'm1h6_8',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: 'めまいがする',
    furigana: 'めまいがする',
    arti: 'Merasa pusing / Berkunang-kunang',
    penjelasan: 'Kondisi di mana seseorang merasa pusing seolah-olah sekelilingnya berputar (vertigo), atau merasa kehilangan keseimbangan hingga goyah saat berdiri. Biasanya dipicu oleh kelelahan, anemia, tekanan darah rendah, atau gangguan pada telinga bagian dalam.',
    contoh1: '急に立ち上がった瞬間、目の前が真っ暗になってひどいめまいがしました。\n(Saat tiba-tiba berdiri, pandangan menjadi gelap total dan saya merasakan pusing berputar yang parah.)',
    contoh2: '熱中症の初期症状として、頭痛や吐き気だけでなく、めまいがすることもありますので注意してください。\n(Sebagai gejala awal serangan panas (heatstroke), selain sakit kepala dan mual, terkadang juga bisa merasa pusing berkunang-kunang, jadi berhati-hatilah.)'
  },
  {
    id: 'm1h6_9',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '意識がもうろうとする',
    furigana: 'いしきがもうろうとする',
    arti: 'Kesadaran sayup-sayup / Setengah sadar',
    penjelasan: 'Kondisi di mana pikiran seseorang tidak jernih, pandangan mengabur, dan kemampuan berpikir menurun drastis. Sering terjadi pada orang yang sedang demam sangat tinggi, kelelahan ekstrem, atau korban kecelakaan yang terbentur kepalanya namun belum sepenuhnya pingsan.',
    contoh1: '40度近い高熱が何日も続いたため、意識がもうろうとして自分がどこにいるのか分からなくなった。\n(Karena demam tinggi hampir 40 derajat berlanjut berhari-hari, kesadaran saya menjadi sayup-sayup dan tidak tahu di mana saya berada.)',
    contoh2: '遭難した登山者は発見されたとき、極度の寒さと疲労で意識がもうろうとしていました。\n(Saat ditemukan, pendaki gunung yang hilang tersebut dalam kondisi setengah sadar akibat kelelahan dan kedinginan yang ekstrem.)'
  },
  {
    id: 'm1h6_10',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '意識が遠ざかる',
    furigana: 'いしきがとおざかる',
    arti: 'Kesadaran perlahan menghilang / Mulai pingsan',
    penjelasan: 'Proses gradual di mana seseorang perlahan-lahan kehilangan kesadarannya hingga hampir pingsan, seolah-olah suara dan pemandangan di sekitarnya semakin menjauh. Bentuk transitif dari kata ini adalah (〜を) 遠ざける, yang berarti secara aktif menjauhkan sesuatu atau seseorang.',
    contoh1: '事故の激しい痛みに耐えきれず、次第に意識が遠ざかって気づいた時には病院のベッドの上でした。\n(Tidak tahan dengan rasa sakit yang luar biasa dari kecelakaan tersebut, kesadaran saya perlahan menghilang dan saat sadar sudah berada di atas ranjang rumah sakit.)',
    contoh2: '出血がひどく、救急車を待っている間にどんどん意識が遠ざかっていくのを感じた。\n(Pendarahannya sangat parah, saya merasa kesadaran semakin lama semakin menghilang saat sedang menunggu ambulans.)'
  },
  {
    id: 'm1h6_11',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '意識不明になる',
    furigana: 'いしきふめいになる',
    arti: 'Menjadi tidak sadar / Koma',
    penjelasan: 'Kondisi medis gawat darurat di mana seseorang kehilangan kesadaran secara total (pingsan berat atau koma). Dalam keadaan ini, pasien sama sekali tidak merespons rangsangan dari luar seperti suara, rasa sakit, atau cahaya.',
    contoh1: '彼はバイクの事故で頭を強く打ち、病院に運ばれた時にはすでに意識不明になっていました。\n(Dia membentur kepalanya dengan keras dalam kecelakaan motor, dan ketika dibawa ke rumah sakit dia sudah dalam keadaan tidak sadarkan diri/koma.)',
    contoh2: 'ニュースによると、火災現場から救出された男性は現在も意識不明の重体だそうです。\n(Menurut berita, pria yang diselamatkan dari lokasi kebakaran tersebut saat ini masih dalam kondisi kritis tidak sadarkan diri.)'
  },
  {
    id: 'm1h6_12',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '足首をねんざする',
    furigana: 'あしくびをねんざする',
    arti: 'Pergelangan kaki terkilir / Keseleo',
    penjelasan: 'Mengalami cedera otot, ligamen, atau sendi akibat gerakan memutar atau menekuk yang tiba-tiba secara tidak wajar. Kasus ini paling sering menimpa pergelangan kaki atau tangan saat berolahraga, berlari, atau terpeleset di jalan.',
    contoh1: 'サッカーの試合中に相手選手とぶつかり、着地に失敗して足首をひどくねんざしてしまった。\n(Saat bertanding sepak bola bertabrakan dengan pemain lawan, gagal mendarat dengan baik lalu pergelangan kakiku terkilir parah.)',
    contoh2: '階段を踏み外してねんざしたため、足が大きく腫れ上がって歩くことも困難です。\n(Karena salah pijak di tangga dan keseleo, kakiku membengkak besar sehingga kesulitan untuk berjalan.)'
  },
  {
    id: 'm1h6_13',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '打ったところがはれる',
    furigana: 'うったところがはれる',
    arti: 'Bagian yang terbentur membengkak',
    penjelasan: 'Reaksi peradangan di mana bagian tubuh (seperti kulit atau otot) membesar dan membengkak (はれる) karena adanya benturan keras (打つ). Biasanya disertai memar berwarna kebiruan, rasa panas, dan nyeri jika disentuh.',
    contoh1: '暗闇で急いで歩いていたため、ドアの角に頭を強くぶつけ、打ったところが大きくはれてしまいました。\n(Karena berjalan terburu-buru di tempat gelap, kepalaku membentur sudut pintu dengan keras, dan bagian yang terbentur itu membengkak besar.)',
    contoh2: '自転車で転んで膝を打ち、その打ったところが赤くはれてジンジン痛みます。\n(Jatuh dari sepeda dan membentur lutut, bagian yang terbentur itu membengkak merah dan terasa nyeri berdenyut.)'
  },
  {
    id: 'm1h6_14',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '足がむくむ',
    furigana: 'あしがむくむ',
    arti: 'Kaki membengkak (edema)',
    penjelasan: 'Pembengkakan yang terjadi akibat penumpukan cairan yang berlebihan di dalam jaringan tubuh, bukan karena benturan atau cedera. Sering dialami pada bagian betis atau kaki oleh orang yang duduk atau berdiri di satu tempat terlalu lama. Kata bendanya adalah むくみ.',
    contoh1: '飛行機の中で長時間座ったままだったため、血流が悪くなり足がパンパンにむくんでしまいました。\n(Karena duduk berlama-lama di dalam pesawat, aliran darah menjadi buruk dan kakiku bengkak secara penuh/membesar.)',
    contoh2: '足のむくみを解消するために、毎晩寝る前にお風呂に入りながらマッサージをしています。\n(Untuk menghilangkan bengkak di kaki, setiap malam sebelum tidur saya melakukan pijatan sambil berendam di air panas.)'
  },
  {
    id: 'm1h6_15',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '下痢をする',
    furigana: 'げりをする',
    arti: 'Diare',
    penjelasan: 'Gangguan sistem pencernaan yang ditandai dengan buang air besar yang sangat encer atau cair dan lebih sering dari biasanya. Biasanya disebabkan oleh infeksi bakteri dari makanan basi, keracunan makanan, stres, atau karena mengonsumsi terlalu banyak makanan pedas dan dingin.',
    contoh1: '屋台で食べた海鮮が古かったのか、昨日の夜から激しい腹痛と共に下痢をしていて辛いです。\n(Mungkin karena makanan laut yang kumakan di kedai kaki lima sudah tidak segar, sejak semalam aku mengalami sakit perut yang hebat disertai diare yang menyiksa.)',
    contoh2: '冷たいアイスクリームを食べすぎたせいで下痢をしてしまい、何度もトイレに駆け込みました。\n(Karena terlalu banyak makan es krim yang dingin, aku terkena diare dan berulang kali berlari ke toilet.)'
  },
  {
    id: 'm1h6_16',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '便秘になる',
    furigana: 'べんぴになる',
    arti: 'Sembelit / Susah buang air besar',
    penjelasan: 'Kondisi pencernaan di mana seseorang mengalami kesulitan yang signifikan untuk buang air besar (kebalikan dari diare). Hal ini umumnya diakibatkan oleh kurangnya asupan serat (seperti sayur dan buah), kurang minum air, atau tingkat stres yang tinggi.',
    contoh1: '最近、外食ばかりで野菜を全く食べていないため、ひどい便秘になってお腹が張っています。\n(Akhir-akhir ini, karena hanya makan di luar dan sama sekali tidak makan sayur, aku terkena sembelit parah dan perut terasa kembung penuh.)',
    contoh2: '便秘になりやすい体質なので、毎朝起きると必ずコップ一杯の水とヨーグルトを摂取するようにしています。\n(Karena saya punya tubuh yang mudah kena sembelit, setiap pagi bangun tidur saya pastikan minum segelas air dan makan yogurt.)'
  },
  {
    id: 'm1h6_17',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '妊娠する',
    furigana: 'にんしんする',
    arti: 'Hamil',
    penjelasan: 'Kondisi biologis di mana seorang wanita sedang mengandung janin di dalam rahimnya. Proses selanjutnya setelah kehamilan adalah melahirkan, yang dalam bahasa Jepang disebut dengan 出産 (しゅっさん) atau お産 (おさん).',
    contoh1: '結婚して３年目になりますが、先日妻が妊娠していることが分かり、家族全員で喜んでいます。\n(Tahun ini adalah tahun ke-3 pernikahan kami, tempo hari kami mengetahui bahwa istri saya hamil, dan seluruh keluarga sangat bergembira.)',
    contoh2: '彼女は妊娠中のため、重い荷物を持ったり激しい運動をしたりするのは避けた方がいいです。\n(Karena dia sedang hamil, sebaiknya menghindari membawa barang berat atau melakukan olahraga keras.)'
  },
  {
    id: 'm1h6_18',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '歯を矯正する',
    furigana: 'はをきょうせいする',
    arti: 'Memakai kawat gigi / Meratakan gigi',
    penjelasan: 'Tindakan perawatan ortodontik oleh dokter gigi untuk memperbaiki susunan gigi yang tidak rata atau rahang yang posisinya salah, umumnya menggunakan kawat gigi. Perawatan ini berfungsi tidak hanya untuk estetika, tetapi juga memperbaiki fungsi mengunyah.',
    contoh1: '子供の頃から歯並びが悪かったので、大人になってから自分のお金で歯を矯正することに決めました。\n(Karena susunan gigiku buruk sejak kecil, setelah dewasa saya memutuskan untuk meratakan gigi dengan biaya sendiri.)',
    contoh2: '歯を矯正している期間中は、硬いものや粘着性のある食べ物を避ける必要があります。\n(Selama masa meratakan gigi (memakai kawat), ada kebutuhan untuk menghindari makanan keras atau lengket.)'
  },
  {
    id: 'm1h6_19',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '湿疹ができる',
    furigana: 'しっしんができる',
    arti: 'Terkena eksim / Ruam kulit',
    penjelasan: 'Munculnya reaksi peradangan pada kulit berupa bintik-bintik merah, ruam, kulit kering mengelupas, yang biasanya disertai rasa gatal yang sangat mengganggu. Kondisinya mirip dengan じんましん (biduran/kaligata) namun penyebab dan penampilannya bisa sedikit berbeda.',
    contoh1: '新しく買ったボディソープが肌に合わなかったらしく、背中と腕に赤い湿疹ができてしまいました。\n(Sepertinya sabun mandi yang baru saya beli tidak cocok untuk kulit saya, sehingga muncul ruam/eksim merah di punggung dan lengan saya.)',
    contoh2: '赤ちゃんの柔らかい肌に湿疹ができているのを見つけ、すぐに皮膚科へ連れて行きました。\n(Saya melihat ada ruam pada kulit lembut bayi saya, lalu segera membawanya ke dokter kulit.)'
  },
  {
    id: 'm1h6_20',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '皮膚をかく',
    furigana: 'ひふをかく',
    arti: 'Menggaruk kulit',
    penjelasan: 'Tindakan menggesekkan kuku atau jari pada permukaan kulit untuk menghilangkan rasa gatal. Meskipun memberikan kelegaan sementara, menggaruk terlalu keras dapat merusak jaringan kulit, menyebabkan luka, atau memicu infeksi.',
    contoh1: '虫に刺された部分がとてもかゆいですが、皮膚を強くかいてしまうと跡が残るので我慢しています。\n(Bagian yang digigit serangga ini sangat gatal, namun kalau saya menggaruk kulit dengan keras akan meninggalkan bekas, jadi saya menahannya.)',
    contoh2: '寝ている間に無意識に顔の皮膚をかいてしまったようで、朝起きたら頬に引っかき傷がありました。\n(Sepertinya saya menggaruk kulit wajah secara tidak sadar saat tertidur, dan saat bangun pagi ada bekas cakaran di pipi saya.)'
  },
  {
    id: 'm1h6_21',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja pasif)',
    kanji: '猫に引っかかれる',
    furigana: 'ねこにひっかかれる',
    arti: 'Dicakar kucing',
    penjelasan: 'Kalimat bentuk pasif dari kata kerja 引っかく (mencakar). Menggambarkan situasi di mana seseorang mengalami luka goresan yang menyakitkan di kulit akibat terkena kuku tajam dari seekor kucing yang sedang marah atau sekadar bermain kasar.',
    contoh1: '野良猫を可愛がろうとして不用意に手を出したら、急に怒られて鋭い爪で引っかかれました。\n(Saat mencoba menyayangi kucing liar dan mengulurkan tangan tanpa berhati-hati, tiba-tiba dia marah dan mencakarku dengan kuku tajamnya.)',
    contoh2: '飼い猫と遊んでいる最中に興奮した猫に引っかかれて、腕から少し血が出てしまった。\n(Saat sedang bermain dengan kucing peliharaanku, aku dicakar oleh kucing yang terlalu bersemangat hingga lenganku mengeluarkan sedikit darah.)'
  },
  
  // ==========================================
  // Bagian 2: Perubahan Kondisi & Tindakan Medis (進行・治療)
  // ==========================================
  {
    id: 'm1h6_22',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '病気の進行が早まる',
    furigana: 'びょうきのしんこうがはやまる',
    arti: 'Perkembangan penyakit semakin cepat',
    penjelasan: 'Menggambarkan kondisi di mana suatu penyakit menyebar atau memburuk lebih cepat dari perkiraan medis (menggunakan kata kerja intransitif 早まる). Jika subjek (seseorang atau suatu tindakan) yang menyebabkan hal itu dipercepat, maka digunakan kata kerja transitif 早める (hayameru).',
    contoh1: '適切な治療を受けずに放置したせいで、残念ながら予想以上に病気の進行が早まってしまった。\n(Karena dibiarkan tanpa mendapatkan pengobatan yang tepat, sayangnya perkembangan penyakitnya menjadi lebih cepat dari yang diperkirakan.)',
    contoh2: 'ストレスや睡眠不足が原因で免疫力が低下し、結果的に病気の進行が早まることがあります。\n(Terkadang daya tahan tubuh menurun karena stres atau kurang tidur, yang pada akhirnya mempercepat perkembangan suatu penyakit.)'
  },
  {
    id: 'm1h6_23',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '体が弱る',
    furigana: 'からだがよわる',
    arti: 'Tubuh menjadi lemah',
    penjelasan: 'Kondisi di mana stamina, energi, atau daya tahan tubuh secara keseluruhan menurun drastis secara alami (intransitif). Penurunan fungsi fisik ini umumnya terjadi seiring bertambahnya usia, kelelahan parah yang berkepanjangan, atau akibat menderita suatu penyakit dalam waktu lama.',
    contoh1: '祖父は80歳を超えてから急に体が弱り始め、今では杖がないと一人で歩けなくなりました。\n(Kakek saya tiba-tiba tubuhnya mulai melemah setelah menginjak usia lebih dari 80 tahun, dan sekarang tidak bisa berjalan sendirian tanpa tongkat.)',
    contoh2: '大きな手術をした後は体力が落ちて体が弱っているため、無理をせずに休養をとることが大切です。\n(Setelah menjalani operasi besar, stamina akan menurun dan tubuh menjadi lemah, jadi penting untuk tidak memaksakan diri dan beristirahat.)'
  },
  {
    id: 'm1h6_24',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '痛みが強まる／弱まる',
    furigana: 'いたみがつよまる／よわまる',
    arti: 'Rasa sakit menguat / Melemah',
    penjelasan: 'Menjelaskan fluktuasi intensitas rasa sakit. 痛みが強まる berarti rasa sakit yang diderita semakin memburuk atau intens, sedangkan 弱まる berarti rasa sakit mulai mereda atau berkurang secara alami. Bentuk transitifnya adalah 強める (meningkatkan) dan 弱める (menurunkan).',
    contoh1: '薬の効き目が切れてきたのか、夜中になって再び歯の痛みが強まって眠れなくなりました。\n(Mungkin efek obatnya sudah habis, di tengah malam rasa sakit giginya kembali menguat dan aku tidak bisa tidur.)',
    contoh2: '注射を打って数時間安静にしていたら、徐々に頭痛の痛みが弱まってきてかなり楽になりました。\n(Setelah disuntik dan beristirahat total selama beberapa jam, perlahan-lahan sakit kepalanya melemah dan tubuh terasa jauh lebih nyaman.)'
  },
  {
    id: 'm1h6_25',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '痛みを和らげる',
    furigana: 'いたみをやわらげる',
    arti: 'Meredakan rasa sakit',
    penjelasan: 'Tindakan aktif (transitif) untuk mengurangi, menenangkan, atau mengendalikan intensitas rasa sakit, ketegangan, atau gejala penyakit, misalnya dengan menggunakan obat penghilang rasa sakit (painkiller) atau terapi fisik. Bentuk intransitifnya adalah 和らぐ (yawaragu), yang berarti mereda dengan sendirinya.',
    contoh1: '激しい胃の痛みを和らげるために、病院で処方された鎮痛剤をコップ一杯の水で飲みました。\n(Untuk meredakan rasa sakit lambung yang hebat, saya meminum obat pereda nyeri yang diresepkan oleh rumah sakit dengan segelas air.)',
    contoh2: '温かいお茶を飲んだり、リラックスできる音楽を聴いたりすることで、精神的な緊張や痛みを和らげることができます。\n(Dengan minum teh hangat atau mendengarkan musik yang merelaksasi, Anda bisa meredakan ketegangan mental maupun rasa sakit.)'
  },
  {
    id: 'm1h6_26',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: 'リハビリ（を）する',
    furigana: 'リハビリ（を）する',
    arti: 'Menjalani rehabilitasi',
    penjelasan: 'Proses melakukan terapi, latihan fisik, atau senam khusus dengan tujuan mengembalikan fungsi tubuh, fleksibilitas otot, atau kemampuan gerak yang hilang setelah mengalami kecelakaan berat, operasi, atau penyakit kritis. Juga sering disebut dengan ungkapan リハビリを受ける (menerima rehabilitasi).',
    contoh1: '交通事故で足を骨折したため、退院後も歩行能力を取り戻すために毎日専門の病院でリハビリをしています。\n(Karena patah tulang kaki akibat kecelakaan lalu lintas, bahkan setelah keluar dari RS saya melakukan rehabilitasi setiap hari di RS spesialis untuk mendapatkan kembali kemampuan berjalan.)',
    contoh2: 'リハビリをするのは痛くて辛いこともありますが、元の生活に戻るためには欠かせないプロセスです。\n(Menjalani rehabilitasi terkadang terasa sakit dan berat, tetapi ini adalah proses yang tak tergantikan untuk bisa kembali ke kehidupan semula.)'
  },
  {
    id: 'm1h6_27',
    minggu: '1',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '入院する',
    furigana: 'にゅういんする',
    arti: 'Masuk rumah sakit / Dirawat inap',
    penjelasan: 'Tindakan mendaftarkan diri dan masuk ke dalam bangsal rumah sakit untuk mendapatkan perawatan medis, observasi ketat, atau bersiap untuk operasi dalam jangka waktu tertentu. Lawan katanya adalah 退院する (たいいんする) yang berarti keluar atau diizinkan pulang dari rumah sakit.',
    contoh1: '突然激しい腹痛に襲われて救急車で運ばれ、そのまま急性盲腸炎で１週間入院することになりました。\n(Tiba-tiba terserang sakit perut hebat dan dibawa dengan ambulans, lalu langsung diputuskan harus dirawat inap selama 1 minggu karena radang usus buntu akut.)',
    contoh2: '彼の病気は自宅療養では治らないため、精密検査と集中的な治療を目的として明日から入院します。\n(Karena penyakitnya tidak akan sembuh hanya dengan perawatan di rumah, dia akan dirawat inap mulai besok untuk tujuan pemeriksaan menyeluruh dan perawatan intensif.)'
  },
  {
    id: 'm1h6_28',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '患者に付き添う',
    furigana: 'かんじゃにつきそう',
    arti: 'Mendampingi / Menemani pasien',
    penjelasan: 'Tindakan berada di sisi seseorang yang sedang membutuhkan bantuan, terutama merawat atau menemani pasien di rumah sakit, orang lanjut usia, atau anak-anak, guna memberikan dukungan moral maupun membantu aktivitas fisik mereka sehari-hari.',
    contoh1: '母親は重い病気で入院している小さな子供のベッドのそばで、昼夜を問わず献身的に患者に付き添っています。\n(Ibu itu tanpa peduli siang atau malam mendampingi pasien secara penuh dedikasi di sisi ranjang anak kecilnya yang dirawat karena penyakit berat.)',
    contoh2: '病院で一晩中付き添うのは肉体的にも精神的にも疲れますが、家族のためには必要なことです。\n(Menemani di rumah sakit semalaman memang melelahkan baik secara fisik maupun mental, namun itu hal yang dibutuhkan demi keluarga.)'
  },
  {
    id: 'm1h6_29',
    minggu: '1',
    hari: '6',
    kategori: 'frasa (kata kerja)',
    kanji: '面会に行く',
    furigana: 'めんかいにいく',
    arti: 'Pergi menjenguk / Bertemu',
    penjelasan: 'Tindakan pergi mengunjungi seseorang untuk bertemu atau berbicara langsung di sebuah institusi yang memiliki jam kunjungan resmi, seperti rumah sakit, panti jompo, atau fasilitas penahanan. Untuk secara khusus menjenguk dan menghibur orang yang sedang sakit, lebih umum menggunakan frasa お見舞いに行く (おみまいにいく).',
    contoh1: '仕事が終わった後、バイク事故で集中治療室に入院している親友の面会に行く予定です。\n(Setelah selesai bekerja, saya berencana pergi menjenguk sahabat saya yang dirawat di ICU karena kecelakaan motor.)',
    contoh2: '現在、感染症対策のため、病院のルールで家族以外の外部の人が患者へ面会に行くことは厳しく制限されています。\n(Saat ini, sebagai tindakan pencegahan penyakit menular, aturan rumah sakit sangat membatasi orang luar selain keluarga untuk menjenguk/bertemu dengan pasien.)'
  },

  // ==========================================
  // Bagian 3: Nama-nama Penyakit (病名 - Byoumei)
  // ==========================================
  {
    id: 'm1h6_30',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '癌（ガン）',
    furigana: 'がん',
    arti: 'Kanker',
    penjelasan: 'Penyakit medis serius di mana sel-sel abnormal (tumor ganas) tumbuh tak terkendali dan menyebar ke jaringan tubuh di sekitarnya. Dalam sistem penulisan bahasa Jepang modern, nama penyakit ini sangat sering dan lebih umum ditulis menggunakan huruf Katakana (ガン) agar mudah dibedakan dari kanji lain dan karena alasan konvensi medis.',
    contoh1: '彼は数年前に胃ガンを宣告されましたが、家族の支えもあって現在も勇敢に病魔と闘い続けています。\n(Dia didiagnosis menderita kanker lambung beberapa tahun lalu, tetapi dengan dukungan keluarganya, dia masih terus berani melawan penyakitnya hingga saat ini.)',
    contoh2: 'ガンは初期段階では自覚症状が少ないため、定期的な健康診断による早期発見・早期治療が非常に大切です。\n(Karena kanker memiliki sedikit gejala yang dapat disadari pada tahap awal, penemuan dini dan perawatan dini melalui pemeriksaan kesehatan rutin sangatlah penting.)'
  },
  {
    id: 'm1h6_31',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'ぜんそく',
    furigana: 'ぜんそく',
    arti: 'Asma',
    penjelasan: 'Penyakit radang kronis pada saluran pernapasan yang menyebabkan penderitanya sulit bernapas, dada terasa sesak, dan sering batuk berdahak. Serangan penyempitan saluran napas yang terjadi secara mendadak biasanya disebut ぜんそくの発作 (ほっさ).',
    contoh1: '私は子供の頃からぜんそくを持っているので、ホコリが多い場所や冷たい空気を吸うとすぐに咳が出ます。\n(Karena saya mengidap asma sejak kecil, saya akan langsung batuk jika berada di tempat banyak debu atau menghirup udara dingin.)',
    contoh2: '夜中に突然ぜんそくの発作が起きて呼吸ができなくなり、慌てて吸入薬を使って症状を抑えました。\n(Tiba-tiba terjadi serangan asma di tengah malam yang membuat saya tidak bisa bernapas, lalu saya panik dan menggunakan obat inhaler untuk menekan gejalanya.)'
  },
  {
    id: 'm1h6_32',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '気管支炎',
    furigana: 'きかんしえん',
    arti: 'Bronkitis',
    penjelasan: 'Kondisi medis berupa peradangan yang terjadi pada selaput lendir di saluran bronkus (pipa yang membawa udara ke paru-paru). Penyakit ini sering kali berawal dari flu biasa yang memburuk, menyebabkan batuk berdahak yang parah dan terus-menerus.',
    contoh1: 'ただの風邪だと思って無理をして働き続けた結果、症状をこじらせて重い気管支炎になってしまいました。\n(Akibat memaksakan diri terus bekerja karena mengira itu hanya flu biasa, gejalanya memburuk dan saya terkena bronkitis parah.)',
    contoh2: '病院の検査で気管支炎と診断され、激しく咳き込むため喉が痛くて声もまともに出せません。\n(Saya didiagnosis bronkitis dari hasil pemeriksaan RS, dan karena batuk yang sangat keras, tenggorokan saya sakit dan tidak bisa mengeluarkan suara dengan baik.)'
  },
  {
    id: 'm1h6_33',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '肺炎',
    furigana: 'はいえん',
    arti: 'Pneumonia / Radang paru-paru',
    penjelasan: 'Infeksi akut yang menyebabkan peradangan pada kantung udara (alveolus) di salah satu atau kedua paru-paru, yang kemudian dapat berisi cairan atau nanah. Penyakit ini bisa berakibat fatal, terutama bagi bayi, anak kecil, dan orang lanjut usia yang memiliki daya tahan tubuh lemah.',
    contoh1: 'お年寄りは免疫力が低下しているため、ただの風邪からあっという間に肺炎に進行しやすく注意が必要です。\n(Lansia memiliki daya tahan tubuh yang menurun, sehingga sangat mudah bagi flu biasa untuk berkembang cepat menjadi pneumonia, maka dari itu perlu berhati-hati.)',
    contoh2: '高熱とひどい呼吸困難が続いたため病院へ行くと、肺炎と診断され直ちに一週間入院することになった。\n(Karena demam tinggi dan sesak napas parah terus berlanjut, saya pergi ke RS, lalu didiagnosis radang paru-paru dan langsung disuruh dirawat inap selama seminggu.)'
  },
  {
    id: 'm1h6_34',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '皮膚炎',
    furigana: 'ひふえん',
    arti: 'Dermatitis / Radang kulit',
    penjelasan: 'Istilah umum untuk berbagai jenis peradangan pada kulit yang ditandai dengan kulit merah, bengkak, kering, dan gatal. Salah satu varian alergi kronis yang sangat umum dijumpai, terutama pada anak-anak hingga dewasa muda, disebut アトピー性皮膚炎 (Dermatitis atopik).',
    contoh1: '工場で強い薬品に直接触れた後、腕全体に皮膚炎を起こして赤くかぶれてしまった。\n(Setelah menyentuh langsung bahan kimia keras di pabrik, saya terkena dermatitis dan seluruh lengan saya menjadi merah serta ruam meradang.)',
    contoh2: '息子は生まれつきアトピー性皮膚炎を持っているので、毎晩お風呂上がりに必ず保湿剤と薬を全身に塗っています。\n(Karena putra saya dari lahir memiliki dermatitis atopik, setiap malam selesai mandi saya pastikan membalurkan krim pelembap dan obat ke seluruh tubuhnya.)'
  },
  {
    id: 'm1h6_35',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'うつ病',
    furigana: 'うつびょう',
    arti: 'Depresi',
    penjelasan: 'Penyakit gangguan kesehatan mental dan suasana hati yang ditandai dengan perasaan sedih yang mendalam, keputusasaan, dan hilangnya minat terhadap segala aktivitas secara terus-menerus. Ini bukan sekadar kesedihan biasa dan sering kali memerlukan penanganan secara medis atau psikologis.',
    contoh1: '職場での過酷な労働環境や人間関係のストレスが重なり、彼は精神を病んでうつ病になってしまいました。\n(Karena lingkungan kerja yang kejam dan akumulasi stres hubungan antarmanusia di tempat kerja, dia sakit mental dan terkena depresi.)',
    contoh2: 'うつ病は「心の風邪」とも呼ばれますが、放置せずに早めに専門の精神科クリニックで治療を受けるべきです。\n(Depresi juga sering disebut "flu bagi hati", namun tidak boleh dibiarkan, sebaiknya segera mendapatkan penanganan di klinik psikiatri spesialis.)'
  },
  {
    id: 'm1h6_36',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '認知症',
    furigana: 'にんちしょう',
    arti: 'Demensia / Pikun',
    penjelasan: 'Suatu sindrom atau kumpulan gejala klinis yang menandakan penurunan fungsi kognitif otak yang parah, yang memengaruhi ingatan jangka pendek, kemampuan berpikir logis, dan perilaku sehari-hari. Salah satu jenis demensia yang paling progresif dan terkenal adalah アルツハイマー病 (Penyakit Alzheimer).',
    contoh1: '85歳になる祖母は最近、昨日食べたものや家族の名前すら忘れてしまうなど、認知症の症状が顕著に出始めました。\n(Nenek saya yang berumur 85 tahun belakangan ini mulai menunjukkan gejala demensia yang menonjol, seperti melupakan apa yang dia makan kemarin bahkan nama anggota keluarga.)',
    contoh2: '現在、世界の多くの医療機関で、認知症の原因の一つであるアルツハイマー病を根本から治す薬の研究が進んでいます。\n(Saat ini, di berbagai institusi medis di dunia, penelitian tentang obat untuk menyembuhkan penyakit Alzheimer (salah satu penyebab demensia) dari akarnya sedang mengalami kemajuan.)'
  },
  {
    id: 'm1h6_37',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '熱中症',
    furigana: 'ねっちゅうしょう',
    arti: 'Serangan panas / Heatstroke',
    penjelasan: 'Kondisi medis gawat darurat yang sangat berbahaya akibat ketidakmampuan tubuh mendinginkan diri saat terpapar suhu lingkungan yang ekstrem, ditambah dengan kurangnya asupan cairan dan garam. Gejalanya meliputi pusing, mual, kejang otot, hingga hilangnya kesadaran.',
    contoh1: '日本の真夏は非常に気温が高く湿度も異常なため、外にいる時だけでなく室内でも熱中症に気をつけてください。\n(Karena puncak musim panas di Jepang suhunya sangat tinggi dan kelembapannya tak wajar, berhati-hatilah terhadap heatstroke tidak hanya saat di luar tetapi juga saat di dalam ruangan.)',
    contoh2: '運動中に適度な休憩と十分な水分をとらないと、急に倒れて重度の熱中症になる危険性が高いです。\n(Jika tidak mengambil istirahat yang cukup dan minum banyak air saat berolahraga, ada risiko tinggi Anda akan tiba-tiba pingsan dan terkena serangan panas tingkat berat.)'
  },
  {
    id: 'm1h6_38',
    minggu: '1',
    hari: '6',
    kategori: 'kata benda',
    kanji: '花粉症',
    furigana: 'かふんしょう',
    arti: 'Alergi serbuk sari / Hay fever',
    penjelasan: 'Alergi musiman yang sangat masif terjadi di Jepang, terutama meletus saat musim semi tiba akibat bertebarannya serbuk sari dari pepohonan seperti pohon cemara cedar (スギ) atau cemara Jepang (ヒノキ). Gejala utamanya meliputi bersin terus-menerus, hidung meler berair, serta mata yang gatal dan merah.',
    contoh1: '毎年春の季節になると、花粉症がひどくて目が猛烈に痒くなり、鼻水も止まらなくて本当に憂鬱（ゆううつ）です。\n(Setiap kali musim semi tiba di setiap tahunnya, alergi serbuk sariku parah sekali sehingga mata menjadi gatal luar biasa, ingus tidak berhenti keluar, dan membuatku benar-benar depresi/gundah.)',
    contoh2: '花粉症の症状を少しでも和らげるために、外出前には専用の薬を飲み、外では必ずマスクと花粉防止メガネを着用しています。\n(Untuk sedikit meredakan gejala alergi serbuk sari, saya minum obat khusus sebelum keluar rumah, dan saat di luar selalu memakai masker serta kacamata anti-serbuk sari.)'
  }
];

// Menambahkan kosakata dari file ini ke data master
window.vocabData.push(...kosakata_m1h6);