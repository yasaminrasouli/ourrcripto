import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SideBarOption from "./SideBarOption";
import { createUseStyles, Styles } from "react-jss";

const options = [
  { title: "Dashboard", Icon: HomeOutlinedIcon, selected: true },
  { title: "Analytics", Icon: AnalyticsOutlinedIcon, selected: false },
  { title: "My Portfolio", Icon: EditNoteOutlinedIcon, selected: false },
  {
    title: "My Wallets",
    Icon: AccountBalanceWalletOutlinedIcon,
    selected: false,
  },
  { title: "Exchanges", Icon: ShowChartOutlinedIcon, selected: false },
  { title: "Settings", Icon: SettingsOutlinedIcon, selected: false },
  { title: "Help", Icon: InfoOutlinedIcon, selected: false },
  { title: "Log out", Icon: LogoutOutlinedIcon, selected: false },
];

const useStyles = createUseStyles({
  SideBar: {
    display: "flex",
    background: "#fff",
    flex: "0.3",
    maxWidth: "252px",
    justifyContent: "center",
    padding: "24px 0",
  },
});

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.SideBar}>
      <div>
        {options.map((option, index) => (
          <SideBarOption
            title={option.title}
            Icon={option.Icon}
            selected={option.selected}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
