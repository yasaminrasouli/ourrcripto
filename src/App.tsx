import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import CryptoBox from "./CryptoBox";
import CryptoBoxDown from "./CryptoBoxDown";
import TradeBox from "./TradeBox";
import QuickTransfer from "./QuickTransfer";
import NewCrypto from "./NewCrypto";

const useStyles = createUseStyles({
  body: {
    display: "flex",
    "@media (max-width: 768px)": {
      position: "relative",
    },
  },
  LeftBox: {
    display: "flex",
    flex: "0 0 auto",
    width: "51.66%",
    padding: "24px",
    flexDirection: "column",
    gap: "24px",
  },
  RightBox: {
    display: "flex",
    flexDirection: "column",
    width: "33.33%",
    padding: "24px",
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
        <div className={classes.LeftBox}>
          <CryptoBox />
          <CryptoBoxDown />
        </div>
        <div className={classes.RightBox}>
          <TradeBox />
          <QuickTransfer />
          <NewCrypto />
        </div>
      </div>
    </div>
  );
}

export default App;
