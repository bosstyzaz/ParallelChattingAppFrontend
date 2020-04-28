import React from 'react';
import SearchResult from './SearchResult';
import './SearchBox.css';
import axios from 'axios';

class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          searchText: '',
          groupFound: null,
        };
      this.handleSearch = this.handleSearch.bind(this);
    }

    handleInputChange = () => {
        this.setState({searchText: this.search.value})
    }

    handleSearch(e) {
        axios.get(`http://localhost:3001/groups/findbyname/${this.state.searchText}`)
        .then(res => {
            console.log(res);
        })
    }

    render() {
        let result;
        // if(groupFound){
        //     result = <>
        // }
        return <div className="a">
            <div>
                <div className="column">
                <input
                    placeholder="Search for Group"
                    ref = {input => this.search = input}
                    onChange = {this.handleInputChange}
                    className='search-input'
                />
                <p>{this.state.query}</p>
                </div>
                <div className="column">
                <button onClick={this.handleSearch}>search</button>
                </div>
            </div>
            {result}
            <SearchResult></SearchResult>
        </div>
    }

}

export default SearchBox;