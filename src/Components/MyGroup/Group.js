import React from 'react';
import './Group.css';

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
        }
        this.handleGetUnread = this.handleGetUnread.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleGetRead = this.handleGetRead.bind(this);
    }

    componentDidMount(){

    }

    handleGetRead(e){

    }

    handleGetUnread(e){
        //request backend to get unread message then show in the chatbox
    }

    handleLeave(e){
        //tell backend to remove this group from groupList of this user then re-render
    }

    render() {
        return (
            <div className='group-container'>
                <div className='group-name'>{this.props.group}</div>
                <div>
                    <button className='read-button' onClick={this.handleGetRead}>read</button>
                    <button className='getUnread-button' onClick={this.handleGetUnread}>getUnread</button>
                    <button className='leave-button' onClick={this.handleLeave}>Leave</button>
                </div>
            </div>
        );
    }
}

export default Group;