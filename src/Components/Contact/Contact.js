import React, {useRef} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Fresh0verseas_1806', 'template_itmwn5i', form.current, 'scXhEjTzdObNEKdnx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

  



    return (
        <>
            <div className="ContactContainer" id="Contact">
    



                <div className="Container5">
                    <div className="Side1">
                        <h3>Get in Touch</h3>
                        <h5>Location :</h5>
                        <p>
                            2/12 Maneklal compound,
                            <br/>Ghatkopar (W), Mumbai,<br/>
                            Maharashtra,India <br/>
                            Postal code : 400086
                        </p>
                        <h5>Email :</h5>
                        <p>freshoverseas@outlook.com</p>
                        <h5>Phone :</h5>
                        <p>+91-9920597601</p>
                        <p>+91-7738719584</p>
                        <h5>Website :</h5>
                        <p>www.freshoverseas.com</p>
                        <h5>Social Handles :</h5>
                        <div className="SocialIcons">
                            <a href="www.instagram.com/freshoverseas" target="_blank"><FaInstagram/></a>
                            <a href="www.twitter.com" target="_blank"><FaTwitter/></a>
                            <a href="www.facebook.com" target="_blank"><FaFacebook/></a>
                            <a href="www.linkedin.com" target="_blank"><FaLinkedin/></a>
                        </div>

                    </div>
                    <div className="Side2">

                        <div className="Enqform">
                            <h3>Product Enquiry</h3>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label><br/>
                                <input type="text" name="user_name" class="Tbox"/><br/>

                                <label>Company Name</label><br/>
                                <input type="text" name="user_company" class="Tbox"/><br/>

                                <label>Email</label><br/>
                                <input type="text" name="user_email" class="Tbox"/><br/>

                                <label>Contact</label><br/>
                                <input type="text" name="user_contact" class="Tbox"/><br/>

                                <label>Description</label><br/>
                                <textarea name="message" rows="3" class="Tarea"></textarea><br/>

                                <input type="submit" value="Submit" className="Button"/>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Contact;