// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m5h1 = [
  // --- KANJI 当 (Tou) ---
  {
    id: 'm5h1_1',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '当日',
    furigana: 'とうじつ',
    arti: 'Hari H / Hari kejadian',
    penjelasan: 'Merujuk pada hari di mana sebuah acara, ujian, atau janji temu yang sudah ditetapkan benar-benar terjadi.',
    contoh1: '試験の当日。\n(Hari H ujian.)',
    contoh2: '当日は晴れるといいですね。\n(Semoga cuacanya cerah ya pas hari H nanti.)'
  },
  {
    id: 'm5h1_2',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '当番',
    furigana: 'とうばん',
    arti: 'Giliran tugas / Piket',
    penjelasan: 'Tugas rutin harian yang diberikan secara bergiliran dalam sebuah kelompok, seperti piket kebersihan kelas, buang sampah, atau jaga loket.',
    contoh1: '掃除当番。\n(Giliran piket bersih-bersih.)',
    contoh2: '今日のゴミ捨て当番は誰ですか。\n(Siapa yang kebagian piket buang sampah hari ini?)'
  },
  {
    id: 'm5h1_3',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '当人',
    furigana: 'とうにん',
    arti: 'Orang yang bersangkutan',
    penjelasan: 'Merujuk langsung pada individu yang sedang dibicarakan, atau orang yang terlibat langsung dalam suatu masalah.',
    contoh1: '当人に確認する。\n(Memastikan langsung kepada orang yang bersangkutan.)',
    contoh2: '周りは心配しているが、当人は気にしていない。\n(Orang-orang sekitarnya khawatir, tapi orang yang bersangkutan malah santai saja.)'
  },
  {
    id: 'm5h1_4',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '当選',
    furigana: 'とうせん',
    arti: 'Terpilih (pemilu) / Menang (undian)',
    penjelasan: 'Kondisi di mana seseorang berhasil menang atau terpilih dalam pemilihan umum, atau memenangkan hadiah undian. Kebalikannya adalah 落選 (rakusen) yang berarti kalah atau tidak terpilih.',
    contoh1: '選挙で当選する。\n(Terpilih/menang dalam pemilu.)',
    contoh2: '宝くじに当選して驚いた。\n(Saya kaget karena menang undian lotre.)'
  },
  {
    id: 'm5h1_5',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '見当',
    furigana: 'けんとう',
    arti: 'Perkiraan / Tebakan / Dugaan',
    penjelasan: 'Membuat perkiraan atau tebakan tentang sesuatu yang belum pasti. Sangat sering dipakai dalam frasa "見当をつける" (memperkirakan) atau "見当がつかない" (tidak ada bayangan/tebakan sama sekali).',
    contoh1: '見当をつける。\n(Membuat perkiraan atau tebakan awal.)',
    contoh2: '彼がどこにいるか全く見当がつかない。\n(Saya sama sekali tidak ada bayangan dia ada di mana.)'
  },
  {
    id: 'm5h1_6',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '正当',
    furigana: 'せいとう',
    arti: 'Wajar / Sah / Masuk akal',
    penjelasan: 'Sifat dari suatu tindakan, alasan, atau penilaian yang sah secara hukum, adil, sesuai moral, atau punya alasan yang kuat dan logis.',
    contoh1: '正当な理由。\n(Alasan yang masuk akal dan wajar.)',
    contoh2: '彼女の努力は正当に評価されるべきだ。\n(Kerja kerasnya pantas dinilai secara adil dan wajar.)'
  },

  // --- KANJI 身 (Mi) ---
  {
    id: 'm5h1_7',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身の上',
    furigana: 'みのうえ',
    arti: 'Nasib / Keadaan pribadi',
    penjelasan: 'Segala hal yang berkaitan dengan nasib, takdir, perjalanan hidup, atau kondisi pribadi seseorang. Biasanya dipakai saat curhat atau berbagi cerita pribadi.',
    contoh1: '身の上相談。\n(Sesi curhat/konsultasi mengenai masalah pribadi.)',
    contoh2: '悲しい身の上話を聞いた。\n(Saya mendengar kisah nasib pribadinya yang menyedihkan.)'
  },
  {
    id: 'm5h1_8',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身の回り',
    furigana: 'みのまわり',
    arti: 'Barang pribadi / Keperluan sehari-hari',
    penjelasan: 'Hal-hal dasar dalam kehidupan sehari-hari, atau barang-barang pribadi yang sering dipakai, dibawa, dan ada di sekitar kita.',
    contoh1: '身の回りのもの。\n(Barang-barang keperluan pribadi.)',
    contoh2: '祖母の身の回りの世話をする。\n(Mengurus dan merawat keperluan sehari-hari nenek.)'
  },
  {
    id: 'm5h1_9',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '身軽',
    furigana: 'みがる',
    arti: 'Ringan (bawaan) / Lincah',
    penjelasan: 'Kondisi tubuh yang bebas dari beban fisik, seperti memakai pakaian santai, membawa sedikit barang bawaan, atau gerakan yang lincah dan tangkas.',
    contoh1: '身軽な格好。\n(Cara berpakaian yang santai dan ringan.)',
    contoh2: '荷物を預けて身軽になった。\n(Badan terasa ringan setelah menitipkan barang bawaan.)'
  },
  {
    id: 'm5h1_10',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身動き',
    furigana: 'みうごき',
    arti: 'Pergerakan tubuh',
    penjelasan: 'Kemampuan untuk menggerakkan anggota badan. Hampir selalu dipakai dengan kata kerja bentuk negatif "取れない" atau "できない" untuk menggambarkan kondisi terjebak/tidak bisa bergerak karena sempit atau jadwal yang terlalu padat.',
    contoh1: '身動きが取れない。\n(Tidak bisa bergerak sedikit pun / terjebak.)',
    contoh2: '満員電車で身動きができなかった。\n(Saya tidak bisa bergerak sama sekali karena kereta yang penuh sesak.)'
  },
  {
    id: 'm5h1_11',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身内',
    furigana: 'みうち',
    arti: 'Keluarga / Kerabat dekat',
    penjelasan: 'Orang-orang yang punya hubungan darah, saudara dekat, atau "orang dalam" yang dipercaya dalam suatu organisasi. Kata ini memberi kesan hubungan yang sangat dekat dibanding sekadar kenalan.',
    contoh1: '身内だけで祝う。\n(Merayakan secara tertutup hanya bersama keluarga/kerabat dekat.)',
    contoh2: '身内の者から連絡がありました。\n(Saya mendapat kabar dari kerabat dekat.)'
  },
  {
    id: 'm5h1_12',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '身近',
    furigana: 'みぢか',
    arti: 'Dekat / Familier / Akrab',
    penjelasan: 'Sesuatu yang ada di lingkungan kita sehari-hari, biasa ditemukan, mudah didapat, atau terasa sangat dekat di hati tanpa perlu dicari jauh-jauh.',
    contoh1: '身近な出来事。\n(Kejadian atau hal yang familier di kehidupan sehari-hari.)',
    contoh2: '環境問題をもっと身近に感じてほしい。\n(Saya ingin Anda semua merasakan isu lingkungan sebagai sesuatu yang dekat dengan kehidupan Anda.)'
  },
  {
    id: 'm5h1_13',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身元',
    furigana: 'みもと',
    arti: 'Identitas / Latar belakang',
    penjelasan: 'Latar belakang asal usul, sejarah hidup, dan identitas asli seseorang. Sering dipakai dalam urusan hukum, penyelidikan polisi, atau penjamin saat mulai kerja.',
    contoh1: '身元保証人。\n(Penjamin identitas pribadi.)',
    contoh2: '警察が被害者の身元を調べている。\n(Polisi sedang menyelidiki identitas korban.)'
  },
  {
    id: 'm5h1_14',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身分',
    furigana: 'みぶん',
    arti: 'Status / Kedudukan sosial',
    penjelasan: 'Posisi seseorang di dalam masyarakat atau organisasi. Ini mencakup pangkat, hak istimewa, atau gelar resmi yang membedakannya dengan orang lain.',
    contoh1: '身分が高い人。\n(Orang yang punya status atau kedudukan sosial yang tinggi.)',
    contoh2: '身分を証明する書類を提出してください。\n(Silakan kumpulkan dokumen yang membuktikan status identitas Anda.)'
  },
  {
    id: 'm5h1_15',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '生身',
    furigana: 'なまみ',
    arti: 'Tubuh bernyawa / Fisik manusia',
    penjelasan: 'Merujuk pada tubuh makhluk atau manusia dari daging dan darah yang masih hidup. Menekankan sisi manusiawi yang bisa merasa sakit, lelah, atau terluka, berbeda dengan mesin atau robot.',
    contoh1: '生身の体。\n(Tubuh fisik manusia yang hidup.)',
    contoh2: 'いくら強くても彼は生身の人間だ。\n(Sekuat apa pun dia, dia tetaplah manusia biasa yang bisa lelah.)'
  },
  {
    id: 'm5h1_16',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '単身',
    furigana: 'たんしん',
    arti: 'Sendirian / Sebatang kara',
    penjelasan: 'Kondisi hidup atau pergi jauh sendirian tanpa membawa anggota keluarga. Biasanya merujuk pada situasi pindah tugas kerja yang memaksa seseorang tinggal terpisah dari keluarganya.',
    contoh1: '単身赴任。\n(Pindah tugas kerja dan tinggal sendirian jauh dari keluarga.)',
    contoh2: '彼は単身で海外へ渡った。\n(Dia merantau ke luar negeri sendirian.)'
  },

  // --- KANJI 取 (Tori) ---
  {
    id: 'm5h1_17',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '取り分',
    furigana: 'とりぶん',
    arti: 'Jatah / Bagian',
    penjelasan: 'Jumlah bagian keuntungan, uang, atau harta yang berhak diterima dan dituntut oleh setiap orang setelah ada pembagian dalam kelompok.',
    contoh1: '自分の取り分を主張する。\n(Menuntut jatah atau bagian milik sendiri.)',
    contoh2: '利益の取り分を平等にする。\n(Membagi rata jatah keuntungan perusahaan.)'
  },
  {
    id: 'm5h1_18',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '下取り',
    furigana: 'したどり',
    arti: 'Tukar tambah (Trade-in)',
    penjelasan: 'Proses di mana pembeli menyerahkan barang lama (seperti mobil atau elektronik) kepada penjual untuk mendapat potongan harga saat membeli barang baru.',
    contoh1: '車を下取りしてもらう。\n(Menyerahkan mobil lama untuk tukar tambah.)',
    contoh2: '古いカメラを下取りに出して、新しいのを買った。\n(Saya menyerahkan kamera lama untuk tukar tambah, lalu membeli yang baru.)'
  },
  {
    id: 'm5h1_19',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手取り',
    furigana: 'てどり',
    arti: 'Gaji bersih (Take-home pay)',
    penjelasan: 'Jumlah uang gaji yang benar-benar masuk ke rekening dan siap dipakai, setelah dipotong pajak, asuransi, dan lain-lain dari gaji kotor.',
    contoh1: '給料の手取り額。\n(Jumlah gaji bersih yang dibawa pulang.)',
    contoh2: '税金が引かれて手取りが減った。\n(Gaji bersih saya berkurang setelah dipotong pajak.)'
  },
  {
    id: 'm5h1_20',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '日取り',
    furigana: 'ひどり',
    arti: 'Penentuan tanggal',
    penjelasan: 'Proses memilih, menyepakati, dan menetapkan tanggal pasti untuk acara besar, rapat penting, atau pesta pernikahan.',
    contoh1: '結婚式の日取りを決める。\n(Menentukan tanggal untuk pesta pernikahan.)',
    contoh2: '引っ越しの日取りを変更した。\n(Saya sudah mengubah tanggal untuk pindahan rumah.)'
  },
  {
    id: 'm5h1_21',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '取材',
    furigana: 'しゅざい',
    arti: 'Liputan / Wawancara',
    penjelasan: 'Tindakan wartawan, jurnalis, atau penulis untuk mencari fakta, meliput langsung ke lapangan, atau mewawancarai orang untuk bahan berita dan artikel.',
    contoh1: '事件を取材する。\n(Meliput informasi terkait kasus kejahatan tersebut.)',
    contoh2: '彼は有名な雑誌の取材を受けた。\n(Dia diwawancarai untuk liputan majalah terkenal.)'
  },

  // --- KANJI 根 (Kon/Ne) ---
  {
    id: 'm5h1_22',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '根気',
    furigana: 'こんき',
    arti: 'Kesabaran / Kegigihan',
    penjelasan: 'Ketahanan mental dan kesabaran seseorang yang tidak mudah menyerah saat mengerjakan sesuatu yang butuh waktu lama, rumit, atau membosankan.',
    contoh1: '根気がいる仕事。\n(Pekerjaan yang butuh kesabaran dan kegigihan ekstra.)',
    contoh2: '彼は根気よく最後までやり遂げた。\n(Dia berhasil menyelesaikan semuanya dengan sabar dan gigih sampai akhir.)'
  },
  {
    id: 'm5h1_23',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '根本的',
    furigana: 'こんぽんてき',
    arti: 'Mendasar (Fundamental)',
    penjelasan: 'Merujuk pada bagian paling dasar atau akar masalah. Sesuatu yang harus diubah atau diperbaiki secara total dari akarnya agar masalah beres seutuhnya.',
    contoh1: '根本的な誤り。\n(Kesalahan yang sangat mendasar / fundamental.)',
    contoh2: '問題を根本的に解決する必要がある。\n(Ada kebutuhan untuk menyelesaikan masalah ini dari akar-akarnya.)'
  },
  {
    id: 'm5h1_24',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '根回し',
    furigana: 'ねまわし',
    arti: 'Lobi-lobi / Persiapan di balik layar',
    penjelasan: 'Strategi berdiskusi, melobi, dan mencari dukungan dari pihak-pihak terkait secara diam-diam (di balik layar) sebelum sebuah keputusan atau rencana resmi diumumkan.',
    contoh1: '関係者に根回しする。\n(Melakukan lobi/persiapan awal di balik layar dengan pihak-pihak terkait.)',
    contoh2: '会議の前に根回しをしておく。\n(Melakukan lobi-lobi sebelum rapat dimulai agar semuanya lancar.)'
  },

  // --- KANJI 向 (Mu/Kou) ---
  {
    id: 'm5h1_25',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '出向く',
    furigana: 'でむく',
    arti: 'Pergi ke / Mendatangi',
    penjelasan: 'Tindakan proaktif untuk datang atau bergerak langsung ke suatu lokasi (seperti TKP, kantor klien, dll) guna mengurus sesuatu secara langsung.',
    contoh1: '現場に出向く。\n(Turun langsung ke lokasi kejadian.)',
    contoh2: '社長自ら相手の会社へ出向いた。\n(Presiden perusahaan turun tangan sendiri mendatangi kantor pihak lawan.)'
  },
  {
    id: 'm5h1_26',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '前向き',
    furigana: 'まえむき',
    arti: 'Positif / Optimis (Berorientasi ke depan)',
    penjelasan: 'Sikap atau cara berpikir yang optimis, konstruktif, dan mau bergerak mencari solusi. Lawan dari sikap pesimis atau yang suka mengungkit masa lalu.',
    contoh1: '前向きに考える。\n(Berpikir secara positif dan optimis.)',
    contoh2: '新しいプロジェクトに前向きに取り組む。\n(Mengerjakan proyek baru dengan semangat optimis yang berorientasi ke depan.)'
  },
  {
    id: 'm5h1_27',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '表向き',
    furigana: 'おもてむき',
    arti: 'Alasan resmi / Tampaknya (di luar)',
    penjelasan: 'Fakta atau alasan yang sengaja ditunjukkan ke publik sebagai kedok. Padahal, kenyataan aslinya atau situasi di dalamnya berbeda dengan yang diumumkan.',
    contoh1: '表向きの理由。\n(Alasan resmi / sekadar alasan untuk di luar saja.)',
    contoh2: '表向きは仲が良いが、実は対立している。\n(Di luarnya sih kelihatan akrab, tapi aslinya mereka bermusuhan.)'
  },
  {
    id: 'm5h1_28',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '向上',
    furigana: 'こうじょう',
    arti: 'Peningkatan / Kemajuan',
    penjelasan: 'Proses maju ke tingkat yang lebih baik dan tinggi, entah itu dalam hal kemampuan, nilai akademik, keahlian, kualitas produk, ataupun taraf hidup.',
    contoh1: '学力が向上する。\n(Nilai prestasi akademik meningkat.)',
    contoh2: 'サービスの向上に努める。\n(Berusaha keras demi meningkatkan kualitas pelayanan.)'
  },

  // --- KANJI 前 (Mae/Zen) ---
  {
    id: 'm5h1_29',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '前置き',
    furigana: 'まえおき',
    arti: 'Pengantar / Mukadimah / Basa-basi',
    penjelasan: 'Kalimat pembuka, mukadimah, atau basa-basi yang diucapkan di awal sebelum pembicara atau penulis masuk ke topik/inti pembicaraan yang sebenarnya.',
    contoh1: '前置きが長い。\n(Pengantar/basa-basinya kepanjangan.)',
    contoh2: '前置きは省いて本題に入りましょう。\n(Ayo lewati basa-basinya dan langsung masuk ke topik utama.)'
  },
  {
    id: 'm5h1_30',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '前借り',
    furigana: 'まえがり',
    arti: 'Kasbon / Pinjam uang di muka',
    penjelasan: 'Tindakan pekerja meminjam uang (seperti meminjam gaji bulanan sendiri) sebelum tanggal gajian resmi tiba.',
    contoh1: '給料を前借りする。\n(Kasbon / meminjam gaji bulanan di muka.)',
    contoh2: '会社に頼んでお金を前借りした。\n(Saya meminta perusahaan untuk memberikan kasbon gaji.)'
  },
  {
    id: 'm5h1_31',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '前払い',
    furigana: 'まえばらい',
    arti: 'Bayar di muka (DP / Uang muka)',
    penjelasan: 'Aturan atau kebiasaan membayar sejumlah uang, biaya, atau deposit kepada penjual sebelum barang/pesanan tersebut kita terima.',
    contoh1: '料金を前払いする。\n(Membayar biaya/harga di muka.)',
    contoh2: 'ネットショッピングで前払いを選んだ。\n(Saya memilih sistem bayar di muka saat belanja online.)'
  },
  {
    id: 'm5h1_32',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '前科',
    furigana: 'ぜんか',
    arti: 'Catatan kriminal / Rekam jejak buruk',
    penjelasan: 'Catatan resmi dari kepolisian tentang rekam jejak kejahatan seseorang. Dalam bahasa santai, sering juga dipakai untuk bercanda tentang kesalahan kecil yang sering diulang-ulang seseorang.',
    contoh1: '前科のある人。\n(Orang yang punya catatan kriminal.)',
    contoh2: '彼は何度も遅刻する前科がある。\n(Dia punya "rekam jejak buruk" sering datang terlambat.)'
  }
];

window.vocabData.push(...kosakata_m5h1);