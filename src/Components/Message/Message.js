import React from "react";
import "./Message.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <div className="flex-container">
        <div>
          <img src="/Resources/boom_2.jpg" alt="Avatar" class="right" />
        </div>
        <div className="userName-Messsage">
          <div className="userName">I am Boom, I love Esther</div>
          <div class="yours messages">
            <div class="message last">{this.props.message}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
