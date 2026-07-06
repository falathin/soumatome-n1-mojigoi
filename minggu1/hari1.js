// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || []

const kosakata_m1h1 = [
  // --- GAMBAR 1: KOLOM KIRI ---
  {
    id: 'm1h1_1',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '愛想がいい',
    furigana: 'あいそがいい',
    arti: 'Ramah / Mudah bergaul',
    penjelasan:
      'Sifat orang yang ceria, murah senyum, dan menyenangkan saat berinteraksi dengan orang lain.',
    contoh1:
      '彼女は誰に対しても愛想がいい。\n(Dia ramah kepada sesiapa sahaja.)',
    contoh2:
      '店員の愛想がいいレストラン。\n(Restoran dengan pelayan yang ramah.)'
  },
  {
    id: 'm1h1_2',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'センスがいい',
    furigana: 'せんすがいい',
    arti: 'Selera yang bagus',
    penjelasan:
      'Memiliki cita rasa atau selera yang baik terhadap sesuatu (seperti pakaian, rekaan, dll).',
    contoh1:
      '彼は服のセンスがいい。\n(Dia mempunyai selera berpakaian yang bagus.)',
    contoh2:
      'センスがいい部屋ですね。\n(Bilik dengan hiasan/selera yang bagus ya.)'
  },
  {
    id: 'm1h1_3',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '気立てがいい',
    furigana: 'きだてがいい',
    arti: 'Baik hati / Berwatak baik',
    penjelasan:
      'Mempunyai sifat peribadi bawaan yang baik, hangat, dan lemah lembut.',
    contoh1: '気立てがいい奥さんですね。\n(Isteri yang baik hati ya.)',
    contoh2: '彼女は気立てがよくて優しい。\n(Dia berwatak baik dan lembut.)'
  },
  {
    id: 'm1h1_4',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'いさぎよい',
    furigana: 'いさぎよい',
    arti: 'Tegas / Kesatria / Terbuka',
    penjelasan:
      'Berani menerima kenyataan, mengakui kesilapan tanpa ragu-ragu dan tanpa banyak alasan.',
    contoh1:
      'いさぎよく罪を認める。\n(Mengakui kesalahan dengan berani / tanpa ragu.)',
    contoh2:
      '彼のいさぎよい態度に感心した。\n(Saya kagum dengan sikapnya yang tegas/kesatria.)'
  },
  {
    id: 'm1h1_5',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '情け深い',
    furigana: 'なさけぶかい',
    arti: 'Penuh belas kasihan / Simpatik',
    penjelasan:
      'Mempunyai rasa empati yang tinggi dan mudah bersimpati pada penderitaan orang lain.',
    contoh1:
      '情け深い人に出会った。\n(Saya bertemu dengan orang yang penuh belas kasihan.)',
    contoh2:
      '彼はとても情け深い性格です。\n(Dia mempunyai personaliti yang sangat simpatik.)'
  },
  {
    id: 'm1h1_6',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '用心深い',
    furigana: 'ようじんぶかい',
    arti: 'Berhati-hati / Waspada',
    penjelasan:
      'Sangat berhati-hati dalam bertindak untuk mengelakkan bahaya atau kesilapan.',
    contoh1: '彼は用心深い性格だ。\n(Dia bersifat sangat berhati-hati.)',
    contoh2: '用心深く周りを見る。\n(Melihat sekeliling dengan penuh waspada.)'
  },
  {
    id: 'm1h1_7',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'りりしい',
    furigana: 'りりしい',
    arti: 'Gagah / Tampan berwibawa',
    penjelasan: 'Kelihatan gagah, berani, dan mempunyai aura yang dihormati.',
    contoh1:
      'りりしい姿に感動した。\n(Terharu melihat susuk tubuhnya yang gagah.)',
    contoh2:
      '彼は制服を着るとりりしい。\n(Dia nampak gagah apabila memakai seragam.)'
  },
  {
    id: 'm1h1_8',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '若々しい',
    furigana: 'わかわかしい',
    arti: 'Kelihatan muda / Awet muda',
    penjelasan: 'Kelihatan lebih muda dan bertenaga daripada usia sebenar.',
    contoh1: '祖母はいつも若々しい。\n(Nenek selalu kelihatan awet muda.)',
    contoh2: '若々しい声ですね。\n(Suara yang kedengaran muda ya.)'
  },
  {
    id: 'm1h1_9',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '勇ましい',
    furigana: 'いさましい',
    arti: 'Berani / Perkasa',
    penjelasan:
      'Berani menghadapi bahaya atau kelihatan penuh semangat perjuangan.',
    contoh1: '勇ましい声で叫ぶ。\n(Menjerit dengan suara yang perkasa.)',
    contoh2: '彼の勇ましい姿を見た。\n(Saya melihat kelibatnya yang berani.)'
  },
  {
    id: 'm1h1_10',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'たくましい',
    furigana: 'たくましい',
    arti: 'Kuat / Sasa / Tabah',
    penjelasan:
      'Mempunyai tubuh yang kuat atau semangat yang tabah dan tidak mudah mengalah.',
    contoh1:
      'たくましい体をしている。\n(Mempunyai tubuh badan yang sasa/kuat.)',
    contoh2:
      'どんな困難にも負けないたくましい精神。\n(Semangat tabah yang tidak kalah pada sebarang kesukaran.)'
  },
  {
    id: 'm1h1_11',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '思いやりがある',
    furigana: 'おもいやりがある',
    arti: 'Penuh bertimbang rasa',
    penjelasan:
      'Sifat memahami dan menjaga perasaan serta keperluan orang lain.',
    contoh1:
      '彼女は思いやりがある人だ。\n(Dia adalah orang yang penuh bertimbang rasa.)',
    contoh2:
      '思いやりのある言葉をかける。\n(Memberikan kata-kata yang penuh perhatian.)'
  },
  {
    id: 'm1h1_12',
    minggu: '1',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '思いやる',
    furigana: 'おもいやる',
    arti: 'Mengambil berat / Bersimpati',
    penjelasan:
      'Tindakan mengambil berat tentang kesusahan atau perasaan orang lain.',
    contoh1:
      '相手の立場を思いやる。\n(Memahami / bersimpati dengan situasi orang lain.)',
    contoh2:
      '人を思いやる心を持つ。\n(Mempunyai hati yang mengambil berat tentang orang lain.)'
  },
  {
    id: 'm1h1_13',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '気品がある',
    furigana: 'きひんがある',
    arti: 'Anggun / Bermartabat',
    penjelasan:
      'Mempunyai perwatakan atau aura yang elegan, berkelas, dan dihormati.',
    contoh1: '彼女のしぐさには気品がある。\n(Tingkah lakunya sangat anggun.)',
    contoh2: '気品がある家具。\n(Perabot yang nampak mewah/berkelas.)'
  },
  {
    id: 'm1h1_14',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '色気がある',
    furigana: 'いろけがある',
    arti: 'Seksi / Mempunyai daya tarikan',
    penjelasan:
      'Mempunyai daya tarikan seksual atau daya tarikan yang mempesonakan.',
    contoh1: '色気がある女性。\n(Wanita yang mempunyai daya tarikan/seksi.)',
    contoh2:
      '彼の声には色気がある。\n(Suaranya mempunyai daya tarikan tersendiri.)'
  },
  {
    id: 'm1h1_15',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'しとやかな',
    furigana: 'しとやかな',
    arti: 'Lemah lembut / Sopan santun',
    penjelasan:
      'Sifat tenang, sopan, dan anggun, selalunya digunakan untuk wanita.',
    contoh1:
      'しとやかな女性に憧れる。\n(Kagum dengan wanita yang lemah lembut.)',
    contoh2: '彼女はしとやかに歩く。\n(Dia berjalan dengan penuh sopan santun.)'
  },
  {
    id: 'm1h1_16',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'チャーミングな',
    furigana: 'ちゃーみんぐな',
    arti: 'Menawan (Charming)',
    penjelasan: 'Sangat menarik hati, manis, dan comel.',
    contoh1:
      '彼女の笑顔はとてもチャーミングだ。\n(Senyumannya sangat menawan.)',
    contoh2:
      'チャーミングなドレスですね。\n(Gaun yang sangat cantik/menarik ya.)'
  },
  {
    id: 'm1h1_17',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '気まぐれな',
    furigana: 'きまぐれな',
    arti: 'Suka berubah angin / Tidak menentu',
    penjelasan:
      'Perasaan atau tindakan yang mudah berubah-ubah tanpa sebab yang jelas.',
    contoh1:
      '猫は気まぐれな動物だ。\n(Kucing adalah haiwan yang suka berubah angin.)',
    contoh2:
      '気まぐれな性格に疲れる。\n(Penat dengan sikapnya yang tidak menentu.)'
  },
  {
    id: 'm1h1_18',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '近寄りがたい',
    furigana: 'ちかよりがたい',
    arti: 'Sukar didekati',
    penjelasan:
      'Kelihatan tegas, dingin, atau terlalu hebat sehingga orang segan untuk menegur.',
    contoh1:
      '社長は近寄りがたい雰囲気がある。\n(Presiden syarikat mempunyai aura yang sukar didekati.)',
    contoh2:
      '美人すぎて近寄りがたい。\n(Terlalu cantik sehingga segan untuk didekati.)'
  },
  {
    id: 'm1h1_19',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '無口な',
    furigana: 'むくちな',
    arti: 'Pendiam',
    penjelasan: 'Orang yang tidak banyak bercakap.',
    contoh1: '父は無口な人です。\n(Ayah saya seorang yang pendiam.)',
    contoh2: '無口だけど優しい。\n(Pendiam tetapi baik hati.)'
  },
  {
    id: 'm1h1_20',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '陰気な',
    furigana: 'いんきな',
    arti: 'Muram / Suram',
    penjelasan: 'Suasana atau watak yang gelap, sedih, dan tidak ceria.',
    contoh1:
      '雨の日は陰気な気分になる。\n(Hari hujan membuatkan mood menjadi muram.)',
    contoh2:
      '陰気な性格を直したい。\n(Ingin mengubah personaliti yang suram ini.)'
  },

  // --- GAMBAR 1: KOLOM KANAN ---
  {
    id: 'm1h1_21',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'まめな',
    furigana: 'まめな',
    arti: 'Rajin / Teliti',
    penjelasan:
      'Suka mengambil berat dan rajin melakukan perkara-perkara kecil atau rutin tanpa malas.',
    contoh1: '彼はまめに連絡をくれる。\n(Dia rajin/selalu menghubungi saya.)',
    contoh2: 'まめな性格の人。\n(Orang yang berpewatakan teliti dan rajin.)'
  },
  {
    id: 'm1h1_22',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '生真面目な',
    furigana: 'きまじめな',
    arti: 'Sangat serius',
    penjelasan:
      'Terlalu serius dan jujur, kadang-kadang terlalu kaku sehingga tidak tahu bergurau.',
    contoh1: '彼は生真面目すぎる。\n(Dia terlalu serius.)',
    contoh2:
      '生真面目な顔で冗談を言う。\n(Bercanda dengan wajah yang sangat serius.)'
  },
  {
    id: 'm1h1_23',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '勤勉な',
    furigana: 'きんべんな',
    arti: 'Rajin bekerja / Tekun',
    penjelasan: 'Berusaha keras dan rajin dalam pelajaran atau pekerjaan.',
    contoh1:
      '日本人は勤勉だと言われている。\n(Orang Jepun dikatakan sangat rajin.)',
    contoh2: '勤勉な学生。\n(Pelajar yang tekun.)'
  },
  {
    id: 'm1h1_24',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '誠実な',
    furigana: 'せいじつな',
    arti: 'Jujur / Ikhlas',
    penjelasan: 'Boleh dipercayai, jujur, dan tidak berbohong.',
    contoh1:
      '誠実な態度で謝る。\n(Meminta maaf dengan sikap yang jujur/ikhlas.)',
    contoh2: '彼は誠実な青年だ。\n(Dia adalah seorang pemuda yang ikhlas.)'
  },
  {
    id: 'm1h1_25',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'まともな',
    furigana: 'まともな',
    arti: 'Wajar / Sepatutnya / Betul',
    penjelasan:
      'Sesuatu yang dianggap normal, boleh diterima akal, atau jujur.',
    contoh1:
      'まともな人間になりたい。\n(Ingin menjadi manusia yang betul/berguna.)',
    contoh2:
      'まともな理由を言ってください。\n(Tolong berikan alasan yang wajar.)'
  },
  {
    id: 'm1h1_26',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '大柄な',
    furigana: 'おおがらな',
    arti: 'Bertubuh besar',
    penjelasan:
      'Mempunyai saiz badan yang lebih besar atau tinggi berbanding purata.',
    contoh1: '彼は大柄な男性だ。\n(Dia seorang lelaki bertubuh besar.)',
    contoh2: '大柄な人向けの服。\n(Pakaian untuk orang bertubuh besar.)'
  },
  {
    id: 'm1h1_27',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '小柄な',
    furigana: 'こがらな',
    arti: 'Bertubuh kecil (Mungil)',
    penjelasan: 'Mempunyai saiz badan yang kecil atau rendah.',
    contoh1: '小柄な女性。\n(Wanita bertubuh kecil.)',
    contoh2: '小柄だが力は強い。\n(Bertubuh kecil tetapi kuat.)'
  },
  {
    id: 'm1h1_28',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '活発な',
    furigana: 'かっぱつな',
    arti: 'Aktif / Lincah',
    penjelasan: 'Banyak bergerak, ceria, dan penuh bertenaga.',
    contoh1: '活発な子供。\n(Kanak-kanak yang aktif.)',
    contoh2:
      '活発な議論が行われた。\n(Perbincangan yang aktif telah dijalankan.)'
  },
  {
    id: 'm1h1_29',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '有望な',
    furigana: 'ゆうぼうな',
    arti: 'Berpotensi / Menjanjikan',
    penjelasan: 'Mempunyai harapan dan masa depan yang cerah untuk berjaya.',
    contoh1: '前途有望な若者。\n(Anak muda yang masa depannya cerah.)',
    contoh2: '有望な市場。\n(Pasaran yang menjanjikan.)'
  },
  {
    id: 'm1h1_30',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '純粋な',
    furigana: 'じゅんすいな',
    arti: 'Murni / Suci / Tidak bersalah',
    penjelasan:
      'Bersih dari segi niat, tidak mempunyai niat jahat, atau asli (tidak bercampur).',
    contoh1: '純粋な心を持つ。\n(Mempunyai hati yang suci.)',
    contoh2: '子供の純粋な質問。\n(Soalan murni daripada kanak-kanak.)'
  },
  {
    id: 'm1h1_31',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '無邪気な',
    furigana: 'むじゃきな',
    arti: 'Polos / Keanak-anakan',
    penjelasan:
      'Tidak mempunyai niat tersembunyi, bertindak mengikut perasaan seperti kanak-kanak.',
    contoh1: '無邪気な笑顔。\n(Senyuman yang polos.)',
    contoh2:
      '子供が抱く無邪気な夢。\n(Impian keanak-anakan yang dipegang oleh seorang budak.)'
  },
  {
    id: 'm1h1_32',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '温和な',
    furigana: 'おんわな',
    arti: 'Lemah lembut / Tenang',
    penjelasan: 'Sifat yang tenang, tidak mudah marah, atau cuaca yang nyaman.',
    contoh1: '温和な気候。\n(Cuaca yang nyaman/sederhana.)',
    contoh2: '彼は温和な性格だ。\n(Dia mempunyai watak yang lemah lembut.)'
  },
  {
    id: 'm1h1_33',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '気さくな',
    furigana: 'きさくな',
    arti: 'Peramah / Mudah diajak berbual',
    penjelasan:
      'Sangat bersahaja, tidak sombong, dan senang bergaul dengan orang lain.',
    contoh1: '気さくに話しかける。\n(Menegur dengan ramah.)',
    contoh2: '彼はとても気さくな人です。\n(Dia orang yang sangat peramah.)'
  },
  {
    id: 'm1h1_34',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'おおらかな',
    furigana: 'おおらかな',
    arti: 'Berjiwa besar / Terbuka / Santai',
    penjelasan:
      'Tidak mudah kisah akan perkara remeh, berfikiran luas, dan tenang.',
    contoh1: 'おおらかな性格の母。\n(Ibu yang berjiwa besar / santai.)',
    contoh2:
      '大自然の中でおおらかな気持ちになる。\n(Berasa lapang/tenang di tengah-tengah alam semula jadi.)'
  },
  {
    id: 'm1h1_35',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '素朴な',
    furigana: 'そぼくな',
    arti: 'Sederhana / Biasa (Simple)',
    penjelasan:
      'Tidak dihias secara berlebihan, bersahaja, atau soalan yang asas/mudah.',
    contoh1: '素朴な疑問を持つ。\n(Mempunyai soalan yang mudah/asas.)',
    contoh2: '素朴な味の料理。\n(Masakan dengan rasa yang sederhana/asli.)'
  },
  {
    id: 'm1h1_36',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'デリケートな',
    furigana: 'でりけーとな',
    arti: 'Sensitif / Halus (Delicate)',
    penjelasan:
      'Perlu dikendalikan dengan berhati-hati, sama ada melibatkan perasaan, keadaan fizikal, atau isu sensitif.',
    contoh1: 'デリケートな問題。\n(Masalah yang sensitif.)',
    contoh2:
      '彼女はデリケートな肌をしている。\n(Dia mempunyai kulit yang sensitif.)'
  },
  {
    id: 'm1h1_37',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '物好きな',
    furigana: 'ものずきな',
    arti: 'Mempunyai cita rasa pelik / Suka mencuba',
    penjelasan:
      'Suka kepada perkara yang tidak diminati orang lain atau pelik.',
    contoh1:
      'こんな日に出かけるなんて物好きだね。\n(Keluar pada hari (buruk) begini, sungguh pelik/luar biasa minatmu.)',
    contoh2: '物好きな人。\n(Orang yang mempunyai selera ganjil.)'
  },
  {
    id: 'm1h1_38',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '孤独な',
    furigana: 'こどくな',
    arti: 'Kesepian / Terasing',
    penjelasan: 'Keadaan keseorangan tanpa teman atau berasa sunyi.',
    contoh1: '孤独な生活を送る。\n(Menjalani kehidupan yang sunyi.)',
    contoh2: '都会の孤独。\n(Kesepian di kota raya.)'
  },
  {
    id: 'm1h1_39',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '臆病な',
    furigana: 'おくびょうな',
    arti: 'Penakut / Pengecut',
    penjelasan: 'Mudah berasa takut akan sesuatu perkara baharu atau cabaran.',
    contoh1: '臆病な犬。\n(Anjing yang penakut.)',
    contoh2:
      '彼は臆病で何もできない。\n(Dia penakut dan tidak boleh buat apa-apa.)'
  },

  // --- GAMBAR 2: KOLOM KIRI ---
  {
    id: 'm1h1_40',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'なれなれしい',
    furigana: 'なれなれしい',
    arti: 'Sok akrab / Terlalu mesra',
    penjelasan:
      'Bersikap terlalu dekat dengan orang yang tidak begitu dikenali, yang selalunya dianggap menjengkelkan.',
    contoh1:
      '初対面なのになれなれしい人だ。\n(Orang yang sok akrab walhal baru pertama kali bertemu.)',
    contoh2:
      'なれなれしい態度は嫌われる。\n(Sikap terlalu sok akrab selalunya tidak disukai.)'
  },
  {
    id: 'm1h1_41',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'いやらしい',
    furigana: 'いやらしい',
    arti: 'Gatal (Mesum) / Menjijikkan',
    penjelasan:
      'Tingkah laku yang menjolok mata, kotor, tidak senonoh, atau membuat orang berasa tidak selesa.',
    contoh1:
      'いやらしい目つきで見る。\n(Memandang dengan pandangan yang gatal/mesum.)',
    contoh2:
      '彼はいやらしい言い方をする。\n(Dia bercakap dengan cara yang menyakitkan hati/sinis.)'
  },
  {
    id: 'm1h1_42',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '卑しい',
    furigana: 'いやしい',
    arti: 'Tamak / Hina (Low-minded)',
    penjelasan:
      'Sangat tamak (terutama terhadap makanan atau wang), atau status/pekerjaan yang dianggap rendah.',
    contoh1: '食べ物に卑しい。\n(Sangat tamak/gelojoh terhadap makanan.)',
    contoh2: '卑しい行為。\n(Perbuatan yang hina.)'
  },
  {
    id: 'm1h1_43',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'しぶとい',
    furigana: 'しぶとい',
    arti: 'Degil / Keras kepala / Liat',
    penjelasan:
      'Sangat gigih dan tidak mudah menyerah kalah atau mati walaupun diserang berkali-kali.',
    contoh1: 'しぶとい風邪。\n(Selesema yang liat nak sembuh.)',
    contoh2: '彼はしぶとい男だ。\n(Dia adalah lelaki yang sangat degil/gigih.)'
  },
  {
    id: 'm1h1_44',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '荒っぽい',
    furigana: 'あらっぽい',
    arti: 'Kasar / Ganas',
    penjelasan:
      'Tindakan, cara kerja, atau gaya bahasa yang kasar dan tidak berhati-hati.',
    contoh1: '荒っぽい言葉遣い。\n(Penggunaan bahasa yang kasar.)',
    contoh2: '彼の運転は荒っぽい。\n(Cara dia memandu sangat kasar/ganas.)'
  },
  {
    id: 'm1h1_45',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '金遣いが荒い',
    furigana: 'かねづかいがあらい',
    arti: 'Boros',
    penjelasan: 'Suka membelanjakan wang dengan banyak tanpa kawalan.',
    contoh1: '彼は金遣いが荒い。\n(Dia sangat boros menggunakan wang.)',
    contoh2:
      '金遣いが荒いと、すぐお金がなくなる。\n(Jika boros, wang akan cepat habis.)'
  },

  // --- GAMBAR 2: KOLOM KANAN ---
  {
    id: 'm1h1_46',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'おせっかいな',
    furigana: 'おせっかいな',
    arti: 'Penyibuk / Suka jaga tepi kain orang',
    penjelasan:
      'Mencampuri urusan orang lain secara berlebihan walaupun tidak diminta.',
    contoh1:
      'おせっかいな近所の人。\n(Jiran yang suka menjaga tepi kain orang.)',
    contoh2: 'おせっかいを焼くのはやめて。\n(Berhentilah menjadi penyibuk.)'
  },
  {
    id: 'm1h1_47',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'おっちょこちょいな',
    furigana: 'おっちょこちょいな',
    arti: 'Cuai / Tergopoh-gapah',
    penjelasan:
      'Orang yang suka terburu-buru dan sering membuat kesilapan remeh akibat kecuaian.',
    contoh1:
      '私っておっちょこちょいだから。\n(Sebab saya ini jenis yang cuai/gopoh.)',
    contoh2:
      'おっちょこちょいなミスをした。\n(Melakukan kesilapan yang berpunca dari kecuaian.)'
  },
  {
    id: 'm1h1_48',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'でしゃばりな',
    furigana: 'でしゃばりな',
    arti: 'Suka menonjolkan diri / Menyibuk',
    penjelasan:
      'Suka menyelit atau bercakap dalam urusan yang tiada kaitan dengannya supaya mendapat perhatian.',
    contoh1:
      'でしゃばりな態度はよくない。\n(Sikap suka menyibuk/menonjol itu tidak elok.)',
    contoh2:
      '彼はでしゃばりだ。\n(Dia memang jenis yang suka mencelah/menyibuk.)'
  },
  {
    id: 'm1h1_49',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'きざな',
    furigana: 'きざな',
    arti: 'Poyo / Dibuat-buat (Showy)',
    penjelasan:
      'Gaya atau percakapan yang dibuat-buat untuk kelihatan hebat (show-off) tetapi kelihatan pelik/meluat.',
    contoh1:
      'きざなセリフを言う。\n(Bercakap dengan dialog yang poyo/dibuat-buat.)',
    contoh2: 'きざな服を着ている。\n(Memakai baju yang terlalu menonjol/poyo.)'
  },
  {
    id: 'm1h1_50',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'ルーズな',
    furigana: 'るーずな',
    arti: 'Sambil lewa / Tidak berdisiplin',
    penjelasan:
      'Sikap tidak menepati masa, cuai tentang janji, atau tidak teratur.',
    contoh1: '時間にルーズな人。\n(Orang yang tidak berdisiplin tentang masa.)',
    contoh2: 'お金にルーズだ。\n(Sambil lewa menguruskan hal wang.)'
  },
  {
    id: 'm1h1_51',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '無礼な',
    furigana: 'ぶれいな',
    arti: 'Biadap / Tidak bersopan',
    penjelasan:
      'Perbuatan atau tutur kata yang tidak menunjukkan rasa hormat kepada orang lain.',
    contoh1: '無礼な態度を謝る。\n(Meminta maaf atas sikap yang biadap.)',
    contoh2: 'なんて無礼な男だ。\n(Sungguh biadap lelaki itu.)'
  }
]

// Menambahkan kosakata dari file ini ke data master di index.html
window.vocabData.push(...kosakata_m1h1)