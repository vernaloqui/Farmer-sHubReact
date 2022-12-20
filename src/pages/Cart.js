function Cart(){
    return (
        <div>
             <style>
        body {{
            fontFamily:'Poppins sans-serif'
        }},
        
        .card{{
            width:'90%',
            maxWidth:'400px',
            padding: '5rem 2.5rem',
            borderRadius: '1rem',
            border: '1px solid transparent',
            backdropFilter: 'blur (1rem)',
            boxShadow: '1.3rem 1.3rem 1.3rem rgba(0,0,0, 0.5)',
            borderTopColor: 'rgba(225, 225, 225, 225, 0.5)',
            borderLeftColor: 'rgba(225, 225, 225, 225, 0.5)',
            borderBottomColor: 'rgba(225, 225, 225, 225, 0.5)',
            borderRightColor: 'rgba(225, 225, 225, 225, 0.5)',
            backgroundColor: 'linear-gradient(to right bottom, rgba(225, 225,225, 0.5), rgba(225,225,225,0.3))'
        }},
        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {{
        webkitAppearance: 'none',
        margin: '0'
        }},

        input[type=number]{ {
        mozAppearance: textfield,
        }}
    </style>

    {/* <!--Navigation Bar--> */}
    <div className="container-fluid" style={{backgroundColor: '#F8FEFA'}}>
        <div className="navbar navbar-expand-md">
                    <a className="navbar-brand" href="index.html">
                        <img src="img/logo.png" className="rounded-circle border border-2" style="width:75px;"/>
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
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="Products.html" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:#073418;">Farm Produce</a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="Fruits.html">Fruits</a></li>
                                            <li><a className="dropdown-item" href="Veggies.html">Vegetables</a></li>
                                            <li><a className="dropdown-item" href="SHerbs.html">Spices and Herbs</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="BestSellers.html"  style={{color:'#07341'}}>Best Sellers</a>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="OnSale.html"  style={{color:'#073418'}}>On Sale</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="Login.html"  style={{color:'#073418'}}>My Account</a>
                                    </li>
                                </ul>
                                <form className="searchCart d-flex ms-auto" role="search">
                                    <div className="cartNav px-2 justify-content-center me-3" style={{float:'right'}}>
                                    <div className="cartCounter">0</div>
                                    <a className="nav-link" href="Cart.html"  style={{color:'#073418'}}>
                                        <i className="bi bi-cart4" style={{fontSize:'30px'}}></i></a>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search" aria-label="search"/>
                                    <button type="submit" className="btn btn-outline" style={{backgroundColor: '#073418', color: '#A2DBB7'}}>Search</button>
                                </form>                            
                            </div>
        </div>
    </div>
{/* <!--end of nav bar>--> */}
<br/>

{/* <!--Start of Shopping Cart section--> */}
<section>
<p className="display-6 text-center text-uppercase" style={{color: '#073418', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>Shopping Cart</p>
<div className="container-fluid" id="cartBox">
    <table className="table table-hover table-striped" id="cartContents">
        <thead>
            
            <tr>
                <th scope="col" >Image</th>
                <th scope="col" >Product</th>
                <th scope="col" >Price</th>
                <th scope="col" className="text-center">Quantity</th>
                <th scope="col" >Subtotal</th>
                <th scope="col" className="text-center"></th>
            </tr>
            
        </thead>
        <tbody>
            <tr>
                <td>
                    <img src="assets/img/sauna package.png" style={{width:'100px', height: '50px'}} className="align-self-center"/>
                </td>
                <td>Sauna Package gift card</td>
                <td>₱500.00</td>
                <td>
                    <div className="input-group mb-3 align-center  mt-auto">
                        <span className="input-group-text">-</span>
                        <input type="number" className="text-center form-control" placeholder="2" style={{width:'35px'}}/>
                        <span className="input-group-text">+</span>
                    </div>
                </td>
                <td>₱1000.00</td>
                <td><button className="btn rounded-0"><i className="bi bi-trash3-fill" style={{color:'#073418'}}></i></button></td>
              </tr>
              <tr>
                <td colspan="6" className="text-end"><button className="btn btn-sm shadow text-uppercase disabled" style={{backgroundColor: '#A2DBB7', fontFamily: 'Poppins', fontFamily:'sans serif'}}>Remove all</button></td>
            </tr>
            </tbody>
        </table>
              {/* </tr> -->
        </tbody>
        </table>
        <br><br>
    </div>
    
    <!-- <div className="container border shadow-sm p-1">
        <p className="text-center fw-bold">Your cart is empty! Add some items to checkout.</p>
    </div><br> --> */}
    </div>
    <hr/>
    <div className="container-fluid">
        <div className="row">
            <div className="col ms-3">                
                <label>Special Instructions to the Seller:</label><br/>
                <textarea className="border shadow-sm p-1" rows="5" cols="45" style={{resize:'none'}}></textarea>
            </div>
            <div className="col">
                <br/>
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
                                Total
                            </th>
                            <th id="totalPrice">₱0.00</th>
                        </tr>
                            <tr className="text-end">
                            <td colspan="2"><a href="CheckOut.html" role="button" className="btn btn-sm shadow text-uppercase" style={{backgroundColor: '#A2DBB7', fontFamily: 'Poppins', fontFamily: 'sans serif'}}>Proceed to checkout</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div><br/>
    <div className="container-fluid"></div>    
    <br/>
    <br/>
    <br/>
    {/* <!--Item Suggestions--> */}
    <div className="container d-sm-block text-center">
        <p className="h4" style={{background: 'rgba(0, 0, 0, 0.1)'}}>Items you might like</p>
        <div className="row g-2">
            <div className="col-12 col-lg-3 col-md-3">
                <div className="card p-0 h-100 overflow-auto" style={{color:'#073418'}}> 
                    <img src="img/Ulam.png" className="card-img img-thumbnail"/>                       
                    <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                  
                        <h5 className="card-title">Ulam Bundles</h5>
                        <a href="BestSellers.html#UlamBundles" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
                <div className="card p-0 h-100 overflow-auto" style={{color:'#073418'}}> 
                    <img src="img/fruitBasket.jpg" className="card-img img-thumbnail"/>                       
                    <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                    
                        <h5 className="card-title" >Fruits Basket</h5>
                        <a href="BestSellers.html#FBContent" className="btn mt-auto" style={{backgroundColor: '#A2DBB7'}}>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
                <div className="card p-0 h-100 overflow-auto" style={{color: '#073418'}}> 
                    <img src="img/salad.jpg" className="card-img img-thumbnail"/>                       
                    <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                   
                        <h5 className="card-title">Salad Set</h5>
                        <a href="BestSellers.html#SaladSet" className="btn mt-auto" style={{backgroundColor: '#A2DBB7'}}>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
                <div className="card p-0 h-100 overflow-auto" style={{color: '#073418'}}> 
                    <img src="img/pantry.png" className="card-img img-thumbnail"/>                       
                    <div className="card-body d-flex flex-column" style={{background: 'rgba(0, 0, 0, 0.1)'}}>                 
                        <h5 className="card-title">Pantry Essentials</h5>
                        <a href="BestSellers.html#Pantry" className="btn mt-auto" style={{backgroundColor:'#A2DBB7'}}>Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!--End of Shopping Cart section--> */}
<br/>

{/* <!--Modal--> */}
<div className="modal fade" id="confirmCO" tabindex="-1">
    <div className="modal-dialog"> 
    {/* <!--dialog box--> */}
        <div className="modal-content">
        {/* <!--start of modal header--> */}
        <div className="modal-header">
            <h5 className="modal-title text-center" id="modalTitle">
                Confirm Check-out</h5>
                <button className="btn-close" 
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="close">
                </button>  
                {/* <!--X button sa dialog box--> */}
        </div>
        {/* <!--End of modal header--> */}

        {/* <!--start of modal body--> */}
        <div className="modal-body">
            <p >Already have an account? <a href="Login.html">Log in here</a></p>
            <br/>
            <p Want to create an account> <a href="CustRegistration.html">Register here</a></p> 
            <br/>
            <p>If you'd like to proceed to check-out without an account click Proceed.</p>
            
            <a href="CheckOut.html" className="text-end m-auto p-3"><button className="btn"
                    style={{backgroundColor: '#A2DBB7', borderRadius: '5px', boxShadow: '5px 5px grey'}}>
                    Proceed
            </button></a>
        </div>
         {/* <!--End of modal body--> */}
        </div>
    </div>
</div>

{/* <!-- scroll to top button --> */}
<button onclick="backToTop()" id="scrollUp"><i className="bi bi-arrow-up"></i></button>


        </div>
    )
}