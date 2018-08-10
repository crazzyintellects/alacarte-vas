import React, { Component, Fragment } from 'react';
import HeaderNav from '../../containers/Header/HeaderNav';
import CardsSection from '../../components/CardsSection/CardsSection';

class Layout extends Component {
    
    render() {
        return (
            <Fragment>
                <HeaderNav />
                <CardsSection />
            </Fragment>
        )
    }
}

export default Layout;