import React, { useState } from "react";
import Screen1 from "./Components/Screen1/Screen1";
import Screen2 from "./Components/Screen2/Screen2";
import Screen3 from "./Components/Screen3/Screen3";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(1);
  const [userData, setUserData] = useState("");

  const renderscreen = () => {
    switch (screen) {
      case 1:
        return <Screen1 setScreen={setScreen} setUserData={setUserData} />;
      case 2:
        return <Screen2 setScreen={setScreen} userData={userData} />;
      case 3:
        return <Screen3 userData={userData} />;
      default:
        return null;
    }
  };

  return <div className="App">{renderscreen()}</div>;
}

export default App;
