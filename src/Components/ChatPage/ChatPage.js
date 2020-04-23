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
            groupList : ['g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12','g13','dfdfdfdfdfd','dfdfdfetggt','tgtgtegeg'],
            atGroup: '',
        }
    }

    render(){
        return(
            <div className='main-page'>
                <div className='left-part'>
                    <SearchBox />
                    <MyGroup />
                </div>
                <div className='right-part'>
                    <ChatBox />
                </div>
            </div>
        );
    }
}

export default ChatPage;