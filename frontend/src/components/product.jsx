import React, { Component } from 'react'
import "./product";
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

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

 productDelete=(id)=>{ 
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      axios.delete("/deleteproduct/"+id)
      .then((response)=> {
        let product=this.state.products;
        for(var i=0;i<product.length;i++){
          if(product [i].id==id){
            product.splice(i,1);
            this.setState({products:product});
          }
        }
      })

    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your file is safe :)',
        'error'
      )
    }
  })
}

render(){
  return(
<div class="container">
<button class="btn btn-gradient-success mt-2"><Link class="text-decoration-none text-light" to="/addproduct">Add Product</Link></button>

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
      <td><img style={{width:'80px',height:'80px'}}  class="rounded" src={"http://localhost:8000/"+pro.image}/></td>
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