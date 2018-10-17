import images from "../libs/images";
let { soup1, soup2, soup3, soup4, soup5, soup6 } = images;

const generateId = (start => () => ++start)(0);

const state = {
  products: {
    soups: [
      {
        title: "Morotssoppa",
        name: "Värmande morotsoppa med ingefära och chili",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten"],
        img: soup1
      },
      {
        name: "Höstsoppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten"],
        img: soup2
      },
      {
        name: "Varm soppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten"],
        img: soup3
      },
      {
        name: "Kall soppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten"],
        img: soup4
      },
      {
        name: "Bränd soppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten", "vegan"],
        img: soup5
      },
      {
        name: "Nice soppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten", "vegetarian"],
        img: soup6
      }
    ],

    sides: [
      {
        name: "Bröd",
        tags: [],
        type: "sides",
        price: 25,
        id: generateId(),
        description: "Gott bröd",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG"
      },
      {
        name: "Smörgås",
        tags: [],
        type: "sides",
        price: 35,
        id: generateId(),
        description: "Ostmacka",
        img:
          "https://icase.azureedge.net/imagevaultfiles/id_50692/cf_259/mackor.jpg?"
      },

      {
        name: "Krutonger",
        tags: [],
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
      //   title: "Morotssoppa",
      //   name: "Värmande morotsoppa med ingefära och chili",
      //   id: 1,
      //   price: 99,
      //   description: "Soppan är god bror",
      //   img: soup1
      // }
    ],
    orderSummary: {
      // Morotssopppa: {
      //   title: "Morotssoppa",
      //   name: "Värmande morotsoppa med ingefära och chili",
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
