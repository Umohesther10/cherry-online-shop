import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CategoryDetail from "../views/CategoryDetail.vue";
import ProductContent from "../views/ProductContent.vue";
import SignUp from "../views/SignUp.vue";
import ProductForm from "../views/ProductForm.vue";
import Search from "../views/Search.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";
import store from "@/store/index.js";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category/:id-:name",
    name: "CategoryDetail",
    component: CategoryDetail,
  },

  {
    path: "/products/:id-:name",
    name: "ProductContent",
    component: ProductContent,
    beforeEnter: async (to, from, next) => {
      let item = await axios.get(`${store.state.url}/products/${to.params.id}`);
      store.commit("setSelectedProductValue", item.data);
      next();
    },
  },
  {
    path: "/productform",
    name: "ProductForm",
    component: ProductForm,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
