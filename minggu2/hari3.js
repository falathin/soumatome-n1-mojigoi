// Gunakan window.vocabData array agar file JS lain bisa di-push juga nantinya
window.vocabData = window.vocabData || [];

const kosakata_m2h3 = [
  // --- GAMBAR 1 (image_0a2fea.jpg) ---
  {
    id: 'm2h3_1',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'こめる',
    furigana: 'こめる',
    arti: 'Mencurahkan / Memasukkan',
    penjelasan: 'Mengisi, memasukkan, atau mencurahkan suatu bentuk emosi abstrak (seperti perasaan, doa, harapan, atau tenaga) ke dalam suatu tindakan atau benda.',
    contoh1: '心をこめて手紙を書いた。\n(Menulis surat dengan sepenuh hati.)',
    contoh2: '祈りをこめて千羽鶴を折る。\n(Melipat bangau kertas dengan penuh doa/harapan.)'
  },
  {
    id: 'm2h3_2',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '染める',
    furigana: 'そめる',
    arti: 'Mewarnai / Mencelup',
    penjelasan: 'Memberikan warna pada suatu benda (seperti kain atau rambut) menggunakan zat pewarna. Bisa juga bermakna kiasan seperti "diwarnai" oleh perasaan atau suasana alam.',
    contoh1: '髪を染める\n(Mewarnai rambut.)',
    contoh2: '夕日で空が赤く染まる。\n(Langit diwarnai merah oleh matahari terbenam.)'
  },
  {
    id: 'm2h3_3',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '尽きる',
    furigana: 'つきる',
    arti: 'Habis / Berakhir',
    penjelasan: 'Berkurang terus-menerus hingga habis sama sekali. Sering digunakan untuk hal abstrak seperti sumber daya, tenaga, kesabaran, atau topik pembicaraan.',
    contoh1: '資源が尽きる\n(Sumber daya habis.)',
    contoh2: '話題が尽きない。\n(Topik pembicaraan tidak ada habisnya.)'
  },
  {
    id: 'm2h3_4',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '偏る',
    furigana: 'かたよる',
    arti: 'Condong / Berat sebelah',
    penjelasan: 'Condong atau berat sebelah ke satu pihak, arah, atau titik tertentu sehingga kehilangan keseimbangan (biasanya digunakan untuk gizi, pendapat, atau distribusi).',
    contoh1: '偏った考え\n(Pemikiran yang berat sebelah / bias.)',
    contoh2: '栄養が偏らないように注意する。\n(Berhati-hati agar nutrisi/gizi tidak berat sebelah / tetap seimbang.)'
  },
  {
    id: 'm2h3_5',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'はまる',
    furigana: 'はまる',
    arti: 'Terperosok / Pas / Tergila-gila',
    penjelasan: 'Memiliki beberapa makna: masuk/pas secara sempurna ke dalam suatu bingkai, terperosok ke dalam jebakan atau kesulitan, atau kecanduan dan sangat menggandrungi sesuatu.',
    contoh1: '水たまりにはまる / 鍵がはまらない\n(Terperosok ke genangan air / Kunci tidak pas/masuk.)',
    contoh2: 'ゲームにはまる（＝熱中する）\n(Tergila-gila pada permainan video.)'
  },
  {
    id: 'm2h3_6',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'とどまる',
    furigana: 'とどまる',
    arti: 'Tinggal / Berhenti',
    penjelasan: 'Menghentikan pergerakan lalu menetap di suatu tempat, atau suatu keadaan yang tidak beranjak dan tetap bertahan pada kondisi/tingkat tertentu.',
    contoh1: 'この町にとどまる\n(Tinggal / menetap di kota ini.)',
    contoh2: '物価の上昇はとどまることがない。\n(Kenaikan harga barang tidak pernah berhenti.)'
  },
  {
    id: 'm2h3_7',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'とどめる',
    furigana: 'とどめる',
    arti: 'Membatasi / Menyimpan',
    penjelasan: 'Menghentikan atau membatasi sesuatu pada tingkat tertentu agar tidak menyebar lebih jauh. Bisa juga berarti mengabadikan atau menyimpan hal abstrak (sejarah/ingatan).',
    contoh1: '経費を最小限にとどめる\n(Menekan pengeluaran ke batas minimum.)',
    contoh2: '記憶にとどめる\n(Menyimpan dalam ingatan / mengingat.)'
  },
  {
    id: 'm2h3_8',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '途切れる',
    furigana: 'とぎれる',
    arti: 'Terputus (sementara)',
    penjelasan: 'Terputus atau terhenti sejenak di tengah jalan. Biasanya dipakai untuk sesuatu yang tadinya bersambung secara kontinu, seperti komunikasi, ingatan, antrean, atau suara.',
    contoh1: '会話が途切れる\n(Percakapan terputus / terhenti sejenak.)',
    contoh2: '連絡が途切れる。\n(Kontak atau komunikasi terputus sementara waktu.)'
  },
  {
    id: 'm2h3_9',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '途絶える',
    furigana: 'とだえる',
    arti: 'Terhenti sama sekali',
    penjelasan: 'Terhenti secara total atau berakhir sama sekali. Mengindikasikan bahwa sesuatu yang sebelumnya berlanjut kini hilang atau tidak ada lagi sepenuhnya (seperti bantuan dana atau keturunan).',
    contoh1: '便りが途絶える\n(Kabar berita terhenti sama sekali / hilang kontak.)',
    contoh2: '資金援助が途絶える。\n(Bantuan dana terhenti secara total.)'
  },
  {
    id: 'm2h3_10',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'よみがえる',
    furigana: 'よみがえる',
    arti: 'Hidup kembali / Teringat',
    penjelasan: 'Bangkit kembali. Secara harfiah berarti hidup kembali dari kematian, namun dalam percakapan sering diartikan sebagai ingatan, kekuatan, atau perasaan masa lalu yang teringat segar kembali di masa kini.',
    contoh1: '死者がよみがえる\n(Orang mati hidup kembali.)',
    contoh2: 'あの感動が心によみがえる\n(Rasa haru saat itu bangkit kembali di dalam hati.)'
  },
  {
    id: 'm2h3_11',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ありふれる',
    furigana: 'ありふれる',
    arti: 'Biasa / Umum',
    penjelasan: 'Sesuatu yang sangat lumrah, sering ditemukan di mana-mana, sehingga terasa pasaran dan tidak memiliki keistimewaan. Hampir selalu dipakai dalam bentuk "ありふれた".',
    contoh1: 'ありふれた（＝平凡な）話\n(Cerita yang biasa/pasaran.)',
    contoh2: 'どこにでもある、ありふれたデザインだ。\n(Ini adalah desain yang pasaran dan ada di mana-mana.)'
  },
  {
    id: 'm2h3_12',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '廃れる',
    furigana: 'すたれる',
    arti: 'Menjadi usang / Ketinggalan zaman',
    penjelasan: 'Menurunnya popularitas atau nilai sesuatu. Digunakan untuk gaya, tren, moral, kata-kata, atau adat istiadat yang sudah mulai usang dan perlahan ditinggalkan masyarakat.',
    contoh1: '流行が廃れる\n(Tren/Masa kepopuleran telah usang atau berlalu.)',
    contoh2: 'この言葉はもう廃れてしまった。\n(Kata/istilah ini sudah usang dan tidak digunakan lagi.)'
  },
  {
    id: 'm2h3_13',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'かぶれる',
    furigana: 'かぶれる',
    arti: 'Ruam / Terpengaruh kuat',
    penjelasan: 'Bereaksi negatif pada kulit (alergi/ruam) karena paparan zat tertentu. Secara kiasan, berarti sangat terpengaruh secara berlebihan oleh budaya atau aliran tertentu sampai meniru gaya tersebut.',
    contoh1: '肌がかぶれる\n(Kulit mengalami ruam/iritasi.)',
    contoh2: 'ロックにかぶれる\n(Sangat terpengaruh oleh gaya musik rock.)'
  },
  {
    id: 'm2h3_14',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '化ける',
    furigana: 'ばける',
    arti: 'Menyamar / Berubah wujud',
    penjelasan: 'Berubah bentuk atau menyamar menjadi sosok/wujud lain. Digunakan untuk hantu dalam cerita rakyat, manusia yang menyamar, atau sesuatu benda yang berubah nilai/sifat secara drastis.',
    contoh1: '女に化ける（＝女装する）\n(Menyamar menjadi perempuan / cross-dressing.)',
    contoh2: 'ただの石が宝石に化けた。\n(Batu biasa berubah/disulap menjadi batu permata.)'
  },
  {
    id: 'm2h3_15',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ばれる',
    furigana: 'ばれる',
    arti: 'Terbongkar',
    penjelasan: 'Terbongkarnya rahasia, kebohongan, atau identitas asli yang selama ini ditutup-tutupi sehingga akhirnya diketahui jelas oleh pihak lain.',
    contoh1: 'うそがばれる\n(Kebohongan terbongkar.)',
    contoh2: '隠し事が親にばれた。\n(Hal yang disembunyikan terbongkar oleh orang tua.)'
  },
  {
    id: 'm2h3_16',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '釣り合う',
    furigana: 'つりあう',
    arti: 'Seimbang / Cocok',
    penjelasan: 'Cocok, serasi, atau seimbang antara dua hal. Sering digunakan untuk perbandingan bobot/keseimbangan fisik, atau kepantasan/keserasian status antara pasangan maupun dua keadaan.',
    contoh1: '収入と支出が釣り合う\n(Pemasukan dan pengeluaran seimbang.)',
    contoh2: '彼女に釣り合うような男になりたい。\n(Aku ingin menjadi pria yang sepadan/pantas bersanding dengannya.)'
  },

  // --- GAMBAR 2 (image_0a3006.jpg) ---
  {
    id: 'm2h3_17',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '絡む',
    furigana: 'からむ',
    arti: 'Terlilit / Terlibat / Menggoda',
    penjelasan: 'Sesuatu yang melilit atau melingkar pada benda lain. Juga merujuk pada keterlibatan yang rumit dalam suatu masalah, atau tindakan mengganggu dan mencari gara-gara dengan orang lain.',
    contoh1: '毛糸が絡む / たんが絡む\n(Benang wol terlilit / Dahak tersangkut.)',
    contoh2: '酔っ払いに絡まれる\n(Diajak ribut / diganggu oleh pemabuk.)'
  },
  {
    id: 'm2h3_18',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '覆す',
    furigana: 'くつがえす',
    arti: 'Membalikkan / Meruntuhkan',
    penjelasan: 'Membalikkan keadaan secara drastis sehingga posisi bawah menjadi di atas, atau menghancurkan/membatalkan asumsi, keputusan, dan akal sehat yang selama ini diyakini kebenarannya.',
    contoh1: '常識を覆す\n(Meruntuhkan / membalikkan akal sehat atau norma umum.)',
    contoh2: '第一審の判決を覆す。\n(Membalikkan/membatalkan putusan persidangan tingkat pertama.)'
  },
  {
    id: 'm2h3_19',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '見なす',
    furigana: 'みなす',
    arti: 'Dianggap / Dipandang',
    penjelasan: 'Menganggap atau menetapkan status/kondisi suatu hal seolah-olah sama dengan hal lain, terlepas dari fakta fisik sebenarnya (sering digunakan dalam bahasa formal, aturan, atau hukum).',
    contoh1: 'それは不正だと見なされている。\n(Hal tersebut dianggap sebagai ketidakjujuran / kecurangan.)',
    contoh2: '返事がない場合は、同意したものと見なします。\n(Jika tidak ada balasan, maka akan dianggap telah setuju.)'
  },
  {
    id: 'm2h3_20',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'もたらす',
    furigana: 'もたらす',
    arti: 'Membawa / Menimbulkan',
    penjelasan: 'Membawa, mendatangkan, atau menyebabkan terjadinya sesuatu yang biasanya berupa hasil, perubahan besar, atau keadaan baru pada seseorang atau suatu lingkungan.',
    contoh1: '被害をもたらす\n(Membawa/Menimbulkan kerugian atau kerusakan.)',
    contoh2: 'この技術は社会に大きな変化をもたらした。\n(Teknologi ini telah membawa perubahan besar pada masyarakat.)'
  },
  {
    id: 'm2h3_21',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'しのぐ',
    furigana: 'しのぐ',
    arti: 'Menahan / Bertahan',
    penjelasan: 'Bertahan, menahan, atau mengatasi keadaan yang sulit, darurat, atau tidak nyaman (seperti cuaca ekstrem/kelaparan) untuk sementara waktu. Bisa juga bermakna melampaui kemampuan seseorang.',
    contoh1: '夏の暑さをしのぐ\n(Bertahan dari / mengatasi teriknya musim panas.)',
    contoh2: '木の下で雨をしのぐ。\n(Berteduh/bertahan dari hujan di bawah pohon.)'
  },
  {
    id: 'm2h3_22',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '継ぐ',
    furigana: 'つぐ',
    arti: 'Mewarisi / Meneruskan',
    penjelasan: 'Menerima warisan atau meneruskan tongkat estafet dari orang sebelumnya (keluarga atau pendahulu), baik berupa bisnis, posisi, tugas, maupun tradisi.',
    contoh1: '父の仕事を継ぐ\n(Mewarisi / meneruskan pekerjaan ayah.)',
    contoh2: '彼は家業を継ぐ決心をした。\n(Dia memutuskan untuk meneruskan bisnis keluarga.)'
  },
  {
    id: 'm2h3_23',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'つ(っ)つく',
    furigana: 'つつく',
    arti: 'Menyodok / Menyenggol',
    penjelasan: 'Menusuk, menyodok, atau mematuk pelan secara berulang menggunakan benda runcing (seperti jari, siku, atau paruh burung). Terkadang dipakai secara kiasan untuk memprovokasi seseorang.',
    contoh1: 'ひじでつつく\n(Menyenggol / menyodok menggunakan siku.)',
    contoh2: '鳥が窓ガラスをつつく。\n(Burung mematuk kaca jendela.)'
  }
];

// Menambahkan kosakata dari file ini ke data master di index.html
window.vocabData.push(...kosakata_m2h3);