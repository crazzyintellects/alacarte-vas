import React, { Component, Fragment } from 'react';
import FeatureSection from '../../containers/FeatureSection/FeatureSection';
import CardItem from '../../components/CardItem/CardItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from "classnames";

const styles = theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft:"25%",
      marginTop:"-5%",
    },
    margin: {
      margin: theme.spacing.unit
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 3
    },
    textField: {
      flexBasis: 200
    }
  });

class FeaturesPage extends Component {
    constructor(props) {
        
        super(props);
        console.log('feature props ', props);
        if (props.featuresData !== null) {
            this.state = {
                alacartArray: props.featuresData.toBeAddedServices,
                selectedArray: [],
            };
        } else {
            this.state = {
                alacartArray: [
                    {name: 1},
                    {name: 2},
                    {name: 3},
                ],
                selectedArray: [],
            };
        }
        
    }

    addItem = (item) => {
        console.log('addItem:', item);
        const temp = Object.assign(this.state.selectedArray,{});
        temp.push(item);
        console.log('selectedArray:', temp);
        let totalAmount= isNaN((this.state.totalAmount*1))?0:(this.state.totalAmount*1);
        totalAmount = totalAmount+(item.price*1);
        console.log('totalAmt After Add:', totalAmount);
        this.setState({
            selectedArray: temp,
            totalAmount,
        });
    }
    removeItem = (item) => {
        console.log('removeItem:', item);
        const totalAmount = (this.state.totalAmount*1) - (item.price*1);
        console.log('totalAmount After Remove:', totalAmount);
        const newArray = [];
        this.state.selectedArray.map(value => {
            if (value.name !== item.name) {
                newArray.push(value);
            }
        });
        this.setState({
            selectedArray: newArray,
            totalAmount,
          },() => {
            console.log('selectedArray:', this.state.selectedArray);
            console.log('totalAmount final value:', totalAmount);
        });
    }
   
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div style={{ padding: 20 }}>
                    <Grid 
                    container
                    justify="center"
                    alignItems="center"
                    spacing={16}
                    >
                        <Grid item xs={12}>
                            <Grid container className={classes.items} justify="center" spacing={24}>
                                {this.state.alacartArray !== null && this.state.alacartArray.map(value => (
                                <Grid key={value.name} item>
                                    <CardItem item xs={4}
                                        itemName={value.name}
                                        monthlyPrice={value.monthlyAmount}
                                        annualPrice={value.yearlyAmount}
                                        selected="false"
                                        selectedPeriod="Monthly"
                                        img={value.img}
                                        cardName={this.props.featuresData.cardName}
                                        desc={value.description}
                                        add={this.addItem}
                                        remove={this.removeItem}
                                    />
                                </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                {this.state.alacartArray !== null && <FeatureSection selectedArray={this.state.selectedArray} cardName={this.props.featuresData.cardName} />}
                <div className={classes.root}>
                    <TextField
                    label="Amount"
                    id="simple-start-adornment"
                    value={this.state.totalAmount}
                    className={classNames(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                    }}
                    />
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(FeaturesPage);