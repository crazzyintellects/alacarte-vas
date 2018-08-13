import React, { Component, Fragment } from 'react';
import CardsSection from '../../components/CardsSection/CardsSection';
import Grid from '@material-ui/core/Grid';
import IncludedVAS from '../../components/ValueAddedServices/IncludedVAS/IncludedVAS';
import ToBeAddedVAS from '../../components/ValueAddedServices/ToBeAddedVAS/ToBeAddedVAS';
import _ from 'underscore';

const allFeatures = [
    {
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',

    },
    {
        img: '../../../src/assets/FirstBagFree.jpg',
        name: 'First Checked Bag Free',
        description: 'You can check your first bag for free and save up to $50 on a round-trip flight',

    },
    {
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',

    },
    {
        img: '../../../src/assets/TravelAccidentInsurance.jpg',
        name: 'Travel Accident Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',

    },
    {
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',

    },
    {
        img: '../../../src/assets/ExtendedWarranty.jpg',
        name: 'Extended Warranty',
        description: 'Can extend the original warranty for up to one extra year for purchases made on your Card',

    },
    {
        img: '../../../src/assets/prioirty-pass-ascend.jpg',
        name: 'NEW! Priority PassTM Select',
        description: 'Wherever your travels take you, relax with complimentary PassTM with 10 free lounge visits every year',

    },
    {
        img: '../../../src/assets/AutoPurchaseProgram.jpg',
        name: 'Amex Auto Purchasing Program',
        description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',

    },
    {
        img: '../../../src/assets/CompanionCertificateOpen.jpg',
        name: 'Companion Certificate',
        description: 'With your Annual Companion Certificate, you can pair up and go',

    },
];

const includedVASData = [
    {
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',

    },
    {
        img: '../../../src/assets/FirstBagFree.jpg',
        name: 'First Checked Bag Free',
        description: 'You can check your first bag for free and save up to $50 on a round-trip flight',

    },
    {
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',

    },
    {
        img: '../../../src/assets/TravelAccidentInsurance.jpg',
        name: 'Travel Accident Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',

    },
    {
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',

    },
];

let names = {};
_.each(includedVASData, function (data) { names[data.name] = true; });

let toBeAddedVas = _.filter(allFeatures, function(val){
    return !names[val.name];
}, includedVASData);


class HomePage extends Component {

    render() {  
        return (
            <Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <CardsSection />
                    </Grid>
                    <Grid item xs={6}>
                        <IncludedVAS data={includedVASData}/>
                    </Grid>
                    <Grid item xs={6}>
                       <ToBeAddedVAS data={toBeAddedVas} />
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default HomePage;