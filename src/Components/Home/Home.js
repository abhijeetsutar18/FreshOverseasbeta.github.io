import React from "react";
import "./Home.css";
import Ban from '../../Images/Banner17.jpg';
import Wave1 from './Vectors/wave3.svg';
import Veg1 from './Vectors/veg5.png';
import {Link} from 'react-scroll';



const Home = () => {
    return (
        <>
            <div class="HomeContainer" id="Home">
                <div className="Banner">
                    
                    <div className="Overlay">
                    </div>
                    <div className="Wave1">
                        <img src={Wave1} alt=""/>
                    </div>
                    
                </div>
                <div className="Ban1">
                    <h2>WE ARE EXPORTERS OF FINEST AND FRESH FRUITS AND VEGETABLES FROM INDIA</h2>
		            <h5>Our Dedication to Quality ensures that our products are picked fresh,
                         packed well and delivered fresh. We are committed to the supply of safe
                          and fresh food products by adhering to strict hygiene & quality norms during procurement,
                           processing, storage and dispatch.
                    </h5>
                </div>
                <div className="Banbtn">
                    <Link spy={true} to='Contact'  activeClass="Active" smooth={true}>
                        <p>Get in touch</p>
                    </Link>
	            </div>
                <div className="container1">
		            <h2>At Fresh Overseas...</h2>
		            <article>Fruits and vegetables are produced in large quantity in India.
                         Due to the large production we can export vegetabeles and fruits from 
                        India. Our products list mainly includes indian red onions, pumpkins,
                        pomograntes, alphonso mangoes, grapes and we also exports other 
                        fruits and vegetables as per requirement by our clients across globe.
                           At Fresh Overseas, we believe that the Customer is our 
                           King. We, therefore, assist our clients in each step on 
                           the way while exporting vegetables in India. Being one 
                           of the best vegetable exporters in India, we strictly 
                           follow all the health and safety measures of the 
                           Government of India. Fresh Overseas is the most reliable
                            vegetable exporter in India. Our processes are completely
                             transparent and we make sure that the desired products 
                             reach their destination safe, fresh, and on time. 
                             If you are looking for vegetable import from India,
                              Fresh Overseas is the best choice!
		            </article>
                    <span className="Shape1"></span>
	            </div>
                <div className="Para2">
	
	
                        <div className="Pb1">
		   
			                <h3>Why Fresh Overseas ?</h3><br/>
                            <p>
                
                                The following factors set us apart from the competitors in the market:<br />

                                1. Wide distribution network globally<br />
                                2. Timely delivery of the orders<br />
                                3. Customized packaging solutions<br />
                                4. Well-equipped infrastructure<br />
                                5. Easy payment modes<br/>
                                6. Premium quality products<br/>
                            </p>
			            </div>
			            <div className="Pb2">
                            <img src={Veg1} alt="" className="veg3"/>
			            </div>
                </div>
            </div>

        </>
    );
};

export default Home;
