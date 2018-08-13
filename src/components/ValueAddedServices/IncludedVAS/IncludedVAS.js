import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CarIcon from '../../../assets/platinum.png';

const styles = theme => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    textStyle: {
        padding: 10,
        color: '#1769aa',
    },
    bigAvatar: {
        width: 60,
        height: 60,
      },
});

// Included VAS Data
 /*const includedVASData = [
    {
        img: '../../../src/assets/CarIcon.jpg',
        name: 'Car Rental Loss & Damage Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',
    
    },
    {
        img: '../../../src/assets/FirstBagFree.jpg',
        name: 'First Checked Bag Free',
        description: 'You can check your first bag for free and save up to $50 on a round-trip flight',
    
    },
    {
        img: '../../../src/assets/PurchaseProtection.jpg',
        name: 'Purchase Protection',
        description: 'Your purchases are covered when they are damaged or stolen for up to 90 days from the purchase date',
    
    },
    {
        img: '../../../src/assets/TravelAccidentInsurance.jpg',
        name: 'Travel Accident Insurance',
        description: 'Can provide coverage for theft of or damage to eligible rental vehicles',
    
    },
    {
        img: '../../../src/assets/SPG_NoForeignTransFees.jpg',
        name: 'No Foreign Transaction Fees',
        description: 'No Foreign Transaction Fees on international purchases',
    
    },
    


];*/

const IncludedVAS = (props) => {
    const { classes } = props;
    const includedVASData = props.data;
    return (
        <div className={classes.root}>
            <Grid container  spacing={24}>
                <Grid item xs={12}>
                    <Typography variant="title" align="center" className={classes.textStyle} gutterBottom>
                        Your Included Benefits
                     </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <List>
                    {includedVASData.map(vas => (
                        <div key={vas.name}>
                        <ListItem>
                            <Avatar alt={vas.name} src={vas.img} className={classes.bigAvatar} />
                            <ListItemText primary={vas.name} secondary={vas.description} />
                        </ListItem>
                        <li>
                            <Divider inset />
                        </li>
                        </div>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

IncludedVAS.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IncludedVAS);