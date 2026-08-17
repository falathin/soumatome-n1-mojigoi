// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m4h1 = [
  // --- KANJI 手 (Tangan) ---
  {
    id: 'm4h1_1',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手口',
    furigana: 'てぐち',
    arti: 'Modus / Trik jahat',
    penjelasan: 'Cara atau taktik licik yang dipakai penjahat buat menipu/berbuat jahat.',
    contoh1: '犯行の手口。\n(Modus kejahatannya.)',
    contoh2: '詐欺の手口に引っかかる。\n(Kena tipu modus penipuan.)'
  },
  {
    id: 'm4h1_2',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手本',
    furigana: 'てほん',
    arti: 'Contoh / Teladan',
    penjelasan: 'Sesuatu yang bagus buat ditiru, bisa berupa contoh tulisan atau contoh perilaku orang.',
    contoh1: '習字の手本。\n(Contoh tulisan kaligrafi.)',
    contoh2: '彼は生徒たちの良い手本だ。\n(Dia contoh/teladan yang baik buat murid-murid.)'
  },
  {
    id: 'm4h1_3',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手軽（な）',
    furigana: 'てがる（な）',
    arti: 'Praktis / Simpel',
    penjelasan: 'Hal yang gampang, cepat, dan gak bikin ribet saat dilakukan.',
    contoh1: '手軽な料理。\n(Masakan yang simpel/praktis dibuat.)',
    contoh2: '手軽に情報を手に入れる。\n(Dapat info dengan gampang.)'
  },
  {
    id: 'm4h1_4',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手近（な）',
    furigana: 'てぢか（な）',
    arti: 'Dekat / Dekat jangkauan',
    penjelasan: 'Sesuatu yang posisinya ada di dekat kita dan gampang diambil.',
    contoh1: '手近な材料で作る。\n(Masak pakai bahan yang ada di dekat kita.)',
    contoh2: '辞書を手近に置く。\n(Taruh kamus di dekat kita biar gampang diambil.)'
  },
  {
    id: 'm4h1_5',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手ごろ（な）',
    furigana: 'てごろ（な）',
    arti: 'Pas / Terjangkau',
    penjelasan: 'Dipakai buat harga yang pas di kantong atau ukuran barang yang pas di tangan.',
    contoh1: '手ごろな値段。\n(Harga yang pas/terjangkau.)',
    contoh2: '手ごろな大きさのバッグ。\n(Ukuran tas yang pas.)'
  },
  {
    id: 'm4h1_6',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手引き',
    furigana: 'てびき',
    arti: 'Buku panduan / Petunjuk',
    penjelasan: 'Buku atau panduan dasar buat ngajarin cara melakukan sesuatu.',
    contoh1: '海外旅行の手引き。\n(Buku panduan jalan-jalan ke luar negeri.)',
    contoh2: 'パソコンの手引き書を読む。\n(Baca buku petunjuk penggunaan komputer.)'
  },
  {
    id: 'm4h1_7',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手元',
    furigana: 'てもと',
    arti: 'Di tangan / Posisinya dekat',
    penjelasan: 'Barang yang saat ini lagi kita pegang atau ada dekat di samping kita.',
    contoh1: 'それは、今、手元にない。\n(Barangnya lagi nggak ada di saya sekarang.)',
    contoh2: '手元に現金を置いておく。\n(Nyiapin uang tunai di dekat kita biar siap pakai.)'
  },
  {
    id: 'm4h1_8',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '手分け（する）',
    furigana: 'てわけ（する）',
    arti: 'Bagi-bagi tugas',
    penjelasan: 'Membagi pekerjaan ke beberapa orang supaya cepat selesai.',
    contoh1: '手分けして探す。\n(Bagi tugas buat nyari bareng-bareng.)',
    contoh2: '3チームに手分けして作業を進める。\n(Bagi kerjaan ke 3 tim biar cepat beres.)'
  },
  {
    id: 'm4h1_9',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'お手上げ',
    furigana: 'おてあげ',
    arti: 'Nyerah / Angkat tangan',
    penjelasan: 'Kondisi pasrah/buntu karena udah nggak tahu lagi harus ngapain.',
    contoh1: 'こんなに景気が悪いとお手上げだ。\n(Kalau ekonomi seburuk ini, kita cuma bisa pasrah/nyerah.)',
    contoh2: 'パソコンが壊れてしまってはお手上げだ。\n(Komputernya rusak, aku nyerah nggak bisa ngapa-ngapain.)'
  },
  {
    id: 'm4h1_10',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手中',
    furigana: 'しゅちゅう',
    arti: 'Dalam genggaman',
    penjelasan: 'Kiasan buat menggambarkan kalau kemenangan/kekuasaan sudah berhasil kita dapatkan.',
    contoh1: '勝利を手中にする。\n(Kemenangan sudah di dalam genggaman.)',
    contoh2: '権力を手中に収める。\n(Berhasil memegang kekuasaan penuh.)'
  },
  {
    id: 'm4h1_11',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '先手',
    furigana: 'せんて',
    arti: 'Langkah awal / Curi start',
    penjelasan: 'Bergerak atau bertindak duluan sebelum lawan/orang lain sempat merespons.',
    contoh1: '先手を打つ。\n(Mengambil langkah duluan sebelum keduluan orang.)',
    contoh2: '相手に先手を取られる。\n(Udah keduluan sama lawan.)'
  },
  {
    id: 'm4h1_12',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '右手',
    furigana: 'みぎて',
    arti: 'Tangan kanan / Sebelah kanan',
    penjelasan: 'Bisa berarti tangan sebelah kanan, atau menunjuk ke arah sebelah kanan.',
    contoh1: '右手の建物をごらんください。\n(Silakan lihat gedung di sebelah kanan.)',
    contoh2: '右手を挙げて質問する。\n(Angkat tangan kanan buat bertanya.)'
  },
  {
    id: 'm4h1_13',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '入手（する）',
    furigana: 'にゅうしゅ（する）',
    arti: 'Mendapatkan / Memperoleh',
    penjelasan: 'Berhasil dapat barang/informasi yang penting atau susah dicari.',
    contoh1: '情報を入手する。\n(Berhasil dapat informasi.)',
    contoh2: '入手困難なチケット。\n(Tiket yang susah banget didapat.)'
  },
  {
    id: 'm4h1_14',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手はず',
    furigana: 'てはず',
    arti: 'Rencana / Persiapan',
    penjelasan: 'Susunan langkah atau persiapan yang matang sebelum melakukan acara/kegiatan.',
    contoh1: '手はずを整える。\n(Nyiapin semua rencana dan persiapannya.)',
    contoh2: '引越しの手はずはもうできた。\n(Rencana persiapan pindahan udah beres.)'
  },
  {
    id: 'm4h1_15',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手がかり',
    furigana: 'てがかり',
    arti: 'Petunjuk / Clue',
    penjelasan: 'Bukti atau info kecil yang membantu memecahkan masalah atau misteri.',
    contoh1: '事件の手がかり。\n(Petunjuk kasus kejadian itu.)',
    contoh2: '問題を解決する手がかりを見つける。\n(Nemu petunjuk buat nyelesain masalah.)'
  },

  // --- KANJI 分 (Bagi/Bagian/Memahami) ---
  {
    id: 'm4h1_16',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '塩分',
    furigana: 'えんぶん',
    arti: 'Kadar garam',
    penjelasan: 'Banyaknya jumlah garam yang terkandung di dalam makanan/minuman.',
    contoh1: '塩分を控える。\n(Kurangin konsumsi garam/makanan asin.)',
    contoh2: 'このスープは塩分が多い。\n(Sup ini kadar garamnya tinggi/asin.)'
  },
  {
    id: 'm4h1_17',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '分別（する）',
    furigana: 'ぶんべつ（する）',
    arti: 'Memilah sampah',
    penjelasan: 'Memisah-misahkan sampah (plastik, botol, kertas) sesuai jenisnya.',
    contoh1: 'ゴミの分別。\n(Memilah-milah sampah.)',
    contoh2: 'プラスチックと紙を分別する。\n(Memisahkan sampah plastik dan kertas.)'
  },
  {
    id: 'm4h1_18',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '分別',
    furigana: 'ふんべつ',
    arti: 'Akal sehat / Kejelasan sikap',
    penjelasan: 'Dibaca "funbetsu". Artinya kemampuan berpikir dewasa dan tahu mana yang baik/buruk.',
    contoh1: '分別のある人。\n(Orang yang dewasa/punya akal sehat.)',
    contoh2: '若いが、とても分別がある。\n(Walau masih muda, pemikirannya dewasa banget.)'
  },
  {
    id: 'm4h1_19',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '分野',
    furigana: 'ぶんや',
    arti: 'Bidang',
    penjelasan: 'Area fokus atau bidang keahlian (misal: ilmu pengetahuan, seni, teknologi).',
    contoh1: '専門分野。\n(Bidang keahlian.)',
    contoh2: '彼は様々な分野で活躍している。\n(Dia aktif di berbagai macam bidang.)'
  },

  // --- KANJI 同 (Sama/Setara) ---
  {
    id: 'm4h1_20',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同上',
    furigana: 'どうじょう',
    arti: 'Sama seperti di atas',
    penjelasan: 'Dipakai di formulir supaya tidak perlu menulis ulang data yang sama dari baris atasnya.',
    contoh1: '同上の理由により……\n(Karena alasan yang sama seperti di atas...)',
    contoh2: '職業：同上。\n(Pekerjaan: Sama seperti di atas.)'
  },
  {
    id: 'm4h1_21',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同一',
    furigana: 'どういつ',
    arti: 'Sama persis / Identik',
    penjelasan: 'Dua hal atau orang yang benar-benar tidak ada bedanya sama sekali.',
    contoh1: '同一にみる。\n(Menganggap dua hal sebagai barang yang sama persis.)',
    contoh2: '彼らは同一人物だ。\n(Mereka itu orang yang sama.)'
  },
  {
    id: 'm4h1_22',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '同意（する）',
    furigana: 'どうい（する）',
    arti: 'Setuju / Sepakat',
    penjelasan: 'Menerima atau sependapat dengan ide/pendapat orang lain.',
    contoh1: '同意を求める。\n(Minta persetujuan orang lain.)',
    contoh2: '彼の提案に同意する。\n(Aku setuju sama usulannya.)'
  },
  {
    id: 'm4h1_23',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同い年',
    furigana: 'おないどし',
    arti: 'Seumuran / Sebaya',
    penjelasan: 'Kata santai untuk sebutan orang yang usianya sama dengan kita.',
    contoh1: '彼と私は同い年だ。\n(Dia dan aku seumuran.)',
    contoh2: '同い年の友達。\n(Teman-teman yang seumuran.)'
  },

  // --- KANJI 心 (Hati/Perasaan/Niat) ---
  {
    id: 'm4h1_24',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心当たり',
    furigana: 'こころあたり',
    arti: 'Ada gambaran / Tahu sesuatu',
    penjelasan: 'Pernah terlintas atau punya firasat/ingatan tentang suatu topik yang lagi dibahas.',
    contoh1: 'その件については、心当たりがない。\n(Soal masalah itu, aku tak ada gambaran sama sekali.)',
    contoh2: '犯人の心当たりがある。\n(Aku ada tebakan/gambaran siapa pelakunya.)'
  },
  {
    id: 'm4h1_25',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '下心',
    furigana: 'したごころ',
    arti: 'Niat terselubung / Ada maunya',
    penjelasan: 'Maksud tersembunyi (biasanya licik/buruk) di balik sikap manis seseorang.',
    contoh1: '下心がある。\n(Ada niat terselubung / ada maunya.)',
    contoh2: '親切の裏には下心があった。\n(Di balik kebaikannya ternyata ada maksud terselubung.)'
  },
  {
    id: 'm4h1_26',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '野心',
    furigana: 'やしん',
    arti: 'Ambisi besar',
    penjelasan: 'Keinginan yang sangat kuat untuk sukses, kaya, atau berkuasa.',
    contoh1: '野心がある。\n(Punya ambisi besar.)',
    contoh2: '若い頃は野心に燃えていた。\n(Waktu muda dulu, ambisiku bergejolak tinggi.)'
  },
  {
    id: 'm4h1_27',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心地',
    furigana: 'ここち',
    arti: 'Rasa nyaman',
    penjelasan: 'Sensasi nyaman secara fisik saat menduduki, memakai, atau menempati sesuatu.',
    contoh1: '住み心地がいい。\n(Tempat tinggal yang rasanya nyaman banget.)',
    contoh2: '座り心地の良いソファ。\n(Sofa yang sangat nyaman diduduki.)'
  },
  {
    id: 'm4h1_28',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '内心',
    furigana: 'ないしん',
    arti: 'Di dalam hati',
    penjelasan: 'Perasaan yang sebenarnya dirasakan tapi tidak ditunjukkan ke luar.',
    contoh1: '内心、穏やかではない。\n(Kelihatannya tenang, padahal dalam hatinya gelisah.)',
    contoh2: '内心では喜んでいる。\n(Sebenarnya di dalam hati dia senang banget.)'
  },
  {
    id: 'm4h1_29',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心中',
    furigana: 'しんちゅう',
    arti: 'Isi hati / Perasaan',
    penjelasan: 'Dibaca "shinchuu". Berisi perasaan mendalam seseorang yang sedang sedih atau berat pikiran.',
    contoh1: '心中を察する。\n(Mencoba memahami perasaan dan isi hatinya.)',
    contoh2: '彼の心中は複雑だった。\n(Perasaan hatinya sedang campur aduk.)'
  },
  {
    id: 'm4h1_30',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '心中（する）',
    furigana: 'しんじゅう（する）',
    arti: 'Bunuh diri bersama',
    penjelasan: 'Dibaca "shinjuu". Sepakat mengakhiri hidup bersama-sama (misal: pasangan atau keluarga).',
    contoh1: '心中を図る。\n(Merencanakan bunuh diri bersama.)',
    contoh2: '一家心中という悲しい事件。\n(Tragedi sedih satu keluarga bunuh diri bersama.)'
  },
  {
    id: 'm4h1_31',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心遣い',
    furigana: 'こころづかい',
    arti: 'Perhatian / Kepedulian',
    penjelasan: 'Sikap tenggang rasa dan perhatian tulus pada kenyamanan orang lain.',
    contoh1: '親切な心遣い。\n(Perhatian dan kebaikan yang tulus.)',
    contoh2: '温かいお心遣いに感謝します。\n(Terima kasih banyak atas perhatiannya yang tulus.)'
  }
];

window.vocabData.push(...kosakata_m4h1);