import React, { Component } from 'react';
import './SearchResult.css';
import { Result } from '../Result/Result';

export class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div class="bbb">
                <h2>Results</h2>
                </div>
                <Result></Result>
                <Result></Result>
                <Result></Result>
                <Result></Result>
            </div>
        );
    }
}