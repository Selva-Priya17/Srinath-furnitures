import React from "react";
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <div>
                                <h1 className="text-white">Shrinath Furnitures</h1>
                            </div>
                        </div>
                        <p className="footer__text md-5">
  "Shrinath Furnitures delivers handcrafted, stylish furniture designed for comfort and elegance. Elevate your home with pieces that combine quality and modern aesthetics."
</p>

                    </Col>

                    <Col lg='3'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup>   
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Wood Bedside Table</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Modern Table</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Modern Sofa</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ListGroup>   
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                
                    <Col lg='3'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact Us</h4>
                            <ListGroup className="footer__contact">   
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-1">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>Rajiv Gandhi Nagar, Mumbai,Maharashtra-40017</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-5">
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+088123456779</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-5">
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>arvindh12@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    
                    <Col lg='12'>
                        <p className="footer_copyright">
                            Copyright {year} developed by Shraddha and SelvaPriya. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
