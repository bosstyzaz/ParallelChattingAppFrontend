import React from 'react';
import './Group.css';

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
        }

    }

    componentDidMount(){

    }

    render() {
        return (
            <div className='group-container'>
                <div className='group-name'>{this.props.group}</div>
                <div>
                    <button className='read-button' onClick={this.props.handleRead.bind(this,this.props.group)}>read</button>
                    <button className='getUnread-button' onClick={this.props.handleUnread.bind(this,this.props.group)}>getUnread</button>
                    <button className='leave-button' onClick={this.props.handleLeave.bind(this,this.props.group)}>Leave</button>
                </div>
            </div>
        );
    }
}

export default Group;