import React from 'react';
import { Navbar , Nav} from 'rsuite';
import { Link, NavLink} from 'react-router-dom';

import HomeIcon from '@rsuite/icons/legacy/Home';
import { IoMdCart } from "react-icons/io";


import 'rsuite/Navbar/styles/index.css';
import 'rsuite/Nav/styles/index.css';
import './NavBar.css';




const NavBar = ({...props}) => (

  <>
    <Navbar {...props} className='main-nav'>
      <Link to="/home" className='linkRouter'><Navbar.Brand>Logo</Navbar.Brand></Link>
      <Nav>

        {/* Home */}
        <Nav.Item className="linkRouter" icon={<HomeIcon />}><Link to="/home" className='linkRouter'>Home</Link> </Nav.Item>
        

        <Nav.Menu title="Produtos">
          <Link to="/products" className='linkRouter'><Nav.Item> Tênis</Nav.Item></Link>
          <Link to="/products" className='linkRouter'><Nav.Item> Moletom</Nav.Item></Link>
          <Link to="/products" className='linkRouter'><Nav.Item> Acessórios</Nav.Item></Link>
          <Link to="/products" className='linkRouter'><Nav.Item> Camisetas</Nav.Item></Link>
          <Link to="/products" className='linkRouter'><Nav.Item> Drops</Nav.Item></Link>
        </Nav.Menu>
  
        
          <Nav.Menu title="Contato">
          <Link to="/contact/telefone" className='linkRouter'><Nav.Item>Via email</Nav.Item></Link>
          <Link to="/contact/email" className='linkRouter'><Nav.Item> Via telefone</Nav.Item></Link>
          </Nav.Menu>

      </Nav>
      <Nav pullRight>
        <div>
          <Nav.Item>
            <div className="cart">
              <IoMdCart className='cart-icon' />
              <span>Carrinho</span>
            </div>  

          </Nav.Item>
        </div>
      </Nav>
    </Navbar>
  </>

)

export default NavBar;
