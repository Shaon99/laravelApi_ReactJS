import React, { Component } from 'react'
import "./product";
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import axios from "axios";
class Product extends Component {
  state={
         products:[]
  }
//fetchdata
 componentDidMount(){
  axios.get('/productshow')
  .then((response)=> {
    this.setState({products:response.data})
  })
  .catch((error)=> {
    // handle error
    console.log(error);
  })
 }

 productDelete(id){
    fetch("http://127.0.0.1:8000/api/deleteproduct/"+id,{
      method:"DELETE"
    });
    alert("Product has been deleted");
    axios.get('/productshow')
    .then((response)=> {
      this.setState({products:response.data})
    })
}
render(){
  return(
<div class="container">
<button class="btn btn-success mt-2"><Link class="text-decoration-none text-light" to="/addproduct">Add Product</Link></button>

<table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Category</th>
      <th scope="col">Brand</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>



    </tr>
  </thead>
  <tbody>{
    this.state.products.map(pro=>{
   return(
  <tr>   
      <td>{pro.product_name}</td>
      <td>{pro.cname}</td>
      <td>{pro.name}</td>
      <td><img style={{width:60}} src={"http://localhost:8000/"+pro.image}/></td>
      <td>
       <Link to={"updatepro/"+pro.id} class="btn btn-sm btn-success">Edit</Link>
        <button style={{margin:5}} class="btn btn-sm btn-danger" onClick={()=>{this.productDelete(pro.id)}}>Delete</button>
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
export default Product;