import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({

    head: {
        backgroundColor: '#2196F3',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});





function CustomizedTable(props) {
    const { classes } = props;
    const { transactionData } = props;
    const initVal =0;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Date</CustomTableCell>
                        <CustomTableCell >Merchant Name</CustomTableCell>
                        <CustomTableCell >Merchant Category</CustomTableCell>
                        <CustomTableCell numeric>Reference Id</CustomTableCell>
                        <CustomTableCell>Amount</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionData.map(n => {n.id = initVal+1;
                        return (
                            <TableRow className={classes.row} key={n.refId}>
                                <CustomTableCell component="th" scope="row">
                                    {n.date}
                                </CustomTableCell>
                                <CustomTableCell>{n.merchantName}</CustomTableCell>
                                <CustomTableCell>{n.merchantCategory}</CustomTableCell>
                                <CustomTableCell numeric>{n.refId}</CustomTableCell>
                                <CustomTableCell>{n.amount}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    transactionData: PropTypes.arrayOf(
        PropTypes.object,
    ).isRequired,
};

export default withStyles(styles)(CustomizedTable);