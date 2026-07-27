// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m8h3 = [
  // ===============================
  // BAGIAN 1: KAO (顔) - WAJAH
  // ===============================
  {
    id: 'm8h3_1',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '顔が売れる',
    furigana: 'かおがうれる',
    arti: 'Terkenal / Populer',
    penjelasan: 'Ibarat barang yang laris manis (売れる), wajah orang ini sangat dikenal luas dan familier di suatu lingkungan atau komunitas.',
    contoh1: '彼はこの辺りでは顔が売れている。\n(Dia sangat terkenal di daerah sekitar sini.)',
    contoh2: 'テレビに出演したおかげで、すっかり顔が売れた。\n(Berkat tampil di TV, dia jadi benar-benar terkenal di kalangan masyarakat.)'
  },
  {
    id: 'm8h3_2',
    minggu: '8',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '顔が広い',
    furigana: 'かおがひろい',
    arti: 'Punya banyak kenalan / Jaringan luas',
    penjelasan: 'Bukan berarti wajahnya beneran lebar ya, tapi ini sebutan buat orang yang supel, gampang gaul, dan punya relasi di mana-mana.',
    contoh1: '彼はとても顔が広い。\n(Dia memiliki koneksi atau jaringan pertemanan yang sangat luas.)',
    contoh2: '顔が広い彼女に頼めば、適任者を紹介してくれるだろう。\n(Kalau minta tolong padanya yang punya banyak kenalan, dia pasti bakal kenalin orang yang tepat.)'
  },
  {
    id: 'm8h3_3',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '顔が利く',
    furigana: 'かおがきく',
    arti: 'Punya pengaruh / Disegani (VIP)',
    penjelasan: 'Orang yang saking terkenal atau punya reputasi/jabatan, dia gampang banget dapet perlakuan khusus atau permintaannya gampang dikabulkan layaknya pelanggan VIP.',
    contoh1: '私はその店に顔が利く。\n(Saya dikenal baik di toko itu [sehingga biasa diberi perlakuan khusus/VIP].)',
    contoh2: '彼はこの業界で顔が利くので、仕事がスムーズに進む。\n(Karena dia punya pengaruh besar di industri ini, urusan kerjaan jadi lancar.)'
  },
  {
    id: 'm8h3_4',
    minggu: '8',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '合わせる顔がない',
    furigana: 'あわせるかおがない',
    arti: 'Nggak punya muka / Malu banget',
    penjelasan: 'Perasaan malu, ngerasa bersalah, atau menyesal banget sampai-sampai rasanya nggak sanggup buat sekadar tatap muka sama orang yang udah kita kecewakan.',
    contoh1: '親に合わせる顔がない。\n(Saya nggak punya muka / malu banget buat ketemu orang tua.)',
    contoh2: 'こんな大失敗をしてしまって、社長に合わせる顔がない。\n(Bikin kesalahan sebesar ini, rasanya saya nggak punya muka buat menghadap direktur.)'
  },
  {
    id: 'm8h3_5',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '顔を立てる',
    furigana: 'かおをたてる',
    arti: 'Menjaga kehormatan / Jaga image orang',
    penjelasan: 'Sikap menjaga martabat, harga diri, atau "muka" orang lain (terutama atasan) supaya mereka nggak malu atau kelihatan buruk di depan umum.',
    contoh1: '上司の顔を立てる。\n(Mencoba menjaga kehormatan atau reputasi atasan.)',
    contoh2: '先生の顔を立てて、今回は私が我慢することにした。\n(Demi menjaga image/reputasi guru, kali ini saya mutusin buat ngalah/bersabar.)'
  },

  // ===============================
  // BAGIAN 2: ME (目) - MATA
  // ===============================
  {
    id: 'm8h3_6',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目が回る',
    furigana: 'めがまわる',
    arti: 'Sibuk banget (sampai pusing)',
    penjelasan: 'Kiasan buat kerjaan atau jadwal yang saking padatnya sampai bikin kepala pusing dan mata kerasa muter-muter.',
    contoh1: '目が回るような忙しさ。\n(Kesibukan yang luar biasa sibuk sampai bikin mata serasa berputar.)',
    contoh2: '今日は朝から客が多くて、目が回るほどだった。\n(Hari ini dari pagi tamunya banyak banget, sibuknya ampun-ampunan sampai pusing.)'
  },
  {
    id: 'm8h3_7',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目に浮かぶ',
    furigana: 'めにうかぶ',
    arti: 'Terbayang di mata / Teringat jelas',
    penjelasan: 'Momen di mana kenangan atau wajah seseorang tiba-tiba muncul dan tergambar jelas di pikiran kita, seolah-olah lagi ngelihat langsung di depan mata.',
    contoh1: '故郷の様子が目に浮かぶ。\n(Suasana kampung halaman terbayang-bayang di depan mata.)',
    contoh2: '彼女の嬉しそうな顔が今でも目に浮かぶ。\n(Wajah bahagianya bahkan sampai sekarang masih terbayang jelas di mataku.)'
  },
  {
    id: 'm8h3_8',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目を疑う',
    furigana: 'めをうたがう',
    arti: 'Nggak percaya sama yang dilihat',
    penjelasan: 'Momen kaget ngelihat sesuatu yang luar biasa atau aneh banget, sampai kita ngebatin, "Eh, beneran nggak sih nih yang aku lihat?" (meragukan mata sendiri).',
    contoh1: '目を疑うような光景。\n(Pemandangan yang sukar dipercaya / bikin kita meragukan mata sendiri.)',
    contoh2: '宝くじに当たったという知らせを見て、自分の目を疑った。\n(Pas ngelihat pengumuman menang lotre, aku sampai nggak percaya sama mataku sendiri.)'
  },
  {
    id: 'm8h3_9',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目を離す',
    furigana: 'めをはなす',
    arti: 'Lengah / Mengalihkan pandangan',
    penjelasan: 'Berhenti ngawasin sesuatu yang harusnya dijaga. Biasanya dipakai buat peringatan, kayak "jangan lengah ngawasin anak kecil" atau "jangan ditinggal pas masak".',
    contoh1: '子どもから目を離す。\n(Lengah/mengalihkan pandangan dari mengawasi anak kecil.)',
    contoh2: '火を止めるまで、絶対に鍋から目を離さないでください。\n(Sampai apinya dimatikan, tolong jangan alihkan pandanganmu dari panci.)'
  },
  {
    id: 'm8h3_10',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目を丸くする',
    furigana: 'めをまるくする',
    arti: 'Membelalakkan mata / Kaget banget',
    penjelasan: 'Reaksi kaget atau heran luar biasa yang bikin mata kita otomatis melotot atau ngebuka lebar sampai bentuknya jadi bulat (丸く).',
    contoh1: '突然のプレゼントに目を丸くする。\n(Kaget banget / membelalakkan mata karena dapet hadiah tiba-tiba.)',
    contoh2: '信じられないニュースを聞いて、彼は目を丸くした。\n(Mendengar berita yang sulit dipercaya itu, matanya membelalak kaget.)'
  },
  {
    id: 'm8h3_11',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目を引く',
    furigana: 'めをひく',
    arti: 'Menarik perhatian / Mencolok (Eye-catching)',
    penjelasan: 'Sesuatu yang menonjol, keren, atau unik banget yang bikin pandangan orang-orang otomatis tertuju ke situ.',
    contoh1: '目を引くデザイン。\n(Desain yang mencolok dan menarik perhatian.)',
    contoh2: '彼女の赤いドレスは、パーティー会場で一番目を引いた。\n(Gaun merahnya adalah yang paling mencolok perhatian di area pesta.)'
  },
  {
    id: 'm8h3_12',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目がさえる',
    furigana: 'めがさえる',
    arti: 'Mata melek / Nggak bisa tidur',
    penjelasan: 'Kondisi di mana rasa ngantuk hilang total dan mata jadi seger banget (misalnya abis minum kopi atau lagi banyak pikiran).',
    contoh1: '目がさえて眠れない。\n(Matanya melek banget jadi nggak bisa tidur.)',
    contoh2: '濃いコーヒーを飲んだら目がさえてしまった。\n(Setelah minum kopi pekat, mataku malah jadi seger dan nggak bisa tidur.)'
  },
  {
    id: 'm8h3_13',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目が届く',
    furigana: 'めがとどく',
    arti: 'Terjangkau pandangan / Dalam pengawasan',
    penjelasan: 'Jarak atau area di mana kita masih bisa mantau dan ngelihat sesuatu secara langsung dengan gampang (biasanya buat naruh barang penting atau area main anak).',
    contoh1: '大事なものを目が届くところに置く。\n(Naruh barang penting di tempat yang gampang kelihatan/terjangkau pandangan.)',
    contoh2: '親の目が届く範囲で遊ばせている。\n(Aku biarin anak-anak main di radius yang masih terjangkau pengawasan orang tua.)'
  },
  {
    id: 'm8h3_14',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '長い目で見る',
    furigana: 'ながいめでみる',
    arti: 'Melihat jangka panjang / Bersabar',
    penjelasan: 'Sikap nggak buru-buru nge-judge hasil saat itu juga, tapi ngasih waktu dan bersabar ngelihat perkembangannya pelan-pelan ke depan.',
    contoh1: '子どもの将来を長い目で見る。\n(Ngelihat masa depan anak dengan visi jangka panjang yang sabar.)',
    contoh2: '今は失敗が多いですが、どうか彼を長い目で見てやってください。\n(Sekarang dia memang banyak salah, tapi tolong bersabarlah dan lihat perkembangannya pelan-pelan ke depan.)'
  },
  {
    id: 'm8h3_15',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '目が肥えている',
    furigana: 'めがこえている',
    arti: 'Punya mata ahli / Jago menilai barang',
    penjelasan: 'Sama kayak "目が高い". Karena sering ngelihat barang-barang berkelas (kaya karya seni), matanya jadi terlatih buat ngebedain mana barang asli/bagus dan mana yang abal-abal.',
    contoh1: '彼は絵画に対して目が肥えている。\n(Dia punya mata ahli / jago menilai kualitas lukisan.)',
    contoh2: '目が肥えている客を満足させるのは難しい。\n(Susah banget buat muasin pelanggan yang pinter menilai barang bagus.)'
  },

  // ===============================
  // BAGIAN 3: MIMI (耳) - TELINGA
  // ===============================
  {
    id: 'm8h3_16',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳を澄ます',
    furigana: 'みみをすます',
    arti: 'Memasang telinga / Fokus mendengarkan',
    penjelasan: 'Konsentrasi penuh masang telinga tajam-tajam buat nangkap suara yang pelan banget biar kedengaran jelas.',
    contoh1: '耳を澄ます。\n(Mendengarkan dengan penuh konsentrasi / pasang telinga baik-baik.)',
    contoh2: '森の中で耳を澄ますと、鳥の鳴き声が聞こえる。\n(Kalau kita pasang telinga di dalem hutan, bakal kedengeran kicauan burung.)'
  },
  {
    id: 'm8h3_17',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳を傾ける',
    furigana: 'みみをかたむける',
    arti: 'Menyimak sungguh-sungguh / Terbuka pada pendapat',
    penjelasan: 'Sikap aktif, tulus, dan berempati pas dengerin cerita, keluhan, atau pendapat orang lain.',
    contoh1: '子どもの話に耳を傾ける。\n(Menyimak baik-baik apa yang diceritain sama anak.)',
    contoh2: '皆の意見に耳を傾けることが、リーダーには必要だ。\n(Dengerin pendapat semua orang dengan tulus itu hal wajib buat seorang pemimpin.)'
  },
  {
    id: 'm8h3_18',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳に障る',
    furigana: 'みみにさわる',
    arti: 'Terdengar mengganggu / Bikin risih',
    penjelasan: 'Suara yang bikin telinga atau perasaan nggak nyaman. Bisa jadi karena suaranya bising banget, atau omongan orang yang ngeselin dan bikin sakit hati.',
    contoh1: '工事の音が耳に障る。\n(Suara proyek konstruksinya bising dan ganggu telinga banget.)',
    contoh2: '彼の言い訳はいつも耳に障る。\n(Alasan-alasan yang dia buat tuh selalu bikin kuping risih/ngeselin dengerinnya.)'
  },
  {
    id: 'm8h3_19',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳をふさぐ',
    furigana: 'みみをふさぐ',
    arti: 'Menutup telinga / Nggak mau dengar',
    penjelasan: 'Bisa berarti beneran nutup telinga pake tangan, atau sikap keras kepala yang bener-bener nolak dengerin omelan, kritikan, atau nasihat dari orang lain.',
    contoh1: '親の小言に耳をふさぐ。\n(Tutup kuping buat nolak dengerin omelan orang tua.)',
    contoh2: '都合の悪い真実に耳をふさいではいけない。\n(Kita nggak boleh tutup kuping dari kenyataan yang nggak ngenakin buat kita.)'
  },
  {
    id: 'm8h3_20',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳を貸す',
    furigana: 'みみをかす',
    arti: 'Mau dengerin / Menggubris',
    penjelasan: 'Mau nyediain waktu buat dengerin masalah atau nasihat. Paling sering dipakai pas versi negatif (耳を貸さない) yang artinya "nggak mau dengerin/nggak nggubris sama sekali".',
    contoh1: '彼は私の話に耳を貸してくれなかった。\n(Dia nggak mau minjemin telinganya / nggak nggubris omonganku sama sekali.)',
    contoh2: '何度忠告しても、彼は全く耳を貸そうとしない。\n(Berapa kali pun diperingatin, dia sama sekali nggak ada niat buat dengerin.)'
  },
  {
    id: 'm8h3_21',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '耳について離れない',
    furigana: 'みみについてはなれない',
    arti: 'Terngiang-ngiang / Nyangkut di kepala',
    penjelasan: 'Kalau ada lagu, melodi, iklan, atau ucapan yang terus-terusan berputar di otak dan nggak mau ilang-ilang rasanya.',
    contoh1: 'CMの音楽が耳について離れない。\n(Lagu iklannya terus terngiang-ngiang di kepala dan susah diilangin.)',
    contoh2: '彼のひどい言葉が耳について離れず、泣いてしまった。\n(Kata-katanya yang jahat terus terngiang di telinga sampai bikin aku nangis.)'
  },

  // ===============================
  // BAGIAN 4: HANA (鼻) - HIDUNG
  // ===============================
  {
    id: 'm8h3_22',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '鼻にかける',
    furigana: 'はなにかける',
    arti: 'Menyombongkan / Pamer berlebihan',
    penjelasan: 'Sikap pamer atau show-off soal kelebihan diri sendiri yang biasanya bikin orang lain yang ngelihat jadi males atau ngerasa kurang nyaman.',
    contoh1: '彼女は美人を鼻にかけている。\n(Dia tuh selalu nyombongin kecantikannya.)',
    contoh2: '成績がいいからといって、それを鼻にかけるのはよくない。\n(Mentang-mentang nilaimu bagus, pamer berlebihan kayak gitu nggak baik lho.)'
  },
  {
    id: 'm8h3_23',
    minggu: '8',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '鼻が高い',
    furigana: 'はながたかい',
    arti: 'Merasa bangga',
    penjelasan: 'Perasaan bangga banget (bukan sombong ya) atas prestasi diri sendiri atau orang terdekat (anak/murid). Istilahnya hidungnya sampai "naik/tinggi" saking bangganya.',
    contoh1: '立派な息子を持って鼻が高い。\n(Aku merasa sangat bangga punya anak laki-laki yang hebat.)',
    contoh2: '生徒がコンクールで優勝し、先生も鼻が高い思いをした。\n(Muridnya menang lomba, jadi gurunya pun merasa ikutan bangga banget.)'
  },
  {
    id: 'm8h3_24',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '鼻につく',
    furigana: 'はなにつく',
    arti: 'Muak / Bikin jengkel',
    penjelasan: 'Kondisi pas tingkah atau omongan orang (terutama yang sok pamer) atau bau sesuatu udah sampai tahap bikin kita muak, enek, atau risih banget dengernya.',
    contoh1: '彼女の態度は鼻につく。\n(Sikapnya tuh ngeselin dan bikin muak banget.)',
    contoh2: '彼の自慢話はいつも鼻につく。\n(Aku selalu muak dengerin cerita sombong dia.)'
  },

  // ===============================
  // BAGIAN 5: KUCHI (口) - MULUT
  // ===============================
  {
    id: 'm8h3_25',
    minggu: '8',
    hari: '3',
    kategori: 'kata sifat',
    kanji: '口が重い',
    furigana: 'くちがおもい',
    arti: 'Pendiam / Jarang ngomong',
    penjelasan: 'Sifat orang yang nggak banyak omong, kalem, atau susah diajak ngobrol santai. Kayak mulutnya tuh "berat" banget buat dibuka.',
    contoh1: '彼は口が重い。\n(Dia orangnya pendiam / nggak banyak ngomong.)',
    contoh2: '普段は明るいが、今日はなんだか口が重いね。\n(Biasanya dia ceria, tapi entah kenapa hari ini dia irit banget bicaranya ya.)'
  },
  {
    id: 'm8h3_26',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '口が滑る',
    furigana: 'くちがすべる',
    arti: 'Keceplosan / Nggak sengaja bocor',
    penjelasan: 'Pas mulut kita "terpeleset" dan tanpa sadar malah ngebocorin rahasia atau ngomongin hal yang harusnya nggak boleh diucapin ke orang lain.',
    contoh1: 'つい口が滑った。\n(Tanpa sadar aku keceplosan.)',
    contoh2: 'お酒を飲んで、うっかり口が滑ってしまった。\n(Gara-gara minum alkohol, aku nggak sengaja keceplosan ngomong deh.)'
  },
  {
    id: 'm8h3_27',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '口が肥えている',
    furigana: 'くちがこえている',
    arti: 'Pintar menilai makanan / Selera tinggi (Gourmet)',
    penjelasan: 'Orang yang lidahnya udah biasa dimanjain makanan enak/mewah, jadi dia punya standar selera yang tinggi banget buat nge-judge masakan (bisa dibilang gourmet).',
    contoh1: '彼は口が肥えている。\n(Dia punya selera makan yang tinggi / jago menilai rasa.)',
    contoh2: '高級料理ばかり食べている彼女は、とても口が肥えている。\n(Karena sering makan mewah, lidahnya jadi jago banget menilai makanan berkualitas.)'
  },
  {
    id: 'm8h3_28',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '口を挟む',
    furigana: 'くちをはさむ',
    arti: 'Menyela obrolan / Ikut campur',
    penjelasan: 'Tindakan motong omongan pas orang lain lagi asyik ngobrol, atau ikut campur nimbrung ke obrolan yang bukan urusannya.',
    contoh1: '話に口を挟むな。\n(Jangan nyela omongan orang!)',
    contoh2: '大人の話に子どもが口を挟んではいけません。\n(Anak-anak nggak boleh ikut campur atau nyela pas orang dewasa lagi ngomong.)'
  },

  // ===============================
  // BAGIAN 6: ATAMA (頭) - KEPALA
  // ===============================
  {
    id: 'm8h3_29',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '頭を冷やす',
    furigana: 'あたまをひやす',
    arti: 'Mendinginkan kepala / Menenangkan diri',
    penjelasan: 'Sikap nenangin emosi pas lagi "panas" atau marah besar, biar bisa mikir jernih lagi sebelum ngambil keputusan atau bertindak.',
    contoh1: '頭を冷やして考える。\n(Nenangin diri dan ngademin kepala dulu sebelum mikirin itu lagi.)',
    contoh2: 'カッとなったら、まずは頭を冷やすことが大切だ。\n(Kalau lagi naik pitam/emosi, hal paling penting adalah mendinginkan kepala dulu.)'
  },
  {
    id: 'm8h3_30',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '頭を抱える',
    furigana: 'あたまをかかえる',
    arti: 'Pusing mikirin masalah / Kebingungan',
    penjelasan: 'Gestur megang atau meluk kepala pake dua tangan saking stres, pusing, atau kebingungannya ngadepin masalah yang mentok dan susah dicari solusinya.',
    contoh1: '頭を抱える問題\n(Masalah rumit yang bikin stres sampai bikin megang kepala.)',
    contoh2: '資金不足でプロジェクトが進まず、社長は頭を抱えている。\n(Gara-gara kurang dana proyek mandek, Pak Direktur sampai pusing megang kepala.)'
  },
  {
    id: 'm8h3_31',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '頭が切れる',
    furigana: 'あたまがきれる',
    arti: 'Cerdas tangkas / Otaknya encer',
    penjelasan: 'Sebutan buat orang yang jalan pikirannya cepet banget, kritis, dan jago ngasih solusi. Istilahnya otaknya "encer" dan tajam.',
    contoh1: '彼は頭がよく切れる。\n(Dia tuh otaknya encer banget / cerdas dan tangkas.)',
    contoh2: '頭が切れる彼女のおかげで、トラブルはすぐに解決した。\n(Berkat dirinya yang berotak cerdas/tajam, masalahnya langsung beres.)'
  },
  {
    id: 'm8h3_32',
    minggu: '8',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '頭が下がる',
    furigana: 'あたまがさがる',
    arti: 'Sangat hormat / Salut banget',
    penjelasan: 'Rasa kagum dan salut sedalam-dalamnya atas dedikasi atau kerja keras orang lain, sampai bikin kita secara natural pengen nunduk hormat sama dia.',
    contoh1: '彼の努力には頭が下がる。\n(Aku bener-bener salut dan hormat sedalam-dalamnya sama usaha kerasnya.)',
    contoh2: '雨の日も毎日ボランティアをしている彼女には、本当に頭が下がる思いだ。\n(Aku beneran salut banget sama dia yang rajin jadi relawan tiap hari bahkan pas lagi ujan.)'
  }
];

window.vocabData.push(...kosakata_m8h3);