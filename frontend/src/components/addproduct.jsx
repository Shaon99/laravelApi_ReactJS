import React from 'react'
import {useState} from 'react'
import "./addproduct";
import "./product";
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
function Addp() {
  const notify = () =>toast.success("Product Added Successfully",{
    autoClose:2000
  })
  
const[name,setName]=useState("");
const[file,setFile]=useState("");
const[category,setCategory]=useState("");
const[brand,setBrand]=useState("");

const add= e =>{
  e.preventDefault();
  
  var formData = new FormData();
  formData .append('name',name);
  formData .append('file',file);
  formData .append('category',category);
  formData .append('brand',brand);

  axios({
    url:'/productadd',
    method:'post',
    data:formData
  })
  notify();
   document.getElementById("pform").reset();
}

    return (
      <div class="container">
<button class="btn btn-success mt-2"><Link class="text-decoration-none text-light" to="/product">All Product</Link></button>
      <div class="mt-5 col container d-flex justify-content-md-center">        
         <div className="card" style={{width: '40rem'}}>
         <form onSubmit={add} id="pform">
       <div className="card-header text-success">Add Product</div>
       <div className="card-body">
       <div class="form-group">
       <label for="exampleInputEmail1">Product Name</label>
       <input required class="mt-2 form-control" type="text" onChange={(e)=>setName(e.target.value)} name="name" placeholder="product name"/>
       </div>
       <div class="mt-3 form-group">
       <label for="exampleInputEmail1">Category</label>
       <select required class="mt-2 form-control" type="text" onChange={(e)=>setCategory(e.target.value)} name="category" placeholder="category name">
       <option selected disabled >Select Category</option>
        <option value="1">Men's Clothing</option>
        <option value="2">Women's Clothing</option>
        </select>
       </div>
       <div class="mt-3 form-group">
       <label for="exampleInputEmail1">Brand</label>
       <select required class="mt-2 form-control" type="text" onChange={(e)=>setBrand(e.target.value)} name="brand" placeholder="brand name">
        <option selected disabled>Select Brand</option>
        <option value="1">Yellow</option>
        <option value="2">Ecstasy</option>
        </select>
       </div>
       <div class="mt-3 form-group">
       <label for="exampleInputEmail1">Product Picture</label>
       <input required class="mt-2 form-control" onChange={(e)=>setFile(e.target.files[0])} type="file" name="file" placeholder="Select Logo"/>
       </div>   
         <button className="btn btn-primary mt-3">Submit</button>
       </div>
</form>

     </div>
     

     </div>
        </div>
    )
}
export default Addp;