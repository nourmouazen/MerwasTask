import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BsHeart } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import '../App.css';


export default class FistNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="FirstNavbar" >
          <Container className="whiteColor">
            <Navbar.Brand href="#home">GrabOne</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav style={{color:'white'}}>
                <NavDropdown className="whiteColor" title={<GoLocation className='whiteColor'></GoLocation>} id="collasible-nav-dropdown" >
                  <NavDropdown.Item href="#action/3.1">Auckland</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Waikato</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Wellington</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Northland</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Manawatu - Wanganui</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Taurange</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Rotorua - Taupo</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Hawkes Bay</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Christchurch</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Taranaki</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Nelson - Marlorough</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Queenstown - Wanaka</NavDropdown.Item> <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Dunedin - Invercargill</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets"><BsHeart className='whiteColor'></BsHeart></Nav.Link>
                <Nav.Link eventKey={2} href="#memes"></Nav.Link>
                <Nav.Link href="#deets"><IoCartOutline className='whiteColor'></IoCartOutline></Nav.Link>
                <Nav.Link href="#action2"></Nav.Link>
                <NavDropdown title={<BsFillPersonFill></BsFillPersonFill>} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">My Account</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">Gifts</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">Profile</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">My Subscriptions</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">My Purchases</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets" style={{color:'white'}}><MdMailOutline></MdMailOutline>Subscribe</Nav.Link>
                <Nav.Link href="#deets" style={{color:'white' ,fontsize:'20px'}}>Powered by <br></br>
                <p>NZME </p> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}