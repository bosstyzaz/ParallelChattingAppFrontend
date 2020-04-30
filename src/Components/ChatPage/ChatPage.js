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
            messages: [],
              testmessage: [],
            createGroup : '',
        }
        this.handleRead = this.handleRead.bind(this);
        this.handleUnread = this.handleUnread.bind(this);
        this.handleLeave = this.handleLeave.bind(this); 
        this.getMessages = this.getMessages.bind(this);
        this.getGroup = this.getGroup.bind(this);
        this.handleGetgroup = this.handleGetgroup.bind(this);
    }

    async handleRead(e){
        await this.setState({
            atGroup: e,
        });
        //query read
        this.getMessages()
    }

    async getMessages(){
        await axios.get(`http://localhost:3001/messages/findbygroup/${this.state.atGroup}`)
        .then(res => {
            //console.log(res.data)
            let l = res.data.length
            let i;
            let newmessage = [];
            for(i=0 ; i<l; i++){
                newmessage.push({
                    senderId: res.data[i].sender,
                    text: res.data[i].content
                })
            }
            this.setState({messages: newmessage})
        })
    }

    handleUnread(e){
        this.setState({
            atGroup: e,
        })
        //query unread
    }

    handleLeave(e){
        //console.log('jjjjjj')
        axios.put(`http://localhost:3001/groups/${e}/client/remove/${this.state.id}`)
        .then(res => {
            console.log(res)
            this.props.history.push({
                pathname: '/ChatPage',
                state: {id: this.state.id}
            })
        })
        //tell backend to delete that group(e)
        
    }

    handleGetgroup(e){
        console.log(`${e}`)
        if(e !== ''){
            axios.post("http://localhost:3001/groups", {
                name: e,
                client: [],
                message: [],
            })
            .then((response) => {
                console.log(response);
                axios.put(`http://localhost:3001/groups/${response.data._id}/client/add/${this.state.id}`
            )
            .then((res) => {
                console.log(res);
                this.getGroup()
            });
            })
            .catch((error) => {
                console.log(error);
            });
        }
        
    }

    componentWillMount(){
        if(this.props.location.state) {
            this.setState({
                id : this.props.location.state.id
            })
        }
    }
    
    componentDidMount() {
        this.getGroup()
    }

    getGroup() {
        var memgroup;
        //console.log(this.state.id)
        axios.get(`http://localhost:3001/clients/${this.state.id}`)
        .then(res => {
            memgroup = res.data.group
            if(memgroup.length !== 0){
                let g = [];
                for(let i=0; i< memgroup.length;i++){
                    axios.get(`http://localhost:3001/groups/${memgroup[i].group_id}`)
                    .then(res => {
                        //console.log(res)
                        g.push({gname : res.data.name,
                            gid : res.data._id
                        })
                        this.setState({groupList:g})
                    })
                }
            }
        })
    }


    render(){
        this.getMessages();
        return(
            <div className='main-page'>
                <div className='left-part'>
                    <SearchBox id={this.state.id}/>
                    <MyGroup handleRead={this.handleRead}
                             handleUnread={this.handleUnread}
                             handleLeave={this.handleLeave} 
                             groupList={this.state.groupList}
                             userId ={this.state.id}
                             handleGetgroup={this.handleGetgroup}/>
                </div>
                <div className='right-part'>
                    <ChatBox messages={this.state.messages} groupID={this.state.atGroup} id={this.state.id} groupName={this.state.groupList.name}/>
                </div>
            </div>
        );
    }
}

export default ChatPage;