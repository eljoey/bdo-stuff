import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import MarketplaceTabs from './MarketplaceTabs';
import mpTabs from './assets/mpTabs';

const MarketplaceList = () => {
  console.log(mpTabs[0]);
  return (
    <Collapsible accordion>
      {mpTabs.map((tab) => (
        <CollapsibleItem header={tab.title}>
          <MarketplaceTabs subTabs={tab.subTabs} tabId={tab.tab} />
        </CollapsibleItem>
      ))}
    </Collapsible>
  );
};

export default MarketplaceList;
