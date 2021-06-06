import React ,{useEffect,useState} from 'react'
import "./editbrand";
import {withRouter} from 'react-router-dom'
import {BrowserRouter as Router,Switch,Route,Link,NavLink,useHistory} from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Editc(props) {
  const notify = () =>toast.info("Category Successfully Updated",{
    autoClose:2000
  })

  let history = useHistory();
  const[cname,setName]=useState("");
  const[sname,setsName]=useState("");

   const [data,setData]=useState([])
    useEffect( async ()=>{
     let result= await fetch("http://127.0.0.1:8000/api/category/"+props.match.params.id);
     result=await result.json();
     setData(result)
     setName(result.cname)
     setsName(result.sname)
    },[])

    async function update(id){
      var formData = new FormData();
      formData .append('cname',cname);
      formData .append('sname',sname);
    
      axios({
        url:'updatecategory/'+id,
        method:'post',
        data:formData
      })     
        notify();
        history.push('/category')   
       
    }
    return(
      <div class="container">
      <div class="mt-5 col container d-flex justify-content-md-center">        
      <div className="card" style={{width: '40rem'}}>
      <div className="card-header text-success">Update Category</div>
      <div className="card-body">
      <div class="form-group">
      <label for="exampleInputEmail1">Category Name</label>
      <input required onChange={(e)=>setName(e.target.value)} name="cname" class="mt-2 form-control" type="text" defaultValue={data.cname}/>
      </div>
      <div class="mt-3 form-group">
      <label for="exampleInputEmail1">Slug Name</label>
      <input required onChange={(e)=>setsName(e.target.value)} class="mt-2 form-control" type="text" name="sname" defaultValue={data.sname}/>   
      </div> 
      <button onClick={()=>update(data.id)} className="btn btn-gradient-success  mt-3">Update</button>
      </div>
      </div>
    </div>
    </div>
    )
}
export default withRouter(Editc);