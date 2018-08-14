import React, { Component, Fragment } from 'react';
import FeatureSection from '../../containers/FeatureSection/FeatureSection';
import CardItem from '../../components/CardItem/CardItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
    items: {
       
    },
}

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
        let temp = this.state.selectedArray;
        this.state.selectedArray.push(item);
        console.log('selectedArray:', this.state.selectedArray);
    }
    removeItem = (item) => {
        console.log('removeItem:', item);
        const newArray = [];
        this.state.selectedArray.map(value => {
            if (value.name !== item.name) {
                newArray.push(value);
            }
        });
        this.setState({
            selectedArray: newArray,
          },() => {
            console.log('selectedArray:', this.state.selectedArray);
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
                {this.state.alacartArray !== null && <FeatureSection />}
            </Fragment>
        )
    }
}

export default withStyles(styles)(FeaturesPage);