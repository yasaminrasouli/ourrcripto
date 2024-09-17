import React from "react";
import { SvgIconComponent } from "@mui/icons-material";
import { createUseStyles, Styles } from "react-jss";
import classNames from "classnames";
interface SideBarOptionProps {
  title: string;
  Icon: SvgIconComponent;
  selected?: boolean;
}

const useStyles = createUseStyles({
  sidebarOption: {
    display: "flex",
    alignItems: "center",
    color: "#A9A9A9",
    fontSize: "14px",
    gap: "12px",
    cursor: "pointer",
    borderRadius: "6px",
    padding: "0px 37px 0px 24px",
    borderLeft: "4px solid #fff",
    transition: "500ms",
    "&:hover": {
      backgroundColor: "#F5F8FE",
      borderLeft: "4px solid #2752E7",
      color: "#2752E7",
    },
  },
  active: {
    backgroundColor: "#F5F8FE",
    fontWeight: "bold",
    borderLeft: "4px solid #2752E7",
    color: "#2752E7",
  },
});

function SideBarOption({ title, Icon, selected }: SideBarOptionProps) {
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.sidebarOption, {
        [classes.active]: selected,
      })}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}

export default SideBarOption;
