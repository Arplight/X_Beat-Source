const productsData = [
  {
    id: 1,
    tag: "hero-product",
    tagline: "Keep the noise out, or in. You choose.",
    heroImage: "images/jbl660nc-1.png",
    images: [
      "images/jbl660nc-1.png",
      "images/jbl660nc-2.png",
      "images/jbl660nc-3.png",
      "images/jbl660nc-4.png",
    ],
    brand: "JBL",
    title: "JBL Live 660NC",
    info: "Wireless Over-Ear NC Headphones",
    category: "Headphones",
    type: "Over Ear",
    connectivity: "Wireless",
    finalPrice: 999,
    originalPrice: 1499,
    quantity: 1,
    ratings: 1234,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 2,
    tag: "featured-product",
    images: [
      "images/boat518-1.png",
      "images/boat518-2.png",
      "images/boat518-3.png",
      "images/boat518-4.png",
    ],
    brand: "boAt",
    title: "boAt Rockerz 518",
    info: "On-Ear Wireless Headphones",
    category: "Headphones",
    type: "On Ear",
    connectivity: "Wireless",
    finalPrice: 1299,
    originalPrice: 3990,
    quantity: 1,
    ratings: 1321,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 3,
    tag: "hero-product",
    tagline: "Featherweight for comfort all-day.",
    heroImage: "images/boat131-3.png",
    images: [
      "images/boat131-1.png",
      "images/boat131-2.png",
      "images/boat131-3.png",
      "images/boat131-4.png",
    ],
    brand: "boAt",
    title: "boAt Airdopes 131",
    info: "Wireless In-Ear Earbuds",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    finalPrice: 1099,
    originalPrice: 2990,
    quantity: 1,
    ratings: 1244,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 4,
    images: [
      "images/boat110-1.png",
      "images/boat110-2.png",
      "images/boat110-3.png",
      "images/boat110-4.png",
    ],
    brand: "boAt",
    title: "boAt BassHeads 110",
    info: "In-Ear Wired Earphones",
    category: "Earphones",
    type: "In Ear",
    connectivity: "Wired",
    finalPrice: 449,
    originalPrice: 999,
    quantity: 1,
    ratings: 556,
    rateCount: 4,
    path: "/product-details/",
  },
  {
    id: 5,
    images: [
      "images/boat410-1.png",
      "images/boat410-2.png",
      "images/boat410-3.png",
      "images/boat410-4.png",
    ],
    brand: "boAt",
    title: "boAt Rockerz 410",
    info: "Bluetooth & Wired On-Ear Headphones",
    category: "Headphones",
    type: "On Ear",
    connectivity: "Bluetooth & Wired",
    finalPrice: 1599,
    originalPrice: 2990,
    quantity: 1,
    ratings: 1563,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 6,
    images: [
      "images/jbl200bt-1.png",
      "images/jbl200bt-2.png",
      "images/jbl200bt-3.png",
      "images/jbl200bt-4.png",
    ],
    brand: "JBL",
    title: "JBL Live 200BT",
    info: "In-Ear Wireless Neckbands",
    category: "Neckbands",
    type: "In Ear",
    connectivity: "Wireless",
    finalPrice: 2699,
    originalPrice: 3299,
    quantity: 1,
    ratings: 836,
    rateCount: 4,
    path: "/product-details/",
  },
  {
    id: 7,
    tag: "hero-product",
    tagline: "Give your favourite music a boost.",
    heroImage: "images/sonyXb910n-1.png",
    images: [
      "images/sonyXb910n-1.png",
      "images/sonyXb910n-2.png",
      "images/sonyXb910n-3.png",
      "images/sonyXb910n-4.png",
    ],
    brand: "Sony",
    title: "Sony WH-XB910N",
    info: "Wireless Over-Ear Headphones",
    category: "Headphones",
    type: "Over Ear",
    connectivity: "Wireless",
    finalPrice: 1389,
    originalPrice: 1990,
    quantity: 1,
    ratings: 679,
    rateCount: 4,
    path: "/product-details/",
  },
  {
    id: 8,
    tag: "featured-product",
    images: [
      "images/jbl760nc-1.png",
      "images/jbl760nc-2.png",
      "images/jbl760nc-3.png",
      "images/jbl760nc-4.png",
    ],
    brand: "JBL",
    title: "JBL Tune 760NC",
    info: "Wireless Over-Ear NC Headphones",
    category: "Headphones",
    type: "Over Ear",
    connectivity: "Wireless",
    finalPrice: 1999,
    originalPrice: 2999,
    quantity: 1,
    ratings: 755,
    rateCount: 4,
    path: "/product-details/",
  },
  {
    id: 9,
    tag: "featured-product",
    images: [
      "images/boat255r-1.png",
      "images/boat255r-2.png",
      "images/boat255r-3.png",
      "images/boat255r-4.png",
    ],
    brand: "boAt",
    title: "boAt Rockerz 255",
    info: "In-Ear Wireless Neckbands",
    category: "Neckbands",
    type: "In Ear",
    connectivity: "Wireless",
    finalPrice: 899,
    originalPrice: 2990,
    quantity: 1,
    ratings: 1464,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 10,
    images: [
      "images/jbl100-1.png",
      "images/jbl100-2.png",
      "images/jbl100-3.png",
      "images/jbl100-4.png",
    ],
    brand: "JBL",
    title: "JBL Wave 100",
    info: "In-Ear Truly Wireless Earbuds",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    finalPrice: 2999,
    originalPrice: 3999,
    quantity: 1,
    ratings: 801,
    rateCount: 4,
    path: "/product-details/",
  },
  {
    id: 11,
    images: [
      "images/sony1000xm4-1.png",
      "images/sony1000xm4-2.png",
      "images/sony1000xm4-3.png",
      "images/sony1000xm4-4.png",
    ],
    brand: "Sony",
    title: "Sony WF-1000XM4",
    info: "Wireless In-Ear NC Headphones",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    finalPrice: 1990,
    originalPrice: 2990,
    quantity: 1,
    ratings: 382,
    rateCount: 3,
    path: "/product-details/",
  },
  {
    id: 12,
    images: [
      "images/boat228-1.png",
      "images/boat228-2.png",
      "images/boat228-3.png",
      "images/boat228-4.png",
    ],
    brand: "boAt",
    title: "boAt BassHeads 228",
    info: "In-Ear Wired Earphones",
    category: "Earphones",
    type: "In Ear",
    connectivity: "Wired",
    finalPrice: 649,
    originalPrice: 1190,
    quantity: 1,
    ratings: 1178,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 13,
    tag: "featured-product",
    images: [
      "images/jbl-endu-1.png",
      "images/jbl-endu-2.png",
      "images/jbl-endu-3.png",
      "images/jbl-endu-4.png",
    ],
    brand: "JBL",
    title: "JBL Endurance Run Sports",
    info: "In-Ear Wired Earphones",
    category: "Earphones",
    type: "In Ear",
    connectivity: "Wired",
    finalPrice: 999,
    originalPrice: 1599,
    quantity: 1,
    ratings: 1144,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 14,
    tag: "featured-product",
    images: [
      "images/boat203-1.png",
      "images/boat203-2.png",
      "images/boat203-3.png",
      "images/boat203-4.png",
    ],
    brand: "boAt",
    title: "boAt Airdopes 203",
    info: "In-Ear Truly Wireless Earbuds",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    finalPrice: 1074,
    originalPrice: 2999,
    quantity: 1,
    ratings: 1340,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 15,
    images: [
      "images/sonyCh710n-1.png",
      "images/sonyCh710n-2.png",
      "images/sonyCh710n-3.png",
      "images/sonyCh710n-4.png",
    ],
    brand: "Sony",
    title: "Sony WH-CH710N",
    info: "Wireless Over-Ear NC Headphones",
    category: "Headphones",
    type: "Over Ear",
    connectivity: "Wireless",
    finalPrice: 1520,
    originalPrice: 1990,
    quantity: 1,
    ratings: 853,
    rateCount: 4,
    path: "/product-details/",
  },
  {
    id: 16,
    images: [
      "images/jbl500bt-1.png",
      "images/jbl500bt-2.png",
      "images/jbl500bt-3.png",
      "images/jbl500bt-4.png",
    ],
    brand: "JBL",
    title: "JBL Tune 500BT",
    info: "On-Ear Wireless Headphones",
    category: "Headphones",
    type: "On Ear",
    connectivity: "Wireless",
    finalPrice: 1282,
    originalPrice: 2999,
    quantity: 1,
    ratings: 364,
    rateCount: 4,
    path: "/product-details/",
  },
  {
    id: 17,
    images: [
      "images/boat381-1.png",
      "images/boat381-2.png",
      "images/boat381-3.png",
      "images/boat381-4.png",
    ],
    brand: "boAt",
    title: "boAt Airdopes 381",
    info: "In-Ear Wireless Earbuds",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    finalPrice: 1699,
    originalPrice: 2990,
    quantity: 1,
    ratings: 1011,
    rateCount: 5,
    path: "/product-details/",
  },
  {
    id: 18,
    images: [
      "images/sony-ex14ap-1.png",
      "images/sony-ex14ap-2.png",
      "images/sony-ex14ap-3.png",
      "images/sony-ex14ap-4.png",
    ],
    brand: "Sony",
    title: "Sony MDR-EX14AP",
    info: "In-Ear Wired Earphones",
    category: "Earphones",
    type: "In Ear",
    connectivity: "Wired",
    finalPrice: 549,
    originalPrice: 1290,
    quantity: 1,
    ratings: 530,
    rateCount: 4,
    path: "/product-details/",
  },
  {
    id: 19,
    images: [
      "images/sonyXb400-1.png",
      "images/sonyXb400-2.png",
      "images/sonyXb400-3.png",
      "images/sonyXb400-4.png",
    ],
    brand: "Sony",
    title: "Sony WI-XB400",
    info: "Wireless Extra Bass In-Ear Neckbands",
    category: "Neckbands",
    type: "In Ear",
    connectivity: "Wireless",
    finalPrice: 1690,
    originalPrice: 2990,
    quantity: 1,
    ratings: 474,
    rateCount: 4,
    path: "/product-details/",
  },
];

export default productsData;
