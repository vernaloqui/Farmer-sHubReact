import Produce from '../pages/Combined';
import atis from '../img/atis.jpg';
import avocado from '../img/avocado.png';
import lacatan from '../img/banana.png';
import latundan from '../img/latundan.png';
import senyorita from '../img/senyorita.png';
import buko from '../img/buko.png';
import calamansi from '../img/calamansi.png'
import chico from '../img/chico.png';
import corn from '../img/corn.png'
import pipino from '../img/pipino.png'
import dalandan from '../img/dandan.png'
import dragon from '../img/dragon.png'

function Fruits(){
    return(
        <section>
        <Produce/>
        <div className="productField container-fluid">
        {/* <!--Start of Fruits Gallery--> */}
            <div className="row g-2 m-1 d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                    <div className="inner">
                        <img src={atis} alt="atis" className="card-img-top itemImage"/>
                    </div>
                    <div className="card-body  text-center">
                        <p className="h6 fw-bold card-title" id="atis">Atis</p>
                        <p className="h6 fw-bold">per kg</p>
                        <p className="card-text" style={{fontSize:'15px'}} id="atisPrice">₱100.00</p>
                    </div>      
                    <div className="card-footer d-flex flex-column justify-content-between">
                        <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                            <span className="input-group-text" onclick="Atis.value = decQuantity(Atis)">-</span>
                            <input type="number" id="Atis"  className="form-control text-center bg-white" min="0" placeholder="1" value="1"/>
                            <span className="input-group-text" onclick="Atis.value = incQuantity(Atis)">+</span>
                        </div><br/>     
                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(atis, Atis.value, atisPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                    </div>  
                </div>
                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                    <div className="inner">
                        <img src={avocado} alt="avocado" className="card-img-top"/>
                    </div>
                    <div className="card-body  text-center">
                        <p className="h6 fw-bold card-title" id="avocado">Avocado</p>
                        <p className="h6 fw-bold">per kg</p>
                        <p className="card-text" style={{fontSize:'15px'}} id="avocadoPrice">₱65.00</p>
                    </div>  
                    <div className="card-footer d-flex flex-column justify-content-between">
                        <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                            <span className="input-group-text" onclick="Avocado.value = decQuantity(Avocado)">-</span>
                            <input type="text" id="Avocado"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                            <span className="input-group-text" onclick="Avocado.value = incQuantity(Avocado)">+</span>
                        </div><br/>     
                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(avocado, Avocado.value, avocadoPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                    </div>     
                </div>       
                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                    <div className="inner">
                        <img src={lacatan} alt="lacatan" className="card-img-top"/>
                    </div>
                    <div className="card-body  text-center">
                        <p className="h6 fw-bold card-title" id="lacatan">Banana Lacatan</p>
                        <p className="h6 fw-bold">per bundle</p>
                        <p className="card-text" style={{fontSize:'15px'}} id="lacatanPrice">₱175.00</p>
                    </div>
                    <div className="card-footer d-flex flex-column justify-content-between">
                        <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                            <span className="input-group-text" onclick="Lacatan.value = decQuantity(Lacatan)">-</span>
                            <input type="number" id="Lacatan"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                            <span className="input-group-text" onclick="Lacatan.value = incQuantity(Lacatan)">+</span>
                        </div><br/>     
                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(lacatan, Lacatan.value, lacatanPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                    </div>    
                </div>       
                <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                    <div className="inner">
                        <img src={latundan} alt="latundan" className="card-img-top"/>
                    </div>
                    <div className="card-body  text-center">
                        <p className="h6 fw-bold card-title" id="latundan">Banana Latundan</p>
                        <p className="h6 fw-bold">per kg</p>
                        <p className="card-text" style={{fontSize:'15px'}} id="latundanPrice">₱30.00</p>
                    </div>
                    <div className="card-footer d-flex flex-column justify-content-between">
                        <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                            <span className="input-group-text" onclick="Latundan.value = decQuantity(Latundan)">-</span>
                            <input type="number" id="Latundan"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                            <span className="input-group-text" onclick="Latundan.value = incQuantity(Latundan)">+</span>
                        </div><br/>     
                        <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(latundan, Latundan.value, latundanPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                    </div>
                </div>   
            </div>

        {/* <!--Start of 2nd row of products gallery--> */}
        <div className="row g-2 m-1 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={senyorita} alt="senyorita" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="senorita">Banana Senorita</p>
                    <p className="h6 fw-bold">per kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="senoritaPrice">₱30.00</p>
                </div>      
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                        <span className="input-group-text" onclick="Senorita.value = decQuantity(Senorita)">-</span>
                        <input type="number" id="Senorita"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Senorita.value = incQuantity(Senorita)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(senorita, Senorita.value, senoritaPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>  
            </div>
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={buko} alt="buko" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="buko">Buko</p>
                    <p className="h6 fw-bold">per pc</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="bukoPrice">₱35.00</p>
                </div>  
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Buko.value = decQuantity(Buko)">-</span>
                        <input type="text" id="Buko"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Buko.value = incQuantity(Buko)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(buko, Buko.value, bukoPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>     
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={calamansi} alt="calamansi" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="calamansi">Calamansi</p>
                    <p className="h6 fw-bold"> per kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="calamansiPrice">₱65.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Calamansi.value = decQuantity(Calamansi)">-</span>
                        <input type="number" id="Calamansi"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Calamansi.value = incQuantity(Calamansi)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(calamansi, Calamansi.value, calamansiPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>    
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={chico} alt="chico" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="chico">Chico</p>
                    <p className="h6 fw-bold"> per kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="chicoPrice">₱53.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Chico.value = decQuantity(Chico)">-</span>
                        <input type="text" id="Chico"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Chico.value = incQuantity(Chico)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(chico, Chico.value, chicoPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>
            </div>   
        </div>
        {/* <!--Start of 3rd row of Products Gallery--> */}
        <div className="row g-2 m-1 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={corn} alt="corn" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="corn">Corn</p>
                    <p className="h6 fw-bold"> per kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="cornPrice">₱20.00</p>
                </div>      
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                        <span className="input-group-text" onclick="Corn.value = decQuantity(Corn)">-</span>
                        <input type="number" id="Corn"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Corn.value = incQuantity(Corn)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(corn, Corn.value, cornPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>  
            </div>
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={pipino} alt="pipino" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="cucumber">Cucumber</p>
                    <p className="h6 fw-bold"> per kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="cucumberPrice">₱50.00</p>
                </div>  
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Cucumber.value = decQuantity(Cucumber)">-</span>
                        <input type="text" id="Cucumber"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Cucumber.value = incQuantity(Cucumber)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(cucumber, Cucumber.value, cucumberPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>     
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={dalandan} alt="dalandan" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="dalandan">Dalandan</p>
                    <p className="h6 fw-bold"> per kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="dalandanPrice">₱45.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Dalandan.value = decQuantity(Dalandan)">-</span>
                        <input type="number" id="Dalandan"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Dalandan.value = incQuantity(Dalandan)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(dalandan, Dalandan.value, dalandanPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>    
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={dragon} alt="dragon" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="dragon">Dragon fruit</p>
                    <p className="h6 fw-bold"> per kg</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="dragonPrice">₱100.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Dragon.value = decQuantity(Dragon)">-</span>
                        <input type="text" id="Dragon"  className="form-control text-center bg-white" value="1" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Dragon.value = incQuantity(Dragon)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(dragon, Dragon.value, dragonPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>
            </div>   
        </div>
        </div>
        {/* <!--End of Fruits Gallery--> */}

        </section>
    )
}
export default Fruits;