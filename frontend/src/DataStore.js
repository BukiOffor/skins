import BadgeIcon from '@mui/icons-material/Badge';
import ShieldIcon from '@mui/icons-material/Shield';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const Data = {
    productItems: [
        {
            id: 1,
            discount: 50,
            cover: "./img/flash/flash-1.png",
            name: "Shoes",
            price: 100,
        },
        {
            id: 2,
            discount: 40,
            cover: "./img/flash/flash-2.png",
            name: "Watch",
            price: 20,
        },
        {
            id: 3,
            discount: 40,
            cover: "./img/flash/flash-3.png",
            name: "Smart Mobile Black",
            price: 200,
        },
        {
            id: 4,
            discount: 40,
            cover: "./img/flash/flash-4.png",
            name: "Smart Watch Black",
            price: 50,
        },
        {
            id: 5,
            discount: 50,
            cover: "./img/product/3-2.jpg",
            name: "Women White Handbag",
            price: 200,
        },
        {
            id: 6,
            discount: 50,
            cover: "./img/product/3-4-1.jpg",
            name: "Fashion Blue Towel",
            price: 378,
        },
    ],
    shopItems: [
        {
          id: 7,
          cover: "./img/shops/shops-1.png",
          name: "Mapple Earphones",
          price: "180",
          discount: "25",
        },
        {
          id: 8,
          cover: "./img/shops/shops-2.png",
          name: "Vivo android one",
          price: "120",
          discount: "10",
        },
        {
          id: 9,
          cover: "./img/shops/shops-3.png",
          name: "Sony Light",
          price: "20",
          discount: "50 ",
        },
        {
          id: 10,
          cover: "./img/shops/shops-4.png",
          name: "Iphone",
          price: "999",
          discount: "10 ",
        },
        {
          id: 11,
          cover: "./img/shops/shops-5.png",
          name: "Ceats wireless earphone",
          price: "80",
          discount: "20 ",
        },
        {
          id: 12,
          cover: "./img/shops/shops-7.png",
          name: "Redimi Phone",
          price: "400",
          discount: "20 ",
        },
        {
          id: 13,
          cover: "./img/shops/shops-8.png",
          name: "Xeats Bluetooth earphones",
          price: "60",
          discount: "5 ",
        },
        {
          id: 14,
          cover: "./img/shops/shops-9.png",
          name: "Airpod",
          price: "120",
          discount: "10",
        },
        {
          id: 15,
          cover: "./img/shops/shops-10.png",
          name: "Silver Cap",
          price: "5",
          discount: "2",
        },
        {
            id: 16,
            cover: "./img/product/2-8.jpg",
            name: "Apple Super Notecom",
            price: "500",
            discount: "20",
        },
        {
            id: 17,
            cover: "./img/product/3-6-1.jpg",
            name: "Women’s Comforter",
            price: "305",
            discount: "20",
        },
        {
            id: 18,
            cover: "./img/product/3-7.jpg",
            name: "Multi-colorful Music",
            price: "28",
            discount: "20",
        },
    ],
    Cdata: [
        { 
            cateImg: './img/categories/cat1.png',
            catName: 'Fashion'
        },
        {
            cateImg: "./img/categories/cat2.png",
            catName: "Electronic",
        },
        {
            cateImg: "./img/categories/cat3.png",
            catName: "Cars",
        },
        {
            cateImg: "./img/categories/cat4.png",
            catName: "Home & Garden",
        },
        {
            cateImg: "./img/categories/cat5.png",
            catName: "Gifts",
        },
        {
            cateImg: "./img/categories/cat6.png",
            catName: "Music",
        },
        {
            cateImg: "./img/categories/cat7.png",
            catName: "Health & Beauty",
        },
        {
            cateImg: "./img/categories/cat8.png",
            catName: "Pets",
        },
        {
            cateImg: "./img/categories/cat9.png",
            catName: "Baby Toys",
        },
        {
            cateImg: "./img/categories/cat10.png",
            catName: "Groceries",
        },
        {
            cateImg: "./img/categories/cat11.png",
            catName: "Books",
        },
    ],
    Sdata: [
        {
            id: 1,
            title: "DEALS AND PROMOTIONS",
            desc: "Fashion Skiwears for the ardent Sports devotees and for all football lovers all over the world. 50% Off For Your First Shopping",
            cover: "./img/slides/slide-3.png",
        },
        {
            id: 2,
            title: "TOP MONTHLY SELLER",
            desc: "Sumsung 52 Inches Full HD Smart LED TV Only until the end of this week. 50% Off For Your First Shopping",
            cover: "./img/slides/slide-2.png",
        },
        {
            id: 3,
            title: "NEWS AND INSPIRATIONS",
            desc: "Sale up to 30% Off Free returns extended to 30 days after delivery and 50% Off For Your First Shopping",
            cover: "./img/slides/slide-1.png",
        },
    ],
    Tdata: [
        {
            cover: "./img/top/category-1.png",
            para: "headphone",
            desc: "3k orders this week",
        },
        {
            cover: "./img/top/category-2.png",
            para: "watch",
            desc: "4k orders this week",
        },
        {
            cover: "./img/top/category-3.png",
            para: "sunglass",
            desc: "6k orders this week",
        },
        {
            cover: "./img/top/category-2.png",
            para: "watch",
            desc: "4k orders this week",
        },
        {
            cover: "./img/top/category-3.png",
            para: "sunglass",
            desc: "6k orders this week",
        },
    ],
    Ndata: [
        {
            cover: "./img/arrivals/arrivals1.png",
            name: "Sunglass",
            price: "150",
        },
        {
            cover: "./img/arrivals/arrivals2.png",
            name: "Makeup",
            price: "250",
        },
        {
            cover: "./img/arrivals/arrivals3.png",
            name: "Smart Watch",
            price: "50",
        },
        {
            cover: "./img/arrivals/arrivals4.png",
            name: "Lipstick",
            price: "15",
        },
        {
            cover: "./img/arrivals/arrivals5.png",
            name: "Green Plant",
            price: "10",
        },
        {
            cover: "./img/arrivals/arrivals6.png",
            name: "Bonsai tree",
            price: "400",
        },
    ],
    Ddata: [
        {
            cover: "./img/discount/discount-1.png",
            name: "BenuX 2022",
            price: "$250",
        },
        {
            cover: "./img/discount/discount-2.png",
            name: "Sony TV 1080p",
            price: "$450",
        },
        {
            cover: "./img/discount/discount-3.png",
            name: "Sony PS4",
            price: "$50",
        },
        {
            cover: "./img/discount/discount-4.png",
            name: "Setgearr 2022",
            price: "$100",
        },
        {
            cover: "./img/discount/discount-5.png",
            name: "Tony BGB",
            price: "$20",
        },
        {
            cover: "./img/discount/discount-6.png",
            name: "RG products",
            price: "$200",
        },
        {
            cover: "./img/discount/discount-7.png",
            name: "Ranasonic 2022",
            price: "$300",
        },
        {
            cover: "./img/discount/discount-8.png",
            name: "Pune HD",
            price: "$30",
        },
        {
            cover: "./img/discount/discount-9.png",
            name: "Sony CCTV",
            price: "$80",
        },
    ],
    Catdata: [
        {
          cateImg: "./img/categories/cat-1.png",
          cateName: "Apple",
        },
        {
          cateImg: "./img/categories/cat-2.png",
          cateName: "Samasung",
        },
        {
          cateImg: "./img/categories/cat-1.png",
          cateName: "Oppo",
        },
        {
          cateImg: "./img/categories/cat-2.png",
          cateName: "Vivo",
        },
        {
          cateImg: "./img/categories/cat-1.png",
          cateName: "Redimi",
        },
        {
          cateImg: "./img/categories/cat-2.png",
          cateName: "Sony",
        },
    ],
    Wradata: [
        {
          cover: <FireTruckIcon />,
          title: "Free Shipping & Returns",
          decs: "For all orders over $99 purchased within the next 30 days of sales.",
        },
        {
          cover: <BadgeIcon />,
          title: "Secure Payment",
          decs: "We offer safe and secure payment using the latest technological payment platform.",
        },
        {
          cover: <ShieldIcon />,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <HeadsetMicIcon />,
          title: "Customer Support",
          decs: "Call or email us through our 24/7 customer support service as we are fit to serve you better.",
        },
    ]
};

export default Data