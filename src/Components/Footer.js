import React from 'react';
import './Allfiles.css'
import { Container } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <div >
            <Container> 
                <div className='d-flex foot-er mt-5  row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4'>
                    <div>
                        <ul className='list'>
                            <label>Company</label>
                            <li>Services</li>
                            <li>Products</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <label>Services</label>
                            <li>Bloackchain Solution</li>
                            <li>Artificial Intelligence</li>
                            <li>System Architecture</li>
                            <li>Aplication Development</li>
                            <li>App Developement</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='list'>
                            <label>About Us</label>
                            <li>Core Team</li>
                            <li>Our Mentor</li>
                            <li>Executive Member</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <label>Get In Touch</label>
                            <li>Plaza #305/37, H-3 Block</li>
                            <li>(+92) 3228287163</li>
                        </ul>
                    </div>
                </div>
                <hr className='horizontal' />
            </Container>

            <Container>
                <div className='foot-er row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4'>
                    <div>
                        <ul className='list'>
                            <label>Contact Us</label>
                            <li>Talha986@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <label>Queries</label>
                            <li>info@netsole.com</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='list'>
                            <label>Careers</label>
                            <li>career@netsole.com</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='list-icons'>
                            <div><label>Follow Us</label></div>
                            <li> <a href='#' title='Facebook'><FaFacebook /></a> </li>
                            <li> <AiFillTwitterCircle  /></li>
                            <li><RiInstagramFill /></li>
                            <li><TiSocialLinkedinCircular /></li>
                        </ul>
                    </div>
                </div>
                <hr className='horizontal' />
            </Container>
            <h2 className='footer'>E commerce Dashboard</h2>
        </div>
    );
}

export default Footer;
