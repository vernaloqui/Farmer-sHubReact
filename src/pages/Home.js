import banner from '../img/produce.png';
import ulam from '../img/Ulam.png';
import fruit from '../img/fruitBasket.jpg';
import salad from '../img/salad.jpg';
import pantry from '../img/pantry.png';
import one from '../img/testi1.png';
import two from '../img/testi2.png';
import three from '../img/testi3.png';
function Home(){
    return (
    <section>
        <div className="container-fluid d-flex m-auto p-0" style={{position: 'relative'}}>
            <img src={banner} alt="..." className="d-block w-100" style={{opacity: '0.8'}}/>
            <div className="text-box" style={{position: 'absolute'}}>
                <h2>Farmer's Hub</h2>
                <h3>A moment on the lips, a lifetime on the hips. </h3>
            </div>
        </div>
        <br/>
        <br/>   
        <br/>
        <div className="container d-sm-block text-center">
            <h3>Featured Categories</h3>
            <br/>
            <div className="row g-2 d-flex justify-content-center">
                <div className="col-12 col-lg-3 col-md-6 card m-1 p-0" style={{color:'#073418'}}>
                        <img src={ulam} alt="ulam" className="card-img img-thumbnail"/>                       
                        <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                  
                            <h5 className="card-title">Ulam Bundles</h5>
                            <a href="combined.html#UlamBundles" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</a>
                        </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6 card m-1 p-0" style={{color:'#073418'}}>
                        <img src={fruit} alt="fruitBasket" className="card-img img-thumbnail"/>                       
                        <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                    
                            <h5 className="card-title" >Fruits Basket</h5>
                            <a href="combined.html#UlamBundles" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</a>
                        </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6 card m-1 p-0" style={{color:'#073418'}}>
                        <img src={salad} alt="salad" className="card-img img-thumbnail"/>                       
                        <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                   
                            <h5 className="card-title">Salad Set</h5>
                            <a href="combined.html#UlamBundles" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</a>
                        </div>
                </div>
                <div className="col-12 col-lg-3 col-md-3 card m-1 p-0" style={{color:'#073418'}}>
                        <img src={pantry} alt="pantry" className="card-img img-thumbnail"/>                       
                        <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                 
                            <h5 className="card-title">Pantry Essentials</h5>
                            <a href="combined.html#UlamBundles" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</a>
                        </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <form name="ValidFormSubs"> 
        <br/>
        <br/>
        <br/>
        <br/> 

        <div className="Newsletter border border-2 mx-5">
                <h3>Newsletter</h3>
                <p className="fw-lighter">Keep up with promotions, and new items, among other things. Right to your inbox.</p>
            <div className="input-group" mb-3>
                <input type="email" name="ValidSubscribe" id="email" className="form-control" placeholder="Email address"/>
                <button type="button" className="btn text-capitalize btn-sm" style={{backgroundColor:'#A2DBB7'}}>Subscribe</button>
            </div>
        </div>
        </form>
        <br/>
        <br/>
        {/* <!-- scroll to top button --> */}
        
        <br/>
        {/* <!--Reviews section--> */}
            <div className="title my-5">
            <h2 className="text-center">Testimonials</h2>
            </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4 m-2 card Review  text-center">
                                <img className="card-img-top" src={one} alt=".."/>
                                <div className="card-body">
                                <h4>Juan Dela Cruz <br/></h4>
                                <span className="fst-italic fw-bold"> Farmer 1</span>
                                <p className="card-text">"Farmer's Hub really help us farmers a lot in 
                                    terms of marketing our produce products."</p>
                                </div>
                            </div>
                            <div className="col-md-4 m-2 card Review  text-center">
                                <img className="card-img-top" src={two} alt=".."/>
                                <div className="card-body">
                                    <h4>Imee Perez </h4>
                                    <span className="fst-italic fw-bold"> Farmer 2</span>
                                    <p className="card-text">"Farmer's Hub website help increase our marketing efficiencies and reduce product waste.
                                    ."</p>
                                </div>
                            </div>
                            <div className="col-md-4 m-2 card Review  text-center">
                            <img className="card-img-top" src={three} alt=".."/>
                                <div className="card-body">
                                    <h4>Jane Marcos </h4>
                                    <span className="fst-italic fw-bold"> Farmer 3</span>
                                    <p className="card-text">"Farmer's Hub really help us farmers in selling our produce products online to our valued consumers."</p>
                                </div>
                            </div>              
        {/* <!--end of Reviews section--> */}
        </div>
    </section>
    )
}
export default Home;