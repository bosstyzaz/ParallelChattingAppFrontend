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
    };
    library.add(fas);
  }

  render() {
    return (
      <div>
        <input type="text" id="username" name="username" />
        <button className="btn"><FontAwesomeIcon icon={['fas', 'paper-plane']} /></button>
      </div>
    );
  }
}

export default TextInput;
