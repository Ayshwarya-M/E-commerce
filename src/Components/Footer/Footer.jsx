import React from 'react'
import './Footer.css'
import logo1 from "../../Images/logo1.png"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <Container className='footer'>
            <div className='logo1'>
                <img className='logo1'src={logo1} />
                <p>W.shoppers</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>                
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                   <a href="https://www.youtube.com/"> <i class="bi bi-instagram"></i></a>
                </div>
                <div className='footer-icons-container'>
                <a href="https://www.youtube.com/"><i class="bi bi-whatsapp"></i></a>

                </div>
                <div className='footer-icons-container'>
                   <a href="https://www.youtube.com/"> <i class="bi bi-pinterest"></i></a>
                    </div>

            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2024 - All Right Reserved.</p>

            </div>
        </Container>
    )
}

export default Footer