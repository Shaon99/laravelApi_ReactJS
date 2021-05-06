import React from 'react'
import {useState} from 'react'
import "./addproduct";
import "./product";
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route,Link,NavLink,useHistory} from 'react-router-dom';


function Addp() {
    let history = useHistory();


const[name,setName]=useState("");
const[file,setFile]=useState("");
const[category,setCategory]=useState("");
const[brand,setBrand]=useState("");

async function add(){
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
  .then( (response)=> {
      alert("Product Successfulley Save");
      history.push('/product')


  })
   
}
    return (
      <div class="container">
<button class="btn btn-success mt-2"><Link class="text-decoration-none text-light" to="/product">All Product</Link></button>
      <div class="mt-5 col container d-flex justify-content-md-center">        
         <div className="card" style={{width: '40rem'}}>
       <div className="card-header text-success">Add Product</div>
       <div className="card-body">
       <div class="form-group">
       <label for="exampleInputEmail1">Product Name</label>
       <input required class="mt-2 form-control" type="text" onChange={(e)=>setName(e.target.value)} name="name" placeholder="product name"/>
       </div>
       <div class="mt-3 form-group">
       <label for="exampleInputEmail1">Category</label>
       <select required class="mt-2 form-control" type="text" onChange={(e)=>setCategory(e.target.value)} name="category" placeholder="category name">
       <option selected disabled>Select category</option>
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
         <button onClick={add} className="btn btn-primary mt-3">Submit</button>
       </div>


     </div>
     

     </div>
        </div>
    )
}
export default Addp;