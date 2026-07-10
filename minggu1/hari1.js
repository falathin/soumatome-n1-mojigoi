// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m1h1 = [
  // --- GAMBAR 1: KOLOM KIRI ---
  {
    id: 'm1h1_1',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '愛想がいい',
    furigana: 'あいそがいい',
    arti: 'Ramah / Menyenangkan',
    penjelasan:
      'Sifat seseorang yang sangat ramah, murah senyum, dan menyenangkan saat diajak mengobrol atau berinteraksi.',
    contoh1:
      '彼女は誰に対しても愛想がいい。\n(Dia selalu ramah dan murah senyum kepada siapa saja.)',
    contoh2:
      '店員の愛想がいいレストラン。\n(Restoran dengan pelayan yang sangat ramah.)'
  },
  {
    id: 'm1h1_2',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'センスがいい',
    furigana: 'せんすがいい',
    arti: 'Seleranya bagus',
    penjelasan:
      'Memiliki selera atau cita rasa yang bagus dalam memilih sesuatu (seperti pakaian, desain, humor, atau dekorasi).',
    contoh1:
      '彼は服のセンスがいい。\n(Dia punya selera berpakaian yang sangat bagus.)',
    contoh2:
      'センスがいい部屋ですね。\n(Kamar ini dekorasinya berselera tinggi, ya.)'
  },
  {
    id: 'm1h1_3',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '気立てがいい',
    furigana: 'きだてがいい',
    arti: 'Baik hati (bawaan)',
    penjelasan:
      'Memiliki sifat bawaan dari sananya yang baik hati, hangat, tulus, dan lembut terhadap orang lain.',
    contoh1: '気立てがいい奥さんですね。\n(Istri yang sangat baik hati, ya.)',
    contoh2: '彼女は気立てがよくて優しい。\n(Dia itu pada dasarnya baik hati dan lembut.)'
  },
  {
    id: 'm1h1_4',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'いさぎよい',
    furigana: 'いさぎよい',
    arti: 'Ksatria / Berjiwa besar / Sportif',
    penjelasan:
      'Sikap berani dan jantan, seperti mau mengakui kesalahan atau menerima kekalahan dengan lapang dada tanpa banyak alasan.',
    contoh1:
      'いさぎよく罪を認める。\n(Mengakui kesalahan dengan berani dan ksatria.)',
    contoh2:
      '彼のいさぎよい態度に感心した。\n(Saya kagum dengan sikapnya yang sportif/berjiwa besar.)'
  },
  {
    id: 'm1h1_5',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '情け深い',
    furigana: 'なさけぶかい',
    arti: 'Penuh belas kasih / Simpatik',
    penjelasan:
      'Sangat simpatik, mudah tersentuh, dan penuh rasa kasihan terhadap kesulitan atau penderitaan orang lain.',
    contoh1:
      '情け深い人に出会った。\n(Saya bertemu dengan orang yang penuh belas kasih.)',
    contoh2:
      '彼はとても情け深い性格です。\n(Dia memiliki kepribadian yang sangat simpatik/penyayang.)'
  },
  {
    id: 'm1h1_6',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '用心深い',
    furigana: 'ようじんぶかい',
    arti: 'Sangat berhati-hati / Waspada',
    penjelasan:
      'Sangat waspada dan penuh kehati-hatian dalam bertindak untuk mencegah bahaya atau kesalahan sekecil apa pun.',
    contoh1: '彼は用心深い性格だ。\n(Dia memiliki sifat yang sangat berhati-hati.)',
    contoh2: '用心深く周りを見る。\n(Melihat sekeliling dengan penuh kewaspadaan.)'
  },
  {
    id: 'm1h1_7',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'りりしい',
    furigana: 'りりしい',
    arti: 'Gagah / Berwibawa',
    penjelasan: 'Tampak gagah, berani, dan berwibawa sehingga membuat orang kagum dan hormat melihatnya.',
    contoh1:
      'りりしい姿に感動した。\n(Terharu melihat sosoknya yang begitu gagah.)',
    contoh2:
      '彼は制服を着るとりりしい。\n(Dia tampak gagah dan berwibawa saat memakai seragam.)'
  },
  {
    id: 'm1h1_8',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '若々しい',
    furigana: 'わかわかしい',
    arti: 'Awet muda / Kelihatan muda',
    penjelasan: 'Tampil, bergerak, atau berbicara jauh lebih muda, segar, dan energik dibandingkan usia aslinya.',
    contoh1: '祖母はいつも若々しい。\n(Nenek selalu kelihatan awet muda.)',
    contoh2: '若々しい声ですね。\n(Suaranya terdengar muda sekali, ya.)'
  },
  {
    id: 'm1h1_9',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '勇ましい',
    furigana: 'いさましい',
    arti: 'Gagah berani',
    penjelasan:
      'Sangat berani dan penuh semangat yang menggebu-gebu saat menghadapi tantangan, bahaya, atau lawan.',
    contoh1: '勇ましい声で叫ぶ。\n(Berteriak dengan suara yang gagah berani.)',
    contoh2: '彼の勇ましい姿を見た。\n(Saya melihat sosoknya yang penuh keberanian.)'
  },
  {
    id: 'm1h1_10',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'たくましい',
    furigana: 'たくましい',
    arti: 'Kekar / Tangguh',
    penjelasan:
      'Memiliki fisik yang kuat, tegap, dan berotot, ATAU mental yang tangguh dan tidak mudah menyerah oleh keadaan.',
    contoh1:
      'たくましい体をしている。\n(Memiliki postur tubuh yang kekar dan kuat.)',
    contoh2:
      'どんな困難にも負けないたくましい精神。\n(Mental tangguh yang tidak pantang menyerah pada kesulitan apa pun.)'
  },
  {
    id: 'm1h1_11',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '思いやりがある',
    furigana: 'おもいやりがある',
    arti: 'Penuh perhatian / Peka',
    penjelasan:
      'Sifat peduli, peka (tenggang rasa), dan selalu memikirkan perasaan serta kebutuhan orang lain.',
    contoh1:
      '彼女は思いやりがある人だ。\n(Dia adalah orang yang penuh perhatian terhadap orang lain.)',
    contoh2:
      '思いやりのある言葉をかける。\n(Mengucapkan kata-kata yang penuh kepedulian.)'
  },
  {
    id: 'm1h1_12',
    minggu: '1',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '思いやる',
    furigana: 'おもいやる',
    arti: 'Bersimpati / Memedulikan',
    penjelasan:
      'Tindakan (kata kerja) memikirkan, memedulikan, dan bersimpati terhadap keadaan atau perasaan orang lain.',
    contoh1:
      '相手の立場を思いやる。\n(Berusaha memahami dan bersimpati pada posisi/situasi orang lain.)',
    contoh2:
      '人を思いやる心を持つ。\n(Memiliki hati yang peduli terhadap sesama.)'
  },
  {
    id: 'm1h1_13',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '気品がある',
    furigana: 'きひんがある',
    arti: 'Anggun / Elegan / Berkelas',
    penjelasan:
      'Memiliki aura, sikap, atau penampilan yang sangat elegan, mewah, berkelas, dan memancarkan martabat tinggi.',
    contoh1: '彼女のしぐさには気品がある。\n(Gerak-geriknya sangat anggun dan berkelas.)',
    contoh2: '気品がある家具。\n(Furnitur yang tampak mewah dan elegan.)'
  },
  {
    id: 'm1h1_14',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '色気がある',
    furigana: 'いろけがある',
    arti: 'Seksi / Menawan',
    penjelasan:
      'Memiliki daya tarik sensual atau pesona dewasa yang memikat lawan jenis.',
    contoh1: '色気がある女性。\n(Wanita yang memancarkan aura seksi/menawan.)',
    contoh2:
      '彼の声には色気がある。\n(Suaranya memiliki daya tarik yang seksi/memikat.)'
  },
  {
    id: 'm1h1_15',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'しとやかな',
    furigana: 'しとやかな',
    arti: 'Anggun dan kalem',
    penjelasan:
      'Sikap yang tenang, kalem, sopan santun, dan anggun (biasanya digunakan untuk memuji wanita).',
    contoh1:
      'しとやかな女性に憧れる。\n(Saya mengagumi wanita yang anggun dan kalem.)',
    contoh2: '彼女はしとやかに歩く。\n(Dia berjalan dengan sangat anggun dan sopan.)'
  },
  {
    id: 'm1h1_16',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'チャーミングな',
    furigana: 'ちゃーみんぐな',
    arti: 'Menawan (Charming) / Memikat',
    penjelasan: 'Sangat menarik hati, manis, dan membuat orang lain merasa gemas atau suka melihatnya.',
    contoh1:
      '彼女の笑顔はとてもチャーミングだ。\n(Senyumannya sangat menawan dan memikat.)',
    contoh2:
      'チャーミングなドレスですね。\n(Gaun yang sangat manis dan cantik, ya.)'
  },
  {
    id: 'm1h1_17',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '気まぐれな',
    furigana: 'きまぐれな',
    arti: 'Moody / Plin-plan',
    penjelasan:
      'Sifat yang mudah berubah-ubah pikiran, suasana hati (mood), atau tindakannya tanpa alasan yang jelas.',
    contoh1:
      '猫は気まぐれな動物だ。\n(Kucing adalah hewan yang moody / semaunya sendiri.)',
    contoh2:
      '気まぐれな性格に疲れる。\n(Capek menghadapi sifatnya yang gampang berubah-ubah.)'
  },
  {
    id: 'm1h1_18',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '近寄りがたい',
    furigana: 'ちかよりがたい',
    arti: 'Sulit didekati',
    penjelasan:
      'Memiliki aura yang dingin, terlalu tegas, atau terlalu sempurna sehingga orang merasa sungkan/segan untuk menyapa atau mendekat.',
    contoh1:
      '社長は近寄りがたい雰囲気がある。\n(Presiden direktur memiliki aura yang sulit didekati.)',
    contoh2:
      '美人すぎて近寄りがたい。\n(Terlalu cantik sehingga bikin orang segan untuk mendekat.)'
  },
  {
    id: 'm1h1_19',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '無口な',
    furigana: 'むくちな',
    arti: 'Pendiam',
    penjelasan: 'Sifat seseorang yang irit bicara, seperlunya saja, dan tidak suka banyak omong.',
    contoh1: '父は無口な人です。\n(Ayah saya adalah orang yang pendiam.)',
    contoh2: '無口だけど優しい。\n(Meski pendiam, tapi dia baik hati.)'
  },
  {
    id: 'm1h1_20',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '陰気な',
    furigana: 'いんきな',
    arti: 'Suram / Murung',
    penjelasan: 'Suasana, tempat, atau sifat seseorang yang pembawaannya gelap, sedih, dan tidak ceria sama sekali.',
    contoh1:
      '雨の日は陰気な気分になる。\n(Hari hujan membuat suasana hati jadi murung/suram.)',
    contoh2:
      '陰気な性格を直したい。\n(Saya ingin mengubah sifat saya yang suram ini.)'
  },

  // --- GAMBAR 1: KOLOM KANAN ---
  {
    id: 'm1h1_21',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'まめな',
    furigana: 'まめな',
    arti: 'Rajin / Telaten',
    penjelasan:
      'Sangat rajin dan telaten mengurus hal-hal kecil, seperti rajin membalas pesan, mengurus tanaman, atau mengerjakan rutinitas tanpa rasa malas.',
    contoh1: '彼はまめに連絡をくれる。\n(Dia sangat rajin memberi kabar/menghubungi saya.)',
    contoh2: 'まめな性格の人。\n(Orang yang kepribadiannya telaten dan rajin.)'
  },
  {
    id: 'm1h1_22',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '生真面目な',
    furigana: 'きまじめな',
    arti: 'Terlalu serius / Kaku',
    penjelasan:
      'Sifat yang teramat serius, lurus, dan taat aturan, terkadang sampai kaku dan sulit diajak bercanda.',
    contoh1: '彼は生真面目すぎる。\n(Dia orangnya terlalu serius/kaku.)',
    contoh2:
      '生真面目な顔で冗談を言う。\n(Melontarkan candaan dengan wajah yang sangat serius.)'
  },
  {
    id: 'm1h1_23',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '勤勉な',
    furigana: 'きんべんな',
    arti: 'Tekun / Rajin bekerja',
    penjelasan: 'Sifat pekerja keras, rajin, gigih, dan sungguh-sungguh dalam bekerja atau menuntut ilmu.',
    contoh1:
      '日本人は勤勉だと言われている。\n(Orang Jepang dikenal sebagai bangsa yang tekun bekerja.)',
    contoh2: '勤勉な学生。\n(Pelajar yang tekun dan rajin.)'
  },
  {
    id: 'm1h1_24',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '誠実な',
    furigana: 'せいじつな',
    arti: 'Tulus / Jujur',
    penjelasan: 'Sifat yang bisa diandalkan, setia, jujur dari hati, dan tidak suka berbohong atau mengkhianati.',
    contoh1:
      '誠実な態度で謝る。\n(Meminta maaf dengan sikap yang tulus dari hati.)',
    contoh2: '彼は誠実な青年だ。\n(Dia adalah pemuda yang jujur dan tulus.)'
  },
  {
    id: 'm1h1_25',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'まともな',
    furigana: 'まともな',
    arti: 'Wajar / Layak / Benar',
    penjelasan:
      'Sesuatu yang dianggap normal, masuk akal, pantas (standar umum), atau orang yang hidupnya lurus/benar.',
    contoh1:
      'まともな人間になりたい。\n(Saya ingin menjadi manusia yang benar/layak.)',
    contoh2:
      'まともな理由を言ってください。\n(Tolong berikan alasan yang masuk akal/wajar.)'
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
      'Memiliki postur tubuh atau kerangka badan yang lebih besar atau tinggi dari rata-rata orang.',
    contoh1: '彼は大柄な男性だ。\n(Dia adalah pria yang bertubuh besar.)',
    contoh2: '大柄な人向けの服。\n(Pakaian khusus untuk orang berpostur besar.)'
  },
  {
    id: 'm1h1_27',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '小柄な',
    furigana: 'こがらな',
    arti: 'Bertubuh mungil / Kecil',
    penjelasan: 'Memiliki postur tubuh yang kecil, pendek, atau mungil.',
    contoh1: '小柄な女性。\n(Wanita bertubuh mungil.)',
    contoh2: '小柄だが力は強い。\n(Meski tubuhnya kecil, tapi tenaganya kuat.)'
  },
  {
    id: 'm1h1_28',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '活発な',
    furigana: 'かっぱつな',
    arti: 'Aktif / Lincah',
    penjelasan: 'Penuh energi, banyak bergerak, ceria (untuk orang/anak-anak), atau dinamis (seperti dalam diskusi).',
    contoh1: '活発な子供。\n(Anak yang sangat aktif dan lincah.)',
    contoh2:
      '活発な議論が行われた。\n(Telah berlangsung diskusi yang sangat aktif/hidup.)'
  },
  {
    id: 'm1h1_29',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '有望な',
    furigana: 'ゆうぼうな',
    arti: 'Menjanjikan / Punya prospek',
    penjelasan: 'Memiliki potensi besar, harapan, dan masa depan yang cerah untuk sukses ke depannya.',
    contoh1: '前途有望な若者。\n(Anak muda yang masa depannya cerah/menjanjikan.)',
    contoh2: '有望な市場。\n(Pasar yang punya prospek bagus.)'
  },
  {
    id: 'm1h1_30',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '純粋な',
    furigana: 'じゅんすいな',
    arti: 'Murni / Polos',
    penjelasan:
      'Hati yang bersih tanpa niat buruk, kepolosan, atau bisa juga merujuk pada benda/bahan yang murni (tidak ada campuran).',
    contoh1: '純粋な心を持つ。\n(Memiliki hati yang murni/bersih.)',
    contoh2: '子供の純粋な質問。\n(Pertanyaan polos dari seorang anak kecil.)'
  },
  {
    id: 'm1h1_31',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '無邪気な',
    furigana: 'むじゃきな',
    arti: 'Polos (Kekanakan) / Lugu',
    penjelasan:
      'Sifat lugu tanpa prasangka buruk, murni, dan sering bertingkah spontan layaknya anak kecil.',
    contoh1: '無邪気な笑顔。\n(Senyuman yang lugu dan polos.)',
    contoh2:
      '子供が抱く無邪気な夢。\n(Impian polos/kekanakan yang dimiliki oleh anak kecil.)'
  },
  {
    id: 'm1h1_32',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '温和な',
    furigana: 'おんわな',
    arti: 'Lemah lembut / Sejuk',
    penjelasan: 'Sifat seseorang yang tenang, damai, dan tidak mudah marah, ATAU cuaca iklim yang sejuk dan nyaman.',
    contoh1: '温和な気候。\n(Iklim/cuaca yang sejuk dan bersahabat.)',
    contoh2: '彼は温和な性格だ。\n(Dia memiliki sifat yang lemah lembut dan tenang.)'
  },
  {
    id: 'm1h1_33',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '気さくな',
    furigana: 'きさくな',
    arti: 'Santai / Mudah bergaul',
    penjelasan:
      'Sangat ramah, santai, tidak sombong, dan gampang diajak mengobrol oleh siapa saja (bahkan orang baru).',
    contoh1: '気さくに話しかける。\n(Menyapa/mengajak bicara dengan santai dan ramah.)',
    contoh2: '彼はとても気さくな人です。\n(Dia adalah orang yang sangat mudah bergaul.)'
  },
  {
    id: 'm1h1_34',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'おおらかな',
    furigana: 'おおらかな',
    arti: 'Berjiwa besar / Santai',
    penjelasan:
      'Orang yang berpikiran luas, santai, berpikiran positif, dan tidak mudah kesal hanya karena masalah remeh.',
    contoh1: 'おおらかな性格の母。\n(Ibu yang berjiwa besar dan santai menghadapi sesuatu.)',
    contoh2:
      '大自然の中でおおらかな気持ちになる。\n(Perasaan menjadi lapang dan tenang saat berada di tengah alam bebas.)'
  },
  {
    id: 'm1h1_35',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '素朴な',
    furigana: 'そぼくな',
    arti: 'Sederhana / Apa adanya',
    penjelasan:
      'Sesuatu yang polos, alami, tidak dihias berlebihan, atau sebuah pertanyaan yang sangat mendasar dan sederhana.',
    contoh1: '素朴な疑問を持つ。\n(Memiliki pertanyaan yang sederhana/mendasar.)',
    contoh2: '素朴な味の料理。\n(Masakan dengan cita rasa yang sederhana/rumahan.)'
  },
  {
    id: 'm1h1_36',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'デリケートな',
    furigana: 'でりけーとな',
    arti: 'Sensitif / Rentan (Delicate)',
    penjelasan:
      'Sesuatu yang butuh penanganan ekstra hati-hati, seperti perasaan yang sensitif, kulit yang rentan, atau isu yang rawan memicu konflik.',
    contoh1: 'デリケートな問題。\n(Masalah yang sangat sensitif/rawan.)',
    contoh2:
      '彼女はデリケートな肌をしている。\n(Dia memiliki kulit yang sensitif/mudah iritasi.)'
  },
  {
    id: 'm1h1_37',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '物好きな',
    furigana: 'ものずきな',
    arti: 'Punya selera aneh / Unik',
    penjelasan:
      'Suka, tertarik, atau rela melakukan hal-hal aneh yang biasanya tidak diminati oleh orang pada umumnya.',
    contoh1:
      'こんな日に出かけるなんて物好きだね。\n(Keluar di cuaca buruk begini, seleramu aneh/unik juga ya.)',
    contoh2: '物好きな人。\n(Orang yang selera/minatnya aneh-aneh.)'
  },
  {
    id: 'm1h1_38',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '孤独な',
    furigana: 'こどくな',
    arti: 'Kesepian / Sendirian',
    penjelasan: 'Perasaan atau kondisi hidup sendirian, terasing dari lingkungan, dan merasa hampa tanpa teman.',
    contoh1: '孤独な生活を送る。\n(Menjalani kehidupan yang sepi/sendirian.)',
    contoh2: '都会の孤独。\n(Rasa kesepian di tengah keramaian kota besar.)'
  },
  {
    id: 'm1h1_39',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '臆病な',
    furigana: 'おくびょうな',
    arti: 'Penakut / Pengecut',
    penjelasan: 'Sifat yang mudah merasa cemas, takut akan sesuatu yang baru, dan tidak berani mengambil risiko.',
    contoh1: '臆病な犬。\n(Anjing yang penakut.)',
    contoh2:
      '彼は臆病で何もできない。\n(Dia itu penakut sehingga tidak berani melakukan apa-apa.)'
  },

  // --- GAMBAR 2: KOLOM KIRI ---
  {
    id: 'm1h1_40',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'なれなれしい',
    furigana: 'なれなれしい',
    arti: 'Sok akrab',
    penjelasan:
      'Sikap yang terlalu mesra atau sok dekat dengan orang yang baru dikenal, yang biasanya membuat orang lain risih/tidak nyaman.',
    contoh1:
      '初対面なのになれなれしい人だ。\n(Orang itu sok akrab padahal baru pertama kali bertemu.)',
    contoh2:
      'なれなれしい態度は嫌われる。\n(Sikap sok akrab biasanya tidak disukai orang.)'
  },
  {
    id: 'm1h1_41',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'いやらしい',
    furigana: 'いやらしい',
    arti: 'Mesum / Menjijikkan / Bikin risih',
    penjelasan:
      'Tatapan atau tingkah laku kotor (berbau seksual), atau cara bicara/tindakan yang licik dan membuat orang merasa jijik/risih.',
    contoh1:
      'いやらしい目つきで見る。\n(Menatap dengan pandangan mesum/kotor.)',
    contoh2:
      '彼はいやらしい言い方をする。\n(Dia berbicara dengan cara yang sinis dan bikin risih.)'
  },
  {
    id: 'm1h1_42',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '卑しい',
    furigana: 'いやしい',
    arti: 'Rakus / Hina',
    penjelasan:
      'Sifat yang sangat rakus/tamak (terutama soal makanan atau uang), atau perbuatan dan status yang dipandang rendah/hina.',
    contoh1: '食べ物に卑しい。\n(Sangat rakus/tamak terhadap makanan.)',
    contoh2: '卑しい行為。\n(Perbuatan yang hina/rendahan.)'
  },
  {
    id: 'm1h1_43',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'しぶとい',
    furigana: 'しぶとい',
    arti: 'Keras kepala / Bandel (susah hilang)',
    penjelasan:
      'Sangat gigih dan tidak mudah menyerah. Bisa juga untuk penyakit atau noda yang "bandel" (susah disembuhkan/dihilangkan).',
    contoh1: 'しぶとい風邪。\n(Flu yang bandel / susah sembuhnya.)',
    contoh2: '彼はしぶとい男だ。\n(Dia adalah pria yang gigih/keras kepala.)'
  },
  {
    id: 'm1h1_44',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '荒っぽい',
    furigana: 'あらっぽい',
    arti: 'Kasar / Sembrono',
    penjelasan:
      'Sikap, tindakan, cara kerja, atau gaya bahasa yang kasar, beringas, dan tidak dilakukan dengan hati-hati.',
    contoh1: '荒っぽい言葉遣い。\n(Penggunaan bahasa yang kasar.)',
    contoh2: '彼の運転は荒っぽい。\n(Cara dia menyetir sangat kasar/ugal-ugalan.)'
  },
  {
    id: 'm1h1_45',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '金遣いが荒い',
    furigana: 'かねづかいがあらい',
    arti: 'Boros',
    penjelasan: 'Sifat yang suka menghambur-hamburkan uang dalam jumlah banyak tanpa perhitungan yang jelas.',
    contoh1: '彼は金遣いが荒い。\n(Dia itu sangat boros soal uang.)',
    contoh2:
      '金遣いが荒いと、すぐお金がなくなる。\n(Kalau boros, uang akan cepat habis.)'
  },

  // --- GAMBAR 2: KOLOM KANAN ---
  {
    id: 'm1h1_46',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'おせっかいな',
    furigana: 'おせっかいな',
    arti: 'Suka ikut campur / Kepo',
    penjelasan:
      'Sifat yang suka mencampuri urusan orang lain padahal tidak diminta (bermaksud baik tapi jadinya berlebihan dan mengganggu).',
    contoh1:
      'おせっかいな近所の人。\n(Tetangga yang suka ikut campur urusan orang.)',
    contoh2: 'おせっかいを焼くのはやめて。\n(Berhentilah mencampuri urusanku.)'
  },
  {
    id: 'm1h1_47',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'おっちょこちょいな',
    furigana: 'おっちょこちょいな',
    arti: 'Ceroboh / Pelupa',
    penjelasan:
      'Karakter orang yang suka terburu-buru dan panikan sehingga sering melakukan kesalahan konyol, ceroboh, atau melupakan hal kecil.',
    contoh1:
      '私っておっちょこちょいだから。\n(Habisnya aku ini orangnya cerobohan sih.)',
    contoh2:
      'おっちょこちょいなミスをした。\n(Melakukan kesalahan konyol akibat kurang teliti.)'
  },
  {
    id: 'm1h1_48',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'でしゃばりな',
    furigana: 'でしゃばりな',
    arti: 'Suka menonjolkan diri / Lancang',
    penjelasan:
      'Suka menyela, ikut campur, atau memajukan diri dalam urusan yang bukan kapasitasnya semata-mata agar diperhatikan orang.',
    contoh1:
      'でしゃばりな態度はよくない。\n(Sikap yang suka cari panggung/lancang itu tidak baik.)',
    contoh2:
      '彼はでしゃばりだ。\n(Dia itu orangnya memang suka ikut campur/menonjolkan diri.)'
  },
  {
    id: 'm1h1_49',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'きざな',
    furigana: 'きざな',
    arti: 'Poyo / Sok gaya / Lebay',
    penjelasan:
      'Gaya bicara atau penampilan yang sok keren dan dibuat-buat, sehingga malah terlihat norak dan membuat orang lain merasa geli/risih.',
    contoh1:
      'きざなセリフを言う。\n(Melontarkan kata-kata sok puitis/lebay yang bikin geli.)',
    contoh2: 'きざな服を着ている。\n(Memakai pakaian yang sok gaya/norak.)'
  },
  {
    id: 'm1h1_50',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'ルーズな',
    furigana: 'るーずな',
    arti: 'Tidak disiplin / Lalai',
    penjelasan:
      'Sikap yang tidak tegas, ngaret (tidak menepati waktu), atau lalai/sembarangan dalam urusan uang dan janji.',
    contoh1: '時間にルーズな人。\n(Orang yang tidak disiplin waktu / suka ngaret.)',
    contoh2: 'お金にルーズだ。\n(Gampangan / tidak disiplin dalam mengatur uang.)'
  },
  {
    id: 'm1h1_51',
    minggu: '1',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '無礼な',
    furigana: 'ぶれいな',
    arti: 'Tidak sopan / Kurang ajar',
    penjelasan:
      'Perbuatan atau tutur kata yang kasar dan sama sekali tidak menunjukkan rasa hormat kepada orang lain.',
    contoh1: '無礼な態度を謝る。\n(Meminta maaf atas sikap yang tidak sopan/kurang ajar.)',
    contoh2: 'なんて無礼な男だ。\n(Benar-benar pria yang kurang ajar.)'
  }
];

// Menambahkan kosakata dari file ini ke data master di index.html
window.vocabData.push(...kosakata_m1h1);