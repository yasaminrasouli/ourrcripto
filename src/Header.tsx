import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import logo from "./Logo.png";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SideBar from "./SideBar";

// Define styles using react-jss
const useStyles = createUseStyles({
  myHeader: {
    backgroundColor: "white",
    width: "100%",
    borderBottom: "1px solid #E3E3E3",
    height: "86px",
    display: "flex",
    alignItems: "center",
    position: "relative", // Adjusted for sidebar placement
  },
  rightHeader: {
    display: "flex",
    flex: "1",
    justifyContent: "space-between",
  },
  leftHeader: {
    flex: "0.2",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  textHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px 0",
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
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  userHeader: {
    display: "flex",
    alignItems: "center",
    paddingRight: "24px",
    marginLeft: "auto",
  },
  searchHeader: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #CACACA",
    borderRadius: "6px",
    "& input": {
      border: "none",
      padding: "8px",
      borderRadius: "6px",
      outline: "none",
    },
    "@media (max-width: 768px)": {
      marginRight: "12px",
    },
  },
  notificationIcon: {
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  ArrowDownRoundedIcon: {
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  Menu: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
});

function Header() {
  const classes = useStyles();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle search input visibility
  const handleSearchToggle = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  // Toggle sidebar visibility
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.myHeader}>
      <SideBar isOpenMenu={isSidebarOpen} onClose={handleSidebarToggle} />
      <div className={classes.leftHeader}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes.Menu} onClick={handleSidebarToggle}>
        <MenuOutlinedIcon />
      </div>
      <div className={classes.rightHeader}>
        <div className={classes.textHeader}>
          <h4>Welcome Zarror!</h4>
          <p>Hope you are healthy and happy today...</p>
        </div>
        <div className={classes.userHeader}>
          <div className={classes.searchHeader} onClick={handleSearchToggle}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            {isSearchOpen && <input placeholder="Search..." type="text" />}
          </div>
          <NotificationsNoneRoundedIcon
            className={classes.notificationIcon}
            style={{ padding: "0 12px" }}
          />
          <Avatar />
          <KeyboardArrowDownRoundedIcon
            className={classes.ArrowDownRoundedIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
