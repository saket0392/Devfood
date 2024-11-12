import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handlelogout = () =>{
    localStorage.removeItem("authtoken");
    navigate("/login")
  }

  return <div><nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fs-italic" to="/">DevFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authtoken"))?<li className="nav-item">
          <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">My Orders</Link>
        </li>: " "}
      </ul>
      {(!localStorage.getItem("authtoken"))?
        <div className='d-flex'>
        <Link className="btn bg-white text-success mx-1 fw-bold" to="/login">Login</Link>
        <Link className="btn bg-white text-success mx-1 fw-bold" to="/createuser">Signup</Link>
      </div>
      : 
      <div className='d-flex'> 
        <div>
          <Link className="btn bg-white text-success mx-1 fw-bold">My Cart</Link>
        </div>
        
        <div>
          <Link className="btn bg-white text-danger mx-1 fw-bold" onClick={handlelogout}>LogOut</Link>
        </div>
      </div>}
    </div>
  </div>
</nav>
</div>
}
