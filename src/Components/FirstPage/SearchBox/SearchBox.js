import React from 'react';
import { Search } from '../SearchInput/SearchInput';
import { SearchResult } from '../SearchResult/SearchResult';
import './SearchBox.css';

export class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return <div class="a">
            <Search></Search>
            <SearchResult></SearchResult>
        </div>
    }

}