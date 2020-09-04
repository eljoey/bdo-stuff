import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/api';
import {
  Row,
  Col,
  Preloader,
  Collection,
  CollectionItem,
  Badge,
} from 'react-materialize';
import helpers from '../utils/helpers';

const Search = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState();
  const [loading, setLoading] = useState(true);
  console.log(searchResults);

  useEffect(() => {
    setLoading(true);
    const getSearchResult = async () => {
      const fetchedSearch = await apiService.getItemSearch(searchTerm);

      setSearchResults(fetchedSearch.list || []);
      setLoading(false);
    };

    getSearchResult();
  }, [searchTerm]);

  if (!loading && searchResults.length > 0) {
    return (
      <Collection>
        <CollectionItem style={{ padding: '15px' }}>
          {`'${searchTerm}' Results`}
        </CollectionItem>

        {searchResults.map((item) => (
          <CollectionItem
            style={{ padding: '15px', backgroundColor: '#616161' }}
          >
            <Link
              to={`/marketplace/list/search-term/${item.mainKey}`}
              className={helpers.getTextColor(item.grade)}
            >
              {item.name}
              <Badge className='amber-text'>{item.sumCount}</Badge>
            </Link>
          </CollectionItem>
        ))}
      </Collection>
    );
  } else if (!loading && searchResults.length === 0) {
    return (
      <Collection>
        <CollectionItem style={{ padding: '15px' }}>
          {`No Results for '${searchTerm}' found`}
        </CollectionItem>
      </Collection>
    );
  } else {
    return (
      <div style={{ height: '100vh' }} className='valign-wrapper center-align'>
        <Row>
          <Col>
            <Preloader active color='blue' flashing={false} className='big' />
          </Col>
        </Row>
      </div>
    );
  }
};

export default Search;
