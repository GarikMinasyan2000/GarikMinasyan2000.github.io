import React from 'react';
import './style.scss';
import { faTwitter, faPinterest, faInstagram } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
            <hr />
            
            <div className='footer'>
                <div className="browse">
                    <p>Browse</p>
                    <ul>
                        <li>All productsdssad</li>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Theme</li>
                    </ul>
                </div>
                <div className="help">
                    <p>Help</p>
                    <ul>
                        <li>FAQ</li>
                        <li>Terms & conditions</li>
                        <li>Contact us  </li>
                    </ul>
                </div>
                <div className="about">
                    <p>About</p>
                    <span>Our story began in 2001 in a small studio in the middle of nowhere. With only one desk and next to no free time, our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.</span>
                </div>
                <div className="social">
                    <p>Social</p>
                    <div className="icons">
                        <a href='https://twitter.com' target='blank'> <FontAwesomeIcon className='footerIcons' icon={faTwitter}/> </a>
                    </div>
                    <div className="icons">
                        <a href="https://www.pinterest.ru" target='blank'><FontAwesomeIcon className='footerIcons' icon={faPinterest}/></a>
                    </div>
                    <div className="icons">
                        <a href="https://www.instagram.com" target='blank' ><FontAwesomeIcon className='footerIcons' icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer