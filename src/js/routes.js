
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
import AgrosmartView from '../pages/agrosmart_view.svelte';
import WifiLoader from '../pages/wifi_loader.svelte';
import ConnectionEsp from '../pages/connection_esp.svelte';
import Coltivation from '../pages/coltivation.svelte';
import Temperature from '../pages/temperature.svelte';
import Illuminazione from '../pages/illuminazione.svelte';
import Precipitazioni from '../pages/precipitazioni.svelte';
import Umidita from '../pages/umidita.svelte';


import NotFoundPage from '../pages/404.svelte';
import LoginPage from '../pages/login.svelte';
import RegistratiPage from '../pages/registrati.svelte';
import PlantPage from '../pages/plant.svelte';
import WishlistPage from '../pages/wishlist.svelte';

var routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home2/",
    component: Home2,
  },
  {
    path: "/home3/",
    component: Home3,
  },
  {
    path: "/updateconfirm/",
    component: UpdateConfirm,
  },
  {
    path: "/updateincorso/",
    component: UpdateIncorso,
  },
  {
    path: "/profile/",
    component: Profile,
  },
  {
    path: "/list_plant/",
    component: ListPlant,
  },
  {
    path: "/homepage/",
    component: HomePage,
  },
  {
    path: "/identify_plant/",
    component: IdentifyPlant,
  },
  {
    path: "/species/",
    component: Species,
  },
  {
    path: "/agrosmart_view/",
    component: AgrosmartView,
  },
  {
    path: "/login/",
    component: LoginPage,
  },
  {
    path: "/registrati/",
    component: RegistratiPage,
  },
  {
    path: "/wifi_loader/",
    component: WifiLoader,
  },
  {
    path: "/connection_esp/",
    component: ConnectionEsp,
  },
  {
    path: "/coltivation/",
    component: Coltivation,
  },
  {
    path: "/temperature/",
    component: Temperature,
  },
  {
    path: "/plant/",
    component: PlantPage,
  },
  {
    path: "/illuminazione/",
    component: Illuminazione,
  },
  {
    path: "/preceipitazioni/",
    component: Precipitazioni,
  },
  {
    path: "/umidita/",
    component: Umidita,
  },
  {
    path: "/wishlist/",
    component: WishlistPage
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;