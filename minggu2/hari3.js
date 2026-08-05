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
    penjelasan: 'Memasukkan perasaan, doa, atau tenaga ke dalam suatu hal yang sedang dibuat atau dilakukan.',
    contoh1: '心をこめて手紙を書いた。\n(Menulis surat dengan sepenuh hati.)',
    contoh2: '祈りをこめて千羽鶴を折る。\n(Melipat bangau kertas dengan penuh doa.)'
  },
  {
    id: 'm2h3_2',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '染める',
    furigana: 'そめる',
    arti: 'Mewarnai / Mencelup',
    penjelasan: 'Mengubah warna benda (seperti kain atau rambut) menggunakan pewarna. Bisa juga untuk menggambarkan langit yang diwarnai warna matahari terbenam.',
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
    penjelasan: 'Sesuatu yang berkurang terus sampai benar-benar habis, seperti tenaga, uang, atau topik obrolan.',
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
    penjelasan: 'Tidak seimbang karena terlalu condong ke satu sisi saja, misalnya pola makan yang kurang gizi atau cara pandang yang tidak adil.',
    contoh1: '偏った考え\n(Pemikiran yang berat sebelah / tidak objektif.)',
    contoh2: '栄養が偏らないように注意する。\n(Berhati-hati agar nutrisi tetap seimbang.)'
  },
  {
    id: 'm2h3_5',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'はまる',
    furigana: 'はまる',
    arti: 'Terperosok / Pas / Kecanduan',
    penjelasan: 'Bisa berarti masuk pas pada tempatnya, terperosok ke dalam lubang, atau sangat tergila-gila/kecanduan hobi tertentu.',
    contoh1: '水たまりにはまる / 鍵がはまらない\n(Terperosok ke genangan air / Kunci tidak pas masuknya.)',
    contoh2: 'ゲームにはまる\n(Kecanduan / tergila-gila main game.)'
  },
  {
    id: 'm2h3_6',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'とどまる',
    furigana: 'とどまる',
    arti: 'Tinggal / Berhenti',
    penjelasan: 'Tetap berada di suatu tempat atau bertahan di suatu kondisi tanpa ada perubahan.',
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
    penjelasan: 'Menahan sesuatu di batas tertentu agar tidak berlebihan, atau menjaga sesuatu tetap dalam ingatan.',
    contoh1: '経費を最小限にとどめる\n(Menekan biaya seminimal mungkin.)',
    contoh2: '記憶にとどめる\n(Menyimpan dalam ingatan.)'
  },
  {
    id: 'm2h3_8',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '途切れる',
    furigana: 'toぎれる',
    arti: 'Terputus sementara',
    penjelasan: 'Sesuatu yang sedang berjalan lancar tiba-tiba terhenti sesaat, seperti obrolan atau sambungan telepon.',
    contoh1: '会話が途切れる\n(Percakapan terputus sejenak.)',
    contoh2: '連絡が途切れる。\n(Kontak terputus sementara waktu.)'
  },
  {
    id: 'm2h3_9',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '途絶える',
    furigana: 'とだえる',
    arti: 'Terhenti total',
    penjelasan: 'Benar-benar berhenti dan tidak berlanjut lagi sama sekali untuk selamanya atau dalam waktu lama.',
    contoh1: '便りが途絶える\n(Kabar berita terhenti sama sekali / putus kontak.)',
    contoh2: '資金援助が途絶える。\n(Bantuan dana terhenti total.)'
  },
  {
    id: 'm2h3_10',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'よみがえる',
    furigana: 'よみがえる',
    arti: 'Hidup kembali / Teringat jelas',
    penjelasan: 'Bangkit lagi. Bisa berarti hidup kembali secara nyata, atau kenangan lama yang tiba-tiba terasa hidup kembali di dalam hati.',
    contoh1: '死者がよみがえる\n(Orang mati hidup kembali.)',
    contoh2: 'あの感動が心によみがえる\n(Rasa haru itu teringat dan hidup kembali di hati.)'
  },
  {
    id: 'm2h3_11',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ありふれる',
    furigana: 'ありふれる',
    arti: 'Biasa / Pasaran',
    penjelasan: 'Sesuatu yang sangat umum, sering ditemui di mana-mana, sehingga tidak ada istimewanya.',
    contoh1: 'ありふれた話\n(Cerita yang sudah biasa / klise.)',
    contoh2: 'どこにでもある、ありふれたデザインだ。\n(Desain pasaran yang ada di mana-mana.)'
  },
  {
    id: 'm2h3_12',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '廃れる',
    furigana: 'すたれる',
    arti: 'Usang / Ketinggalan zaman',
    penjelasan: 'Suatu tren, gaya, atau kebiasaan yang sudah mulai ditinggalkan orang karena sudah kuno.',
    contoh1: '流行が廃れる\n(Tren sudah ketinggalan zaman.)',
    contoh2: 'この言葉はもう廃れてしまった。\n(Kata ini sudah tidak digunakan lagi / usang.)'
  },
  {
    id: 'm2h3_13',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'かぶれる',
    furigana: 'かぶれる',
    arti: 'Iritasi kulit / Terpengaruh budaya luar',
    penjelasan: 'Kulit yang gatal/merah karena alergi, atau seseorang yang sangat mengidolakan sesuatu sampai meniru gaya hidupnya secara berlebihan.',
    contoh1: '肌がかぶれる\n(Kulit mengalami iritasi / ruam.)',
    contoh2: 'ロックにかぶれる\n(Terobsesi dan sangat terpengaruh oleh budaya musik rock.)'
  },
  {
    id: 'm2h3_14',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '化ける',
    furigana: 'ばける',
    arti: 'Menyamar / Berubah wujud',
    penjelasan: 'Mengubah penampilan fisik untuk menyamar, atau benda biasa yang berubah wujud menjadi bernilai tinggi.',
    contoh1: '女に化ける\n(Menyamar menjadi perempuan.)',
    contoh2: 'ただの石が宝石に化けた。\n(Batu biasa disulap menjadi permata.)'
  },
  {
    id: 'm2h3_15',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'ばれる',
    furigana: 'ばれる',
    arti: 'Terbongkar',
    penjelasan: 'Rahasia atau kebohongan yang akhirnya ketahuan oleh orang lain.',
    contoh1: 'うそがばれる\n(Kebohongan terbongkar.)',
    contoh2: '隠し事が親にばれた。\n(Hal yang disembunyikan ketahuan orang tua.)'
  },
  {
    id: 'm2h3_16',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '釣り合う',
    furigana: 'つりあう',
    arti: 'Seimbang / Serasi',
    penjelasan: 'Cocok dan seimbang antara dua hal, seperti pendapatan dengan pengeluaran, atau keserasian pasangan.',
    contoh1: '収入と支出が釣り合う\n(Pemasukan dan pengeluaran seimbang.)',
    contoh2: '彼女に釣り合う男になりたい。\n(Aku ingin menjadi pria yang pantas bersanding dengannya.)'
  },

  // --- GAMBAR 2 (image_0a3006.jpg) ---
  {
    id: 'm2h3_17',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '絡む',
    furigana: 'からむ',
    arti: 'Terlilit / Terlibat / Mengajak ribut',
    penjelasan: 'Benda yang saling melilit, rumitnya suatu masalah, atau orang mabuk yang sengaja mencari gara-gara.',
    contoh1: '毛糸が絡む / たんが絡む\n(Benang wol terlilit / Dahak tersangkut di tenggorokan.)',
    contoh2: '酔っ払いに絡まれる\n(Diganggu / diajak ribut oleh pemabuk.)'
  },
  {
    id: 'm2h3_18',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '覆す',
    furigana: 'くつがえす',
    arti: 'Membalikkan / Membatalkan',
    penjelasan: 'Membalikkan keadaan secara total atau meruntuhkan keputusan/pendapat lama yang sudah mapan.',
    contoh1: '常識を覆す\n(Membalikkan akal sehat / mendobrak norma umum.)',
    contoh2: '第一審の判決を覆す。\n(Membatalkan putusan pengadilan sebelumnya.)'
  },
  {
    id: 'm2h3_19',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '見なす',
    furigana: 'みなす',
    arti: 'Dianggap / Dipandang sebagai',
    penjelasan: 'Menetapkan atau memutuskan sesuatu sah dianggap sama dengan hal lain (biasanya dalam aturan atau hukum).',
    contoh1: 'それは不正だと見なされている。\n(Hal itu dianggap sebagai tindakan curang.)',
    contoh2: '返事がない場合は、同意したものと見なします。\n(Jika tidak membalas, dianggap sudah setuju.)'
  },
  {
    id: 'm2h3_20',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'もたらす',
    furigana: 'もたらす',
    arti: 'Membawa / Menimbulkan',
    penjelasan: 'Mendatangkan atau menyebabkan suatu akibat, entah itu dampak buruk atau perubahan positif yang besar.',
    contoh1: '被害をもたらす\n(Menimbulkan kerugian atau kerusakan.)',
    contoh2: 'この技術は社会に大きな変化をもたらした。\n(Teknologi ini membawa perubahan besar bagi masyarakat.)'
  },
  {
    id: 'm2h3_21',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'しのぐ',
    furigana: 'しのぐ',
    arti: 'Bertahan / Mengatasi',
    penjelasan: 'Berhasil melewati atau menahan situasi yang sulit (seperti cuaca ekstrem atau krisis) dengan sabar.',
    contoh1: '夏の暑さをしのぐ\n(Bertahan dari teriknya musim panas.)',
    contoh2: '木の下で雨をしのぐ。\n(Berteduh dari hujan.)'
  },
  {
    id: 'm2h3_22',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: '継ぐ',
    furigana: 'つぐ',
    arti: 'Mewarisi / Meneruskan',
    penjelasan: 'Melanjutkan atau mengambil alih pekerjaan, bisnis keluarga, atau tanggung jawab dari orang sebelumnya.',
    contoh1: '父の仕事を継ぐ\n(Mewarisi pekerjaan ayah.)',
    contoh2: '彼は家業を継ぐ決心をした。\n(Dia memutuskan untuk meneruskan bisnis keluarga.)'
  },
  {
    id: 'm2h3_23',
    minggu: '2',
    hari: '3',
    kategori: 'kata kerja',
    kanji: 'つ(っ)つく',
    furigana: 'つつく',
    arti: 'Menyodok / Menyenggol / Mematuk',
    penjelasan: 'Menyentuh atau menusuk-nusuk sesuatu secara berulang menggunakan jari, siku, atau paruh hewan.',
    contoh1: 'ひじでつつく\n(Menyenggol pakai siku.)',
    contoh2: '鳥が窓ガラスをつつく。\n(Burung mematuk kaca jendela.)'
  }
];

// Menambahkan kosakata dari file ini ke data master di index.html
window.vocabData.push(...kosakata_m2h3);