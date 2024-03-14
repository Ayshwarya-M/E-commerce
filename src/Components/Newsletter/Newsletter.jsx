import React, { useState } from 'react';
import './Newsletter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card, Container, Alert, Form } from 'react-bootstrap';


const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Perform any subscription logic here (e.g., API call)
    // For now, just simulate a successful subscription
    setSubscribed(true);
  };

  return (
    // <div className='newsletter'>
    //   <Container>
    //     <Row>
    //       <div style={{ height: '10vh' }}> </div>
    //     </Row>
    //     <Row style={{ height: '80vh' }}>
    //       <Card className='exclusive_card' style={{ width: '75rem', height: '38rem' }}>
    //         <Card.Body className='news-letter'>
    //           <Row>
    //             <Col md={2}></Col>
    //             <Col md={8}>
    //               <Card.Text style={{ marginTop: '10rem' }}>
    //                 <h1>Get Exclusive Offers On Your Email</h1>
    //                 <p className='subscribe-content'>Subscribe to our W.shoppers and stay updated</p>
    //                 <Row className='email-div'>
    //                   <input
    //                     type="email"
    //                     placeholder='Your Email id'
    //                     value={email}
    //                     onChange={(e) => setEmail(e.target.value)}
    //                   />
    //                   <Button className='subscribe' onClick={handleSubscribe}>
    //                     Subscribe
    //                   </Button>
    //                 </Row>
    //                 {subscribed && <Alert variant="success">Subscribed successfully!</Alert>}
    //               </Card.Text>
    //             </Col>
    //             <Col md={2}></Col>
    //           </Row>
    //         </Card.Body>
    //       </Card>
    //     </Row>
    //     <Row>
    //       <div style={{ height: '10vh' }}> </div>
    //     </Row>
    //   </Container>
    // </div>
    <Container className='newletter-full-page'>


      <Row>
        <Col xs={12} md={1} lg={1} xl={1}></Col>
        <Col xs={12} md={10} lg={10} xl={10} >
          <Card className='newsletter-container'>
            <Card.Body className='newletter_centre_content'>
              <Row>
                <Col xs={12} md={2} lg={2} xl={2}></Col>
                <Col xs={12} md={8} lg={8} xl={8}><h1>Get Exclusive Offers On Your Email</h1><br />
                <Row>
                    <Col xs={12} md={3} lg={3} xl={3}></Col>
                    <Col xs={12} md={6} lg={6} xl={6}><p style={{width:"100%",marginLeft:"2%"}}>Subscribe to our W.shoppers and stay updated</p></Col>
                    <Col xs={12} md={3} lg={3} xl={3}></Col>
                  </Row>
                  
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /><br />
                  <Row>
                    <Col xs={12} md={3} lg={3} xl={3}></Col>
                    <Col xs={12} md={6} lg={6} xl={6}><Button style={{width:"60%",marginLeft:"18%",background:"#e188b3",border:'none'}}onClick={handleSubscribe}>Subscribe</Button>{' '}</Col>
                    <Col xs={12} md={3} lg={3} xl={3}></Col> {subscribed && <Alert variant="success">Subscribed successfully!</Alert>}
                  </Row>
                 
                </Col>
                <Col xs={12} md={2} lg={2} xl={2}></Col>
              </Row>

            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={1} lg={1} xl={1}></Col>
      </Row>


    </Container>
  );
};

export default Newsletter;
