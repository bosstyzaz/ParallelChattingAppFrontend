import React, { Component } from 'react';
import './Result.css';
import axios from 'axios';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleJoinGroup = this.handleJoinGroup.bind(this);
    }

    handleJoinGroup(){
        axios.put(`http://localhost:3001/groups/${this.props.groupid}/client/add/${this.props.userid}`)
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className="abb">
                <div className="column"><p>{this.props.groupname}</p></div><div className="column"><button onClick={this.handleJoinGroup}>join</button></div>
            </div>
        )
    }
}

export default Result;