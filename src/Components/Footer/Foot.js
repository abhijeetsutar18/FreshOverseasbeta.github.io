import React from "react";
import "./Foot.css";
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {Link} from 'react-scroll';


const Foot = () => {
    return (
        <>
            <div class="FootContainer">
                <div className="Block1">
                    <h4>Site Map</h4>
                </div>
                <div className="Block2">
                    <ul>
                        <Link spy={true} to='Home' activeClass="Active">
                        <li>Home</li>
                        </Link>
                        
                        <Link spy={true} to='Products' activeClass="Active">
                        <li>Products</li>
                        </Link>

                        <Link spy={true} to='About'  activeClass="Active">
                        <li>About</li>
                        </Link>

                        <Link spy={true} to='Enquiry'  activeClass="Active">
                        <li>Certificates</li>
                        </Link>

                        <Link spy={true} to='Contact'  activeClass="Active">
                        <li>Contact</li>
                        </Link>
                        
                    </ul>

                </div>
                <div className="Block3">
                    <h4>Social Handles</h4>
                    <div className="SocialIcons">
                            <a href="www.instagram.com/freshoverseas" target="_blank"><FaInstagram/></a>
                            <a href="www.twitter.com" target="_blank"><FaTwitter/></a>
                            <a href="www.facebook.com" target="_blank"><FaFacebook/></a>
                            <a href="www.linkedin.com" target="_blank"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="Block4">
                    <h4>Reach Us</h4>
                </div>
                <div className="Block5">
                    <p><b>Address :</b> <br/>
                    2/12 Maneklal compound,
                    <br/>Ghatkopar (W), Mumbai,<br/>
                    Maharashtra,India <br/>
                    Postal code : 400086
                    </p>
                    <p><b>Contact :</b><br/>
                        +91 9920597601<br/>
                        +91 7738719584<br/>
                        freshoverseas@outlook.com    
                    </p>
                </div>
        

            </div>
        </>
    );
};

export default Foot;