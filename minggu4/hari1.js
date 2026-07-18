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
    arti: 'Trik / Modus kejahatan',
    penjelasan: 'Cara licik atau trik yang dipakai orang untuk menipu atau berbuat jahat.',
    contoh1: '犯行の手口。\n(Modus kejahatan tersebut.)',
    contoh2: '詐欺の手口に引っかかる。\n(Kena tipu oleh trik penipuan.)'
  },
  {
    id: 'm4h1_2',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手本',
    furigana: 'てほん',
    arti: 'Contoh / Teladan',
    penjelasan: 'Sesuatu yang bagus untuk dicontoh atau ditiru. Bisa berupa tulisan atau kelakuan orang.',
    contoh1: '習字の手本。\n(Contoh tulisan kaligrafi.)',
    contoh2: '彼は生徒たちの良い手本だ。\n(Dia adalah teladan yang baik untuk murid-murid.)'
  },
  {
    id: 'm4h1_3',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手軽（な）',
    furigana: 'てがる（な）',
    arti: 'Praktis / Gampang',
    penjelasan: 'Sesuatu yang bisa dilakukan dengan gampang, cepat, dan tidak ribet.',
    contoh1: '手軽な料理。\n(Masakan yang gampang dibuat.)',
    contoh2: '手軽に情報を手に入れる。\n(Mendapatkan info dengan gampang.)'
  },
  {
    id: 'm4h1_4',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手近（な）',
    furigana: 'てぢか（な）',
    arti: 'Dekat / Gampang dijangkau',
    penjelasan: 'Benda yang ada di dekat kita dan gampang diambil pakai tangan.',
    contoh1: '手近な材料で作る。\n(Bikin masakan dari bahan yang ada di dekat kita.)',
    contoh2: '辞書を手近に置く。\n(Naruh kamus di dekat kita biar gampang diambil.)'
  },
  {
    id: 'm4h1_5',
    minggu: '4',
    hari: '1',
    kategori: 'kata sifat',
    kanji: '手ごろ（な）',
    furigana: 'てごろ（な）',
    arti: 'Pas / Terjangkau',
    penjelasan: 'Biasanya dipakai untuk harga yang pas di kantong (murah), atau ukuran barang yang pas di tangan.',
    contoh1: '手ごろな値段。\n(Harga yang pas/terjangkau.)',
    contoh2: '手ごろな大きさのバッグ。\n(Tas yang ukurannya pas.)'
  },
  {
    id: 'm4h1_6',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手引き',
    furigana: 'てびき',
    arti: 'Buku panduan / Petunjuk',
    penjelasan: 'Buku atau panduan yang ngajarin kita cara melakukan atau memakai sesuatu dari dasar.',
    contoh1: '海外旅行の手引き。\n(Buku panduan jalan-jalan ke luar negeri.)',
    contoh2: 'パソコンの手引き書を読む。\n(Membaca buku petunjuk cara pakai komputer.)'
  },
  {
    id: 'm4h1_7',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手元',
    furigana: 'てもと',
    arti: 'Di tangan / Di dekat kita',
    penjelasan: 'Benda yang sekarang ini lagi ada di tangan kita atau di dekat kita.',
    contoh1: 'それは、今、手元にない。\n(Barangnya sekarang lagi nggak ada di tangan saya.)',
    contoh2: '手元に現金を置いておく。\n(Nyiapin uang tunai di dekat kita biar siap pakai.)'
  },
  {
    id: 'm4h1_8',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '手分け（する）',
    furigana: 'てわけ（する）',
    arti: 'Bagi-bagi tugas / Bagi kerjaan',
    penjelasan: 'Membagi tugas atau kerjaan ke beberapa orang biar cepat selesai.',
    contoh1: '手分けして探す。\n(Kita bagi tugas buat nyari bareng-bareng.)',
    contoh2: '3チームに手分けして作業を進める。\n(Bagi kerjaan ke 3 tim biar cepat selesai.)'
  },
  {
    id: 'm4h1_9',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: 'お手上げ',
    furigana: 'おてあげ',
    arti: 'Nyerah / Angkat tangan',
    penjelasan: 'Ungkapan kalau kita udah nyerah, buntu, dan nggak tahu lagi harus ngapain buat nyelesain masalah.',
    contoh1: 'こんなに景気が悪いとお手上げだ。\n(Kalau ekonomi seburuk ini, kita cuma bisa angkat tangan/nyerah.)',
    contoh2: 'パソコンが壊れてしまってはお手上げだ。\n(Komputernya rusak, aku nyerah deh nggak bisa ngapa-ngapain.)'
  },
  {
    id: 'm4h1_10',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手中',
    furigana: 'しゅちゅう',
    arti: 'Dalam genggaman / Penguasaan',
    penjelasan: 'Kiasan kalau kita berhasil menguasai atau mendapatkan sesuatu sepenuhnya, kayak kemenangan atau kekuasaan.',
    contoh1: '勝利を手中にする。\n(Kemenangan udah di dalam genggaman.)',
    contoh2: '権力を手中に収める。\n(Berhasil menguasai kekuasaan penuh.)'
  },
  {
    id: 'm4h1_11',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '先手',
    furigana: 'せんて',
    arti: 'Langkah pertama / Duluan',
    penjelasan: 'Ngambil tindakan atau nyerang duluan sebelum musuh atau pihak lain bertindak.',
    contoh1: '先手を打つ。\n(Ngambil langkah duluan sebelum keduluan orang lain.)',
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
    penjelasan: 'Tangan kanan kita, atau nunjukin arah yang ada di sebelah kanan.',
    contoh1: '右手の建物をごらんください。\n(Silakan lihat gedung di sebelah kanan.)',
    contoh2: '右手を挙げて質問する。\n(Angkat tangan kanan buat nanya.)'
  },
  {
    id: 'm4h1_13',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '入手（する）',
    furigana: 'にゅうしゅ（する）',
    arti: 'Dapet / Memperoleh',
    penjelasan: 'Berhasil dapet barang yang biasanya penting atau susah dicari, kayak info penting atau tiket langka.',
    contoh1: '情報を入手する。\n(Berhasil dapet info penting.)',
    contoh2: '入手困難なチケット。\n(Tiket yang susah banget didapet.)'
  },
  {
    id: 'm4h1_14',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手はず',
    furigana: 'てはず',
    arti: 'Persiapan / Rencana',
    penjelasan: 'Rencana atau persiapan yang udah diatur sebelum melakukan sesuatu.',
    contoh1: '手はずを整える。\n(Nyiapin semua rencana dan persiapannya.)',
    contoh2: '引越しの手はずはもうできた。\n(Persiapan pindahan udah beres semua.)'
  },
  {
    id: 'm4h1_15',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '手がかり',
    furigana: 'てがかり',
    arti: 'Petunjuk / Kunci (Clue)',
    penjelasan: 'Petunjuk kecil yang bantu kita buat mecahin masalah atau kasus misteri.',
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
    arti: 'Kandungan garam',
    penjelasan: 'Jumlah garam yang ada di dalam makanan atau minuman.',
    contoh1: '塩分を控える。\n(Ngurangin makan yang bergaram/asin.)',
    contoh2: 'このスープは塩分が多い。\n(Sup ini kandungan garamnya tinggi.)'
  },
  {
    id: 'm4h1_17',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '分別（する）',
    furigana: 'ぶんべつ（する）',
    arti: 'Milah sampah / Misahin sesuai jenis',
    penjelasan: 'Kegiatan misahin sampah (kayak plastik, botol, kertas) ke tempat yang beda-beda buat didaur ulang.',
    contoh1: 'ゴミの分別。\n(Milah-milah sampah.)',
    contoh2: 'プラスチックと紙を分別する。\n(Misahin sampah plastik dan kertas.)'
  },
  {
    id: 'm4h1_18',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '分別',
    furigana: 'ふんべつ',
    arti: 'Akal sehat / Pemikiran matang',
    penjelasan: 'Cara baca: "funbetsu". Artinya kemampuan buat mikir panjang, tahu mana yang baik dan buruk pakai akal sehat.',
    contoh1: '分別のある人。\n(Orang yang punya pemikiran matang/dewasa.)',
    contoh2: '若いが、とても分別がある。\n(Walau masih muda, dia mikirnya udah matang/dewasa banget.)'
  },
  {
    id: 'm4h1_19',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '分野',
    furigana: 'ぶんや',
    arti: 'Bidang',
    penjelasan: 'Bagian atau keahlian khusus dalam kerjaan, pelajaran, atau industri.',
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
    arti: 'Sama kayak di atas',
    penjelasan: 'Dipakai waktu ngisi formulir buat ngasih tahu kalau isinya persis sama kayak baris sebelumnya, biar nggak usah nulis ulang.',
    contoh1: '同上の理由により……\n(Karena alasan yang sama kayak di atas...)',
    contoh2: '職業：同上。\n(Pekerjaan: Sama kayak di atas.)'
  },
  {
    id: 'm4h1_21',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '同一',
    furigana: 'どういつ',
    arti: 'Sama persis / Identik',
    penjelasan: 'Kondisi di mana nggak ada bedanya sama sekali, bener-bener sama.',
    contoh1: '同一にみる。\n(Ngeliat sesuatu sebagai hal yang sama persis.)',
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
    penjelasan: 'Setuju atau sepakat sama ide atau omongan orang lain.',
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
    penjelasan: 'Kata sehari-hari buat ngomong kalau umur kita sama dengan orang lain.',
    contoh1: '彼と私は同い年だ。\n(Dia dan aku tuh seumuran.)',
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
    arti: 'Ada bayangan / Tahu sesuatu',
    penjelasan: 'Ingatan atau bayangan yang tiba-tiba kepikiran waktu ada sesuatu yang dibahas atau dicari.',
    contoh1: 'その件については、心当たりがない。\n(Soal itu, aku nggak ada bayangan sama sekali.)',
    contoh2: '犯人の心当たりがある。\n(Aku agak kepikiran siapa pelakunya nih.)'
  },
  {
    id: 'm4h1_25',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '下心',
    furigana: 'したごころ',
    arti: 'Niat tersembunyi / Ada maunya',
    penjelasan: 'Niat buruk atau maunya aja yang disembunyiin di balik sikap baik orang.',
    contoh1: '下心がある。\n(Ada niat tersembunyi / ada maunya.)',
    contoh2: '親切の裏には下心があった。\n(Di balik kebaikannya ternyata ada maunya aja.)'
  },
  {
    id: 'm4h1_26',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '野心',
    furigana: 'やしん',
    arti: 'Ambisi / Cita-cita gede',
    penjelasan: 'Keinginan yang gede banget buat sukses, kaya, atau berkuasa.',
    contoh1: '野心がある。\n(Punya ambisi besar.)',
    contoh2: '若い頃は野心に燃えていた。\n(Waktu muda dulu, aku punya ambisi yang menggebu-gebu.)'
  },
  {
    id: 'm4h1_27',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心地',
    furigana: 'ここち',
    arti: 'Rasa nyaman (fisik/tempat)',
    penjelasan: 'Perasaan nyaman waktu kita pakai barang atau tinggal di suatu tempat.',
    contoh1: '住み心地がいい。\n(Tempat tinggal yang rasanya nyaman banget ditempatin.)',
    contoh2: '座り心地の良いソファ。\n(Sofa yang nyaman banget buat didudukin.)'
  },
  {
    id: 'm4h1_28',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '内心',
    furigana: 'ないしん',
    arti: 'Dalam hati',
    penjelasan: 'Perasaan asli yang disembunyiin di dalam hati, biar nggak kelihatan dari luar.',
    contoh1: '内心、穏やかではない。\n(Kelihatannya tenang, padahal dalam hatinya kacau.)',
    contoh2: '内心では喜んでいる。\n(Sebenarnya di dalam hatinya dia senang banget.)'
  },
  {
    id: 'm4h1_29',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心中',
    furigana: 'しんちゅう',
    arti: 'Isi hati / Perasaan terdalam',
    penjelasan: 'Perasaan atau isi hati orang yang biasanya lagi sedih atau banyak beban pikiran.',
    contoh1: '心中を察する。\n(Mencoba ngertiin perasaan dan isi hatinya.)',
    contoh2: '彼の心中は複雑だった。\n(Isi hatinya lagi campur aduk dan sedih.)'
  },
  {
    id: 'm4h1_30',
    minggu: '4',
    hari: '1',
    kategori: 'kata kerja',
    kanji: '心中（する）',
    furigana: 'しんじゅう（する）',
    arti: 'Bunuh diri bareng',
    penjelasan: 'Cara baca: "shinjuu". Artinya sepakat buat mengakhiri hidup bareng-bareng (biasanya bareng pacar atau keluarga).',
    contoh1: '心中を図る。\n(Bikin rencana buat bunuh diri bareng.)',
    contoh2: '一家心中という悲しい事件。\n(Kasus sedih di mana satu keluarga bunuh diri bareng.)'
  },
  {
    id: 'm4h1_31',
    minggu: '4',
    hari: '1',
    kategori: 'kata benda',
    kanji: '心遣い',
    furigana: 'こころづかい',
    arti: 'Perhatian / Peduli sama orang',
    penjelasan: 'Sikap peduli dan merhatiin kenyamanan atau perasaan orang di sekitar kita.',
    contoh1: '親切な心遣い。\n(Perhatian dan kebaikan yang tulus.)',
    contoh2: '温かいお心遣いに感謝します。\n(Makasih banyak ya atas perhatiannya yang tulus.)'
  }
];

window.vocabData.push(...kosakata_m4h1);