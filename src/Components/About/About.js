import React from "react";
import "./About.css";
import Wave3 from './Vector/wave4.svg';
import Earth from './Vector/cont3.png';
import Icon1 from './Vector/purchase.png';
import Icon2 from './Vector/warehouse.png';
import Icon3 from './Vector/packing.png';
import Icon4 from './Vector/shipping.png';





const About = () => {
    return (
        <>
            <div className="AboutContainer" id="About">
                <div className="Container3">
                    <div className="Content1">
                        <h2>Who are we?</h2>
                        <h5>
                        We are one of the leading organisations in national and international trade
                         of agricultural products. We deal in products like onions, garpes, pomograntes, mangoes and other fruits
						 and vegetables. We make you food available directly from the farmers, so that 
                         you are assured for supply of fresh and best quality crop from us Our 
                         Company focuses on totally pure fruits and vegtables cultivated naturally
                          without use of chemicals. We are Indian government assured exports firm.
                           We export our products to many countries.<br/>
			            With assurance and promise of quality make sure to check out our products.
                        </h5>
                    </div>
                
                    <div className="Wave">
                        <img src={Wave3}/>
                    </div>


                    <div className="Content2">
			            <h3>How we work?</h3>
			            <img src={Earth} className="Sect3img"/>
		            </div>

                    <div className="Content3">


                        <div className="b1c1">
				            <div className="c1c1">
					            <img src={Icon1} className="icon1"/>
				            </div>
				            <div className="c1c2">
					            <br/><h4>Direct Purchase</h4>
					            <p>We purchase our fresh products directly from farmers </p>
				            </div>
			            </div>

                        <div className="b1c2">
				            <div className="c1c1">
					            <img src={Icon2} className="icon1"/>
				            </div>
				            <div className="c1c2">
					            <br/><h4>Warehousing</h4>
					            <p>Our Fresh products are brought to our warehouse  </p>
				            </div>
			            </div>
			
			
			            <div className="b1c4">
				            <div className="c1c1">
					            <img src={Icon3} className="icon1"/>
				            </div>
				            <div className="c1c2">
					            <br/><h4>Grading and Packing</h4>
					            <p>Before packing, grading is done to ensure only best product is delivered </p>
				            </div>
			            </div>
			
			
			            <div className="b1c3">
				            <div className="c1c1">
					            <img src={Icon4} className="icon1"/>
				            </div>
				            <div className="c1c2">
					            <br/><h4>Distribution</h4>
					            <p>Our fresh products is then timely delivered to our clients through seaways or by airways </p>
				            </div>
			            </div>

                        <span className="Sq1"></span>
                        <span className="Sq2"></span>

                    </div>
                    


                </div>    



            </div>
        </>
    );
};

export default About;
