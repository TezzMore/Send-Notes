import React from 'react';
import logo from './Images/logo.png';
// import '../styles/Navbar.css';
const Header = () => {
  return (
    <>
<nav className="navbar navbar-light bg-light">

  <a className="navbar-brand" href="#">
    <img src={logo} width="40" height="40" className="d-inline-block align-top" alt='logo'/>
    Notekeeper-App
  </a>
  <form class="form-inline my-2 my-lg-0">
      <div class="form-control mr-sm-2" >
      Tezz
      </div>
    </form>

</nav>
</>
  );
};

export default Header;