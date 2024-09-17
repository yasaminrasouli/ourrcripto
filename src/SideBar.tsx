import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SideBarOption from "./SideBarOption";
import { createUseStyles } from "react-jss";

// Define the interface for your component props
interface SideBarProps {
  isOpenMenu: boolean;
  onClose: () => void; // Prop to handle close
}

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
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    transition: "transform 0.3s ease",
    transform: (props: SideBarProps) =>
      props.isOpenMenu ? "translateX(0)" : "translateX(-100%)",
    "@media (min-width: 768px)": {
      display: "flex",
      transform: "translateX(0)",
    },
  },
});

function SideBar({ isOpenMenu, onClose }: SideBarProps) {
  const classes = useStyles({ isOpenMenu, onClose });

  return (
    <div className={classes.SideBar}>
      <div>
        {isOpenMenu && <CloseIcon onClick={onClose} />}
        {options.map((option, index) => (
          <SideBarOption
            key={index}
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
