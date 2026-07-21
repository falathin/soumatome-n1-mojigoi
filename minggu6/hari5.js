// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m6h5 = [
  // ==========================================
  // KELOMPOK 1: 強い (つよい) - Kuat / Tahan / Mahir / Tegas
  // ==========================================
  {
    id: 'm6h5_1',
    minggu: '6',
    hari: '5',
    kategori: 'kata sifat',
    kanji: 'ひもを強く結ぶ',
    furigana: 'ひもをつよくむすぶ',
    arti: 'Mengikat tali dengan kuat / erat',
    penjelasan: 'Menggunakan tenaga ekstra saat melakukan tindakan fisik (mengikat, memegang, menutup) agar kencang dan tidak mudah lepas. Antonim: ゆるく (longgar).',
    contoh1: '荷物が落ちないように、ひもを強く結ぶ。\n(Mengikat tali dengan kuat agar barang bawaan tidak jatuh.)',
    contoh2: '彼の手を強く握った。\n(Saya menggenggam tangannya dengan kuat.)',
    contoh3: 'ドアを強く閉めないでください。\n(Tolong jangan menutup pintu dengan keras/kuat.)'
  },
  {
    id: 'm6h5_2',
    minggu: '6',
    hari: '5',
    kategori: 'kata sifat',
    kanji: '寒さに強い木',
    furigana: 'さむさにつよいき',
    arti: 'Pohon yang tahan terhadap dingin',
    penjelasan: 'Pola "~に強い" berarti punya daya tahan tinggi/kebal terhadap kondisi ekstrem dari luar (cuaca, penyakit, stres, alkohol).',
    contoh1: 'この木は寒さに強いので、冬でも枯れない。\n(Pohon ini tahan terhadap cuaca dingin, jadi tidak akan layu meskipun di musim dingin.)',
    contoh2: '私はお酒に強いほうだ。\n(Saya termasuk orang yang kuat/tahan minum alkohol.)',
    contoh3: 'ストレスに強い心を持ちたい。\n(Saya ingin memiliki mental yang tahan terhadap stres.)'
  },
  {
    id: 'm6h5_3',
    minggu: '6',
    hari: '5',
    kategori: 'kata sifat',
    kanji: '意志が強い',
    furigana: 'いしがつよい',
    arti: 'Kemauan / Tekad yang kuat',
    penjelasan: 'Menggambarkan keteguhan mental atau tekad seseorang yang pantang menyerah dan tidak mudah terpengaruh. Antonim: 意志が弱い.',
    contoh1: '彼は意志が強いから、必ず目標を達成するだろう。\n(Karena dia memiliki tekad yang kuat, dia pasti akan mencapai tujuannya.)',
    contoh2: 'ダイエットを続けるには強い意志が必要だ。\n(Dibutuhkan tekad yang kuat untuk terus melanjutkan diet.)',
    contoh3: '彼女の強い信念には感心する。\n(Saya kagum dengan keyakinannya yang teguh/kuat.)'
  },
  {
    id: 'm6h5_4',
    minggu: '6',
    hari: '5',
    kategori: 'kata sifat',
    kanji: '機械に強い',
    furigana: 'きかいにつよい',
    arti: 'Mahir / Paham tentang mesin',
    penjelasan: 'Pola "~に強い" dalam bidang keahlian (mesin, angka, bahasa) berarti sangat paham, jago, atau berpengalaman (詳しい). Kebalikannya: "~に弱い".',
    contoh1: '兄は機械に強いので、パソコンの修理を頼んだ。\n(Karena kakak laki-laki saya mahir soal mesin/elektronik, saya memintanya memperbaiki komputer.)',
    contoh2: '彼女は数字に強いので、経理に向いている。\n(Dia pintar/mahir dengan angka, sehingga cocok bekerja di bagian akuntansi.)',
    contoh3: '私は語学に強いほうではありません。\n(Saya tidak terlalu berbakat/kuat di bidang bahasa asing.)'
  },
  {
    id: 'm6h5_5',
    minggu: '6',
    hari: '5',
    kategori: 'kata sifat',
    kanji: '気が強い',
    furigana: 'きがつよい',
    arti: 'Berwatak keras / Tidak mau mengalah',
    penjelasan: 'Ungkapan untuk karakter seseorang yang dominan, bernyali, tegas, dan tidak suka mengalah atau tunduk pada orang lain.',
    contoh1: '彼女は気が強いから、誰とでもケンカしてしまう。\n(Karena wataknya keras/tidak mau mengalah, dia jadi sering bertengkar dengan siapa saja.)',
    contoh2: '気が強い女性に惹かれる男性も多い。\n(Banyak juga pria yang tertarik pada wanita berkarakter tegas/kuat.)',
    contoh3: '負けず嫌いで気が強い性格だ。\n(Dia punya kepribadian yang pantang menyerah dan berwatak keras.)'
  },
  {
    id: 'm6h5_6',
    minggu: '6',
    hari: '5',
    kategori: 'kata sifat',
    kanji: '日差しが強い',
    furigana: 'ひざしがつよい',
    arti: 'Sinar matahari yang terik',
    penjelasan: 'Digunakan saat fenomena alam atau pancaran (sinar matahari, angin, lampu) memiliki intensitas yang sangat terik, kencang, atau silau.',
    contoh1: '今日は日差しが強いので、帽子をかぶったほうがいい。\n(Karena sinar matahari hari ini sangat terik, sebaiknya kamu memakai topi.)',
    contoh2: '風が強くなってきたから、窓を閉めて。\n(Anginnya mulai mengencang/kuat, tolong tutup jendelanya.)',
    contoh3: 'この部屋は照明が強すぎる。\n(Pencahayaan di ruangan ini terlalu kuat/silau.)'
  },
  {
    id: 'm6h5_7',
    minggu: '6',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '強く注意する',
    furigana: 'つよくちゅういする',
    arti: 'Memperingatkan dengan tegas / keras',
    penjelasan: 'Keterangan "強く" sebelum kata kerja komunikasi (menasihati, memprotes, memperingatkan) berarti melakukannya secara tegas tanpa kompromi (厳しく).',
    contoh1: '遅刻した学生に強く注意した。\n(Saya memperingatkan dengan keras mahasiswa yang datang terlambat itu.)',
    contoh2: '政府は不祥事に対して強く抗議した。\n(Pemerintah memprotes dengan keras terhadap skandal tersebut.)',
    contoh3: '彼にタバコをやめるよう強く勧めた。\n(Saya menyarankannya dengan sangat tegas agar berhenti merokok.)'
  },

  // ==========================================
  // KELOMPOK 2: ばか (馬鹿) - Bodoh / Remeh / Aus(Baut) / Luar Biasa
  // ==========================================
  {
    id: 'm6h5_8',
    minggu: '6',
    hari: '5',
    kategori: 'kata sifat',
    kanji: 'ばかなことをする',
    furigana: 'ばかなことをする',
    arti: 'Melakukan hal yang bodoh',
    penjelasan: 'Makna dasar dari kata sifat-na "ばかな": merujuk pada tindakan, pikiran, atau perkataan yang konyol, bodoh, dan tidak masuk akal.',
    contoh1: '酔ってばかなことをしてしまった。\n(Karena mabuk, saya telah melakukan hal yang bodoh.)',
    contoh2: 'そんなばかな話は信じられない。\n(Cerita konyol/bodoh seperti itu tidak bisa saya percayai.)',
    contoh3: 'ばかなミスで試験に落ちた。\n(Saya gagal ujian karena kesalahan yang bodoh.)'
  },
  {
    id: 'm6h5_9',
    minggu: '6',
    hari: '5',
    kategori: 'kata kerja',
    kanji: 'ばかにされる',
    furigana: 'ばかにされる',
    arti: 'Diremehkan / Diolok-olok',
    penjelasan: 'Bentuk pasif dari "ばかにする" (meremehkan/menghina). Bermakna dipandang rendah atau diejek oleh orang lain.',
    contoh1: '失敗して友人にばかにされた。\n(Karena gagal, saya diolok-olok/diremehkan oleh teman-teman.)',
    contoh2: '人をばかにしたような態度をとるな。\n(Jangan bertingkah seolah-olah meremehkan orang lain.)',
    contoh3: '初心者だと思ってばかにしないでほしい。\n(Saya harap Anda tidak meremehkan saya hanya karena saya pemula.)'
  },
  {
    id: 'm6h5_10',
    minggu: '6',
    hari: '5',
    kategori: 'kata sifat',
    kanji: 'ばかにならない',
    furigana: 'ばかにならない',
    arti: 'Tidak bisa diremehkan / Jumlahnya lumayan besar',
    penjelasan: 'Idiom untuk hal kecil (biaya, waktu, atau usaha) yang jika dikumpulkan ternyata dampaknya atau jumlahnya sangat besar.',
    contoh1: '毎日のコーヒー代もばかにならない。\n(Uang kopi setiap hari pun jumlahnya tidak bisa diremehkan [kalau ditotal pasti besar].)',
    contoh2: '遠距離通勤の交通費はばかにならない。\n(Biaya transportasi untuk komuter jarak jauh tidak bisa dipandang sebelah mata.)',
    contoh3: 'ちりも積もれば山となるで、少額の貯金もばかにならない。\n(Sedikit demi sedikit lama-lama menjadi bukit, tabungan dalam jumlah kecil pun tak bisa diremehkan.)'
  },
  {
    id: 'm6h5_11',
    minggu: '6',
    hari: '5',
    kategori: 'kata kerja',
    kanji: 'ばかを見る',
    furigana: 'ばかをみる',
    arti: 'Mendapat kerugian / Sial',
    penjelasan: 'Ungkapan ketika seseorang mengalami nasib sial, rugi, atau usahanya sia-sia (misal: sudah berbuat baik/jujur tapi malah kena getahnya).',
    contoh1: '正直者がばかを見るような社会であってはいけない。\n(Tidak boleh ada masyarakat di mana orang yang jujur justru yang mendapat kerugian/sial.)',
    contoh2: '彼を信じて手伝ったのに、自分だけがばかを見た。\n(Padahal saya mempercayai dan membantunya, tapi malah hanya saya yang terkena getahnya/rugi.)',
    contoh3: 'ルールを守らない人のせいで、守っている人がばかを見る。\n(Gara-gara orang yang tidak patuh aturan, orang yang patuh justru yang menderita kerugian.)'
  },
  {
    id: 'm6h5_12',
    minggu: '6',
    hari: '5',
    kategori: 'kata kerja',
    kanji: 'ねじがばかになる',
    furigana: 'ねじがばかになる',
    arti: 'Sekrupnya selek / aus / dol',
    penjelasan: 'Istilah mekanik ketika ulir sekrup atau baut sudah rusak/aus, sehingga berputar-putar saja dan tidak bisa mengunci.',
    contoh1: '強く回しすぎて、ねじがばかになってしまった。\n(Karena diputar terlalu kuat, sekrupnya jadi selek/dol.)',
    contoh2: 'この穴はばかになっていて、ねじが止まらない。\n(Lubang ini sudah aus, sekrupnya tidak mau tertahan/mengunci.)',
    contoh3: 'ばかになったねじを外すのは大変だ。\n(Melepas sekrup yang sudah dol itu sangat merepotkan.)'
  },
  {
    id: 'm6h5_13',
    minggu: '6',
    hari: '5',
    kategori: 'kata keterangan',
    kanji: 'ばかに寒い',
    furigana: 'ばかにさむい',
    arti: 'Luar biasa dinginnya',
    penjelasan: 'Sebagai kata keterangan, "ばかに" berarti "sangat" atau "luar biasa" (melebihi batas wajar). Mirip dengan 非常に.',
    contoh1: '今日はばかに（＝非常に）寒いですね。\n(Hari ini luar biasa dingin ya.)',
    contoh2: 'あの車はばかにスピードが出ている。\n(Mobil itu melaju dengan kecepatan yang tidak wajar/sangat kencang.)',
    contoh3: '彼は今日、ばかに機嫌がいい。\n(Entah kenapa, hari ini suasana hatinya luar biasa bagus.)'
  },
  {
    id: 'm6h5_14',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '親ばか / 専門ばか',
    furigana: 'おやばか / せんもんばか',
    arti: 'Sangat memanjakan anak / Pintar teori buta hal lain',
    penjelasan: 'Akhiran "~ばか" menunjukkan obsesi berlebih. Contoh: 親ばか (ortu yang buta keburukan anak), 専門ばか (jago di bidangnya tapi tidak tahu pengetahuan umum lain), ばか力 (tenaga raksasa).',
    contoh1: '彼の親ばかぶりには呆れてしまう。\n(Saya dibuat tercengang melihat betapa dia memanjakan anaknya.)',
    contoh2: '専門ばかにならないよう、幅広い教養を身につけなさい。\n(Belajarlah wawasan yang luas agar tidak menjadi "orang yang cuma pintar di jurusannya saja".)',
    contoh3: '火事場のばか力で、重いタンスを一人で運んだ。\n(Dengan kekuatan luar biasa saat keadaan darurat, saya memindahkan lemari berat itu sendirian.)'
  },

  // ==========================================
  // KELOMPOK 3: あと (後 / 跡) - Belakang / Sisa / Nanti / Jejak
  // ==========================================
  {
    id: 'm6h5_15',
    minggu: '6',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '故郷を後にする',
    furigana: 'こきょうをあとにする',
    arti: 'Meninggalkan kampung halaman',
    penjelasan: 'Ungkapan puitis/sastra yang berarti "meninggalkan suatu tempat" untuk berangkat ke tempat lain.',
    contoh1: '夢を叶えるため、彼は故郷を後にした。\n(Demi meraih mimpinya, dia meninggalkan kampung halamannya.)',
    contoh2: '拍手に見送られながら、会場を後にした。\n(Diiringi tepuk tangan, dia meninggalkan aula tersebut.)',
    contoh3: '思い出の詰まった家を後にするのは寂しかった。\n(Meninggalkan rumah yang penuh kenangan ini terasa sangat sepi dan menyedihkan.)'
  },
  {
    id: 'm6h5_16',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '彼の後をつける',
    furigana: 'かれのあとをつける',
    arti: 'Membuntuti / Mengekori dari belakang',
    penjelasan: 'Frasa "後をつける" berarti mengekori atau membuntuti seseorang dari posisi belakangnya secara diam-diam.',
    contoh1: '怪しい男が私の後をつけてきた。\n(Seorang pria mencurigakan telah membuntuti saya dari belakang.)',
    contoh2: '犬がご主人の後をついて歩く。\n(Anjing itu berjalan mengekori majikannya.)',
    contoh3: '前の車の後をついて行けば目的地に着く。\n(Kalau kita mengikuti mobil yang di depan dari belakang, kita akan sampai di tujuan.)'
  },
  {
    id: 'm6h5_17',
    minggu: '6',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '面倒なことを後に回す',
    furigana: 'めんどうなことをあとにまわす',
    arti: 'Menunda hal yang merepotkan ke lain waktu',
    penjelasan: 'Frasa "後に回す" berarti mengakhirkan urutan pengerjaan tugas atau menundanya untuk dikerjakan nanti.',
    contoh1: '宿題を後に回して、先にゲームをしてしまった。\n(Saya menunda pekerjaan rumah dan malah bermain game duluan.)',
    contoh2: '嫌な仕事はついつい後に回しがちだ。\n(Pekerjaan yang tidak disukai biasanya tanpa sadar cenderung ditunda-tunda.)',
    contoh3: '議論が紛糾したので、この問題は後に回しましょう。\n(Karena perdebatan semakin ricuh, mari kita tunda masalah ini untuk dibahas belakangan.)'
  },
  {
    id: 'm6h5_18',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '後が心配だ',
    furigana: 'あとがしんぱいだ',
    arti: 'Khawatir akan kelanjutannya / masa depannya',
    penjelasan: 'Kata "後" di sini merujuk pada kelanjutan peristiwa, nasib, atau kejadian yang akan datang setelah saat ini.',
    contoh1: '希望の会社に入社はできたが、後が心配だ。\n(Saya memang berhasil masuk ke perusahaan impian, tapi saya khawatir dengan masa depan/perjalanan karir selanjutnya.)',
    contoh2: '彼が辞めた後、誰がリーダーをやるのか心配だ。\n(Setelah dia berhenti nanti, saya khawatir siapa yang akan menjadi pemimpin.)',
    contoh3: '今はいいけれど、後で問題になるかもしれない。\n(Sekarang sih tidak apa-apa, tapi mungkin nanti kelanjutannya akan jadi masalah.)'
  },
  {
    id: 'm6h5_19',
    minggu: '6',
    hari: '5',
    kategori: 'kata keterangan',
    kanji: 'あと５分で始まる',
    furigana: 'あとごふんではじまる',
    arti: 'Mulai dalam sisa 5 menit lagi',
    penjelasan: 'Menunjukkan "sisa waktu" atau "sisa jumlah" sebelum sesuatu dimulai, selesai, atau tercapai.',
    contoh1: '映画はあと５分で始まります。\n(Filmnya akan mulai 5 menit lagi.)',
    contoh2: '目的地まであと少しだ、頑張ろう。\n(Tinggal sedikit lagi sampai tujuan, ayo semangat.)',
    contoh3: '給料日まであと１０日もある。\n(Masih ada sisa 10 hari lagi sampai hari gajian.)'
  },
  {
    id: 'm6h5_20',
    minggu: '6',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '事故が後を絶たない',
    furigana: 'じこがあとをたたない',
    arti: 'Kecelakaan tidak putus-putusnya terjadi',
    penjelasan: 'Idiom "後を絶たない" bermakna fenomena buruk (kecelakaan, penipuan, kejahatan) terus-menerus terjadi tanpa henti.',
    contoh1: 'この交差点では交通事故が後を絶たない。\n(Di persimpangan ini, kecelakaan lalu lintas tidak pernah berhenti terjadi.)',
    contoh2: 'ネット上の詐欺被害が後を絶たない。\n(Korban penipuan di internet tidak ada putus-putusnya bermunculan.)',
    contoh3: '注意喚起しているにもかかわらず、ルール違反が後を絶たない。\n(Meski sudah diberi peringatan, pelanggaran aturan terus saja berdatangan/terjadi.)'
  },
  {
    id: 'm6h5_21',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '社長の後を継ぐ',
    furigana: 'しゃちょうのあとをつぐ',
    arti: 'Mewarisi / Melanjutkan posisi Presiden Direktur',
    penjelasan: 'Frasa "後を継ぐ" berarti meneruskan atau mengambil alih posisi, peran, maupun bisnis dari pendahulu.',
    contoh1: '長男が父の後を継いで社長になった。\n(Anak laki-laki tertua meneruskan posisi ayahnya dan menjadi direktur utama.)',
    contoh2: '伝統芸能の家元の後を継ぐための修行をする。\n(Berlatih keras demi mewarisi posisi kepala sekolah seni tradisional tersebut.)',
    contoh3: '先輩の後を継いで、このプロジェクトを成功させます。\n(Saya akan meneruskan jejak senior dan mensukseskan proyek ini.)'
  },
  {
    id: 'm6h5_22',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '後は来月払います',
    furigana: 'あとはらいげつはらいます',
    arti: 'Sisa pembayarannya akan dilunasi bulan depan',
    penjelasan: 'Kata "後" di sini bermakna "sisanya" (残り), baik berupa sisa pembayaran, sisa pekerjaan, atau sisa urusan.',
    contoh1: '今半分払って、後（＝残り）は来月払います。\n(Sekarang saya bayar setengah, sisanya akan saya bayar bulan depan.)',
    contoh2: '今日の作業はここまでにして、後は明日やろう。\n(Pekerjaan hari ini kita cukupkan sampai di sini, sisanya mari kerjakan besok.)',
    contoh3: '料理は私が作るから、後の片付けはおねがいね。\n(Aku yang akan memasak, jadi sisa urusannya [beres-beres] tolong serahkan padamu ya.)'
  },
  {
    id: 'm6h5_23',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '書き直した跡がある',
    furigana: 'かきなおしたあとがある',
    arti: 'Ada jejak/bekas telah ditulis ulang',
    penjelasan: 'Kanji 跡 (dibaca "ato") berarti jejak fisik, bekas luka, reruntuhan, atau tanda bekas suatu aktivitas.',
    contoh1: 'この書類には、数字を書き直した跡がある。\n(Pada dokumen ini, ada jejak/tanda bahwa angkanya telah ditulis ulang/direkayasa.)',
    contoh2: '泥棒が窓から侵入した跡が見つかった。\n(Ditemukan jejak pencuri masuk menerobos melalui jendela.)',
    contoh3: '手術の跡がまだ痛む。\n(Bekas lukas jahitan operasi masih terasa sakit.)'
  },

  // ==========================================
  // KELOMPOK 4: 根 (ね) - Akar / Sumber Masalah / Watak Asli / Dendam
  // ==========================================
  {
    id: 'm6h5_24',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '雑草を根から抜く',
    furigana: 'ざっそうをねからぬく',
    arti: 'Mencabut rumpai/rumput liar beserta akarnya',
    penjelasan: 'Makna harfiah dari 根 (ne): akar tumbuhan di dalam tanah atau bagian pangkal organ tubuh (akar gigi, pangkal rambut).',
    contoh1: '庭の雑草を根から引き抜く。\n(Mencabut rumput liar di taman hingga ke akar-akarnya.)',
    contoh2: '虫歯が進行して、歯の根まで悪くなっている。\n(Gigi berlubangnya makin parah hingga membusuk sampai ke akar gigi.)',
    contoh3: '木が強風で根から倒れた。\n(Pohon itu tumbang dari akarnya karena angin kencang.)'
  },
  {
    id: 'm6h5_25',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '問題の根は深い',
    furigana: 'もんだいのねはふかい',
    arti: 'Akar masalahnya sangat dalam/rumit',
    penjelasan: 'Kiasan "akar" sebagai inti atau penyebab utama masalah. Jika "dalam" (深い), artinya masalahnya kompleks dan mendalam.',
    contoh1: 'いじめ問題の根は深い。\n(Akar permasalahan dari kasus perundungan itu sangatlah mendalam.)',
    contoh2: '表面的な解決ではなく、根にある原因を探るべきだ。\n(Kita tidak seharusnya mencari solusi yang dangkal di permukaan, tapi harus menyelidiki penyebab yang ada di akar utamanya.)',
    contoh3: 'この対立の根は歴史問題にまで遡る。\n(Akar konflik ini merentang mundur jauh hingga ke masalah sejarah.)'
  },
  {
    id: 'm6h5_26',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '息の根を止める',
    furigana: 'いきのねをとめる',
    arti: 'Menghabisi nyawa / Mencekik napas',
    penjelasan: 'Idiom dramatis yang bermakna menghentikan nyawa (membunuh) atau menghancurkan lawan/pesaing bisnis secara total.',
    contoh1: '敵の息の根を止めるまで攻撃をやめない。\n(Tidak akan menghentikan serangan sampai nyawa musuh berhasil dihabisi.)',
    contoh2: 'あの一言が、彼の政治生命の息の根を止めた。\n(Satu patah perkataan itu telah membunuh karir politiknya secara total.)',
    contoh3: '新商品の失敗で、ライバル会社の息の根を止めるつもりが逆効果になった。\n(Niatnya ingin mematikan bisnis perusahaan saingan melalui kegagalan produk baru itu, tapi malah jadi bumerang.)'
  },
  {
    id: 'm6h5_27',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '根は正直だ',
    furigana: 'ねはしょうじきだ',
    arti: 'Pada dasarnya (watak aslinya) dia jujur',
    penjelasan: 'Merujuk pada watak asli atau sifat dasar bawaan seseorang, terlepas dari bagaimana sikap luarnya yang terlihat.',
    contoh1: '彼は乱暴な口調だが、根は優しい人だ。\n(Meskipun nada bicaranya kasar, pada dasarnya watak aslinya dia orang yang baik hati.)',
    contoh2: 'あの子はいたずら好きだけど、根は素直なんです。\n(Anak itu memang suka iseng, tapi karakter dasarnya penurut kok.)',
    contoh3: '彼は根がまじめだから、どんな仕事も手を抜かない。\n(Karena sifat bawaannya yang sungguh-sungguh, pekerjaan apa pun dia kerjakan dengan maksimal.)'
  },
  {
    id: 'm6h5_28',
    minggu: '6',
    hari: '5',
    kategori: 'kata kerja',
    kanji: '根に持っている',
    furigana: 'ねにもっている',
    arti: 'Menyimpan dendam / Mengingat sakit hati',
    penjelasan: 'Idiom "根に持つ" artinya terus menyimpan rasa marah/dendam dan tidak bisa melupakan kesalahan orang lain di masa lalu.',
    contoh1: '彼は昔からかわれたことを、今でも根に持っている。\n(Dia masih mendendam sampai sekarang perihal dirinya yang pernah diejek di masa lalu.)',
    contoh2: 'ちょっと注意しただけなのに、根に持たれてしまった。\n(Padahal aku cuma menegurnya sedikit, tapi dia malah jadi menaruh dendam padaku.)',
    contoh3: '根に持つタイプの人は怒らせると怖い。\n(Orang dengan tipe pendendam itu sangat mengerikan kalau dibuat marah.)'
  },

  // ==========================================
  // KELOMPOK 5: 波 (なみ) - Ombak / Fluktuasi / Arus Massa / Tren
  // ==========================================
  {
    id: 'm6h5_29',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '波が高い',
    furigana: 'なみがたかい',
    arti: 'Ombaknya tinggi',
    penjelasan: 'Makna harfiah dari 波 (nami): gelombang ombak air di laut.',
    contoh1: '台風が近づいていて、海は波が高い。\n(Karena taufan sedang mendekat, ombak di laut menjadi tinggi.)',
    contoh2: 'サーフィンをするには波が小さすぎる。\n(Ombaknya terlalu kecil untuk bermain selancar.)',
    contoh3: '船が大きな波に揺られている。\n(Kapal itu terombang-ambing oleh ombak yang besar.)'
  },
  {
    id: 'm6h5_30',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '感情に波がある',
    furigana: 'かんじょうになみがある',
    arti: 'Emosinya tidak stabil / Turun naik',
    penjelasan: 'Kiasan untuk fluktuasi, pasang surut, atau ketidakstabilan pada emosi, performa, maupun hasil pekerjaan.',
    contoh1: '彼は感情に波があって、扱いづらい。\n(Karena emosinya suka naik turun, dia sangat sulit untuk dihadapi/ditangani.)',
    contoh2: 'プロの選手は成績の波を少なくしなければならない。\n(Seorang atlet profesional harus meminimalisir fluktuasi/turun naiknya performa bertanding.)',
    contoh3: '勉強のやる気に波があるのが私の欠点だ。\n(Kelemahan saya adalah motivasi belajar saya yang ada pasang surutnya.)'
  },
  {
    id: 'm6h5_31',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '人の波に押される',
    furigana: 'ひとのなみにおされる',
    arti: 'Ditolak/terdesak oleh gelombang lautan manusia',
    penjelasan: 'Metafora "gelombang manusia" untuk menggambarkan kerumunan atau pergerakan massa manusia yang sangat banyak dan padat.',
    contoh1: '祭りの会場で、人の波に押されて身動きがとれない。\n(Di tempat festival, saya terdesak oleh lautan manusia sehingga tidak bisa bergerak.)',
    contoh2: '朝の通勤ラッシュで人の波にのまれた。\n(Saya tertelan ke dalam arus gelombang manusia saat jam sibuk komuter pagi hari.)',
    contoh3: 'スタジアムから出てくる人の波は凄まじかった。\n(Gelombang lautan manusia yang keluar dari stadion sangatlah mengerikan luasnya.)'
  },
  {
    id: 'm6h5_32',
    minggu: '6',
    hari: '5',
    kategori: 'kata benda',
    kanji: '国際化の波に乗る',
    furigana: 'こくさいかのなみにのる',
    arti: 'Mengikuti arus/tren internasionalisasi',
    penjelasan: 'Ungkapan "波に乗る" berarti berhasil mengikuti tren zaman, memanfaatkan momentum, atau menyesuaikan diri dengan arus perkembangan.',
    contoh1: 'その企業はIT化の波に乗って急成長した。\n(Perusahaan tersebut tumbuh pesat berkat berhasil menunggangi arus tren digitalisasi IT.)',
    contoh2: '国際化の波に乗るために英語学習が必須だ。\n(Belajar bahasa Inggris adalah suatu keharusan demi bisa mengikuti arus tren globalisasi.)',
    contoh3: '彼は今、仕事の波に乗っていて絶好調だ。\n(Dia sekarang sedang berada di atas angin/arus tren karirnya dan performanya sangat prima.)'
  }
];

window.vocabData.push(...kosakata_m6h5);