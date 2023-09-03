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

export const bestSellingProducts = [
  {
    id: 1,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/მაცივარი-REGAL-AG263W/REGAL-AG263W-1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/მაცივარი-REGAL-AG263W/REGAL-AG263W-2.webp"],
    discountRate: "20%",
    isDiscount: false,
    productName: "მაცივარი REGAL AG263W (1052) (213 L)",
    currentPrice: 599,
    oldPrice: 600,
    warranty: "3 წელი",
    alt: "REGAL",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "მაცივრები",
    descriptions: [
      {
        "ბრენდი": "REGAL",
        "მოდელი": "AG263W (1052)",
        "ტიპი": "მაცივარი",
        "თაროების მასალა მაცივარში": "მინა",
        "გაგრილების ტიპი": "De-Frost",
        "მთლიანი მოცულობა": "213ლ",
        "ენერგოეფექტურობის კლასი": "A+",
        "კონტროლი": "ელექტრონული",
        "ტემპერატურის რეგულირება": "კი",
        "კარების რაოდენობა": "2",
        "საყინულე განყოფილების ადგილმდებარეობა": "ზედა ნაწილში",
        "განათება": "კი",
        "ზომები (სიგანე x სიღრმეx სიმაღლე)": "55*55*145სმ",
        "ფერი": "თეთრი"
      }
    ]
    
  },
  {
    id: 2,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/ნახევრად-მშრალი-მაცივარი-MIDEA-MDRD142SLF30/MIDEA-MDRD142SLF30-1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/ნახევრად-მშრალი-მაცივარი-MIDEA-MDRD142SLF30/MIDEA-MDRD142SLF30-2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/ნახევრად-მშრალი-მაცივარი-MIDEA-MDRD142SLF30/MIDEA-MDRD142SLF30-3.webp"],
    discountRate: "20%",
    isDiscount: false,
    productName: "ნახევრად მშრალი მაცივარი MIDEA MDRD142SLF30 (93 L)",
    currentPrice: 399,
    oldPrice: 600,
    warranty: "3 წელი",
    alt: "MIDEA",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "მაცივრები",
    descriptions: [
      {
        "ბრენდი": "MIDEA",
        "მოდელი": "MDRD142SLF30 ",
        "ტიპი": "ერთკამერიანი",
        "პროდუქციის ტიპი": "ნახევრად მშრალი",
        "საერთო მოცულობა": "93ლ",
        "ენერგომოხმარების კლასი": "A+",
        "ძაბვა": "220V-240V/50Hz",
        "ხმაურის დონე": "41dB",
        "კარის მასალა": "რკინა",
        "ბოსტნეულის განყოფილება": "1",
        "თაროების რაოდენობა": "2",
        "საყინულის მდებარეობა": "ზედა",
        "ფერი": "შავი",
        "ზომა": "47/44/85სმ",
        "გარანტია": "3 წელი"
      }
    ]
    
  },
  {
    id: 3,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/მაცივარი-MIDEA-MDRT294FGF01-(207-L)/MIDEA-MDRT294FGF01-1.png", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/მაცივარი-MIDEA-MDRT294FGF01-(207-L)/MIDEA-MDRT294FGF01-2.png", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/მაცივარი-MIDEA-MDRT294FGF01-(207-L)/MIDEA-MDRT294FGF01-3.png"],
    discountRate: "20%",
    isDiscount: false,
    productName: "მაცივარი MIDEA MDRT294FGF01 (207 L)",
    currentPrice: 639,
    oldPrice: 600,
    warranty: "3 წელი",
    alt: "MIDEA",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "მაცივრები",
    descriptions: [
      {
        "ბრენდი": "MIDEA",
        "მოდელი": "MDRT294FGF01",
        "კლიმატის კლასი": "N-ST",
        "გალღობის ტიპი": "ნახევრად მშრალი",
        "მთლიანი მოცულობა": "207ლ",
        "მაცივრის მოცულობა": "166ლ",
        "საყინულე ტევადობა": "41ლ",
        "თაროების მასალა": "მინა",
        "ენერგოეფექტურობის კლასი": "A+",
        "წონა": "40კგ",
        "სიგანე": "550მმ",
        "სიმაღლე": "1430მმ",
        "სიღრმე": "550მმ",
        "პროდუქტის ფერი": "თეთრი"
      }
    ]
    
  },
  {
    id: 4,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/ორკამერიანი-მაცივარი-MDRT294FGF02-(204-L)/MIDEA-MDRT294FGF02-1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/ორკამერიანი-მაცივარი-MDRT294FGF02-(204-L)/MIDEA-MDRT294FGF02-2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/მაცივრები/ორკამერიანი-მაცივარი-MDRT294FGF02-(204-L)/MIDEA-MDRT294FGF02-3.webp",],
    discountRate: "20%",
    isDiscount: false,
    productName: "ორკამერიანი მაცივარი MDRT294FGF02 (204 L)",
    currentPrice: 669,
    oldPrice: 600,
    warranty: "3 წელი",
    alt: "MIDEA",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "მაცივრები",
    descriptions: [
      {
        "ბრენდი": "MIDEA",
        "მოდელი": "MDRT294FGF02",
        "კლიმატის კლასი": "N-ST",
        "მთლიანი მოცულობა": "207ლ",
        "მაცივრის მოცულობა": "166ლ",
        "საყინულე ტევადობა": "41ლ",
        "თაროების მასალა": "მინა",
        "ენერგოეფექტურობის კლასი": "A+",
        "წონა": "40კგ",
        "სიგანე": "550მმ",
        "სიმაღლე": "1430მმ",
        "სიღრმე": "550მმ",
        "პროდუქტის ფერი": "ვერცხლისფერი"
      }
    ]
    
  },
  {
    id: 5,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2E-LED-32-HD-32A06K-Smart-Android-Black/32A06K-1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2E-LED-32-HD-32A06K-Smart-Android-Black/32A06K-2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2E-LED-32-HD-32A06K-Smart-Android-Black/32A06K-3.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2E-LED-32-HD-32A06K-Smart-Android-Black/32A06K-4.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2E-LED-32-HD-32A06K-Smart-Android-Black/32A06K-5.webp"],
    discountRate: "20%",
    isDiscount: false,
    productName: "ტელევიზორი 2E LED 32 HD 32A06K Smart Android Black",
    currentPrice: 380,
    oldPrice: 600,
    warranty: "1 წელი",
    alt: "2E",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "ტელევიზორები",
    descriptions: [
      {
        "ბრენდი": "2E",
        "მოდელი": "2E-32A06K",
        "ეკრანის ზომა": "32'",
        "Smart TV": "კი",
        "ანდროიდ TV": "კი",
        "Curved მოხრილი ეკრანი": "არა",
        "გაფართოება": "1366x768 HD ready",
        "ფერი": "შავი",
        "პროდუქტის ტიპი": "სმარტ ტელევიზორი",
        "მატრიცის ტიპი": "LED",
        "ეკრანის დიაგონალი": "32' (80 სმ)",
        "ოპერაციული სისტემა": "Android 11.0",
        "გარჩევადობა": "HD (1366x768)",
        "სიკაშკაშე": "250 cd/m2",
        "სიხშირე": "50 Hz",
        "ენერგიის მოხმარება": "60 W",
        "ეკრანის ხედვის კუთხეები": "178/178°",
        "Wi-Fi": "დიახ 802.11 b/g/n",
        "LAN":"დიახ",
        "ოპერაციული მეხსიერება": "1გბ",
        "CI სლოტი": "დიახ",
        "მხარდაჭერილი ფორმატები": "JPEG, MP3"
      }
    ]
    
  },
  {
    id: 6,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-43-FHD-43A06K-Smart-Android-Black/43A06K-1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-43-FHD-43A06K-Smart-Android-Black/43A06K-2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-43-FHD-43A06K-Smart-Android-Black/43A06K-3.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-43-FHD-43A06K-Smart-Android-Black/43A06K-4.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-43-FHD-43A06K-Smart-Android-Black/43A06K-5.webp"],
    discountRate: "20%",
    isDiscount: false,
    productName: "ტელევიზორი 2Е TV LED 43 FHD 43A06K Smart Android Black",
    currentPrice: 540,
    oldPrice: 600,
    warranty: "1 წელი",
    alt: "2E",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "ტელევიზორები",
    descriptions: [
      {
        "ბრენდი": "2E",
        "მოდელი": "43A06K",
        "გაფართოება": "Full HD (1920 × 1080)",
        "სიხშირე": "55 Hz",
        "Smart TV": "დიახ",
        "მოხრილი ეკრანი": "არა",
        "თამაშის რეჟიმი": "დიახ",
        "ეკრანის დიაგონალი": "43'",
        "გამოშვების ქვეყანა": "ჩინეთი",
        "პორტები": "3xHDMI 1.4, 2xUSB 2.0",
        "ძილის ტაიმერი": "დიახ",
        "ზომა (სადგამით)": "97.2 х 61.1х 21.2 სმ",
        "ზომა სადგამის გარეშე":"97.2 x 56.6 x 9.4 სმ",
        "ოპერაციული სისტემა":"Android",
        "პიქსელის რეაგირების დრო":"8 ms",
        "ყურსასმენის ინტერფეისი":"დიახ",
      }
    ]
    
  },
  {
    id: 7,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-50-4K-50A06K-Smart-Android-Black/50A06K-1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-50-4K-50A06K-Smart-Android-Black/50A06K-2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-50-4K-50A06K-Smart-Android-Black/50A06K-3.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-50-4K-50A06K-Smart-Android-Black/50A06K-4.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-50-4K-50A06K-Smart-Android-Black/50A06K-5.webp",],
    discountRate: "20%",
    isDiscount: false,
    productName: "ტელევიზორი 2Е TV LED 50 4K 50A06K Smart Android Black",
    currentPrice: 780,
    oldPrice: 600,
    warranty: "1 წელი",
    alt: "2E",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "ტელევიზორები",
    descriptions: [
      {
        "ძაბვა":"220-240 V",
        "სიხშირე":"50 Hz",
        "ეკრანის დიაგონალი":"50(127სმ)",
        "ეკრანის გაფართოება":"3840 x 2160 (4K)",
        "ტიპი":"Smart Android TV",
        "ტიპი":"Direct LED",
        "სიკაშკაშე":"250 cd/m2",
        "რეაგირების დრო":"8",
        "HDR მხარდაჭერა": "დიახ",
        "ოპერაციული მეხსიერება":"1,5 GB",
        "WI-FI":"802.11 b/g/n",
        "ხმაურის ჩამხშობი": "დიახ",
        "SMART":"კი",
        "დისტანციური მართვა": "დიახ",
        "ფერი":"შავი",
        "წონა": "10.3 კგ",
        "ზომა (სადგამით)":"1131 х 721 х 254 სმ",
        "ზომა (სადგამის გარეშე)":"1131 x 659 x 92.7 სმ"
      }
    ]
    
  },
  {
    id: 8,
    productImage: ["../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-55-4K-55A06L-Smart-Android-Black/55A06L-1.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-55-4K-55A06L-Smart-Android-Black/55A06L-2.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-55-4K-55A06L-Smart-Android-Black/55A06L-3.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-55-4K-55A06L-Smart-Android-Black/55A06L-4.webp", "../assets/images/მსხვილი-საყოფაცხოვრებო-ტექნიკა/ტელევიზორები/ტელევიზორი-2Е-TV-LED-55-4K-55A06L-Smart-Android-Black/55A06L-5.webp",],
    discountRate: "20%",
    isDiscount: false,
    productName: "ტელევიზორი 2Е TV LED 55 4K 55A06L Smart Android Black",
    currentPrice: 880,
    oldPrice: 600,
    warranty: "1 წელი",
    alt: "2E",
    isInWishlist: false,
    categoryName: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategoryName: "ტელევიზორები",
    descriptions: [
      {
        "ძაბვა":"220-240 V",
        "სიხშირე":"50 Hz",
        "ეკრანის დიაგონალი":"55(140სმ)",
        "ეკრანის გაფართოება":"3840 x 2160 (4K)",
        "ტიპი":"Smart Android TV",
        "ტიპი":"Direct LED",
        "სიკაშკაშე":"250 cd/m2",
        "რეაგირების დრო":"8",
        "HDR მხარდაჭერა": "დიახ",
        "ოპერაციული მეხსიერება":"1,5 GB",
        "WI-FI":"802.11 b/g/n",
        "ხმაურის ჩამხშობი": "დიახ",
        "SMART":"კი",
        "დისტანციური მართვა": "დიახ",
        "ფერი":"შავი",
        "წონა": "13.65 კგ",
        "ზომა (სადგამით)":"1244 х 821 х 254 სმ",
        "ზომა (სადგამის გარეშე)":"1244 x 760 x 92.5 სმ"
      }
    ]
    
  },
  
];
