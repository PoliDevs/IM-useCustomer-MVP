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