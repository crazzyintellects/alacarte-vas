import React, { Component, Fragment } from 'react';
import CardsSection from '../../components/CardsSection/CardsSection';
import Grid from '@material-ui/core/Grid';
import IncludedVAS from '../../components/ValueAddedServices/IncludedVAS/IncludedVAS';
import ToBeAddedVAS from '../../components/ValueAddedServices/ToBeAddedVAS/ToBeAddedVAS';
import TransactionHisSection from "./transactions";

import {Route} from "react-router-dom";
class HomePage extends Component {

    render() {
        return (
            <Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <CardsSection />
                    </Grid>
                    <Grid item xs={6}>
                        <IncludedVAS />
                    </Grid>
                    <Grid item xs={6}>
                       <ToBeAddedVAS />
                    </Grid>
                    <Grid item xs={6}>
                        <TransactionHisSection/>
                    </Grid>

                </Grid>
            </Fragment>
        )
    }
}

export default HomePage;