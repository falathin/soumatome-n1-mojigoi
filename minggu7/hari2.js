// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m7h2 = [
  // --- GAMBAR 1 ---
  {
    id: 'm7h2_1',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'アットホーム（な）',
    furigana: 'アットホーム（な）',
    arti: 'Nyaman / Kekeluargaan (Cozy)',
    penjelasan: 'Berasal dari "At home". Menggambarkan suasana tempat, toko, atau kantor yang hangat dan santai seperti rumah sendiri.',
    contoh1: 'アットホームな雰囲気のレストラン。\n(Restoran dengan suasana yang nyaman dan hangat seperti di rumah.)',
    contoh2: 'この職場はアットホームで働きやすいです。\n(Tempat kerja ini sangat ramah/kekeluargaan sehingga mudah untuk bekerja.)'
  },
  {
    id: 'm7h2_2',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'ラフ（な）',
    furigana: 'ラフ（な）',
    arti: 'Kasual / Draf kasar (Rough)',
    penjelasan: 'Berasal dari "Rough". Punya 2 arti: pakaian yang santai/kasual, atau draf/gambar rancangan kasar.',
    contoh1: 'ラフな服装（＝カジュアルな服装）。\n(Pakaian yang kasual / santai.)',
    contoh2: 'ラフな図面を書いて、設計のイメージを膨らませる。\n(Menggambar sketsa/draf kasar untuk mengembangkan gambaran desain.)'
  },
  {
    id: 'm7h2_3',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'ソフト（な）',
    furigana: 'ソフト（な）',
    arti: 'Lembut / Perangkat lunak (Soft)',
    penjelasan: 'Berasal dari "Soft". Menggambarkan sifat/sikap/suara yang lembut, atau singkatan dari software.',
    contoh1: 'ソフトな話し方をする人は好感が持てる。\n(Orang yang memiliki cara berbicara yang lembut memberikan kesan yang baik.)',
    contoh2: '新しいソフト（＝ソフトウェア）をパソコンにインストールした。\n(Menginstal perangkat lunak/software baru ke dalam komputer.)'
  },
  {
    id: 'm7h2_4',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'タイト（な）',
    furigana: 'タイト（な）',
    arti: 'Ketat / Jadwal padat (Tight)',
    penjelasan: 'Berasal dari "Tight". Digunakan untuk pakaian yang pas/sempit di badan, serta jadwal kerja yang sangat padat/mepet.',
    contoh1: 'タイトスカートをはいて出かける。\n(Pergi keluar dengan mengenakan rok ketat.)',
    contoh2: '今週はタイトなスケジュールなので、風邪をひけない。\n(Minggu ini jadwalnya sangat padat, jadi saya tidak boleh sampai masuk angin.)'
  },
  {
    id: 'm7h2_5',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'シャープ（な）',
    furigana: 'シャープ（な）',
    arti: 'Tajam / Jelas (Sharp)',
    penjelasan: 'Berasal dari "Sharp". Menggambarkan kualitas gambar/foto yang sangat jelas (tajam), atau otak/pemikiran yang cerdas dan cepat tanggap.',
    contoh1: 'デジタルカメラできれいなシャープな画像を撮影する。\n(Mengambil gambar/foto yang indah dan tajam jelas dengan kamera digital.)',
    contoh2: '彼はシャープな頭脳の持ち主で、問題解決能力が高い。\n(Dia adalah pemilik otak/pikiran yang tajam dan memiliki kemampuan memecahkan masalah yang tinggi.)'
  },
  {
    id: 'm7h2_6',
    minggu: '7',
    hari: '2',
    kategori: 'kata sifat',
    kanji: 'デリケート（な）',
    furigana: 'デリケート（な）',
    arti: 'Sensitif / Halus (Delicate)',
    penjelasan: 'Berasal dari "Delicate". Digunakan untuk perasaan/kulit yang peka dan sensitif, atau urusan/isu politik yang rumit dan harus hati-hati.',
    contoh1: '彼女はデリケートな神経の持ち主だ。\n(Dia memiliki sistem saraf/perasaan yang sangat sensitif [mudah stres/tersinggung].)',
    contoh2: 'これは政治的に非常にデリケートな問題です。\n(Ini adalah masalah yang secara politik sangat sensitif/pelik.)'
  },
  {
    id: 'm7h2_7',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'セキュリティ',
    furigana: 'セキュリティ',
    arti: 'Keamanan (Security)',
    penjelasan: 'Berasal dari "Security". Merujuk pada sistem penjagaan keamanan fisik (gedung) maupun keamanan data/siber.',
    contoh1: 'このマンションはセキュリティがしっかりしている。\n(Apartemen ini memiliki sistem keamanan yang ketat/terjamin.)',
    contoh2: '個人情報を守るためにセキュリティを高める。\n(Meningkatkan keamanan untuk melindungi informasi pribadi.)'
  },
  {
    id: 'm7h2_8',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'エスカレーター',
    furigana: 'エスカレーター',
    arti: 'Eskalator / Sistem naik otomatis',
    penjelasan: 'Selain tangga berjalan, istilah "Escalator-shiki" merujuk pada sistem sekolah terpadu yang muridnya naik jenjang otomatis tanpa ujian masuk.',
    contoh1: 'エスカレーター式（＝入学試験なしに）に進学できる学校。\n(Sekolah di mana siswa dapat melanjutkan pendidikan ke jenjang berikutnya secara otomatis [tanpa ujian masuk].)',
    contoh2: '駅のエスカレーターを利用する。\n(Menggunakan eskalator di stasiun.)'
  },
  {
    id: 'm7h2_9',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ノルマ',
    furigana: 'ノルマ',
    arti: 'Target kerja / Kuota minimal',
    penjelasan: 'Diserap dari bahasa Rusia "Norma". Merujuk pada jumlah target jualan atau beban kerja wajib yang harus diselesaikan tepat waktu.',
    contoh1: '今日の仕事のノルマをこなす。\n(Menyelesaikan target/kuota pekerjaan hari ini.)',
    contoh2: '営業のノルマがきつくて大変だ。\n(Target minimum penjualan sangat ketat sehingga terasa berat.)'
  },
  {
    id: 'm7h2_10',
    minggu: '7',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ブレイク（する）',
    furigana: 'ブレイク（する）',
    arti: 'Istirahat / Meledak terkenal (Break)',
    penjelasan: 'Berasal dari "Break". Berarti istirahat sejenak (coffee break), atau meraih kesuksesan mendadak / mendadak sangat populer.',
    contoh1: 'コーヒーブレイクを挟んで会議を続ける。\n(Melanjutkan rapat setelah diselingi istirahat minum kopi sejenak.)',
    contoh2: 'その曲は去年大ブレイクした。\n(Lagu itu meledak sangat populer [menjadi hits besar] tahun lalu.)'
  },
  {
    id: 'm7h2_11',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'トラウマ',
    furigana: 'トラウマ',
    arti: 'Trauma psikologis',
    penjelasan: 'Berasal dari istilah medis "Trauma". Mengacu pada luka batin mendalam akibat pengalaman masa lalu yang buruk.',
    contoh1: '子どもの頃の体験がトラウマになる。\n(Pengalaman masa kecil berubah menjadi trauma psikologis.)',
    contoh2: '事故のトラウマで車に乗れなくなった。\n(Karena trauma kecelakaan, saya tidak bisa naik mobil lagi.)'
  },
  {
    id: 'm7h2_12',
    minggu: '7',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'ゲット（する）',
    furigana: 'ゲット（する）',
    arti: 'Mendapatkan / Memperoleh (Get)',
    penjelasan: 'Kata kasual dari "Get". Dipakai saat berhasil membeli, memenangkan, atau memperoleh barang dan informasi.',
    contoh1: 'それ、どこでゲットしたの？\n(Benda itu, kamu dapatkan di mana?)',
    contoh2: '欲しかった限定品をようやくゲットした。\n(Akhirnya saya berhasil mendapatkan barang edisi terbatas yang saya inginkan.)'
  },
  {
    id: 'm7h2_13',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'アルコール',
    furigana: 'アルコール',
    arti: 'Alkohol / Minuman keras',
    penjelasan: 'Berasal dari "Alcohol". Dipakai untuk cairan steril medis, atau istilah umum untuk minuman keras (sake).',
    contoh1: '私はアルコールは全くだめです。\n(Saya sama sekali tidak bisa minum alkohol.)',
    contoh2: '注射の前に肌をアルコールで消毒する。\n(Mensterilkan kulit dengan alkohol sebelum disuntik.)'
  },
  {
    id: 'm7h2_14',
    minggu: '7',
    hari: '2',
    kategori: 'kata kerja',
    kanji: 'オファー（する）',
    furigana: 'オファー（する）',
    arti: 'Tawaran / Menawarkan (Offer)',
    penjelasan: 'Berasal dari "Offer". Digunakan untuk tawaran resmi seperti tawaran kerja, peran film, atau tawaran bisnis.',
    contoh1: '有名企業からオファーが来る。\n(Mendapat tawaran pekerjaan/kontrak dari perusahaan terkenal.)',
    contoh2: '彼に主役のオファーをする。\n(Memberikan tawaran peran utama kepadanya.)'
  },
  {
    id: 'm7h2_15',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ブランド',
    furigana: 'ブランド',
    arti: 'Merek / Barang bermerek (Brand)',
    penjelasan: 'Berasal dari "Brand". Merujuk pada merek ternama. Jika "Brand-hin", artinya barang-barang mewah dari desainer ternama.',
    contoh1: 'ブランド品ばかりを好んで買う。\n(Gemar membeli barang-barang bermerek mewah saja.)',
    contoh2: 'この会社は独自のブランドを立ち上げた。\n(Perusahaan ini mendirikan merek dagang/brand milik mereka sendiri.)'
  },
  {
    id: 'm7h2_16',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'オプション',
    furigana: 'オプション',
    arti: 'Pilihan opsional / Tambahan',
    penjelasan: 'Berasal dari "Option". Fitur, layanan, atau komponen tambahan yang bisa dipilih secara bebas (biasanya bayar ekstra).',
    contoh1: '市内観光はオプションになっている。\n(Tur keliling kota sifatnya opsional [pilihan tambahan].)',
    contoh2: '車のカーナビはオプションで追加しました。\n(Navigasi mobil ditambahkan sebagai opsi tambahan.)'
  },
  {
    id: 'm7h2_17',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'テンション',
    furigana: 'テンション',
    arti: 'Semangat / Antusiasme (Mood)',
    penjelasan: 'Serapan dari "Tension", tapi dalam bahasa Jepang slang berarti tingkat semangat, antusiasme, atau mood kehebohan seseorang.',
    contoh1: 'お祭りに行くとテンションが上がる。\n(Ketika pergi ke festival, tingkat semangat/kegembiraan saya langsung naik.)',
    contoh2: '彼は今日、なぜかテンションが低い。\n(Hari ini entah mengapa dia terlihat tidak bersemangat/loyo.)'
  },

  // --- GAMBAR 2 ---
  {
    id: 'm7h2_18',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'プレッシャー',
    furigana: 'プレッシャー',
    arti: 'Tekanan mental / Beban pikiran',
    penjelasan: 'Berasal dari "Pressure". Beban psikologis atau stres akibat ekspektasi orang lain dan tuntutan situasi penting.',
    contoh1: '周囲の期待からプレッシャーがかかる。\n(Merasakan tekanan mental akibat ekspektasi orang-orang di sekitar.)',
    contoh2: 'プレッシャーに負けずに実力を発揮する。\n(Menunjukkan kemampuan terbaik tanpa kalah dari tekanan mental.)'
  },
  {
    id: 'm7h2_19',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ギャップ',
    furigana: 'ギャップ',
    arti: 'Kesenjangan / Celah perbedaan',
    penjelasan: 'Berasal dari "Gap". Celah perbedaan antara dua hal, misalnya beda generasi, perbedaan ekspektasi vs realita, dll.',
    contoh1: '世代間のギャップを感じる。\n(Merasakan adanya kesenjangan/perbedaan antargenerasi.)',
    contoh2: '理想と現実のギャップに悩む。\n(Merasa bingung/khawatir karena adanya celah antara idealisme dan kenyataan.)'
  },
  {
    id: 'm7h2_20',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'バブル',
    furigana: 'バブル',
    arti: 'Gelembung ekonomi (Bubble)',
    penjelasan: 'Berasal dari "Bubble". Spesifik untuk istilah ekonomi saat nilai pasar melonjak tidak wajar lalu meletus/hancur.',
    contoh1: 'バブル（経済）がはじける。\n(Gelembung ekonomi meletus/hancur.)',
    contoh2: '1990年代に日本のバブル経済崩壊が起きた。\n(Pada tahun 1990-an terjadi kehancuran経済 gelembung di Jepang.)'
  },
  {
    id: 'm7h2_21',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ストーカー',
    furigana: 'ストーカー',
    arti: 'Penguntit (Stalker)',
    penjelasan: 'Berasal dari "Stalker". Pelaku yang terobsesi secara tidak sehat lalu terus mengintai dan mengganggu kehidupan pribadi korban.',
    contoh1: '最近、ストーカーに悩む人が増えている。\n(Belakangan ini, jumlah orang yang menderita akibat gangguan penguntit semakin meningkat.)',
    contoh2: 'ストーカー被害について警察に相談する。\n(Berkonsultasi dengan polisi mengenai kerugian/ancaman dari penguntit.)'
  },
  {
    id: 'm7h2_22',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'エリート',
    furigana: 'エリート',
    arti: 'Elit / Golongan atas',
    penjelasan: 'Berasal dari "Elite". Sebutan untuk kelompok atau individu berpendidikan tinggi, cerdas, dan berposisi sukses/atas.',
    contoh1: '彼は一流大学を卒業したエリート社員だ。\n(Dia adalah karyawan elit yang lulus dari universitas ternama.)',
    contoh2: 'エリートコースを歩む。\n(Menapaki jalur karier kesuksesan para elit.)'
  },
  {
    id: 'm7h2_23',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'バリアフリー',
    furigana: 'バリアフリー',
    arti: 'Akses ramah difabel & lansia',
    penjelasan: 'Berasal dari "Barrier-free". Konsep desain/fasilitas tanpa hambatan (tanpa tangga tajam) agar aman untuk lansia dan pengguna kursi roda.',
    contoh1: '祖父母のためにバリアフリーの家を建てる。\n(Membangun rumah ramah lansia/bebas hambatan demi kakek dan nenek.)',
    contoh2: 'この駅はバリアフリー化が進んでいる。\n(Stasiun ini sudah mengalami kemajuan dalam modernisasi fasilitas bebas hambatan [akses disabilitas].)'
  },
  {
    id: 'm7h2_24',
    minggu: '7',
    hari: '2',
    kategori: 'kata benda',
    kanji: 'ニート',
    furigana: 'ニート',
    arti: 'Pengangguran usia sekolah/kerja (NEET)',
    penjelasan: 'Singkatan dari "Not in Education, Employment, or Training". Usia muda yang tidak sekolah, tidak bekerja, dan tidak pelatihan kerja.',
    contoh1: '彼は大学卒業後、就職せずにニートになった。\n(Setelah lulus universitas, dia tidak mencari kerja dan menjadi NEET [pengangguran].)',
    contoh2: 'ニートの若者の社会復帰を支援するプログラム。\n(Program untuk mendukung kembalinya para pemuda NEET ke dalam lingkungan masyarakat/dunia kerja.)'
  }
];

window.vocabData.push(...kosakata_m7h2);