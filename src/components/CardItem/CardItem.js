
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
import { Container, Row, Col } from 'react-grid-system';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = {
    item: {
        width: 400,
        height: 75,
        padding: 0,
    },
    title: {
        position: 'absolute',
        top: 8,
    },
    img: {
        width: 185,
        height: 75,
        marginTop: 2,
        marginRight: 3,
        marginBottom: -3,
    },
    btnimg: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        width: 85,
    },
    period: {
        position: 'absolute',
        bottom: 3,
        left: 15,
    },
    button: {
        position: 'absolute',
        width: 80,
        height: 40,
    },
    price: {
        position: 'absolute',
        bottom: 0,
        right: 8,
    },
    chkbox: {
        position: 'absolute',
        top: -5,
        right: -15,
    },
};

class CardItem extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        console.log('itemTitle: ', this.props.itemName);
        console.log('itemImg: ', this.props.img);
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
    }

    state = {
      dispAmt: '0.00',
      selected: false,
      selectedPeriod: this.props.selectedPeriod,
      description: this.props.desc,
      periodIdx: 1,
    };
    handleChange = name => event => {
        console.log('clicked: changedPeriod:', event.target.value);
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
                period: this.state.selectedPeriod,
                price: this.state.dispAmt,
                img: this.props.img,
                desc: this.state.description,
            }
            this.props.remove(myObject);
        } else {
            this.setState({
                selected: true,
            });
            const myObject = {
                name: this.props.itemName,
                period: this.state.selectedPeriod,
                price: this.state.dispAmt,
                img: this.props.img,
                desc: this.state.description,
            }
            this.props.add(myObject);
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.item}>
                <br />
                <Typography variant="caption" component="h5">
                    Ala-A-Cart Item
                </Typography>
                <Card  >
                    <Container >
                       
                       
                       
                        <Row>
                        <Col sm={6} >
                            <div>
                                <Typography className={classes.title} gutterBottom variant="subheading" component="h5">
                                    {this.props.itemName}
                                </Typography>
                                <Checkbox className={classes.chkbox} color="primary" checked={this.state.selected} onClick={this.changedSelection} />
                                <NativeSelect
                                    className={classes.period}
                                    value={this.state.selectedPeriod}
                                    name='selectedPeriod'
                                    onChange={this.handleChange('selectedPeriod')}
                                >
                                    <option value={this.state.periodIdx}>
                                    </option>
                                    <option value={'Monthly'}>Monthly</option>
                                    <option value={'Annual'}>Annual</option>
                                </NativeSelect>
                                <Typography className={classes.price} gutterBottom variant="subheading" component="h5">
                                    {this.state.dispAmt}
                                </Typography>
                            </div>
                        </Col>
                        <Col sm={6} onClick={this.changedSelection} >
                            <img className={classes.img} src={this.props.img} />
                        </Col>
                        </Row>
                    </Container>
                </Card>
                <br />
            </div>
        );
    }
}

CardItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardItem);