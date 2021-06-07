import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import MainView from "./components/MainView";
import Blue from "@material-ui/core/colors/blue";
import Grey from "@material-ui/core/colors/grey";
import Green from "@material-ui/core/colors/green";
import DeepOrange from "@material-ui/core/colors/deepOrange";
import Purple from "@material-ui/core/colors/purple";

const ThemeColors = {
  blue: Blue[500],
  grey: Grey[900],
  green: Green[600],
  orange: DeepOrange[600],
  purple: Purple[600],
};

function App() {
  const [themeColor, setThemeColor] = useState(ThemeColors.blue);
  const [screensize, setScreensize] = useState(window.innerWidth);
  window.onresize = () => setScreensize(window.innerWidth);
  document.body.style.backgroundColor = "#e8e8e8"

  const DeviceVersion = () => {
    if (screensize <= 1336) {
        return "98%"; // For Mobile
    }
    else {
        return "50%"; // For Desktop/Bigger Screen
    }
  }

  return (
    <>
      <Header themeColor={themeColor} setThemeColor={setThemeColor} themes={ThemeColors} />
      <MainView themeColor={themeColor} deviceWidth={DeviceVersion()} />
    </>
  );
}

export default App;
