import React, {useState} from "react";
import "./Navbar.css";
import {GiHamburgerMenu} from 'react-icons/gi';
import img1 from './Icons/logob.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const[active, setActive] = useState("Menubar");
    const navToggle = () =>{
        active=== "Menubar"
        ? setActive("Menubar MenuActive") 
        : setActive("Menubar")
    }

    return (
        <>
            <nav>
                <div className="Logo">
                    <div className="Icon">
                        <img src={img1} alt="Logo" className="FOimg"/> 
                    </div>
                    <div className="FirmName">
                        <h3>Fresh Overseas</h3>
                    </div>
                    
                </div>
              
                <div className={active}>
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
                <div className="HamburgerMenu">
                        <a onClick={navToggle}>
                            <GiHamburgerMenu/>
                        </a>

                </div>
            </nav>
        </>
    );
};

export default Navbar;