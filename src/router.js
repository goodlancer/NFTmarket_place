import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Indexer from "./views/Indexer.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import ItemView from "./views/Itemview.vue";
import Register from "./views/Register";
import Profile from "./views/Profile.vue";
import Gennft from "./views/Gennft.vue";
// import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import HeadNavbar from "./layout/HeadNavbar.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: HeadNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/itemview/:id",
      name: "itemview",
      components: { default: ItemView, header: HeadNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/about",
      name: "about",
      components: { default: Indexer, header: HeadNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: HeadNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: HeadNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/register",
      name: "register",
      components: { default: Register, header: HeadNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: HeadNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/generatenft",
      name: "generate",
      components: { default: Gennft, header: HeadNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('userInfo');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router