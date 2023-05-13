/* eslint-disable no-restricted-globals */
// /* eslint-disable no-restricted-globals */
// /* eslint-disable no-undef */
// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
// );

// const firebaseConfig = {
//   apiKey: "AIzaSyBJTftUiv33p0B9RmIAKAtyHE0ZQy41t8Y",
//   authDomain: "push-notifications-57e07.firebaseapp.com",
//   projectId: "push-notifications-57e07",
//   storageBucket: "push-notifications-57e07.appspot.com",
//   messagingSenderId: "494863303445",
//   appId: "1:494863303445:web:9bb4f27860f9f59f889f1c",
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

/* eslint-disable no-undef */

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: "AIzaSyBJTftUiv33p0B9RmIAKAtyHE0ZQy41t8Y",
  authDomain: "push-notifications-57e07.firebaseapp.com",
  projectId: "push-notifications-57e07",
  storageBucket: "push-notifications-57e07.appspot.com",
  messagingSenderId: "494863303445",
  appId: "1:494863303445:web:9bb4f27860f9f59f889f1c",
};

// self.addEventListener('push', (event) => {
//   const data = event.data.json();
//   const options = {
//     data: data.notification.data,
//     // Customize other notification options as needed.
//   };

//   event.waitUntil(self.registration.showNotification(data.notification.title, options));
// });

initializeApp(firebaseConfig);
const messaging = getMessaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log("setBackgroundMessageHandler background message ", payload);

  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      const notificationOptions = {
        body: payload.notification.body,
        icon: "./logo.png",
      };
      return self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
    });
  return promiseChain;
});

// messaging.onBackgroundMessage((payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: './logo.png',
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
