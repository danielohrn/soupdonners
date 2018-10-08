import images from '../libs/images'

let {soup1,
    soup2,
    soup3,
    soup4,
    soup5,
    soup6
    } = images


const generateId = (() => {
  let id = 0;

  return () => ++id;
})();

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
    items: [],
    orderSummary: {}
  },

  user: {
    isSignedIn: false,
    info: {
      name: null,
      email: null
    }
  }
};

export default state;
