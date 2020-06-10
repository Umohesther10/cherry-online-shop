import Vue from "vue";
import Vuex from "vuex";
import EventServices from "../../Services/EventServices"
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    searchitems: [],
    url: 'http://localhost:5000',
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
    products: [],
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
    // set cart
    // setCart(state, item) {
    //   state.cart.unshift(item);
    // },
    // set products
    setProduct(state, item) {
      state.products = item;
    },
    setCart(state, item) {
      state.cart.unshift(item)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    // set cart on reload
    setCartReload(state, item) {
      state.cart = item
    },
    // set cart after removing item
    setRemoveItemCart(state, item) {
      state.cart = item
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    // set success message
    setSuccessAlert (state, item) {
      state.successAlertMessage = item.successMessage
      state.showSuccessAlert = item.showSuccess
    },
    // set error message
    setErrorAlert (state, item) {
      state.errorAlertMessage = item.errorMessage
      state.showErrrorAlert = item.showError
    },
     // set search items
     setSearchItem (state, item) {
      state.searchitems = item
    },
    // set user
    setUser (state, item) {
      state.user = item
      if (state.user) {
        state.loggedIn = true
      } else {
        state.loggedIn = false
      }
    }
  },
  getters: {
    // calculate total quantity in cart
    getCartQty (state) {
      if (state.cart.length < 1) {
        return 0
      } else {
        let totalQuantity = []
               state.cart.forEach((item) => {
               totalQuantity.push(item.quantity)
        })
        let total = totalQuantity.reduce((a, b) => {
          return a + b
        })
        return total
      }
    },

    // calculate total price
    getTotalPrice (state) {
      if (state.cart.length < 1) {
        return 0
      } else {
        let totalPrice = []
               state.cart.forEach((item) => {
               totalPrice.push(item.subTotal)
        })
        let totalP = totalPrice.reduce((a, b) => {
          return a + b
        })
        return totalP
      }
    }
  },
  actions: {
      async setSearch ({ state, commit}, value) {
      let items = await Axios.get(`${state.url}/product/${value.item}`)
      commit("setSearchItem", items.data.result)
    }
  },
  modules: {},
});
