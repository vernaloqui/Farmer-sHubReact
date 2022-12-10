function Help(){
    return(
        <section>
                <h3 className="fw-bold mt-5 ms-3">Frequently Asked Questions</h3>
        {/* <!--FAQ section--> */}
        <div className="m-3">
        <div className="accordion" id="myAccordion">
            {/* <!--Question #1--> */}
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne"> Where are your fruits and vegetables sourced? </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse">
                <div className="card-body">
                <p className="ms-3 mt-3"> We get our products from farmers all over the country. We import fruits and vegetables that are not grown locally. </p>
                </div>
            </div>
            </div>
            {/* <!--Question #1-->
            <!--Question #2--> */}
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"> How should your products be stored? </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show">
                <div className="card-body">
                <p className="ms-3 mt-3"> This varies depending on the product. In general, store leafy vegetables in the refrigerator. Root crops, such as potatoes and onions, can be stored at room temperature in a cool, dry place. Fruits should be refrigerated. </p>
                </div>
            </div>
            </div>
            {/* <!--Question #2-->
            <!--Question #3--> */}
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseThree"> How quickly can you deliver? </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse show">
                <div className="card-body">
                <p className="ms-3 mt-3"> We have our own delivery service and can deliver to your door the next day (except Sundays) if you place your order before the daily cutoff time of 8 p.m. </p>
                </div>
            </div>
            </div>
            {/* <!--Question #3-->
            <!--Question #4--> */}
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFour"> How do you deliver our orders? </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show">
                <div className="card-body">
                <p className="ms-3 mt-3"> We deliver your orders using our fleet of refrigerated vans to ensure the freshness of your order. </p>
                </div>
            </div>
            </div>
            {/* <!--Question #4-->
            <!--Question #5--> */}
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFive"> If I am not satisfied with my orders, what are my options? </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse show">
                <div className="card-body">
                <p className="ms-3 mt-3"> Due to the nature of our products, it is our policy that once the items are received and accepted, it is assumed that you have inspected and are satisfied with our products. We do allow you to reject items on the spot if you are dissatisfied with them. As a result, we strongly recommend that you or your representative inspect the delivered items one by one. </p>
                </div>
            </div>
            </div>
            {/* <!--Question #5-->
            <!--Question #6--> */}
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseSix"> Do you accept bulk orders? </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse show">
                <div className="card-body">
                <p className="ms-3 mt-3"> We certainly do! Large orders for businesses, restaurants, and parties are welcome. If you have any further questions, please contact us via email and we will get back to you. </p>
                </div>
            </div>
            </div>
            {/* <!--Question #6--> */}
        </div>
        {/* <!--FAQ section-->
        <!--Contact Us Form--> */}
        <div className="form-area">
            <div className="container">
            <div className="row single-form g-0">
                <div className="col-sm-12 col-lg-6">
                <div className="left">
                    <h2>
                    <span>Get in</span>
                    <br/>touch with us!
                    </h2>
                </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                <div className="right">
                    <i className="bi bi-caret-right-fill" style={{color: '#A2DBB7'}}></i>
                    <form>
                    <div className="mb-3">
                        <label for="Name" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="Name" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="InputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Message</label>
                        <textarea type="password" className="form-control" id="exampleInputPassword1" style={{resize:'none'}}></textarea>
                    </div>
                    <button type="submit" className="btn btn-success" onclick="checkMessage();">Submit</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* {/* <!--Contact Us Form--> */}
        </div>
        </section>
    )
}
export default Help;