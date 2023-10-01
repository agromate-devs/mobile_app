<script>
  import { Navbar, Page } from 'framework7-svelte';
  import { PushNotifications } from '@capacitor/push-notifications';
  import { onMount } from 'svelte';
  import { get_current_user_jwt } from '../lib/firebase_auth.js';
 
  const NOTIFICATION_REGISTER_API = "https://2wim7lhf18.execute-api.eu-central-1.amazonaws.com";

  const addListeners = async () => {
  await PushNotifications.addListener('registration', async token => {
    console.info('Registration token: ', token.value);

    let registration_status = localStorage.getItem("notification_registered");
    console.log("registration_status: ", registration_status);
    if(registration_status == "true")	// Not register again if we're registered yet
    	return;

    let jwt = await get_current_user_jwt();
    let response = await (await fetch(NOTIFICATION_REGISTER_API + '?token=' + token.value, {
					method: 'POST',
					headers: new Headers({
						authorization: jwt.token,
						'content-type': 'application/x-www-form-urlencoded'
					})
				})
			).text();

	if(response == "OK"){
		alert("Registered successfully");
		localStorage.setItem("notification_registered", "true");
	}else {
		alert("Error during invocation of SNS register API");
	}
   });

  await PushNotifications.addListener('registrationError', err => {
    console.error('Registration error: ', err.error);
    alert("Error during registring at SNS");
  });

  await PushNotifications.addListener('pushNotificationReceived', notification => {
    console.log('Push notification received: ', notification);
    console.log("Notification: ", JSON.stringify(notification));
  });

  await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    console.log('Push notification action performed', notification.actionId, notification.inputValue);
  });
}

const registerNotifications = async () => {
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    throw new Error('User denied permissions!');
  }

  await PushNotifications.register();
}

onMount(async () => {
	await registerNotifications();
	await addListeners();
});	
</script>

<Page>
  <Navbar title="FCM + SNS Test" />
  <p>Notification status: </p> 
	
</Page>
