import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import './index.css'
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import SettingsView from "./views/SettingsView.vue";
import UserView from "./views/UserView.vue";


const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserView,
    },
  ],
  history: createWebHistory(),
});

const isAuthenticated = false;

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: "home" };
  }
});

const app = createApp(App);
app.use(router);
app.mount("#app");
