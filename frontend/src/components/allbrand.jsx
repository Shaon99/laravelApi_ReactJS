import React, { Component } from 'react'
import "./allcategory";
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

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

 brandDelete=(id)=>{ 
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
      axios.delete("/deletebrand/"+id)
      .then((response)=> {
        let brand=this.state.brands;
        for(var i=0;i<brand.length;i++){
          if(brand [i].id==id){
            brand.splice(i,1);
            this.setState({brands:brand});
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
<button class="btn btn-gradient-primary mt-2"><Link class="text-decoration-none text-light" to="/addbrand">Add Brand</Link></button>
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
      <td><img style={{width:'80px',height:'80px'}}  class="rounded" src={"http://localhost:8000/"+brand.logo}/></td>
      <td>
       <Link to={"update/"+brand.id} class="btn-sm btn btn-gradient-info">Edit</Link>
        <button style={{margin:5}} class="btn-sm btn btn-gradient-danger" onClick={()=>{this.brandDelete(brand.id)}}>Delete</button>
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