import React from 'react';
import * as bootstarp from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from 'react-router-dom';
import App from "../App";
import Index from "./about";
import Brand from "./brand";
import Category from "./category";
import Product from "./product";
import Allb from "./allbrand";
import Allc from "./allcategory";
import Editb from "./editbrand";
import Editc from "./editcategory";
import Addp from "./addproduct";



const Navber =()=>{
return (
  <Router> 
<bootstarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <bootstarp.Navbar.Brand><NavLink exact activeStyle={{color:'white'}}  to="/">Home</NavLink></bootstarp.Navbar.Brand>
  <bootstarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <bootstarp.Navbar.Collapse id="responsive-navbar-nav">
    <bootstarp.Nav className="mr-auto">
      <bootstarp.Nav.Link ><NavLink activeStyle={{color:'white'}} to="/about">About</NavLink></bootstarp.Nav.Link>
      <bootstarp.Nav.Link><NavLink activeStyle={{color:'white'}}  to="/brand">Brand</NavLink></bootstarp.Nav.Link>
      <bootstarp.Nav.Link><NavLink activeStyle={{color:'white'}}  to="/category">Category</NavLink></bootstarp.Nav.Link>
      <bootstarp.Nav.Link><NavLink activeStyle={{color:'white'}}  to="/product">Product</NavLink></bootstarp.Nav.Link>
    </bootstarp.Nav>
  </bootstarp.Navbar.Collapse>
</bootstarp.Navbar>

<Switch>
<Route path="/addproduct">
<Addp/>
</Route>
<Route path="/updatecategory/:id">
<Editc/>
</Route>
<Route path="/update/:id">
<Editb/>
</Route>
<Route path="/addbrand">
<Brand />
</Route>
<Route path="/addcategory">
<Category />
</Route>
<Route path="/product">
<Product />
</Route>
<Route path="/category">
<Allc />
</Route>
<Route path="/brand">
<Allb />
</Route>
<Route path="/about">
<Index />
</Route>
<Route path="/">
<App />
</Route>
</Switch>
</Router>
);
}
export default Navber;