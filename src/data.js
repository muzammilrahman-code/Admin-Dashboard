import userIcon from './assets/userIcon.svg';
import productIcon from './assets/productIcon.svg';
import revenueIcon from './assets/revenueIcon.svg';
import conversionIcon from './assets/conversionIcon.svg';


export const menu = [
    {
    id: 1,
    title: "Main",
    listItems: [
        {
            id: 1,
            title: "Homepage",
            url: "/",
            icon: "Home",
        },
        {
            id: 2,
            title: "Profile",
            url: "/profile",
            icon: "Profile",
        },
    ],
},
{
    id: 2,
    title: "Lists",
    listItems: [
        {
            id: 1,
            title: "Users",
            url: "/users",
            icon: "User",
        },
        {
            id: 2,
            title: "Products",
            url: "/products",
            icon: "Product",
        },
        {
            id: 3,
            title: "Orders",
            url: "/order",
            icon: "Order",
        },
        {
            id: 4,
            title: "Post",
            url: "/posts",
            icon: "Post2",
        },
    ],
},
{
    id: 3,
    title: "General",
    listItems: [
        {
            id: 1,
            title: "Elements",
            url: "/",
            icon: "Element",
        },
        {
            id: 2,
            title: "Notes",
            url: "/",
            icon: "Note",
        },
        {
            id: 3,
            title: "Forms",
            url: "/",
            icon: "Form",
        },
        {
            id: 4,
            title: "Calender",
            url: "/",
            icon: "Calender",
        },
    ],
},
{
    id: 4,
    title: "Maintenance",
    listItems: [
        {
            id: 1,
            title: "Settings",
            url: "/",
            icon: "Setting",
        },
        {
            id: 2,
            title: "Backups",
            url: "/",
            icon: "Backups",
        },
        
    ],
},{
    id: 5,
    title: "Analytics",
    listItems: [
        {
            id: 1,
            title: "Charts",
            url: "/",
            icon: "Chart",
        },
        {
            id: 2,
            title: "Logs",
            url: "/",
            icon: "Log",
        },
        
    ],
},
]

export const users = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "John Doe",
    email: "john.doe@example.com",
    amount: 25.75
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "Jane Smith",
    email: "jan.smith@example.com",
    amount: 19.41
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    username: "Mike Johnson",
    email: "mike.john@example.com",
    amount: 318.10
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    username: "Emily Brown",
    email: "emily.bro@example.com",
    amount: 120.9
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    username: "Chris Evans",
    email: "chris.eva@example.com",
    amount: 450.60
  },
  {
    id: 6,
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    username: "Laura Wilson",
    email: "lana.wilo@example.com",
    amount: 210.3
  },
  {
    id: 7,
    img: "https://randomuser.me/api/portraits/men/80.jpg",
    username: "David Lee",
    email: "david.lee@example.com",
    amount: 35.25
  },
  {
  id: 8,
  img: "https://randomuser.me/api/portraits/women/65.jpg",
  username: "Sophia Turner",
  email: "soph.turn@example.com",
  amount: 28.75
}

];


export const chartBoxUser = {
    color: "#8884d8",
    icon: userIcon,
    title: "Total Users",
    dataKey: "users",
    number: "11.238",
    percentage: 45,
    chartData: [
        {name: "Sun", users: 400},
        {name: "Mon", users: 600},
        {name: "Tue", users: 500},
        {name: "Wed", users: 700},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 450},
    ],
};
export const chartBoxProduct = {
    color: "skyblue",
    icon: productIcon,
    title: "Total Products",
    dataKey: "products",
    number: "238",
    percentage: 21,
    chartData: [
    { name: "Sun", products: 100 },
    { name: "Mon", products: 200 },
    { name: "Tue", products: 150 },
    { name: "Wed", products: 300 },
    { name: "Thu", products: 200 },
    { name: "Fri", products: 250 },
    { name: "Sat", products: 180 },
  ],
};
export const chartBoxRevenue = {
    color: "teal",
    icon: revenueIcon,
    title: "Total Revenue",
    dataKey: "revenue",
    number: "$56.432",
    percentage: -12,
     chartData: [
    { name: "Sun", revenue: 800 },
    { name: "Mon", revenue: 1000 },
    { name: "Tue", revenue: 950 },
    { name: "Wed", revenue: 1200 },
    { name: "Thu", revenue: 900 },
    { name: "Fri", revenue: 1100 },
    { name: "Sat", revenue: 1000 },
  ],
}
export const chartBoxConversion = {
    color: "gold",
    icon: conversionIcon,
    title: "Total Ratio",
    dataKey: "ratio",
    number: "2.6",
    percentage: 12,
    chartData: [
    { name: "Sun", ratio: 2.1 },
    { name: "Mon", ratio: 2.4 },
    { name: "Tue", ratio: 2.0 },
    { name: "Wed", ratio: 2.5 },
    { name: "Thu", ratio: 2.3 },
    { name: "Fri", ratio: 2.6 },
    { name: "Sat", ratio: 2.2 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "Profit", 
  chartData: [
    { name: "Sun", Profit: 4000 },
    { name: "Mon", Profit: 3000 },
    { name: "Tue", Profit: 2780 },
    { name: "Wed", Profit: 1890 },
    { name: "Thu", Profit: 2390 },
    { name: "Fri", Profit: 2000 },
    { name: "Sat", Profit: 3490 },
  ],
};


export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
   chartData: [
    { name: "Sun", visit: 4000 },
    { name: "Mon", visit: 3000 },
    { name: "Tue", visit: 2780 },
    { name: "Wed", visit: 1890 },
    { name: "Thu", visit: 2390 },
    { name: "Fri", visit: 2000 },
    { name: "Sat", visit: 3490 },
  ],
};


export const allRows = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/women/61.jpg",
    lastName: "Garcia",
    firstName: "Lana",
    email: "laura.garcia@example.com",
    phone: "+1-202-555-0167",
    verified: "true",
    createdAt: "2023-09-04",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    lastName: "Johnson",
    firstName: "Emily",
    email: "emily.johnson@example.com",
    phone: "+1-202-555-0142",
    verified: "true",
    createdAt: "2023-06-15",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/31.jpg",
    lastName: "Williams",
    firstName: "Michael",
    email: "michael.williams@example.com",
    phone: "+1-202-555-0185",
    verified: "true",
    createdAt: "2023-07-22",
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/women/41.jpg",
    lastName: "Brown",
    firstName: "Jessica",
    email: "jessica.brown@example.com",
    phone: "+1-202-555-0129",
    createdAt: "2023-08-01",
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    lastName: "Jones",
    firstName: "David",
    email: "david.jones@example.com",
    phone: "+1-202-555-0156",
    createdAt: "2023-08-13",
  },
  {
    id: 6,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    lastName: "Smith",
    firstName: "John",
    email: "john.smith@example.com",
    phone: "+1-202-555-0171",
    verified: "true",
    createdAt: "2023-05-10",
  },
  
  {
    id: 7,
    img: "https://randomuser.me/api/portraits/men/71.jpg",
    lastName: "Martinez",
    firstName: "Carlos",
    email: "carlos.martinez@example.com",
    phone: "+1-202-555-0104",
    verified: "true",
    createdAt: "2023-09-18",
  },
  {
    id: 8,
    img: "https://randomuser.me/api/portraits/women/81.jpg",
    lastName: "Davis",
    firstName: "Sophia",
    email: "sophia.davis@example.com",
    phone: "+1-202-555-0181",
    createdAt: "2023-10-05",
  },
  {
    id: 9,
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    lastName: "Rodriguez",
    firstName: "Luis",
    email: "luis.rodriguez@example.com",
    phone: "+1-202-555-0199",
    verified: "true",
    createdAt: "2023-10-20",
  },
  {
    id: 10,
    img: "https://randomuser.me/api/portraits/women/25.jpg",
    lastName: "Miller",
    firstName: "Chloe",
    email: "chloe.miller@example.com",
    phone: "+1-202-555-0133",
    createdAt: "2023-11-01",
  },
  {
    id: 11,
    img: "https://randomuser.me/api/portraits/men/26.jpg",
    lastName: "Lopez",
    firstName: "Daniel",
    email: "daniel.lopez@example.com",
    phone: "+1-202-555-0120",
    verified: "true",
    createdAt: "2023-11-16",
  },
  {
    id: 12,
    img: "https://randomuser.me/api/portraits/women/36.jpg",
    lastName: "Gonzalez",
    firstName: "Natalie",
    email: "natalie.gonzalez@example.com",
    phone: "+1-202-555-0118",
    verified: "true",
    createdAt: "2023-12-03",
  },
  {
    id: 13,
    img: "https://randomuser.me/api/portraits/men/42.jpg",
    lastName: "Perez",
    firstName: "Antonio",
    email: "antonio.perez@example.com",
    phone: "+1-202-555-0190",
    createdAt: "2023-12-22",
  },
  {
    id: 14,
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    lastName: "Taylor",
    firstName: "Grace",
    email: "grace.taylor@example.com",
    phone: "+1-202-555-0148",
    verified: "true",
    createdAt: "2024-01-09",
  },
  {
    id: 15,
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    lastName: "Anderson",
    firstName: "Brian",
    email: "brian.anderson@example.com",
    phone: "+1-202-555-0179",
    verified: "true",
    createdAt: "2024-01-28",
  },
];



export const products = [
  {
    id: 1,
    img: "https://picsum.photos/seed/product1/100",
    title: "Wireless Headphones",
    color: "Black",
    producer: "Sony",
    price: 99.99,
    createdAt: "2024-12-01",
    inStock: true,
  },
  {
    id: 2,
    img: "https://picsum.photos/seed/product2/100",
    title: "Smart Watch",
    color: "Silver",
    producer: "Apple",
    price: 249.99,
    createdAt: "2024-11-22",
    inStock: false,
  },
  {
    id: 3,
    img: "https://picsum.photos/seed/product3/100",
    title: "Bluetooth Speaker",
    color: "Blue",
    producer: "JBL",
    price: 59.99,
    createdAt: "2025-01-10",
    inStock: true,
  },
  {
    id: 4,
    img: "https://picsum.photos/seed/product4/100",
    title: "Gaming Mouse",
    color: "Red",
    producer: "Logitech",
    price: 39.99,
    createdAt: "2025-02-15",
    inStock: true,
  },
  {
    id: 5,
    img: "https://picsum.photos/seed/product5/100",
    title: "4K Monitor",
    color: "Black",
    producer: "Dell",
    price: 299.99,
    createdAt: "2025-03-05",
    inStock: false,
  },
  {
    id: 6,
    img: "https://picsum.photos/seed/product6/100",
    title: "Mechanical Keyboard",
    color: "White",
    producer: "Keychron",
    price: 89.99,
    createdAt: "2024-12-20",
    inStock: true,
  },
  {
    id: 7,
    img: "https://picsum.photos/seed/product7/100",
    title: "Smartphone",
    color: "Green",
    producer: "Samsung",
    price: 599.99,
    createdAt: "2025-01-18",
    inStock: true,
  },
  {
    id: 8,
    img: "https://picsum.photos/seed/product8/100",
    title: "Portable SSD",
    color: "Gray",
    producer: "SanDisk",
    price: 129.99,
    createdAt: "2025-02-25",
    inStock: false,
  },
  {
    id: 9,
    img: "https://picsum.photos/seed/product9/100",
    title: "Tablet",
    color: "Gold",
    producer: "Huawei",
    price: 349.99,
    createdAt: "2025-03-12",
    inStock: true,
  },
  {
    id: 10,
    img: "https://picsum.photos/seed/product10/100",
    title: "Wireless Charger",
    color: "White",
    producer: "Anker",
    price: 29.99,
    createdAt: "2025-04-01",
    inStock: true,
  },
  {
    id: 11,
    img: "https://picsum.photos/seed/product11/100",
    title: "Laptop Stand",
    color: "Silver",
    producer: "Rain Design",
    price: 49.99,
    createdAt: "2025-03-20",
    inStock: false,
  },
  {
    id: 12,
    img: "https://picsum.photos/seed/product12/100",
    title: "Action Camera",
    color: "Black",
    producer: "GoPro",
    price: 199.99,
    createdAt: "2025-01-30",
    inStock: true,
  },
  {
    id: 13,
    img: "https://picsum.photos/seed/product13/100",
    title: "E-book Reader",
    color: "Gray",
    producer: "Amazon",
    price: 119.99,
    createdAt: "2025-02-10",
    inStock: false,
  },
  {
    id: 14,
    img: "https://picsum.photos/seed/product14/100",
    title: "Noise Cancelling Earbuds",
    color: "Black",
    producer: "Bose",
    price: 179.99,
    createdAt: "2025-03-01",
    inStock: true,
  },
  {
    id: 15,
    img: "https://picsum.photos/seed/product15/100",
    title: "LED Desk Lamp",
    color: "White",
    producer: "Philips",
    price: 34.99,
    createdAt: "2025-04-10",
    inStock: true,
  },
];


export const userData = {
  id: 1,
  img: "https://randomuser.me/api/portraits/men/75.jpg",
  title: "John Doe",
  info: {
    Username: "johndoe75",
    Fullname: "Johnathan Doe",
    Email: "johndoe75@example.com",
    Phone: "+1 555 123 4567",
    Status: "Verified",
    Country: "USA"
  },
  chart: {
    dataKey: [
      { name: "Visits", color: "#8884d8" },
      { name: "Clicks", color: "#82ca9d" }
    ],
    data: [
      { name: "Sun", Visits: 3400, Clicks: 1200 },
      { name: "Mon", Visits: 2800, Clicks: 1100 },
      { name: "Tue", Visits: 3900, Clicks: 1500 },
      { name: "Wed", Visits: 4500, Clicks: 1800 },
      { name: "Thu", Visits: 3200, Clicks: 1400 },
      { name: "Fri", Visits: 4700, Clicks: 2000 },
      { name: "Sat", Visits: 5100, Clicks: 2200 },
    ]
  },
  activities: [
    { text: "John Doe purchased Playstation 5 Digital Edition", time: "3 days ago" },
    { text: "John Doe added 3 items to their wishlist", time: "1 week ago" },
    { text: "John Doe reviewed a product", time: "2 weeks ago" },
    { text: "John Doe purchased Sony Bravia KD-32w800", time: "3 weeks ago" },
    { text: "John Doe reviewed a product", time: "1 month ago" },
  ]
}


export const productData = {
  id: 1,
  img: "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?_gl=1*k3iaql*_ga*OTQ3MTEwNTIxLjE3NTM3MjQ4NjU.*_ga_8JE65Q40S6*czE3NTM3MjQ4NjUkbzEkZzEkdDE3NTM3MjQ5NDQkajQ4JGwwJGgw",  
  title: "Sony WH-1000XM5 Headphones",
  info: {
    ProductID: "SONY-XM5-98231",
    Color: "Black",
    Price: "$349.99",
    Producer: "Sony Corporation",
    Export: "Yes"
  },
  chart: {
    dataKey: [
      { name: "Visits", color: "#8884d8" },
      { name: "Orders", color: "#ff7300" }
    ],
    data: [
      { name: "Sun", Visits: 3000, Orders: 240 },
      { name: "Mon", Visits: 3200, Orders: 300 },
      { name: "Tue", Visits: 2800, Orders: 180 },
      { name: "Wed", Visits: 4000, Orders: 320 },
      { name: "Thu", Visits: 4200, Orders: 410 },
      { name: "Fri", Visits: 4600, Orders: 500 },
      { name: "Sat", Visits: 4900, Orders: 580 }
    ]
  },
  activities: [
    { text: "Sony WH-1000XM5 was added to Best Sellers", time: "2 days ago" },
    { text: "20 new reviews added", time: "4 days ago" },
    { text: "Product featured in weekly newsletter", time: "6 days ago" },
    { text: "Price updated from $379.99 to $349.99", time: "1 week ago" },
    { text: "Stock refilled: +500 units", time: "2 weeks ago" },
  ]
};

