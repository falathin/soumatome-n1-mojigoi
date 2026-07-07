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
    arti: 'Hari kejadian / Hari tersebut',
    penjelasan: 'Merujuk kepada hari yang telah ditetapkan secara resmi untuk sesuatu acara, majlis, ujian, atau janji temu berlangsung. Digunakan untuk membincangkan keadaan atau tindakan pada hari tersebut.',
    contoh1: '試験の当日。\n(Hari kejadian peperiksaan.)',
    contoh2: '当日は晴れるといいですね。\n(Diharapkan cuaca cerah pada hari kejadian nanti.)'
  },
  {
    id: 'm5h1_2',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '当番',
    furigana: 'とうばん',
    arti: 'Giliran bertugas',
    penjelasan: 'Tugas harian atau rutin yang diberikan secara bergilir-gilir kepada ahli kumpulan, seperti membersihkan bilik darjah, membuang sampah, atau menjaga kaunter di tempat kerja.',
    contoh1: '掃除当番。\n(Giliran bertugas membersihkan kawasan.)',
    contoh2: '今日のゴミ捨て当番は誰ですか。\n(Siapakah yang mendapat giliran bertugas membuang sampah hari ini?)'
  },
  {
    id: 'm5h1_3',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '当人',
    furigana: 'とうにん',
    arti: 'Orang yang berkenaan',
    penjelasan: 'Merujuk secara langsung kepada individu yang sedang dibincangkan, individu yang terlibat dalam sesuatu masalah, atau watak utama dalam satu insiden.',
    contoh1: '当人に確認する。\n(Mengesahkan perkara tersebut terus dengan orang yang berkenaan.)',
    contoh2: '周りは心配しているが、当人は気にしていない。\n(Orang sekeliling berasa risau, namun orang yang berkenaan nampaknya tidak peduli.)'
  },
  {
    id: 'm5h1_4',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '当選',
    furigana: 'とうせん',
    arti: 'Menang (pilihan raya / undian)',
    penjelasan: 'Keadaan di mana seseorang dipilih dengan jayanya dalam pilihan raya umum, atau memenangi hadiah cabutan bertuah dan loteri. Lawannya ialah 落選 (rakusen) yang bermaksud kalah atau tidak terpilih.',
    contoh1: '選挙で当選する。\n(Terpilih dan menang dalam pilihan raya.)',
    contoh2: '宝くじに当選して驚いた。\n(Saya terkejut kerana memenangi cabutan loteri.)'
  },
  {
    id: 'm5h1_5',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '見当',
    furigana: 'けんとう',
    arti: 'Jangkaan / Tekaan / Anggaran',
    penjelasan: 'Membuat anggaran, ramalan, atau tekaan terhadap sesuatu perkara yang tidak pasti nilainya atau di mana arahnya. Sangat kerap digunakan dalam frasa "見当をつける" (meneka) atau "見当がつかない" (tidak dapat meneka).',
    contoh1: '見当をつける。\n(Membuat tekaan atau jangkaan awal.)',
    contoh2: '彼がどこにいるか全く見当がつかない。\n(Saya tidak mempunyai sebarang tekaan langsung di mana dia berada.)'
  },
  {
    id: 'm5h1_6',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '正当',
    furigana: 'せいとう',
    arti: 'Wajar / Sah / Patut',
    penjelasan: 'Sifat bagi sesuatu tindakan, alasan, atau penilaian yang sah dari segi undang-undang, mematuhi prinsip keadilan, bersesuaian dengan moral, atau mempunyai alasan yang munasabah dan kukuh.',
    contoh1: '正当な理由。\n(Alasan yang munasabah dan wajar.)',
    contoh2: '彼女の努力は正当に評価されるべきだ。\n(Usaha keras beliau sepatutnya dinilai secara adil dan wajar.)'
  },

  // --- KANJI 身 (Mi) ---
  {
    id: 'm5h1_7',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身の上',
    furigana: 'みのうえ',
    arti: 'Nasib / Keadaan peribadi',
    penjelasan: 'Segala hal yang berkaitan dengan nasib, takdir, perjalanan hidup, atau keadaan peribadi yang sedang dilalui oleh seseorang. Biasanya digunakan apabila berkongsi cerita peribadi atau kesedihan.',
    contoh1: '身の上相談。\n(Sesi perundingan atau kaunseling mengenai masalah peribadi.)',
    contoh2: '悲しい身の上話を聞いた。\n(Saya telah mendengar kisah nasib peribadinya yang menyedihkan.)'
  },
  {
    id: 'm5h1_8',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身の回り',
    furigana: 'みのまわり',
    arti: 'Barang peribadi / Persekitaran diri',
    penjelasan: 'Perkara-perkara asas dalam kehidupan harian seseorang, atau barang-barang peribadi yang sering dipakai, dibawa, dan berada berhampiran dengan kehidupan individu tersebut.',
    contoh1: '身の回りのもの。\n(Barang-barang keperluan peribadi.)',
    contoh2: '祖母の身の回りの世話をする。\n(Mengurus dan menjaga keperluan harian nenek.)'
  },
  {
    id: 'm5h1_9',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '身軽',
    furigana: 'みがる',
    arti: 'Ringkas (berpakaian) / Tangkas',
    penjelasan: 'Keadaan tubuh yang bebas dari bebanan fizikal, seperti memakai pakaian yang kasual dan ringan, membawa sedikit barang bawaan sahaja, atau pergerakan yang lincah dan tangkas.',
    contoh1: '身軽な格好。\n(Cara berpakaian yang ringkas dan ringan.)',
    contoh2: '荷物を預けて身軽になった。\n(Badan berasa ringan selepas meninggalkan barang bawaan di tempat simpanan.)'
  },
  {
    id: 'm5h1_10',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身動き',
    furigana: 'みうごき',
    arti: 'Pergerakan badan',
    penjelasan: 'Merujuk kepada keupayaan untuk menggerakkan anggota badan. Kata ini hampir sentiasa digunakan dengan kata kerja bentuk negatif "取れない" atau "できない" untuk menggambarkan keadaan tersekat fizikal atau jadual terlalu padat.',
    contoh1: '身動きが取れない。\n(Tidak boleh bergerak sedikit pun / tersekat.)',
    contoh2: '満員電車で身動きができなかった。\n(Saya tidak dapat menggerakkan badan lansung kerana berada di dalam kereta api yang sesak.)'
  },
  {
    id: 'm5h1_11',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身内',
    furigana: 'みうち',
    arti: 'Keluarga / Sanak saudara',
    penjelasan: 'Orang-orang yang mempunyai pertalian darah, saudara mara terdekat, atau ahli kumpulan sendiri yang dipercayai dalam organisasi. Ia membawa konotasi hubungan yang sangat rapat berbanding sekadar kenalan.',
    contoh1: '身内だけで祝う。\n(Mengadakan majlis sambutan tertutup hanya bersama ahli keluarga.)',
    contoh2: '身内の者から連絡がありました。\n(Saya menerima panggilan daripada saudara mara terdekat.)'
  },
  {
    id: 'm5h1_12',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '身近',
    furigana: 'みぢか',
    arti: 'Lazim / Terdekat / Familiar',
    penjelasan: 'Sesuatu yang wujud dalam persekitaran harian kita, biasa dijumpai, mudah didapati, atau terasa sangat dekat di hati tanpa perlu mencari terlalu jauh.',
    contoh1: '身近な出来事。\n(Kejadian atau hal yang sangat lazim dalam kehidupan harian.)',
    contoh2: '環境問題をもっと身近に感じてほしい。\n(Saya mahu anda semua merasakan isu alam sekitar sebagai sesuatu yang sangat dekat dengan diri anda.)'
  },
  {
    id: 'm5h1_13',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身元',
    furigana: 'みもと',
    arti: 'Identiti / Latar belakang',
    penjelasan: 'Latar belakang asal usul, sejarah hidup, dan kepastian identiti sebenar seseorang. Selalu digunakan dalam situasi perundangan, siasatan jenayah, atau pencarian penjamin sewaktu mula bekerja.',
    contoh1: '身元保証人。\n(Penjamin identiti peribadi.)',
    contoh2: '警察が被害者の身元を調べている。\n(Pihak polis sedang menyiasat identiti mangsa.)'
  },
  {
    id: 'm5h1_14',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '身分',
    furigana: 'みぶん',
    arti: 'Status / Taraf sosial',
    penjelasan: 'Taraf kedudukan seseorang di dalam masyarakat atau organisasi. Ia merangkumi pangkat, hak keistimewaan, atau gelaran resmi yang membezakannya dengan kelompok yang lain.',
    contoh1: '身分が高い人。\n(Seseorang yang memiliki status atau taraf sosial yang tinggi.)',
    contoh2: '身分を証明する書類を提出してください。\n(Sila kemukakan dokumen yang membuktikan status identiti anda.)'
  },
  {
    id: 'm5h1_15',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '生身',
    furigana: 'なまみ',
    arti: 'Tubuh bernyawa / Fizikal manusia',
    penjelasan: 'Merujuk kepada tubuh badan makhluk atau manusia yang diperbuat daripada daging dan darah yang masih hidup. Ia menonjolkan ciri yang boleh berasa sakit, keletihan, atau cedera berbanding jentera atau robot.',
    contoh1: '生身の体。\n(Tubuh fizikal manusia yang hidup.)',
    contoh2: 'いくら強くても彼は生身の人間だ。\n(Kuat macam mana pun, dia tetaplah seorang manusia yang bernyawa dan punya rasa penat.)'
  },
  {
    id: 'm5h1_16',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '単身',
    furigana: 'たんしん',
    arti: 'Tinggal berseorangan / Sendirian',
    penjelasan: 'Keadaan hidup bersendirian atau bergerak ke suatu tempat jauh tanpa membawa serta ahli keluarga. Kebiasaannya merujuk kepada situasi pertukaran lokasi kerja yang memaksa bapa/ibu tinggal berasingan.',
    contoh1: '単身赴任。\n(Berpindah kerja dan tinggal berseorangan berjauhan dari keluarga.)',
    contoh2: '彼は単身で海外へ渡った。\n(Dia pergi merantau ke luar negara secara bersendirian.)'
  },

  // --- KANJI 取 (Tori) ---
  {
    id: 'm5h1_17',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '取り分',
    furigana: 'とりぶん',
    arti: 'Bahagian / Habuan',
    penjelasan: 'Jumlah perkongsian hasil keuntungan, wang, atau harta yang berhak diterima dan dituntut oleh setiap individu setelah berlakunya pembahagian secara berkumpulan.',
    contoh1: '自分の取り分を主張する。\n(Menuntut bahagian atau habuan hak milik sendiri.)',
    contoh2: '利益の取り分を平等にする。\n(Menyamaratakan pembahagian hasil keuntungan syarikat.)'
  },
  {
    id: 'm5h1_18',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '下取り',
    furigana: 'したどり',
    arti: 'Tukar beli (Trade-in)',
    penjelasan: 'Satu proses di mana pembeli menyerahkan produk lama atau terpakai (seperti kenderaan atau peralatan elektronik) kepada penjual untuk mendapat potongan harga bagi barangan yang baharu.',
    contoh1: '車を下取りしてもらう。\n(Menyerahkan kereta lama untuk proses tukar beli.)',
    contoh2: '古いカメラを下取りに出して、新しいのを買った。\n(Saya menyerahkan kamera lama untuk ditukar beli dan membeli yang baharu.)'
  },
  {
    id: 'm5h1_19',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手取り',
    furigana: 'てどり',
    arti: 'Gaji bersih (Take-home pay)',
    penjelasan: 'Jumlah wang gaji sebenar yang dimasukkan ke dalam akaun bank pekerja dan boleh dibelanjakan, setelah semua pemotongan mandatori (cukai, insurans, caruman) ditolak dari jumlah gaji kasar.',
    contoh1: '給料の手取り額。\n(Jumlah gaji bersih yang dibawa pulang.)',
    contoh2: '税金が引かれて手取りが減った。\n(Gaji bersih saya berkurang setelah ditolak bayaran cukai.)'
  },
  {
    id: 'm5h1_20',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '日取り',
    furigana: 'ひどり',
    arti: 'Penetapan tarikh',
    penjelasan: 'Proses memilih, bersetuju, dan menetapkan satu tarikh yang spesifik untuk melaksanakan satu majlis besar, acara resmi, mesyuarat penting, atau majlis perkahwinan.',
    contoh1: '結婚式の日取りを決める。\n(Menetapkan tarikh untuk melangsungkan majlis perkahwinan.)',
    contoh2: '引っ越しの日取りを変更した。\n(Telah menukar penetapan tarikh untuk berpindah rumah.)'
  },
  {
    id: 'm5h1_21',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '取材',
    furigana: 'しゅざい',
    arti: 'Pengumpulan berita / Temu bual',
    penjelasan: 'Tindakan yang dilakukan oleh pemberita, wartawan, atau penulis untuk mencari fakta, membuat liputan di tempat kejadian, atau menemu bual orang penting bagi menghasilkan berita dan artikel.',
    contoh1: '事件を取材する。\n(Mengumpulkan maklumat berita mengenai insiden jenayah tersebut.)',
    contoh2: '彼は有名な雑誌の取材を受けた。\n(Dia telah ditemu bual untuk liputan majalah terkenal.)'
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
    penjelasan: 'Tahap ketahanan mental dan sifat sabar seseorang yang tidak mudah putus asa apabila melakukan kerja yang mengambil masa panjang, rumit, atau menjemukan.',
    contoh1: '根気がいる仕事。\n(Satu tugas/kerja yang sangat menuntut kesabaran dan kegigihan.)',
    contoh2: '彼は根気よく最後までやり遂げた。\n(Dia berjaya menghabiskan semuanya dengan gigih dan sabar sehingga ke akhir.)'
  },
  {
    id: 'm5h1_23',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '根本的',
    furigana: 'こんぽんてき',
    arti: 'Asas (fundamental)',
    penjelasan: 'Merujuk kepada bahagian paling dasar atau akar umbi yang menjadi teras penting. Sesuatu yang mesti diubah atau diperbaiki secara total dari bawah supaya keseluruhan masalah dapat diselesaikan.',
    contoh1: '根本的な誤り。\n(Satu kesilapan yang mendasar / fundamental.)',
    contoh2: '問題を根本的に解決する必要がある。\n(Terdapat keperluan untuk menyelesaikan masalah ini dari akar umbinya secara fundamental.)'
  },
  {
    id: 'm5h1_24',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '根回し',
    furigana: 'ねまわし',
    arti: 'Persiapan awal belakang tabir',
    penjelasan: 'Strategi berbincang, melobi, dan mendapatkan sokongan daripada pihak-pihak berkepentingan secara tidak resmi di belakang tabir sebelum sesuatu keputusan atau rancangan resmi diumumkan.',
    contoh1: '関係者に根回しする。\n(Membuat rundingan/persiapan awal di belakang tabir dengan pihak yang terlibat.)',
    contoh2: '会議の前に根回しをしておく。\n(Menyiapkan lobi dan rundingan sebelum mesyuarat bermula supaya segalanya berjalan lancar.)'
  },

  // --- KANJI 向 (Mu/Kou) ---
  {
    id: 'm5h1_25',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '出向く',
    furigana: 'でむく',
    arti: 'Pergi ke / Berkunjung ke',
    penjelasan: 'Tindakan proaktif pergi atau bergerak secara fizikal ke sesuatu lokasi (seperti tempat kejadian jenayah, pejabat pelanggan, atau mesyuarat luar) untuk menguruskan sesuatu dengan mata kepala sendiri.',
    contoh1: '現場に出向く。\n(Pergi turun ke tapak lokasi kejadian.)',
    contoh2: '社長自ら相手の会社へ出向いた。\n(Presiden syarikat dengan sendirinya telah berkunjung ke pejabat pihak lawan.)'
  },
  {
    id: 'm5h1_26',
    minggu: '5',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '前向き',
    furigana: 'まえむき',
    arti: 'Positif / Memandang ke hadapan',
    penjelasan: 'Sikap atau cara pemikiran yang konstruktif, optimis, dan mahu bergerak mencari jalan penyelesaian. Ia bertentangan dengan sikap pesimis atau suka memikirkan perkara yang lepas.',
    contoh1: '前向きに考える。\n(Berfikir secara positif dan membina.)',
    contoh2: '新しいプロジェクトに前向きに取り組む。\n(Mengendalikan projek baharu dengan semangat optimis yang memandang ke hadapan.)'
  },
  {
    id: 'm5h1_27',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '表向き',
    furigana: 'おもてむき',
    arti: 'Alasan resmi / Secara zahir',
    penjelasan: 'Fakta, kenyataan, atau alasan yang sengaja diperlihatkan dan dihebahkan kepada pihak umum sebagai penutup. Namun secara hakikatnya, situasi dalaman atau kebenarannya berbeza dengan apa yang diumum.',
    contoh1: '表向きの理由。\n(Kenyataan alasan resmi / untuk mengaburi mata orang.)',
    contoh2: '表向きは仲が良いが、実は対立している。\n(Secara zahirnya mereka kelihatan rapat, namun hakikatnya mereka sedang berkonflik.)'
  },
  {
    id: 'm5h1_28',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '向上',
    furigana: 'こうじょう',
    arti: 'Peningkatan / Kemajuan',
    penjelasan: 'Proses kemajuan ke arah tahap yang lebih baik dan tinggi, sama ada dari sudut kemampuan, pencapaian akademik, kemahiran, hasil kualiti produk, mahupun taraf kualiti kehidupan seseorang.',
    contoh1: '学力が向上する。\n(Pencapaian markah akademik semakin meningkat.)',
    contoh2: 'サービスの向上に努める。\n(Berusaha bersungguh-sungguh demi meningkatkan kemajuan mutu perkhidmatan.)'
  },

  // --- KANJI 前 (Mae/Zen) ---
  {
    id: 'm5h1_29',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '前置き',
    furigana: 'まえおき',
    arti: 'Pengenalan / Mukadimah',
    penjelasan: 'Ayat pengenalan, mukadimah, atau kata alu-aluan yang diucapkan pada awal bicara sebelum penceramah atau penulis masuk secara resmi ke topik isi utama yang sebenar.',
    contoh1: '前置きが長い。\n(Mukadimah atau pengenalannya terlampau panjang.)',
    contoh2: '前置きは省いて本題に入りましょう。\n(Mari kita langkau mukadimah tersebut dan terus masuk ke topik isi utama.)'
  },
  {
    id: 'm5h1_30',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '前借り',
    furigana: 'まえがり',
    arti: 'Pinjam awal / Pendahuluan wang',
    penjelasan: 'Tindakan pekerja atau pihak yang memohon untuk mengeluarkan dan meminjam wang (seperti wang gaji bulanan mereka sendiri) sebelum tarikh pembayaran resmi sebenar tiba.',
    contoh1: '給料を前借りする。\n(Mendapatkan dan meminjam awal wang gaji bulanan.)',
    contoh2: '会社に頼んでお金を前借りした。\n(Saya telah meminta syarikat untuk memberikan pinjaman wang gaji secara pendahuluan.)'
  },
  {
    id: 'm5h1_31',
    minggu: '5',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '前払い',
    furigana: 'まえばらい',
    arti: 'Bayaran pendahuluan (Deposit/In advance)',
    penjelasan: 'Peraturan atau amalan membayar sejumlah wang harga, yuran, atau deposit kepada pihak penjual sebelum barangan pesanan selamat diterima di tangan.',
    contoh1: '料金を前払いする。\n(Membayar harga perkhidmatan/barangan lebih awal dari tarikh.)',
    contoh2: 'ネットショッピングで前払いを選んだ。\n(Saya telah memilih sistem bayaran pendahuluan semasa beli-belah di internet.)'
  },
  {
    id: 'm5h1_32',
    minggu: '5',
    hari: '1',
    kategori: 'kata benda',
    kanji: '前科',
    furigana: 'ぜんか',
    arti: 'Rekod jenayah / Kesalahan lalu',
    penjelasan: 'Rekod hitam jenayah resmi oleh pihak polis bagi seseorang. Dalam situasi santai, ia turut digunakan untuk merujuk secara gurauan kepada kesilapan kecil yang seseorang itu sering lakukan.',
    contoh1: '前科のある人。\n(Seseorang yang memiliki rekod sejarah jenayah.)',
    contoh2: '彼は何度も遅刻する前科がある。\n(Dia memiliki "rekod jenayah lampau" sering datang lewat ke tempat kerja.)'
  }
];

window.vocabData.push(...kosakata_m5h1);