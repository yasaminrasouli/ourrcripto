import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

const useStyles = createUseStyles({
  body: {
    display: "flex",
    "@media (max-width: 768px)": {
      position: "relative",
    },
  },
});

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(window.innerWidth >= 768);
  const classes = useStyles();
  return (
    <div className="App">
      <Header onOpenSideBar={() => setIsSideBarOpen((prev) => !prev)} />
      <div className={classes.body}>
        <SideBar
          isOpenMenu={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
        <div>hi</div>
      </div>
    </div>
  );
}

export default App;
