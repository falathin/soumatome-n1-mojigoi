// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m4h2 = [
  // --- KANJI 気 ---
  {
    id: 'm4h2_1',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '水気',
    furigana: 'みずけ',
    arti: 'Kelembapan / Kandungan air',
    penjelasan: 'Mengacu pada kandungan air atau cairan yang terdapat di dalam suatu benda, seperti pada makanan, bahan masakan, atau permukaan basah. Sering digunakan dalam konteks mengeringkan atau menghilangkan sisa air.',
    contoh1: '水気を切る。\n(Menghilangkan kandungan air / mengeringkan kelembapan.)',
    contoh2: '洗った野菜の水気をしっかり拭き取る。\n(Mengelap sisa air pada sayuran yang baru dicuci dengan bersih.)'
  },
  {
    id: 'm4h2_2',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '人気',
    furigana: 'ひとけ',
    arti: 'Tanda-tanda kehadiran orang',
    penjelasan: 'Merujuk pada tanda-tanda keberadaan atau aktivitas manusia di suatu tempat. Sering kali digunakan dalam bentuk negatif (人気のない) untuk mendeskripsikan jalanan, bangunan, atau area yang sunyi sepi tanpa ada seorang pun.',
    contoh1: '人気のない通り。\n(Jalanan yang sepi dan sama sekali tidak ada tanda kehadiran orang.)',
    contoh2: '夜の公園は人気がなくて少し怖い。\n(Taman di malam hari terasa menakutkan karena tidak ada tanda-tanda orang lewat.)'
  },
  {
    id: 'm4h2_3',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '寒気',
    furigana: 'さむけ',
    arti: 'Rasa menggigil / Meriang',
    penjelasan: 'Sensasi rasa dingin atau menggigil yang dirasakan oleh tubuh, biasanya menjadi pertanda awal sebelum seseorang jatuh sakit, demam, terserang flu, ataupun karena merasakan ketakutan.',
    contoh1: '寒気がする。\n(Merasakan hawa dingin / tubuh menggigil.)',
    contoh2: '風邪をひいたのか、急に寒気がしてきた。\n(Sepertinya saya masuk angin, tiba-tiba badan terasa menggigil.)'
  },
  {
    id: 'm4h2_4',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '気心',
    furigana: 'きごころ',
    arti: 'Sifat asli / Watak',
    penjelasan: 'Menggambarkan watak sejati, temperamen, atau sifat dasar seseorang. Biasanya diucapkan ketika dua orang memiliki hubungan persahabatan yang erat di mana mereka sudah saling mengetahui tabiat masing-masing luar dan dalam.',
    contoh1: '気心が知れる。\n(Saling memahami sifat dan watak asli satu sama lain layaknya sahabat dekat.)',
    contoh2: '彼は気心の知れた昔からの仲間だ。\n(Dia adalah rekan lama yang watak aslinya sudah sangat aku ketahui.)'
  },
  {
    id: 'm4h2_5',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '正気',
    furigana: 'しょうき',
    arti: 'Waras / Kesadaran penuh',
    penjelasan: 'Kondisi pikiran yang sehat, sadar penuh, dan rasional. Bisa merujuk pada seseorang yang kembali siuman dari pingsan, atau sebagai ungkapan ketidakpercayaan terhadap tindakan gila seseorang.',
    contoh1: '正気になる。\n(Kembali sadar / mendapatkan kesadarannya kembali.)',
    contoh2: 'あんな危険なことをするなんて正気ではない。\n(Melakukan tindakan berbahaya seperti itu, dia sungguh tidak waras.)'
  },
  {
    id: 'm4h2_6',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '気合',
    furigana: 'きあい',
    arti: 'Semangat membara / Tekad',
    penjelasan: 'Energi, antusiasme, atau curahan semangat penuh yang difokuskan untuk menyelesaikan tugas berat, memenangkan pertandingan, atau mengatasi sebuah tantangan.',
    contoh1: '気合を入れる。\n(Memompa semangat / membulatkan tekad dan energi untuk bersiap.)',
    contoh2: '試合前にチーム全員で気合を入れた。\n(Sebelum bertanding, seluruh anggota tim menyatukan dan memompa semangat.)'
  },
  {
    id: 'm4h2_7',
    minggu: '4',
    hari: '2',
    kategori: 'kata sifat',
    kanji: '気長（な）',
    furigana: 'きなが（な）',
    arti: 'Sabar / Tidak terburu-buru',
    penjelasan: 'Sifat mau bersabar menghadapi sesuatu yang memakan waktu lama tanpa merasa cepat kesal atau mendesak hasil instan.',
    contoh1: '気長に待つ。\n(Menunggu dengan penuh kesabaran dan santai tanpa tergesa-gesa.)',
    contoh2: '気長な性格の人が羨ましい。\n(Aku iri dengan orang-orang yang memiliki sifat penyabar.)'
  },

  // --- KANJI 出 ---
  {
    id: 'm4h2_8',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '出品',
    furigana: 'しゅっぴん',
    arti: 'Mempamerkan / Menawarkan barang',
    penjelasan: 'Kegiatan mengirimkan, menyertakan, atau menampilkan karya seni, produk, maupun barang ke dalam ajang pameran, kompetisi, atau lelang agar bisa dinikmati atau dibeli oleh publik.',
    contoh1: '展覧会に出品する。\n(Mengirimkan atau mempamerkan suatu karya ke dalam acara pameran seni.)',
    contoh2: 'オークションに古い絵を出品した。\n(Saya menawarkan lukisan kuno untuk dipasarkan di pelelangan.)'
  },
  {
    id: 'm4h2_9',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '家出',
    furigana: 'いえで',
    arti: 'Kabur dari rumah',
    penjelasan: 'Tindakan meninggalkan rumah secara sepihak dan diam-diam, yang sering kali didorong oleh masalah pertengkaran keluarga, ketidakpuasan, atau pemberontakan.',
    contoh1: '家出する。\n(Melarikan diri dan pergi dari rumah.)',
    contoh2: '弟は親と喧嘩して家出した。\n(Adik laki-lakiku bertengkar dengan orang tua lalu kabur dari rumah.)'
  },
  {
    id: 'm4h2_10',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '出産',
    furigana: 'しゅっさん',
    arti: 'Melahirkan',
    penjelasan: 'Proses persalinan secara medis atau biologis di mana seorang ibu mengeluarkan bayinya ke dunia.',
    contoh1: '出産する。\n(Mengalami proses persalinan untuk melahirkan bayi.)',
    contoh2: '彼女は来月、初めての子供を出産する。\n(Dia akan melahirkan anak pertamanya pada bulan depan.)'
  },
  {
    id: 'm4h2_11',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '出生',
    furigana: 'しゅっせい',
    arti: 'Kelahiran / Asal-usul',
    penjelasan: 'Istilah formal yang berkaitan dengan riwayat lahirnya seseorang, sering dipakai untuk urusan administrasi, data demografi negara, atau pengisian identitas lokasi kelahiran.',
    contoh1: '出生地。\n(Lokasi geografis atau tempat kelahiran seseorang.)',
    contoh2: '出生率が低下している。\n(Angka rasio kelahiran di negara ini terus mengalami penurunan.)'
  },
  {
    id: 'm4h2_12',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '出題',
    furigana: 'しゅつだい',
    arti: 'Membuat soal ujian',
    penjelasan: 'Proses menentukan, merumuskan, atau mengeluarkan butir-butir pertanyaan dan materi yang akan diujikan kepada para peserta dalam sebuah ujian atau tes.',
    contoh1: '出題範囲。\n(Cakupan atau batasan materi pelajaran yang akan dikeluarkan pada tes.)',
    contoh2: '試験は教科書の1章から出題される。\n(Soal ujian akan diambil dan dibuat berdasarkan materi dari bab pertama buku teks.)'
  },
  {
    id: 'm4h2_13',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '出動',
    furigana: 'しゅつどう',
    arti: 'Pengerahan pasukan / Pemberangkatan',
    penjelasan: 'Aksi memberangkatkan atau menerjunkan satuan pasukan, kepolisian, atau kru darurat secara resmi menuju lokasi insiden, bencana, maupun tempat penugasan.',
    contoh1: '軍隊が出動する。\n(Satuan angkatan militer dikerahkan dan diterjunkan ke lapangan.)',
    contoh2: '救急隊員が事故現場へ出動した。\n(Tim medis darurat telah diberangkatkan menuju lokasi kecelakaan.)'
  },
  {
    id: 'm4h2_14',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '出社',
    furigana: 'しゅっしゃ',
    arti: 'Hadir ke kantor',
    penjelasan: 'Tindakan berangkat dan tiba di tempat kerja (perusahaan) untuk memulai rutinitas pekerjaan. Istilah ini adalah kebalikan dari 退社 (pulang kerja).',
    contoh1: '出社する（＝出勤する）。\n(Berangkat dan tiba di kantor untuk bekerja.)',
    contoh2: '明日は朝早く出社しなければならない。\n(Besok saya harus berangkat ke kantor lebih awal dari biasanya.)'
  },
  {
    id: 'm4h2_15',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '出世',
    furigana: 'しゅっせ',
    arti: 'Naik jabatan / Sukses karier',
    penjelasan: 'Pencapaian promosi besar-besaran, kenaikan jenjang karier yang prestisius, atau pencapaian status sosial dan posisi yang sangat sukses di dalam masyarakat atau perusahaan.',
    contoh1: '彼は順調に出世した。\n(Kariernya meningkat pesat dan dia sukses naik jabatan dengan lancar tanpa kendala.)',
    contoh2: '出世よりも家族との時間を大切にしたい。\n(Saya lebih mementingkan waktu bersama keluarga daripada mengejar promosi kesuksesan karier.)'
  },

  // --- KANJI 下 ---
  {
    id: 'm4h2_16',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '下味',
    furigana: 'したあじ',
    arti: 'Bumbu dasar',
    penjelasan: 'Proses merendam, melumuri, atau memberikan bumbu perasa awal kepada bahan makanan mentah sebelum dilanjutkan ke tahap memasak utama agar rasanya lebih tajam dan meresap.',
    contoh1: '塩こしょうで下味をつける。\n(Mengoleskan garam dan lada sebagai bumbu dasar pada bahan makanan sebelum dimasak.)',
    contoh2: '肉に下味をつけて冷蔵庫で寝かせる。\n(Melumuri daging dengan bumbu dasar lalu mendiamkannya di dalam kulkas agar meresap.)'
  },
  {
    id: 'm4h2_17',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '下地',
    furigana: 'したじ',
    arti: 'Fondasi / Dasar',
    penjelasan: 'Merujuk pada lapisan dasar sebelum melakukan sesuatu (seperti krim alas bedak wajah atau primer cat), maupun fondasi kecakapan atau pengetahuan fundamental yang dimiliki seseorang sebelum mempelajari tingkat mahir.',
    contoh1: '化粧の下地クリーム。\n(Krim dasar atau alas bedak riasan wajah.)',
    contoh2: '彼は語学の下地がある。\n(Dia sudah mempunyai fondasi kecakapan dasar dalam hal bahasa asing.)'
  },
  {
    id: 'm4h2_18',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '下火',
    furigana: 'したび',
    arti: 'Mereda / Mulai padam',
    penjelasan: 'Menggambarkan situasi di mana tren, kepopuleran, amukan api, atau penyebaran suatu epidemi penyakit sudah mulai mereda, menurun, dan kehilangan kekuatan puncaknya.',
    contoh1: 'インフルエンザの流行が下火になってきた。\n(Tren penyebaran wabah flu tersebut akhirnya sudah mulai mereda.)',
    contoh2: 'そのファッションのブームも下火になった。\n(Tren ledakan mode pakaian tersebut saat ini sudah tidak terlalu populer lagi.)'
  },

  // --- KANJI 上 ---
  {
    id: 'm4h2_19',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '上向く',
    furigana: 'うわむく',
    arti: 'Membaik / Menanjak',
    penjelasan: 'Selain gerakan fisik melihat ke atas, secara kiasan kata ini menyoroti pergerakan situasi (terutama urusan ekonomi, bisnis, atau tren) yang grafiknya mulai menunjukkan indikasi perbaikan atau kebangkitan positif.',
    contoh1: '景気が上向く。\n(Kondisi tren perekonomian yang mulai bangkit dan bergerak ke arah positif.)',
    contoh2: '努力の結果、成績が上向いてきた。\n(Berkat kerja keras, grafik nilai ujian akhirnya mulai membaik.)'
  },
  {
    id: 'm4h2_20',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '上回る',
    furigana: 'うわまわる',
    arti: 'Melampaui / Melebihi',
    penjelasan: 'Kondisi saat sebuah perhitungan statistik, capaian target penjualan, atau jumlah riil rupanya berhasil melebihi atau melampaui batas dan perkiraan awal yang telah diprediksi.',
    contoh1: '出生率が予想を上回る。\n(Tingkat kelahiran anak ternyata sukses melampaui rasio prediksi statistik awal.)',
    contoh2: '利益が去年の実績を上回った。\n(Pendapatan laba yang diperoleh melampaui pencapaian pada tahun lalu.)'
  },
  {
    id: 'm4h2_21',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '上の空',
    furigana: 'うわのそら',
    arti: 'Melamun / Pikirannya melayang',
    penjelasan: 'Menyatakan keadaan seseorang yang pikirannya kosong, terpecah, atau sedang memikirkan hal lain, sehingga dia tidak menangkap atau mendengarkan hal-hal yang terjadi tepat di depan matanya.',
    contoh1: '彼は上の空で、話を聞いていなかった。\n(Pikirannya melayang entah ke mana, sehingga dia sama sekali tidak menyimak pembicaraan tersebut.)',
    contoh2: '心配事があるのか、彼女はずっと上の空だった。\n(Entah karena ada kekhawatiran berat, dia terus melamun saja tanpa fokus sedari tadi.)'
  },
  {
    id: 'm4h2_22',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '上書き',
    furigana: 'うわがき',
    arti: 'Menimpa data (Overwrite)',
    penjelasan: 'Dalam istilah komputer atau dokumentasi, ini adalah langkah menyimpan fail atau tulisan baru tepat di atas lokasi fail lama, yang mana akan memusnahkan versi lamanya secara permanen.',
    contoh1: 'データを上書きして保存する。\n(Menyimpan fail ke sistem dengan cara menimpa data yang lama.)',
    contoh2: '間違えて大切なファイルを上書きしてしまった。\n(Aku tak sengaja menyimpan menimpa file penting tersebut sehingga file aslinya terhapus.)'
  },

  // --- KANJI 回 ---
  {
    id: 'm4h2_23',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '回送',
    furigana: 'かいそう',
    arti: 'Berjalan kosong (Kendaraan operasional)',
    penjelasan: 'Kondisi di mana kendaraan transportasi publik (seperti bus atau kereta) sedang tidak beroperasi mengangkut penumpang (Out of Service) dan hanya melaju untuk kembali masuk ke garasi atau pangkalan.',
    contoh1: 'バスが車庫に回送される。\n(Bus yang sudah habis jam operasionalnya dikemudikan kembali ke dalam garasi pangkalan.)',
    contoh2: '回送列車が通過します。\n(Satu unit kereta api tanpa penumpang (out of service) akan melintas di stasiun.)'
  },
  {
    id: 'm4h2_24',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '回答',
    furigana: 'かいとう',
    arti: 'Memberi tanggapan / Jawaban',
    penjelasan: 'Pemberian respons, penyelesaian masalah, atau jawaban balasan terhadap pihak lain atas sebuah pertanyaan survei, kuesioner, ataupun surat permohonan resmi.',
    contoh1: 'アンケートに回答する。\n(Mengisi jawaban dan merespons formulir kuesioner penelitian tersebut.)',
    contoh2: '会社からの正式な回答を待つ。\n(Menunggu konfirmasi atau jawaban resmi dari pihak perusahaan.)'
  },
  {
    id: 'm4h2_25',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '回り道',
    furigana: 'まわりみち',
    arti: 'Jalan memutar',
    penjelasan: 'Menghindari rintangan secara sengaja dengan memilih alternatif rute jalan yang arahnya agak memutar. Kata ini juga sering dipakai sebagai kiasan dalam hidup yang tidak mengambil rute lurus.',
    contoh1: '回り道をする。\n(Membelokkan arah lalu menempuh rute yang memutar jauh ke tujuan.)',
    contoh2: '道が混んでいたので回り道して帰った。\n(Karena jalanan utama macet, saya mengambil jalan memutar untuk pulang.)'
  },
  {
    id: 'm4h2_26',
    minggu: '4',
    hari: '2',
    kategori: 'kata kerja',
    kanji: '遠回り',
    furigana: 'とおまわり',
    arti: 'Mengambil rute lebih jauh',
    penjelasan: 'Secara makna sangat mirip dengan 回り道, menekankan pada tindakan mengambil rute jalan yang jarak fisiknya memakan waktu tempuh yang jauh lebih panjang dari rute idealnya.',
    contoh1: '工事のせいで、遠回りした。\n(Karena jalan ditutup untuk perbaikan, saya terpaksa merutekan perjalanan memutar yang lebih jauh.)',
    contoh2: '天気がいいので、少し遠回りして歩く。\n(Karena cuacanya sangat bagus, saya sengaja berjalan kaki sedikit jauh melingkar menempuh rute yang lebih panjang.)'
  },
  {
    id: 'm4h2_27',
    minggu: '4',
    hari: '2',
    kategori: 'kata benda',
    kanji: '後回し',
    furigana: 'あとまわし',
    arti: 'Ditunda nanti',
    penjelasan: 'Keputusan untuk menangguhkan atau menggeser pelaksanaan suatu pekerjaan dan urusan tertentu ke urutan jadwal yang belakangan, demi mendahulukan hal lain yang dirasa jauh lebih penting dan mendesak.',
    contoh1: '食事は後回しにしよう。\n(Mari kita tunda urusan makan-makan ini ke jadwal nanti saja.)',
    contoh2: '面倒な作業をつい後回しにしてしまう。\n(Aku tanpa disadari sering kali menunda pekerjaan yang terkesan merepotkan.)'
  }
];

window.vocabData.push(...kosakata_m4h2);