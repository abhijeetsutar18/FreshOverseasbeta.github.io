import React from "react";
import "./Products.css";
import Onion from './ProdImg/Onion.jpg';
import Pumpkin from './ProdImg/Pumpkin1.jpg';
import Mango from './ProdImg/Mango.jpg';
import Pomo from './ProdImg/Pomogrante.jpg';
import Grapes from './ProdImg/Grapes2.jpg';
import Veges from './ProdImg/Veges.jpg';
import {Link} from 'react-scroll';



const Products = () => {
    return (
        <>
            <div class="ProductContainer" id="Products">
                
                <div className="Container2">
                    <div className="Contheader">
                        <h2>Our Range of Fresh Products</h2>
                        <div className="Btn1">
                            <Link spy={true} to='Contact'  activeClass="Active">
                                <p>Get QuOtation</p>
                            </Link>
	                    </div>
                    </div>
                    
                    <div className="Prod">


                        <div className="PImage">
                            <img src={Onion}/>

                        </div>
                        <div className="PInfo">
                            <h4>Fresh Onion</h4>
                            <p>Size : 50mm+<br/>
                            Origin  : India <br/>
                            Packaging : Mesh Bag<br/>
                            </p>

                        </div>

                    </div>
                    <div className="Prod">
                        <div className="PImage">
                            <img src={Pumpkin}/>

                        </div>
                        <div className="PInfo">
                            <h4>Fresh Pumpkins</h4>
                            <p>Weight : 1-2.5kg <br/>
                            Origin  : India <br/>
                            Packaging : Net Bag/Crates<br/>
                            </p>

                        </div>

                    </div>
                    <div className="Prod">
                        <div className="PImage">
                            <img src={Mango}/>

                        </div>
                        <div className="PInfo">
                            <h4>Fresh Mangoes</h4>
                            <p>Size : A Grade (250 grams +)<br/>
                            Origin  : India <br/>
                            Packaging : Cardboard box<br/>
                            </p>

                        </div>

                    </div>
                    <div className="Prod">
                        <div className="PImage">
                            <img src={Pomo}/>

                        </div>
                        <div className="PInfo">
                            <h4>Pomograntes</h4>
                            <p>Size : 8cm+ in diameter<br/>
                            Origin  : India <br/>
                            Packaging : Cardboardbox<br/>
                            </p>

                        </div>

                    </div>
                    <div className="Prod">
                        <div className="PImage">
                            <img src={Grapes}/>

                        </div>
                        <div className="PInfo">
                            <h4>Grapes</h4>
                            <p>Variety : Black/Green grapes<br/>
                            Origin  : India <br/>
                            Packaging : Shaped trays<br/>
                            </p>

                        </div>

                    </div>
                    <div className="Prod">
                        <div className="PImage">
                            <img src={Veges}/>

                        </div>
                        <div className="PInfo">
                            <h4>Fruits and Vegetables</h4>
                            <p>Orders: As required<br/>
                            Origin  : India <br/>
                            Packaging : As per standards<br/>
                            </p>

                        </div>

                    </div>
                   


                </div>
            </div>
        </>
    );
};

export default Products;