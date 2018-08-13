import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import { Divider } from '../../../node_modules/@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/AccountBalance';
import StatementIcon from '@material-ui/icons/Notes';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountServices from '@material-ui/icons/Stars';
import MembershipIcon from '@material-ui/icons/Subscriptions';
import CreditScoreIcon from '@material-ui/icons/Score';
import MerchantHomeIcon from '@material-ui/icons/Home';
import SmallBusinessIcon from '@material-ui/icons/Business';
import CreditSecureIcon from '@material-ui/icons/Security';
import PersonalLoanIcon from '@material-ui/icons/face';

export const leftNavListItems = (
  <div>
    <Link to="/" style={{textDecoration : 'none'}}>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </Link>
    <Link to="/features" style={{textDecoration : 'none'}}>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Features" />
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <StatementIcon />
      </ListItemIcon>
      <ListItemText primary="Statements" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Payments" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountServices />
      </ListItemIcon>
      <ListItemText primary="Account Services" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MembershipIcon />
      </ListItemIcon>
      <ListItemText primary="Membership" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <CreditScoreIcon />
      </ListItemIcon>
      <ListItemText primary="Free Credit Score" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MerchantHomeIcon />
      </ListItemIcon>
      <ListItemText primary="Merchant Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmallBusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Small Business" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonalLoanIcon />
      </ListItemIcon>
      <ListItemText primary="Personal Loan" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreditSecureIcon />
      </ListItemIcon>
      <ListItemText primary="CreditSecure" />
    </ListItem>
  </div>
);
