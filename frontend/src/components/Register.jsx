import React, { Component } from 'react'
import  "./Register";
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link,NavLink,Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
class Register extends Component {
  notify = () =>toast.success("Registration Successfull and redirect to Profile",{
    autoClose:2000
  })
  state={
    name:"",
    email:"", 
    password:"",   
  
  }


  submit = (e) =>{
    e.preventDefault();    
    const data={
      name:this.state.name,
      email:this.state.email,
    }
    
    axios.post('register', data)
    .then((response)=> {
          localStorage.setItem('token',response.data.token);
          this.setState({
              loggedIn:true
          })
          this.props.setUser(response.data.user);
    })
 
  
}


  render(){ 
    if(this.state.loggedIn){
        return <Redirect  to={'/profile'} />
    }

    if(localStorage.getItem('token')){
        return <Redirect  to={'/profile'} />
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
                <h4>New here?</h4>
                <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form class="pt-3" onSubmit={this.submit} id="r">
                  <div class="form-group">
                    <input required  type="text" class="form-control form-control-lg" id="exampleInputUsername1" onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="Username"/>
                  </div>
                  <div class="form-group">
                    <input required  type="email" class="form-control form-control-lg" id="exampleInputEmail1" onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Email"/>
                  </div>
                  <div class="form-group">
                    <input  required type="password" class="form-control form-control-lg" id="exampleInputPassword1" onChange={(e)=>{this.setState({password:e.target.value})}} placeholder="Password"/>
                  </div>
                  <div class="mb-4">
                  <div class="form-check">
                    <input required class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                    <label class="form-check-label" for="flexCheckIndeterminate">
                    I agree to all Terms & Conditions
                    </label>
                    </div>
                  </div>
                  <div class="mt-3">
                  <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                  </div>
                  <div class="text-center mt-4 font-weight-light"> Already have an account? <Link to="/" class="text-primary">Login</Link>
                  </div>
                  </form>
</div>
</div>
</div>
</div>
</div>
</div>


    );
  }
}
export default Register;