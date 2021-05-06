import React, { Component } from 'react'
import "./allcategory";
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import axios from "axios";

class AllC extends Component {
  state={
         categories:[]
  }
//fetchdata
 componentDidMount(){
  axios.get('/showcategory')
  .then((response)=> {
    this.setState({categories:response.data})
  })
  .catch((error)=> {
    // handle error
    console.log(error);
  })
 }
 drandDelete(id){
  fetch("http://127.0.0.1:8000/api/deletecategory/"+id,{
    method:"DELETE"
  });
  alert(" has been deleted");
  axios.get('/showcategory')
  .then((response)=> {
    this.setState({categories:response.data})
  })
}

render(){

  return(
<div class="container">
<button class="btn btn-success mt-2"><Link class="text-decoration-none text-light" to="/addcategory">Add Category</Link></button>

<table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Category Name</th>
      <th scope="col">Slug Name</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>{

    this.state.categories.map(category=>{

   return(
  <tr>   
      <td>{category.cname}</td>
      <td>{category.sname}</td>
      <td>
       <Link to={"updatecategory/"+category.id}  class="btn btn-sm btn-success">Edit</Link>
       <button style={{margin:5}} class="btn btn-sm btn-danger" onClick={()=>{this.drandDelete(category.id)}}>Delete</button>
      </td>
     </tr>
     )
      })
}
  </tbody>
</table>
</div>


  );
}

  
}
export default AllC;