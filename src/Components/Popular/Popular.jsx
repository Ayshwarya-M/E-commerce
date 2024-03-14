import React from 'react'
import './Popular.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Container, CardImg, } from 'react-bootstrap';
import popular1 from '../../Images/popular1.png'
import popular2 from '../../Images/popular2.png'
import popular3 from '../../Images/popular3.png'
import popular4 from '../../Images/popular4.png'
const Popular = () => {
    return (
        <Container fluid className='popular_outer_container' ><br /><br />
            <Row>
                <Col xs={12} md={3} lg={3} xl={3}></Col>
                <Col xs={12} md={6} lg={6} xl={6} className='popular_heading_line'><h1 >POPULAR IN WOMEN</h1></Col>
                <Col xs={12} md={3} lg={3} xl={3}></Col>
            </Row>
            <br /><br /><br />
            <Container>
            <Row>
                <Col xs={12} md={3} lg={3} xl={3}>
                <div class="shadow-lg p-3 mb-5 bg- rounded">
                    <Card className='product_card_popular'>
                        <Card.Body className='small-box'>
                            <img className='popular_card_image' src={popular1} />
                            <h3>Tokyo Talkies</h3>
                            <p>Printed Crop T-shirt</p>
                            <b>₹.399</b>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
                <Col xs={12} md={3} lg={3} xl={3}>
                <div class="shadow-lg p-3 mb-5 bg- rounded">
                    <Card className='product_card_popular'>
                        <Card.Body className='small-box'>
                            <img className='popular_card_image' src={popular2} />
                            <h3>Roadster</h3>
                            <p>White Cotton Round Neck T-shirt</p>
                            <b>₹.299</b>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
                <Col xs={12} md={3} lg={3} xl={3}>
                <div class="shadow-lg p-3 mb-5 bg- rounded">
                    <Card className='product_card_popular'>
                        <Card.Body className='small-box'>
                            <img className='popular_card_image' src={popular3} />
                            <h3>Lusters</h3>
                            <p>Women Black Solid T-shirt</p>
                            <b>₹.799</b>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
                <Col xs={12} md={3} lg={3} xl={3}>
                <div class="shadow-lg p-3 mb-5 bg- rounded">
                    <Card className='product_card_popular'>
                        <Card.Body className='small-box'>
                            <img className='popular_card_image' src={popular4} />
                            <h3>Nike</h3>
                            <p>Wrap yourself in comfy cotton. </p>
                            <b>₹.1599</b>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
            </Row>
            </Container>
        </Container>

    )
}

export default Popular