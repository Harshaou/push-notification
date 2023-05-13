import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import logo from "./logo.svg";
import "./App.css";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BH4iHjV4KWPAFPtA_EsNDALS4rnJaGu8HSeiG9lczuDq1d3_d0oL1rtq2Ir9ORHi0vzyn81G293cDufaBOxG0TI",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return <div className="App">Hello world</div>;
}

export default App;
