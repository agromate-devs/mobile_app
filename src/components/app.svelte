<App { ...f7params }>
  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />
</App>
<script>
  import { onMount } from 'svelte';
  import { getDevice }  from 'framework7/lite-bundle';
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';
  import { initializeApp } from "firebase/app";
  import { firebaseConfig } from '../lib/firebase_config.js';
  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import store from '../js/store';
  
  const app = initializeApp(firebaseConfig);


  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: 'AgroMate', // App name
    theme: 'auto', // Automatic theme detection
    colors: {
      primary: '#00ff96',
    },
    darkMode: false,


    // App store
    store: store,
    // App routes
    routes: routes,


    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  // Login screen demo data
  let username = '';
  let password = '';

  onMount(() => {
    f7ready(() => {

      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
    });
  })
</script>