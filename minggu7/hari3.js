// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m7h3 = [
  // --- GAMBAR 1 (BAGIAN ATAS / KOTAK) ---
  {
    id: 'm7h3_1',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'オイルショック',
    furigana: 'オイルショック',
    arti: 'Krisis minyak bumi (Oil shock)',
    penjelasan: 'Berasal dari "Oil shock". Krisis ekonomi akibat kelangkaan dan lonjakan harga minyak dunia.',
    contoh1: '1973年に世界的なオイルショックが起きた。\n(Terjadi krisis minyak dunia pada tahun 1973.)',
    contoh2: 'オイルショックの影響で、トイレットペーパーなどの物資が品薄になった。\n(Akibat pengaruh krisis minyak, barang kebutuhan seperti tisu toilet menjadi langka.)'
  },
  {
    id: 'm7h3_2',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'オーダーメイド',
    furigana: 'オーダーメイド',
    arti: 'Bikin pesanan / Custom-made',
    penjelasan: 'Berasal dari "Order-made". Barang (jas/sepatu) yang dibuat khusus sesuai pesanan ukuran pembeli.',
    contoh1: '彼はオーダーメイドの高級なスーツを着ている。\n(Dia mengenakan setelan jas mewah yang dibuat khusus sesuai pesanan.)',
    contoh2: '自分だけのオーダーメイドの財布を職人に注文した。\n(Saya memesan dompet custom-made khusus untuk diri saya sendiri kepada pengrajin.)'
  },
  {
    id: 'm7h3_3',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'グレードアップ（する）',
    furigana: 'グレードアップ（する）',
    arti: 'Upgrade kualitas / Naik kelas',
    penjelasan: 'Berasal dari "Grade up". Meningkatkan mutu/kelas barang menjadi lebih bagus atau mewah.',
    contoh1: '旅行会社がホテルの部屋をグレードアップしてくれた。\n(Agen perjalanan meningkatkan kelas [meng-upgrade] kamar hotel kami.)',
    contoh2: 'パソコンのパーツを交換して、性能をグレードアップする。\n(Mengganti komponen komputer untuk meningkatkan mutu/performa sistem.)'
  },
  {
    id: 'm7h3_4',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ペアルック',
    furigana: 'ペアルック',
    arti: 'Baju kembaran (Pasangan)',
    penjelasan: 'Wasei-eigo "Pair look". Tren pasangan/kekasih mengenakan baju berdesain sama persis.',
    contoh1: 'あの若いカップルはペアルックでデートをしている。\n(Pasangan muda itu sedang berkencan dengan mengenakan pakaian kembaran.)',
    contoh2: '周りの目が恥ずかしいので、ペアルックはしたくない。\n(Karena malu dilihat sekitar, saya tidak ingin memakai pakaian kembaran.)'
  },
  {
    id: 'm7h3_5',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ベッドタウン',
    furigana: 'ベッドタウン',
    arti: 'Kota satelit / Kota komuter',
    penjelasan: 'Berasal dari "Bed town". Kawasan pemukiman pinggiran kota yang penghuninya hanya pulang untuk tidur.',
    contoh1: 'この地域は大きな都市のベッドタウンとして発展した。\n(Daerah ini berkembang sebagai kota satelit/komuter bagi kota besar.)',
    contoh2: 'ベッドタウンは昼間、住民が仕事に出かけるため静かになる。\n(Kota komuter menjadi sangat sepi di siang hari karena penduduknya pergi bekerja.)'
  },
  {
    id: 'm7h3_6',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'サラ金',
    furigana: 'サラきん',
    arti: 'Rentenir / Pinjol bunga tinggi',
    penjelasan: 'Singkatan dari "Salaryman Kinyu". Lembaga peminjaman uang tunai tanpa jaminan dengan bunga tinggi.',
    contoh1: 'サラ金からお金を借りると、利息が高くて大変なことになる。\n(Jika meminjam uang dari rentenir, bunganya tinggi dan akan menjadi masalah besar.)',
    contoh2: '彼はサラ金の返済に追われて、生活に困窮している。\n(Dia dikejar-kejar oleh pelunasan utang rentenir sehingga kesulitan hidup.)'
  },
  {
    id: 'm7h3_7',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ユニットバス',
    furigana: 'ユニットバス',
    arti: 'Kamar mandi sistem paket (Modular)',
    penjelasan: 'Kamar mandi cetakan pabrik yang menyatukan bathtub, wastafel, dan toilet dalam satu ruangan.',
    contoh1: '日本の一人暮らし向けアパートはユニットバスが一般的だ。\n(Apartemen untuk orang yang tinggal sendiri di Jepang umumnya menggunakan kamar mandi modular.)',
    contoh2: 'ユニットバスは壁と床が防水なので、掃除が一度にできて楽だ。\n(Kamar mandi modular dinding dan lantainya tahan air, jadi mudah dibersihkan sekaligus.)'
  },
  {
    id: 'm7h3_8',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ゴールデンタイム',
    furigana: 'ゴールデンタイム',
    arti: 'Jam tayang utama (Prime time)',
    penjelasan: 'Jam siaran TV/radio dengan penonton terbanyak (sekitar jam 19.00 - 22.00).',
    contoh1: 'ゴールデンタイムには各局が人気のバラエティ番組を放送する。\n(Pada jam tayang utama, setiap stasiun menyiarkan acara varietas yang populer.)',
    contoh2: 'ゴールデンタイムのテレビCMは広告料金が非常に高い。\n(Biaya iklan televizion pada waktu prime time sangatlah mahal.)'
  },
  {
    id: 'm7h3_9',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'バージョンアップ（する）',
    furigana: 'バージョンアップ（する）',
    arti: 'Update sistem / Versi baru',
    penjelasan: 'Berasal dari "Version up". Memperbarui software/aplikasi ke versi baru agar fungsi bertambah.',
    contoh1: 'スマートフォンのOSを最新のものにバージョンアップする。\n(Memperbarui versi OS smartphone ke sistem yang paling baru.)',
    contoh2: 'アプリがバージョンアップしてから、動作が軽くなった。\n(Semenjak aplikasinya diperbarui versinya, jalannya aplikasi menjadi lebih lancar.)'
  },
  {
    id: 'm7h3_10',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ヘルスメーター',
    furigana: 'ヘルスメーター',
    arti: 'Timbangan badan rumahan',
    penjelasan: 'Berasal dari istilah "Health meter". Alat ukur berat badan yang biasa ditaruh di rumah/kamar mandi.',
    contoh1: 'お風呂上がりに毎日ヘルスメーターに乗って体重を測る。\n(Setiap selesai mandi, saya selalu naik ke atas timbangan badan untuk mengukur berat badan.)',
    contoh2: '新しいデジタル式のヘルスメーターは、体脂肪率も計算できる。\n(Timbangan badan digital yang baru dapat menghitung persentase lemak tubuh juga.)'
  },
  {
    id: 'm7h3_11',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ソーラーシステム',
    furigana: 'ソーラーシステム',
    arti: 'Sistem tenaga surya',
    penjelasan: 'Berasal dari "Solar system". Instalasi panel surya di atap rumah untuk listrik/pemanas air.',
    contoh1: '電気代を節約するために、家の屋根にソーラーシステムを設置した。\n(Untuk menghemat biaya listrik, saya memasang sistem tenaga surya di atap rumah.)',
    contoh2: 'ソーラーシステムのおかげで、災害時にも電気が使えて安心だ。\n(Berkat sistem tenaga surya, saya tenang karena listrik tetap bisa digunakan saat bencana.)'
  },
  {
    id: 'm7h3_12',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'リップサービス（する）',
    furigana: 'リップサービス（する）',
    arti: 'Basa-basi / Manis di bibir',
    penjelasan: 'Berasal dari "Lip service". Pujian atau janji manis yang sebatas ucapan mulut tanpa ketulusan.',
    contoh1: '政治家のあの発言は、ただのリップサービスにすぎない。\n(Ucapan politikus itu hanyalah sekadar basa-basi/manis di bibir saja.)',
    contoh2: '彼は人に好かれるために、いつもリップサービスをしている。\n(Dia selalu melemparkan pujian basa-basi agar disukai oleh orang-orang.)'
  },
  {
    id: 'm7h3_13',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'アダルトサイト',
    furigana: 'アダルトサイト',
    arti: 'Situs dewasa (Pornografi)',
    penjelasan: 'Berasal dari "Adult site". Situs web yang memuat konten khusus orang dewasa.',
    contoh1: '不審なアダルトサイトにアクセスすると高額な請求をされる詐欺がある。\n(Ada penipuan berupa tagihan fiktif berbiaya mahal jika mengakses situs dewasa yang mencurigakan.)',
    contoh2: '子ども向けの端末には、アダルトサイトの閲覧を制限する設定をする。\n(Pada gawai anak-anak, dipasang pengaturan untuk membatasi akses ke situs dewasa.)'
  },

  // --- GAMBAR 1 (BAGIAN BAWAH / DAFTAR CONTOH KALIMAT) ---
  {
    id: 'm7h3_14',
    minggu: '7',
    hari: '3',
    kategori: 'kata sifat',
    kanji: 'ワンパターン（な）',
    furigana: 'ワンパターン（な）',
    arti: 'Monoton / Polanya itu-itu saja',
    penjelasan: 'Berasal dari "One pattern". Sifat, obrolan, atau alur cerita yang tidak bervariasi sehingga membosankan.',
    contoh1: '彼はいつも同じ話ばかりするワンパターンな人間だ。\n(Dia adalah orang yang monoton/membosankan karena selalu membicarakan hal yang sama saja.)',
    contoh2: 'このドラマの展開はワンパターンで面白みがない。\n(Alur cerita drama ini polanya itu-itu saja dan tidak menarik.)'
  },
  {
    id: 'm7h3_15',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'フリーター',
    furigana: 'フリーター',
    arti: 'Pekerja lepas / Part-timer profesional',
    penjelasan: 'Dari kata "Free" & "Arbeiter". Orang usia produktif yang memilih hidup hanya dari kerja paruh waktu/serabutan.',
    contoh1: '彼は正社員ではなく、アルバイトで生計を立てているフリーターです。\n(Dia bukan karyawan tetap, melainkan seorang pekerja lepas yang menyambung hidup dengan kerja paruh waktu.)',
    contoh2: 'フリーターの期間が長いと、将来の経済面が不安定になりやすい。\n(Jika terlalu lama menjadi pekerja lepas, kondisi keuangan di masa depan cenderung tidak stabil.)'
  },
  {
    id: 'm7h3_16',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'Ｕターン（する）',
    furigana: 'Ｕターン（する）',
    arti: 'Putar balik / Pulang kampung',
    penjelasan: 'Berasal dari "U-turn". Berarti memutar balik kendaraan, atau fenomena perantau yang kembali menetap di kampung halaman.',
    contoh1: '道を間違えて行き過ぎてしまったので、車をＵターンさせる。\n(Karena salah jalan dan terlewat jauh, saya memutar balik mobilnya.)',
    contoh2: '都会に出た人が故郷に戻る「Ｕターン現象」が近年増えている。\n(Fenomena orang merantau kembali menetap di kampung halaman [U-turn] belakangan ini meningkat.)'
  },
  {
    id: 'm7h3_17',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'プラスアルファ',
    furigana: 'プラスアルファ',
    arti: 'Nilai tambah / Bonus ekstra',
    penjelasan: 'Istilah Jepang "Plus alpha" (+α). Tambahan nilai, keuntungan, atau bonus kecil di atas jumlah dasar.',
    contoh1: '今月の報酬は１０万円プラスアルファになるだろう。\n(Imbalan kerja bulan ini tampaknya akan menjadi 100.000 yen ditambah sedikit bonus tambahan.)',
    contoh2: '合格するためには、基礎知識にプラスアルファの応用力が必要だ。\n(Untuk lulus, diperlukan kemampuan aplikasi ekstra sebagai nilai tambah di luar pengetahuan dasar.)'
  },
  {
    id: 'm7h3_18',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'ペーパードライバー',
    furigana: 'ペーパードライバー',
    arti: 'Punya SIM tapi tak pernah nyetir',
    penjelasan: 'Berasal dari "Paper driver". Pemilik SIM yang sama sekali tidak pernah atau takut mengendarai mobil.',
    contoh1: '私は免許を取ってから一度も運転していないペーパードライバーです。\n(Saya adalah pengemudi di atas kertas yang tidak pernah menyetir sekali pun sejak mendapatkan SIM.)',
    contoh2: 'ペーパードライバー向けの運転練習講習を受けることにした。\n(Saya memutuskan untuk mengambil kelas latihan menyetir khusus bagi para paper driver.)'
  },
  {
    id: 'm7h3_19',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'スリーサイズ',
    furigana: 'スリーサイズ',
    arti: 'Tiga ukuran tubuh (Dada/Pinggang/Pinggul)',
    penjelasan: 'Berasal dari "Three sizes". Dimensi lingkar badan wanita (bust, waist, hip) untuk pakaian/model.',
    contoh1: '衣装のサイズを合わせるために、モデルのスリーサイズを測る。\n(Mengukur tiga ukuran badan model untuk mencocokkan ukuran pakaiannya.)',
    contoh2: 'スリーサイズとは、バスト・ウエスト・ヒップの３つの部分の寸法のことだ。\n(Yang dimaksud dengan three sizes adalah ukuran dimensi dari tiga bagian tubuh: dada, pinggang, dan pinggul.)'
  },
  {
    id: 'm7h3_20',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'サイドビジネス',
    furigana: 'サイドビジネス',
    arti: 'Bisnis sampingan (Sama dengan 副業)',
    penjelasan: 'Berasal dari "Side business". Pekerjaan atau usaha tambahan di luar pekerjaan utama.',
    contoh1: 'その有名俳優はサイドビジネス（＝副業）でレストランを経営している。\n(Aktor terkenal itu mengelola sebuah restoran sebagai bisnis sampingannya.)',
    contoh2: '会社の給料だけでは生活が厳しいため、ネットでサイドビジネスを始めた。\n(Karena hidup sulit jika hanya mengandalkan gaji kantor, saya memulai bisnis sampingan lewat internet.)'
  },
  {
    id: 'm7h3_21',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: 'プラス / マイナス',
    furigana: 'プラス / マイナス',
    arti: 'Positif / Negatif (Untung / Rugi)',
    penjelasan: 'Dari kata "Plus" & "Minus". Digunakan untuk pola pikir (positif/negatif) atau finansial (surplus/defisit).',
    contoh1: '困難な状況に直面しても、物事をプラスに考えることが大切だ。\n(Penting untuk memikirkan segala hal secara positif meskipun dihadapkan pada situasi sulit.)',
    contoh2: '今月は出費が多くて収支がマイナスになり、マイナス材料ばかりだ。\n(Bulan ini pengeluaran banyak sehingga neraca keuangan menjadi minus, isinya faktor merugikan semua.)'
  },
  {
    id: 'm7h3_22',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ゴールイン（する）',
    furigana: 'ゴールイン（する）',
    arti: 'Finish / Nikah (Menuju pelaminan)',
    penjelasan: 'Berasal dari "Goal in". Selain arti masuk garis finish, sering dipakai kiasan untuk pasangan yang akhirnya menikah.',
    contoh1: 'マラソンの先頭ランナーが、１着でゴールインした。\n(Pelari terdepan maraton sukses mencapai garis finish di posisi pertama.)',
    contoh2: '長年付き合ってきたそのカップルは、来春ついにゴールインする。\n(Pasangan yang telah lama berpacaran itu akhirnya akan menikah pada musim semi mendatang.)'
  },
  {
    id: 'm7h3_23',
    minggu: '7',
    hari: '3',
    kategori: 'kata benda',
    kanji: '満タン',
    furigana: 'まんタン',
    arti: 'Isi tangki penuh (Full tank)',
    penjelasan: 'Gabungan Kanji 満 (penuh) + Tank. Mengisi bahan bakar atau cairan ke wadah/tangki sampai penuh.',
    contoh1: '長距離ドライブに出かける前に、ガソリンを満タンにする。\n(Sebelum pergi berkendara jarak jauh, saya mengisi bensin sampai tangki penuh.)',
    contoh2: 'ストーブ用の灯油タンクを満タンに補充しておいた。\n(Saya sudah mengisi ulang tangki minyak tanah untuk pemanas ruangan sampai penuh.)'
  },

  // --- GAMBAR 2 ---
  {
    id: 'm7h3_24',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ダブる',
    furigana: 'ダブる',
    arti: 'Tumpang tindih / Tinggal kelas',
    penjelasan: 'Berasal dari "Double". Dipakai saat jadwal bentrok, penglihatan ganda, atau siswa yang tinggal kelas (mengulang tahun).',
    contoh1: '目が疲れているせいか、印刷された文字がダブって（＝重なって）見える。\n(Mungkin karena mata saya lelah, huruf yang tercetak terlihat tumpang tindih/ganda.)',
    contoh2: '彼は大学の単位を落としてしまい、１年ダブる（＝留年する）ことになった。\n(Dia kekurangan satuan kredit semester [SKS] di kampus, sehingga terpaksa mengulang tinggal kelas satu tahun.)'
  },
  {
    id: 'm7h3_25',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'キレる',
    furigana: 'キレる',
    arti: 'Mengamuk / Meledak marah (Slang)',
    penjelasan: 'Berasal dari 切れる (putus). Habis kesabaran secara mendadak lalu emosi meledak dan mengamuk.',
    contoh1: '彼は普段優しいが、突然キレて、周りに怒り出したので驚いた。\n(Dia biasanya baik, tapi saya kaget karena dia tiba-tiba mengamuk lepas kendali dan memarahi sekitar.)',
    contoh2: '理不尽な理由で何度も責められ、ついにキレてしまった。\n(Karena disalahkan berkali-kali secara tidak logis, akhirnya emosi saya meledak juga.)'
  },
  {
    id: 'm7h3_26',
    minggu: '7',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'サボる',
    furigana: 'サボる',
    arti: 'Membolos / Mangkir kerja',
    penjelasan: 'Berasal dari kata Prancis "Sabotage". Mangkir sekolah/kerja atau malas-malasan meninggalkan kewajiban.',
    contoh1: '仮病を使って会社や仕事をサボるのは良くない行為だ。\n(Memakai alasan sakit palsu untuk mangkir/membolos dari pekerjaan adalah tindakan yang tidak baik.)',
    contoh2: '授業をサボって友達とカラオケに行ってしまった。\n(Saya membolos jam pelajaran sekolah lalu pergi ke karaoke bersama teman.)'
  },
  {
    id: 'm7h3_27',
    minggu: '7',
    hari: '3',
    kategori: 'kata sifat',
    kanji: 'ヤバい',
    furigana: 'ヤバい',
    arti: 'Gawat / Bahaya / (Slang: Keren banget)',
    penjelasan: 'Slang populer. Makna dasar: berbahaya/bermasalah (危ない/困る). Bisa juga berarti positif ekstrem.',
    contoh1: '絶対に人に知られてはいけないヤバい仕事（＝危ない仕事）に関わってはいけない。\n(Jangan pernah terlibat dalam pekerjaan gawat/berbahaya yang sama sekali tidak boleh diketahui orang.)',
    contoh2: '明日の試験の日に時間に遅れると非常にヤバい（＝まずい、困る）。\n(Akan gawat/bermasalah besar jika saya datang terlambat pada hari ujian besok.)'
  }
];

window.vocabData.push(...kosakata_m7h3);