import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import MyGroup from '../MyGroup/MyGroup';
import ChatBox from '../ChatBox/ChatBox';
import './ChatPage.css';
import axios from 'axios';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: 'Ricardo Milos',
            id: null,
            groupList : [],
            atGroup: '',
            messages: [{
                senderId: 'boom',
                text: 'Hey win, how are you ?'
              },
              {
                senderId: 'win',
                text: 'Great!! How about you ?'
              },
              {
                senderId: 'boom',
                text: "I'm great as well. "
              },]
        }
        this.handleRead = this.handleRead.bind(this);
        this.handleUnread = this.handleUnread.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleRead(e){
        this.setState({
            atGroup: e,
        });
        console.log('eiei')
        //query read
    }

    handleUnread(e){
        this.setState({
            atGroup: e,
        })
        //query unread
    }

    handleLeave(e){
        
        //tell backend to delete that group(e)
    }

    componentWillMount(){
        if(this.props.location.state) {
            this.setState({
                id : this.props.location.state.id
            })
        }
    }

    getGroup() {
        axios.get('http://localhost:3001/groups')
        .then(res => {
            var a = res.data.length;
            var i;
            var ng = [];
            for(i=0;i<a;i++) {
                ng.push(res.data[i].name)
            }
            this.setState({groupList: ng});
        })
    }


    render(){
        this.getGroup()
        return(
            <div className='main-page'>
                <div className='left-part'>
                    <SearchBox />
                    <MyGroup handleRead={this.handleRead}
                             handleUnread={this.handleUnread}
                             handleLeave={this.handleUnread} 
                             groupList={this.state.groupList}/>
                </div>
                <div className='right-part'>
                    <ChatBox messages={this.state.messages} group={this.state.atGroup} id={this.state.id} groupid={this.state.groupList.groupid}/>
                </div>
            </div>
        );
    }
}

export default ChatPage;