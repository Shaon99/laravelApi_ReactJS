import React ,{useEffect,useState} from 'react'
import "./editbrand";
import {withRouter} from 'react-router-dom'
import {BrowserRouter as Router,Switch,Route,Link,NavLink,useHistory} from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Editb(props) {
  const notify = () =>toast.info("Brand Successfully Updated",{
    autoClose:2000
  })

  let history = useHistory();
  const[name,setName]=useState("");
  const[file,setFile]=useState("");
 
  
   const [data,setData]=useState([])
    useEffect( async ()=>{
     let result= await fetch("http://127.0.0.1:8000/api/brand/"+props.match.params.id);
     result=await result.json();
     setData(result)
     setName(result.name)
     setFile(result.file)
    },[])

    async function update(id){
      console.warn(name,file);
      var formData = new FormData();
      formData .append('name',name);
      formData .append('file',file);
    
      axios({
        url:'/updatebrand/'+id,
        method:'post',
        data:formData
      })     
        notify();
        history.push('/brand')   
       
    }
    return(
        <div class="container">
        <div class="mt-5 col container d-flex justify-content-md-center">        
        <div className="card" style={{width: '40rem'}}>
      <div className="card-header text-success">Update Brand</div>
      <div className="card-body">
      <div class="form-group">
      <label for="exampleInputEmail1">Brand Name</label>
      <input required onChange={(e)=>setName(e.target.value)} name="name" class="mt-2 form-control" type="text" defaultValue={data.name}/>
      </div>
      <div class="mt-3 form-group">
      <label for="exampleInputEmail1">Brand Logo</label>
      <input required onChange={(e)=>setFile(e.target.files[0])} class="mt-2 form-control" type="file" name="file" defaultValue={data.logo}/>   
      <label class="text-danger">Old Logo</label>
      <br/>
      <img  name="img" class="mt-2" style={{width:60}} src={"http://127.0.0.1:8000/"+data.logo}/> 
      </div> 
        <button onClick={()=>update(data.id)} className="btn btn-gradient-success  mt-3">Update</button>
      </div>
      </div>
    </div>
    </div>
    )
}
export default withRouter(Editb);