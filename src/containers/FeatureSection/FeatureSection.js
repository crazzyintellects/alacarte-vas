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
    this.saveDataToDatabase();
  };

  saveDataToDatabase = () => {
    console.log('Saving Data To Database');
    const benefits = {benefits:{description:'New Benefit Added',name:'Benefit 1'}}; 
    var databaseInstance = firebaseInstance.database();
    var dataRef = databaseInstance.ref('TestingDataAgain/-LJuTt5xpMpZk0B5yH-D/cardBenefits/Everyday/benefits');
       //var keyApp = dataRef.push();
       //console.log('Key is : ' + keyApp);
       //var benefitsData = {"description":"Benefit Description","img":"","isSelcted":true,"monthlyAmount":"$30","name":"New Plan Added","selectedPeriod":"Annual","yearlyAmount":"$300"};
       //keyApp.set(benefitsData);
       //dataRef.push(cardServiceMapping)
       var abc = axiosInstance.get('TestingDataAgain/-LJuTt5xpMpZk0B5yH-D/cardBenefits/Everyday/benefits.json')
       .then(response => {
         console.log('Response aah aaeya hai : ');
         console.log(response.data);
         var arr = response.data;
         var newData = {"description":"Benefit Description","img":"","isSelcted":true,"monthlyAmount":"$30","name":"New Plan Added","selectedPeriod":"Annual","yearlyAmount":"$300"};
         arr.push(newData);
         console.log(arr);
         dataRef.set(arr);
       })
     /*axiosInstance.post('cardbenefits.json', cardServiceMapping)
    .then(response => {
      console.log('Data Inserted in Database');
    })*/
  }

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