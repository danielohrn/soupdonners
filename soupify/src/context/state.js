import images from "../libs/images";
let { soup1, soup2, soup3, soup4, soup5, soup6, greetingCard } = images;

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
        img: soup1,
        hasAddonOptions: true
      },
      {
        name: "Fiskoppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten"],
        img: soup2,
        hasAddonOptions: false
      },
      {
        name: "Linssoppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten"],
        img: soup3,
        hasAddonOptions: true
      },
      {
        name: "Broccolisoppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten"],
        img: soup4,
        hasAddonOptions: false
      },
      {
        name: "Potatissoppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten", "vegan"],
        img: soup5,
        hasAddonOptions: true
      },
      {
        name: "Spenatsoppa",
        type: "soups",
        id: generateId(),
        price: 99,
        description:
          "Skydda dig mot höstens förkylningar med vår fiberrika morotsoppa som är boostad med ingefära som stärker immunförsvaret och ökar kroppens blodcirkulation.",
        tags: ["milk", "gluten", "vegetarian"],
        img: soup6,
        hasAddonOptions: false
      }
    ],

    sides: [
      {
        name: "Bröd",
        tags: ["gluten"],
        type: "sides",
        price: 25,
        id: generateId(),
        description: "Gott bröd",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG"
      },
      {
        name: "Smörgås",
        tags: ["gluten"],
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
        description: "En påse krut-ånger",
        img:
          "https://cdn-rdb.arla.com/Files/arla-se/1736211522/19050b08-c817-4071-8a51-f837c6697f03.jpg?mode=crop&w=600&h=450&scale=both&ak=f525e733&hm=0f9e5878"
      }
    ],

    addons: [
      {
        name: "Extra ärtor",
        type: "addons",
        price: 10,
        id: generateId(),
        description: "Köp extra ärtor",
        img: null
      }
    ],
    greetingCard: {
      name: "Personlig hälsning",
      description:
        "Vill du lägga till en personlig hälsning till din beställning?",
      type: "greetingCard",
      price: 25,
      id: generateId(),
      img: greetingCard
    }
  },

  shoppingCart: {
    items: [],
    orderSummary: {
      total: 0
    }
  },

  user: {
    isFirstVisitOnHomePage: true,
    hasValidDeliveryAddress: false,
    hasPickedDeliveryAddress: false,
    isSignedIn: false,
    info: {
      firstName: null,
      lastName: null,
      phone: null,
      email: null,
      deliveryAddress: null
    },
    payment: {
      isActive: false,
      isDone: false
    }
  },

  isNavBarOpen: false
};

export default state;
