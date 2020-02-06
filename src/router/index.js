import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";

Vue.use(VueRouter);

const redirectAuthenticated = (to, from, next) => {
  if (store.getters.loggedIn) next("/");
  next();
};

const redirectUnauthenticated = (to, from, next) => {
  if (!store.getters.loggedIn) next("/log-in");
  next();
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: redirectUnauthenticated
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
    beforeEnter: redirectAuthenticated
  },
  {
    path: "/log-in",
    name: "log-in",
    component: LogIn,
    beforeEnter: redirectAuthenticated
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
