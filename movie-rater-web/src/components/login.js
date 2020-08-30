import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
class Login extends Component {
    state = {
        crendentials:{
            username:'',
            password:''
        }
    }
    inputChanged = event =>{
        let cred = this.state.crendentials;
        cred[event.target.name] = event.target.value;
        this.setState({crendentials: cred});
    }
    login =() =>{
        fetch(`http://127.0.0.1:8000/auth/`,{
      method:'POST',headers:{
        'Content-type': 'application/json',
      },body:JSON.stringify(this.state.crendentials)
    }).then(res=>res.json()).then(res=>{console.log(res);this.props.cookies.set('mr-token',res.token);window.location.href="/movies";}).catch(err=>console.log('error'));
  
    }
  render() {
    return (
      <div className="login-container"> 
          <h1>Login</h1>
          <span>Title</span><br/>
          <input type="text" name="username" value={this.state.crendentials.username} onChange={this.inputChanged} /><br/>
          <span>Title</span><br/>
          <input type="password" name="password" value={this.state.crendentials.password} onChange={this.inputChanged} /><br/>
          <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default withCookies(Login);