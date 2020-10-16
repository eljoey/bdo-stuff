import React, { useState } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import ListItems from './ListItems';
import mpTabs from '../assets/mpTabs';
import { makeStyles, Typography, withStyles } from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import classes from '*.module.css';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:is(:first-child)': {
      borderTop: 0,
    },
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#505050',
    color: 'white',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 46,
    '&$expanded': {
      minHeight: 46,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#606060',
  },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles((theme) => ({
  listContainer: {
    margin: '0 20px',
  },
}));

const List = ({ url }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(null);

  const handleChange = (tab) => (event, newExpanded) => {
    setExpanded(newExpanded ? tab : false);
  };

  return (
    <div className={classes.listContainer}>
      {mpTabs.map((tab) => (
        <ExpansionPanel
          square
          expanded={expanded === tab.title}
          onChange={handleChange(tab.title)}
        >
          <ExpansionPanelSummary
            aria-controls={`${tab.title}-content`}
            id={`${tab.title}-header`}
          >
            <Typography>{tab.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <ListItems subTabs={tab.subTabs} tabId={tab.tab} url={url} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default List;

{
  /* <Collapsible accordion style={{ backgroundColor: 'grey' }}>
{mpTabs.map((tab) => (
  <CollapsibleItem header={tab.title}>
    <ListItems subTabs={tab.subTabs} tabId={tab.tab} url={url} />
  </CollapsibleItem>
))}
</Collapsible> */
}
