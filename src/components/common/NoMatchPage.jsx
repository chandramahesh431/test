import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    margin: theme.spacing(10)
  }
});

const NoMatchPage = ({ classes }) => (
  <div className={`${classes.wrapper}`}>
    <div className="row">
      <div className="col-md-8">
        <Typography variant="h4">Page not found :(</Typography>
        <Typography color="textSecondary">
          Maybe the page you are looking for has been removed, or you typed in
          the wrong URL
        </Typography>

        <Button component={Link} to="/" color="primary">
          Got to Home
        </Button>
      </div>
    </div>
  </div>
);

NoMatchPage.propTypes = {
  classes: PropTypes.object // Material UI Injecte
};

export default withStyles(styles)(NoMatchPage);
