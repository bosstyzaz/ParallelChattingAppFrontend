import React from 'react';
import Group from './Group';
import './GroupList.css';

class GroupList extends React.Component {
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
            <div className="GroupList">
                {
                    this.props.groupList.map(group =>{
                        return <Group username={this.props.username} group={group}/>;
                    })
                }
            </div>
        );
    }
}

export default GroupList;