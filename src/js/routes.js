
import HomePage from '../pages/home.svelte';
import HomePage2 from '../pages/home2.svelte';
import HomePage3 from '../pages/home3.svelte';
import NotFoundPage from '../pages/404.svelte';
import LoginPage from '../pages/login.svelte';
import RegistratiPage from '../pages/registrati.svelte';
import MainPage from '../pages/main.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/home2/',
    component: HomePage2,
  },
  {
    path: '/home3/',
    component: HomePage3,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/registrati/',
    component: RegistratiPage
  },
  {
    path: '/main/',
    component: MainPage
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
