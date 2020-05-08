import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CategoryDetail from "../views/CategoryDetail.vue";
import ProductContent from "../views/ProductContent.vue";
import SignUp from "../views/SignUp.vue";
import ProductForm from "../views/ProductForm.vue";

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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
