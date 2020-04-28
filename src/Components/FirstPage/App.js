import React from 'react';
import './App.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
      id: null,
      redirect: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this. handleEnter.bind(this);
  }

  componentDidMount(){

  }


  handleChange(e){
    this.setState({ username: e.target.value });
  }

  handleEnter(e){
    e.preventDefault();
    axios.post(`http://localhost:3001/clients`,{
      "name": this.state.username,
      "group": []
    })
    .then(res => {
      console.log(res);
      this.setState({id: res.data._id})
      //console.log(this.state.id)
      this.props.history.push({
        pathname: '/ChatPage',
        state: {id: this.state.id}
      })
    })
  }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to={{pathname:this.state.redirect, state: [{id: "1"}]}} />
    // }
    return (
      <div className='page-container'>
          <div className='main-header'>The Best Group Chat Application</div>
            <div className='main-container'>
                <form onSubmit={this.handleEnter}>
                  <div className='main-component'>
                    <div className='main-subheader'>Please enter your username</div><br />
                    <input className='main-input-box'  type='text' name='username' onChange={this.handleChange} placeholder='Enter your username' required />
                  </div>
                  <div>
                    <input className='main-enter-button' type='submit' value='Enter' />
                  </div>
                </form>
          </div>
        </div>
    );
  }

}

export default FirstPage;