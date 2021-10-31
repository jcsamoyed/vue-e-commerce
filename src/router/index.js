import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/pages/Login";
import Dashboard from "@/components/Dashboard";
import Products from "@/components/pages/Products";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/admin",
      name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "products",
          name: "Products",
          component: Products,
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
  ],
});
