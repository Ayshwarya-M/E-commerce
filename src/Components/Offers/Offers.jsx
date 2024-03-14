import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import model from '../../Images/model.png'
import './Offers.css'

const Offers = () => {
    return (
       
            <Container>
                <Row  style={{height:"100vh"}}>

                <Col xs={12} md={12} className='d-flex align-items-center justify-content-center mt-3'>
                    <Card className='offer' >

                        <Card.Body className='exclusive'>
                            <Row>
                            <Col md={6} >
                                <Card.Text style={{marginTop:"10rem"}}>

                                <h1>Exclusive</h1>
                                <h1>Offers For You</h1>
                                <p>ONLY ON THE BEST SELLERS PRODUCTS</p>
                                {/* <Button  className='check-button'>Check Now</Button> */}
                                </Card.Text> 
                            </Col>
                            <Col md={6} className='d-flex align-items-center justify-content-center mt-3'>
                                <img className='model' src={model} />
                            </Col>
                            </Row>
                           
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
                <br/>
            </Container>


    )
}

export default Offers