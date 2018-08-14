import React, { Component, Fragment } from 'react';
import FeatureSection from '../../containers/FeatureSection/FeatureSection';
import CardItem from '../../components/CardItem/CardItem';

class FeaturesPage extends Component {
    constructor(props) {
        
        super(props);
        console.log('feature props ', props);
        
    }
    render() {
        return (
            <Fragment>
                <FeatureSection />
<CardItem />
            </Fragment>
        )
    }
}

export default FeaturesPage;