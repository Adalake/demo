import Vue from "vue";
import Router from "vue-router";
import Test from "../components/Test.vue";
import Home from "../pages/Home.vue";
import Product from "../pages/components/Product.vue";
import Send from "../pages/components/Send.vue";

Vue.use(Router);

const routes = [
  {
    path: "/test",
    name: 'Test',
    component: Test,
  },
  {
    path: "/home",
    name: 'Home',
    component: Home,
  },
  {
    path: "/product",
    name: 'Product',
    component: Product,
  },
  {
    path: "/send",
    name: 'Send',
    component: Send,
  },
];
export default new Router({
  mode: "history", // 不然就会有个#
  routes: routes,
});