import React, { Component } from 'react';
import './Result.css';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="abb">
                <div className="column"><p>GroupName</p></div><div className="column"><button>add</button></div>
            </div>
        )
    }
}

export default Result;