import React from 'react';
import './App.css'
class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this. handleEnter.bind(this);
  }

  componentDidMount(){

  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEnter(e){
    e.preventDefault();
  }

  render() {
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