import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    selectedCategory: null,
    selectedProduct: null,
    categories: [
      {
        id: 1,
        name: `Weavon`,
        icon: "fas fa-cut",
      },
      {
        id: 2,
        name: `Baby Accessories`,
        icon: "fas fa-baby",
      },
      {
        id: 3,
        name: `Phones`,
        icon: "fas fa-mobile-alt",
      },
      {
        id: 4,
        name: `Electronics`,
        icon: "fas fa-user",
      },
      {
        id: 5,
        name: `Men shoes`,
        icon: "fas fa-shoe-prints",
      },
      {
        id: 6,
        name: `Women Dresses`,
        icon: "fas fa-female",
      },
      {
        id: 7,
        name: `Women Shoes`,
        icon: "fas fa-shoe-prints",
      },
      {
        id: 8,
        name: `Men Clothes`,
        icon: "fas fa-male",
      },
      {
        id: 9,
        name: `Laptops`,
        icon: "fas fa-laptop",
      },
      {
        id: 10,
        name: `Accessories`,
        icon: "fas fa-tshirt",
      },
    ],
    products: [
      {
        id: 1,
        name: "WATER WAVES Cambodian Weave Bundle For Beautiful Ladies",
        variant: false,
        price: "22,000",
        discount: "11,000",
        choice: false,
        percent: "-50%",
        detail:
          "It a quality human hair wig, it is made with good human hair blend, it has a soft texture, it doesn't tangle and it doesn't shed it doesn't rough and it doesn't change colour, it can be dyed, and it can be bleached, it doesn't change colour and it doesn't rough, it can be washed, it is the people's choice, it is the type of wig you will love to own, it is not common, it is can be used for both ladies and slay Mama's, it can be used for both casual and parties, it is recommendable, it gives a difference look, it is very easy to maintain, it can be maintained with ordinary water or good human hair spray, it lasts longerit is the type of wig you will love to order for your friends our products has no rival,all our products are quality guaranteed. ",
        imageLink: require("../assets/wig2.jpg"),
        image: [
          require("../assets/wig2.jpg"),
          require("../assets/wig4.jpg"),
          require("../assets/wig5.jpg"),
        ],
      },

      {
        id: 2,
        name: "Baby Clothes Hanger",
        variant: false,
        choice: false,
        price: "9,000",
        discount: "4,500",
        percent: "-50%",
        detail:
          "These baby closet hangers are suitable for hanging clothes from newborn sizing to 2T. Great desgin:baby hangers have the little hook on either side to help keep clothes in place.The slot is great for pants/shorts, baby hangers for closet are also wide enough to actually fit pants under a shirt or jacket hanging over.",
        imageLink: require("../assets/hanger2.jpg"),
        image: [
          require("../assets/hanger2.jpg"),
          require("../assets/b1.jpg"),
          require("../assets/b2.jpg"),
        ],
      },
      {
        id: 3,
        name: "Apple IPhone 11 64GB Black",
        variant: false,
        choice: false,
        price: "289,000",
        discount: "202,300",
        percent: "-30%",
        detail:
          "The iPhone 11 features an Intel modem chip with Gigabit-class LTE, 2x2 MIMO, and LAA, Wi-Fi 6 support (802.11ax) with 2x2 MIMO, Bluetooth 5.0, Dual-SIM with eSIM, and an Apple-designed U1 Ultra Wideband chip that improves spatial awareness and allows for better indoor tracking.",
        imageLink: require("../assets/iphone.jpg"),
        image: [
          require("../assets/iphone.jpg"),
          require("../assets/p2.jpg"),
          require("../assets/p3.jpg"),
        ],
      },
      {
        id: 4,
        name: "Haier Thermocool 180-Litre Double Door Refrigerator",
        price: "223,000",
        discount: "200,700",
        percent: "-10%",
        variant: false,
        choice: false,
        detail:
          "A refrigerator (colloquially fridge) consists of a thermally insulated compartment and a heat pump (mechanical, electronic or chemical) that transfers heat from the inside of the fridge to its external environment so that the inside of the fridge is cooled to a temperature below the room temperature.",
        imageLink: require("../assets/fridge.jpg"),
        image: [
          require("../assets/fridge.jpg"),
          require("../assets/f1.jpg"),
          require("../assets/f2.jpg"),
        ],
      },
      {
        id: 5,
        name: "Mens formal oxford shoe",
        price: "15,000",
        discount: "13,500",
        percent: "-10%",
        choice: true,
        variant: true,
        detail:
          "Durable and flexible: the stripe pattern on the sole is designed to be non-slip and flexible. Our shower slippers are very soft and flexible, designed to fit your feet perfectly, allowing you to enjoy the comfort of these slippers for a long time.",
        imageLink: require("../assets/shoe.jpg"),
        image: [
          require("../assets/shoe.jpg"),
          require("../assets/s1.jpg"),
          require("../assets/s2.jpg"),
        ],
      },
      {
        id: 6,
        name: " Pleated Ladies Fashion Dress",
        price: "6,000",
        discount: "3000",
        percent: "-50%",
        choice: true,
        variant: false,
        size: true,
        detail:
          "Lovely Pleated gownQuality unique outfit from dexterous wears, made of high quality material, Very cute fitted and attractive outfit that makes you look gorgeous and adorable, All dexterous wears outfit are durable and of high quality yet very affordable, don’t miss this outfit, just go ahead and purchase and you will be glad you did.Stand out in this midi length belted dress made from carefully selected top quality fabrics. The self belt complements to give a perfect finishing..What other way to look stunning than this midi length dress that can be styled as corporate, casual or church outfit. Whatever way you choose to style this outfit, be sure to have the spot light on you when you step out in this gorgeous piece.",
        imageLink: require("../assets/female dress.jpg"),
        image: [
          require("../assets/female dress.jpg"),
          require("../assets/d1.jpg"),
          require("../assets/d2.jpg"),
        ],
      },
      {
        id: 7,
        name: "Elegant  Athletic Sneakers ",
        price: "10,000",
        variant: true,
        discount: "9000",
        percent: "-10%",
        choice: true,
        detail:
          "Suitable for all seasons, indoor bedrooms, bathrooms, living rooms, spas, gyms, swimming pools, beaches, vacations, leisure, public showers, steam rooms, dormitories, camps, swimming pools, changing rooms.",
        imageLink: require("../assets/sneakers.jpg"),
        image: [
          require("../assets/sneakers.jpg"),
          require("../assets/sn3.jpg"),
          require("../assets/slide1.jpg"),
        ],
      },
      {
        id: 8,
        name: "Mens Coporate Shirts",
        price: "5,000",
        discount: "4,500",
        percent: "-10%",
        variant: false,
        choice: true,
        size: true,
        detail:
          "There are lots of powerful inspiration behind everything we design. We are inspired by you. Chrysolite Designs is a fashion brand that uses textile designs to connect mind & soul together.",
        imageLink: require("../assets/shirt.jpg"),
        image: [
          require("../assets/shirt.jpg"),
          require("../assets/ms1.jpg"),
          require("../assets/ms2.jpg"),
        ],
      },
      {
        id: 9,
        name: "HP Elite Book",
        variant: false,
        choice: false,
        price: "150,000",
        discount: "135,000",
        percent: "-10%",
        detail:
          "This laptop is designed to last as you will be wowed by its ability to relieve you of all your school, office or other personal services as you so desire. ",
        imageLink: require("../assets/hp.jpg"),
        image: [
          require("../assets/hp.jpg"),
          require("../assets/h1.jpg"),
          require("../assets/h2.jpg"),
        ],
      },
      {
        id: 10,
        name: "Attain Glory Precious Stone Necklace",
        price: "5,000",
        discount: "4,500",
        percent: "-10%",
        variant: false,
        choice: false,
        detail:
          "A one stop destination for that perfect outfit or accessory no matter what the occasion. ",
        imageLink: require("../assets/necklace.jpg"),
        image: [
          require("../assets/necklace.jpg"),
          require("../assets/n1.jpg"),
          require("../assets/n2.jpg"),
        ],
      },

      {
        id: 11,
        name: "Forever 21 Black Colour",
        price: "8,000",
        discount: "7000",
        percent: "-10%",
        choice: true,
        variant: true,
        detail:
          "Women everywhere know all too well the unbearable pain experienced after a long day or night in high heels, or the discomfort that comes when breaking in a new pair of shoes. ",
        imageLink: require("../assets/heel.jpg"),
        image: [
          require("../assets/heel.jpg"),
          require("../assets/c1.jpg"),
          require("../assets/c2.jpg"),
        ],
      },

      {
        id: 12,
        name: "Apple Macbook Pro 15.4 1TB SSD -32GB ",
        price: "500,000",
        discount: "400,000",
        percent: "-20%",
        variant: false,
        choice: false,
        detail:
          "It is powered by a Core i9 processor and it comes with 32GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage. Connectivity options include Wi-Fi 802.11 ac, Bluetooth and it comes with 2 USB ports (2 x USB 3.0), Mic In ports.",
        imageLink: require("../assets/mac.jpg"),
        image: [
          require("../assets/mac.jpg"),
          require("../assets/m1.jpg"),
          require("../assets/m2.jpg"),
        ],
      },
    ],
  },
  mutations: {
    setSelectedCategoryValue(state, section) {
      state.selectedCategory = section;
    },
    setSelectedProductValue(state, product) {
      state.selectedProduct = product;
    },
    // rename this
    add(state, newCart) {
      state.cart = newCart;
    },
    setCart(state, item) {
      state.cart.unshift(item);
    },
  },
  actions: {
    // delete from cart.
    removeFromCart({ state, commit }, productId) {
      const cart = state.cart.filter((item) => item.id !== productId);
      commit("add", cart);
    },
  },
  modules: {},
});
