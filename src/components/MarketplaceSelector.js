import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import { Link } from 'react-router-dom';

// TODO: See if i can refactor the links into a hook(?)

const MarketplaceSelector = () => {
  return (
    <Collapsible accordion>
      <CollapsibleItem header='test field 1'>
        <Link to='/marketplace' className='black-text'>
          Item 1-1
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 1-2
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 1-3
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 1-4
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 1-5
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 1-6
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 1-7
        </Link>
      </CollapsibleItem>
      <CollapsibleItem header='test field 2'>
        <Link to='/marketplace' className='black-text'>
          Item 2-1
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 2-2
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 2-3
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 2-4
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 2-5
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 2-6
        </Link>
        <div className='divider'></div>
        <Link to='/marketplace' className='black-text'>
          Item 2-7
        </Link>
      </CollapsibleItem>
    </Collapsible>
  );
};

export default MarketplaceSelector;
