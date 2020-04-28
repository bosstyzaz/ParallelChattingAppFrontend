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
          groupIdFound: null,
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
            this.setState({groupFound: res.data.name, groupIdFound: res.data._id})
        })
        .catch((error) => {
            this.setState({groupFound: null, groupIdFound: null});
            console.log(error);
        });
        console.log('asdsad')
    }

    render() {
        let result;
        if(this.state.groupFound){
            result = <SearchResult groupname={this.state.groupFound} groupId={this.state.groupIdFound} userid = {this.props.id}></SearchResult>
            console.log(this.state.groupIdFound)
        } else {
            result = <div><h2>Results</h2><h1>Not Found</h1></div>
        }
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
        </div>
    }

}

export default SearchBox;