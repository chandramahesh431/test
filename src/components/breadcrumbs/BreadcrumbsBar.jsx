import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    height: "50px",
    lineHeight: "50px"
  },
  bar: {
    height: "55px",
    background: "transparent",
    display: "flex",
    lineHeight: "55px"
  }
}));

export default function BreadcrumbsBar() {
  const classes = useStyles();
  return (
    <Breadcrumbs className={classes.root} separator="›" aria-label="breadcrumb">
      {/* <Link color="inherit" href="/login">
        Projects
      </Link> */}
      <Typography variant="h6" className={classes.bar} color="textPrimary">
        Projects
      </Typography>
    </Breadcrumbs>
  );
}
Breadcrumbs.defaultProps = {
  history: ["Projects"]
};
