import { SvgIconComponent } from "@mui/icons-material";
import { createUseStyles } from "react-jss";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

interface CryptoOptionProps {
  title: string;
  Icon: SvgIconComponent;
  status?: boolean;
  price: string;
  ascending: string;
}

const useStyles = createUseStyles({
  CryptoOption: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "16px 20px",
    borderRadius: "6px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    gap: "16px",
    width: "100%",
    maxWidth: "227PX",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "14px",
    fontWeight: "600",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#D0DBFF",
    borderRadius: "50%",
    height: "32px",
    width: "32px",
  },
  title: {
    marginLeft: "12px",
  },
  detailsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  price: {
    fontSize: "18px",
    color: "#333",
    fontWeight: "600",
  },
  ascending: {
    marginTop: "4px",
    fontSize: "14px",
    color: "#4caf50",
    fontWeight: "600",
  },
});

function CryptoOption({
  title,
  Icon,
  status,
  price,
  ascending,
}: CryptoOptionProps) {
  const classes = useStyles();

  return (
    <div className={classes.CryptoOption}>
      <div className={classes.header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={classes.iconWrapper}>
            <Icon style={{ height: "24px", width: "24px" }} color="primary" />
          </div>
          <p className={classes.title}>{title}</p>
        </div>
        <span>
          {status ? (
            <TrendingUpIcon sx={{ color: "#53D258" }} />
          ) : (
            <TrendingDownIcon sx={{ color: "#E25C5C" }} />
          )}
        </span>
      </div>
      <div className={classes.detailsWrapper}>
        <span className={classes.price}>{price}</span>
        <span className={classes.ascending}>{ascending}</span>
      </div>
    </div>
  );
}

export default CryptoOption;
