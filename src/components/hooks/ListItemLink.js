import React, { forwardRef, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ListItemText, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  linkSelected: {
    color: '#3FA3C4',
  },
}));

const ListItemLink = ({ icon, primary, to, isSelected, setSelected }) => {
  const classes = useStyles();

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <RouterLink to={`/${to}`} ref={ref} {...itemProps} />
      )),
    [to]
  );

  const handleLinkSelection = () => {
    setSelected(to);
  };

  return (
    <div className={classes.root}>
      <ListItem
        button
        disableRipple
        component={renderLink}
        className={clsx(isSelected && classes.linkSelected)}
        onClick={handleLinkSelection}
        selected={isSelected}
      >
        {icon ? (
          <ListItemIcon className={clsx(isSelected && classes.linkSelected)}>
            {icon}
          </ListItemIcon>
        ) : null}
        <ListItemText primary={primary} />
      </ListItem>
    </div>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
