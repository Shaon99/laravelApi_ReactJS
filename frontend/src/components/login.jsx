import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link,NavLink,Redirect} from 'react-router-dom';
import axios from 'axios'
export class login extends Component {
  state={
    email:"",
    password:"",
  }


  formsubmit = (e)=>{

    e.preventDefault();
    const data={
      email:this.state.email,
      password:this.state.password
    }
    axios.post('login',data)
    .then((response)=>{
      localStorage.setItem('token',response.data.token);
      this.setState({
        loggedIn:true
      })
    })
    
    .catch((error)=>{
      console.log(error);
    });
  }

    render() {
      if(this.state.loggedIn){
      return <Redirect to='/home'/>
    }        
      
        return (
            <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
      <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                  <div class="brand-logo">
                  <img src="../../assets/images/logo.svg"/>
                  </div>
                  <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3" onSubmit={this.formsubmit} id="lform">
                  <div class="form-group">
                    <input required type="email" class="form-control form-control-lg" id="exampleInputEmail1" onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Enter address"/>
                  </div>
                  <div class="form-group">
                    <input required type="password" class="form-control form-control-lg" id="exampleInputPassword1" onChange={(e)=>{this.setState({password:e.target.value})}}  placeholder="Password"/>
                    <Link to="#" class="auth-link text-black ">Forgot password?</Link>

                  </div>
                  <div class="mt-3">
                    <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                  </div>
                 
                  <div class="mt-3">
                    <button class="btn btn-block btn-gradient-info btn-lg font-weight-medium auth-form-btn">
                      <i class="mdi mdi-facebook mr-2"></i>Connect using facebook </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light"> Don't have an account? <Link to="#" class="text-primary">Create</Link>
                  </div>
                </form>
                  </div>
                  </div>
                  </div>

</div>
          </div>

              
 </div>
            
       
            
        )
    }
}

export default login
