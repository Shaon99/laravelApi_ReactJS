import React from 'react'
import {useState} from 'react'
import "./brand";
import "./allbrand";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route,Link,NavLink,useHistory} from 'react-router-dom';


toast.configure();
function Brand() {
  const notify = () =>toast.success("Brand Added Successfully",{
    autoClose:2000
  })

  // let history = useHistory();

const[name,setName]=useState("");
const[file,setFile]=useState("");

const submitData= e =>{
  e.preventDefault();
  console.warn(name,file);
  var formData = new FormData();
  formData .append('name',name);
  formData .append('file',file);

  axios({
    url:'/brandinsert',
    method:'post',
    data:formData
  })
  notify();
   document.getElementById("bform").reset();
}
    return (
      <div class="container">
<button class="btn btn-success mt-2"><Link class="text-decoration-none text-light" to="/brand">All Brand</Link></button>
      <div class="mt-5 col container d-flex justify-content-md-center">        
         <div className="card" style={{width: '40rem'}}>
       <div className="card-header text-success">Add Brand</div>
       <form onSubmit={submitData} id="bform">
       <div className="card-body">
       <div class="form-group">
       <label for="exampleInputEmail1">Brand Name</label>
       <input required class="mt-2 form-control" type="text" onChange={(e)=>setName(e.target.value)} name="name" placeholder="brand name"/>
       </div>
       <div class="mt-3 form-group">
       <label for="exampleInputEmail1">Brand Logo</label>
       <input  class="mt-2 form-control" onChange={(e)=>setFile(e.target.files[0])} type="file" name="file" placeholder="Select Logo"/>
       </div>      
         <button  className="btn btn-primary mt-3">Submit</button>      
       </div>
       </form>
     </div>
     </div>
        </div>
    )
}
export default Brand;