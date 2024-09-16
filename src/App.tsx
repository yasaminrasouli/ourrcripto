import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import "./App.css";
import { Styles, createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app_body: {
    display: "flex",
    height: "100vh",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <div className={classes.app_body}>
        <SideBar />
        hi
      </div>
    </div>
  );
}

export default App;
