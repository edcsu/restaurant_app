type Product = {
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: "0b2b4bea-d023-4c08-be9e-1e15641f566f",
      title: "Sicilian",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/temporary/p1.png",
      price: 24999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 499,
        },
        {
          title: "Large",
          additionalPrice: 699,
        },
      ],
    },
    {
      id: "0422dfe7-6dc6-499a-9090-4ec95390fc22",
      title: "Bacon Deluxe",
      desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
      img: "/temporary/p2.png",
      price: 29999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 499,
        },
        {
          title: "Large",
          additionalPrice: 699,
        },
      ],
    },
    {
      id: "0e37f32f-08fb-4e60-b738-a33c4f9f1954",
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p3.png",
      price: 19999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 499,
        },
        {
          title: "Large",
          additionalPrice: 699,
        },
      ],
    },
    {
      id: "c286219e-bf44-45f8-85db-e18a56fad10f",
      title: "Spicy Arrabbiata",
      desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
      img: "/temporary/p4.png",
      price: 15999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 499,
        },
        {
          title: "Large",
          additionalPrice: 699,
        },
      ],
    },
    {
      id: "50637ec3-b9ba-4a49-9266-8b7fb03821c2",
      title: "Jalapeño Fiesta",
      desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
      img: "/temporary/p5.png",
      price: 39999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
    {
      id: "2886158d-8b33-49d6-ba0c-3f537526c808",
      title: "Margherita Magic",
      desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
      img: "/temporary/p6.png",
      price: 9999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
    {
      id: "c0574a4c-9050-4540-8627-5d1a196503d6",
      title: "Garlic Parmesan Linguine",
      desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
      img: "/temporary/p7.png",
      price: 28999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: "941eb351-65ac-4b14-995e-5cd42f5bf172",
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/temporary/p8.png",
      price: 32999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: "dbabd173-3660-42e7-81d0-c9efabf27c00",
      title: "Hawaiian Teriyaki",
      desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
      img: "/temporary/p9.png",
      price: 49999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
  ];

  export const pizzas: Products = [
    {
      id: "e6dfdacc-5437-444b-a001-3b8757636b5a",
      title: "Sicilian",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/temporary/p1.png",
      price: 24999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
    {
      id: "e5b1de20-df10-4a18-9650-e9254315d6a6",
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/temporary/p8.png",
      price: 32999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
    {
      id: "38287f04-b11b-4edb-858e-60ce7359bbaf",
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p3.png",
      price: 26999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
    {
      id: "23e4c3eb-ef47-497c-82ec-c1e8e21563cf",
      title: "Pesto Primavera",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p10.png",
      price: 28999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
    {
      id: "67e7af55-7216-4f68-854a-80d331a0dcbe",
      title: "Veggie Supreme",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p11.png",
      price: 24999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
    {
      id: "540267d0-386b-4345-8931-2a44e42bc3dc",
      title: "Four Cheese Fantasy",
      desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
      img: "/temporary/p12.png",
      price: 22999,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4999,
        },
        {
          title: "Large",
          additionalPrice: 6999,
        },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: "5531abfc-816f-4a6c-8c89-4588f7e5f81e",
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24999,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4999,
      },
      {
        title: "Large",
        additionalPrice: 6999,
      },
    ],
  };
  
  
  type Menu = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: "cb76a083-a608-4db5-920a-c5f57239fa8f",
      slug: "pastas",
      title: "Italian Pastas",
      desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
      img: "/temporary/m1.png",
      color: "white",
    },
    {
      id: "cb76a083-a608-4db5-920a-c5f57239fa8f",
      slug: "burgers",
      title: "Juicy Burgers",
      desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      img: "/temporary/m2.png",
      color: "black",
    },
    {
      id: "aab95d4f-e5c2-4979-a696-bb6912d28c6d",
      slug: "pizzas",
      title: "Cheesy Pizzas",
      desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
      img: "/temporary/m3.png",
      color: "white",
    },
  ];