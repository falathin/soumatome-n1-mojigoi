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
    arti: 'Kandungan air / Basah',
    penjelasan: 'Sisa air atau keadaan basah pada suatu benda, misalnya pada sayuran yang baru dicuci. Biasanya dipakai saat kita ingin mengeringkan atau membuang sisa air tersebut.',
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
    arti: 'Tanda keberadaan orang',
    penjelasan: 'Hawa atau tanda bahwa ada orang di suatu tempat. Biasanya dipakai dalam bentuk negatif (人気のない) untuk menyebut tempat yang sangat sepi dan tidak ada orang sama sekali.',
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
    arti: 'Meriang / Menggigil',
    penjelasan: 'Rasa dingin atau menggigil pada tubuh. Biasanya dirasakan saat kita akan mulai sakit, demam, masuk angin, atau saat merasa ketakutan.',
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
    penjelasan: 'Sifat atau watak asli seseorang. Sering dipakai untuk menggambarkan teman dekat atau sahabat karena kita sudah sangat paham sifat baik dan buruknya.',
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
    arti: 'Waras / Sadar',
    penjelasan: 'Keadaan pikiran yang sadar, sehat, dan waras. Bisa juga dipakai untuk menegur orang yang bertingkah aneh atau nekat, seolah bertanya "Kamu waras?".',
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
    arti: 'Semangat / Tekad',
    penjelasan: 'Semangat atau dorongan energi yang kuat untuk melakukan sesuatu. Biasanya diucapkan saat kita harus fokus dan memberikan usaha maksimal, seperti sebelum bertanding atau bekerja keras.',
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
    arti: 'Sabar / Santai',
    penjelasan: 'Sifat sabar dan tidak terburu-buru. Menggambarkan sikap santai saat menunggu sesuatu yang memakan waktu lama tanpa merasa kesal.',
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
    arti: 'Memajang barang / Mengikutkan pameran',
    penjelasan: 'Menampilkan barang atau karya seni di sebuah acara pameran, kontes, atau lelang agar bisa dilihat atau dibeli oleh orang lain.',
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
    penjelasan: 'Pergi atau melarikan diri dari rumah secara diam-diam. Biasanya terjadi karena sedang marah atau bertengkar dengan keluarga.',
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
    penjelasan: 'Proses melahirkan bayi atau persalinan.',
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
    arti: 'Kelahiran',
    penjelasan: 'Istilah resmi untuk "kelahiran". Kata ini lebih kaku dan biasanya hanya dipakai untuk urusan dokumen resmi, seperti tempat lahir atau angka kelahiran penduduk.',
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
    arti: 'Membuat atau mengeluarkan soal ujian',
    penjelasan: 'Membuat, menentukan, atau mengeluarkan soal untuk sebuah ujian atau tes.',
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
    arti: 'Turun ke lapangan / Dikerahkan',
    penjelasan: 'Memberangkatkan pasukan, polisi, atau tim darurat (seperti ambulans dan pemadam kebakaran) ke lokasi kejadian.',
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
    arti: 'Masuk kantor / Pergi bekerja',
    penjelasan: 'Pergi atau datang ke kantor untuk bekerja. Ini adalah kebalikan dari pulang kerja (退社 / たいしゃ).',
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
    arti: 'Naik jabatan / Sukses',
    penjelasan: 'Sukses dalam pekerjaan, seperti mendapatkan promosi atau naik jabatan ke posisi yang lebih tinggi di perusahaan.',
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
    arti: 'Bumbu dasar / Bumbu perendam',
    penjelasan: 'Bumbu yang diberikan atau dilumurkan pada bahan makanan mentah sebelum dimasak. Tujuannya agar rasa bumbu lebih meresap ke dalam makanan.',
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
    arti: 'Dasar / Fondasi',
    penjelasan: 'Lapisan dasar sebelum memulai sesuatu, seperti alas bedak sebelum pakai makeup. Bisa juga berarti dasar pengetahuan atau kemampuan seseorang sebelum belajar hal yang lebih susah.',
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
    arti: 'Mereda / Tidak populer lagi',
    penjelasan: 'Keadaan di mana sesuatu sudah mulai mereda atau menurun. Biasanya dipakai untuk tren yang sudah tidak populer lagi, wabah penyakit yang mulai berkurang, atau api yang mulai padam.',
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
    arti: 'Mulai membaik / Naik',
    penjelasan: 'Selain berarti melihat ke atas, kata ini sering dipakai untuk menunjukkan keadaan yang mulai membaik. Contohnya ekonomi, bisnis, atau nilai sekolah yang grafiknya mulai naik.',
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
    penjelasan: 'Melebihi target, batas, atau perkiraan awal. Misalnya hasil keuntungan perusahaan yang ternyata lebih besar dari yang diperkirakan.',
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
    penjelasan: 'Keadaan saat pikiran sedang kosong atau memikirkan hal lain. Akibatnya, orang tersebut melamun dan tidak fokus mendengarkan pembicaraan di sekitarnya.',
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
    penjelasan: 'Menyimpan dokumen atau file baru dengan cara menimpa file yang lama (overwrite). File lama akan hilang dan digantikan yang baru.',
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
    arti: 'Kembali ke garasi (Out of Service)',
    penjelasan: 'Status kendaraan umum (seperti bus atau kereta) yang sedang tidak melayani penumpang dan sedang berjalan kembali ke garasi (Out of Service).',
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
    arti: 'Jawaban / Balasan',
    penjelasan: 'Memberikan jawaban, balasan, atau respons. Biasanya dipakai untuk menjawab survei, kuesioner, atau surat resmi.',
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
    penjelasan: 'Sengaja mengambil rute jalan lain yang agak memutar. Biasanya dilakukan untuk menghindari rintangan seperti jalan macet atau ditutup.',
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
    arti: 'Mengambil jalan yang lebih jauh',
    penjelasan: 'Mirip dengan 回り道, tapi ini lebih menekankan pada jarak yang ditempuh jadi terasa jauh lebih panjang atau memakan waktu lebih lama dari jalan biasanya.',
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
    arti: 'Ditunda / Dikerjakan belakangan',
    penjelasan: 'Menunda suatu pekerjaan atau urusan untuk dikerjakan nanti saja, karena ingin mendahulukan hal lain yang lebih penting.',
    contoh1: '食事は後回しにしよう。\n(Mari kita tunda urusan makan-makan ini ke jadwal nanti saja.)',
    contoh2: '面倒な作業をつい後回しにしてしまう。\n(Aku tanpa disadari sering kali menunda pekerjaan yang terkesan merepotkan.)'
  }
];

window.vocabData.push(...kosakata_m4h2);