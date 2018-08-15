import React, { Component, Fragment } from 'react';
import CardsSection from '../../components/CardsSection/CardsSection';
import Grid from '@material-ui/core/Grid';
import IncludedVAS from '../../components/ValueAddedServices/IncludedVAS/IncludedVAS';
import ToBeAddedVAS from '../../components/ValueAddedServices/ToBeAddedVAS/ToBeAddedVAS';
import _ from 'underscore';
import axiosInstance from '../../axiosInstance';
import CircularProgress from '@material-ui/core/CircularProgress';
import Transactions from '../../components/PaymentDetails/tabs';
import { rankMap, highestRankedCategory } from './dynamicNotifications';
import NotificationBar from '../../components/notifications/notifications';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import firebaseInstance from '../../firebaseInstance'




const allFeatures = [
    {
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',
        monthlyAmount: 20,
        yearlyAmount: 200,
        category: 'rental',

    },
    {
        img: '../../../src/assets/FirstBagFree.jpg',
        name: 'First Checked Bag Free',
        description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
        monthlyAmount: '15',
        yearlyAmount: '150',
        category: 'air',

    },
    {
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
        monthlyAmount: 50,
        yearlyAmount: 500,
        category: 'general',

    },
    {
        img: '../../../src/assets/TravelAccidentInsurance.jpg',
        name: 'Travel Accident Insurance',
        description: 'Can provide coverage for loss from an injury.',
        monthlyAmount: 100,
        yearlyAmount: 1000,
        category: 'air',




    },
    {
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',
        monthlyAmount: 10,
        yearlyAmount: 100,
        category: 'air',


    },
    {
        img: '../../../src/assets/ExtendedWarranty.jpg',
        name: 'Extended Warranty',
        description: 'Can extend the original warranty for up to two extra year for purchases made on your Card',
        monthlyAmount: 20,
        yearlyAmount: 200,
        category: 'general',


    },
    {
        img: '../../../src/assets/AutoPurchaseProgram.jpg',
        name: 'Amex Auto Purchasing Program',
        description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',
        monthlyAmount: 30,
        yearlyAmount: 300,
        category: 'general',


    },
    {
        img: '../../../src/assets/CompanionCertificateOpen.jpg',
        name: 'Uber Rides',
        description: 'Enjoy Uber VIP status and $15 in Uber credits for U.S. rides each month, plus a bonus $20 in December.',
        monthlyAmount: 5,
        yearlyAmount: 50,
        category: 'travel',

    },
    {
        img: '../../../src/assets/lounge.JPG',
        name: 'Global Lounge Collection',
        description: 'Enjoy complimentary access to over 1100 airport lounges across 120 countries.',
        monthlyAmount: 40,
        yearlyAmount: 400,
        category: 'air',

    },
    {
        img: '../../../src/assets/Boingo.JPG',
        name: 'Boingo American Express Preferred Plan',
        description: 'Receive Wi-Fi access on up to four devices to more than 1,000,000 hotspots worldwide and pay no Wi-Fi roaming fees. ',
        monthlyAmount: 3,
        yearlyAmount: 30,
        category: 'air',

    },
    {
        img: '../../../src/assets/Baggage.JPG',
        name: 'Baggage Insurance Plan',
        description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
        monthlyAmount: 30,
        yearlyAmount: 300,
        category: 'air',

    },
    {
        img: '../../../src/assets/airbnb.JPG',
        name: 'airbnb Bookings',
        description: 'Receive double points on all airbnb bookings',
        monthlyAmount: 20,
        yearlyAmount: 200,
        category: 'travel',

    },
    {
        img: '../../../src/assets/reward.JPG',
        name: 'Reward Yourself More',
        description: 'Based on your card usage, earn more rewards on qualified expenses.',
        monthlyAmount: 20,
        yearlyAmount: 200,
        category: 'general',

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
        monthlyAmount: '20',
        yearlyAmount: '200',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/FirstBagFree.jpg',
        name: 'First Checked Bag Free',
        description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
        monthlyAmount: '15',
        yearlyAmount: '150',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
        monthlyAmount: '50',
        yearlyAmount: '500',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/TravelAccidentInsurance.jpg',
        name: 'Travel Accident Insurance',
        description: 'Can provide coverage for loss from an injury.',
        monthlyAmount: '100',
        yearlyAmount: '1000',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',
        monthlyAmount: '10',
        yearlyAmount: '100',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/ExtendedWarranty.jpg',
        name: 'Extended Warranty',
        description: 'Can extend the original warranty for up to two extra year for purchases made on your Card',
        monthlyAmount: '20',
        yearlyAmount: '200',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/AutoPurchaseProgram.jpg',
        name: 'Amex Auto Purchasing Program',
        description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',
        monthlyAmount: '30',
        yearlyAmount: '300',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/CompanionCertificateOpen.jpg',
        name: 'Uber Rides',
        description: 'Enjoy Uber VIP status and $15 in Uber credits for U.S. rides each month, plus a bonus $20 in December.',
        monthlyAmount: '5',
        yearlyAmount: '50',
        isSelected: 'true',
        selectedPeriod: 'Annual',
    },
    {
        img: '../../../src/assets/lounge.JPG',
        name: 'Global Lounge Collection',
        description: 'Enjoy complimentary access to over 1100 airport lounges across 120 countries.',
        monthlyAmount: '40',
        yearlyAmount: '400',
        isSelected: 'true',
        selectedPeriod: 'Annual',
    },
    {
        img: '../../../src/assets/Boingo.JPG',
        name: 'Boingo American Express Preferred Plan',
        description: 'Receive Wi-Fi access on up to four devices to more than 1,000,000 hotspots worldwide and pay no Wi-Fi roaming fees. ',
        monthlyAmount: '3',
        yearlyAmount: '30',
        isSelected: 'true',
        selectedPeriod: 'Annual',
    },
    {
        img: '../../../src/assets/Baggage.JPG',
        name: 'Baggage Insurance Plan',
        description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
        monthlyAmount: '30',
        yearlyAmount: '300',
        isSelected: 'true',
        selectedPeriod: 'Annual',
    }]

},
{
    cardName: 'Gold',
    benefits: 
    [{
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',
        monthlyAmount: '20',
        yearlyAmount: '200',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/FirstBagFree.jpg',
        name: 'First Checked Bag Free',
        description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
        monthlyAmount: '15',
        yearlyAmount: '150',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
        monthlyAmount: '50',
        yearlyAmount: '500',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/TravelAccidentInsurance.jpg',
        name: 'Travel Accident Insurance',
        description: 'Can provide coverage for loss from an injury.',
        monthlyAmount: '100',
        yearlyAmount: '1000',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',
        monthlyAmount: '10',
        yearlyAmount: '100',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/ExtendedWarranty.jpg',
        name: 'Extended Warranty',
        description: 'Can extend the original warranty for up to two extra year for purchases made on your Card',
        monthlyAmount: '20',
        yearlyAmount: '200',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/AutoPurchaseProgram.jpg',
        name: 'Amex Auto Purchasing Program',
        description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',
        monthlyAmount: '30',
        yearlyAmount: '300',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/Baggage.JPG',
        name: 'Baggage Insurance Plan',
        description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
        monthlyAmount: '30',
        yearlyAmount: '300',
        isSelected: 'true',
        selectedPeriod: 'Annual',
    }]

},
{
    cardName: 'Green',
    benefits: 
    [{
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',
        monthlyAmount: '20',
        yearlyAmount: '200',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/FirstBagFree.jpg',
        name: 'First Checked Bag Free',
        description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
        monthlyAmount: '15',
        yearlyAmount: '150',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
        monthlyAmount: '50',
        yearlyAmount: '500',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',
        monthlyAmount: '10',
        yearlyAmount: '100',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/ExtendedWarranty.jpg',
        name: 'Extended Warranty',
        description: 'Can extend the original warranty for up to two extra year for purchases made on your Card',
        monthlyAmount: '20',
        yearlyAmount: '200',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/AutoPurchaseProgram.jpg',
        name: 'Amex Auto Purchasing Program',
        description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',
        monthlyAmount: '30',
        yearlyAmount: '300',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/Baggage.JPG',
        name: 'Baggage Insurance Plan',
        description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
        monthlyAmount: '30',
        yearlyAmount: '300',
        isSelected: 'true',
        selectedPeriod: 'Annual',
    }]

},
{
    cardName: 'Everyday',
    benefits:
    [{
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',
        monthlyAmount: '20',
        yearlyAmount: '200',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/Baggage.JPG',
        name: 'Baggage Insurance Plan',
        description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
        monthlyAmount: '30',
        yearlyAmount: '300',
        isSelected: 'true',
        selectedPeriod: 'Annual',
    }]

},
{
    cardName: 'Hilton',
    benefits: 
    [{
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',
        monthlyAmount: '20',
        yearlyAmount: '200',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/FirstBagFree.jpg',
        name: 'First Checked Bag Free',
        description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
        monthlyAmount: '15',
        yearlyAmount: '150',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
        monthlyAmount: '50',
        yearlyAmount: '500',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/TravelAccidentInsurance.jpg',
        name: 'Travel Accident Insurance',
        description: 'Can provide coverage for loss from an injury.',
        monthlyAmount: '100',
        yearlyAmount: '1000',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',
        monthlyAmount: '10',
        yearlyAmount: '100',
        isSelected: 'true',
        selectedPeriod: 'Annual',

    },
    {
        img: '../../../src/assets/Baggage.JPG',
        name: 'Baggage Insurance Plan',
        description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
        monthlyAmount: '30',
        yearlyAmount: '300',
        isSelected: 'true',
        selectedPeriod: 'Annual',
    }]

},
        
];*/

class HomePage extends Component {

    constructor(props) {
        super(props);
        //console.log('home props ', props);
        this.state = {
            cardServiceMapping: null,
            includedServices: null,
            toBeAddedServices: null,
            cardName:'',
            showNotification: false,
            notificationMsg: '',
            iconNotification:false,

        }
    }

    componentDidMount() {
        const currentComponent = this;
        let init = true;
        const starCountRef = firebaseInstance.database().ref('-LJu575aGyByO4FqneBZ/recentTransactions/Green/pending/transactions/');
        starCountRef.on('value', function(snapshot) {
            init = false;const iconNot = true;

            currentComponent.setState({
                showNotification: !init,
                notificationMsg: 'Share your experience at Jamba Juice with your loved ones.',
                iconNotification:iconNot,
            });
        });
        //Default data entry
         /*axiosInstance.post('/cardbenefits.json',cardServiceMapping)
         .then(response => console.log(response))
         .catch(error => console.log(error)) */

        //fetch all card service mapping
        this.setState({ loading: true});
        let networkDataReceived = false;
        axiosInstance.get('-LJu4D1RTmj_U1MGFR8i/cardbenefits.json')
            .then(response => {
                console.log('From web db ' + response.data[0].benefits);
                networkDataReceived = true;
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
                    cardName: response.data[0].cardName,
                    loading: false
                }, () => { this.fetchServices(response.data[0].cardName) });
            })
            .catch(error => {

                //console.log(error);
                this.setState({
                    loading: false
                });
            });

        if ('indexedDB' in window) {
            readAKeyData('cardbenefits', 'Platinum')
                .then(dataBenefits => {
                    if (!networkDataReceived) {
                        console.log('From cache', dataBenefits);

                        //filter logic
                        let names = {};
                        _.each(dataBenefits[0], function (data) {
                            names[data.name] = true;
                        });

                        /* dataBenefits.forEach(function(entry){
                             entry.childNodes.forEach(function(childrenEntry) { // was missing a )
                               console.log(childrenEntry.name);
                             });
                         });*/

                        let toBeAddedVas = _.filter(allFeatures, function (val) {
                            return !names[val.name];
                        }, dataBenefits);
                        console.log('toBeAddedVas ', toBeAddedVas);

                        this.setState({
                            cardServiceMapping: dataBenefits[0],
                            includedServices: dataBenefits[0],
                            toBeAddedServices: toBeAddedVas,
                            cardName: 'Platinum',
                            loading: false
                        });

                    }
                });






        }
    }


    fetchServices = (titleValue) => {
        let constHighRank ='';
        this.setState({ loading: true });
        let networkDataReceived = false;
        axiosInstance.get(`-LJu575aGyByO4FqneBZ/recentTransactions/${titleValue}.json`)
            .then(response => {
                //console.log(response);
                networkDataReceived = true;
                //console.log(rankMap(response.data.pending.transactions))
                constHighRank = highestRankedCategory(rankMap([...response.data.pending.transactions,...response.data.posted.transactions]));
                //to be added service
                //let names = {};
              //  _.each(response.data[0].benefits, function (data) { names[data.name] = true; });

               /* let toBeAddedVas = _.filter(allFeatures, function (val) {
                    return !names[val.name];
                }, response.data[0].benefits);*/

                this.setState({
                    transactionData:response.data,
                    loading: false,
                    showNotification: (constHighRank!== undefined && constHighRank !==''),
                    notificationMsg: `Based on your usage, checkout these ${constHighRank} related benefits.`,
                    iconNotification:false,
                    constHighRank,

                });
            })
            .catch(error => {

                //console.log(error);
                this.setState({
                    loading: false
                });
            });

         //Dynamic Caching --offline

         if ('indexedDB' in window) {
            readAKeyData('cardbenefits', titleValue)
                .then(dataBenefits => {
                    if (!networkDataReceived) {
                        console.log('From cache fetch for card ', dataBenefits);

                        //filter logic
                        let names = {};
                        _.each(dataBenefits[0], function (data) {
                            names[data.name] = true;
                        });


                        let toBeAddedVas = _.filter(allFeatures, function (val) {
                            return !names[val.name];
                        }, dataBenefits);
                        console.log('toBeAddedVas ', toBeAddedVas);

                        this.setState({
                            cardServiceMapping: dataBenefits[0],
                            includedServices: dataBenefits[0],
                            toBeAddedServices: toBeAddedVas,
                            cardName: titleValue,

                        });

                    }
                    else{

                        const includedVASData = _.filter(this.state.cardServiceMapping, function (cardServices) { return cardServices.cardName === titleValue; });
            
                        let names = {};
                        _.each(includedVASData[0].benefits, function (data) { names[data.name] = true; });
            
                        let toBeAddedVas = _.filter(allFeatures, function (val) {
                            return !names[val.name];
                        }, includedVASData[0].benefits);
            
                        this.setState({
                            includedServices: includedVASData[0].benefits,
                            toBeAddedServices: toBeAddedVas,
                            cardName: titleValue,
                        });
            
            
                    }
                });

        }

    }

    passDataToFeatures = () => {
        const location = {
            pathname: '/features',
            state: { data : "this.state" }
          };
          this.props.history.push(location);
          this.props.passDataToParent(this.state);


    }
    handleClickAway = () => {
        this.setState({
            showNotification: false,
        });
    };




    render() {
        let cardInclServices = null;
        let cardToBEservices = null;
        if (this.state.cardServiceMapping) {
            cardInclServices = <IncludedVAS data={this.state.includedServices} />;
            cardToBEservices = <ToBeAddedVAS data={this.state.toBeAddedServices} highRankCat={this.state.constHighRank} includedVAS={this.state.includedServices}
             cardName={this.state.cardName}
             callToParent={this.passDataToFeatures}
            />;

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
                        <Transactions transactionData={this.state.transactionData}/>
                    </Grid>
                    <Grid item xs={12}>
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                        <NotificationBar open={this.state.showNotification} iconNotification={this.state.iconNotification} data={this.state.notificationMsg} />
                        </ClickAwayListener>

                    </Grid>

                </Grid>
            </Fragment>
        )
    }
}

export default HomePage;