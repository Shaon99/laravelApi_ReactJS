import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import  "./category";
import Allc from "./allcategory";
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
class Category extends Component {
  notify = () =>toast.success("Category Added Successfully",{
    autoClose:2000
  })
  state={
    cname:"",
    sname:"",   
  }


  fromsubmit = (e) =>{
    e.preventDefault();    
    const data={
      cname:this.state.cname,
      sname:this.state.sname,
    }
    axios.post('/insert',data)   
   this.notify()
      document.getElementById("cform").reset();  
      }


  render(){

    return (

<div class="container">
<button class="btn btn-gradient-primary mt-2"><Link class="text-decoration-none text-light" to="/category">All Category</Link></button>
        <div class="mt-5 col d-flex justify-content-md-center">      
         <div className="card" style={{width: '40rem'}}>
        <div className="card-header text-success">Add Category</div>
        <div className="card-body">
          <form onSubmit={this.fromsubmit} id="cform">
        <div class="form-group">
        <label for="exampleInputEmail1">Category Name</label>
        <input required class="mt-2 form-control" type="text" name="cname"
        placeholder="category name"  onChange={(e)=>{this.setState({cname:e.target.value})}}/>
        </div>
        <div class="mt-3 form-group">
        <label for="exampleInputEmail1">Slug Name</label>
        <input required class="mt-2 form-control" type="text" name="sname"  placeholder="slug name" 
         onChange={(e)=>{this.setState({sname:e.target.value})}}/>
        </div>
          <button type="submit"  className="btn btn-gradient-success mt-3">Submit</button>
          </form>
        </div>
      </div>             
         </div>
         </div>
    );
  }
}
export default Category;