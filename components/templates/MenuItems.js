import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TableChartIcon from '@material-ui/icons/TableChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import history from './../../history';

export const mainListItems = (
  <div>
    <ListItem button onClick={() => history.push('/dashboard')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => history.push('/failed_jobs')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Failed_Jobs" />
</ListItem><ListItem button onClick={() => history.push('/migrations')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Migrations" />
</ListItem><ListItem button onClick={() => history.push('/password_resets')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Password_Resets" />
</ListItem><ListItem button onClick={() => history.push('/personal_access_tokens')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Personal_Access_Tokens" />
</ListItem><ListItem button onClick={() => history.push('/students')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Students" />
</ListItem><ListItem button onClick={() => history.push('/users')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Users" />
</ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button onClick={() => history.push('/signup')}>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary="SignUp" />
    </ListItem>
    <ListItem button onClick={() => history.push('/')}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
   
  </div>
);
