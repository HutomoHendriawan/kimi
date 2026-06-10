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
    title: 'Pertemuan Pertama',
    description: 'Saat dunia berhenti sejenak dan hati mulai berbicara...',
    image: '/images/content/first-meet.jpg',
    fullDescription:
      'Di sebuah kafe yang cozy, di tengah hiruk pikuk kota, kita bertemu untuk pertama kalinya. Aku masih ingat betul bagaimana senyummu menerangi seluruh ruangan, bagaimana mata kita bertemu dan dunia seakan berhenti berputar sejenak. Percakapan kita mengalir begitu saja, dari topik ringan hingga mimpi-mimpi besar. Di situlah semuanya dimulai — kisah indah yang terus kita tulis bersama hingga hari ini.',
  },
  {
    id: 2,
    title: 'Kencan Pertama',
    description: 'Langkah pertama di jalan penuh bunga dan cinta...',
    image: '/images/content/first-date.jpg',
    fullDescription:
      'Kencan pertama kita di taman bunga sakura masih menjadi salah satu momen terindah dalam hidupku. Kita berjalan menyusuri jalan setapak yang dipenuhi kelopak-kelopak merah muda, tangan saling berpegangan erat. Kamu tertawa ketika aku mencoba mengambil foto yang bagus untukmu, dan aku jatuh cinta lebih dalam lagi. Setiap detik bersamamu terasa seperti adegan dari film romantis favoritku.',
  },
  {
    id: 3,
    title: 'Momen Anniversary',
    description: 'Merayakan cinta yang tumbuh semakin dalam setiap harinya...',
    image: '/images/content/anniversary.jpg',
    fullDescription:
      'Setiap anniversary adalah bukti bahwa cinta kita semakin kuat. Makan malam dengan lilin, mawar merah di atas meja, dan tatapan mata yang penuh kasih sayang. Kita merayakan tidak hanya hari jadi, tapi juga setiap tantangan yang telah kita lewati bersama. Setiap tahun bersamamu adalah berkah yang tak ternilai. Aku bersyukur setiap hari atas kehadiranmu dalam hidupku.',
  },
  {
    id: 4,
    title: 'Petualangan Bersama',
    description: 'Mengeksplorasi dunia, satu destinasi impian pada satu waktu...',
    image: '/images/content/adventure.jpg',
    fullDescription:
      'Bersamamu, setiap perjalanan menjadi petualangan yang tak terlupakan. Dari pegunungan yang menjulang hingga pantai dengan pasir putih, kita telah menciptakan kenangan di setiap sudut dunia. Kamu adalah partner perjalanan terbaikku — selalu siap untuk petualangan baru, selalu menemukan kegembiraan di setiap momen. Aku tidak sabar untuk menjelajahi lebih banyak dunia bersamamu.',
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
