import React, { Component, Fragment } from 'react';
import HeaderNav from '../../containers/Header/HeaderNav';
import FeatureSection from '../../components/FeatureSection/FeatureSection';

class LayoutPage2 extends Component {
    
    render() {
        return (
            <Fragment>
                <HeaderNav />
                <FeatureSection />
            </Fragment>
        )
    }
}

export default LayoutPage2;