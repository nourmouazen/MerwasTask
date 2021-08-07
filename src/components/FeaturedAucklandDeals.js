import React, { Component } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import card4 from './images/card4.jpg';
import card5 from './images/card5.jpg';
import card6 from './images/card6.jpg';
import card7 from './images/card7.jpg';
import card8 from './images/card8.jpg';
import '../App.css';


export default class FeaturedAucklandDeals extends Component {
    render() {
        return (
            <div><br />
                <div>
                    <p class ="FeaturedAucklandDeal">Featured Auckland deals<Button className="button " variant="primary" style={{ marginLeft: '85px' }}>Primary</Button></p>
                </div>
                <div>
                    <CardGroup style={{ marginLeft: '70px', width: '84.5em' }}>
                        <Card style={{ marginLeft: '15px' }}>
                            <Card.Img variant="top" src={card1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ marginLeft: '15px' }}>
                            <Card.Img variant="top" src={card2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ marginLeft: '15px' }}>
                            <Card.Img variant="top" src={card3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ marginLeft: '15px' }}>
                            <Card.Img variant="top" src={card4} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
                <br />
                <div>
                    <CardGroup style={{ marginLeft: '81px', width: '83.8em' }}>
                        <Card style={{ marginLeft: '15px' }}>
                            <Card.Img variant="top" src={card5} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ marginLeft: '15px' }}>
                            <Card.Img variant="top" src={card6} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ marginLeft: '15px' }}>
                            <Card.Img variant="top" src={card7} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ marginLeft: '15px' }}>
                            <Card.Img variant="top" src={card8} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        )
    }
}