import React from "react";
import "./ChatBox.css";
import Message from "./Message";
import MyMessage from "./MyMessage";
import ScrollArea from "react-scrollbar";
import { Scrollbars } from 'react-custom-scrollbars';

class ChatBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
      };
    }

    render() {
        return (
            <Scrollbars style={{ width: 1000, height: 500 }}>
            <div className="chatbox">
            <h1>Gu is Chatbox</h1>
            <Message message="hello"/>
            <MyMessage message="What's up Boom"/>
            <Message message="ไอปาค กูต้องการความช่วยเหลือgfsdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkasdsadsadsasda"/>
            <MyMessage message="มึงพูดเหี้ยไรเนี่ย"/>
            <MyMessage message="เมาป่าว"/>
            <Message message="ไม่เมา อยากเมาปะ"/>
            <Message message="ข้าวสาร"/>
            <MyMessage message="จัด"/>
            <Message message="hello"/>
            <MyMessage message="What's up Boom"/>
            <Message message="ไอปาค กูต้องการความช่วยเหลือgfsdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkasdsadsadsasda"/>
            <MyMessage message="มึงพูดเหี้ยไรเนี่ย"/>
            <MyMessage message="เมาป่าว"/>
            <Message message="ไม่เมา อยากเมาปะ"/>
            <Message message="ข้าวสาร"/>
            <MyMessage message="จัด"/>
            </div>
            </Scrollbars>
            
        );
    }

}

export default ChatBox;