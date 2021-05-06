import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import * as bootstarp from 'react-bootstrap';

class App extends Component  {
//fetch laravel Api here..........................
constructor(){
  super();
  this.state={
    email:"",
    password:"",
  }
}

submit(){
  console.log(this.state)
  fetch('http://127.0.0.1:8000/api/login',
  {
    method:'post',
    body:JSON.stringify(
      this.state
    ),
    headers:{
      'Accept':'application/json',
      'content-type':'application/json',
    }
  }).then(function(response) {
    response.json().then(function(res){
    console.log(res)      
    })   
  })  
}
  render(){
  return (
    <div className="App">        
             <div class="mt-5 col d-flex justify-content-center ">
            <bootstarp.Card >
            <bootstarp.Card.Title class="text-primary font-weight-bold text-uppercase">Sign In</bootstarp.Card.Title>
            <bootstarp.Card.Body >
              <form>
            <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input  class="mt-2 form-control" type="text" name="email" placeholder="email" onChange={(item)=>{this.setState({email:item.target.value})}}/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <div class="form-group">  
        <label for="exampleInputEmail1">Password</label>

        <input class="mt-2 form-control" type="password" name="password" placeholder="password" onChange={(item)=>{this.setState({password:item.target.value})}}/>
          </div>
        <button class="btn btn-primary mt-3" onClick={()=>{this.submit()}}>Login</button>   
        </form>
            </bootstarp.Card.Body>
            </bootstarp.Card>
            </div>
    </div>
  );

}
}
export default App;
