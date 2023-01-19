import caroOne from '../img/caroOne.jpg';
import caroTwo from '../img/caroTwo.jpg';
import caroThree from '../img/caroThree.jpg';
import image1 from "../img/image01.jpg";
import image2 from '../img/image2.jpg';
import image4 from '../img/image3.jpg';
import image3 from '../img/image4.jpg';
import image5 from '../img/four.jpg';
import image7 from '../img/six.jpg';

function AboutUs() {
    return (


        <div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={caroOne} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={caroTwo} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={caroThree} class="d-block w-100" alt="..." />
                    </div>
                    <div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
            </div>




            <br />
            <br />
            <hr />
            <br />

            <section className="bg-light ">
                <div className="container col-xl-8 px-4 py-5 ">
                    <div className="row align-items-center ">
                        <div className="col ">
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={image5} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={image7} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={image1} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>

                            </div>
                            {/* <img src={image1} className="thumbnail d-block mx-lg-auto img-fluid " alt=" " width="1024 " height="1024 " loading="lazy " /> */}
                        </div>
                        <div className="col-md-6 ">
                            <br /><br />

                            <h2 className="display-4 fw-bold lh-1 mb-1 ">About Us</h2>
                            <hr />
                            <p> In the Philippines, majority of the farmers belong to
                                the low-income className..
                                Most of the Filipinos favor the low-priced imported
                                goods over the local crops of our farmers.  </p>

                        </div>
                    </div>
                </div>
            </section>

            <br /><br />
            {/* Mission */}
            <section style={{ backgrounColor: ' #CD7676;' }}>
                <div className="container col-xl-8 px-4 py-5 ">
                    <div className="row flex-lg-row-reverse align-items-center text-light">
                        <div className="col ">
                            <img src={image2} className="img-thumbnail d-block mx-lg-auto img-fluid " alt=" " width="1024 " height="1024 " loading="lazy " />
                        </div>
                        <div className="col-md-6 ">
                            <br /><br />
                            <h2 className="display-4 fw-bold lh-1 mb-1" style={{ color: '#000' }}>Mission </h2>
                            <hr />
                            <p style={{ color: "#000" }}>This marketplace will help promote local farm communities and at the same time provide an ease of access for
                                consumers to buy fresh and healthy products at a competitive price.</p>

                        </div>
                    </div>
                </div>
            </section>
            <br/>
            {/* vission */}
            <section style={{ backgrounColor: ' #CD7676;' }}>
                <div className="container col-xl-8 px-4 py-5 ">
                    <div className="row flex-lg align-items-center text-light">
                        <div className="col "> <img src={image3} className="img-thumbnail d-block mx-lg-auto img-fluid " alt=" " width="1024 " height="1024 " loading="lazy " />
                        </div>
                        <div className="col-md-6 ">
                            <br /><br />
                            <h2 className="display-4 fw-bold lh-1 mb-1" style={{ color: '#000' }}>Vission </h2>
                            <hr />
                            <p style={{ color: '#000' }}> Farmers can access information needed to produce, add value, market their commodities and develop
                                effective linkages with input agencies such as financial service providers, as well as output markets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
<br/>
            <section style={{ backgrounColor: ' #CD7676;' }}>
                <div className="container col-xl-8 px-4 py-5 ">
                    <div className="row flex-lg-row-reverse align-items-center text-light">
                        <div className="col ">
                            <img src={image4} className="img-thumbnail d-block mx-lg-auto img-fluid " alt=" " width="1024 " height="1024 " loading="lazy " />
                        </div>
                        <div className="col-md-6 ">
                            <br /><br />
                            <h2 className="display-4 fw-bold lh-1 mb-1" style={{ color: '#000' }}>Objective </h2>
                            <hr />
                            <p style={{ color: "#000" }}>
                                Improve the conditions of farmers in the food chain.
                                Increased profitability of farms and purchasing power of farmers.
                                To sell the produce for profit in the local or export market.
                            </p>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
export default AboutUs;
