import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import GitHub from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  whiteColor: {
    color: 'white',
  },
}));

const MiscList = () => {
  const classes = useStyles();

  return (
    <List>
      <ListSubheader className={classes.whiteColor} inset>
        Misc.
      </ListSubheader>
      <ListItem
        button
        component='a'
        target='_blank'
        href='https://github.com/eljoey/BDO-Api-Helper'
      >
        <ListItemIcon>
          <GitHub className={classes.whiteColor} />
        </ListItemIcon>
        <ListItemText>Api</ListItemText>
      </ListItem>
    </List>
  );
};

export default MiscList;
