import React, {useState, useEffect} from 'react'
import {Col,Row} from 'react-bootstrap';
import Produce from '../pages/Combined'
import Card from './Card'
import pakbet from '../img/pinakbet.jpg'
import chopseuy from '../img/chopseuy.jpg'
import gabi from '../img/gabi.jpg'
import shrimp from '../img/shrimp.jpg'
import karekare from '../img/karekare.jpg'
import monggo from '../img/monggo.jpg'
import misua from '../img/misua.jpg'
import laga from '../img/nilaga.jpg'
import small from '../img/small.jpg'
import medium from '../img/meduim.jpg'
import large from '../img/large.jpg'
import pineapple from '../img/pineapple.png'
import avocado from '../img/avocado.png'
import apple from '../img/apple.png'
import lemon from '../img/lemon.png'
import banana from '../img/banana.png'
import dragon from '../img/dragonFruit.png'
import rambutan from '../img/rambutan.png'
import grapes from '../img/grapes.png'
import mango from '../img/mango.png'
import pear from '../img/pear.png'
import papaya from '../img/papaya.png'
import orange from '../img/orange.png'
import ampSalad from '../img/ampalayaSalad.png'
import cucumSalad from '../img/cucumberSalad.png'
import ensalada from '../img/EnsaladangTalong.png'
import greens from '../img/green-salad.jpg'
import lato from '../img/lato.png'
import mangoSalad from '../img/MangoTomatoSalad.png'
import talbos from '../img/talbos.png'
import herb6 from '../img/herbs6pieces.png'
import herb3 from '../img/herbs3pieces.png'
import duo from '../img/duo.png'
import axios from 'axios'

function BestSellers(){
    const [ulam,setUlam] = useState([]);

    useEffect(() => {
        getUlam();
    }, []);
    function getUlam(){
        axios.get('http://localhost/farmersHub/ulam.php').then(function(response){
            console.log(response.data);
            setUlam(response.data);
        });
    }
    const [fBasket,setFBasket] = useState([]);

    useEffect(() => {
        getfBasket();
    }, []);
    function getfBasket(){
        axios.get('http://localhost/farmersHub/fruitsBasket.php').then(function(response){
            console.log(response.data);
            setFBasket(response.data);
        });
    }
    const [salad,setSalad] = useState([]);

    useEffect(() => {
        getSalad();
    }, []);
    function getSalad(){
        axios.get('http://localhost/farmersHub/salad.php').then(function(response){
            console.log(response.data);
            setSalad(response.data);
        });
    }
    const [pantry,setPantry] = useState([]);

    useEffect(() => {
        getPantry();
    }, []);
    function getPantry(){
        axios.get('http://localhost/farmersHub/pantry.php').then(function(response){
            console.log(response.data);
            setPantry(response.data);
        });
    }

    return(
        <div>
        <Produce/>
        {/* <!--Nav Tabs--> */}
        <div className="container-fluid mt-2">
            <ul className="nav nav-tabs nav-justified flex-column flex-sm-row">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" aria-current="page" href="#UlamBundles">Ulam Bundles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#FruitsBasket">Fruits Basket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#SaladSet">Salad Set</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#Pantry">Pantry Essentials</a>
                </li>
            </ul>
            <div className="tab-content">
                {/* <!--Ulam Bundles Tab--> */}
                <div className="tab-pane active" id="UlamBundles">
                    <h3 className="mb-3 text-center">Ulam Bundles</h3>
                    <p className="text-center">The Ulam Bundle has all the fresh vegetables, leafy greens and rekados (ginger, tomato, onion, garlic) you need for one ulam, to serve your family or friends. Sulit and convenient.</p>
                    <p className="fst-italic text-center">*meats not included</p>
                    <center>
                    {ulam.map((val)=>{
                        return(
                            <Row key={val.ulam_id} className="g-2 m-1 d-inline-flex justify-content-center">
                                <Col><Card img={pakbet} alt={val.ulam_title} title={val.ulam_title} Price={val.ulam_price}/></Col>
                            </Row>
                        )
                    })}
                    </center>
                    <br/>
                </div>

        {/* <!--Start of Fruits Basket Tab--> */}
        <div className="tab-pane" id="FruitsBasket">
            <h3 className="mb-3 text-center">Fruits Basket</h3>
            <p className="text-center">Select the content of your own basket of delicious fruits. You can give it as a gift to your loved ones or to yourself.</p>
        {/* <!--Accordion--> */}
        <div className="accordion accordion-flush" id="AccordionBasket">

            <div className="accordion-item">
                <h2 className="accordion-header" id="FruitsHeading">
                    <button className="accordion-button collapsed" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#FruitsBody"
                            aria-expanded="true"
                            aria-controls="FruitsBody">
                            1. Choose your basket size
                    </button>
                </h2>
                
                <div className="accordion-collapse collapse"
                    id="FruitsBody"
                    aria-labelledby="#FruitsHeading"
                    data-bs-parent="#AccordionBasket">
                    <div className="accordion-body">
                        <div className="row g-2 mx-auto d-flex justify-content-center">
                            <div className="col-12 col-md-4 col-lg-4 m-2 card">
                                <img src={small} alt="small" className="card-image"/>
                                <div className="card-body  text-center ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Basket" id="smallBasket" checked/>
                                        <label className="form-check-label" for="smallBasket">
                                            Small
                                        </label>
                                        <p id="smallPrice">₱299.00</p>
                                    </div>
                                </div>    
                            </div>   
                            <div className="col-12 col-md-4 col-lg-4 m-2 card">
                                <img src={medium} alt="medium" className="card-image"/>
                                <div className="card-body  text-center ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Basket" id="medBasket"/>
                                        <label className="form-check-label" for="medBasket">
                                            Medium
                                        </label>
                                        <p id="mediumPrice">₱399.00</p>        
                                    </div>
                                </div>    
                            </div>   
                            <div className="col-12 col-md-4 col-lg-4 m-2 card">
                                <img src={large} alt="large" className="card-image"/>
                                <div className="card-body  text-center ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Basket" id="largeBasket"/>
                                        <label className="form-check-label" for="largeBasket">
                                            Large
                                        </label>
                                        <p id="largePrice">₱599.00</p>       
                                    </div>
                                </div>    
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="Fruits2Heading">
                    <button className="accordion-button collapsed" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#Fruits2Body"
                            aria-expanded="true"
                            aria-controls="Fruits2Body">
                            2. Choose the contents of your basket
                    </button>
                </h2>
                <div className="accordion-collapse collapse"
                        id="Fruits2Body"
                        aria-labelledby="#Fruits2Heading"
                        data-bs-parent="#AccordionBasket">
                        <div className="accordion-body container">
                            <div className="container text-center">
                                    <p>Small: 7 pcs    </p>
                                    <p>Medium: 10 pcs</p>
                                    <p>Large: 15 pcs</p>
                            </div>
                            <center>
                            {fBasket.map((val)=>{
                                return(
                                    <Row key={val.fruitBasket_id} className="g-2 m-1 d-inline-flex justify-content-center">
                                        <Col><Card img={avocado} alt={val.fruitBasket_title} title={val.fruitBasket_title}/></Col>
                                    </Row>
                                )
                            })}
                            <Row className="g-2 m-1 d-inline-flex justify-content-center">
                                <Col><Card img={pineapple} alt={"pineapple"} title={"Pineapple"}  qtyId={"pineappleQty"}/></Col>
                                <Col><Card img={avocado} alt={"avocado"} title={"Avocado"} qtyId={"avoQty"}/></Col>
                                <Col><Card img={apple} alt={"apple"} title={"Apple"} qtyId={"appleQty"}/></Col>
                                <Col><Card img={lemon} alt={"lemon"} title={"Lemon"}  qtyId={"lemonQty"}/></Col>
                            </Row>
                            <Row className="g-2 m-1 d-inline-flex justify-content-center">
                                <Col><Card img={banana} alt={"banana"} title={"Banana"}  qtyId={"bananaQty"}/></Col>
                                <Col><Card img={dragon} alt={"dragon"} title={"Dragon Fruit"} qtyId={"dragonQty"}/></Col>
                                <Col><Card img={grapes} alt={"grapes"} title={"Grapes"} qtyId={"grapesQty"}/></Col>
                                <Col><Card img={rambutan} alt={"rambutan"} title={"Rambutan"} qtyId={"rambutanQty"}/></Col>
                            </Row>
                            <Row className="g-2 m-1 d-inline-flex justify-content-center">
                                <Col><Card img={mango} alt={"mango"} title={"Mango"}  qtyId={"mangoQty"}/></Col>
                                <Col><Card img={pear} alt={"pear"} title={"Pear"} qtyId={"pearQty"}/></Col>
                                <Col><Card img={papaya} alt={"papaya"} title={"Papaya"} qtyId={"papayaQty"}/></Col>
                                <Col><Card img={orange} alt={"orange"} title={"Orange"} qtyId={"orangeQty"}/></Col>
                            </Row>

                                <br/>
                                <button className="btn btn-lg" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}  data-bs-toggle="modal" data-bs-target="#FBasket" onclick="printFruitBasket();"><i className="bi bi-cart4"></i> Confirm basket</button>
                            </center>
                        </div> 
                    
                </div>
            </div>
        </div>                        
        </div>
            
                
                {/* <!--Modal--> */}
                <div className="modal fade" id="FBasket" tabindex="-1">
                    <div className="modal-dialog"> 
                        <div className="modal-content">
                        {/* <!--start of modal header--> */}
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="modalTitle">
                                Your Fruits Basket</h5>
                                <button className="btn-close" 
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="close">
                                </button>
                        </div>
                        {/* <!--End of modal header--> */}

                        {/* <!--start of modal body--> */}
                        <div className="modal-body">
                            <p id="basketSize">Your fruits basket size is:</p>
                            <table className="table table-striped" id="BasketTable">
                                <thead>
                                    <th>Quantity</th>
                                    <th>Contents</th>
                                </thead>
                                <tbody id="basketContents"></tbody>
                            </table>
                            <p className="text-end fw-bold" id="price">Total:</p>
                        </div>
                        {/* <!--End of modal body--> */}
                        {/* <!--start of modal footer--> */}
                        <div className="modal-footer">
                            <button className="btn"
                                    type="submit" id="addCart" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}>
                                    <i className="bi bi-cart4"></i> &nbsp;  Add to Cart 
                            </button>
                            <button className="btn"
                                    type="button" style={{backgroundColor:'#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}>
                                    Cancel
                            </button>
                        </div>
                        {/* <!--End of modal footer--> */}
                        </div>
                    </div>
                </div>
                {/* <!--End of Fruits Tab-->     */}
                
                {/* <!--Salad Set Tab--> */}
                <div className="tab-pane" id="SaladSet">
                    <div className="row g-0 m-1 d-flex justify-content-center">
                        <h3 className="mb-3 text-center">Salad Set</h3>
                        <center>
                        {salad.map((val)=>{
                            return(
                                <Row key={val.saladSet_id} className="g-2 m-1 d-inline-flex justify-content-center">
                                    <Col><Card img={ampSalad} alt={val.saladSet_title} title={val.saladSet_title} text={val.saladSet_text} Price={val.saladSet_price}/></Col>
                                </Row>
                            )
                        })}
                        <Row className="g-2 m-2 d-inline-flex justify-content-center">                        
                            <Col><Card img={ampSalad} alt={"ampSalad"} id={"ampSalad"} title={"Ampalaya Salad"} priceID={"ampSaladPrice"} Price={'₱100.00'} text={"Includes a large ampalaya, tomato and red onion which is good for 2-3 persons"} qtyId={"ampSaladQTY"}/></Col>
                            <Col><Card img={cucumSalad} alt={"cucumSalad"} id={"cucumSalad"} title={"Cucumber Salad"} priceID={"cucumSaladPrice"} Price={'₱100.00'} text={"Includes cucumber, tomato and red onion which is good for 2-3 persons"} qtyId={"cucumSaladQTY"}/></Col>
                            <Col><Card img={ensalada} alt={"talongSalad"} id={"talongSalad"} title={"Ensaladang Talong"} priceID={"talongSaladPrice"} Price={'₱100.00'} text={"Includes eggplants, tomatoes, red onions which is good for 2-3 persons"} qtyId={"talongSaladQTY"}/></Col>
                            <Col><Card img={greens} alt={"greenSalad"} id={"greenSalad"} title={"Green Salad"} priceID={"greenSaladPrice"} Price={'₱100.00'} text={"Includes red onion, tomatoes, Avocado, cucumber, and lettuce which is good for 2-3 persons"} qtyId={"greenSaladQTY"}/></Col>
                        </Row>
                        <Row className="g-2 m-2 d-inline-flex justify-content-center">                        
                            <Col><Card img={lato} alt={"lato"} id={"lato"} title={"Lato (seaweed) Salad"} priceID={"latoPrice"} Price={'₱100.00'} text={"Includes lato, red onion and tomato which is good for 2-3 persons"} qtyId={"latoQTY"}/></Col>
                            <Col><Card img={mangoSalad} alt={"mangoSalad"} id={"mangoSalad"} title={"Mango Tomato Salad"} priceID={"mangoSaladPrice"} Price={'₱100.00'} text={"Includes large green mango, tomatoes, and red onion which is good for 2-3 persons"} qtyId={"mangoSaladQTY"}/></Col>
                            <Col><Card img={talbos} alt={"talbos"} id={"talbosSalad"} title={"Kamote Tops (Talbos) Salad"} priceID={"talbosSaladPrice"} Price={'₱100.00'} text={"Includes kamote tops, tomatoes, and red onion which is good for 2-3 persons"} qtyId={"talongSaladQTY"}/></Col>                         
                        </Row>
                        </center>
                    </div>
                </div>

                {/* <!--Start of Pantry Essentials--> */}
                <div className="tab-pane" id="Pantry">
                    <div className="row p-1  text-center">
                        <h3 className="mb-3">Pantry Essentials</h3>
                        <p>If you're looking for a gift to your loved ones who love to cook, it's the perfect gift set. You can also have it for your own pantry.</p>
                    </div>
                    <center>
                    {pantry.map((val)=>{
                        return(
                            <Row key={val.pantry_id} className="g-2 m-1 d-inline-flex justify-content-center">
                                <Col><Card img={duo} alt={val.pantry_title} title={val.pantry_title} text={val.pantry_text} Price={val.pantry_price}/></Col>
                            </Row>
                        )
                    })}               
                    
                    <Row className="g-2 m-2 d-inline-flex justify-content-center">
                        <Col><Card img={herb6} alt={"herb6"} id={"setA"} title={"Set A"} priceID={"setAPrice"} Price={'₱180.00'} text={"Consists of randomly available herbs and spices of 6 variety"} qtyId={"setAQTY"}/></Col>
                        <Col><Card img={herb3} alt={"herb3"} id={"setB"} title={"Set B"} priceID={"setBPrice"} Price={'₱150.00'} text={"Boxed set of garlic flakes, Paprika and ground pepper."} qtyId={"setBQTY"}/></Col>
                        <Col><Card img={duo} alt={"duo"} id={"setC"} title={"Set C"} priceID={"setCPrice"} Price={'₱75.00'} text={"Perfect Duo of Salt and pepper"} qtyId={"setCQTY"}/></Col>
                    </Row>
                    </center>
                </div>
            </div>
        <br/>
        {/* <!--End of Nav tabs--> */}
        </div>
    </div>
    )
}
export default BestSellers;