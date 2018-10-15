import images from "../libs/images";

let { soup1, soup2, soup3, soup4, soup5, soup6 } = images;

const generateId = (start => () => ++start)(0);

const state = {
  products: [
    {
      name: "Krya på dig",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img: soup1
    },
    {
      name: "Höstsoppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img: soup2
    },
    {
      name: "Varm soppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img: soup3
    },
    {
      name: "Kall soppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img: soup4
    },
    {
      name: "Bränd soppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img: soup5
    },
    {
      name: "Nice soppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img: soup6
    }
  ],

  shoppingCart: {
    items: [
      // {
      //   name: "Krya på dig",
      //   id: 1,
      //   price: 99,
      //   description: "Soppan är god bror",
      //   img: soup1
      // }
    ],
    orderSummary: {
      // "Krya på dig": {
      //   name: "Krya på dig",
      //   id: 1,
      //   price: 99,
      //   description: "Soppan är god bror",
      //   img: soup1,
      //   quantity: 1
      // },
      total: 0
    }
  },

  user: {
    isSignedIn: false,
    info: {
      name: null,
      email: null
    }
  },

  hasNotification: false
};

export default state;
