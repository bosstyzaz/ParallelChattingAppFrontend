import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '../SearchInput/SearchInput';

class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return <div>
            <Search></Search>
        </div>
    }

}