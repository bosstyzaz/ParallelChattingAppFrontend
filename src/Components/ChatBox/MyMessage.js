import React from "react";
import "./MyMessage.css";

class MyMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <div class="mine messages flex-container" id="my_message">
        <div class="message last">{this.props.message}</div>
      </div>
    );
  }
}

export default MyMessage;
