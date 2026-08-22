// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m7h1 = [
  // ==========================================================
  // KELOMPOK 1: 省略に注意 (Singkatan yang Harus Diperhatikan)
  // ==========================================================
  {
    id: 'm7h1_1',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ハイテク',
    furigana: 'ハイテク',
    arti: 'Teknologi canggih (High-tech)',
    penjelasan: 'Singkatan dari High Technology. Dipakai untuk menyebut produk, industri, atau teknologi mutakhir (seperti AI atau robotika).',
    contoh1: 'わが国はハイテク産業に力を入れている。\n(Negara kami sedang memfokuskan kekuatan pada industri teknologi tinggi.)',
    contoh2: 'この工場では最先端のハイテク機器が導入されている。\n(Di pabrik ini, peralatan teknologi tinggi yang paling mutakhir telah diterapkan.)'
  },
  {
    id: 'm7h1_2',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'リストラ',
    furigana: 'リストラ',
    arti: 'PHK / Pengurangan karyawan',
    penjelasan: 'Singkatan dari Restructuring. Di Jepang spesifik berarti pemutusan hubungan kerja demi efisiensi biaya perusahaan.',
    contoh1: '不景気で多くの社員がリストラされた。\n(Karena resesi ekonomi, banyak karyawan yang terkena PHK/restrukturisasi.)',
    contoh2: '会社は倒産を防ぐためにリストラを敢行せざるを得なかった。\n(Perusahaan terpaksa melakukan PHK demi mencegah kebangkrutan.)'
  },
  {
    id: 'm7h1_3',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'コネ',
    furigana: 'コネ',
    arti: 'Koneksi / Orang dalam',
    penjelasan: 'Singkatan dari Connection. Memanfaatkan hubungan kekeluargaan atau pertemanan untuk kemudahan pribadi (misal cari kerja).',
    contoh1: 'コネを使って大企業に就職する。\n(Menggunakan koneksi/orang dalam untuk mendapatkan pekerjaan di perusahaan besar.)',
    contoh2: '実力ではなくコネで選ばれたのは不公平だ。\n(Dipilih karena koneksi dan bukan karena kemampuan nyata itu tidak adil.)'
  },
  {
    id: 'm7h1_4',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'セクハラ',
    furigana: 'セクハラ',
    arti: 'Pelecehan seksual',
    penjelasan: 'Singkatan dari Sexual Harassment. Perilaku atau ucapan bernuansa seksual di tempat kerja/umum yang mengganggu orang lain.',
    contoh1: '上司からセクハラを受けて会社を辞めた。\n(Saya mengundurkan diri dari perusahaan karena menerima pelecehan seksual dari atasan.)',
    contoh2: '職場でのセクハラ防止に向けて厳格なガイドラインが作られた。\n(Panduan ketat telah dibuat untuk mencegah terjadinya pelecehan seksual di tempat kerja.)'
  },
  {
    id: 'm7h1_5',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'マザコン',
    furigana: 'マザコン',
    arti: 'Anak mama',
    penjelasan: 'Singkatan dari Mother Complex. Pria dewasa yang terlalu bergantung dan tidak bisa lepas dari ibunya.',
    contoh1: '彼はマザコンだ。\n(Dia adalah seorang anak mama.)',
    contoh2: '何でも母親に聞かないと行動できないマザコンの男性とは結婚したくない。\n(Saya tidak mau menikah dengan pria manja anak mama yang tidak bisa bertindak tanpa bertanya dulu pada ibunya.)'
  },
  {
    id: 'm7h1_6',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ゼネコン',
    furigana: 'ゼネコン',
    arti: 'Kontraktor besar',
    penjelasan: 'Singkatan dari General Contractor. Perusahaan konstruksi skala besar yang memegang proyek infrastruktur raksasa.',
    contoh1: '大手ゼネコンが新しい駅ビルの建設を受注した。\n(Kontraktor umum besar memenangkan kontrak pembangunan gedung stasiun yang baru.)',
    contoh2: '日本のゼネコン業界は海外でのインフラ開発にも積極的に参加している。\n(Industri kontraktor besar Jepang juga aktif berpartisipasi dalam pembangunan infrastruktur di luar negeri.)'
  },
  {
    id: 'm7h1_7',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'プレゼン',
    furigana: 'プレゼン',
    arti: 'Presentasi',
    penjelasan: 'Singkatan dari Presentation. Penyampaian ide, produk, atau rencana kerja di depan audiens atau atasan.',
    contoh1: '会議でプレゼンをする。\n(Melakukan presentasi di dalam rapat.)',
    contoh2: '彼女のプレゼンは資料がとても見やすくて分かりやすかった。\n(Presentasi wanita itu sangat mudah dipahami karena dokumennya rapi.)'
  },
  {
    id: 'm7h1_8',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'バイオ',
    furigana: 'バイオ',
    arti: 'Bioteknologi',
    penjelasan: 'Singkatan dari Biotechnology. Bidang ilmu yang memanfaatkan organisme hidup untuk kebutuhan medis, pertanian, atau lingkungan.',
    contoh1: '大学でバイオ研究に没頭している。\n(Saya sedang mendalami penelitian bioteknologi di universitas.)',
    contoh2: 'バイオテクノロジーの進歩により、病気に強い作物が作られた。\n(Berkat kemajuan bioteknologi, tanaman yang tahan penyakit berhasil diciptakan.)'
  },
  {
    id: 'm7h1_9',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ハンデ',
    furigana: 'ハンデ',
    arti: 'Hambatan / Poin tambahan (Handicap)',
    penjelasan: 'Singkatan dari Handicap. Bisa berarti kekurangan/hambatan fisik, atau poin tambahan yang diberikan agar pertandingan seimbang.',
    contoh1: 'ハンデを克服して、素晴らしい成果を収めた。\n(Mengatasi hambatan/kekurangan yang ada dan berhasil meraih pencapaian luar biasa.)',
    contoh2: '初心者なので、ゴルフの試合で少しハンデをもらった。\n(Karena saya seorang pemula, saya diberikan sedikit handicap/keuntungan tambahan dalam pertandingan golf.)'
  },
  {
    id: 'm7h1_10',
    minggu: '7',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'マンネリ',
    furigana: 'マンネリ',
    arti: 'Monoton / Basi',
    penjelasan: 'Singkatan dari Mannerism. Kondisi membosankan dan kehilangan ide segar karena melakukan hal yang sama berulang-ulang.',
    contoh1: '毎日同じことの繰り返しで、仕事がマンネリ化している。\n(Pekerjaan menjadi monoton karena setiap hari hanya mengulang hal yang sama.)',
    contoh2: '付き合って３年が経ち、二人の関係がマンネリに陥っている。\n(Setelah tiga tahun berpacaran, hubungan keduanya terjebak dalam rutinitas yang membosankan.)'
  },
  {
    id: 'm7h1_11',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'エコ',
    furigana: 'エコ',
    arti: 'Ramah lingkungan',
    penjelasan: 'Singkatan dari Ecology. Segala sesuatu yang berkaitan dengan perlindungan alam dan penghematan energi.',
    contoh1: '環境のためにエコ生活を心がけている。\n(Saya mengusahakan gaya hidup ramah lingkungan demi alam.)',
    contoh2: 'スーパーに行くときはエコバッグを必ず持参する。\n(Saya selalu membawa kantong belanja ramah lingkungan saat pergi ke supermarket.)'
  },
  {
    id: 'm7h1_12',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ギャラ',
    furigana: 'ギャラ',
    arti: 'Honorarium / Upah tampil',
    penjelasan: 'Singkatan dari Guaranty. Sebutan khusus untuk uang imbalan/gaji bagi pengisi acara, artis, atau pekerja lepas.',
    contoh1: 'あの芸能人は有名なのに、意外とギャラが安い。\n(Meskipun artis itu terkenal, ternyata honoriumnya lumayan murah.)',
    contoh2: 'ギャラの交渉がうまくいかず, 出演を辞退した。\n(Karena negosiasi honorarium tidak berjalan lancar, dia membatalkan penampilannya.)'
  },
  {
    id: 'm7h1_13',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'インテリ',
    furigana: 'インテリ',
    arti: 'Kaum terpelajar / Intelektual',
    penjelasan: 'Berasal dari Intelligentsia. Sebutan untuk orang yang berpendidikan tinggi, terpelajar, dan berwawasan luas.',
    contoh1: '彼は本をたくさん読むインテリな人だ。\n(Dia adalah orang intelektual yang membaca banyak sekali buku.)',
    contoh2: 'あの人のインテリ気取りの話し方が少し苦手だ。\n(Saya agak kurang suka dengan cara bicaranya yang sok intelektual itu.)'
  },
  {
    id: 'm7h1_14',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'セレブ',
    furigana: 'セレブ',
    arti: 'Orang kaya raya / Jetset',
    penjelasan: 'Singkatan dari Celebrity. Di Jepang spesifik merujuk pada orang kaya yang bergelimang harta dan bergaya hidup mewah.',
    contoh1: '高級住宅街には本物のセレブが多く住んでいる。\n(Di kawasan perumahan mewah, banyak ditinggali oleh orang kaya raya kelas atas yang asli.)',
    contoh2: '高級外車を何台も所有する彼女はまさにセレブだ。\n(Dia yang memiliki beberapa mobil mewah impor benar-benar seorang jetset.)'
  },

  // ==========================================================
  // KELOMPOK 2: 発音や意味に注意 (Perhatikan Lafal dan Maknanya)
  // ==========================================================
  {
    id: 'm7h1_15',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'マニア',
    furigana: 'マニア',
    arti: 'Penggila hobi / Mania',
    penjelasan: 'Orang yang sangat terobsesi dan paham mendalam tentang suatu bidang atau hobi spesifik.',
    contoh1: '兄は全国の電車を撮影して回る鉄道マニアだ。\n(Kakak laki-laki saya adalah seorang pencinta kereta api berat yang berkeliling memotret kereta.)',
    contoh2: 'この店にはカメラマニアが喜ぶ古くて珍しいレンズがある。\n(Di toko ini terdapat lensa tua dan langka yang akan membuat para penggila kamera senang.)'
  },
  {
    id: 'm7h1_16',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ドリル',
    furigana: 'ドリル',
    arti: 'Buku latihan soal / Alat bor',
    penjelasan: 'Memiliki 2 arti: (1) Alat bor pelubang, (2) Buku kumpulan soal latihan yang dikerjakan berulang-ulang.',
    contoh1: '漢字のドリルを毎日３ページずつ解く。\n(Menyelesaikan buku latihan soal kanji sebanyak 3 halaman setiap hari.)',
    contoh2: '壁に穴を開けるために電気ドリルを借りた。\n(Saya meminjam bor listrik untuk membuat lubang di dinding.)'
  },
  {
    id: 'm7h1_17',
    minggu: '7',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'カンパする',
    furigana: 'カンパする',
    arti: 'Patungan / Menyumbang dana',
    penjelasan: 'Berasal dari kata Kampaniya. Kegiatan mengumpulkan dana atau patungan secara sukarela untuk tujuan tertentu.',
    contoh1: 'サークルの合宿費用を一人500円ずつカンパする。\n(Patungan mengumpulkan uang masing-masing 500 yen untuk biaya kamp pelatihan klub.)',
    contoh2: '被災地を支援するため、みんなで資金をカンパした。\n(Kami semua menyumbangkan dana sukarela demi mendukung wilayah yang tertimpa bencana.)'
  },
  {
    id: 'm7h1_18',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ネック',
    furigana: 'ネック',
    arti: 'Hambatan utama / Kendala',
    penjelasan: 'Berasal dari Neck (leher botol/bottleneck). Mengacu pada titik masalah utama yang menghambat kelancaran suatu proses.',
    contoh1: '予算がネックになって、この計画は進まない。\n(Masalah anggaran menjadi hambatan utama, sehingga rencana ini tidak bisa berjalan.)',
    contoh2: '開発において人手不足が最大のネックになっている。\n(Kekurangan tenaga kerja menjadi kendala terbesar dalam proses pengembangan.)'
  },

  // ==========================================================
  // KELOMPOK 3: GAMBAR 2 - Kosakata Katakana Tambahan Masa Kini
  // ==========================================================
  {
    id: 'm7h1_19',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'レントゲンを撮る',
    furigana: 'レントゲンをとる',
    arti: 'Foto rontgen / Sinar-X',
    penjelasan: 'Melakukan foto medis menggunakan sinar-X untuk memeriksa bagian dalam tubuh atau tulang.',
    contoh1: '転んで足を強く打ったので、病院でレントゲンを撮った。\n(Karena terjatuh dan kaki terbentur keras, saya melakukan foto rontgen di rumah sakit.)',
    contoh2: 'レントゲンの結果、骨には異常がないことが分かった。\n(Berdasarkan hasil foto rontgen, dipastikan tidak ada kelainan pada tulang.)'
  },
  {
    id: 'm7h1_20',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ピンセットでつまむ',
    furigana: 'ピンセットでつまむ',
    arti: 'Menjepit dengan pinset',
    penjelasan: 'Mengambil atau memegang benda kecil/halus menggunakan alat penjepit logam (pinset).',
    contoh1: '指にトゲが刺さったので、ピンセットで慎重につまんで抜いた。\n(Karena jari tertusuk duri, saya menjepitnya dengan hati-hati menggunakan pinset lalu mencabutnya.)',
    contoh2: 'プラモデルの細かいパーツをピンセットで組み立てる。\n(Merakit bagian-bagian kecil model plastik dengan menggunakan alat jepit pinset.)'
  },
  {
    id: 'm7h1_21',
    minggu: '7',
    hari: '1',
    kategori: 'kata sifat',
    kanji: 'シックなデザイン',
    furigana: 'シックなデザイン',
    arti: 'Desain anggun / Elegan',
    penjelasan: 'Serapan bahasa Prancis Chic. Gaya yang berkelas, modis, tenang, dan tidak norak.',
    contoh1: '彼女は黒を基調としたシックなデザインのドレスを着ていた。\n(Dia mengenakan gaun dengan desain elegan nan anggun yang didominasi warna hitam.)',
    contoh2: 'このカフェの内装はシックで落ち着いた雰囲気がある。\n(Interior kafe ini memiliki atmosfer yang tenang, berkelas, dan elegan.)'
  },
  {
    id: 'm7h1_22',
    minggu: '7',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '時間にルーズな人',
    furigana: 'じかんにルーズなひと',
    arti: 'Orang yang tidak tepat waktu / Ngaret',
    penjelasan: 'Diserap dari Loose. Menunjukkan sikap lalai, santai, atau tidak disiplin terhadap aturan maupun janji waktu.',
    contoh1: '彼は時間にルーズな人だから、今日もきっと遅刻するだろう。\n(Karena dia adalah orang yang tidak disiplin waktu, hari ini pun pasti dia akan terlambat.)',
    contoh2: '約束やお金にルーズな人とは、一緒に仕事をしない方がいい。\n(Lebih baik jangan bekerja sama dengan orang yang ceroboh dalam urusan janji maupun uang.)'
  },
  {
    id: 'm7h1_23',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ガーゼを当てる',
    furigana: 'ガーゼをあてる',
    arti: 'Menempelkan kain kasa',
    penjelasan: 'Menutup bagian yang luka dengan kain tipis katun steril (kain kasa) untuk mencegah infeksi.',
    contoh1: '傷口にガーゼを当てて、その上から包帯を巻いた。\n(Menempelkan kain kasa pada luka, lalu membalutnya dengan perban dari atas.)',
    contoh2: '赤ちゃんの肌は非常にデリケートなので、柔らかいガーゼで拭いてあげる。\n(Karena kulit bayi sangat sensitif, seka dengan menggunakan kain kasa yang lembut.)'
  },
  {
    id: 'm7h1_24',
    minggu: '7',
    hari: '1',
    kategori: 'kata keterangan',
    kanji: '話がスムーズに進む',
    furigana: 'はなしがスムーズにすすむ',
    arti: 'Diskusi berjalan lancar / Mulus',
    penjelasan: 'Diserap dari Smooth. Menunjukkan bahwa proses percakapan atau rencana berjalan tanpa ada kendala.',
    contoh1: '念入りな準備のおかげで、話し合いがスムーズに進んだ。\n(Berkat persiapan yang matang, diskusi/pembicaraan dapat berjalan dengan sangat lancar.)',
    contoh2: '新しいシステムへの移行手続きがスムーズに行われた。\n(Prosedur transisi menuju sistem yang baru telah terlaksana dengan mulus.)'
  },
  {
    id: 'm7h1_25',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'アフターサービス',
    furigana: 'アフターサービス',
    arti: 'Layanan purna jual',
    penjelasan: 'Layanan pemeliharaan, garansi, atau perbaikan dari penjual setelah barang dibeli oleh konsumen.',
    contoh1: 'あの電気店はアフターサービスがいいので、安心して家電を買える。\n(Karena toko elektronik itu memiliki layanan purna jual yang bagus, kita bisa membeli produk elektronik dengan tenang.)',
    contoh2: '購入したパソコンが壊れたが、アフターサービスの保証期間内だったので無料で直った。\n(Komputer yang saya beli rusak, tetapi karena masih dalam masa garansi layanan purna jual, perbaikannya gratis.)'
  },
  {
    id: 'm7h1_26',
    minggu: '7',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '後継者にバトンタッチする',
    furigana: 'こうけいしゃにバトンタッチする',
    arti: 'Serah terima jabatan / Tongkat estafet',
    penjelasan: 'Kiasan dari lari estafet. Berarti menyerahkan tanggung jawab, wewenang, atau tugas kepada orang penerus.',
    contoh1: '社長は若い後継者にバトンタッチして引退することにした。\n(Direktur memutuskan untuk pensiun setelah menyerahkan tongkat estafet kepemimpinan kepada penerus yang masih muda.)',
    contoh2: '定時になったので、夜勤のスタッフに業務をバトンタッチする。\n(Karena sudah jam pulang, saya menyerahkan kelanjutan tugas pekerjaan kepada staf sif malam.)'
  },
  {
    id: 'm7h1_27',
    minggu: '7',
    hari: '1',
    kategori: 'kata kerja',
    kanji: 'テストでカンニングする',
    furigana: 'テストでカンニングする',
    arti: 'Mencontek saat ujian',
    penjelasan: 'Diserap dari Cunning. Di Jepang khusus berarti tindakan kecurangan atau mencontek saat tes akademis.',
    contoh1: 'テストでカンニングする行為は、見つかれば即座に失格となる。\n(Tindakan mencontek dalam ujian akan langsung berakibat pada diskualifikasi seketika jika ketahuan.)',
    contoh2: 'カンニングが試験官に見つかって、彼は停学処分を下された。\n(Ketahuan mencontek oleh pengawas ujian, dia akhirnya dijatuhi hukuman skors sekolah.)'
  },
  {
    id: 'm7h1_28',
    minggu: '7',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'ホースで庭に水をまく',
    furigana: 'ホースでにわにみずをまく',
    arti: 'Menyiram kebun dengan selang',
    penjelasan: 'Aktivitas menyiramkan air ke area halaman atau tanaman dengan menggunakan selang lentur.',
    contoh1: '長いホースを使って、庭の隅々まで水をまく。\n(Menggunakan selang air yang panjang untuk menyiram hingga ke seluruh pelosok halaman rumah.)',
    contoh2: 'ホースに小さな穴が開いて、途中で水が漏れてしまっている。\n(Selang airnya bocor karena berlubang kecil, sehingga airnya terbuang di tengah jalan.)'
  }
];

window.vocabData.push(...kosakata_m7h1);