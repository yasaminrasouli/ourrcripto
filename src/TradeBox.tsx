import { createUseStyles } from "react-jss";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import { Select, MenuItem, InputBase, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const useStyles = createUseStyles({
  mainBox: {
    background: "#fff",
    borderRadius: "8px",
    padding: "16px",
    gap: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: "16px",
  },
  headerOption: {
    flex: 1,
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "8px 0",
    cursor: "pointer",
    color: "#BDBDBD",
    "&.active": {
      color: "#2752E7",
    },
  },
  priceInfo: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  transeferContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  transefer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #CACACA",
    padding: "8px 16px",
    borderRadius: "8px",
  },
  input: {
    border: "none",
    width: "100%",
    fontSize: "16px",
  },
  changeIcon: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#fff",
    borderRadius: "50%",
    padding: "4px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    zIndex: 1,
  },
  selectIcon: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  mainBottom: {
    width: "100%",
    borderRadius: "8px",
    background: "#2752E7",
    padding: "12px",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    "&:hover": {
      background: "#1b3ba2",
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "14px",
    top: "-8px",
    position: "absolute",
    left: "5px",
    background: "#fff",
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}));

function TradeBox() {
  const classes = useStyles();
  const [amount, setAmount] = useState<number>(1);
  const [fromCur, setFromCur] = useState<string>("BTC");
  const [toCur, setToCur] = useState<string>("ETH");
  const [converted, setConverted] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isValidNumber = (value: string): boolean => {
    return !isNaN(Number(value)) && value.trim() !== "" && !value.includes(" ");
  };

  useEffect(() => {
    async function convert() {
      if (error) return;
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=eth`
        );
        const data = await res.json();

        if (fromCur === "BTC" && toCur === "ETH") {
          setConverted((data.bitcoin.eth * amount).toString());
        } else if (fromCur === "ETH" && toCur === "BTC") {
          setConverted(((1 / data.bitcoin.eth) * amount).toString());
        } else {
          setConverted("N/A");
        }
      } catch (error) {
        console.error("Error fetching conversion data:", error);
        setConverted("Error");
      }
    }

    convert();
  }, [amount, fromCur, toCur, error]);

  return (
    <div className={classes.mainBox}>
      <div className={classes.header}>
        <div className={`${classes.headerOption} active`}>Buy</div>|
        <div className={classes.headerOption}>Sell</div>
      </div>
      <div className={classes.priceInfo}>
        {converted ? `$${converted}` : "$0.00"}
      </div>
      <div className={classes.transeferContainer}>
        <div className={classes.transefer}>
          <input
            className={classes.input}
            value={amount}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (isValidNumber(inputValue)) {
                setAmount(Number(inputValue));
                setError("");
              } else {
                setConverted("");
                setError("Error: Invalid input");
              }
            }}
          />
          <div className={classes.selectIcon}>
            <img
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024"
              alt="btc"
              style={{ width: "24px" }}
            />
            <Select
              input={<BootstrapInput />}
              value={fromCur}
              onChange={(e) => setFromCur(e.target.value)}
            >
              <MenuItem value="BTC">BTC</MenuItem>
              <MenuItem value="ETH">ETH</MenuItem>
            </Select>
          </div>
        </div>
        {error && <div className={classes.errorMessage}>{error}</div>}
        <ChangeCircleRoundedIcon
          className={classes.changeIcon}
          color="primary"
          style={{ width: "32px", height: "32px" }}
        />
        <div className={classes.transefer}>
          <input className={classes.input} value={converted} readOnly />

          <div className={classes.selectIcon}>
            <img
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024"
              alt="eth"
              style={{ width: "24px" }}
            />
            <Select
              input={<BootstrapInput />}
              value={toCur}
              onChange={(e) => setToCur(e.target.value)}
            >
              <MenuItem value="BTC">BTC</MenuItem>
              <MenuItem value="ETH">ETH</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <Button className={classes.mainBottom}>Buy ETH</Button>
    </div>
  );
}

export default TradeBox;
