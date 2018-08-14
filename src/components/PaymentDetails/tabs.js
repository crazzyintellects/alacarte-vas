import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TransactionLine from '../../components/PaymentDetails/transactionSectionTable';

function TabContainer(props) {


    return (
        <div>
            <TransactionLine transactionData={props.transactionData.transactions} />

        </div>
    );
}


TabContainer.defaultProps = {
    transactionData: {
        transactions : [],
    },
};

const styles = {
    root: {
        flexGrow: 1,
    },
    textStyle: {
        padding: 10,
        color: '#1769aa',
    },
};

class CenteredTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { transactionData } = this.props;
        const { value } = this.state;
        return (
            <Grid container  spacing={24}>
                <Grid item xs={12}>
                    <Typography variant="title" align="center" className={classes.textStyle} gutterBottom>
                        Recent Transactions
                    </Typography>
                </Grid>

                <Grid item xs={12}>
            <Paper className={classes.root}>

                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Posted" />
                    <Tab label="Pending" />

                </Tabs>
                {value === 0 && <TabContainer transactionData={transactionData.posted}/>}
                {value === 1 && <TabContainer transactionData={transactionData.pending}></TabContainer>}
            </Paper>
                </Grid>
            </Grid>
        );
    }
}

CenteredTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};
CenteredTabs.defaultProps = {
    transactionData: {
        transactions: [],
    },
};

export default withStyles(styles)(CenteredTabs);
