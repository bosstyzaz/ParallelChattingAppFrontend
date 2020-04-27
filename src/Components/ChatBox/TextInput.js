import React from "react";
import "./TextInput.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";


class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: '',
    };
    library.add(fas);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <from onSubmit={this.handleSubmit}>
          <input
            value={this.state.message}
            onChange = {this.handleChange}
            placeholder="Type your message and hit ENTER" 
            type="text" id="username" name="username" />
          <button className="btn"><FontAwesomeIcon icon={['fas', 'paper-plane']} type="submit"/></button>
        </from>
      </div>
    );
  }
}

export default TextInput;
