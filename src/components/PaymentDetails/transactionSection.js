import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function SimpleExpansionPanel(props) {
    const { classes } = props;
    const { transactionData } = props;


    return (
        <div className={classes.root}>
            {transactionData.map((obj) => (<ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{obj.date} &nbsp;&nbsp; {obj.merchantName} &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;{obj.amount} </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Merchant Name: {obj.merchantName}<br/>
                        Merchant Category: {obj.merchantCategory}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>))}


        </div>
    );
}

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    transactionData: PropTypes.arrayOf(
        PropTypes.object,
    ).isRequired,
};


export default withStyles(styles)(SimpleExpansionPanel);