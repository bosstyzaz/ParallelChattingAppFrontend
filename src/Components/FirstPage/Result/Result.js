import React, { Component } from 'react';
import './Result.css';

export class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div class="abb">
                <div class="column"><p>GroupName</p></div><div class="column"><button>add</button></div>
            </div>
        )
    }
}