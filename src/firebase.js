import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBJTftUiv33p0B9RmIAKAtyHE0ZQy41t8Y",
  authDomain: "push-notifications-57e07.firebaseapp.com",
  projectId: "push-notifications-57e07",
  storageBucket: "push-notifications-57e07.appspot.com",
  messagingSenderId: "494863303445",
  appId: "1:494863303445:web:9bb4f27860f9f59f889f1c",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
