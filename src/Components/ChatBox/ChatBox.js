import React from "react";
import "./ChatBox.css";
import Message from "./Message";
import MyMessage from "./MyMessage";
import ScrollArea from "react-scrollbar";
import { Scrollbars } from 'react-custom-scrollbars';
import TextInput from './TextInput';

class ChatBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        id: this.state.id
      };
    }

    sendMessage(text) {
        
    }

    render() {
      return (
        <div className='chatbox-container'>
          <Scrollbars className='scrollbar-chat'>
          <h1>{this.props.group}</h1>
          {this.props.messages.map((message, index) => {
            return (
              <Message key={index} username={message.senderId} text={message.text}/>
            )
          })}
          </Scrollbars>
          <TextInput sendMessage={this.sendMessage}/>
        </div>
      )
    }

    // render() {
    //     return (
    //         <div className='chatbox-container'>
    //         <Scrollbars className='scrollbar-chat'>
    //         <div className="chatbox">
    //         <h1>Gu is Chatbox</h1>
    //         <Message message="hello"/>
    //         <MyMessage message="What's up Boom"/>
    //         <Message message="ไอปาค กูต้องการความช่วยเหลือgfsdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkasdsadsadsasda"/>
    //         <MyMessage message="มึงพูดเหี้ยไรเนี่ย"/>
    //         <MyMessage message="เมาป่าว"/>
    //         <Message message="ไม่เมา อยากเมาปะ"/>
    //         <Message message="ข้าวสาร"/>
    //         <MyMessage message="จัด"/>
    //         <Message message="hello"/>
    //         <MyMessage message="What's up Boom"/>
    //         <Message message="ไอปาค กูต้องการความช่วยเหลือgfsdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkasdsadsadsasda"/>
    //         <MyMessage message="มึงพูดเหี้ยไรเนี่ย"/>
    //         <MyMessage message="เมาป่าว"/>
    //         <Message message="ไม่เมา อยากเมาปะ"/>
    //         <Message message="ข้าวสาร"/>
    //         <MyMessage message="จัด"/>
    //         </div>
    //         </Scrollbars>
    //         <TextInput />
    //         </div>
    //     );
    // }

}

export default ChatBox;