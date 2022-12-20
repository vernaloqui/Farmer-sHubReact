import Produce from '../pages/Combined'
import basil from '../img/basil.png'
import chives from '../img/chives.png'
import cilantro from '../img/cilantro.png'
import laurel from '../img/laurel.png'
import himalayan from '../img/himalayan.png'
import mint from '../img/mint.png'
import honey from '../img/honey.png'
import seasalt from '../img/roack sesalt.png'
import star from '../img/star.png'
import salay from '../img/salay.png'
import turmeric from '../img/turmeric.png'
import pepper from '../img/pepp.png'

function SHerbs(){
    return(
        <section>
        <Produce/>
        <div className="productField container-fluid">
        {/* <!--Start of Spices Gallery--> */}
        <div className="row g-2 m-1 d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={basil} alt="basil" className="card-img-top w-100"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="basil">Basil </p>
                    <p>per 250g</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="basilPrice">₱27.50</p>
                </div>      
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                        <span className="input-group-text" onclick="Basil.value = decQuantity(Basil)">-</span>
                        <input type="text" id="Basil" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Basil.value = incQuantity(Basil)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}onclick="addToCart(basil, Basil.value, basilPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>  
            </div>
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={chives} alt="chives" className="card-img-top w-100" style={{height:'200px', objectFit: 'cover'}}/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="chives">Chives</p>
                    <p>per 50g</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="chivesPrice">₱32.00</p>
                </div>  
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Chives.value = decQuantity(Chives)">-</span>
                        <input type="text" id="Chives" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Chives.value = incQuantity(Chives)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(chives, Chives.value, chivesPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>     
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={cilantro} alt="cilantro" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="cilantro">Cilantro</p>
                    <p>per 50g</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="cilantroPrice">₱45.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Cilantro.value = decQuantity(Cilantro)">-</span>
                        <input type="text" id="Cilantro" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Cilantro.value = incQuantity(Cilantro)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(cilantro, Cilantro.value, cilantroPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>    
            </div>       
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={laurel} alt="laurel" className="card-img-top"/>
                </div>
                <div className="card-body  text-center">
                    <p className="h6 fw-bold card-title" id="laurel">Laurel </p>
                    <p>per pack</p>
                    <p className="card-text" style={{fontSize:'15px'}} id="laurelPrice">₱15.00</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                        <span className="input-group-text" onclick="Laurel.value = decQuantity(Laurel)">-</span>
                        <input type="text" id="Laurel" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                        <span className="input-group-text" onclick="Laurel.value = incQuantity(Laurel)">+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(laurel, Laurel.value, laurelPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
                </div>
            </div>   
        </div>

        {/* <!--Start of 2nd row of products gallery--> */}
        <div className="row g-2 m-1 justify-content-center">
        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div className="inner">
                <img src={himalayan} alt="himalayan" className="card-img-top"/>
            </div>
            <div className="card-body  text-center">
                <p className="h6 fw-bold card-title" id="himalayan">Himalayan Salt </p>
                <p>per 200g</p>
                <p className="card-text" style={{fontSize:'15px'}} id="himalayanPrice">₱225.00</p>
            </div>      
            <div className="card-footer d-flex flex-column justify-content-between">
                <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                    <span className="input-group-text" onclick="Himalayan.value = decQuantity(Himalayan)">-</span>
                    <input type="text" id="Himalayan" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                    <span className="input-group-text" onclick="Himalayan.value = incQuantity(Himalayan)">+</span>
                </div><br/>     
                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(himalayan, Himalayan.value, himalayanPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
            </div>  
        </div>
        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div className="inner">
                <img src={mint} alt="mint" className="card-img-top"/>
            </div>
            <div className="card-body  text-center">
                <p className="h6 fw-bold card-title" id="mint">Mint leaves </p>
                <p>per 50g</p>
                <p className="card-text" style={{fontSize:'15px'}} id="mintPrice">₱35.00</p>
            </div>  
            <div className="card-footer d-flex flex-column justify-content-between">
                <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span className="input-group-text" onclick="Mint.value = decQuantity(Mint)">-</span>
                    <input type="text" id="Mint" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                    <span className="input-group-text" onclick="Mint.value = incQuantity(Mint)">+</span>
                </div><br/>     
                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(mint, Mint.value, mintPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
            </div>     
        </div>       
        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div className="inner">
                <img src={honey} alt="honey" className="card-img-top"/>
            </div>
            <div className="card-body  text-center">
                <p className="h6 fw-bold card-title" id="honey">Pure Honey </p>
                <p>per 1L bottle</p>
                <p className="card-text" style={{fontSize:'15px'}} id="honeyPrice">₱250.00</p>
            </div>
            <div className="card-footer d-flex flex-column justify-content-between">
                <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span className="input-group-text" onclick="Honey.value = decQuantity(Honey)">-</span>
                    <input type="text" id="Honey" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                    <span className="input-group-text" onclick="Honey.value = incQuantity(Honey)">+</span>
                </div><br/>     
                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(honey, Honey.value, honeyPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
            </div>    
        </div>       
        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div className="inner">
                <img src={seasalt} alt="seasalt" className="card-img-top"/>
            </div>
            <div className="card-body  text-center">
                <p className="h6 fw-bold card-title" id="seasalt">Sea Salt</p>
                <p>per kg</p>
                <p className="card-text" style={{fontSize:'15px'}} id="seasaltPrice">₱65.00</p>
            </div>
            <div className="card-footer d-flex flex-column justify-content-between">
                <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span className="input-group-text" onclick="SeaSalt.value = decQuantity(SeaSalt)">-</span>
                    <input type="text" id="SeaSalt" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                    <span className="input-group-text" onclick="SeaSalt.value = incQuantity(SeaSalt)">+</span>
                </div><br/>     
                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(seasalt, SeaSalt.value, seasaltPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
            </div>
        </div>   
        </div>
        {/* <!--Start of 3rd row of Products Gallery--> */}
        <div className="row g-2 m-1 justify-content-center">
        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div className="inner">
                <img src={star} alt="anise" className="card-img-top"/>
            </div>
            <div className="card-body  text-center">
                <p className="h6 fw-bold card-title" id="anise">Star </p>
                <p>per 50g</p>
                <p className="card-text" style={{fontSize:'15px'}} id="anisePrice">₱35.00</p>
            </div>      
            <div className="card-footer d-flex flex-column justify-content-between">
                <div className="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                    <span className="input-group-text" onclick="Anise.value = decQuantity(Anise)">-</span>
                    <input type="text" id="Anise" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                    <span className="input-group-text" onclick="Anise.value = incQuantity(Anise)">+</span>
                </div><br/>     
                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(anise, Anise.value, anisePrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
            </div>  
        </div>
        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div className="inner">
                <img src={salay} alt="salay" className="card-img-top"/>
            </div>
            <div className="card-body  text-center">
                <p className="h6 fw-bold card-title" id="tanglad">Tanglad</p>
                <p className="h6 fw-bold">per 50g</p>
                <p className="card-text" style={{fontSize:'15px'}} id="tangladPrice">₱12.00</p>
            </div>  
            <div className="card-footer d-flex flex-column justify-content-between">
                <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span className="input-group-text" onclick="Tanglad.value = decQuantity(Tanglad)">-</span>
                    <input type="text" id="Tanglad" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                    <span className="input-group-text" onclick="Tanglad.value = incQuantity(Tanglad)">+</span>
                </div><br/>     
                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(tanglad, Tanglad.value, tangladPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
            </div>     
        </div>       
        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div className="inner">
                <img src={turmeric} alt="turmeric" className="card-img-top"/>
            </div>
            <div className="card-body  text-center">
                <p className="h6 fw-bold card-title" id="turmeric">Turmeric Powder</p>
                <p className="h6 fw-bold">per 50g</p>
                <p className="card-text" style={{fontSize:'15px'}} id="turmericPrice">₱49.00</p>
            </div>
            <div className="card-footer d-flex flex-column justify-content-between">
                <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span className="input-group-text" onclick="Turmeric.value = decQuantity(Turmeric)">-</span>
                    <input type="text" id="Turmeric" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                    <span className="input-group-text" onclick="Turmeric.value = incQuantity(Turmeric)">+</span>
                </div><br/>     
                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(turmeric, Turmeric.value, turmericPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
            </div>    
        </div>       
        <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div className="inner">
                <img src={pepper} alt="pepper" className="card-img-top"/>
            </div>
            <div className="card-body  text-center">
                <p className="h6 fw-bold card-title" id="peppercorn">Pamintang Buo</p>
                <p className="h6 fw-bold">per 500g</p>
                <p className="card-text" style={{fontSize:'15px'}} id="peppercornPrice">₱65.00</p>
            </div>
            <div className="card-footer d-flex flex-column justify-content-between">
                <div className="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span className="input-group-text" onclick="Peppercorn.value = decQuantity(Peppercorn)">-</span>
                    <input type="text" id="Peppercorn" value="1" className="form-control text-center bg-white" min="0" placeholder="1"/>
                    <span className="input-group-text" onclick="Peppercorn.value = incQuantity(Peppercorn)">+</span>
                </div><br/>     
                <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}} onclick="addToCart(peppercorn, Peppercorn.value, peppercornPrice);"><i className="bi bi-cart4" style={{fontSize:'20px'}}></i> &nbsp;  Add to Cart</button>
            </div>
        </div>   
        </div>
        </div>
        {/* <!--End of Spices Gallery--> */}
        </section>
    )
}
export default SHerbs;