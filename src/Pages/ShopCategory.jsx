import React from 'react'
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import banner2 from '../Images/banner2.png'
import './ShopCategory.css'
import All_product from '../Components/Assets/All_product';



const ShopCategory = () => {
  return (
    <div className='shop-category'>
    <Container>
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
                                <img className='banner2'src={banner2} />
                            </Col>
                            </Row>
                           
                        </Card.Body>
                    </Card>
                    {/* </Col> */}

                </Row>
            </Container>
            <All_product/>
    </div>
  )
}

export default ShopCategory