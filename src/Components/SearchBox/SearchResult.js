import React, { Component } from 'react';
import './SearchResult.css';
import Result from './Result';

class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="bbb">
                <h2>Results</h2>
                </div>
                <Result></Result>
            </div>
        );
    }
}

export default SearchResult;