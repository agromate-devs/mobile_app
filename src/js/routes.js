
import Home from '../pages/home.svelte';
import Home2 from '../pages/home2.svelte';
import Home3 from '../pages/home3.svelte';
import UpdateConfirm from '../pages/update-confirm.svelte';
import UpdateIncorso from '../pages/update-incorso.svelte';
import Profile from '../pages/profile.svelte';
import ListPlant from '../pages/list_plant.svelte';
import HomePage from '../pages/homepage.svelte';
import IdentifyPlant from '../pages/identify_plant.svelte';
import Species from '../pages/species.svelte';


import NotFoundPage from '../pages/404.svelte';
import LoginPage from '../pages/login.svelte';
import RegistratiPage from '../pages/registrati.svelte';

var routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home2/',
    component: Home2,
  },
  {
    path: '/home3/',
    component: Home3,
  },
  {
    path: '/updateconfirm/',
    component: UpdateConfirm,
  },
  {
    path: '/updateincorso/',
    component: UpdateIncorso,
  },
  {
    path: '/profile/',
    component: Profile,
  },
  {
    path: '/list_plant/',
    component: ListPlant,
  },
  {
    path: '/homepage/',
    component: HomePage,
  },
  {
    path: '/identify_plant/',
    component: IdentifyPlant,
  },
  {
    path: '/species/',
    component: Species,
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
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
