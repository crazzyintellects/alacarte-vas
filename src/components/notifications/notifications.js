import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


class PositionedSnackbar extends React.Component {
    state = {
        open: this.props.open,
        vertical: 'top',
        horizontal: 'center',
        hasIcons: this.props.iconNotification,
    };


    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { vertical, horizontal } = this.state;
        const { data, open, iconNotification} = this.props;
        return (
            <div>
                {!iconNotification && <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{data}</span>}
                />}
                {iconNotification && <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{data} &nbsp; <a href="#" className="fa fa-facebook"></a>&nbsp;
<a href="#" className="fa fa-twitter"></a>
                    </span>}
                />}
            </div>
        );
    }
}

export default PositionedSnackbar;