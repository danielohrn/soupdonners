import images from "../libs/images";
import { TAGS } from "../constants";
let { soup1, soup2, soup3, soup4, soup5, soup6 } = images;

const generateId = (start => () => ++start)(0);

const state = {
  products: {
    soups: [
      {
        name: "Krya på dig",
        type: "soups",
        id: generateId(),
        price: 99,
        description: "Soppan är god bror",
        tags: [TAGS.FISH, TAGS.GLUTEN_FREE, TAGS.SPICY],
        img: soup1
      },
      {
        name: "Höstsoppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description: "Soppan är god bror",
        tags: [TAGS.VEGETARIAN, TAGS.GLUTEN_FREE],
        img:
          "https://www.brandnewvegan.com/wp-content/uploads/2015/07/sweet-potato-soup.jpg"
      },
      {
        name: "Varm soppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description: "Soppan är god bror",
        tags: [TAGS.FISH],
        img:
          "http://girlandthekitchen.com/wp-content/uploads/2009/01/Persian-Lentil-Soup-3-of-4.jpg"
      },
      {
        name: "Kall soppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description: "Soppan är god bror",
        tags: [TAGS.GLUTEN_FREE],
        img:
          "https://realfood.tesco.com/media/images/RFO-1400x919--cdb61265-c5a8-4297-b243-e335ad51d3d8-0-1400x919.jpg"
      },
      {
        name: "Bränd soppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description: "Soppan är god bror",
        tags: [TAGS.FISH],
        img: soup5
      },
      {
        name: "Nice soppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description: "Soppan är god bror",
        tags: [TAGS.SPICY],
        img:
          "https://img.delicious.com.au/iB6OGNth/h506-w759-cfill/del/2018/04/pumpkin-pear-and-bacon-soup-77439-2.jpg"
      }
    ],

    sides: [
      {
        name: "Bröd",
        type: "sides",
        price: 25,
        id: generateId(),
        description: "Gott bröd",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG"
      },
      {
        name: "Smörgås",
        type: "sides",
        price: 35,
        id: generateId(),
        description: "Ostmacka",
        img:
          "https://icase.azureedge.net/imagevaultfiles/id_50692/cf_259/mackor.jpg?"
      },

      {
        name: "Krutonger",
        type: "sides",
        price: 35,
        id: generateId(),
        description: "Krut-ånger",
        img:
          "https://cdn-rdb.arla.com/Files/arla-se/1736211522/19050b08-c817-4071-8a51-f837c6697f03.jpg?mode=crop&w=600&h=450&scale=both&ak=f525e733&hm=0f9e5878"
      }
    ]
  },

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
    hasPickedDeliveryAddress: false,
    isSignedIn: false,
    info: {
      name: null,
      email: null
    }
  }
};

export default state;
