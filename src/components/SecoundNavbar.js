import React, {Component} from 'react';
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import '../App.css';

export default class SecoundNavbar extends Component {
    render() {
        return(
            <div>
                <Navbar bg="light" expand="lg" class="secoundNavbar">
                <NavDropdown title="Browse Categories" id="collasible-nav-dropdown"  style ={{marginLeft:'60px'}}> 
                        <NavDropdown.Item href="#action/3.1" id="mainImage1">Auckland</NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Waikato</NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Wellington</NavDropdown.Item><NavDropdown.Divider />
                    </NavDropdown>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                       
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <Nav.Link href="#action1">What's New</Nav.Link>
                        <Nav.Link href="#action2">Trending</Nav.Link>
                        <Nav.Link href="#action2">For You</Nav.Link>
                        <Nav.Link href="#action2">Shop Product</Nav.Link>
                        </Nav>
                        <Form className="d-flex"style ={{marginLeft:'340px',width:'31.5rem'}}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}