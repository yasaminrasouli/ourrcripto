import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import logo from "./Logo.png";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  onOpenSideBar: () => void;
}

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
    cursor: "pointer",
    "@media (max-width: 768px)": {
      display: "none",
    },
    "@media (min-width: 768px) and (max-width: 1200px)": {
      flex: "0.5",
    },
  },
  menuIcon: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
      cursor: "pointer",
      padding: "0 12px",
    },
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
      "&:focus": {
        outline: "none",
      },
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
});

const Header: React.FC<HeaderProps> = ({ onOpenSideBar }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.myHeader}>
      <div className={classes.leftHeader}>
        <img src={logo} alt="Logo" />
      </div>
      <IconButton className={classes.menuIcon} onClick={onOpenSideBar}>
        <MenuIcon />
      </IconButton>

      <div className={classes.rightHeader}>
        <div className={classes.textHeader}>
          <h4>Welcome Zarror!</h4>
          <p>Hope you are healthy and happy today...</p>
        </div>
        <div className={classes.userHeader}>
          <div className={classes.searchHeader}>
            <IconButton onClick={handleOpen}>
              <SearchIcon />
            </IconButton>
            {isOpen && <input placeholder="Search..." type="text" />}
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
};

export default Header;
