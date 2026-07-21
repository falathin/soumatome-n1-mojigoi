// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m6h6 = [
  // ==========================================
  // KELOMPOK 1: あたり (辺り / 当たり) - Sekitar / Kena / Perkiraan
  // ==========================================
  {
    id: 'm6h6_1',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'この辺りは民家が多い',
    furigana: 'このあたりはみんかがおおい',
    arti: 'Sekitar sini banyak rumah warga',
    penjelasan: 'Menunjukkan lokasi/area di sekitar tempat tertentu (lingkungan/wilayah sekitar). Sama maknanya dengan 辺 (hen).',
    contoh1: 'この辺りは夜になるととても静かだ。\n(Sekitar sini menjadi sangat sepi kalau malam tiba.)',
    contoh2: '駅の辺りで待ち合わせしましょう。\n(Mari kita janjian bertemu di sekitar stasiun.)',
    contoh3: 'その辺りに鍵を置いたはずなのに、見つからない。\n(Seharusnya aku menaruh kunci di sekitar situ, tapi tidak ketemu.)'
  },
  {
    id: 'm6h6_2',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '今月の末辺りに',
    furigana: 'こんげつのすえあたりに',
    arti: 'Sekitar akhir bulan ini',
    penjelasan: 'Menunjukkan perkiraan waktu kasar ("sekitar/kira-kira"). Mirip penggunaan ごろ (goro).',
    contoh1: '来週の火曜日辺りに一度打ち合わせをしませんか。\n(Bagaimana kalau kita rapat sekali di sekitar hari Selasa minggu depan?)',
    contoh2: '両親は来年の春辺りに引っ越す予定です。\n(Orang tua saya berencana pindah rumah sekitar musim semi tahun depan.)',
    contoh3: '３時辺りになったら、休憩にしましょう。\n(Kalau sudah sekitar jam 3, mari kita istirahat.)'
  },
  {
    id: 'm6h6_3',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '風当たりが強い',
    furigana: 'かぜあたりがつよい',
    arti: 'Anginnya kencang / Mendapat kritikan tajam',
    penjelasan: 'Secara harfiah tiupan angin kuat. Secara kiasan bermakna mendapat kritikan, tekanan sosial, atau penilaian negatif yang tajam.',
    contoh1: 'この家は丘の上にあるので、風当たりが強い。\n(Karena rumah ini ada di atas bukit, terpaan anginnya kuat.)',
    contoh2: '不祥事の後、会社への世間の風当たりが強くなった。\n(Setelah skandal tersebut, kritikan dari masyarakat terhadap perusahaan menjadi sangat tajam.)',
    contoh3: '新人なのに意見ばかり言うと、周囲の風当たりが強くなるよ。\n(Meskipun anak baru, kalau kamu terus-terusan mengutarakan pendapat, tekanan/kritikan dari sekitar akan makin keras lho.)'
  },
  {
    id: 'm6h6_4',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '人当たりがいい',
    furigana: 'ひとあたりがいい',
    arti: 'Ramah / Menyenangkan saat berinteraksi',
    penjelasan: 'Menggambarkan kepribadian yang ramah, bersikap lembut, sopan, dan membuat orang lain nyaman saat berinteraksi.',
    contoh1: '彼女は人当たりがいいので、誰からも好かれている。\n(Karena dia sangat ramah dan menyenangkan, dia disukai oleh siapa saja.)',
    contoh2: '営業職には、人当たりの良さが求められる。\n(Untuk pekerjaan sales, dibutuhkan keramahan dan kemampuan berinteraksi yang baik.)',
    contoh3: 'あの店長は人当たりはいいが、実はとても厳しい人だ。\n(Manajer toko itu memang terlihat ramah saat berinteraksi, tapi sebenarnya dia orang yang sangat tegas.)'
  },
  {
    id: 'm6h6_5',
    minggu: '6',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '当たりをつける',
    furigana: 'あたりをつける',
    arti: 'Membuat perkiraan / Menebak',
    penjelasan: 'Idiom yang bermakna membuat perkiraan kasar, menduga, atau menebak (見当をつける) sebelum dipastikan.',
    contoh1: '犯人の逃走経路に当たりをつける。\n(Membuat perkiraan/tebakan ke mana rute pelarian si pelaku.)',
    contoh2: 'おおよその予算の当たりをつけてから、計画を立てる。\n(Kita buat rencana setelah membuat perkiraan kasar mengenai anggarannya.)',
    contoh3: 'どこに問題があるか、ある程度当たりをつけて調査する。\n(Melakukan penyelidikan setelah menebak/memperkirakan kira-kira letak masalahnya di mana.)'
  },
  {
    id: 'm6h6_6',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'その映画は大当たりだった',
    furigana: 'そのえいがはおおあたりだった',
    arti: 'Film itu sangat sukses / Hit besar',
    penjelasan: 'Bermakna "sukses besar" (大成功) atau meledak di pasaran (untuk film, bisnis, drama, maupun tebakan yang tepat sasaran).',
    contoh1: '彼が開発した新商品は大当たりだった。\n(Produk baru yang dia kembangkan meledak dan sukses besar di pasaran.)',
    contoh2: '今年のドラマはどれも大当たりだ。\n(Drama tahun ini semuanya sukses besar.)',
    contoh3: '予想が大当りして、テストで満点を取れた。\n(Tebakanku tepat sasaran semuanya, sehingga aku bisa dapat nilai sempurna di ujian.)'
  },
  {
    id: 'm6h6_7',
    minggu: '6',
    hari: '6',
    kategori: 'kata kerja',
    kanji: 'くじに当たる',
    furigana: 'くじにあたる',
    arti: 'Menang undian / Lotre',
    penjelasan: 'Memenangkan lotre, undian (当選する), atau mendapat hadiah. Kebalikannya: はずれる (meleset/kalah).',
    contoh1: '宝くじに当たって、家を買うのが夢だ。\n(Mimpiku adalah menang lotre lalu membeli rumah.)',
    contoh2: 'キャンペーンの抽選で旅行が当たった。\n(Saya memenangkan hadiah jalan-jalan dari undian kampanye tersebut.)',
    contoh3: 'アイスの棒で当たりが出た。\n(Saya mendapat tulisan "menang" pada stik es krimnya.)'
  },

  // ==========================================
  // KELOMPOK 2: 筋 (すじ) - Otot / Serat / Alur / Logika
  // ==========================================
  {
    id: 'm6h6_8',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '足の筋を痛める',
    furigana: 'あしのすじをいためる',
    arti: 'Mencederai otot / urat kaki',
    penjelasan: 'Makna harfiah 筋 (suji): bagian anatomi tubuh berupa urat, otot, atau tendon.',
    contoh1: '運動不足のまま急に走って、足の筋を痛めてしまった。\n(Karena kurang olahraga lalu tiba-tiba lari, saya jadi mencederai urat kaki.)',
    contoh2: '首の筋が違って、顔を向けられない。\n(Urat leher saya salah urat, jadi tidak bisa menolehkan wajah.)',
    contoh3: '筋を伸ばすストレッチを行う。\n(Melakukan peregangan untuk melemaskan otot/urat.)'
  },
  {
    id: 'm6h6_9',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '筋の多い肉',
    furigana: 'すじのおおいにく',
    arti: 'Daging yang banyak uratnya (alot)',
    penjelasan: 'Merujuk pada jaringan urat/serat pada daging yang membuatnya terasa keras atau alot saat dikunyah.',
    contoh1: 'この牛肉は筋が多いから、じっくり煮込もう。\n(Karena daging sapi ini banyak uratnya, mari kita rebus perlahan dalam waktu lama.)',
    contoh2: '安い肉は筋があって噛みにくい。\n(Daging yang murah banyak uratnya sehingga sulit dikunyah.)',
    contoh3: '包丁で肉の筋を切っておくと柔らかくなる。\n(Kalau kita memotong urat dagingnya menggunakan pisau terlebih dahulu, dagingnya akan jadi empuk.)'
  },
  {
    id: 'm6h6_10',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '野菜の筋を取る',
    furigana: 'やさいのすじをとる',
    arti: 'Membuang serat sayuran',
    penjelasan: 'Merujuk pada serat tanaman yang keras dan memanjang (seperti pada buncis atau seledri) yang biasa dibuang sebelum dimasak.',
    contoh1: 'いんげんの筋を取ってから茹でてください。\n(Tolong buang serat buncisnya terlebih dahulu sebelum direbus.)',
    contoh2: 'セロリの筋は硬いので、ピーラーで剥く。\n(Karena serat seledri itu keras, kupaslah menggunakan peeler/pengupas.)',
    contoh3: '筋を取り忘れると、食べたときに口に残る。\n(Kalau lupa membuang seratnya, akan tersisa di mulut saat dimakan.)'
  },
  {
    id: 'm6h6_11',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '筋が浮いて見える腕',
    furigana: 'すじがういてみえるうで',
    arti: 'Lengan yang pembuluh darahnya terlihat menonjol',
    penjelasan: 'Merujuk pada pembuluh darah (vena) kebiruan yang menonjol di permukaan kulit.',
    contoh1: '重い荷物を持つと、手の甲に筋が浮き出る。\n(Saat membawa barang berat, pembuluh darah di punggung tangan akan menonjol keluar.)',
    contoh2: '彼は怒りで額に青筋を立てている。\n(Saking marahnya, urat kebiruan di dahinya sampai terlihat menonjol.)',
    contoh3: 'おじいちゃんの手は、筋がはっきりと見える。\n(Tangan kakek terlihat jelas urat-urat pembuluh darahnya.)'
  },
  {
    id: 'm6h6_12',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '筋がいい',
    furigana: 'すじがいい',
    arti: 'Bakat / Potensinya bagus',
    penjelasan: 'Kiasan untuk bakat alami atau potensi dasar (素質). "筋がいい" artinya cepat menangkap pelajaran dan berbakat.',
    contoh1: '初めてギターを弾いたのに、彼はとても筋がいい。\n(Meskipun baru pertama kali main gitar, dia punya bakat yang sangat bagus.)',
    contoh2: 'コーチから「筋がいいから上達が早い」と褒められた。\n(Saya dipuji oleh pelatih, "Bakatmu bagus makanya cepat mahir".)',
    contoh3: 'あの子はピアノの筋が悪いわけではないが、練習が足りない。\n(Anak itu bukan berarti tidak punya bakat piano, hanya saja latihannya yang kurang.)'
  },
  {
    id: 'm6h6_13',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '筋の通った話',
    furigana: 'すじのとったはなし',
    arti: 'Cerita/Alasan yang masuk akal (logis)',
    penjelasan: 'Merujuk pada alur logika/jalan pikiran. "筋が通っている" berarti argumen/alasan runtut, masuk akal, dan rasional.',
    contoh1: '彼の説明は筋が通っていて、非常に説得力があった。\n(Penjelasannya sangat logis/masuk akal, sehingga sangat persuasif.)',
    contoh2: '筋の通らない言い訳は聞きたくない。\n(Saya tidak mau mendengar alasan yang tidak masuk akal/mengada-ada.)',
    contoh3: '主張に筋が通っていれば、みんな賛成してくれるはずだ。\n(Jika argumenmu runtut dan logis, semua orang pasti akan setuju.)'
  },
  {
    id: 'm6h6_14',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '物語の筋',
    furigana: 'ものがたりのすじ',
    arti: 'Alur cerita / Plot',
    penjelasan: 'Bermakna alur cerita, plot, atau garis besar cerita (あらすじ) dalam buku, film, atau teater.',
    contoh1: '映画を見る前に物語の筋を読んでしまった。\n(Saya sudah membaca alur/plot ceritanya sebelum menonton filmnya.)',
    contoh2: 'この小説は筋が複雑で、最後まで展開が読めない。\n(Novel ini alur ceritanya sangat rumit, perkembangannya tidak bisa ditebak sampai akhir.)',
    contoh3: '大まかな筋だけ説明してください。\n(Tolong jelaskan garis besar alur ceritanya saja.)'
  },

  // ==========================================
  // KELOMPOK 3: 先 (さき) - Ujung / Depan / Kelanjutan / Masa Depan
  // ==========================================
  {
    id: 'm6h6_15',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '指の先に止まる',
    furigana: 'ゆびのさきにとまる',
    arti: 'Hinggap di ujung jari',
    penjelasan: 'Makna fisik dari 先 (saki): bagian ujung, pucuk, atau titik paling depan dari benda memanjang.',
    contoh1: '鉛筆の先が丸くなったので、削ろう。\n(Karena ujung pensilnya sudah tumpul/bulat, mari kita raut.)',
    contoh2: '針の先のような小さな穴が開いている。\n(Ada lubang kecil terbuka sebesar ujung jarum.)',
    contoh3: 'トンボが鼻の先に止まって、くすぐったい。\n(Capung hinggap di ujung hidung saya, rasanya geli.)'
  },
  {
    id: 'm6h6_16',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '目的地を目指して先へ進む',
    furigana: 'もくてきちをめざしてさきへすすむ',
    arti: 'Maju ke depan menuju tempat tujuan',
    penjelasan: 'Dalam konteks arah/posisi, berarti "bagian depan" (前). Maju ke depan menjauhi posisi awal.',
    contoh1: '道が険しいが、もう少し先へ進んでみよう。\n(Jalannya memang terjal, tapi mari kita coba maju sedikit lebih jauh ke depan.)',
    contoh2: 'この列の先には何があるんですか。\n(Di bagian depan antrean ini ada apa ya?)',
    contoh3: '前の車を追い越して、先を急いだ。\n(Menyusul mobil di depan dan bergegas melaju ke depan.)'
  },
  {
    id: 'm6h6_17',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '話の先を聞かせてください',
    furigana: 'はなしのさきをきかせてください',
    arti: 'Tolong ceritakan kelanjutan ceritanya',
    penjelasan: 'Dalam narasi/proses yang terputus, bermakna "kelanjutan" (続き) atau bagian selanjutnya.',
    contoh1: '昨日のドラマ、先が気になって眠れなかった。\n(Drama kemarin, aku penasaran dengan kelanjutannya sampai tidak bisa tidur.)',
    contoh2: '会議の時間が来たので、この話の先はまた明日。\n(Karena sudah waktunya rapat, kelanjutan pembicaraan ini kita sambung besok.)',
    contoh3: 'その事件の先がどうなったのか、誰も知らない。\n(Tidak ada yang tahu bagaimana kelanjutan nasib dari insiden tersebut.)'
  },
  {
    id: 'm6h6_18',
    minggu: '6',
    hari: '6',
    kategori: 'kata keterangan',
    kanji: '先にお知らせしたとおり',
    furigana: 'さきにおしらせしたとおり',
    arti: 'Seperti yang telah diberitahukan sebelumnya',
    penjelasan: 'Keterangan waktu untuk masa lalu yang berdekatan ("sebelumnya" / 以前) atau sesuatu yang terjadi lebih dulu.',
    contoh1: '先日（＝先）お会いしたときにお話ししましたが……\n(Seperti yang telah saya bicarakan saat kita bertemu sebelumnya...)',
    contoh2: '先に述べた理由により、この計画は中止します。\n(Berdasarkan alasan yang telah dijabarkan sebelumnya, rencana ini akan dibatalkan.)',
    contoh3: '彼には先にメールで伝えてあります。\n(Saya sudah menyampaikannya kepadanya lewat email lebih dulu/sebelumnya.)'
  },
  {
    id: 'm6h6_19',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '先のことはわからない',
    furigana: 'さきのことはわからない',
    arti: 'Tidak ada yang tahu soal masa depan',
    penjelasan: 'Dalam konteks "melihat ke depan", bermakna masa depan (将来) atau hal yang akan terjadi nanti.',
    contoh1: '５年先、自分が何をしているか想像もつかない。\n(Saya sama sekali tidak bisa membayangkan apa yang akan saya lakukan di masa depan 5 tahun lagi.)',
    contoh2: '少し先の未来を予測してビジネスを行う。\n(Menjalankan bisnis dengan memprediksi masa depan yang sedikit ke depan.)',
    contoh3: '先の見えない不況に、人々は不安を感じている。\n(Orang-orang merasa cemas menghadapi resesi ekonomi yang tidak terlihat ujung/masa depannya.)'
  },
  {
    id: 'm6h6_20',
    minggu: '6',
    hari: '6',
    kategori: 'kata keterangan',
    kanji: '食事代を先に払う',
    furigana: 'しょくじだいをつぎにはらう',
    arti: 'Membayar uang makan di awal (lebih dulu)',
    penjelasan: 'Berarti mendahului orang lain atau melakukan suatu tindakan lebih awal dari tindakan lainnya.',
    contoh1: 'お風呂に先に入っていいよ。\n(Kamu boleh mandi duluan/lebih dulu lho.)',
    contoh2: 'ごめん、用事があるから先に帰るね。\n(Maaf, karena ada urusan aku pulang duluan ya.)',
    contoh3: 'チケットは先に買っておかないと売り切れるよ。\n(Kalau tiketnya tidak dibeli lebih dulu dari sekarang, nanti keburu habis terjual lho.)'
  },
  {
    id: 'm6h6_21',
    minggu: '6',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '先を争って電車から降りる',
    furigana: 'さきをあらそってでんしゃからおりる',
    arti: 'Berebut keluar dari kereta lebih dulu',
    penjelasan: 'Idiom "先を争う" bermakna berlomba-lomba atau saling berdesakan untuk menjadi yang pertama mendahului pihak lain.',
    contoh1: 'バーゲンセールで、客が先を争って商品を取った。\n(Di acara obral, para pelanggan berebut mendahului untuk mengambil barang.)',
    contoh2: '火事が起きると、人々は先を争って逃げ出した。\n(Ketika kebakaran terjadi, orang-orang berebut mendahului untuk melarikan diri.)',
    contoh3: '特ダネを得ようと、記者たちが先を争って現場に向かった。\n(Demi mendapatkan berita eksklusif, para jurnalis berlomba-lomba mendahului menuju ke lokasi kejadian.)'
  },
  {
    id: 'm6h6_22',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '行き先 / 取引先',
    furigana: 'いきさき / とりひきさき',
    arti: 'Tempat tujuan / Rekan bisnis',
    penjelasan: 'Akhiran "-saki" menunjukkan "lokasi tujuan" atau "pihak penerima". Contoh: 行き先 (tujuan pergi), 取引先 (klien bisnis).',
    contoh1: '旅行の行き先をまだ決めていない。\n(Saya belum menentukan tempat tujuan untuk liburannya.)',
    contoh2: '明日は取引先への挨拶回りがある。\n(Besok ada jadwal keliling menyapa klien/rekan bisnis.)',
    contoh3: '書類の送り先はこちらの住所でお願いします。\n(Untuk tujuan pengiriman dokumen, tolong kirim ke alamat ini.)'
  },

  // ==========================================
  // KELOMPOK 4: 道 (みち) - Jalan / Proses / Bidang
  // ==========================================
  {
    id: 'm6h6_23',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '分かれ道を右に行く',
    furigana: 'わかれみちをみぎにいく',
    arti: 'Pergi ke kanan di jalan persimpangan',
    penjelasan: 'Makna harfiah 道 (michi): jalan fisik yang dilalui kendaraan atau orang berjalan kaki.',
    contoh1: 'この道は狭くて車がすれ違えない。\n(Jalan ini sempit sehingga dua mobil tidak bisa berpapasan.)',
    contoh2: '知らない道を歩いて迷子になった。\n(Saya tersesat karena berjalan di jalan yang tidak saya kenal.)',
    contoh3: '山道を登ると美しい景色が見える。\n(Jika mendaki jalan pegunungan, kita bisa melihat pemandangan yang indah.)'
  },
  {
    id: 'm6h6_24',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '合格への道は険しい',
    furigana: 'ごうかくへのみちはけわしい',
    arti: 'Jalan menuju kelulusan itu terjal/sulit',
    penjelasan: 'Kiasan untuk proses perjuangan, perjalanan hidup, atau cara yang ditempuh demi mencapai tujuan.',
    contoh1: 'プロのサッカー選手になる道は甘くない。\n(Jalan untuk menjadi pemain sepak bola profesional itu tidaklah mudah.)',
    contoh2: '彼とは違う道を歩むことになった。\n(Saya akhirnya menempuh jalan hidup yang berbeda dengannya.)',
    contoh3: '平和への道を探るための対話が続く。\n(Dialog terus berlanjut demi mencari jalan menuju kedamaian.)'
  },
  {
    id: 'm6h6_25',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'お金の使い道',
    furigana: 'おかねのつかいみち',
    arti: 'Cara penggunaan uang',
    penjelasan: 'Sebagai akhiran "-michi", bermakna "kegunaan" atau "cara pemanfaatan". Contoh: 使い道 (fungsi/cara pakai), 逃げ道 (jalan keluar/pelarian).',
    contoh1: 'ボーナスが出たが、使い道はまだ決めていない。\n(Bonus sudah cair, tapi cara/tujuan penggunaannya belum saya putuskan.)',
    contoh2: 'この古い道具の使い道がわからない。\n(Saya tidak tahu apa kegunaan dari perkakas tua ini.)',
    contoh3: '彼を説得するための逃げ道を用意しておく。\n(Mempersiapkan jalan keluar/alternatif untuk meyakinkan dia.)'
  },
  {
    id: 'm6h6_26',
    minggu: '6',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '人の道に外れる',
    furigana: 'ひとのみちにはずれる',
    arti: 'Menyimpang dari jalan kemanusiaan (norma moral)',
    penjelasan: 'Di sini 道 bermakna moralitas/norma (道徳). "人の道に外れる" berarti menyimpang dari hati nurani dan nilai kemanusiaan.',
    contoh1: '友人を裏切るなんて、人の道に外れた行為だ。\n(Mengkhianati teman adalah tindakan yang menyimpang dari moral kemanusiaan.)',
    contoh2: 'いくらお金のためでも、人の道に外れることはできない。\n(Meskipun demi uang, saya tidak bisa melakukan perbuatan yang menyimpang dari nurani manusia.)',
    contoh3: '彼は人の道を踏み外して犯罪者になった。\n(Dia melangkah melenceng dari jalan kebenaran lalu menjadi penjahat.)'
  },
  {
    id: 'm6h6_27',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'その道の権威だ',
    furigana: 'そのみちのけんいだ',
    arti: 'Pakar di bidang tersebut',
    penjelasan: 'Kata "その道" (sono michi) bermakna spesialisasi keahlian atau bidang ilmu/profesi tertentu (分野).',
    contoh1: '彼はAI研究において、その道の権威として知られている。\n(Di bidang penelitian AI, dia dikenal sebagai pakar di bidang tersebut.)',
    contoh2: '素人が口出しするより、その道のプロに任せた方がいい。\n(Daripada orang awam ikut campur, lebih baik serahkan pada profesional di bidangnya.)',
    contoh3: 'その道を究めるには何十年もかかる。\n(Butuh puluhan tahun untuk bisa menguasai bidang keahlian tersebut secara paripurna.)'
  },

  // ==========================================
  // KELOMPOK 5: 種 (たね) - Biji / Bahan / Topik / Trik
  // ==========================================
  {
    id: 'm6h6_28',
    minggu: '6',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '種をまく',
    furigana: 'たねをまく',
    arti: 'Menabur benih / biji',
    penjelasan: 'Makna harfiah 種 (tane): benih atau biji tanaman yang ditanam di dalam tanah.',
    contoh1: '春になったら、庭に花の種をまく。\n(Kalau musim semi tiba, saya akan menabur benih bunga di taman.)',
    contoh2: 'スイカの種を取り除いて食べる。\n(Memakan semangka setelah membuang biji-bijinya.)',
    contoh3: 'まいた種はいつか芽を出す。\n(Benih yang telah ditabur suatu saat pasti akan bertunas.)'
  },
  {
    id: 'm6h6_29',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: 'すしの種',
    furigana: 'すしのたね',
    arti: 'Bahan pembuat sushi',
    penjelasan: 'Istilah kuliner (terutama sushi) untuk bahan mentah/lauk di atas nasi (材料). Sering diucapkan terbalik sebagai "ネタ" (neta).',
    contoh1: '新鮮なすしの種を市場で仕入れる。\n(Membeli bahan baku sushi yang segar di pasar.)',
    contoh2: 'マグロはすしの種の中で一番人気だ。\n(Ikan tuna adalah lauk/bahan sushi yang paling populer.)',
    contoh3: '今日の種はどれも脂が乗っていておいしい。\n(Bahan-bahan sushi hari ini semuanya berlemak gurih dan lezat.)'
  },
  {
    id: 'm6h6_30',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '悩みの種',
    furigana: 'なやみのたね',
    arti: 'Sumber/Pangkal permasalahan',
    penjelasan: 'Kiasan untuk asal-muasal/sumber masalah (根源). "悩みの種" berarti hal yang terus-menerus memicu pusing/khawatir.',
    contoh1: '反抗期の息子は、親にとって最大の悩みの種だ。\n(Anak laki-laki yang sedang masa pemberontakan adalah sumber masalah/pusing terbesar bagi orang tua.)',
    contoh2: '資金不足がプロジェクトの悩みの種になっている。\n(Kekurangan dana telah menjadi pangkal masalah bagi proyek ini.)',
    contoh3: '争いの種は早めに摘んでおくべきだ。\n(Bibit-bibit pertengkaran sebaiknya dipetik/dibuang secepatnya.)'
  },
  {
    id: 'm6h6_31',
    minggu: '6',
    hari: '6',
    kategori: 'kata benda',
    kanji: '話の種',
    furigana: 'はなしのたね',
    arti: 'Topik / Bahan pembicaraan',
    penjelasan: 'Bermakna topik atau pokok bahasan percakapan (話題) agar obrolan terus bergulir. Mirip istilah "ネタ".',
    contoh1: '久しぶりに会ったので、話の種が尽きない。\n(Karena baru bertemu setelah sekian lama, topik pembicaraan kami tidak ada habisnya.)',
    contoh2: '面白いニュースを見つけたので、明日の話の種にしよう。\n(Saya menemukan berita menarik, mari jadikan bahan obrolan untuk besok.)',
    contoh3: '話の種として、地元の名物を持ってきた。\n(Sebagai pemancing topik obrolan, saya membawakan makanan khas daerah saya.)'
  },
  {
    id: 'm6h6_32',
    minggu: '6',
    hari: '6',
    kategori: 'kata kerja',
    kanji: '手品の種を明かす',
    furigana: 'てじなのたねをあかす',
    arti: 'Membongkar trik sulap',
    penjelasan: 'Dalam dunia sulap, 種 merujuk pada rahasia atau trik tersembunyi (仕掛け). "種を明かす" = membongkar trik sulap.',
    contoh1: 'マジシャンが手品の種を明かしてくれた。\n(Pesulap itu membongkar rahasia trik sulapnya kepada kami.)',
    contoh2: 'どんな手品にも必ず種がある。\n(Sulap seperti apa pun pasti memiliki trik rahasia.)',
    contoh3: '種がわかってしまえば、なーんだと思うような簡単な仕掛けだった。\n(Begitu triknya ketahuan, ternyata itu hanya rekayasa simpel yang bikin kita membatin, "Oh, cuma begitu toh".)'
  }
];

window.vocabData.push(...kosakata_m6h6);