import React, { Component } from 'react'
import "./allcategory";
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import axios from "axios";
class Allb extends Component {
  state={
         brands:[]
  }
//fetchdata
 componentDidMount(){
  axios.get('/showbrand')
  .then((response)=> {
    this.setState({brands:response.data})
  })
  .catch((error)=> {
    // handle error
    console.log(error);
  })
 }

 brandDelete(id){
    fetch("http://127.0.0.1:8000/api/deletebrand/"+id,{
      method:"DELETE"
    });
    alert("Brand has been deleted");
    axios.get('/showbrand')
    .then((response)=> {
      this.setState({brands:response.data})
    })
}
render(){
  return(
<div class="container">
<button class="btn btn-success mt-2"><Link class="text-decoration-none text-light" to="/addbrand">Add Brand</Link></button>

<table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Brand Name</th>
      <th scope="col">Logo</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>{
    this.state.brands.map(brand=>{
   return(
  <tr>   
      <td>{brand.name}</td>
      <td><img style={{width:60}} src={"http://localhost:8000/"+brand.logo}/></td>
      <td>
       <Link to={"update/"+brand.id} class="btn btn-sm btn-success">Edit</Link>
        <button style={{margin:5}} class="btn btn-sm btn-danger" onClick={()=>{this.brandDelete(brand.id)}}>Delete</button>
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
export default Allb;