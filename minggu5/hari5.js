// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || []

const kosakata_m5h5 = [
  // --- GAMBAR 1 (Kata Kerja Kelompok 1 & 2) ---
  {
    id: 'm5h5_1',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '築く',
    furigana: 'きずく',
    arti: 'Membangun / Menciptakan',
    penjelasan:
      'Dipakai untuk membangun hal fisik yang butuh usaha besar (seperti bendungan/benteng) ATAU hal abstrak (seperti hubungan kepercayaan, keluarga, karier).',
    contoh1: 'ダムを築く。\n(Membangun bendungan.)',
    contoh2:
      '二人の間に信頼関係を築く。\n(Membangun hubungan kepercayaan di antara mereka berdua.)'
  },
  {
    id: 'm5h5_2',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '描く',
    furigana: 'えがく',
    arti: 'Menggambarkan / Membayangkan',
    penjelasan:
      'Bisa berarti melukis gambar nyata, tapi lebih sering dipakai untuk memvisualisasikan/membayangkan impian, perasaan, atau masa depan di dalam pikiran.',
    contoh1: '風景を心に描く。\n(Menggambarkan pemandangan di dalam pikiran.)',
    contoh2: '将来の夢を描く。\n(Membayangkan impian masa depan.)'
  },
  {
    id: 'm5h5_3',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '背く',
    furigana: 'そむく',
    arti: 'Membangkang / Mengingkari',
    penjelasan:
      'Tindakan menentang, melanggar, atau berpaling dari hal yang seharusnya diturut (seperti perintah, aturan, atau harapan orang tua).',
    contoh1: '命令に背く。\n(Membangkang perintah.)',
    contoh2: '親の期待に背く。\n(Mengingkari harapan orang tua.)'
  },
  {
    id: 'm5h5_4',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '相次ぐ',
    furigana: 'あいつぐ',
    arti: 'Terjadi berturut-turut',
    penjelasan:
      'Dipakai ketika suatu kejadian (biasanya kabar buruk, kecelakaan, atau komplain) terjadi terus-menerus secara beruntun dalam waktu dekat.',
    contoh1: '事故が相次ぐ。\n(Kecelakaan terjadi berturut-turut.)',
    contoh2:
      '客からの苦情が相次いでいる。\n(Komplain dari pelanggan datang silih berganti.)'
  },
  {
    id: 'm5h5_5',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '試みる',
    furigana: 'こころみる',
    arti: 'Mencoba / Melakukan eksperimen',
    penjelasan:
      'Bentuk lebih formal dari kata "試す" (tamesu). Artinya mencoba suatu hal atau metode baru untuk melihat seperti apa hasilnya nanti.',
    contoh1: '実験を試みる。\n(Mencoba melakukan eksperimen.)',
    contoh2: '新しい方法を試みる。\n(Mencoba metode baru.)'
  },
  {
    id: 'm5h5_6',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '省みる',
    furigana: 'かえりみる',
    arti: 'Merenungkan / Introspeksi diri',
    penjelasan:
      'Melihat kembali tindakan atau masa lalu sendiri untuk mengevaluasi kesalahan dan memperbaiki diri.',
    contoh1: '過去を省みる。\n(Merenungkan masa lalu.)',
    contoh2:
      '自分の行動を深く省みる。\n(Mengintrospeksi tindakan diri sendiri secara mendalam.)'
  },
  {
    id: 'm5h5_7',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '帯びる',
    furigana: 'おびる',
    arti: 'Mengandung / Membawa / Memiliki sifat',
    penjelasan:
      'Punya beberapa arti: membawa benda (seperti pedang), mengemban tugas, atau terpancar sifat/kesan tertentu (misal: mengandung warna, bau alkohol, atau nada marah).',
    contoh1:
      '酒気を帯びる。\n(Mengandung bau alkohol / Berada dalam pengaruh alkohol.)',
    contoh2:
      '怒りを帯びた声で話す。\n(Berbicara dengan suara yang bernada marah.)'
  },

  // --- GAMBAR 2 (Kata Kerja Kelompok 2 - Lanjutan) ---
  {
    id: 'm5h5_8',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '経る',
    furigana: 'へる',
    arti: 'Melewati / Melalui',
    penjelasan:
      'Digunakan saat melewatin proses/kurun waktu tertentu (misal: melewati 10 tahun), ATAU transit melalui suatu tempat dalam perjalanan.',
    contoh1: '十年の年月を経る。\n(Melewati waktu 10 tahun.)',
    contoh2:
      'ドイツを経てイギリスへ行く。\n(Pergi ke Inggris dengan transit melalui Jerman.)'
  },
  {
    id: 'm5h5_9',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '構える',
    furigana: 'かまえる',
    arti: 'Mendirikan / Mengambil posisi siap',
    penjelasan:
      'Bisa berarti mendirikan bangunan/toko di suatu tempat, ATAU mengambil sikap/postur tubuh siap sedia (seperti bersiap pegang kamera atau pegang senjata).',
    contoh1: '大通りに店を構える。\n(Mendirikan toko di jalan utama.)',
    contoh2: 'カメラを構える。\n(Mengambil posisi siap memotret dengan kamera.)'
  },
  {
    id: 'm5h5_10',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '栄える',
    furigana: 'さかえる',
    arti: 'Makmur / Berjaya',
    penjelasan:
      'Kondisi saat kota, negara, atau bisnis sedang berada dalam masa kejayaan, ramai, dan berkembang pesat.',
    contoh1: '国が栄える。\n(Negara menjadi makmur.)',
    contoh2: 'その町は商業で栄えている。\n(Kota itu makmur berkat perdagangan.)'
  },
  {
    id: 'm5h5_11',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '絶える',
    furigana: 'たえる',
    arti: 'Terputus / Habis / Berhenti',
    penjelasan:
      'Sesuatu yang tadinya berjalan terus tiba-tiba terhenti total atau habis (seperti hubungan kontak, garis keturunan, atau suara).',
    contoh1: '連絡が絶える。\n(Kabar/kontak terputus.)',
    contoh2: '家系が絶える。\n(Garis keturunan keluarga terputus/habis.)'
  },
  {
    id: 'm5h5_12',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '映える',
    furigana: 'はえる',
    arti: 'Tampak menonjol / Indah dipandang',
    penjelasan:
      'Suatu objek terlihat sangat bagus dan kontras karena pantulan cahaya (seperti senja) atau perpaduan warna yang cocok.',
    contoh1: '夕日に映える。\n(Tampak indah terkena sinar matahari terbenam.)',
    contoh2:
      '青い海に白い船が映える。\n(Kapal putih terlihat menonjol dan kontras cantik di laut biru.)'
  },
  {
    id: 'm5h5_13',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '整える',
    furigana: 'ととのえる',
    arti: 'Merapikan / Mengatur',
    penjelasan:
      'Merapikan hal yang berantakan atau menata persiapan agar siap dipakai (seperti merapikan baju, menata napas, atau mengatur jadwal).',
    contoh1: '服装を整える。\n(Merapikan pakaian/penampilan.)',
    contoh2:
      '深呼吸をして息を整える。\n(Napas dalam-dalam untuk menenangkan pernapasan.)'
  },
  {
    id: 'm5h5_14',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '授ける',
    furigana: 'さずける',
    arti: 'Menganugerahkan / Mewariskan',
    penjelasan:
      'Pemberian hal berharga dari kedudukan tinggi ke yang lebih rendah (seperti memberi penghargaan, gelar resmi, atau ilmu/jurus rahasia).',
    contoh1: '賞を授ける。\n(Menganugerahkan penghargaan.)',
    contoh2: '弟子に秘伝の技を授ける。\n(Mewariskan ilmu rahasia kepada murid.)'
  },
  {
    id: 'm5h5_15',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '傾ける',
    furigana: 'かたむける',
    arti: 'Memiringkan / Mencurahkan',
    penjelasan:
      'Memiringkan benda secara fisik, ATAU memfokuskan penuh perhatian/semangat pada sesuatu (contoh: memiringkan telinga = menyimak baik-baik).',
    contoh1: '耳を傾ける。\n(Mendengarkan baik-baik / Menyimak.)',
    contoh2:
      '研究に情熱を傾ける。\n(Mencurahkan seluruh semangat pada penelitian.)'
  },
  {
    id: 'm5h5_16',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '設ける',
    furigana: 'もうける',
    arti: 'Menyediakan / Mendirikan',
    penjelasan:
      'Menyiapkan atau membuat sesuatu untuk tujuan khusus (misal: membuka loket bantuan, membuat aturan, atau menyediakan waktu berdiskusi).',
    contoh1: '相談窓口を設ける。\n(Menyediakan/membuka loket konsultasi.)',
    contoh2:
      '話し合いの機会を設ける。\n(Menyediakan kesempatan untuk berdiskusi.)'
  },
  {
    id: 'm5h5_17',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '手掛ける',
    furigana: 'てがける',
    arti: 'Menangani langsung',
    penjelasan:
      'Mengurus atau mengerjakan sendiri suatu proyek, desain, pekerjaan, atau membesarkan seseorang dari tangan sendiri.',
    contoh1: '設計を手掛ける。\n(Menangani proyek desain secara langsung.)',
    contoh2: '新しい事業を手掛ける。\n(Menangani bisnis baru.)'
  },
  {
    id: 'm5h5_18',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '定める',
    furigana: 'さだめる',
    arti: 'Menetapkan / Menentukan',
    penjelasan:
      'Membuat keputusan resmi yang pasti (seperti mengesahkan undang-undang, menentukan target masa depan, atau memilih lokasi tinggal).',
    contoh1: '憲法を定める。\n(Menetapkan undang-undang dasar.)',
    contoh2: '今後の目標を定める。\n(Menentukan target ke depan.)'
  },
  {
    id: 'm5h5_19',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '目覚める',
    furigana: 'めざめる',
    arti: 'Terbangun / Sadar/Tergugah',
    penjelasan:
      'Bangun fisik dari tidur, ATAU mulai menyadari/tergugah minat dan bakat pada suatu hal (seperti baru sadar suka seni).',
    contoh1: '夢から目覚める。\n(Terbangun dari mimpi.)',
    contoh2: '芸術に目覚める。\n(Mulai sadar/tergugah minat pada dunia seni.)'
  },
  {
    id: 'm5h5_20',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '暮れる',
    furigana: 'くれる',
    arti: 'Berakhir / Menjadi gelap',
    penjelasan:
      'Berakhirnya waktu, terutama untuk matahari terbenam (hari jadi gelap) atau akhir tahun. *Idiom penting:* 「途方に暮れる」(tohō ni kureru) = bingung/buntu jalan.',
    contoh1: '日が暮れる。\n(Matahari terbenam / Hari menjadi gelap.)',
    contoh2:
      'どうしていいかわからず途方に暮れる。\n(Bingung/buntu karena tidak tahu harus berbuat apa.)'
  },
  {
    id: 'm5h5_21',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '遅らせる',
    furigana: 'おくらせる',
    arti: 'Menunda / Memundurkan',
    penjelasan:
      'Sengaja membuat waktu pelaksanaan atau jadwal menjadi terundur / lebih lambat dari rencana awal.',
    contoh1: '出発を遅らせる。\n(Menunda waktu keberangkatan.)',
    contoh2:
      '時計の針を5分遅らせる。\n(Memundurkan jarum jam sebanyak 5 menit.)'
  },
  {
    id: 'm5h5_22',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '寝かせる',
    furigana: 'ねかせる',
    arti: 'Menidurkan / Mendiamkan (adonan)',
    penjelasan:
      'Menidurkan anak/pasien, ATAU dalam bidang masak: mendiamkan adonan/daging sebentar supaya bumbunya meresap sempurna.',
    contoh1: '子どもを寝かせる。\n(Menidurkan anak.)',
    contoh2: 'パンの生地を寝かせる。\n(Mendiamkan adonan roti.)'
  },
  {
    id: 'm5h5_23',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '震わせる',
    furigana: 'ふるわせる',
    arti: 'Menggetarkan / Gemetar',
    penjelasan:
      'Membuat bagian tubuh atau suara bergetar akibat luapan emosi (seperti takut, marah, terharu).',
    contoh1: '声を震わせる。\n(Suaranya bergetar karena emosi.)',
    contoh2: '怒りで体を震わせる。\n(Tubuhnya gemetar karena marah.)'
  },

  // --- GAMBAR 3 (Kata Kerja Kelompok 3: ~suru dan ~jiru) ---
  {
    id: 'm5h5_24',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '値する',
    furigana: 'あたいする',
    arti: 'Pantas / Layak',
    penjelasan:
      'Memiliki kualitas yang bernilai sehingga sangat pantas menerima perlakuan tertentu (layak dipuji, layak dibaca, dll).',
    contoh1: 'この本は一読に値する。\n(Buku ini sangat layak untuk dibaca.)',
    contoh2:
      '彼の勇気ある行動は称賛に値する。\n(Aksi beraninya sangat pantas dipuji.)'
  },
  {
    id: 'm5h5_25',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '害する',
    furigana: 'がいする',
    arti: 'Merusak / Merugikan',
    penjelasan:
      'Melakukan tindakan yang merusak atau berdampak buruk bagi kesehatan, keselamatan, atau perasaan orang lain.',
    contoh1: '健康を害する。\n(Merusak kesehatan.)',
    contoh2: '人の気分を害する。\n(Merusak/menyinggung perasaan orang lain.)'
  },
  {
    id: 'm5h5_26',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '称する',
    furigana: 'しょうする',
    arti: 'Mengaku-ngaku / Beralasan',
    penjelasan:
      'Mengaku atau menyebut dirinya sebagai seseorang (biasanya bohong/mengaku-ngaku), ATAU berdalih palsu untuk menghindari sesuatu.',
    contoh1: '弁護士と称する男。\n(Pria yang mengaku-ngaku sebagai pengacara.)',
    contoh2: '病気だと称して欠席する。\n(Berdalih sakit untuk absen.)'
  },
  {
    id: 'm5h5_27',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '制する',
    furigana: 'せいする',
    arti: 'Mengendalikan / Menahan',
    penjelasan:
      'Menguasai atau menahan keadaan yang gejolak (seperti mengendalikan massa, menahan amarah, atau memenangi kejuaraan).',
    contoh1: '警官が群集を制する。\n(Polisi mengendalikan kerumunan massa.)',
    contoh2: '怒りの感情を制する。\n(Menahan amarah.)'
  },
  {
    id: 'm5h5_28',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '脱する',
    furigana: 'だっする',
    arti: 'Lolos / Melepaskan diri',
    penjelasan:
      'Berhasil keluar atau lolos dari kondisi yang buruk, berbahaya, atau krisis.',
    contoh1: '危険を脱する。\n(Lolos dari bahaya.)',
    contoh2:
      'ようやく経済的な危機を脱した。\n(Akhirnya berhasil keluar dari krisis ekonomi.)'
  },
  {
    id: 'm5h5_29',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '徹する',
    furigana: 'てっする',
    arti: 'Fokus total pada satu peran',
    penjelasan:
      'Berdedikasi dan bertindak penuh dalam satu peran tanpa teralih hal lain (misal: fokus total jadi pendengar, atau bekerja di balik layar).',
    contoh1: '裏方に徹する。\n(Bekerja dan berdedikasi penuh di balik layar.)',
    contoh2:
      '今日は聞き手に徹する。\n(Hari ini saya akan fokus penuh menjadi pendengar saja.)'
  },
  {
    id: 'm5h5_30',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '面する',
    furigana: 'めんする',
    arti: 'Menghadap ke',
    penjelasan:
      'Letak fisik bangunan atau ruangan yang posisinya berhadapan langsung ke suatu tempat (seperti jalan, laut, atau taman).',
    contoh1:
      '大通りに面する家。\n(Rumah yang menghadap langsung ke jalan utama.)',
    contoh2:
      '海に面した部屋に泊まる。\n(Menginap di kamar yang menghadap ke laut.)'
  },
  {
    id: 'm5h5_31',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '要する',
    furigana: 'ようする',
    arti: 'Memerlukan / Membutuhkan',
    penjelasan:
      'Menyatakan bahwa suatu urusan membutuhkan waktu, biaya, atau tingkat kehati-hatian tertentu.',
    contoh1: '急を要する連絡。\n(Pesan yang membutuhkan penanganan mendesak.)',
    contoh2: '解決に長い時間を要する。\n(Membutuhkan waktu lama untuk selesai.)'
  },
  {
    id: 'm5h5_32',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '案じる',
    furigana: 'あんじる',
    arti: 'Khawatir / Memikirkan',
    penjelasan:
      'Merasa cemas dan memikirkan nasib atau kondisi seseorang/masa depan dengan rasa peduli yang mendalam.',
    contoh1: '両親の健康を案じる。\n(Mengkhawatirkan kesehatan orang tua.)',
    contoh2:
      '将来を案じて眠れない。\n(Tidak bisa tidur karena mengkhawatirkan masa depan.)'
  },
  {
    id: 'm5h5_33',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '重んじる',
    furigana: 'おもんじる',
    arti: 'Mementingkan / Menghargai tinggi',
    penjelasan:
      'Memberikan nilai atau prioritas yang sangat tinggi pada suatu hal (seperti tradisi, pendidikan, atau norma).',
    contoh1: '学歴を重んじる。\n(Mementingkan riwayat pendidikan.)',
    contoh2: '古い伝統を重んじる。\n(Sangat menghargai tradisi lama.)'
  },
  {
    id: 'm5h5_34',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '演じる',
    furigana: 'えんじる',
    arti: 'Memerankan / Memainkan peran',
    penjelasan:
      'Berakting menjadi tokoh di film/drama, ATAU bersikap pura-pura menjadi peran tertentu dalam kehidupan nyata.',
    contoh1:
      'ドラマのヒロインを演じる。\n(Memerankan tokoh utama wanita di drama.)',
    contoh2:
      '彼は被害者を演じている。\n(Dia pura-pura bersikap sebagai korban.)'
  },
  {
    id: 'm5h5_35',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '興じる',
    furigana: 'きょうじる',
    arti: 'Asyik bersenang-senang',
    penjelasan:
      'Sangat menikmati dan terhanyut dalam suatu hiburan, permainan, atau perbincangan santai.',
    contoh1: 'トランプに興じる。\n(Asyik main kartu.)',
    contoh2: '昔話に興じる。\n(Asyik terhanyut ngobrolin masa lalu.)'
  },
  {
    id: 'm5h5_36',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '禁じる',
    furigana: 'きんじる',
    arti: 'Melarang',
    penjelasan:
      'Tindakan melarang sesuatu secara resmi berdasarkan aturan hukum, norma, atau otoritas.',
    contoh1: '法律で禁じられている。\n(Dilarang oleh hukum.)',
    contoh2:
      '未成年の飲酒は禁じられている。\n(Minum alkohol untuk anak di bawah umur dilarang.)'
  },
  {
    id: 'm5h5_37',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '準じる',
    furigana: 'じゅんじる',
    arti: 'Mengacu pada / Menyesuaikan',
    penjelasan:
      'Menentukan keputusan atau patokan standar berdasarkan aturan yang sudah ada sebelumnya.',
    contoh1:
      '待遇は年齢に準じる。\n(Gaji/fasilitas disesuaikan mengacu pada umur.)',
    contoh2:
      '会社の規則に準じて処理する。\n(Diproses mengacu pada peraturan perusahaan.)'
  },
  {
    id: 'm5h5_38',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '転じる',
    furigana: 'てんじる',
    arti: 'Beralih / Berubah arah',
    penjelasan:
      'Arah, kondisi, atau obrolan yang mendadak berubah atau beralih ke situasi lain.',
    contoh1: '状況が好転に転じる。\n(Situasi beralih ke arah yang membaik.)',
    contoh2: '話題を転じる。\n(Mengalihkan topik pembicaraan.)'
  },
  {
    id: 'm5h5_39',
    minggu: '5',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '報じる',
    furigana: 'ほうじる',
    arti: 'Memberitakan / Melaporkan',
    penjelasan:
      'Menyampaikan berita atau kejadian kepada publik (biasanya dilakukan oleh media massa seperti TV atau koran).',
    contoh1: '新聞が事件を報じる。\n(Koran memberitakan kejadian tersebut.)',
    contoh2: 'ニュースで速報を報じる。\n(Menyiarkan berita sela di TV.)'
  }
]

window.vocabData.push(...kosakata_m5h5)

if (typeof kosakata_m5h4 !== 'undefined') {
  window.vocabData.push(...kosakata_m5h4)
}
