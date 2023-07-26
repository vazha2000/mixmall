import { computerTechnic } from "./computerTechnic/computerTechnic";

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
    subcategories: [
      "ჩასაშენებელი მაცივრები",
      "მაცივრები",
      "საყინულე მაცივრები",
      "აქსესუარები",
      "ჭურჭლის სარეცხი მანქანები",
      "გაზქურები",
      "მაგიდაზე დასადგამი ქურის ზედაპირები",
      "ტელევიზორები",
      "ჩასაშენებელი ღუმელები",
      "გამწოვები",
      "ორთქლის საწმენდი აპარატები",
      "საკერავი მანქანები",
      "ტანსაცმლისა და ფეხსაცმლის საშრობები",
      "ღვინის მაცივრები",
      "ჩასაშენებელი ქურის ზედაპირები",
      "სარეცხი მანქანები",
      "სარეცხი მანქანა საშრობით",
      "ელექტრო ღუმელები",
      "ჩასაშენებელი ელექტრო ღუმელები",
      "წყლის დისპენსერები",
    ],
    svg: "assets/svg/CategoriesIcons/washingmachine.svg",
    alt: "washingmachine",
  },
  {
    id: 3,
    name: "წვრილი საყოფაცხოვრებო ტექნიკა",
    categoryName: "small&appliance",
    subcategories: [
      "მტვერსასრუტი სველი წმენდით",
      "უსადენო მტვერსასრუტები",
      "რობოტი მტვერსასრუტები",
      "ხელის მტვერსასრუტი",
      "მტვერსასრუტები",
      "უთოები",
      "უთოს მაგიდები",
    ],
    svg: "assets/svg/CategoriesIcons/iron.svg",
    alt: "iron",
  },
  {
    id: 4,
    name: "ხელსაწყო ინსტრუმენტები",
    categoryName: "tools",
    subcategories: [
      "ქანჩის გასაღები",
      "წრიული ხერხები",
      "ბეწვა ხერხები",
      "დრელი-სახრახნისი",
      "დარტყმითი დრელები",
      "თარაზოები",
      "სახრახნისები",
      "საბურღები",
      "კუთხსახეხები",
      "ინსტრუმენტების ნაკრებები",
      "პერფერატორები",
      "ჩაქუჩები",
      "ინსტრუმენტის ჩანთები",
      "რკინის ხერხები",
      "საზომები",
    ],
    svg: "assets/svg/CategoriesIcons/tools.svg",
    alt: "tools",
  },
  {
    id: 5,
    name: "მობილური ტელეფონები",
    categoryName: "mobile&phones",
    subcategories: [
      "Apple",
      "Samsung",
      "Xiaomi",
      "Alcatel",
      "Techno",
      "Realme",
      "Blackview",
      "OnePlus",
      "Nokia",
      "TLC",
      "ZTE",
      "Honor",
      "Vivo",
      "Infinix",
      "Oppo",
    ],
    svg: "assets/svg/CategoriesIcons/mobile.svg",
    alt: "mobile",
  },
  {
    id: 6,
    name: "თავის მოვლის საშუალებები",
    categoryName: "selfcare",
    subcategories: [
      "ეპილატორები",
      "ფოტო ეპილატორები",
      "ფენები",
      "სავარცხლიანი ფენები",
      "თმის უთოები",
      "თმის სახვევები",
      "კერამიკული სავარცხლები",
      "შილაკის აპარატები",
      "წვერის საპარსები",
      "თმის საკრეჭები",
      "ტრიმერები",
      "სასწორები",
    ],
    svg: "assets/svg/CategoriesIcons/selfcare.svg",
    alt: "self-care",
  },
  {
    id: 7,
    name: "ჰობი და გართობა",
    categoryName: "hobbies",
    subcategories: [
      "ჰოვერბორდები",
      "საბავშვო ტრანსპორტი",
      "ველოსიპედები",
      "ველოსიპედის აქსესუარები",
      "ელექტრო სკუტერები",
      "ბინოკლები",
      "ტელესკოპები",
      "სალაშქრო ინვენტარი",
      "სახლის თამაშები",
      "ფანრები",
      "სათამაშო კონსოლები",
      "კონტროლერები",
      "ვიდეო თამაშები",
    ],
    svg: "assets/svg/CategoriesIcons/sports.svg",
    alt: "sports",
  },
  {
    id: 8,
    name: "გათბობა და გაგრილება",
    categoryName: "hvac",
    subcategories: [
      "კონდიციონერები",
      "ცენტრალური გათბობის ქვაბები",
      "ელექტრო გამათბობლები",
      "ვენტილატორები",
      "გაზის გამათბობლები",
      "ზეთის რადიატორები",
      "რადიატორები",
      "წყლის გამაცხელებლები",
      "გაერის დამატენიანებლები",
      "კონვექტორები",
      "გაზის წყლის გამაცხელებელი",
      "ჰაერის გამწმენდები",
      "გამაგრილებელი ზეთები",
    ],
    svg: "assets/svg/CategoriesIcons/conditioner.svg",
    alt: "air conditioner",
  },
  {
    id: 9,
    name: "საბავშვო ინვენტარი",
    categoryName: "children&inventory",
    subcategories: [
      "საბავშვო ეტლები",
      "სათამაშოები",
      "მანქანის სავარძლები",
      "მანეჟები",
      "ბატუტები",
      "საბავშვო ელექტრო მანქანები",
      "სკეიტბორდები",
      "ჭოჭინები",
      "ბავშვის აბაზანები",
      "საბავშვო საქანელები",
      "რადიო ძიძები",
      "ბავშვის საწოლები",
      "ბავშვის სათამაშოები",
      "საბავშვო თეთრეული",
      "საბავშვო ლეიბები",
      "საბავშვო კენგურუები",
      "ჯამპერები",
    ],
    svg: "assets/svg/CategoriesIcons/toys.svg",
    alt: "toys",
  },
  {
    id: 10,
    name: "სამზარეულოს ტექნიკა",
    categoryName: "kitchen&technic",
    subcategories: [
      "აერო გრილები",
      "ბლენდერები",
      "პურის საცხობები",
      "ჩოპერები",
      "ყავის კაფსულები",
      "ყავის საფქვავები",
      "ფრის აპარატები",
      "დეჰიდრატორი/ჩირის აპარატები",
      "სამზარეულოს კომბაინები",
      "გრილები",
      "ხელის ბლენდერები",
      "დამაქუცმაცებლები",
      "წვენსაწურები",
      "ჩაიდნები",
      "სამზარეულოს აქსესუარები",
      "ხორცის მანქანები",
      "მიკროტალღური ღუმელები",
      "რძის ამომყვანები",
      "მინი ღუმელები",
      "მიქსერები",
      "სულტი სახარშები",
      "მულტირობოტები",
      "სენდვიჩის აპარატები",
      "სასწორები",
      "სლაისერები",
      "ორთქლსახარშები",
      "ჩაის აპარატები",
      "ტოსტერები",
      "ვაკუუმის აპარატები",
      "ბლინის ტაფები",
      "ვაფლის ტაფები",
      "პოპკორნის აპარატები",
      "ტერმოსები",
      "ყავის აპარატები",
      "სამზარეულოს სასწორები",
    ],
    svg: "assets/svg/CategoriesIcons//kitchen.svg",
    alt: "kitchen",
  },
  {
    id: 11,
    name: "ინტერიერი და ავეჯი",
    categoryName: "interior&furniture",
    subcategories: [
      "ყავის მაგიდები",
      "ტელევიზორის მაგიდები",
      "დივნები",
      "სავარძლები",
      "მაგიდები",
      "სკამები",
      "ჭურჭლის კარადები",
      "კომოდები",
      "ტუმბოები",
      "პუფები",
      "მაღალი კომოდები",
      "საწოლები",
      "ბენჩები",
      "ტანსაცმლის კარადები",
      "სანათები",
      "სარკეები",
      "ხალიჩები",
      "ტელევიზორის მაგიდები",
      "წიგნის თაროები",
      "კედლის თაროები",
      "სააბაზანო კარადები",
      "ჟურნალის მაგიდები",
      "ფეხსაცმლის კარადები",
      "ჭაღები და სანათები",
    ],
    svg: "assets/svg/CategoriesIcons/furniture.svg",
    alt: "furniture",
  },
  {
    id: 12,
    name: "ავტომობილების განყოფილება",
    categoryName: "vehicles",
    subcategories: [
      "Bluetooth გარნიტურები",
      "მანქანის მაგნიტოფონები",
      "მანქანის მონიტორები",
      "ვიდეო რეგისტრატორები",
      "მანქანის მტვერსასრუტები",
      "ტელეფონის სამაგრები",
      "მანქანის დინამიკები",
      "აკუმულატორები",
      "აკუმულატორის დამტენები",
      "აკუმულატორის ტესტერები",
      "ავტომობილის დენის გარდამქმნელები",
      "FM მოდულატორები",
      "სანთებელას ადაპტორები",
      "ელექტრო ნასოსები",
      "ჰიდრავლიკური ამწეები",
      "წნევით სარეცხი აპარატები",
      "ავტომობილის სამაშველო ნაკრებები",
      "საბურავის წნევის საზომები",
      "კლემების დამაგრძელებლები",
      "ბოროსკოპები",
      "ავტომობილის სალონის საფენები",
      "ავტომობილის ზეთები",
      "ავტომობილის საბურავები",
      "ანტიფრიზები",
      "ავტომობილის არომატიზატორები",
      "ავტოქიმია",
      "ავტომობილის სხვა აქსესუარები",
      "ხმის გამაძლიერებლები",
    ],
    svg: "assets/svg/CategoriesIcons/car.svg",
    alt: "car",
  },
];

// console.log(categoriesListItems[0])

export const testProducts = [
  {
    id: 1,
    productImage: "assets/images/testImage.png",
    discountRate: "20%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: "$260",
    oldPrice: "$300",
    alt: "test",
  },
  {
    id: 2,
    productImage: "assets/images/testImage.png",
    discountRate: "40%",
    isDiscount: true,
    productName: "რამე სახელი",
    currentPrice: "$260",
    oldPrice: "$300",
    alt: "test",
  },
  {
    id: 3,
    productImage: "assets/images/testImage.png",
    discountRate: "10%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: "$260",
    oldPrice: "$300",
    alt: "test",
  },
  {
    id: 4,
    productImage: "assets/images/testImage.png",
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: "$260",
    oldPrice: "$300",
    alt: "test",
  },
  {
    id: 5,
    productImage: "assets/images/testImage.png",
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: "$260",
    oldPrice: "$300",
    alt: "test",
  },
  {
    id: 5,
    productImage: "assets/images/testImage.png",
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: "$260",
    oldPrice: "$300",
    alt: "test",
  },
  {
    id: 7,
    productImage: "assets/images/testImage.png",
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: "$260",
    oldPrice: "$300",
    alt: "test",
  },
  {
    id: 8,
    productImage: "assets/images/testImage.png",
    discountRate: "900%",
    isDiscount: false,
    productName: "რამე სახელი",
    currentPrice: "$260",
    oldPrice: "$300",
    alt: "test",
  },
];
