import React from "react";
import { createUseStyles, Styles } from "react-jss";
import logo from "./Logo.png";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Padding } from "@mui/icons-material";

const useStyles = createUseStyles({
  myHeader: {
    backgroundColor: "white",
    width: "100%",
    borderBottom: "1px solid #E3E3E3",
    height: "86px",
    display: "flex",
    alignItems: "center",
  },
  rightHeader: {
    display: "flex",
    flex: "1",
    justifyContent: "space-between",
  },
  leftHeader: {
    flex: "0.2",
  },
  textHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px 0 20px 0",
    "& p": {
      margin: "0",
      fontSize: "12px",
      color: "#626262",
      lineHeight: "20px",
      fontWeight: "600",
    },
    "& h4": {
      margin: "0",
      color: "#000",
      lineHeight: "26px",
    },
  },
  userHeader: {
    display: "flex",
    alignItems: "center",
    paddingRight: "24px",
  },
  searchHeader: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #CACACA",
    borderRadius: "6px",
    "& input": { border: "none" },
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.myHeader}>
      <div className={classes.leftHeader}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes.rightHeader}>
        <div className={classes.textHeader}>
          <h4>Welcome Zarror!</h4>
          <p>Hope you are healthy and happy today...</p>
        </div>
        <div className={classes.userHeader}>
          <div className={classes.searchHeader}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input placeholder="Search..." type="text" />
          </div>
          <NotificationsNoneRoundedIcon style={{ padding: "0 12px" }} />
          <Avatar />
          <KeyboardArrowDownRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
