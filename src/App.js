/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

const App = () => {
  useEffect(() => {
    const handlePermissionRequest = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey:
              "BH4iHjV4KWPAFPtA_EsNDALS4rnJaGu8HSeiG9lczuDq1d3_d0oL1rtq2Ir9ORHi0vzyn81G293cDufaBOxG0TI",
          });
          alert("token", token);
          console.log("token", token);
        }
      } catch (error) {
        console.log("eeee", error);
      }
    };

    handlePermissionRequest();
  }, []);

  return <div>Hello world</div>;
};

export default App;
