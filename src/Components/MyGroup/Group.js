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
                <div className='group-name'>{this.props.groupname}</div>
                <div>
                    <button className='read-button' onClick={this.props.handleRead.bind(this,this.props.groupid)}>read</button>
                    <button className='getUnread-button' onClick={this.props.handleUnread.bind(this,this.props.groupid)}>getUnread</button>
                    <button className='leave-button' onClick={this.props.handleLeave.bind(this,this.props.groupid)}>Leave</button>
                </div>
            </div>
        );
    }
}

export default Group;