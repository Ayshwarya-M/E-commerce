import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css'
import hand_logo from '../../Images/hand_logo.png'
import hero_img from '../../Images/hero_img.png'
import { Container, Row, Col } from 'react-bootstrap';
const Hero = () => {
  return (
    // <div className='hero'>
    //   <div className='hero-left'>
    //     <h2>NEW ARRIVALS ONLY </h2>

    //     <div>
    //       <div className='hero-hand-icon'>
    //         <p>new</p>
    //         <img className='hand_logo' src={hand_logo} />
    //       </div>
    //     </div>
    //     <div className='collections'>
    //       <p>Collections</p>

    //       <p>for everyone</p></div>
    //          {/* <div className='hero-latest-btn'>
    //            <h3>  Latest Collections</h3>
    //            <img className='arrow_logo' src={arrow_logo} /></div> */}


    //   </div>
    //   <div className='hero-right'>
    //     <img className='hero_img' src={hero_img} />

    //   </div>


    // </div>
    <Container fluid className='hero_outer_container'>
      <br/>
      <Row>
        <Col xs={12} md={6} lg={6} xl={6} className='hero_left_content'>
          <div >
                  <Row><h3>NEW ARRIVALS ONLY</h3></Row>
                  <Row><h1>New<img className='hand_logo_green' src={hand_logo} /></h1></Row>
                  <Row><h1>Collections</h1></Row>
                  <Row><h1>For Everyone</h1></Row>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
        <img className='hero_img_1' src={hero_img} />
        </Col>
        
      </Row>
    </Container>
  )
}

export default Hero