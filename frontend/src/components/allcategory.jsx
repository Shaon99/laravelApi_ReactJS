import React, { Component } from 'react'
import "./allcategory";
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';


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
 categoryDelete=(id)=>{ 
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
      axios.delete("/deletecategory/"+id)
      .then((response)=> {
        let category=this.state.categories;
        for(var i=0;i<category.length;i++){
          if(category [i].id==id){
            category.splice(i,1);
            this.setState({categories:category});
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
<button class="btn btn-gradient-primary mt-2"><Link class="text-decoration-none text-light" to="/addcategory">Add Category</Link></button>

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
       <Link to={"updatecategory/"+category.id}  class="btn-sm btn btn-gradient-info">Edit</Link>
       <button style={{margin:5}} class="btn btn-gradient-danger btn-sm " onClick={()=>{this.categoryDelete(category.id)}}>Delete</button>
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