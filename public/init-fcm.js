import * as firebase from "firebase/app";
import "firebase/messaging";

import { getMessaging } from "firebase/messaging/sw";

firebase.initializeApp({
  apiKey: "AIzaSyBJTftUiv33p0B9RmIAKAtyHE0ZQy41t8Y",
  authDomain: "push-notifications-57e07.firebaseapp.com",
  projectId: "push-notifications-57e07",
  storageBucket: "push-notifications-57e07.appspot.com",
  messagingSenderId: "494863303445",
  appId: "1:494863303445:web:9bb4f27860f9f59f889f1c",
});

const messaging = getMessaging();

messaging.onMessage(function (payload) {
  try {
    //try???
    console.log("Message received. ", payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "logo192.png", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if (
        payload &&
        payload.notification &&
        payload.notification.click_action &&
        payload.notification.click_action.length > 0
      ) {
        window.open(payload.notification.click_action, "_blank");
      }
      this.close();
    };
  } catch (err) {
    console.log("Caught error: ", err);
  }
});

messaging.usePublicVapidKey(
  "BH4iHjV4KWPAFPtA_EsNDALS4rnJaGu8HSeiG9lczuDq1d3_d0oL1rtq2Ir9ORHi0vzyn81G293cDufaBOxG0TI"
);

export { messaging };
