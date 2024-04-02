import React from 'react';
import { Navbar , Nav} from 'rsuite';
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";


import 'rsuite/Navbar/styles/index.css';
import 'rsuite/Nav/styles/index.css';
import './NavBar.css';




const NavBar = ({...props}) => {


  return (
    <Navbar {...props} className='main-nav'>
    <Navbar.Brand href="#">Logo Zika</Navbar.Brand>
    <Nav>
      <Nav.Item> <Link to="/">Home</Link></Nav.Item>
      <Nav.Menu title="Produtos">
        <Nav.Item>Tênis</Nav.Item>
        <Nav.Item>Moletom</Nav.Item>
        <Nav.Item>Acessórios</Nav.Item>
        <Nav.Item>Camisetas</Nav.Item>
        <Nav.Item>Drops</Nav.Item>
      </Nav.Menu>
        <Nav.Menu title="Contato">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telefone</Nav.Item>
        </Nav.Menu>
     
    </Nav>
    <Nav pullRight>
      <div>
        <Nav.Item>
          <div className="cart">
          <IoMdCart className='cart-icon'/>
          <span>Carrinho</span>
          </div>

        </Nav.Item>
      </div>
    </Nav>
  </Navbar>
  );
}

export default NavBar;
