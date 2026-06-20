export const blogPosts = [
  {
    id: 1,
    title:
      "Telegram Botlarda Geolokatsiya bilan Ishlash: Qishloq Sharoitida Taksilar uchun Yechim",
    img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/7/2023/12/26135623/rothenburg-2-1.jpeg?tr=w-1200,q-60",
    slug: "telegram-bot-geolokatsiya-taxi",
    date: "12-Iyun, 2026",
    readTime: "4 daqiqa",
    emoji: "🚀",
    excerpt:
      "Qishloqlarda aniq uy manzillari tizimi yo'qligi sababli taksi chaqirish doim muammo bo'lgan. Biz bu muammoni geolokatsiya va masofani o'lchash algoritmlari orqali qanday hal qildik?",
    content:
      "Ko'p joylarda, ayniqsa qishloq hududlarida ko'cha nomlari va uy raqamlari aniq emas. Shu sababli OzimizniTaksiBot loyihasini yaratishda asosiy urg'uni Telegram geolokatsiyasiga qaratdik. Foydalanuvchi o'z joylashuvini yuborganida, bot avtomatik ravishda 5 km radiusdagi eng yaqin haydovchilarni qidirib topadi va ularga xabar yuboradi. Buning uchun koordinatalar orasidagi masofani aniqlaydigan matematik formulalar va ma'lumotlar bazasi indekslaridan foydalandik. Bu kichik qishloqlarda ham logistikani raqamlashtirish mumkinligini isbotladi.",
  },
  {
    id: 2,
    title:
      "Nega Kompyuter Ko'rish Tizimlarida YOLO (Ultralytics) Eng Zo'r Tanlov?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Andromeda_Galaxy_2025.png/1280px-Andromeda_Galaxy_2025.png",

    slug: "why-yolo-computer-vision",
    date: "5-Iyun, 2026",
    readTime: "5 daqiqa",
    emoji: "💻",
    excerpt:
      "Tasvirlarni aniqlash va ob'ektlarni tanib olish bo'yicha openpic loyiham ustida ishlayotganimda, nega aynan YOLO kutubxonasini tanlaganim haqida.",
    content:
      "Kompyuter ko'rish (Computer Vision) sohasida tasvirlarni real vaqt rejimida aniqlash juda muhim. openpic loyiham doirasida turli modellarni solishtirib chiqdim. YOLO (You Only Look Once) arxitekturasi o'zining tezligi va aniqligi bilan boshqa neyron tarmoqlaridan ajralib turadi. U tasvirni faqat bir marta skanerlaydi, bu esa resurslarni tejaydi. Ish jarayonida Python-da 'ModuleNotFoundError' kabi muhit xatolariga ko'p duch keldim, lekin virtual muhitni (venv) to'g'ri sozlash va Ultralytics-ni o'rnatish orqali loyihani barqaror holatga keltirdim.",
  },
  {
    id: 3,
    title:
      "Data Markazlar Qanday Sovitiladi? Google va Meta-ning Yashirin Texnologiyalari",
    img: "https://www.raritan.com/assets/ram/blog-data-center-cooling.jpg",

    slug: "data-center-cooling-systems",
    date: "28-May, 2026",
    readTime: "3 daqiqa",
    emoji: "⚡",
    excerpt:
      "Har soniyada millionlab so'rovlarni qayta ishlaydigan serverlar nega erib ketmaydi? Global ma'lumotlar markazlarining mexanik sovitish tizimlari.",
    content:
      "Katta hajmdagi infratuzilmalarni o'rganish doim men uchun qiziqarli bo'lgan. Google va Meta kabi gigantlarning ma'lumotlar markazlari (Data Centers) ulkan issiqlik ishlab chiqaradi. Agar an'anaviy konditsionerlardan foydalanilsa, elektr energiyasi sarfi daxshatli darajada oshib ketadi. Shu sababli, zamonaviy ma'lumotlar markazlarida 'evaporative cooling' (suvning bug'lanishi orqali sovitish) va server xonalarini dengiz yoki daryo suvlari yaqiniga qurish kabi mexanik usullardan foydalaniladi. Bu nafaqat serverlarni barqaror ushlab turadi, balki ekologiyaga zararni kamaytiradi.",
  },
  {
    id: 4,
    title: "React-da Jonli Animatsiyalar: Portfolioni chiroyli qilish sirlari",
    img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/7/2023/12/26135623/rothenburg-2-1.jpeg?tr=w-1200,q-60",

    slug: "react-animations-portfolio",
    date: "15-May, 2026",
    readTime: "4 daqiqa",
    emoji: "✨",
    excerpt:
      "Foydalanuvchi saytda uzoqroq qolishi uchun quruq interfeys yetarli emas. Portfoliomda ishlatgan interaktiv menyular va 3D emojilar haqida.",
    content:
      "Yaxshi Front-end dasturchi faqat kod yozmaydi, u foydalanuvchi tajribasini (UX) ham o'ylaydi. Portfoliomni yig'ishda modulli JavaScript animatsiyalari va pastdan chiquvchi zamonaviy menyulardan (Bottom Sheets) foydalandib ko'rdim. UI qismini jonlantirish uchun esa Google Noto-ning miltillaydigan 3D emojilarini integratsiya qildim. Eng asosiysi - animatsiyalar saytni sekinlashtirmasligi kerak. Buning uchun CSS transition-lar va engil render mantiqidan foydalanish eng to'g'ri yo'ldir.",
  },
];
import axios from "axios";

const url = import.meta.env.API_URL;

export const getPosts = async () => {
  const { data } = await axios.get(`${url}/post`);
  return data.data;
};

export const getPostBySlug = async (slug) => {
  const { data } = await axios.get(`${url}/post`);
  // Agar backendda maxsus /api/post/:slug endpointi bo'lsa, to'g'ridan-to'g'ri o'shanga so'rov yuborish yaxshi.
  // Agar hozircha bo'lmasa, barcha postlar ichidan slug bo'yicha qidiramiz:
  const barchaPostlar = data.data;
  return barchaPostlar.find((item) => item.sluge === slug);
};
