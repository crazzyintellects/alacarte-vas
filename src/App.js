import React, { Fragment } from 'react';
import HeaderNav from './containers/Header/HeaderNav';
import HomePage from '../src/containers/Pages/HomePage';
import FeaturesPage from '../src/containers/Pages/FeaturesPage';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <HeaderNav />
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/features" component={FeaturesPage} />
      </div>
    </Fragment>
  );
}
export default App;