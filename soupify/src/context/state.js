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
      expanded: false,
      description: "Soppan är god bror",
      img:
        "https://img.taste.com.au/Or7eNTpJ/taste/2016/11/roast-tomato-and-basil-soup-47489-1.jpeg"
    },
    {
      name: "Höstsoppa",
      id: generateId(),
      price: 99,
      expanded: false,
      description: "Soppan är god bror",
      img:
        "https://img.taste.com.au/Or7eNTpJ/taste/2016/11/roast-tomato-and-basil-soup-47489-1.jpeg"
    },
    {
      name: "Varm soppa",
      id: generateId(),
      price: 99,
      expanded: false,
      description: "Soppan är god bror",
      img:
        "https://img.taste.com.au/Or7eNTpJ/taste/2016/11/roast-tomato-and-basil-soup-47489-1.jpeg"
    },
    {
      name: "Kall soppa",
      id: generateId(),
      price: 99,
      expanded: false,
      description: "Soppan är god bror",
      img:
        "https://img.taste.com.au/Or7eNTpJ/taste/2016/11/roast-tomato-and-basil-soup-47489-1.jpeg"
    },
    {
      name: "Bränd soppa",
      id: generateId(),
      price: 99,
      expanded: false,
      description: "Soppan är god bror",
      img:
        "https://img.taste.com.au/Or7eNTpJ/taste/2016/11/roast-tomato-and-basil-soup-47489-1.jpeg"
    },
    {
      name: "Nice soppa",
      id: generateId(),
      price: 99,
      expanded: false,
      description: "Soppan är god bror",
      img:
        "https://img.taste.com.au/Or7eNTpJ/taste/2016/11/roast-tomato-and-basil-soup-47489-1.jpeg"
    }
  ],

  shoppingCart: {
    isOpen: false,
    items: [],
    orderSummary: {
      total: 0
    }
  }
};

export default state;
