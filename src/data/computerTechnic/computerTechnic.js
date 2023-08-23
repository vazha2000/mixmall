import { v4 as uuidv4 } from 'uuid';

let productIdCounter = 1;

const generateProductId = () => {
  return productIdCounter++;
};

export const computerTechnic = [
  {
    id: uuidv4(),
    name: "პერსონალური კომპიუტერები",
    subcategoryName: "1",
    products: [
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: true,
        productName: "Asuss Gaming PC",
        currentPrice: 500,
        oldPrice: 600,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
        
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "MSIi Gaming PC",
        currentPrice: 700,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Delll Gaming PC",
        currentPrice: 900,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Palit Gaming PC",
        currentPrice: 90000,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "asuss Gaming PC",
        currentPrice: 800,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "nokiaa Gaming PC",
        currentPrice: 5000,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "asuss Gaming PC",
        currentPrice: 4890,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Alienwaree Gaming PC",
        currentPrice: 2390,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "asuss Gaming PC",
        currentPrice: 7390,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "asuss Gaming PC",
        currentPrice: 1660,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "asuss Gaming PC",
        currentPrice: 1990,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "asuss Gaming PC",
        currentPrice: 2250,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
    ]
  },
  {
    id: uuidv4(),
    name: "ALL-IN-ONE კომპიუტერები",
    subcategoryName: "2",
    products: [
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "asuss ALL IN ONE",
        currentPrice: 360,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Asuss ALL IN ONE",
        currentPrice: 460,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Ryzenn ALL IN ONE",
        currentPrice: 760,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Intell ALL IN ONE",
        currentPrice: 550,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
    ]
  },
  {
    id: uuidv4(),
    name: "ლეპტოპები",
    subcategoryName: "3",
    products: [
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "MSIi Laptop",
        currentPrice: 400,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Asuss Laptop",
        currentPrice: 1200,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Nokiaa Laptop",
        currentPrice: 790,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Samsungg Laptop",
        currentPrice: 460,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
    ]
  },
  {
    id: uuidv4(),
    name: "პლანშეტები",
    subcategoryName: "4",
    products: [
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Applee ipad",
        currentPrice: 900,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "2Ee ipad",
        currentPrice: 8880,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "EVGAa ipad",
        currentPrice: 300,
        oldPrice: 350,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Zotacc ipad",
        currentPrice: 1100,
        oldPrice: 1300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
    ]
  },
  {
    id: uuidv4(),
    name: "მონიტორები",
    subcategoryName: "5",
    products: [
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "2Ee Monitor",
        currentPrice: 499,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "AMDd Monitor",
        currentPrice: 800,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "XFXx Monitor",
        currentPrice: 400,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
      {
        id: generateProductId(),
        productImage: ["../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/brilliant.png", "../assets/images/computerTechnic/orange.png", "../assets/images/computerTechnic/orange.png"],
        discountRate: "20%",
        isDiscount: false,
        productName: "Samsungg Monitor",
        currentPrice: 900,
        oldPrice: 300,
        alt: "test",
        isInWishlist: false,
        descriptions: [
          {
            "weight": "200g",
            "screen size": "1080p",
            "color": "yellow",
            "length": "50m",
            "width": "3000cm",
            "cpu": "i9-9900k",
            "brand": "intel"
          }
        ]
      },
    ]
  },
]

