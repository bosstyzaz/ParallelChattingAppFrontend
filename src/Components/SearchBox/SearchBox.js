import React from 'react';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import './SearchBox.css';

class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return <div className="a">
            <SearchInput></SearchInput>
            <SearchResult></SearchResult>
        </div>
    }

}

export default SearchBox;