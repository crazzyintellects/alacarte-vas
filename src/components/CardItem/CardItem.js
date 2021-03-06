
/*
<CardItem 
    itemName="Priority Boarding"
    monthlyPrice="5.99"
    annualPrice="59.99"
    selected="true"
    selectedPeriod="Monthly"
    img="../../src/assets/PriorityBoardingDelta.jpg"
/>
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';


const styles = {
    smItem: {
        width: 200,
        height: 220,
        padding: 0,
    },
    item: {
        width: 350,
        height: 75,
        padding: 0,
    },
    title: {
       padding: 4,
       maxHeight: 24,
    },
    smTitle: {
        padding: 8,
        maxHeight: 24,
        marginTop: -30,
     },
    img: {
        width: 175,
        height: 75,
        marginTop: 2,
        marginLeft: 5,
        marginBottom: -3,
    },
    smImg: {
        width: 175,
        height: 75,
        marginTop: 2,
        marginLeft: 5,
        marginBottom: -3,
    },
};

class CardItem extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        //console.log('itemLevelProps: ', this.props);
        let selected = false;
        if (this.props.selected === 'true') {
            selected = true;
        }
        if (this.props.selectedPeriod === 'Monthly') {
            this.setState({
                dispAmt: this.props.monthlyPrice,
                selected: selected,
                periodIdx: 1,
            });
        } else {
            this.setState({
                dispAmt: this.props.annualPrice,
                selected: selected,
                periodIdx: 2,
            });
        }
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    state = {
        dispAmt: '0.00',
        selected: false,
        selectedPeriod: this.props.selectedPeriod,
        description: this.props.desc,
        periodIdx: 1,
        mobile: false,
    };
    handleResize = () => {
        const height = window.innerHeight;
        const width = window.innerWidth
        // this.setState({width: width, height: height});
        console.log('width:', width, '  height:', height);
        let mobileDetected = false;
        if (width < 612) mobileDetected = true;
        this.setState({
            mobile: mobileDetected,
        });
    };
    handleChange = name => event => {
        console.log('clicked: changedPeriod:', event.target.value);
        if (this.state.selected) {
            this.changedSelection();
        }
        if (event.target.value === 'Annual') {
            this.setState({
                selectedPeriod: 'Annual',
                dispAmt: this.props.annualPrice,
            });
        } else {
            this.setState({
                selectedPeriod: 'Monthly',
                dispAmt: this.props.monthlyPrice,
            });
        }
    };
    changedSelection = () => {
        console.log('clicked: changedSelection');
        if (this.state.selected) {
            this.setState({
                selected: false,
            });
            const myObject = {
                name: this.props.itemName,
                selectedPeriod: this.state.selectedPeriod,
                price: this.state.dispAmt,
                img: this.props.img,
                description: this.state.description,
                cardName: this.props.cardName,
            }
            this.props.remove(myObject);
        } else {
            this.setState({
                selected: true,
            });
            const myObject = {
                name: this.props.itemName,
                selectedPeriod: this.state.selectedPeriod,
                price: this.state.dispAmt,
                img: this.props.img,
                description: this.state.description,
                cardName: this.props.cardName,
            }
            this.props.add(myObject);
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.state.mobile === false &&
                <div className={classes.item}>
                    <br />
                    <Typography variant="caption" component="h5">
                        Ala-A-Cart Item
                    </Typography>
                    <Card  >
                        <Grid container spacing={24} alignItems="stretch" >
                            <Grid item sm container>
                                <Grid item container direction="column" alignItems="center" spacing={16} >
                                    <Grid item >
                                        <Typography className={classes.title} gutterBottom variant="subheading" component="h5">
                                            {this.props.itemName}
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Grid container direction="row" justify="center" alignItems="flex-end" spacing={0} >
                                            <Grid item >
                                                <NativeSelect
                                                    value={this.state.selectedPeriod}
                                                    name='selectedPeriod'
                                                    onChange={this.handleChange('selectedPeriod')}
                                                >
                                                    <option value={'Monthly'}>Monthly</option>
                                                    <option value={'Annual'}>Annual</option>
                                                </NativeSelect>
                                            </Grid>
                                            <Grid item  >
                                                <Typography gutterBottom variant="subheading" component="h5">
                                                    ${this.state.dispAmt}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={1} container direction="column" spacing={16} >
                                    <Checkbox color="primary" checked={this.state.selected} onClick={this.changedSelection} />
                                </Grid>
                            </Grid>
                            <Grid item onClick={this.changedSelection} >
                                <Grid container >
                                    <img className={classes.img} src={this.props.img} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                </div>}
                {this.state.mobile === true &&
                <div className={classes.smItem}>
                    <br />
                    <Typography variant="caption" component="h5">
                        Ala-A-Cart Item 
                    </Typography>
                    <Card  >
                        <Grid container spacing={24} alignItems="stretch" >
                            <Grid item container direction="column" alignItems="center" spacing={16} >
                                <Grid item onClick={this.changedSelection} >
                                    <Grid container >
                                        <img className={classes.img} src={this.props.img} />
                                    </Grid>
                                </Grid>
                                <Grid item container alignItems="flex-start" >
                                    <Checkbox color="primary" checked={this.state.selected} onClick={this.changedSelection} />
                                </Grid>
                                <Grid item sm container alignItems="center" >
                                    <Grid item container direction="column"  spacing={16} >
                                        <Grid item >
                                            <Typography className={classes.smTitle} gutterBottom variant="subheading" component="h5">
                                                {this.props.itemName}
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <Grid container direction="row" justify="center" alignItems="flex-end" spacing={0} >
                                                <Grid item >
                                                    <NativeSelect
                                                        value={this.state.selectedPeriod}
                                                        name='selectedPeriod'
                                                        onChange={this.handleChange('selectedPeriod')}
                                                    >
                                                        <option value={'Monthly'}>Monthly</option>
                                                        <option value={'Annual'}>Annual</option>
                                                    </NativeSelect>
                                                </Grid>
                                                <Grid item  >
                                                    <Typography gutterBottom variant="subheading" component="h5">
                                                        ${this.state.dispAmt}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                </div>}
            </div>
        );
    }
}

CardItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardItem);