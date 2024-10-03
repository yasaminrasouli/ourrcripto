import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CryptoOption from "./CryptoOption";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Cryptobox: {
    display: "flex",
    gap: "24px",
  },
});

const options = [
  {
    title: "Balance",
    Icon: AccountBalanceWalletRoundedIcon,
    status: true,
    price: "$40,000,063",
    ascending: "+35,74%",
  },
  {
    title: "Spending",
    Icon: CurrencyExchangeRoundedIcon,
    status: false,
    price: "-$103,000",
    ascending: "+10,74%",
  },
  {
    title: "Saved",
    Icon: AttachMoneyRoundedIcon,
    status: true,
    price: "$103,000",
    ascending: "+10,74%",
  },
];

function CryptoBox() {
  const classes = useStyles();
  return (
    <div className={classes.Cryptobox}>
      {options.map((option, index) => (
        <CryptoOption
          key={index}
          title={option.title}
          Icon={option.Icon}
          status={option.status}
          price={option.price}
          ascending={option.ascending}
        />
      ))}
    </div>
  );
}

export default CryptoBox;
