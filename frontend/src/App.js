import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import * as bootstarp from 'react-bootstrap';

class App extends Component  {
//fetch laravel Api here..........................

  render(){
  return (
    <div className="App">      
            <div class=" container mt-5 col d-flex justify-content-md-start">      
            <div className="card" style={{width: '19rem' , height:'19rem'}}>
            <div className="card-header text-success">Total Product</div>
            <div className="card-body">
            </div>
            </div>       
        </div>
        </div>
  );

}
}

export default App;
