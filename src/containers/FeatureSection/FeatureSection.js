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
import Snackbar from '@material-ui/core/Snackbar';

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
    success: false,
    open: false,
    vertical: 'top',
    horizontal: 'right',
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = (props) => {
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
    this.saveDataToDatabase(props);
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  saveDataToDatabase = (props) => {
    console.log('Saving Benefits To Database');
    var databaseInstance = firebaseInstance.database();
    var benefitNumber = -1;
    console.log('CardName is : ' + props.benefitsData.cardName);
    switch(props.benefitsData.cardName){
      case 'Platinum':
      benefitNumber = 0;
      break;
      case 'Gold':
      benefitNumber = 1;
      break;
      case 'Green':
      benefitNumber = 2;
      break;
      case 'Everyday':
      benefitNumber = 3;
      break;
      case 'Hilton':
      benefitNumber = 4;
      break;
      case 'default':
      benefitNumber = 0;
    }
    var benefitsUrl = '-LJu4D1RTmj_U1MGFR8i/cardbenefits/'+benefitNumber+'/benefits';
    console.log('Benefits Url is : ' + benefitsUrl);
    var benefitsUrlJson = '-LJu4D1RTmj_U1MGFR8i/cardbenefits/'+benefitNumber+'/benefits.json';
    var dataRef = databaseInstance.ref(benefitsUrl);
    var existingBenefits = axiosInstance.get(benefitsUrlJson)
       .then(response => {
         console.log('Existing Benefits fetched from Database : ');
         console.log(response.data);
         var arr = response.data;
         // below data needs to come from previous page
         var newData = {"description":"Benefit Description 1","img":"","isSelected":true,"monthlyAmount":"$30","name":"New Plan Added","selectedPeriod":"Annual","yearlyAmount":"$300"};
         //arr.push(newData);
         console.log(arr);
         //dataRef.set(arr);
       });
  }

  render() {
    const { loading, success ,  vertical, horizontal, open } = this.state;
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
            onClick={() => this.handleButtonClick(this.props)}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Your Benefit(s) was saved for syncing !</span>}
        />
      </div>
    );
  }
}
/*
openFeatures = () => {
  location.assign('../../features.html');
};
*/
/*function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" onClick={()=> saveDataToDatabase(props)} color="primary" className={classes.button}>
        Accept
      </Button>
    </div>
  );
}*/
CircularIntegration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIntegration);