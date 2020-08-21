import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import ListItems from './ListItems';
import mpTabs from './assets/mpTabs';
import './list.css';

const List = ({ url }) => {
  return (
    <Collapsible accordion style={{ backgroundColor: 'grey' }}>
      {mpTabs.map((tab) => (
        <CollapsibleItem header={tab.title}>
          <ListItems subTabs={tab.subTabs} tabId={tab.tab} url={url} />
        </CollapsibleItem>
      ))}
    </Collapsible>
  );
};

export default List;
