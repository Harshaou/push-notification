/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJTftUiv33p0B9RmIAKAtyHE0ZQy41t8Y",
  authDomain: "push-notifications-57e07.firebaseapp.com",
  projectId: "push-notifications-57e07",
  storageBucket: "push-notifications-57e07.appspot.com",
  messagingSenderId: "494863303445",
  appId: "1:494863303445:web:9bb4f27860f9f59f889f1c",
};

initializeApp(firebaseConfig);

self.addEventListener("push", (event) => {
  const data = event.data.json();
  const options = {
    data: data.notification.data,
    // Customize other notification options as needed
  };

  event.waitUntil(
    self.registration.showNotification(data.notification.title, options)
  );
});
