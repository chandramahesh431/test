import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useTheme } from "@material-ui/core/styles";
import CytelLogo from "../../../src/assets/images/logo-Cytel-color.svg";

const useStyles = makeStyles(theme => ({
  avatar: {
    marginLeft: "auto",
    width: "2em",
    height: "2em",
    marginRight: "150px",
    position: "absolute",
    left: "0%",
    right: "0%",
    background: "#FFFFFF",
    border: "1px solid rgba(0, 82, 156, 0.3)",
    boxSizing: "border-box"
  },
  logo: {
    marginLeft: "150px",
    marginRight: "24px !important",
    width: "63px",
    height: "30px"
  },
  pipe: {
    marginRight: "9px",
    color: "#C5C6C7"
  },
  productName: {
    color: "#C5C6C7"
  }
}));

const Header = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <img className={classes.logo} src={CytelLogo} alt="Logo" />
        <Typography className={classes.pipe}>|</Typography>
        <Typography className={classes.productName}>Solaris</Typography>

        <Avatar className={classes.avatar}></Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
