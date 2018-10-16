import images from "../libs/images";
import { TAGS } from "../constants";
let { soup1, soup2, soup3, soup4, soup5, soup6 } = images;

const generateId = (start => () => ++start)(0);

const state = {
  products: [
    {
      name: "Krya på dig",
      type: "soup",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      tags: [TAGS.FISH, TAGS.GLUTEN_FREE, TAGS.SPICY],
      img: soup1
    },
    {
      name: "Höstsoppa",
      type: "soup",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      tags: [TAGS.VEGETARIAN, TAGS.GLUTEN_FREE],
      img: soup2
    },
    {
      name: "Varm soppa",
      type: "soup",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      tags: [TAGS.FISH],
      img: soup3
    },
    {
      name: "Kall soppa",
      type: "soup",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      tags: [TAGS.GLUTEN_FREE],
      img: soup4
    },
    {
      name: "Bränd soppa",
      type: "soup",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      tags: [TAGS.FISH],
      img: soup5
    },
    {
      name: "Nice soppa",
      type: "soup",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      tags: [TAGS.SPICY],
      img: soup6
    }
  ],

  sides: [
    {
      name: "Bröd",
      type: "side",
      price: 25,
      id: generateId(),
      description: "Gott bröd",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG"
    },
    {
      name: "Smörgås",
      type: "side",
      price: 35,
      id: generateId(),
      description: "Ostmacka",
      img:
        "https://icase.azureedge.net/imagevaultfiles/id_50692/cf_259/mackor.jpg?"
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
  }
};

export default state;
