import chickenLeg from "../assets/icons/chicken_leg.png";
import cutOfMeat from "../assets/icons/cut-of-meat.png";
import frenchFries from "../assets/icons/french-fries.png";
import greenSalad from "../assets/icons/green-salad.png";
import hamburger from "../assets/icons/hamburger.png";
import hotDog from "../assets/icons/hot-dog.png";
import meat from "../assets/icons/meat.png";
import pizza from "../assets/icons/pizza.png";
import potOfFood from "../assets/icons/pot-of-food.png";
import sandwich from "../assets/icons/sandwich.png";
import spaghetti from "../assets/icons/spaghetti.png";
import stuffedFlatbread from "../assets/icons/stuffed-flatbread.png";
import taco from "../assets/icons/taco.png";

export const ProductsInfo = [
  {
    name: "Pollo",
    src: chickenLeg,
    altName: "Alitas de pollo",
    description:
      "Alas de pollo rebozadas en pan rallado con mostaza y con mayonesa casera Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    price: 1250,
    category: "Pollo",
  },
  {
    name: "Hot Dog",
    src: hotDog,
    altName: "Hot Dog Aleman",
    description:
      "Salchicha alemana en pan de viena, mayonesa, mostaza, ketchup, cebolla caramelizada y acompañado de papas fritas, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    price: 2244,
    category: "Sandwich",
  },
  {
    name: "Hamburg...",
    src: hamburger,
    altName: "Mega cuarto bacon",
    description:
      "Mega hamburguesa de carne, queso cheddar, bacon, mostaza y ketchup acompañadas de papas fritas regulares, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    price: 1200,
    category: "Burger",
  },
  {
    name: "Pizza",
    src: pizza,
    altName: "Pizza de pepperoni",
    description:
      "Pizza de masa madre con mozzarella, pepperonis frescos con oregano, al horno de barro. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    price: 2244,
    category: "Pizza",
  },
  {
    name: "Trozo de C...",
    src: cutOfMeat,
    altName: "Bifes a la criolla",
    description:
      " filetes de carne, cocidos en una salsa rica y sabrosa conocida como salsa criolla. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    price: 2244,
    category: "Meat",
  },
  {
    name: "Papas Fritas",
    src: frenchFries,
    altName: "Porcion de papas fritas",
    description:
      "Delgados bastones de papa, crujientes por fuera y tiernas por dentro, cocinadas en aceite caliente",
    price: 1200,
    category: "Fries",
  },
  {
    name: "Ensalada",
    src: greenSalad,
    altName: "Ensalada Caesar",
    description:
      "Mezcla de lechuga romana, crutones, queso parmesano, aderezo Caesar y, a veces, pollo.",
    price: 1250,
    category: "Salad",
  },

  {
    name: "Carne",
    src: meat,
    altName: "Carne Asada",
    description:
      "Trozos de carne sazonada y a la parrilla, tradicional de la cocina latinoamericana.",
    price: 2244,
    category: "Meat",
  },

  {
    name: "Sopa",
    src: potOfFood,
    altName: "Sopa de fideos",
    description:
      "Plato cocido a fuego lento con carne, vegetales y fideos, sabores integrados y reconfortantes.",
    price: 1250,
    category: "Soup",
  },
  {
    name: "Sandwich",
    src: sandwich,
    altName: "Sandwich de J & Q",
    description:
      "Dos rebanadas de pan con jamón y queso entre ellas, lechuga, tomate y mayonesa, tostado a eleccion.",
    price: 1200,
    category: "Sandwich",
  },
  {
    name: "Spaghetti",
    src: spaghetti,
    altName: "Porcion de pasta spaghetti",
    description:
      " Pasta larga cocida al dente, servida con diversas salsas y acompañada a eleccion.",
    price: 1250,
    category: "Pasta",
  },
  {
    name: "Vegano",
    src: stuffedFlatbread,
    altName: "Hummus",
    description:
      " Dip vegano de garbanzos triturados, tahini, aceite de oliva, ajo, limón y especias. Acompañado de pan o verduras.",
    price: 2244,
    category: "Vegan",
  },
  {
    name: "Taco",
    src: taco,
    altName: "Tacos al pastor",
    description:
      " Finas rebanadas de carne de cerdo marinadas, asadas en trompo y servidas con cebolla y piña",
    price: 1250,
    category: "Meat",
  },
];

export const cartProducts = []

export const paymentUrl = {
    1: "/mercadopago",
    2: "/rating"
  }

export const categoryIcons = [
  chickenLeg,
  cutOfMeat,
  frenchFries,
  greenSalad,
  hamburger,
  hotDog,
  meat,
  pizza,
  potOfFood,
  sandwich,
  spaghetti,
  stuffedFlatbread,
  taco
];

export const idiomas = [
  { lang: "es", message: "Bienvenido", name: "español" },
  { lang: "en", message: "Welcome", name: "english" },
  { lang: "pt", message: "Bem-vindo", name: "português" },
  { lang: "fr", message: "Bienvenue", name: "français" },
  { lang: "it", message: "Benvenuto", name: "italiano" },
  { lang: "de", message: "Willkommen", name: "deutsch" },
  { lang: "af", message: "Welkom", name: "afrikaans" },
  { lang: "sq", message: "Mirë se vini", name: "shqip" },
  { lang: "am", message: "ደህና መጡ", name: "አማርኛ" },
  { lang: "ar", message: "مرحبًا", name: "العربية" },
  { lang: "hy", message: "Բարի գալուստ", name: "հայերեն" },
  { lang: "az", message: "Xoş gəlmisiniz", name: "azərbaycanca" },
  { lang: "eu", message: "Ongi etorri", name: "euskara" },
  { lang: "be", message: "Сардэчна запрашаем", name: "беларуская мова" },
  { lang: "bn", message: "স্বাগতম", name: "বাংলা" },
  { lang: "bs", message: "Dobrodošli", name: "bosanski jezik" },
  { lang: "bg", message: "Добре дошли", name: "български език" },
  { lang: "ca", message: "Benvingut", name: "català" },
  { lang: "ceb", message: "Mga bisita", name: "cebuano" },
  { lang: "zh-CHS", message: "欢迎", name: "中文 (简体)" },
  { lang: "zh-CHT", message: "歡迎", name: "中文 (繁體)" },
  { lang: "hr", message: "Dobrodošli", name: "hrvatski jezik" },
  { lang: "cs", message: "Vítejte", name: "čeština" },
  { lang: "da", message: "Velkommen", name: "dansk" },
  { lang: "nl", message: "Welkom", name: "Nederlands" },
  { lang: "eo", message: "Bonvenon", name: "esperanto" },
  { lang: "et", message: "Tere tulemast", name: "eesti keel" },
  { lang: "fi", message: "Tervetuloa", name: "suomi" },
  { lang: "fy", message: "Wolkom", name: "friisisk" },
  { lang: "gl", message: "Benvido", name: "galego" },
  { lang: "ka", message: "स्वागत", name: "ქართული" },
  { lang: "el", message: "Καλώς ήρθατε", name: "ελληνικά" },
  { lang: "gu", message: "સ્વાગત છે", name: "ગુજરાતી" },
  { lang: "ht", message: "Byenvenue", name: "kreyòl ayisyen" },
  { lang: "ha", message: "Barka da zuwa", name: "hausa" },
  { lang: "he", message: "ברוכים הבאים", name: "עברית" },
  { lang: "hi", message: "स्वागत है", name: "हिंदी" },
  { lang: "hu", message: "Üdvözöljük", name: "magyar" },
  { lang: "is", message: "Velkomin", name: "íslenska" },
  { lang: "ig", message: "Karibu", name: "igbo" },
  { lang: "id", message: "Selamat datang", name: "bahasa Indonesia" },
  { lang: "ga", message: "Fáilte", name: "Gaeilge" },
  { lang: "ja", message: "ようこそ", name: "日本語" },
  { lang: "jw", message: "ברוכים הבאים", name: "עברית" },
  { lang: "kn", message: "ಸ್ವಾಗತ", name: "ಕನ್ನಡ" },
  { lang: "kk", message: "Қош келдіңіз", name: "Қазақ тілі" },
  { lang: "km", message: "សូមស្វាគមន៍", name: "ភាសាខ្មែរ" },
  { lang: "ko", message: "환영합니다", name: "한국어" },
  { lang: "ku", message: "Welate", name: "kurdî" },
  { lang: "ky", message: "Кош келиңиз", name: "кыргыз тили" },
  { lang: "lo", message: "ສະບາຍດີ", name: "ລາວ" },
  { lang: "la", message: "Salve", name: "latine" },
  { lang: "lv", message: "Laipni lūdzam", name: "latviešu valoda" },
  { lang: "lt", message: "Sveiki atvykę", name: "lietuvių kalba" },
  { lang: "lb", message: "Wëllkomm", name: "Luxembourgish" },
  { lang: "mk", message: "Добродојде", name: "македонски јазик" },
  { lang: "mg", message: "Tonga soa", name: "malagasy" },
  { lang: "ms", message: "Selamat datang", name: "bahasa Melayu" },
  { lang: "ml", message: "സ്വാഗതം", name: "മലയാളം" },
  { lang: "mt", message: "Merħba", name: "Malti" },
  { lang: "mi", message: "Haere mai", name: "te reo Māori" },
  { lang: "mr", message: "स्वागत", name: "मराठी" },
  { lang: "mn", message: "Тавтай морилно", name: "монгол хэл" },
  { lang: "my", message: "ကြိုဆိုပါသည်", name: "မြန်မာစာ" },
  { lang: "ne", message: "स्वागत छ |", name: "नेपाली" },
  { lang: "no", message: "Velkommen", name: "norsk" },
  { lang: "pa", message: "ਖੁਸ਼ਆਮਦ", name: "پښتو" },
  { lang: "fa", message: "خوش آمدید", name: "فارسی" },
  { lang: "pl", message: "Witamy", name: "język polski" },
  { lang: "ro", message: "Bine ați venit", name: "română" },
  { lang: "ru", message: "Добро пожаловать", name: "русский язык" },
  { lang: "sr", message: "Добродошли", name: "srpski jezik" },
  { lang: "si", message: "සාදරයෙන් පිළිගනිමු", name: "සිංහල" },
  { lang: "sk", message: "Vitajte", name: "slovenčina" },
  { lang: "sl", message: "Dobrodošli", name: "slovenščina" },
  { lang: "so", message: "Soomaaliyanu soo dhawoow", name: "somali" },
  { lang: "su", message: "Sugeng rawuh", name: "Basa Sunda" },
  { lang: "sw", message: "Karibu", name: "swahili" },
  { lang: "sv", message: "Välkommen", name: "svenska" },
  { lang: "tg", message: "Марҳамат", name: "тоҷикӣ" },
  { lang: "ta", message: "வரவேற்கிறேன்", name: "தமிழ்" },
  { lang: "te", message: "స్వాగతం", name: "తెలుగు" },
  { lang: "th", message: "สวัสดี", name: "ภาษาไทย" },
  { lang: "tr", message: "Hoşgeldiniz", name: "Türkçe" },
  { lang: "uk", message: "Ласкаво просимо", name: "Українська мова" },
  { lang: "ur", message: "خوش آمدید", name: "اردو" },
  { lang: "uz", message: "Xush kelibsiz", name: "O'zbekcha" },
  { lang: "vi", message: "Chào mừng", name: "Tiếng Việt" },
  { lang: "xh", message: "Wamkela", name: "isiXhosa" },
  { lang: "yi", message: "וואָלקעמען", name: "יידיש" },
  { lang: "yo", message: "Kí í wá", name: "yoruba" },
  { lang: "zu", message: "Wamkeleki", name: "isiZulu" },
];