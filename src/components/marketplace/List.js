import React, { useState } from 'react';
import ListItems from './ListItems';
import mpTabs from '../assets/mpTabs';
import { makeStyles, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const Accordion = withStyles({
  root: {
    borderBottom: '1px solid rgba(255,255,255, 0.9)',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#505050',
    color: 'white',
    borderBottom: '1px solid rgba(255,255,255, 0.9)',
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
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#757575',
    width: '100%',
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  listContainer: {
    marginLeft: '20px',
    height: '100%',
    backgroundColor: '#404040',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: '0 1px 1px 1px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '5px',
    },
  },
  listDetails: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: '5px',
    },
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
        <Accordion
          key={tab.tab}
          square
          expanded={expanded === tab.title}
          onChange={handleChange(tab.title)}
        >
          <AccordionSummary
            aria-controls={`${tab.title}-content`}
            id={`${tab.title}-header`}
          >
            <Typography>{tab.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.listDetails}>
            <Typography component='div'>
              <ListItems subTabs={tab.subTabs} tabId={tab.tab} url={url} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default List;
