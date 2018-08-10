import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CardDetail from '../CardDetail/CardDetail';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop: 70,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});


// Card Data
const cardData = [
    {
        img: '../../src/assets/platinum.png',
        title: 'Platinum',
        statementBal: '210.78',
        avlCredit: '339.23',
        payDueDt: 'September 10',
        minDue: '32.33'
    },
    {
        img: '../../src/assets/premier-rewards-gold.png',
        title: 'Gold',
        statementBal: '890.78',
        avlCredit: '7988.23',
        payDueDt: 'September 4',
        minDue: '13.22'
    },
    {
        img: '/../../src/assets/green.png',
        title: 'Green',
        statementBal: '210.78',
        avlCredit: '339.23',
        payDueDt: 'August 30',
        minDue: '23.45'
    },
    {
        img: '../../src/assets/everyday.jpg',
        title: 'Everyday',
        statementBal: '210.78',
        avlCredit: '339.23',
        payDueDt: 'September 10',
        minDue: '28.20'
    },
    {
        img: '../../src/assets/hilton-honors.png',
        title: 'Hilton',
        statementBal: '210.78',
        avlCredit: '339.23',
        payDueDt: 'September 15',
        minDue: '10'
    },
    {
        img: '../../src/assets/platinum-delta-skymiles.png',
        title: 'Delta',
        statementBal: '10.78',
        avlCredit: '1349.00',
        payDueDt: 'September 20',
        minDue: '23.45'
    },
    {
        img: '../../src/assets/starwood-preferred-guest.png',
        title: 'SPG',
        statementBal: '24.50',
        avlCredit: '3232.50',
        payDueDt: 'September 3',
        minDue: '13.23'
    },

];

function CardsSection(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {cardData.map(card => (
                    <CardDetail key={card.title}
                        img={card.img}
                        title={card.title}
                        statementBal={card.statementBal}
                        avlCredit={card.avlCredit}
                        payDueDt={card.payDueDt}
                        minDue={card.minDue}
                    />
                ))}

            </GridList>
        </div>
    );
}

CardsSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardsSection);