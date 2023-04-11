import React, { Component } from 'react'
import './login.css'
import Home from './Home';
import { prettyDOM } from '@testing-library/react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      password: "",
      user: {
        firstName: "",
        password: "", 
      }
    }
  }
  render() {
    const onChange = e =>{
      this.setState(prev => ({...prev, firstName: e.target.value}))
    };

    const onChange2 = e => {
      this.setState(prev => ({...prev, password: e.target.value}))
    };

    const login = e => {
      e.preventDefault()
      this.setState(prev => ({...prev, user: {
        firstName: this.state.firstName,
        password: this.state.password,
      }}));
    };
    console.log(this.state);

    return (
      <div className='wrapper'>
        {
          this.state.user.firstName==="anvarjon" && this.state.user.password==="1996" ? (
          <Home />) : (
            <form>
              <h3>Login</h3>
              <input type="text" placeholder='Username' onChange={onChange}/>
              <input type="text" placeholder='Password'onChange={onChange2}/>
              <button type='submit' onClick={login}>Login</button>
           </form>
          )
        }
      </div>
    );
  };
};

export default Login;