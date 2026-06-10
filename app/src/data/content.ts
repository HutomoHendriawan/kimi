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
    image: '/images/content/Acha-8.jpeg',
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

export const albumCategories = ['Semua', 'Romantis', 'Petualangan', 'Kebersamaan', 'Spesial'];

export const albumPhotos: AlbumPhoto[] = [
  {
    id: 1,
    title: 'Kembang Api Cinta',
    category: 'Spesial',
    image: '/images/album/fireworks.jpg',
  },
  {
    id: 2,
    title: 'Masak Bersama',
    category: 'Kebersamaan',
    image: '/images/album/cooking.jpg',
  },
  {
    id: 3,
    title: 'Piknik di Taman',
    category: 'Romantis',
    image: '/images/album/picnic.jpg',
  },
  {
    id: 4,
    title: 'Melihat Bintang',
    category: 'Romantis',
    image: '/images/album/stargazing.jpg',
  },
  {
    id: 5,
    title: 'Menari di Hujan',
    category: 'Petualangan',
    image: '/images/album/rain.jpg',
  },
  {
    id: 6,
    title: 'Senja di Pantai',
    category: 'Petualangan',
    image: '/images/album/beach.jpg',
  },
];

export const articleContent = {
  title: 'Surat Cinta Untukmu',
  paragraphs: [
    'Sayangku,',
    'Setiap hari bersamamu adalah anugerah yang tak pernah kusangka bisa kumiliki. Dari hari pertama kita bertemu, aku tahu ada sesuatu yang istimewa tentangmu — cara kamu tertawa, cara kamu memandang dunia dengan penuh kebaikan, dan cara kamu mencintaiku dengan tulus.',
    'Kita telah melewati begitu banyak hal bersama — suka dan duka, tawa dan air mata, momen-momen sederhana dan petualangan besar. Setiap pengalaman itu mengukir kenangan indah yang akan selalu kukenang.',
    'Aku bersyukur untuk setiap pagi yang kubangun dengan mengetahui kamu ada di sisiku. Untuk setiap malam yang kita lewati dengan bercerita hingga mata terpejam. Untuk setiap tantangan yang kita hadapi bersama dan keluar lebih kuat.',
    'Kamu adalah rumahku, tempatku kembali, dan cinta sejatiku. Aku berjanji untuk terus mencintaimu, mendukungmu, dan berusaha menjadi versi terbaik diriku untukmu.',
    'Terima kasih telah menjadi bagian dari hidupku. Aku tidak sabar untuk melihat apa yang masa depan bawa untuk kita berdua.',
  ],
  closing: 'Selamanya milikmu,',
  signature: 'Aku ❤️',
};
