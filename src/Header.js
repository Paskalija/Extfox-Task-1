import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './app.css';

function Header() {
    return (
        <Navbar className='header' >
            <Container >
                <Nav className='headerLinks'>
                    <Nav.Link className='links'>NEW</Nav.Link>
                    <Nav.Link  className='links'>WOMEN</Nav.Link>
                    <Nav.Link  className='links'>MEN</Nav.Link>
                    <Nav.Link  className='links'>KIDS</Nav.Link>
                    <Nav.Link  className='links'>BRANDS</Nav.Link>
                    <AiOutlineShoppingCart className= "cart"/> 
                    <Nav.Link className='links hide shopingCard'>0</Nav.Link>
                   
                    
                    
                    
                </Nav>

            </Container>
        </Navbar>




    );
}

export default Header;