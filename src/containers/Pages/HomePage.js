import React, { Component, Fragment } from 'react';
import CardsSection from '../../components/CardsSection/CardsSection';
import Grid from '@material-ui/core/Grid';
import IncludedVAS from '../../components/ValueAddedServices/IncludedVAS/IncludedVAS';
import ToBeAddedVAS from '../../components/ValueAddedServices/ToBeAddedVAS/ToBeAddedVAS';
import _ from 'underscore';
import axiosInstance from '../../axiosInstance';
import CircularProgress from '@material-ui/core/CircularProgress';
import Transactions from '../../components/PaymentDetails/tabs';


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

/*const cardServiceMapping = [
{
    cardName: 'Platinum',
    benefits:
    [{
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

    }]

},
{
    cardName: 'Gold',
    benefits:
    [{
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

    }]

},
{
    cardName: 'Green',
    benefits:
    [{
        img: '../../../src/assets/TravelAccidentInsurance.jpg',
        name: 'Travel Accident Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',

    },
    {
        img: '../../../src/assets/AutoPurchaseProgram.jpg',
        name: 'Amex Auto Purchasing Program',
        description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',

    },
    {
        img: '../../../src/assets/ExtendedWarranty.jpg',
        name: 'Extended Warranty',
        description: 'Can extend the original warranty for up to one extra year for purchases made on your Card',

    }]

},
{
    cardName: 'Everyday',
    benefits:
    [{
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',


    },
    {
        img: '../../../src/assets/AutoPurchaseProgram.jpg',
        name: 'Amex Auto Purchasing Program',
        description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',

    },
    {
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',

    }]

},
{
    cardName: 'Hilton',
    benefits:
    [{
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',
    },
    {
        img: '../../../src/assets/AutoPurchaseProgram.jpg',
        name: 'Amex Auto Purchasing Program',
        description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',

    },
    {
        img: '../../../src/assets/ExtendedWarranty.jpg',
        name: 'Extended Warranty',
        description: 'Can extend the original warranty for up to one extra year for purchases made on your Card',


    },{
    img: '../../../src/assets/prioirty-pass-ascend.jpg',
    name: 'NEW! Priority PassTM Select',
    description: 'Wherever your travels take you, relax with complimentary PassTM with 10 free lounge visits every year',
    }]

},

];*/

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardServiceMapping: null,
            includedServices: null,
            toBeAddedServices: null,
        }
    }

    componentDidMount() {

        //Default data entry
        /* axiosInstance.post('/cardbenefits.json',cardServiceMapping)
         .then(response => console.log(response))
         .catch(error => console.log(error)) */

        //fetch all card service mapping
        this.setState({ loading: true });
        axiosInstance.get('cardbenefits/-LJmYN3b9bmqYuWLm-2n.json')
            .then(response => {
                //console.log(response);

                //to be added service
                let names = {};
                _.each(response.data[0].benefits, function (data) { names[data.name] = true; });

                let toBeAddedVas = _.filter(allFeatures, function (val) {
                    return !names[val.name];
                }, response.data[0].benefits);

                this.setState({
                    cardServiceMapping: response.data,
                    includedServices: response.data[0].benefits,
                    toBeAddedServices: toBeAddedVas,
                    loading: false
                });
            })
            .catch(error => {

                //console.log(error);
                this.setState({
                    loading: false
                });
            });

    }


    fetchServices = (titleValue) => {

        const includedVASData = _.filter(this.state.cardServiceMapping, function (cardServices) { return cardServices.cardName === titleValue; });

        let names = {};
        _.each(includedVASData[0].benefits, function (data) { names[data.name] = true; });

        let toBeAddedVas = _.filter(allFeatures, function (val) {
            return !names[val.name];
        }, includedVASData[0].benefits);

        this.setState({
            includedServices: includedVASData[0].benefits,
            toBeAddedServices: toBeAddedVas
        });
    }




    render() {
        let cardInclServices = null;
        let cardToBEservices = null;
        if (this.state.cardServiceMapping) {
            cardInclServices = <IncludedVAS data={this.state.includedServices} />;
            cardToBEservices = <ToBeAddedVAS data={this.state.toBeAddedServices} includedVAS={this.state.includedServices} />;

        }

        if (this.state.loading) {
            cardInclServices = <CircularProgress size={50} color="primary" />;
            cardToBEservices = <CircularProgress size={50} color="secondary" />;
        }


        return (
            <Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <CardsSection passTitletoParent={this.fetchServices} />
                    </Grid>
                    <Grid item xs={6}>
                        {cardInclServices}
                    </Grid>
                    <Grid item xs={6}>
                        {cardToBEservices}
                    </Grid>
                    <Grid item xs={12}>
                        <Transactions/>
                    </Grid>

                </Grid>
            </Fragment>
        )
    }
}

export default HomePage;