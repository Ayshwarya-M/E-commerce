import React from 'react'
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import man2 from '../Images/man2.png'
import './ShopCategory.css'
import Products from '../Components/Assets/Products';
import './King.css'


const King = () => {
  return (
    <div className='shop-category'>
    <Container >
                <Row className='queen'>

                {/* <Col md={12} className='d-flex align-items-center justify-content-center mt-3'> */}
                    <Card className='queen-card' >
                        <Card.Body className='queen-card-body'>
                            <Row>
                            <Col className='queen-col' md={6} >
                                <Card.Text >
                                <p className='upto'>UPTO</p>
                                <h1 className='off'>75% OFF</h1>
                                <p className='latest'>Latest </p>
                                <h1 className='fashion'>Fashion</h1>
                                <p className='open-sale'>OPEN SALE </p>
                                </Card.Text> 
                            </Col>
                            <Col md={6} >
                            <img className='man2'src={man2}/>
                            </Col>
                            </Row>
                           
                        </Card.Body>
                    </Card>
                    {/* </Col> */}

                </Row>
            </Container>
            <Products/>
    </div>
  )
}

export default King;