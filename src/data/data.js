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
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
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

export const saleProducts = [
  {
    id: 1,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-BLACK/AlneoMain.webp","../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-BLACK/Alneo1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-BLACK/Alneo2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-BLACK/Alneo3.webp"],
    discountRate: "20%",
    isDiscount: false,
    productName: "ჩასაშენებელი სამეული ALNEO BLACK",
    currentPrice: 760,
    oldPrice: 600,
    warranty: "3 წელი",
    alt: "Alneo",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "ჩასაშენებელი სამეული",
    descriptions: [
      {
        "გამწოვი":"ALNEO T9500 BLACK (01464) /60*30*13/",
        "პერფორმანსი": "600მ³",
        "გამწოვის ზომა": "60*30*13",
        "გაზქურის ზედაპირი:":"Alneo6064GB-(01552)",
        "გაზქურის ზომა": "60*51",
        "მინა": "დიახ",
        "თუჯის დასადგმელი":"დიახ",
        "გაზკონტროლი": "დიახ",
        "ჩასაშენებელი ღუმელი":"ALNEO A5010T (01633) ემალის დაფარვით",
        "პროგრამა": "6",
        "მექაინუკური მართვა": "დიახ"
      }
    ]
    
  },
  {
    id: 2,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-INOX-V1/AlneoInoxMain.webp","../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-INOX-V1/AlneoInox1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-INOX-V1/AlneoInox2.webp","../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-INOX-V1/AlneoInox3.webp",],
    discountRate: "20%",
    isDiscount: false,
    productName: "ჩასაშენებელი სამეული ALNEO INOX V1",
    currentPrice: 749,
    oldPrice: 600,
    warranty: "3 წელი",
    alt: "Alneo",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "ჩასაშენებელი სამეული",
    descriptions: [
      {
        "გამწოვი":"ALNEO ASLCF-2 INOX (01463)",
        "პერფორმანსი": "600მ³",
        "გამწოვის ზომა": "60*30*13",
        "გაზქურის ზედაპირი:":"Alneo6064 INOX-(01551)",
        "გაზქურის ზომა": "60*51",
        "უჟანგავი მეტალი": "დიახ",
        "თუჯის დასადგმელი": "დიახ",
        "გაზკონტროლი":"დიახ",
        "ფერი": "ვერცხლისფერი",
        "ჩასაშენებელი ღუმელი":"ALNEO A5010 inox (01634) ინოქსი", 
        "პროგრამა": "6",
        "მექანიკური მართვა":"დიახ"
      }
    ]
    
  },
  {
    id: 3,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-INOX-V2/AlneoInoxV2Main.webp","../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-INOX-V2/AlneoInoxV2-1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-INOX-V2/AlneoInoxV2-2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-ALNEO-INOX-V2/AlneoInoxV2-3.webp"],
    discountRate: "20%",
    isDiscount: false,
    productName: "ჩასაშენებელი სამეული ALNEO INOX V2",
    currentPrice: 749,
    oldPrice: 600,
    warranty: "3 წელი",
    alt: "Alneo",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "ჩასაშენებელი სამეული",
    descriptions: [
      {
        "გამწოვი":"ALNEO T9500 Inox (01465)",
        "პერფორმანსი": "600მ³",
        "გამწოვის ზომა": "60*30*13",
        "გამწოვის ფერი": "ვერცხლისფერი",
        "გაზქურის ზედაპირი:":"Alneo6064 INOX-(01551)",
        "გაზქურის ზომა": "60*51",
        "უჟანგავი მეტალი": "დიახ",
        "თუჯის დასადგმელი": "დიახ",
        "გაზკონტროლი":"დიახ",
        "ფერი": "ვერცხლისფერი",
        "ჩასაშენებელი ღუმელი":"ALNEO A5010 inox (01634) ინოქსი", 
        "პროგრამა": "6",
        "მექანიკური მართვა":"დიახ"
      }
    ]
    
  },
  {
    id: 4,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-SILVERLINE-INOX/SilverlineInoxMain.webp","../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-SILVERLINE-INOX/SilverlineInox1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-SILVERLINE-INOX/SilverlineInox2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ჩასაშენებელი სამეული/ჩასაშენებელი-სამეული-SILVERLINE-INOX/SilverlineInox3.webp"],
    discountRate: "20%",
    isDiscount: false,
    productName: "ჩასაშენებელი-სამეული-SILVERLINE-INOX",
    currentPrice: 1179,
    oldPrice: 600,
    warranty: "3 წელი",
    alt: "Silverline",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "ჩასაშენებელი სამეული",
    descriptions: [
      {
        "გამწოვი":"Silverline 1144.5 Inox(03495)",
        "პერფორმანსი": "1000მ³",
        "გამწოვის ზომა": "60*30*21.5",
        "გამწოვის ფერი": "ვერცხლისფერი",
        "გაზქურის ზედაპირი:":"Silverline as5472x02(04018)ინოქსი",
        "სამი გაზი + 1 დენი": "დიახ",
        "ორმაგი წვა": "დიახ",
        "თუჯის სადგამი": "დიახ",
        "გაზკონტროლი": "დიახ",
        "ჩასაშენებელი ღუმელი":"Silverline BO6502X02 (045228)", 
        "პროგრამა": "6",
        "ერთდროული წვა":"დიახ",
        "კონვექცია": "დიახ",
        "ღუმელის ზომა": "60სმ",
        "გალღობა": "დიახ",
        "ტაიმერი": "დიახ",
        "გრილი": "დიახ",
        "ფერი": "ვერცხლისფერი",
      }
    ]
    
  },
];
