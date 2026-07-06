// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || []

const kosakata_m1h2 = [
  {
    id: 'm1h2_1',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '情けない',
    furigana: 'なさけない',
    arti: 'Menyedihkan / Memalukan',
    penjelasan:
      'Merasa malu atau menyedihkan terhadap diri sendiri atau suatu keadaan.',
    contoh1: 'また負けてしまって情けない。\n(Memalukan karena kalah lagi.)',
    contoh2: '情けない言い訳をする。\n(Membuat alasan yang menyedihkan.)'
  },
  {
    id: 'm1h2_2',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '望ましい',
    furigana: 'のぞましい',
    arti: 'Diharapkan / Ideal',
    penjelasan: 'Sesuatu yang paling baik atau diharapkan terjadi.',
    contoh1:
      '運動は毎日続けることが望ましい。\n(Diharapkan untuk terus berolahraga setiap hari.)',
    contoh2: '望ましい結果が得られた。\n(Mendapatkan hasil yang diharapkan.)'
  },
  {
    id: 'm1h2_3',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '好ましい',
    furigana: 'このましい',
    arti: 'Pantas / Disukai / Baik',
    penjelasan: 'Sesuatu yang memberikan kesan baik atau pantas.',
    contoh1: '好ましい服装。\n(Pakaian yang pantas/sopan.)',
    contoh2: '好ましい影響を与える。\n(Memberikan pengaruh yang baik.)'
  },
  {
    id: 'm1h2_4',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '申し分がない',
    furigana: 'もうしぶんがない',
    arti: 'Sempurna / Tidak ada cela',
    penjelasan: 'Sangat baik sehingga tidak ada hal yang perlu dikritik.',
    contoh1: '申し分（が）ない作品。\n(Karya yang sempurna / tidak ada cela.)',
    contoh2: '彼の態度は申し分ない。\n(Sikapnya sangat sempurna.)'
  },
  {
    id: 'm1h2_5',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '快い',
    furigana: 'こころよい',
    arti: 'Menyenangkan / Dengan senang hati',
    penjelasan:
      'Perasaan yang enak, nyaman, atau bersedia melakukan sesuatu tanpa keberatan.',
    contoh1: '申し出を快く承諾する。\n(Menerima tawaran dengan senang hati.)',
    contoh2: '快い返事。\n(Jawaban yang menyenangkan.)'
  },
  {
    id: 'm1h2_6',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'すがすがしい',
    furigana: 'すがすがしい',
    arti: 'Menyegarkan',
    penjelasan:
      'Perasaan segar dan bersih (biasanya tentang cuaca atau perasaan).',
    contoh1: 'すがすがしい朝。\n(Pagi yang menyegarkan.)',
    contoh2: 'すがすがしい気分になる。\n(Menjadi merasa segar.)'
  },
  {
    id: 'm1h2_7',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '爽快な',
    furigana: 'そうかいな',
    arti: 'Segar / Nyaman',
    penjelasan: 'Perasaan cerah, segar, dan bersemangat.',
    contoh1: '気分爽快。\n(Perasaan yang sangat segar/nyaman.)',
    contoh2: '爽快な目覚め。\n(Bangun tidur dengan segar.)'
  },
  {
    id: 'm1h2_8',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '待ち遠しい',
    furigana: 'まちどおしい',
    arti: 'Tidak sabar menunggu',
    penjelasan: 'Sangat menantikan sesuatu hingga rasanya tidak sabar.',
    contoh1:
      '春の訪れが待ち遠しい。\n(Tidak sabar menantikan datangnya musim semi.)',
    contoh2: '週末が待ち遠しい。\n(Tidak sabar menunggu akhir pekan.)'
  },
  {
    id: 'm1h2_9',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '心強い',
    furigana: 'こころづよい',
    arti: 'Merasa aman / Tenteram',
    penjelasan:
      'Merasa berani dan aman karena ada dukungan dari seseorang atau sesuatu.',
    contoh1: 'あなたと一緒だと心強い。\n(Merasa aman/tenteram jika bersamamu.)',
    contoh2: '彼の応援が心強い。\n(Dukungannya membuat saya merasa kuat/aman.)'
  },
  {
    id: 'm1h2_10',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '心細い',
    furigana: 'こころぼそい',
    arti: 'Cemas / Kesepian',
    penjelasan: 'Merasa tidak aman, kesepian, atau khawatir karena sendirian.',
    contoh1: '一人では心細い。\n(Merasa kesepian/cemas kalau sendirian.)',
    contoh2:
      '夜道は心細い。\n(Jalan malam hari terasa menakutkan/membuat cemas.)'
  },
  {
    id: 'm1h2_11',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '空しい',
    furigana: 'むなしい',
    arti: 'Hampa / Kosong / Sia-sia',
    penjelasan:
      'Perasaan kosong tanpa kegembiraan atau melakukan sesuatu yang tidak ada hasilnya.',
    contoh1:
      '喜びが何もない空しい生活。\n(Kehidupan yang hampa tanpa kebahagiaan sama sekali.)',
    contoh2: '空しい努力に終わった。\n(Berakhir menjadi usaha yang sia-sia.)'
  },
  {
    id: 'm1h2_12',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '切ない',
    furigana: 'せつない',
    arti: 'Sedih / Pilu',
    penjelasan:
      'Rasa sedih atau sesak di dada (biasanya karena cinta, perpisahan, dll).',
    contoh1:
      '彼と離れるのはとても切ない。\n(Sangat sedih/pilu harus berpisah dengannya.)',
    contoh2: '切ない恋の物語。\n(Kisah cinta yang pilu.)'
  },
  {
    id: 'm1h2_13',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '物足りない',
    furigana: 'ものたりない',
    arti: 'Kurang memuaskan',
    penjelasan: 'Merasa ada sesuatu yang kurang, belum cukup puas.',
    contoh1:
      '食事の量が物足りない。\n(Porsi makannya kurang memuaskan / kurang banyak.)',
    contoh2: 'この味付けは少し物足りない。\n(Bumbu ini terasa ada yang kurang.)'
  },
  {
    id: 'm1h2_14',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'わずらわしい',
    furigana: 'わずらわしい',
    arti: 'Merepotkan / Memusingkan',
    penjelasan: 'Sesuatu yang rumit, merepotkan, dan membuat lelah pikiran.',
    contoh1:
      '隣人との付き合いがわずらわしい。\n(Bergaul dengan tetangga itu merepotkan.)',
    contoh2: 'わずらわしい手続き。\n(Prosedur yang memusingkan.)'
  },
  {
    id: 'm1h2_15',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'うっとうしい',
    furigana: 'うっとうしい',
    arti: 'Suram / Mengganggu',
    penjelasan:
      'Cuaca yang mendung/suram atau hal/orang yang terasa mengganggu dan menjengkelkan.',
    contoh1: 'うっとうしい天気。\n(Cuaca yang suram/mendung berkelanjutan.)',
    contoh2:
      '彼の態度はうっとうしい。\n(Sikapnya sangat mengganggu/menjengkelkan.)'
  },
  {
    id: 'm1h2_16',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'うざい',
    furigana: 'うざい',
    arti: 'Menyebalkan / Mengganggu (Slang)',
    penjelasan:
      'Bahasa gaul/slang untuk "うっとうしい" atau "わずらわしい". Sangat mengganggu.',
    contoh1: 'あの人、本当にうざい。\n(Orang itu benar-benar menyebalkan.)',
    contoh2: 'うざい虫が飛んでいる。\n(Ada serangga mengganggu yang terbang.)'
  },
  {
    id: 'm1h2_17',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'ばかばかしい',
    furigana: 'ばかばかしい',
    arti: 'Konyol / Bodoh',
    penjelasan: 'Sesuatu yang sangat tidak masuk akal atau buang-buang waktu.',
    contoh1: 'ばかばかしい話。\n(Cerita yang konyol/bodoh.)',
    contoh2:
      'そんなことで怒るなんてばかばかしい。\n(Marah karena hal seperti itu sungguh konyol.)'
  },
  {
    id: 'm1h2_18',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '痛ましい',
    furigana: 'いたましい',
    arti: 'Menyedihkan / Mengenaskan',
    penjelasan:
      'Sesuatu yang sangat menyedihkan hingga membuat hati terasa sakit melihatnya.',
    contoh1: '痛ましい事故現場。\n(Lokasi kecelakaan yang mengenaskan.)',
    contoh2: '痛ましい姿。\n(Kondisi yang menyedihkan/memprihatinkan.)'
  },
  {
    id: 'm1h2_19',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'きまりが悪い',
    furigana: 'きまりがわるい',
    arti: 'Canggung / Malu',
    penjelasan:
      'Merasa canggung atau malu karena melakukan suatu kesalahan di depan orang lain.',
    contoh1:
      '会議に遅れてきまり（が）悪かった。\n(Merasa canggung/malu karena terlambat rapat.)',
    contoh2:
      '人前で転んで、きまりが悪かった。\n(Malu karena jatuh di depan orang.)'
  },
  {
    id: 'm1h2_20',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'あさましい',
    furigana: 'あさましい',
    arti: 'Hina / Memalukan (sifat)',
    penjelasan:
      'Sifat yang sangat buruk, memalukan, atau tamak hingga membuat orang lain muak.',
    contoh1: '彼は根性があさましい。\n(Sifat dasar/wataknya sangat hina.)',
    contoh2: 'あさましい争い。\n(Pertikaian yang memalukan.)'
  },
  {
    id: 'm1h2_21',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'おっかない',
    furigana: 'おっかない',
    arti: 'Menakutkan / Mengerikan',
    penjelasan:
      'Kata lain dari 怖い (kowai). Sering dipakai dalam bahasa lisan.',
    contoh1:
      'この辺りは夜になるとおっかない。\n(Daerah sini menjadi menakutkan saat malam hari.)',
    contoh2: 'おっかない顔で怒る。\n(Marah dengan wajah yang mengerikan.)'
  },
  {
    id: 'm1h2_22',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'ふさわしい',
    furigana: 'ふさわしい',
    arti: 'Pantas / Cocok',
    penjelasan: 'Sangat cocok atau tepat untuk suatu posisi atau situasi.',
    contoh1:
      '彼はリーダーとしてふさわしい。\n(Dia pantas sebagai seorang pemimpin.)',
    contoh2:
      'その場にふさわしい服装。\n(Pakaian yang cocok dengan acara tersebut.)'
  },
  {
    id: 'm1h2_23',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '見苦しい',
    furigana: 'みぐるしい',
    arti: 'Tidak pantas dilihat / Memalukan',
    penjelasan:
      'Penampilan atau sikap yang jelek/buruk sehingga membuat orang lain tidak nyaman melihatnya.',
    contoh1: '見苦しい態度。\n(Sikap yang memalukan / tidak pantas.)',
    contoh2:
      '見苦しい言い訳はやめなさい。\n(Hentikan alasan yang memalukan itu.)'
  },
  {
    id: 'm1h2_24',
    minggu: '1',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '心苦しい',
    furigana: 'こころぐるしい',
    arti: 'Merasa tidak enak hati / Bersalah',
    penjelasan:
      'Merasa bersalah atau membebani orang lain saat meminta tolong.',
    contoh1:
      'こんなことを頼むのは心苦しい。\n(Merasa tidak enak hati meminta hal semacam ini.)',
    contoh2:
      'お断りするのは心苦しいのですが…。\n(Saya merasa tidak enak hati untuk menolak, tapi...)'
  },
  {
    id: 'm1h2_25',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '焦る',
    furigana: 'あせる',
    arti: 'Panik / Terburu-buru',
    penjelasan:
      'Kehilangan ketenangan karena waktu yang mepet atau situasi darurat.',
    contoh1:
      '試験で時間がなくて焦った。\n(Saya panik karena tidak ada waktu saat ujian.)',
    contoh2:
      '焦ってミスをしてしまった。\n(Saya membuat kesalahan karena terburu-buru.)'
  },
  {
    id: 'm1h2_26',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'あきれる',
    furigana: 'あきれる',
    arti: 'Tercengang / Habis pikir',
    penjelasan:
      'Kaget yang bermakna negatif (karena sesuatu yang keterlaluan atau konyol).',
    contoh1:
      'あまりに高い値段にあきれた。\n(Tercengang melihat harganya yang terlalu mahal.)',
    contoh2:
      '彼のひどい態度にはあきれる。\n(Habis pikir dengan sikapnya yang buruk.)'
  },
  {
    id: 'm1h2_27',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '気に障る',
    furigana: 'きにさわる',
    arti: 'Menyinggung perasaan',
    penjelasan:
      'Sesuatu yang membuat orang lain merasa tersinggung atau tidak senang.',
    contoh1:
      '人の気に障るようなことを言ってはいけない。\n(Tidak boleh mengatakan hal yang menyinggung perasaan orang lain.)',
    contoh2:
      '私の言葉が彼の気に障ったようだ。\n(Sepertinya perkataanku menyinggung perasaannya.)'
  },
  {
    id: 'm1h2_28',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'しゃくに障る',
    furigana: 'しゃくにさわる',
    arti: 'Menjengkelkan / Membuat marah',
    penjelasan:
      'Sesuatu yang sangat memancing amarah atau membuat kesal (Bisa juga: かんに障る / kan ni sawaru).',
    contoh1: '彼の態度がしゃくに障った。\n(Sikapnya sangat menjengkelkan.)',
    contoh2:
      'かんに障る言い方をする。\n(Berbicara dengan cara yang bikin marah.)'
  },
  {
    id: 'm1h2_29',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '気兼ねする',
    furigana: 'きがねする',
    arti: 'Sungkan / Merasa tidak enak',
    penjelasan:
      'Merasa segan atau harus menjaga sikap karena berada di dekat orang lain.',
    contoh1:
      'ホームステイの家族に気兼ねする。\n(Merasa sungkan kepada keluarga homestay.)',
    contoh2:
      '気兼ねなく話せる友達。\n(Teman yang bisa diajak bicara tanpa rasa sungkan.)'
  },
  {
    id: 'm1h2_30',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'すねる',
    furigana: 'すねる',
    arti: 'Ngambek / Merajuk',
    penjelasan:
      'Sikap merajuk, biasanya pada anak-anak atau orang yang tidak dituruti keinginannya.',
    contoh1: '子どもがすねている。\n(Anak itu sedang ngambek.)',
    contoh2: '注意されてすねてしまった。\n(Dia merajuk karena ditegur.)'
  },
  {
    id: 'm1h2_31',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'むかつく',
    furigana: 'むかつく',
    arti: 'Kesal / Mual',
    penjelasan:
      'Bisa berarti kesal/marah melihat sesuatu, atau merasa mual di perut.',
    contoh1:
      '彼の顔を見るだけでむかつく。\n(Melihat wajahnya saja sudah membuatku kesal.)',
    contoh2: '船に酔って、胸がむかつく。\n(Mabuk laut, perutku terasa mual.)'
  },
  {
    id: 'm1h2_32',
    minggu: '1',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '恥をかく',
    furigana: 'はじをかく',
    arti: 'Mempermalukan diri sendiri',
    penjelasan:
      'Mengalami sesuatu yang membuat diri sendiri merasa sangat malu di depan umum.',
    contoh1:
      'みんなの前で恥をかいた。\n(Saya mempermalukan diri di depan semua orang.)',
    contoh2:
      'とんでもない間違いをして恥をかいた。\n(Malu banget karena membuat kesalahan fatal.)'
  }
]

// Menambahkan kosakata dari file ini ke data master
window.vocabData.push(...kosakata_m1h2)