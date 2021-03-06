import React, { Fragment } from 'react';
import HeaderNav from './containers/Header/HeaderNav';
import HomePage from '../src/containers/Pages/HomePage';
import FeaturesPage from '../src/containers/Pages/FeaturesPage';

import { Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

});

let data=null;

const passToFeature = (props) => {
   data=props;
}


const App = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
         <HeaderNav />
        </Grid>
        <Grid item xs={12}>
          <Route path="/" exact  render={(props) => <HomePage {...props} passDataToParent={passToFeature} />} />
          </Grid>
          <Grid item xs={12}>
          <Route path="/features" render={(props) => <FeaturesPage {...props} featuresData={data} />} />
          </Grid>

      </Grid>
      </div>
    </Fragment>
  );
}
export default withStyles(styles)(App);