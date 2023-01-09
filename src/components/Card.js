import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Card(prop){
    
    const [quantity, setQuantity] = useState(1);
    const decQuantity =() =>{
        if(quantity > 0) {
        setQuantity(prevCount => prevCount - 1);
        }
    }

    const incQuantity =() =>{
        setQuantity(prevCount => prevCount + 1);
    }

    const [itemOrder, setItemOrder] = useState();
    const [orderQty, setOrderQty] = useState();
    const [itemPrice, setItemPrice] = useState();
    
    const [cart, setCart] = useState([]);
    let orderAmount;
    function setOrderAmount() {
        orderAmount = itemOrder * orderQty;
    }

    useEffect(() => {
        const url = 'http://localhost/farmersHub/db.php';
        axios.get(url).then((response)=>{
            setCart(response.data);
            console.log(cart);
        })
    }, [])


    function addToCart(e) {
        e.preventDefault();
        setItemOrder(e.title);
        setOrderQty(quantity);
        setItemPrice(e.Price);
        
        let getData = new FormData();
        getData.append('item_name', itemOrder);
        getData.append('quantity', orderQty);
        getData.append('unit_price', itemPrice);
        getData.append('orderAmount', orderAmount);
        getData.append('function', 'insert');
        console.log(itemOrder);
        axios({
            method: 'POST',
            url: 'http://localhost/farmersHub/db.php',
            data: getData,
            config: 'Content-Type="multipart/form-data"'
        }).then(function(response) {
            const url = 'http://localhost/farmersHub/db.php';
            axios.get(url).then((response)=> {
                setCart(response.data);
                console.log(cart);
            })
        }).catch(function(error){
            alert("error!");
        });
        setOrderAmount('');
    }

    return(
        <section>
            <div className="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                <div className="inner">
                    <img src={prop.img} alt={prop.alt} className="card-img" style={{borderRadius: '1rem'}}/> 
                </div>
                <form>
                <div className="card-body text-center">   
                    <h5 className="card-title fw-bold text-center" id={prop.title} name="item_name">{prop.title}</h5>
                    <p className="card-text" id={prop.textId}>{prop.text}</p>
                    <p id={prop.Price} name="unit_price">₱{prop.Price}</p>
                </div>
                <div className="card-footer d-flex flex-column justify-content-between">
                    <div className="input-group mb-3 align-center  mt-auto"  >
                        <span className="input-group-text" onClick={decQuantity}>-</span>
                        <div className="form-control text-center" id={quantity} name="quantity">{quantity}</div>
                        <span className="input-group-text" onClick={incQuantity}>+</span>
                    </div><br/>     
                    <button className="btn btn-sm" style={{backgroundColor: '#A2DBB7', borderRadius:'5px', boxShadow:'5px 5px grey'}}><i className="bi bi-cart4" style={{fontSize:'20px'}} onClick={()=>addToCart(prop)}></i> &nbsp;  Add to Cart</button>
                </div>   
                </form>           
            </div>
        </section>
    )
}
export default Card;