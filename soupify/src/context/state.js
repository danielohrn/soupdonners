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
      img:
        "https://img.taste.com.au/Or7eNTpJ/taste/2016/11/roast-tomato-and-basil-soup-47489-1.jpeg"
    },
    {
      name: "Höstsoppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img:
        "http://aucdn.ar-cdn.com/recipes/port500/003b2bf5-a680-428b-80bd-b2a1de9eb2ac.jpg"
    },
    {
      name: "Varm soppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img:
        "https://www.healthyfood.co.uk/wp-content/uploads/2017/10/pea-and-fennel-soup-1.png"
    },
    {
      name: "Kall soppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img:
        "https://www.eatlivetravelwrite.com/wp-content/uploads/2012/04/DSC_2302.jpg"
    },
    {
      name: "Bränd soppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img:
        "http://foodhati.com/foodhatiAdmin/assets/img/foodimg/201308-ft-tomato-soup-with-chickpeas-and-pasta.jpg"
    },
    {
      name: "Nice soppa",
      id: generateId(),
      price: 99,
      description: "Soppan är god bror",
      img:
        "https://www.fastkitchen.net/wp-content/uploads/2017/01/Tumeric-Soup.jpg"
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
