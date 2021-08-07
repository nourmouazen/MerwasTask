import React, {Component} from 'react';
import mainImage from './images/mainImage.png';
import {Card,ListGroup,Button,FormControl,Form} from 'react-bootstrap';
import '../App.css';
import mainImage1 from './images/mainImage1.jpg';
import mainImage2 from './images/mainImage2.jpg';

export default class MainPage extends Component {
    constructor(){
        super () 
        this.onHover = this.onHover.bind(this);
    }

    onHover(){
        return console.log('hello');
      }
    render() {
        return(
            <div>
                <br/>
                <div style={{ marginLeft: '70px' }}>
                <a href='#'><img src={mainImage}  /></a>
                <br/><br/>
                <p class ="textSize"> 11th Birthday credit and giveaway promotions - <a href="url" class ="linkSize">full T's & c's here.*</a></p>
                <br/></div>
                <div class="sidebar">
                <Card style={{ width: '19.7rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item><Button variant="" id="mainImage1">Discover</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Featured Auckland deals</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Collections</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Escapes</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Picked for You</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Activities, Events & Outdoors</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Store</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Restaurants, Bars & Spa</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Beauty, Massage & Spa</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">House & Garden</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Fitness & Sports</Button></ListGroup.Item>
                        <ListGroup.Item><Button variant="">Automotive</Button></ListGroup.Item>
                    </ListGroup>
                    </Card>
                </div>
                <div class="mainCard1" id="mainImage1">
                <Card style={{ width: '31rem' }}>
                    <Card.Img variant="top" src={mainImage1} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                <div class="mainCard2">
                <Card style={{ width: '31rem' }}>
                    <div>
                    <Card.Img onMouseMove={this.onHover} variant="top" src={mainImage2} /></div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                <div>
                <Card style ={{marginTop:'180px', width:'85rem',marginLeft:'75px',height:'6.5rem'}}>
                    <Card.Body className="CardBody">Get the best deals delivered direct to your inbox each day
                    
                    <Form className="d-flex"style ={{width:'600px',marginLeft:'660px',marginTop:'-35px'}} >
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button  className="button "  variant="primary" style ={{width:'130px'}}>Search</Button>
                    </Form></Card.Body>
                </Card>
                </div>
            </div> 
        )
    }
}