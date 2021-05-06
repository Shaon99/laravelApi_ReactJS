import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import  "./category";
import Allc from "./allcategory";
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';


class Category extends Component {
  state={
    cname:"",
    sname:"",
    msg:"",
  }
  fromsubmit = (e) =>{
    e.preventDefault();
    const data={
      cname:this.state.cname,
      sname:this.state.sname,
    }
    axios.post('/insert',data)
    .then( (response)=> {
      this.setState({msg:response.data.msg})
      document.getElementById("cfrom").reset();

    })
    .catch( (error)=> {
     this.setState({msg:error.response.data.msg})
    });

  }

  render(){
    let msg="";
    if(this.state.msg){
msg=(
<div>
<div class="alert alert-success">
  {this.state.msg}
</div>
</div>

)
    }
    return (

<div class="container">
<button class="btn btn-success mt-2"><Link class="text-decoration-none text-light" to="/category">All Category</Link></button>
        <div class="mt-5 col d-flex justify-content-md-center">      
         <div className="card" style={{width: '40rem'}}>
        <div className="card-header text-success">Add Category</div>
        <div className="card-body">
          {msg}
          <form onSubmit={this.fromsubmit} id="cfrom">
        <div class="form-group">
        <label for="exampleInputEmail1">Category Name</label>
        <input  class="mt-2 form-control" type="text" name="cname" required
        placeholder="category name"  onChange={(e)=>{this.setState({cname:e.target.value})}}/>
        </div>
        <div class="mt-3 form-group">
        <label for="exampleInputEmail1">Slug Name</label>
        <input  class="mt-2 form-control" type="text" name="sname" required  placeholder="slug name" 
         onChange={(e)=>{this.setState({sname:e.target.value})}}/>
        </div>
          <button type="submit"  className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>             
         </div>
         </div>


    );
  }
}
export default Category;