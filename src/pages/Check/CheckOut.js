function CheckOut() {
    return (
        <div>
            <style>
                .card{{
                    width: "90%",
                    maxWidth: "400px",
                    padding: "5rem 2.5rem",
                    borderRadius: "1rem",
                    border: "1px solid #A2DBB7",
                    backdropFilter: "blur (1rem)",
                    boxShadow: "1.3rem 1.3rem 1.3rem rgba(0,0,0, 0.5)",
                    borderTopColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderLeftColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderBottomColor: "rgba(225, 225, 225, 225, 0.5)",
                    borderRightColor: "rgba(225, 225, 225, 225, 0.5)",
                    backgroundColor: "linear-gradient(to right bottom, rgba(225, 225,225, 0.5), rgba(225,225,225,0.3))"
                }}
            </style>

            {/* <!--Navigation Bar--> */}
            <div className="container-fluid" style="background-color:#F8FEFA;">
                <div className="navbar navbar-expand-md">
                    <a className="navbar-brand" href="index.html">
                        <img src="img/logo.png" className="rounded-circle border border-2" style="width:75px;" />
                    </a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMark"
                        aria-controls="navbarMark"
                        aria-expanded="false"
                        aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMark">
                        <ul className="navbar-nav text-uppercase">
                            <li className="nav-item">
                                <a className="nav-link" href="combined.html" style="color:#073418;">Farm Produce</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Login.html" style="color:#073418">My Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="AboutUs.html" style="color:#073418;">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="help.html" style="color:#073418">Help</a>
                            </li>
                        </ul>
                    </div>
                    <form className="searchCart d-flex ms-auto" role="search">
                        <input type="text" onkeyup="SearchBar()" id="userInput" className="form-control" placeholder="Search" aria-label="search" />
                        <button type="submit" onclick="SearchBar()" className="btn btn-outline" style="background-color: #073418; color:#A2DBB7;">Search</button>
                    </form>
                    {/* <!-- display none style="display:none"-->   */}
                    <div >
                        <ul id="listOfproducts">
                            <li><a href="combined.html#pakbet">Pakbet</a></li>
                            <li><a href="combined.html#chopseuy">Chop Seuy</a></li>

                            <li><a href="combined.html#sigangGabi">Sinigang with Gabi</a></li>
                            <li><a href="combined.html#Sigang">Seafood Sinigang</a></li>

                            <li><a href="combined.html#Laga">Nilaga or Bulalo</a></li>
                            <li><a href="combined.html#miswa">Miswa</a></li>
                            <li><a href="combined.html#Munggo">Monggo</a></li>

                            <li><a href="combined.html#Kare">Kare-Kare</a></li>

                            <li><a href="combined.html#pineappleQty">Pineapple</a></li>
                            <li><a href="combined.html#avocado">Avocado</a></li>

                            <li><a href="combined.html#lemonQty">Lemon</a></li>
                            <li><a href="combined.html#lacatan">Banana</a></li>
                            <li><a href="combined.html#dragon">Dragon Fruit</a></li>

                            <li><a href="combined.html#rambutanQty">Rambutan</a></li>
                            <li><a href="combined.html#grapesQty">Grapes</a></li>
                            <li><a href="combined.html#mangoQty">Mango</a></li>

                            <li><a href="combined.html#pearQty">Pear</a></li>
                            <li><a href="combined.html#papaya">Papaya</a></li>
                            <li><a href="combined.html#cucumSalad">Cucumber Salad</a></li>
                            <li><a href="combined.html#talongSalad">Ensaladang Talong</a></li>

                            <li><a href="combined.html#greenSalad">Green Salad</a></li>
                            <li><a href="combined.html#Pantry">Pantry Essentials</a></li>

                            <li><a href="combined.html#Patola">Patola</a></li>
                            <li><a href="combined.html#Pechay">Pechay</a></li>

                            <li><a href="combined.html#PechayB">Pechay Baguio</a></li>
                            <li><a href="combined.html#Potato">Potato Large</a></li>
                            <li><a href="combined.html#PotatoM">Potato Meduim</a></li>

                            <li><a href="combined.html#Saluyot">Saluyot</a></li>
                            <li><a href="combined.html#Radish">Radish</a></li>
                            <li><a href="combined.html#MarblePotato">Potato Marble</a></li>

                            <li><a href="combined.html#sayote">Sayote</a></li>
                            <li><a href="combined.html#sigarilyas">Sigarilyas</a></li>
                            <li><a href="combined.html#labuyo">Sili Labuyo</a></li>

                            <li><a href="combined.html#latundan">Banana Latundan</a></li>
                            <li><a href="combined.html#lacatan">Banana Lacatan</a></li>

                            <li><a href="combined.html#atis">Atis</a></li>
                            <li><a href="combined.html#chico">Chico</a></li>
                            <li><a href="combined.html#calamansi">Calamansi</a></li>

                            <li><a href="combined.html#buko">Buko</a></li>
                            <li><a href="combined.html#senorita">Banana Senorita</a></li>
                            <li><a href="combined.html#corn">Corn</a></li>

                            <li><a href="combined.html#cucumber">Cucumber</a></li>
                            <li><a href="combined.html#dalandan">Dalandan</a></li>

                            <li><a href="combined.html#laurel">Laurel</a></li>
                            <li><a href="combined.html#cilantro">Cilantro</a></li>
                            <li><a href="combined.html#chives">Chives</a></li>

                            <li><a href="combined.html#basil">Basil</a></li>
                            <li><a href="combined.html#seasalt">Sea Salt</a></li>
                            <li><a href="combined.html#honey">Pure Honey</a></li>

                            <li><a href="combined.html#mint">Mint leaves</a></li>
                            <li><a href="combined.html#himalayan">Himalayan Salt</a></li>
                            <li><a href="combined.html#peppercorn">Pamintang Buo</a></li>

                            <li><a href="combined.html#turmeric">Turmeric Powder</a></li>
                            <li><a href="combined.html#tanglad">Tanglad</a></li>
                            <li><a href="combined.html#anise">Star Anise</a></li>

                        </ul>
                    </div>

                    <div className="cartNav px-2 justify-content-center me-3" style="float:right;">
                        <div className="cartCounter"></div>
                        <a className="nav-link" style="color:#073418" onclick="toggleCart();">
                            <i className="bi bi-cart4" style="font-size:30px;"></i></a>
                        {/* <!--Start of Shopping Cart section--> */}
                        <div className="shoppingCartContainer" id="cartBox">
                            <table className="table table-hover table-striped" id="cartContents">
                                <thead>
                                    <tr>
                                        <th scope="col" >Product</th>
                                        <th scope="col" >Price</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" >Subtotal</th>
                                        <th scope="col" className="text-center"></th>
                                    </tr>
                                </thead>
                                <tbody id="cartContentsBody"></tbody>
                            </table>
                            <p className="total-container" id="total-price"></p>
                            <button type="submit" className="btn btn-sm text-uppercase" style="background-color: #073418; color:#A2DBB7;"><a href="CheckOut.html" style="text-decoration:none; color:#A2DBB7;">Checkout</a></button>
                            <button className="btn btn-sm shadow text-uppercase" style="background-color: #073418; color:#A2DBB7;" onclick="clearCart();">Remove all</button>
                            <p id="cartEmpty" style="display:none;">Your cart is empty.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--end of nav bar>--> */}

            <br />

            {/* <!--Start of Check Out section--> */}
            <div className="container-fluid" style="background-color: rgba(0, 0, 0, 0.2);">
                <p className="display-6 text-center text-uppercase" style="color: #073418">Checkout</p>
            </div>
            <br /><br />
            <div className="container confirm" style="background-color: #A2DBB7"></div>
            <div className="container" id="orderConfirmation">
                <table className="table table-hover table-striped" id="orderContents">
                    <thead>
                        <tr>
                            <th scope="col" >Product</th>
                            <th scope="col" >Price</th>
                            <th scope="col" >Quantity</th>
                            <th scope="col" >Subtotal</th>
                        </tr>
                    </thead>
                </table>
                <br /><br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col ms-3">
                            <label>Special Instructions to the Seller:</label><br />
                            <textarea className="border shadow-sm p-1" rows="5" cols="45" style="resize:none"></textarea>
                        </div>
                        <div className="col">
                            <br />
                            {/* <!--Summary table--> */}
                            <table className="table table-bordered table-hover table-striped" id="cartContents">
                                <thead>
                                    <tr className="text-center">
                                        <th colspan="2">Cart Totals</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            Subtotal
                                        </th>
                                        <td id="subtotal">₱0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Shipping
                                        </th>
                                        <td id="shipFee">₱0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Total
                                        </th>
                                        <th id="totalPrice">₱0.00</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div><br />
            {/*  <center>
<div className="container border shadow p-3">
    <p>Do you already have an account?</p><br/>
    <button type="button" className="btn text-capitalize btn-sm" style="background-color:#A2DBB7;"><a href="Login.html" style="text-decoration:none; color:#073418">Click here to Log in</a></button>
</div>
</center> */}

            <br /><br />
            <form className="container p-4">
                <section className="container mt-2 p-3 text-center">
                    <div className="accordion accordion-flush" id="CheckOut">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="NameHeading">
                                <button className="accordion-button btn btn-outline fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#NameBody"
                                    aria-expanded="true"
                                    aria-controls="NameBody">
                                    Contact Details
                                </button>
                            </h2>

                            <div className="accordion-collapsee"
                                id="NameBody"
                                aria-labelledby="#AddressHeading"
                                data-bs-parent="#CheckOut">
                                <div className="accordion-body text-justify">
                                    <div className="input-group" mb-3>
                                        <label for="custName" className="input-group-text">Full Name:</label>
                                        <input type="text" className="form-control" id="custName" />
                                    </div><br />
                                    <div className="input-group" mb-3>
                                        <label for="Phone" className="input-group-text">Phone number:</label>
                                        <input type="tel" className="form-control" id="Phone" minlength="11" maxlength="11" />
                                    </div><br />
                                    <div className="input-group" mb-3>
                                        <label for="userEmail" className="input-group-text">Email address:</label>
                                        <input type="email" className="form-control" id="userEmail" />
                                    </div><br />
                                </div>
                            </div>
                        </div>
                        {/* <!--Shipping Address Info--> */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="AddressHeading">
                                <button className="accordion-button btn btn-outline fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#AddressBody"
                                    aria-expanded="true"
                                    aria-controls="AddressBody">
                                    Shipping Address
                                </button>
                            </h2>

                            <div className="accordion-collapsee"
                                id="AddressBody"
                                aria-labelledby="#AddressHeading"
                                data-bs-parent="#CheckOut">
                                <div className="accordion-body text-justify">
                                    <div className="input-group" mb-3>
                                        <label for="Housenum" className="input-group-text">House No.:</label>
                                        <input type="text" className="form-control" id="Housenum" placeholder="Address Line 1" />
                                    </div><br />
                                    <div className="input-group" mb-3>
                                        <label for="Street" className="input-group-text">Street:</label>
                                        <input type="text" className="form-control" id="Street" placeholder="Address Line 2" />
                                    </div><br />
                                    <div className="input-group" mb-3>
                                        <label for="Barangay" className="input-group-text">Barangay:</label>
                                        <input type="text" className="form-control" id="barangay" />
                                    </div><br />
                                    <div className="input-group" mb-3>
                                        <label for="Municipality" className="input-group-text">Municipality:</label>
                                        <input type="text" className="form-control" id="town" />
                                    </div><br />
                                    <div className="input-group" mb-3>
                                        <label for="province" className="input-group-text">Province:</label>
                                        <input type="text" className="form-control" id="province" />
                                    </div><br />
                                    <div className="input-group" mb-3>
                                        <label for="zipCode" className="input-group-text">Postal Code:</label>
                                        <input type="text" className="form-control" id="zipCode" />
                                    </div><br />
                                </div>
                            </div>
                        </div>
                        {/* <!--Payment Method Info--> */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="PayHeading">
                                <button className="accordion-button btn btn-outline fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#PayBody"
                                    aria-expanded="true"
                                    aria-controls="PayBody">
                                    Payment Method
                                </button>
                            </h2>

                            <div className="accordion-collapsee"
                                id="PayBody"
                                aria-labelledby="#PayHeading"
                                data-bs-parent="#CheckOut">
                                <div className="accordion-body text-start d-flex">
                                    {/* <!--put form in div--> */}
                                    <div id="paymentOptions">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Payment" id="cod" value="COD" />
                                            <label className="form-check-label" for="cod">Cash on Delivery
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Payment" id="card" value="CARD" />
                                            <label className="form-check-label" for="card">Card
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Payment" id="Gcash" value="GCASH" />
                                            <label className="form-check-label" for="Gcash">Gcash
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Payment" id="maya" value="MAYA" />
                                            <label className="form-check-label" for="maya">Maya
                                            </label>
                                        </div>
                                    </div>
                                    <div className="vr mx-5"></div> <br />
                                    {/* <!--created div for payment method selection--> */}
                                    <div id="paymentMethodData"> <br />
                                        <div id="paymentMethodDataGrid1"></div>
                                    </div>
                                    <div id="paymentMethodDataGrid"> <br />

                                        <div id="paymentMethodDataGrid2"> <br /> </div>
                                        <div id="paymentMethodDataGrid3"> <br /> </div>
                                        <div id="paymentMethodDataGrid4"> <br /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn" type="submit" style={{ borderRadius: '5px', boxShadow: '5px 5px grey', backgroundColor: '#A2DBB7' }} onclick="PlaceOrder();">Place Order</button>
                </section>
            </form>
        </div>
    )
}
