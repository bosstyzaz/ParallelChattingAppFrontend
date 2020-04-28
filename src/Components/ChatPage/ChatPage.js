import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import MyGroup from '../MyGroup/MyGroup';
import ChatBox from '../ChatBox/ChatBox';
import './ChatPage.css';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: 'Ricardo Milos',
            id: 2,
            groupList : ['g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12','g13','g14','g15','g16','g17','g18','g19','g20'],
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

    componentDidUpdate() {
        
    }

    componentWillMount(){
        if(this.props.location.state) {
            this.setState({
                id : this.props.location.state.id
            })
        }
    }



    render(){
        console.log(this.state.id)
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
                    <ChatBox messages={this.state.messages}/>
                </div>
            </div>
        );
    }
}

export default ChatPage;