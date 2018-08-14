import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import axiosInstance from '../../axiosInstance';
import firebaseInstance from '../../firebaseInstance'

const styles = theme => ({
  root: {
    display:"flex",
    alignItems:"center",
    marginTop:"10%",
    marginLeft:"45%"
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700]
    }
  },
  buttonProgress: {
    color: blue[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

class CircularIntegration extends React.Component {
  timer = null;

  state = {
    loading: false,
    success: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true
            });
          }, 2000);
        }
      );
    }
  };

  render() {
    const { loading, success } = this.state;
    const { classes } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success
    });

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={this.handleButtonClick}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
    );
  }
}

const saveDataToDatabase = (props) => {
  console.log('Saving Data To Database');
  const benefits = {benefits:{description:'New Benefit Added',name:'Benefit 1'}}; 
  var databaseInstance = firebaseInstance.database();
  var dataRef = databaseInstance.ref();
  /*dataRef.push({
    'benefits': {description:'This is description'},
   });*/
   const cardServiceMapping = [
    {
        cardName: 'Platinum',
        benefits: 
        [{
            img: '../../../src/assets/CarIcon.jpg',
            name: 'Car Rental Loss & Damage Insurance',
            description: 'Can provide coverage for theft of or damage to eligible rental vehicles',
            monthlyAmount: '$20',
            yearlyAmount: '$200',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/FirstBagFree.jpg',
            name: 'First Checked Bag Free',
            description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
            monthlyAmount: '$15',
            yearlyAmount: '$150',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/PurchaseProtection.jpg',
            name: 'Purchase Protection',
            description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
            monthlyAmount: '$50',
            yearlyAmount: '$500',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/TravelAccidentInsurance.jpg',
            name: 'Travel Accident Insurance',
            description: 'Can provide coverage for loss from an injury.',
            monthlyAmount: '$100',
            yearlyAmount: '$1000',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
            name: 'No Foreign Transaction Fees',
            description: 'No Foreign Transaction Fees on international purchases',
            monthlyAmount: '$10',
            yearlyAmount: '$100',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/ExtendedWarranty.jpg',
            name: 'Extended Warranty',
            description: 'Can extend the original warranty for up to two extra year for purchases made on your Card',
            monthlyAmount: '$20',
            yearlyAmount: '$200',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/AutoPurchaseProgram.jpg',
            name: 'Amex Auto Purchasing Program',
            description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',
            monthlyAmount: '$30',
            yearlyAmount: '$300',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/CompanionCertificateOpen.jpg',
            name: 'Uber Rides',
            description: 'Enjoy Uber VIP status and $15 in Uber credits for U.S. rides each month, plus a bonus $20 in December.',
            monthlyAmount: '$5',
            yearlyAmount: '$50',
            isSelected: 'true',
            selectedPeriod: 'Annual',
        },
        {
            img: '../../../src/assets/lounge.JPG',
            name: 'Global Lounge Collection',
            description: 'Enjoy complimentary access to over 1100 airport lounges across 120 countries.',
            monthlyAmount: '$40',
            yearlyAmount: '$400',
            isSelected: 'true',
            selectedPeriod: 'Annual',
        },
        {
            img: '../../../src/assets/Boingo.JPG',
            name: 'Boingo American Express Preferred Plan',
            description: 'Receive Wi-Fi access on up to four devices to more than 1,000,000 hotspots worldwide and pay no Wi-Fi roaming fees. ',
            monthlyAmount: '$3',
            yearlyAmount: '$30',
            isSelected: 'true',
            selectedPeriod: 'Annual',
        },
        {
            img: '../../../src/assets/Baggage.JPG',
            name: 'Baggage Insurance Plan',
            description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
            monthlyAmount: '$30',
            yearlyAmount: '$300',
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
            monthlyAmount: '$20',
            yearlyAmount: '$200',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/FirstBagFree.jpg',
            name: 'First Checked Bag Free',
            description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
            monthlyAmount: '$15',
            yearlyAmount: '$150',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/PurchaseProtection.jpg',
            name: 'Purchase Protection',
            description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
            monthlyAmount: '$50',
            yearlyAmount: '$500',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/TravelAccidentInsurance.jpg',
            name: 'Travel Accident Insurance',
            description: 'Can provide coverage for loss from an injury.',
            monthlyAmount: '$100',
            yearlyAmount: '$1000',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
            name: 'No Foreign Transaction Fees',
            description: 'No Foreign Transaction Fees on international purchases',
            monthlyAmount: '$10',
            yearlyAmount: '$100',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/ExtendedWarranty.jpg',
            name: 'Extended Warranty',
            description: 'Can extend the original warranty for up to two extra year for purchases made on your Card',
            monthlyAmount: '$20',
            yearlyAmount: '$200',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/AutoPurchaseProgram.jpg',
            name: 'Amex Auto Purchasing Program',
            description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',
            monthlyAmount: '$30',
            yearlyAmount: '$300',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/Baggage.JPG',
            name: 'Baggage Insurance Plan',
            description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
            monthlyAmount: '$30',
            yearlyAmount: '$300',
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
            monthlyAmount: '$20',
            yearlyAmount: '$200',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/FirstBagFree.jpg',
            name: 'First Checked Bag Free',
            description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
            monthlyAmount: '$15',
            yearlyAmount: '$150',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/PurchaseProtection.jpg',
            name: 'Purchase Protection',
            description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
            monthlyAmount: '$50',
            yearlyAmount: '$500',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
            name: 'No Foreign Transaction Fees',
            description: 'No Foreign Transaction Fees on international purchases',
            monthlyAmount: '$10',
            yearlyAmount: '$100',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/ExtendedWarranty.jpg',
            name: 'Extended Warranty',
            description: 'Can extend the original warranty for up to two extra year for purchases made on your Card',
            monthlyAmount: '$20',
            yearlyAmount: '$200',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/AutoPurchaseProgram.jpg',
            name: 'Amex Auto Purchasing Program',
            description: 'You could get Guaranteed Savings and earn rewards by using your Card toward the purchase price of your next vehicle',
            monthlyAmount: '$30',
            yearlyAmount: '$300',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/Baggage.JPG',
            name: 'Baggage Insurance Plan',
            description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
            monthlyAmount: '$30',
            yearlyAmount: '$300',
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
            monthlyAmount: '$20',
            yearlyAmount: '$200',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/Baggage.JPG',
            name: 'Baggage Insurance Plan',
            description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
            monthlyAmount: '$30',
            yearlyAmount: '$300',
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
            monthlyAmount: '$20',
            yearlyAmount: '$200',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/FirstBagFree.jpg',
            name: 'First Checked Bag Free',
            description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
            monthlyAmount: '$15',
            yearlyAmount: '$150',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/PurchaseProtection.jpg',
            name: 'Purchase Protection',
            description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
            monthlyAmount: '$50',
            yearlyAmount: '$500',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/TravelAccidentInsurance.jpg',
            name: 'Travel Accident Insurance',
            description: 'Can provide coverage for loss from an injury.',
            monthlyAmount: '$100',
            yearlyAmount: '$1000',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
            name: 'No Foreign Transaction Fees',
            description: 'No Foreign Transaction Fees on international purchases',
            monthlyAmount: '$10',
            yearlyAmount: '$100',
            isSelected: 'true',
            selectedPeriod: 'Annual',
    
        },
        {
            img: '../../../src/assets/Baggage.JPG',
            name: 'Baggage Insurance Plan',
            description: 'The Baggage Insurance Plan provides benefits for a Covered Person’s damaged, stolen or lost Baggage, whether checked or carry-on',
            monthlyAmount: '$30',
            yearlyAmount: '$300',
            isSelected: 'true',
            selectedPeriod: 'Annual',
        }]
    
    },
            
    ];

    const recentTransactions = {
      "Everyday" : {
        "cardName" : "Everyday",
        "pending" : {
          "transactions" : [ {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.370Z",
            "mcc" : "2222",
            "merchantCategory" : "travel",
            "merchantName" : "Uber",
            "refId" : 0,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "travel",
            "merchantName" : "Uber",
            "refId" : 2,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "air",
            "merchantName" : "Delta",
            "refId" : 1,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "general",
            "merchantName" : "Walmart",
            "refId" : 3,
            "seNum" : "22222"
          } ]
        },
        "posted" : {
          "transactions" : [ {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "travel",
            "merchantName" : "Uber",
            "refId" : 4,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "travel",
            "merchantName" : "Uber",
            "refId" : 5,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "air",
            "merchantName" : "Frontier Airlines",
            "refId" : 6,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "hotel",
            "merchantName" : "Hilton Hotels",
            "refId" : 7,
            "seNum" : "22222"
          } ]
        }
      },
      "Gold" : {
        "cardName" : "Gold",
        "pending" : {
          "transactions" : [ {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.370Z",
            "mcc" : "2222",
            "merchantCategory" : "air",
            "merchantName" : "KLM AIR",
            "refId" : 8,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "air",
            "merchantName" : "LAX AIRPORT Lounge",
            "refId" : 9,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "travel",
            "merchantName" : "MARIOT HOTEL",
            "refId" : 10,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "rental",
            "merchantName" : "Hertz",
            "refId" : 11,
            "seNum" : "22222"
          } ]
        },
        "posted" : {
          "transactions" : [ {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "general",
            "merchantName" : "Harmons",
            "refId" : 12,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "general",
            "merchantName" : "Amazon",
            "refId" : 13,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "general",
            "merchantName" : "Target",
            "refId" : 14,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "general",
            "merchantName" : "Jassi Life adventures",
            "refId" : 15,
            "seNum" : "22222"
          } ]
        }
      },
      "Green" : {
        "cardName" : "Green",
        "pending" : {
          "transactions" : [ {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.370Z",
            "mcc" : "2222",
            "merchantCategory" : "travel",
            "merchantName" : "Uber",
            "refId" : 16,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "general",
            "merchantName" : "Whole Foods",
            "refId" : 17,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "general",
            "merchantName" : "Samsung stores",
            "refId" : 18,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "general",
            "merchantName" : "Walmart",
            "refId" : 19,
            "seNum" : "22222"
          } ]
        },
        "posted" : {
          "transactions" : [ {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "Travel",
            "merchantName" : "Lyft",
            "refId" : 20,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "California Pizza",
            "merchantName" : "general",
            "refId" : 21,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "air",
            "merchantName" : "Frontier Airlines",
            "refId" : 22,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "travel",
            "merchantName" : "Hilton Hotels",
            "refId" : 23,
            "seNum" : "22222"
          } ]
        }
      },
      "Platinum" : {
        "cardName" : "Platinum",
        "pending" : {
          "transactions" : [ {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.370Z",
            "mcc" : "2222",
            "merchantCategory" : "Travel",
            "merchantName" : "Uber",
            "refId" : 24,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "Travel",
            "merchantName" : "Uber",
            "refId" : 25,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "Air",
            "merchantName" : "Delta",
            "refId" : 26,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.371Z",
            "mcc" : "2222",
            "merchantCategory" : "Grocery",
            "merchantName" : "Walmart",
            "refId" : 27,
            "seNum" : "22222"
          } ]
        },
        "posted" : {
          "transactions" : [ {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "Travel",
            "merchantName" : "Uber",
            "refId" : 28,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "Travel",
            "merchantName" : "Uber",
            "refId" : 29,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "Air",
            "merchantName" : "Frontier Airlines",
            "refId" : 30,
            "seNum" : "22222"
          }, {
            "amount" : "$ 20.00",
            "date" : "2018-08-14T10:05:17.368Z",
            "mcc" : "2222",
            "merchantCategory" : "Hotels",
            "merchantName" : "Hilton Hotels",
            "refId" : 31,
            "seNum" : "22222"
          } ]
        }
      }
    }
    dataRef.push({
      'recentTransactions': recentTransactions,
     });
   /*axiosInstance.post('cardbenefits.json', cardServiceMapping)
  .then(response => {
    console.log('Data Inserted in Database');
  })*/
}

/*
openFeatures = () => {
  location.assign('../../features.html');
};
*/
function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" onClick={()=> saveDataToDatabase(props)} color="primary" className={classes.button}>
        Accept
      </Button>
    </div>
  );
}

CircularIntegration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIntegration);