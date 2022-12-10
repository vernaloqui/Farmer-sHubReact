import { Link } from 'react-router-dom';
import logo from './img/logo.png';
function Navbar(){
    // let cart = {
    // };
    const toggleCart = function(){
        let cartContainer = document.getElementById("cartBox");
    
        cartContainer.classList.toggle("active");
       
    //    displayCartItems();
   }
    return(
        <div >
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="rounded-circle border border-2" style={{width:"75px"}} alt='...'/>
            </Link>
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
                        <Link className="nav-link" to="/produce" style={{color:'#073418'}}>Farm Produce</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"  style={{color:'#073418'}}>My Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" style={{color:'#073418'}}>About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/help"  style={{color:'#073418'}}>Help</Link>
                    </li>
                </ul>
            </div>
            <form className="searchCart d-flex ms-auto" role="search">
                <input type="text" id="userInput" className="form-control" placeholder="Search" aria-label="search"/>
                <button type="submit" className="btn btn-outline" style={{backgroundColor:'#073418',color:'#A2DBB7'}}>Search</button>
            </form>  
             
            <div className="cartNav px-2 justify-content-center me-3" style={{float:'right'}}>
                <div className="cartCounter"></div>
                    <button className="nav-link"   style={{color:'#073418', backgroundColor:'Transparent', backgroundRepeat:'no-repeat', border: 'none',cursor:'pointer', overflow: 'hidden', outline:'none'}} onClick={toggleCart}>
                    <i className="bi bi-cart4" style={{fontSize:'30px'}}></i></button>
                {/* <!--Start of Shopping Cart section--> */}
                <div className="shoppingCartContainer" id="cartBox" style={{display:'hidden'}}>
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
                    <button type="submit" className="btn btn-sm text-uppercase" style={{backgroundColor: '#073418', color:'#A2DBB7'}}><a href="CheckOut.html" style={{textDecoration:'none', color:'#A2DBB7'}}>Checkout</a></button>
                    <button className="btn btn-sm shadow text-uppercase" style={{backgroundColor: '#073418', color:'#A2DBB7'}} >Remove all</button>
                    <p id="cartEmpty" style={{display:'none'}}>Your cart is empty.</p>                        
                </div>
            </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;