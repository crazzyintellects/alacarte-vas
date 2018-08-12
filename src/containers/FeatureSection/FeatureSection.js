import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: "30%",
    marginLeft: "50%"
  }
});
/*
openFeatures = () => {
  location.assign('../../features.html');
};
*/
function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" /*onClick={this.openFeatures()}*/ color="primary" className={classes.button}>
        Accept
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
