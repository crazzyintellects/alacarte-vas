import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '../../../node_modules/@material-ui/core';


const styles = {
    card: {
        maxWidth: 250,
        margin: 5,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

function CardDetail(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title={props.title}
                />
                <CardContent>
                    <Typography variant="caption" component="h5">
                        Statement Balance
                </Typography>
                    <Divider />
                    <Typography gutterBottom variant="subheading" component="h5">
                        $ {props.statementBal}
                    </Typography>
                    <Typography variant="caption" component="h3">
                        Available Credit
          </Typography>
                    <Divider />
                    <Typography gutterBottom variant="subheading" component="h5">
                        $ {props.avlCredit}
                    </Typography>
                    <Typography variant="caption" component="h5">
                        Your Payment is Due on
          </Typography>
                    <Divider />
                    <Typography gutterBottom variant="subheading" component="h5">
                        {props.payDueDt}
                    </Typography>
                    <Typography variant="caption" component="h3">
                        Minimum Payment Due
          </Typography>
                    <Divider />
                    <Typography gutterBottom variant="subheading" component="h5">
                        $ {props.minDue}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Payment
      </Button>
                    <Button size="small" color="primary">
                        Balance Details
          </Button>
                </CardActions>
            </Card>
        </div>
    );
}

CardDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardDetail);
