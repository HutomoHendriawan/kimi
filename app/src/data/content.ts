// PASSWORD - Change this to your desired PIN/password
export const CORRECT_PASSWORD = '2025';

// WhatsApp number for feedback (replace with your number)
export const WHATSAPP_NUMBER = '6283870701573';

export interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
}

export const contentItems: ContentItem[] = [
  {
    id: 1,
    title: 'First Match Anjay',
    description: 'September 2023',
    image: '/images/content/Acha-1.jpeg',
    fullDescription: 'Awal kita "match" di aplikasi chat. Lalu lanjut telpon di Line. Agak malu juga waktu itu telponan sama kamu pake paket gratisan WKWKWKWKWK',
  },
  {
    id: 2,
    title: 'Pap Pertama',
    description: 'September 2023',
    image: '/images/content/Acha-2.jpeg',
    fullDescription: 'Pertama kalinya kamu kasih aku pap foto kamu hihi',
  },
  {
    id: 3,
    title: 'Pap Pertama (Hijab Version)',
    description: 'Oktober 2023',
    image: '/images/content/Acha-3.jpeg',
    fullDescription:
      'Aku inget banget kamu pergi sama orang tuamu. Dan pas malem, kamu nangis dibikin mereka. Di tengah2 call kamu tanya ke aku... "Kamu mau liat gak? Fotoku pas tadi pergi." Endik dalem hati belike"pake nanya", tapi Endik tidak ingin suara hatinya terdengar. Jadi, Endik menjawab "Boleh" dengan suara yang menggetarkan kayangan.',
  },
  {
    id: 4,
    title: 'VC PERTAMA BOS',
    description: 'Desember 2023',
    image: '/images/content/Acha-4.jpeg',
    fullDescription:
      'Kamu pernah bilang ke aku kalau kamu orangnya bukan tipe yang mau VC. Tapi kubilang aku bakal bikin kamu ngerasa lebih cantik dan CWENTWIL sampe kamu yakin dan pede mau VC sama aku. Eh mau juga ujungnya... Iyalah GUE GITU LOH',
  },
  {
    id: 5,
    title: 'Bantu Acha Kerja di Kak Dessy',
    description: 'November 2024',
    image: '/images/content/Acha-5.jpeg',
    fullDescription: 'Kamu mulai kerja Full-time walaupun gak ada kontrak. Dan aku seneng, kamu bisa berkembang dari yang tadinya parti-time ke full-time. So proud of you, Babe',
  },
  {
    id: 6,
    title: 'First Meet... First Hug ❤️',
    description: 'Juni 2025',
    image: '/images/content/Acha-6.jpeg',
    fullDescription:
      'Baru keluar dari Gate bandara langsung diliatin sama cewe yang mimik mukanya judes. Siapa lagi kalau bukan cewe cantikku. Pertama kalinya juga bisa gombalin kamu langsung... "Ternyata lebih cakep aslinya daripada di foto ya". Cieee malluuuuu.',
  },
  {
    id: 7,
    title: 'Mam Bareng BAKSO REMAJA MALANG',
    description: 'Juni 2025',
    image: '/images/content/Acha-7.jpeg',
    fullDescription:
      'Banyak banget list makanan enak yang kamu bikin dan kita wujudin satu per satu. Selain mam makanan di Batam, aku juga makan makanan kamu hehe. Walaupun makanan pertama yang kamu masakin buatku waktu itu tempe oreg. Enak banget masakan kamu... Bikin kangen aja sialan',
  },
  {
    id: 8,
    title: 'Tuker Cincin dan Rayain Ultahmu',
    description: 'Juni 2025',
    image: '/images/content/Acha-12.jpeg',
    fullDescription: 'Ini pertama kalinya aku hadir di ulang tahun kamu. Ultah2 sebelumnya gak ada aku huhuhu kasian ya kamu, belum ketemu cowo ganteng kaya aku (aku ganteng kata mama)',
  },
  {
    id: 9,
    title: 'Sesuatu yang Kita Bikin Sama-sama Akhirnya Jadi',
    description: 'Juni 2025',
    image: '/images/content/Acha-9.jpeg',
    fullDescription: 'Kita bikin kerajinan resin bunga. Seru ya belajar bikin itu, hasilnya juga not bad lah buat pemula',
  },
  {
    id: 10,
    title: 'Konten Kreator nih Boss... Senggol dong!',
    description: 'Juli 2025',
    image: '/images/content/Acha-10.jpeg',
    fullDescription:
      'Agak sedih sebenernya inget bulan juli 2025. Karena kamu waktu itu direndahin serendah-rendahnya sama keluargamu. Dan waktu itu kita putusin kalau sambil nunggu dapet kerja, mending ngonten dulu. Dan alhamdulillahnya ada interview kerja dalam waktu deket',
  },
  {
    id: 11,
    title: 'Kedua Kalinya Kita Ketemu Lagi',
    description: 'Maret 2026',
    image: '/images/content/Acha-11.jpeg',
    fullDescription:
      'Untuk kedua kalinya kita bisa ketemu lagi dan ngabisin waktu bareng-bareng. Gak virtualan. Dan ini bukan yang terakhir. Terakhir kalinya kita ketemu yaitu, ketika salah satu dari kita udah tua renta, tertidur saking pulasnya lalu bangun2 ada di tempat yang indah. ANJAY',
  },
];

export interface AlbumPhoto {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const albumCategories = ['Semua', 'CEKULAH', 'Part-time', 'TOGEDEH', 'Side-quest', 'Infineon', 'Random', 'Kak Dessy'];

export const albumPhotos: AlbumPhoto[] = [
  {
    id: 1,
    title: 'Acha Take Photo at Random Spot',
    category: 'Random',
    image: '/images/album/Random.jpeg',
  },
  {
    id: 2,
    title: 'I Take SS of Her muehehehe',
    category: 'Side-quest',
    image: '/images/album/Side-quest.jpeg',
  },
  {
    id: 3,
    title: 'During, Before, or After Work',
    category: 'Infineon',
    image: '/images/album/Infineon.jpeg',
  },
  {
    id: 4,
    title: 'We Taking Pict TOGEDEH FOEVEH',
    category: 'TOGEDEH',
    image: '/images/album/Togedeh.jpeg',
  },
  {
    id: 5,
    title: 'Acha Anak Cekulah',
    category: 'CEKULAH',
    image: '/images/album/CEKULAH.jpeg',
  },
  {
    id: 6,
    title: 'Goks Kata Gue teh',
    category: 'Part-time',
    image: '/images/album/Part-time.jpeg',
  },
  {
    id: 7,
    title: 'TAP TAP LAYAR',
    category: 'Kak Dessy',
    image: '/images/album/Kak-Dessy.jpeg',
  },
];

export const articleContent = {
  title: 'Selamat Ulang Tahun Sayang',
  paragraphs: [
    'Sayang,',
    'Makasih banget sebelumnya. Ini adalah hubungan yang paling berkesan, paling jauh, paling serius yang pernah aku jalanin. Jalanin hubungan bareng kamu aku belajar banyak hal, bareng kamu juga bikin aku lebih tau apa itu cinta sama kasih Sayang. Sama kamu juga aku belajar ternyata dalam hubungan bukan cuma cinta sama kasih sayang aja, ada emosi/perasaan lain, ada banyak hal yang perlu disiapin untuk ngelangkah ke jenjang yang lebih serius yang awalnya kupikir cukup cinta sama uang aja, ternyata ada lebih banyak daripada itu. Termasuk jadi tempat sandaran waktu butuh orang yang mana aku ternyata gak bisa jadi sandaran kamu disaat kamu butuh dipeluk.',
    'Pahit manis jalanin hubungan udah kita rasain bareng. Kita pernah sama-sama terluka, bahkan kita sama-sama pernah melukain satu sama lain. Dan tentu aja kedepannya kita bakal tetep terluka, entah sama orang lain atau sama kita sendiri.',
    'Aku gak pernah bilang dari awal kalau aku bakal selalu bahagian kamu. Tapi aku selalu bilang kalau aku akan ada buat kamu, apapun yang kamu rasain. Aku bakal selalu jadi orang terakhir yang ada buat kamu, walaupun gak ada orang lagi yang support kamu.',
    'Aku maupun kamu gak jadi "yang pertama" untuk satu sama lain. Memang ada hal yang pertama kali kita lakuin bareng. Sesuatu yang pertama itu emang spesial. Tapi aku mau kamu jadi yang terakhir untukku dan aku jadi yang terakhir buatmu. In everything. Mungkin yang terakhir gak sespesial yang pertama, bahkan biasa aja tapi itu kan yang membuat "terakhir" jadi spesial. Mencintai sesuatu yang spesial itu biasa, sedangkan mencintai sesuatu yang biasa itu baru spesial. - EMOH (Endik bercemooh)',
  ],
  closing: 'You are mine forever,',
  signature: 'From Me to You ❤️',
};
