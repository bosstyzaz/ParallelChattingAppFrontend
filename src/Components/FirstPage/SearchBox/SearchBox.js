import React from 'react';
import { Search } from '../SearchInput/SearchInput';
import { SearchResult } from '../SearchResult/SearchResult';

export class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return <div>
            <Search></Search>
            <SearchResult></SearchResult>
        </div>
    }

}