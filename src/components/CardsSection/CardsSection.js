import React, { Component } from 'react';
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
        //backgroundColor: theme.palette.background.paper,
        marginTop: 50,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        overflowY: 'hidden',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});


class CardsSection extends Component {
//Call to get payment data

    state = {
        cardData : [
            {
                img: '../../src/assets/platinum.png',
                title: 'Platinum',
                statementBal: '210.78',
                avlCredit: '339.23',
                payDueDt: 'September 10',
                minDue: '32.33',
                selected:true
            },
            {
                img: '../../src/assets/premier-rewards-gold.png',
                title: 'Gold',
                statementBal: '890.78',
                avlCredit: '7988.23',
                payDueDt: 'September 4',
                minDue: '13.22',
                selected:false
            },
            {
                img: '/../../src/assets/green.png',
                title: 'Green',
                statementBal: '210.78',
                avlCredit: '339.23',
                payDueDt: 'August 30',
                minDue: '23.45',
                selected:false
            },
            {
                img: '../../src/assets/everyday.jpg',
                title: 'Everyday',
                statementBal: '210.78',
                avlCredit: '339.23',
                payDueDt: 'September 10',
                minDue: '28.20',
                selected:false
            }
            , {
                img: '../../src/assets/hilton-honors.png',
                title: 'Hilton',
                statementBal: '210.78',
                avlCredit: '339.23',
                payDueDt: 'September 15',
                minDue: '10.00',
                selected:false
            },
        
        ],
       
      }

      selectDivHandler = ( title ) => {

        this.state.cardData.map(c => {
             c.selected = false;
          });

        const cardIndex = this.state.cardData.findIndex(c => {
          return c.title === title;
        });
    
        const card = {
          ...this.state.cardData[cardIndex]
        };
    
        card.selected = true;
    
        const cards = [...this.state.cardData];
        cards[cardIndex] = card;
    
        this.setState( {cardData: cards} );
        this.props.passTitletoParent(title);
      }
    


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {this.state.cardData.map(card => (
                        <CardDetail key={card.title}
                            img={card.img}
                            title={card.title}
                            statementBal={card.statementBal}
                            avlCredit={card.avlCredit}
                            payDueDt={card.payDueDt}
                            minDue={card.minDue}
                            selected={card.selected}
                            clicked={() => this.selectDivHandler(card.title)}
                        />
                    ))}
                </GridList>


            </div>
        );
    }
}

CardsSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardsSection);