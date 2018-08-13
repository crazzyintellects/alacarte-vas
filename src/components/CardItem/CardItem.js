import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { Divider } from '../../../node_modules/@material-ui/core';
import Card from '@material-ui/core/Card';

const styles = {
    item: {
        width: 320,
        height: 75,
        padding: 0,
    },
    title: {
        position: 'absolute',
        top: 8,
    },
    img: {
        width: 160,
        height: 75,
        margin: -3,
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
        left: 20,
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
            });
        } else {
            this.setState({
                dispAmt: this.props.annualPrice,
                selected: selected,
            });
        }
    }

    state = {
      dispAmt: '0.00',
      selected: false,
      selectedPeriod: this.props.selectedPeriod,
    };
    changedPeriod = () => {
        console.log('clicked: changedPeriod');
        if (this.state.selectedPeriod === 'Monthly') {
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
    }
    changedSelection = () => {
        console.log('clicked: changedSelection');
        if (this.state.selected) {
            this.setState({
                selected: false,
            });
        } else {
            this.setState({
                selected: true,
            });
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
                                <div onClick={this.changedPeriod} >
                                    <img className={classes.btnimg} src="../../src/assets/smButton.png" />
                                    <Typography className={classes.period} gutterBottom variant="subheading" component="h5">
                                        {this.state.selectedPeriod}
                                    </Typography>
                                </div>
                                <Typography className={classes.price} gutterBottom variant="subheading" component="h5">
                                    ${this.state.dispAmt}
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