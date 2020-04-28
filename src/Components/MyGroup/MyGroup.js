import React from 'react';
import './MyGroup.css'
import Group from './Group';


class MyGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
        }
    }

    componentDidMount(){

    }

    render() {
        return (
          <div className='MyGroup-container'>
              <div className='MyGroup-header'>My Groups</div>
              <button>Create Group</button>
              <div className="GroupList">
                {
                    this.props.groupList.map(group =>{
                        return <Group handleRead={this.props.handleRead} handleUnread={this.props.handleUnread} handleLeave={this.props.handleLeave} group={group}/>;
                    })
                }
            </div>
          </div>
        );
    }
}

export default MyGroup;