import React ,{useEffect,useState} from 'react'
import "./editcategory";
import {withRouter} from 'react-router-dom'
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';

function Editc(props) {
    console.warn("props",props.match.params.id)
    const [data,setData]=useState([])
    useEffect( async ()=>{
     let result= await fetch("http://127.0.0.1:8000/api/category/"+props.match.params.id);
     result=await result.json();
     setData(result)
    },[])

    return(
        <div class="container">
        <button class="btn btn-success mt-2"><Link class="text-decoration-none text-light" to="/category">All Category</Link></button>
        <div class="mt-5 col container d-flex justify-content-md-center">        
        <div className="card" style={{width: '40rem'}}>
        <div className="card-header text-success">Update Category</div>
        <div className="card-body">
        <div class="form-group">
        <label for="exampleInputEmail1">Category Name</label>
        <input required class="mt-2 form-control" type="text" name="cname" defaultValue={data.cname}/>
        </div>
        <div class="mt-3 form-group">
        <label for="exampleInputEmail1">Slug Name</label>
        <input required class="mt-2 form-control" type="text" name="sname" defaultValue={data.sname}/>
        </div> 
        <button  className="btn btn-primary  mt-3">Update</button>
        </div>
        </div>
        </div>
        </div>
    )
}
export default withRouter(Editc);