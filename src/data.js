import avatar1 from "./assets/img/no-image.jpg";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import TimerIcon from "@material-ui/icons/Timer";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import classes from "./components/landing/Landing.css";

export const mainDataUz = {
  carousel: {
    title: "Humo - teks LTD",
    text: `Sifat har doim urfda bo'ladi, biz sizga eng yaxshisini ilinamiz!`,
  },
  about: {
    title: "Korxonamiz haqida",
    text1:
      "Bizning korxonamiz 2007-yilda tashkil etilgan bo'lib, turli xil kiyim-kechaklar va matolar ishlab chiqariladi. Korxonamiz zamonaviy tikuv mashinalari va to'quv dastgohlari bilan jihozlangan.",
    text2:
      "Hozirda korxonamizda Xitoy, Janubiy Koreya va Yaponiyadan keltirilgan 70 dan ortiq tikuv mashinalaridan va 12 ta to'quv dastgohlaridan foydalanilyapti.",
    text3:
      "2020-yilda korxonamizda 5,4 mlrd so'mlik mahsulotlar ishlab chiqarildi va ishlab chiqarish quvvatini yiliga 10 mlrd so'mga oshirish imkoniyati bor.",
  },
  counter: [
    {
      label: "Xodimlar",
      number: "75",
    },
    {
      label: "Mahsulotlar turi",
      number: "30",
    },
    {
      label: "Ishlab chiqarish quvvati (yiliga ming $)",
      number: "540",
    },
  ],
  advantageTitle: "Bizning afzalliklarimiz",
  advantage: [
    {
      icon: <ThumbUpIcon className={classes.Icon} />,
      title: "Yuqori sifat",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: <TimerIcon className={classes.Icon} />,
      title: "Tezkor xizmat ko'rsatish",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: <FiberNewIcon className={classes.Icon} />,
      title: "Yangicha dizaynlar",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
  ],
};

export const mainDataRu = {
  carousel: {
    title: "ХУМО - ТЕКС ООО",
    text: `Качество всегда в традициях, мы желаем вам всего наилучшего!`,
  },
  about: {
    title: "О нашей компании",
    text1:
      "Bizning korxonamiz 2007-yilda tashkil etilgan bo'lib, turli xil kiyim-kechaklar va matolar ishlab chiqariladi. Korxonamiz zamonaviy tikuv mashinalari va to'quv dastgohlari bilan jihozlangan.",
    text2:
      "Hozirda korxonamizda Xitoy, Janubiy Koreya va Yaponiyadan keltirilgan 70 dan ortiq tikuv mashinalaridan va 12 ta to'quv dastgohlaridan foydalanilyapti.",
    text3:
      "2020-yilda korxonamizda 5,4 mlrd so'mlik mahsulotlar ishlab chiqarildi va ishlab chiqarish quvvatini yiliga 10 mlrd so'mga oshirish imkoniyati bor.",
  },
  counter: [
    {
      label: "Персонал",
      number: "100",
    },
    {
      label: "Тип продукта",
      number: "100",
    },
    {
      label: "Производственная мощность",
      number: "1000",
    },
  ],
  advantageTitle: "Наши преимущества",
  advantage: [
    {
      icon: <ThumbUpIcon className={classes.Icon} />,
      title: "Высокого качества",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: <TimerIcon className={classes.Icon} />,
      title: "Оперативное обслуживание",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
    {
      icon: <FiberNewIcon className={classes.Icon} />,
      title: "Новые дизайны",
      description: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim`,
    },
  ],
};

export const footerDataUz = {
  titleLeft: "Sayt xaritasi",
  link: ["Bosh sahifa", "Mahsulotlarimiz", "Bizning jamoa", "Aloqa"],
  nestedLinks: ["Erkaklar", "Ayollar", "Bolalar"],
  nestedUrls: ["/products", "/products", "/products"],
  url: ["/", "/products", "/our-team", "/contact"],
  titleRight: "Biz bilan bog'laning",
  tel: ["+99897 517 2808", "+99899 999 9999"],
  adresTitle: "Bizning manzil:",
  adres: "Xorazm viloyati Xonqa tumani Shiroq ko'chasi 60 - uy",
};

export const footerDataRu = {
  titleLeft: "Карта сайта",
  link: ["Главная", "Наши продукты", "Наша команда", "Контакть"],
  nestedLinks: ["Мужчины", "Женщины", "Дети"],
  nestedUrls: ["/products", "/products", "/products"],
  url: ["/", "/products", "/our-team", "/contact"],
  titleRight: "Свяжитесь с нами",
  tel: ["+99897 517 2808", "+99899 999 9999"],
  adresTitle: "Наш адресс:",
  adres: "Улица Ширак 60, Ханкинский район, Хорезмская область",
};

export const ourTeamDataUz = {
  header: {
    title: "Bizning jamoamiz",
    text: `Bizning kompaniyada xodimlarimiz ishlashi, dam olishi uchun qulay sharoitlar yaratilgan!`,
  },
  sectionTitle: "Jamoamiz ish jarayonidan namunalar",
  members: [
    {
      image: avatar1,
      firstName: "Bekmetov",
      lastName: "Xushnud",
      position: "Korxona rahbari",
      description: [
        "- Korxona asoschisi Bekmetov Xushnud Otajonovich, 1956 - yil 1-yanvarda tug'ilgan",
        "- 1973-1978-yillarda Toshkent to'qimachilik va yengil sanoat institutini Yengil sanoat va mashina apparatlari injineringi mutaxassisligi bo'yicha tamomlagan",
        "- Davlat korxonalarida turli rahbarlik lavozimlarda 43 yil xizmat qilgan.",
        "- Tadbirkorlik faoliyatini 1996-yilda boshlagan.",
        "- O'zbekiston Respublikasi mustaqilligining 20 yilligi ko'krak nishoni sohibi.",
        "- 2014-yil Tashabbus ko'rik tanlovida tuman, viloyat bosqichlaridan o'tib, Respublika bosqichida ishtirok qilgan va diplom sohibi bo'lgan.",
        "- Korxona Bekmetov Xushnud va uning 4 nafar farzandi bilan birga boshqarib kelinmoqda.",
      ],
    },
  ],
};

export const ourTeamDataRu = {
  header: {
    title: "НАША КОМАНДА",
    text: `В нашей компании созданы благоприятные условия для работы и отдыха наших сотрудников!`,
  },
  sectionTitle: "Образцы из процесса работы нашей команды",
  members: [
    {
      image: avatar1,
      firstName: "Бекметов",
      lastName: "Хушнуд",
      position: "Руководитель предприятия",
      description: [
        " - Учредитель предприятия Бекметов Хушнуд Отайонович, 1 января 1956 г.р.",
        " - В 1973-1978 годах окончил Ташкентский институт текстильной и легкой промышленности по специальности« Легкая промышленность и машиностроение ",
        " - 43 года занимал различные руководящие должности в государственных предприятиях",
        " Он начал свой бизнес в 1996 году",
        " - Обладатель знака 20-летия Независимости Республики Узбекистан",
        " - В Конкурсе инициатив 2014 года он прошел районный и областной этапы, участвовал в республиканском этапе и был награжден дипломом",
        " Компанией руководят Бекметов Хушнуд и его четверо детей",
      ],
    },
  ],
};

export const contactDataUz = {
  header: {
    title: "Aloqa",
    text: `Biz bilan bog'lanish uchun quyidagi ma'lumotlardan foydalanishingiz mumkin`,
  },
  adress: {
    title: "Bizning manzil:",
    text: "Xorazm viloyati, Xonqa tumani, Shiroq ko'chasi 60 - uy",
  },
  contact: {
    title: "Bizga yozing!",
    labels: [
      "Ismingiz",
      "Emailingiz",
      "Telefon raqamingiz",
      "Xabaringiz",
      "Jo'natish",
    ],
  },
};

export const contactDataRu = {
  header: {
    title: "Контакть",
    text: `Вы можете использовать следующую информацию, чтобы связаться с нами`,
  },
  adress: {
    title: "Наш адресс:",
    text: "Улица Ширак 60, Ханкинский район, Хорезмская область",
  },
  contact: {
    title: "Напишите нам!",
    labels: ["Имя", "Емаил", "Телефонный номер", "Сообщение", "Отправить"],
  },
};
