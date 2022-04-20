import React, {useState} from "react";
import "./Enquiry.css";
import Pic1 from './Image/Apeda.jpg';
import Pic2 from './Image/Halal.jpg';
import Pic3 from './Image/GMP.png';





const Enquiry = (props) => {


    return (
        <>
            <div className="EnquiryContainer" id="Enquiry">
                <div className="Container4">
                    <div className="Parallax">
                        <br/><h2>We are Indian government certified exporters</h2>
                        <h4>Our Certificates</h4>
                        <div className="I1">
                            <img src={Pic1}/>
                        </div>
                        <div className="I1">
                            <img src={Pic2}/>
                        </div>
                        <div className="I1">
                            <img src={Pic3}/>
                        </div>
                    

                    </div>

                </div>
            </div>
        </>
    );
};

export default Enquiry;