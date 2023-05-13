/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

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

//write firebase-messaging-sw.js

// importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');
//
// firebase.initializeApp({
//     apiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
//     authDomain: "push-notifications-57e07.firebaseapp.com",
//     projectId: "push-notifications-57e07",
//     storageBucket: "push-notifications-57e07.appspot.com",
//     messagingSenderId: "494863303445",
//     appId: "1:494863303445:web:9bb4f27860f9f59f889f1c"
// });
//
// const messaging = firebase.messaging();
//
// messaging.onBackgroundMessage(function(payload) {
//     console.log('Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/firebase-logo.png'
//     };
//
//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });
//
// self.addEventListener('notificationclick', function(event) {
//     console.log('notification clicked')
//     event.notification.close();
//     event.waitUntil(
//         clients.openWindow('https://www.example.com')
//     );
// });
//
// self.addEventListener('notificationclose', function(event) {
//     console.log('notification closed')
// });
//
// self.addEventListener('push', function(event) {
//     console.log('notification pushed')
//     event.waitUntil(
//         self.registration.showNotification('Push Notification', {
//             body: 'Hello, World',
//         })
//     );
// });
//
