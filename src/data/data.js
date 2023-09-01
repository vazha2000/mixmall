import { childrenInventory } from "./childrenInventory/childrenInventory";
import { computerTechnic } from "./computerTechnic/computerTechnic";
import { hobbies } from "./hobbies/hobbies";
import { hvac } from "./hvac/hvac";
import { interiorFurniture } from "./interiorFurniture/interiorFurniture";
import { kitchenTechnic } from "./kitchenTechnic/kitchenTechnic";
import { majorAppliance } from "./majorAppliance/majorAppliance";
import { phones } from "./phones/phones";
import { selfcare } from "./selfcare/selfcare";
import { smallAppliance } from "./smallAppliance/smallAppliance";
import { tools } from "./tools/tools";
import { vehicles } from "./vehicles/vehicles";

export const categoriesListItems = [
  {
    id: 1,
    name: "კომპიუტერული ტექნიკა",
    categoryName: "computer&technic",
    subcategories: [
      ...computerTechnic
    ],
    svg: "assets/svg/CategoriesIcons/computer.svg",
    alt: "computer",
  },
  {
    id: 2,
    name: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    categoryName: "major&appliance",
    subcategories: [...majorAppliance],
    svg: "assets/svg/CategoriesIcons/washingmachine.svg",
    alt: "washingmachine",
  },
  {
    id: 3,
    name: "წვრილი საყოფაცხოვრებო ტექნიკა",
    categoryName: "small&appliance",
    subcategories: [...smallAppliance],
    svg: "assets/svg/CategoriesIcons/iron.svg",
    alt: "iron",
  },
  {
    id: 4,
    name: "ხელსაწყო ინსტრუმენტები",
    categoryName: "tools",
    subcategories: [...tools],
    svg: "assets/svg/CategoriesIcons/tools.svg",
    alt: "tools",
  },
  {
    id: 5,
    name: "მობილური ტელეფონები",
    categoryName: "mobile&phones",
    subcategories: [...phones],
    svg: "assets/svg/CategoriesIcons/mobile.svg",
    alt: "mobile",
  },
  {
    id: 6,
    name: "თავის მოვლის საშუალებები",
    categoryName: "selfcare",
    subcategories: [...selfcare],
    svg: "assets/svg/CategoriesIcons/selfcare.svg",
    alt: "self-care",
  },
  {
    id: 7,
    name: "ჰობი და გართობა",
    categoryName: "hobbies",
    subcategories: [...hobbies],
    svg: "assets/svg/CategoriesIcons/sports.svg",
    alt: "sports",
  },
  {
    id: 8,
    name: "გათბობა და გაგრილება",
    categoryName: "hvac",
    subcategories: [...hvac],
    svg: "assets/svg/CategoriesIcons/conditioner.svg",
    alt: "air conditioner",
  },
  {
    id: 9,
    name: "საბავშვო ინვენტარი",
    categoryName: "children&inventory",
    subcategories: [...childrenInventory],
    svg: "assets/svg/CategoriesIcons/toys.svg",
    alt: "toys",
  },
  {
    id: 10,
    name: "სამზარეულოს ტექნიკა",
    categoryName: "kitchen&technic",
    subcategories: [...kitchenTechnic],
    svg: "assets/svg/CategoriesIcons//kitchen.svg",
    alt: "kitchen",
  },
  {
    id: 11,
    name: "ინტერიერი და ავეჯი",
    categoryName: "interior&furniture",
    subcategories: [...interiorFurniture],
    svg: "assets/svg/CategoriesIcons/furniture.svg",
    alt: "furniture",
  },
  {
    id: 12,
    name: "ავტომობილების განყოფილება",
    categoryName: "vehicles",
    subcategories: [...vehicles],
    svg: "assets/svg/CategoriesIcons/car.svg",
    alt: "car",
  },
];

// console.log(categoriesListItems[0])

export const testProducts = [
  {
    id: 1,
    productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
    discountRate: "20%",
    isDiscount: false,
    productName: "მანქანის კატალიზატორი და კიდევ მრავალი სხვა",
    currentPrice: 260,
    oldPrice: 300,
    alt: "test",
  },
  {
    id: 2,
    productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
    discountRate: "40%",
    isDiscount: true,
    productName: "მიკრო ტალღური ღუმელი",
    currentPrice: 260,
    oldPrice: 300,
    alt: "test",
  },
  {
    id: 3,
    productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
    discountRate: "10%",
    isDiscount: false,
    productName: "გეიმინგ მონიტორის დამჭერი ",
    currentPrice: 260,
    oldPrice: 300,
    alt: "test",
  },
  {
    id: 4,
    productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
    discountRate: "900%",
    isDiscount: false,
    productName: "გასაბერი აუზი",
    currentPrice: 260,
    oldPrice: 300,
    alt: "test",
  },
  {
    id: 5,
    productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: 260,
    oldPrice: 300,
    alt: "test",
  },
  {
    id: 5,
    productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: 260,
    oldPrice: 300,
    alt: "test",
  },
  {
    id: 7,
    productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: 260,
    oldPrice: 300,
    alt: "test",
  },
  {
    id: 8,
    productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: 260,
    oldPrice: 300,
    alt: "test",
  },
];
