import React, {useState} from 'react';
import Produce from '../pages/Combined';
import papaya from '../img/papaya.jpg';
import patola from '../img/patola.jpg';
import pechay from "../img/pechay.jpg";
import pechayB from "../img/pechay baguio.jpg";
import potato from "../img/lage potato.jpg";
import medPotato from "../img/medium potato.jpg";
import marble from '../img/potato marballs.jpg';
import radish from "../img/radish.jpg";
import saluyot from "../img/saluyot.jpg";
import sayote from "../img/sayote.jpg";
import sigarilyas from "../img/sigarilyas.jpg";
import labuyo from "../img/sili labuyo.jpg";

function Veggies() {
    const [count, setCount] = useState(0);
    return(
        <section>
        <Produce/>
        <div className="productField container-fluid">
            {/* <!--Start of Vegetables Gallery--> */}
            <div className="Vegetables">
            <div className="row g-2 m-1 d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                    <div className="inner">
                        <img src={papaya} alt="papaya" className="card-img-top"/>
                    </div>
                    <div className="card-body  text-center">
                        <p className="h6 fw-bold card-title" id="papaya">Papaya Green </p>
                        <p className="h6 fw-bold"> per pc</p>
                        <p className="card-text" style={{fontSize:'15px'}} id="papayaPrice">₱67.5</p>
                    </div>      
                    <div className="card-footer d-flex flex-column justify-content-between">
                        <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                            <span className="input-group-text" onclick="Papaya.value = decQuantity(Papaya)">-</span>
                            <input type="number" id="Papaya" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                            <span className="input-group-text" onclick="Papaya.value = incQuantity(Papaya)">+</span>
                        </div><br/>     
                        <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(papaya, Papaya.value, papayaPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                    </div>  
                </div>
                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                    <div className="inner">
                        <img src={patola} alt="patola" className="card-img-top"/>
                    </div>
                    <div className="card-body  text-center">
                        <p className="h6 fw-bold card-title" id="Patola">Patola </p>
                        <p className="h6 fw-bold"> per pc</p>
                        <p className="card-text" style={{fontSize:'15px'}} id="PatolaPrice">₱67.5</p>
                    </div>  
                    <div className="card-footer d-flex flex-column justify-content-between">
                        <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                            <span className="input-group-text" onclick="patola.value = decQuantity(patola)">-</span>
                            <input type="number" id="patola" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                            <span className="input-group-text" onclick="patola.value = incQuantity(patola)">+</span>
                        </div><br/>     
                        <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Patola, patola.value, PatolaPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                    </div>     
                </div>       
                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                    <div className="inner">
                        <img src={pechay} alt="pechay" className="card-img-top"/>
                    </div>
                    <div className="card-body  text-center">
                        <p className="h6 fw-bold card-title" id="Pechay">Pechay </p>
                        <p className="h6 fw-bold"> per 250 g</p>
                        <p className="card-text" style={{fontSize:'15px'}} id="PechayPrice">₱37.5</p>
                    </div>
                    <div className="card-footer d-flex flex-column justify-content-between">
                        <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                            <span className="input-group-text" onclick="pechay.value = decQuantity(pechay)">-</span>
                            <input type="number" id="pechay" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                            <span className="input-group-text" onclick="pechay.value = incQuantity(pechay)">+</span>
                        </div><br/>     
                        <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Pechay, pechay.value, PechayPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                    </div>    
                </div>       
                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                    <div className="inner">
                        <img src={pechayB} alt="pechayB" className="card-img-top"/>
                    </div>
                    <div className="card-body  text-center">
                        <p className="h6 fw-bold card-title" id="PechayB">Pechay Baguio </p>
                        <p className="h6 fw-bold"> per kg</p>
                        <p className="card-text" style={{fontSize:'15px'}} id="PechayBPrice">₱99.00</p>
                    </div>
                    <div className="card-footer d-flex flex-column justify-content-between">
                        <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                            <span className="input-group-text" onclick="pechayB.value = decQuantity(pechayB)">-</span>
                            <input type="number" id="pechayB" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                            <span className="input-group-text" onclick="pechayB.value = incQuantity(pechayB)">+</span>
                        </div><br/>     
                        <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(PechayB, pechayB.value, PechayBPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                    </div>
                </div>   
            </div>

            {/* <!--Start of 2nd row of products gallery--> */}
            <div className="row g-2 m-1 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={potato} alt="potato" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="Potato">Potato Large </p>
                    <p className="h6 fw-bold"> per 500kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="PotatoPrice">₱65.00</p>
                </div>      
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                        <span className="input-group-text" onclick="potato.value = decQuantity(potato)">-</span>
                        <input type="number" id="potato" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="potato.value = incQuantity(potato)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Potato, potato.value, PotatoPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>  
            </div>
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={medPotato} alt="medPotato" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="PotatoM">Potato medium </p>
                    <p className="h6 fw-bold"> per 500 kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="PotatoMPrice">₱65.00</p>
                </div>  
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="potatoM.value = decQuantity(potatoM)">-</span>
                        <input type="number" id="potatoM" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="potatoM.value = incQuantity(potatoM)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(PotatoM, potatoM.value, PotatoMPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>     
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={marble} alt="marble" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="MarblePotato">Potato marble </p>
                    <p className="h6 fw-bold"> per 500kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="MarblePotatoPrice">₱52.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="marblePotato.value = decQuantity(marblePotato)">-</span>
                        <input type="number" id="marblePotato" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="marblePotato.value = incQuantity(marblePotato)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(MarblePotato, marblePotato.value, MarblePotatoPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>    
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={radish} alt="radish" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="Radish">Radish </p>
                    <p className="h6 fw-bold"> per kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="RadishPrice">₱59.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="radish.value = decQuantity(radish)">-</span>
                        <input type="number" id="radish" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="radish.value = incQuantity(radish)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Radish, radish.value, RadishPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>
            </div>   
            </div>
            {/* <!--Start of 3rd row of Products Gallery--> */}
            <div className="row g-2 m-1 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={saluyot} alt="saluyot" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="Saluyot">Saluyot </p>
                    <p className="h6 fw-bold"> per bundle</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="SaluyotPrice">₱22.00</p>
                </div>      
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                        <span className="input-group-text" onclick="saluyot.value = decQuantity(saluyot)">-</span>
                        <input type="number" id="saluyot" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="saluyot.value = incQuantity(saluyot)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(Saluyot, saluyot.value, SaluyotPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>  
            </div>
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={sayote} alt="sayote" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="sayote">Sayote </p>
                    <p className="h6 fw-bold"> per 500g</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="sayotePrice">₱35.00</p>
                </div>  
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Sayote.value = decQuantity(Sayote)">-</span>
                        <input type="number" id="Sayote" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Sayote.value = incQuantity(Sayote)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(sayote, Sayote.value, sayotePrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>     
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={sigarilyas} alt="sigarilyas" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="sigarilyas">Sigarilyas </p>
                    <p className="h6 fw-bold"> per 250 g</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="sigarilyasPrice">₱85.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Sigarilyas.value = decQuantity(Sigarilyas)">-</span>
                        <input type="number" id="Sigarilyas" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Sigarilyas.value = incQuantity(Sigarilyas)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(sigarilyas, Sigarilyas.value, sigarilyasPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>    
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={labuyo} alt="labuyo" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="labuyo">Sili Labuyo </p>
                    <p className="h6 fw-bold"> per 100 g</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="labuyoPrice">₱54.5</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Labuyo.value = decQuantity(Labuyo)">-</span>
                        <input type="number" id="Labuyo" className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Labuyo.value = incQuantity(Labuyo)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor:' #A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(labuyo, Labuyo.value, labuyoPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>
            </div>   
            </div>
            </div>
            {/* <!--End of Vegetables Gallery--> */}
        </div>
        </section>
    )
}
export default Veggies;