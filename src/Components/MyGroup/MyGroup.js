import React from 'react';
import './MyGroup.css'
import Group from './Group';
import axios from "axios";

class MyGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          groupName: "",
          groupID: ""
        }
        this.handleGroupnameChange = this.handleGroupnameChange.bind(this)
        this.createGroup = this.createGroup.bind(this)
    }

    componentDidMount(){

    }

    createGroup() {
      console.log(this.state.groupID)
      axios
      .post("http://localhost:3001/groups", {
        "name": this.state.groupName,
        "client": [],
        "message": []
      })
      .then((response) => {
        console.log(response);
        axios.put(`http://localhost:3001/groups/${response.data._id}/client/add/${this.props.userId}`)
        .then(res => {
            console.log(res)
      })
      })
      .catch((error) => {
        console.log(error);
      });
    }

    handleGroupnameChange() {
      this.setState({
        groupName: document.getElementById("create_group").value
      })
    }

    render() {
        return (
          <div className='MyGroup-container'>
              <div className='MyGroup-header'>My Groups</div>
              <input id="create_group" onChange={this.handleGroupnameChange}></input>
              <button onClick={this.createGroup}>Create Group</button>
              <div className="GroupList">
                {
                    this.props.groupList.map(group =>{
                        return <Group handleRead={this.props.handleRead} handleUnread={this.props.handleUnread} handleLeave={this.props.handleLeave} groupname={group.gname} groupid={group.gid}/>;
                    })
                }
            </div>
          </div>
        );
    }
}

export default MyGroup;