import React from 'react';
import GroupList from './GroupList';
import './MyGroup.css'

class MyGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          username : 'winisgod',
          groupList : ['g1','g2','g3','g4','g5','g6','g7','g8'],
        }
    }

    componentDidMount(){

    }

    render() {
        return (
          <div className='MyGroup-container'>
              <div className='MyGroup-header'>My Groups</div>
              <GroupList username={this.state.username} groupList={this.state.groupList} />
          </div>
        );
    }
}

export default MyGroup;