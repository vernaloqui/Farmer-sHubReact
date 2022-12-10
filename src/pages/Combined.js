function Produce(){
    return(
        <section>
            <div class="container-fluid d-flex m-auto p-0">
                <img src={"./img/fruitsPage.png"} alt="banner" class="d-block w-100"/>
            </div><br></br>

            <!--Start of Products Gallery-->
<div class="productField container-fluid">

<!--Start of Vegetables Gallery-->
<div class="Vegetables">
<div class="row g-2 m-1 d-flex justify-content-center">
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/papaya.jpg" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="papaya">Papaya Green </p>
            <p class="h6 fw-bold"> per pc</p>
            <p class="card-text" style="font-size:15px;" id="papayaPrice">₱67.5</p>
        </div>      
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                <span class="input-group-text" onclick="Papaya.value = decQuantity(Papaya)">-</span>
                <input type="number" id="Papaya" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Papaya.value = incQuantity(Papaya)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(papaya, Papaya.value, papayaPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>  
    </div>
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/patola.jpg" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="Patola">Patola </p>
            <p class="h6 fw-bold"> per pc</p>
            <p class="card-text" style="font-size:15px;" id="PatolaPrice">₱67.5</p>
        </div>  
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="patola.value = decQuantity(patola)">-</span>
                <input type="number" id="patola" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="patola.value = incQuantity(patola)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Patola, patola.value, PatolaPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>     
    </div>       
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/pechay.jpg" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="Pechay">Pechay </p>
            <p class="h6 fw-bold"> per 250 g</p>
            <p class="card-text" style="font-size:15px;" id="PechayPrice">₱37.5</p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="pechay.value = decQuantity(pechay)">-</span>
                <input type="number" id="pechay" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="pechay.value = incQuantity(pechay)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Pechay, pechay.value, PechayPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>    
    </div>       
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/pechay baguio.jpg" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="PechayB">Pechay Baguio </p>
            <p class="h6 fw-bold"> per kg</p>
            <p class="card-text" style="font-size:15px;" id="PechayBPrice">₱99.00</p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="pechayB.value = decQuantity(pechayB)">-</span>
                <input type="number" id="pechayB" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="pechayB.value = incQuantity(pechayB)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(PechayB, pechayB.value, PechayBPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>
    </div>   
</div>

<!--Start of 2nd row of products gallery-->
<div class="row g-2 m-1 justify-content-center">
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/lage potato.jpg" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="Potato">Potato Large </p>
        <p class="h6 fw-bold"> per 500kg</p>
        <p class="card-text" style="font-size:15px;" id="PotatoPrice">₱65.00</p>
    </div>      
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
            <span class="input-group-text" onclick="potato.value = decQuantity(potato)">-</span>
            <input type="number" id="potato" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
            <span class="input-group-text" onclick="potato.value = incQuantity(potato)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Potato, potato.value, PotatoPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>  
</div>
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/medium potato.jpg" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="PotatoM">Potato medium </p>
        <p class="h6 fw-bold"> per 500 kg</p>
        <p class="card-text" style="font-size:15px;" id="PotatoMPrice">₱65.00</p>
    </div>  
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="potatoM.value = decQuantity(potatoM)">-</span>
            <input type="number" id="potatoM" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
            <span class="input-group-text" onclick="potatoM.value = incQuantity(potatoM)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(PotatoM, potatoM.value, PotatoMPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>     
</div>       
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/potato marballs.jpg" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="MarblePotato">Potato marble </p>
        <p class="h6 fw-bold"> per 500kg</p>
        <p class="card-text" style="font-size:15px;" id="MarblePotatoPrice">₱52.00</p>
    </div>
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="marblePotato.value = decQuantity(marblePotato)">-</span>
            <input type="number" id="marblePotato" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
            <span class="input-group-text" onclick="marblePotato.value = incQuantity(marblePotato)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(MarblePotato, marblePotato.value, MarblePotatoPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>    
</div>       
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/radish.jpg" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="Radish">Radish </p>
        <p class="h6 fw-bold"> per kg</p>
        <p class="card-text" style="font-size:15px;" id="RadishPrice">₱59.00</p>
    </div>
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="radish.value = decQuantity(radish)">-</span>
            <input type="number" id="radish" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
            <span class="input-group-text" onclick="radish.value = incQuantity(radish)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Radish, radish.value, RadishPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>
</div>   
</div>
<!--Start of 3rd row of Products Gallery-->
<div class="row g-2 m-1 justify-content-center">
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/saluyot.jpg" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="Saluyot">Saluyot </p>
        <p class="h6 fw-bold"> per bundle</p>
        <p class="card-text" style="font-size:15px;" id="SaluyotPrice">₱22.00</p>
    </div>      
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
            <span class="input-group-text" onclick="saluyot.value = decQuantity(saluyot)">-</span>
            <input type="number" id="saluyot" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
            <span class="input-group-text" onclick="saluyot.value = incQuantity(saluyot)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Saluyot, saluyot.value, SaluyotPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>  
</div>
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/sayote.jpg" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="sayote">Sayote </p>
        <p class="h6 fw-bold"> per 500g</p>
        <p class="card-text" style="font-size:15px;" id="sayotePrice">₱35.00</p>
    </div>  
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="Sayote.value = decQuantity(Sayote)">-</span>
            <input type="number" id="Sayote" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
            <span class="input-group-text" onclick="Sayote.value = incQuantity(Sayote)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(sayote, Sayote.value, sayotePrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>     
</div>       
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/sigarilyas.jpg" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="sigarilyas">Sigarilyas </p>
        <p class="h6 fw-bold"> per 250 g</p>
        <p class="card-text" style="font-size:15px;" id="sigarilyasPrice">₱85.00</p>
    </div>
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="Sigarilyas.value = decQuantity(Sigarilyas)">-</span>
            <input type="number" id="Sigarilyas" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
            <span class="input-group-text" onclick="Sigarilyas.value = incQuantity(Sigarilyas)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(sigarilyas, Sigarilyas.value, sigarilyasPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>    
</div>       
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/sili labuyo.jpg" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="labuyo">Sili Labuyo </p>
        <p class="h6 fw-bold"> per 100 g</p>
        <p class="card-text" style="font-size:15px;" id="labuyoPrice">₱54.5</p>
    </div>
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="Labuyo.value = decQuantity(Labuyo)">-</span>
            <input type="number" id="Labuyo" class="form-control text-center bg-white" value="1" min="0" placeholder="1">
            <span class="input-group-text" onclick="Labuyo.value = incQuantity(Labuyo)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(labuyo, Labuyo.value, labuyoPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>
</div>   
</div>
</div>
<!--End of Vegetables Gallery-->
<div class="Fruits">
<!--Start of Fruits Gallery-->
    <div class="row g-2 m-1 d-flex justify-content-center">
        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div class="inner">
                <img src="img/atis.jpg" class="card-img-top itemImage">
            </div>
            <div class="card-body  text-center">
                <p class="h6 fw-bold" class="card-title" id="atis">Atis</p>
                <p class="h6 fw-bold">per kg</p>
                <p class="card-text" style="font-size:15px;" id="atisPrice">₱100.00</p>
            </div>      
            <div class="card-footer d-flex flex-column justify-content-between">
                <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                    <span class="input-group-text" onclick="Atis.value = decQuantity(Atis)">-</span>
                    <input type="number" id="Atis"  class="form-control text-center bg-white" min="0" placeholder="1" value="1">
                    <span class="input-group-text" onclick="Atis.value = incQuantity(Atis)">+</span>
                </div><br>     
                <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(atis, Atis.value, atisPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
            </div>  
        </div>
        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div class="inner">
                <img src="img/avocado.png" class="card-img-top">
            </div>
            <div class="card-body  text-center">
                <p class="h6 fw-bold" class="card-title" id="avocado">Avocado</p>
                <p class="h6 fw-bold">per kg</p>
                <p class="card-text" style="font-size:15px;" id="avocadoPrice">₱65.00</p>
            </div>  
            <div class="card-footer d-flex flex-column justify-content-between">
                <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span class="input-group-text" onclick="Avocado.value = decQuantity(Avocado)">-</span>
                    <input type="text" id="Avocado"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                    <span class="input-group-text" onclick="Avocado.value = incQuantity(Avocado)">+</span>
                </div><br>     
                <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(avocado, Avocado.value, avocadoPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
            </div>     
        </div>       
        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div class="inner">
                <img src="img/banana.png" class="card-img-top">
            </div>
            <div class="card-body  text-center">
                <p class="h6 fw-bold" class="card-title" id="lacatan">Banana Lacatan</p>
                <p class="h6 fw-bold">per bundle</p>
                <p class="card-text" style="font-size:15px;" id="lacatanPrice">₱175.00</p>
            </div>
            <div class="card-footer d-flex flex-column justify-content-between">
                <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span class="input-group-text" onclick="Lacatan.value = decQuantity(Lacatan)">-</span>
                    <input type="number" id="Lacatan"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                    <span class="input-group-text" onclick="Lacatan.value = incQuantity(Lacatan)">+</span>
                </div><br>     
                <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(lacatan, Lacatan.value, lacatanPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
            </div>    
        </div>       
        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
            <div class="inner">
                <img src="img/latundan.png" class="card-img-top">
            </div>
            <div class="card-body  text-center">
                <p class="h6 fw-bold" class="card-title" id="latundan">Banana Latundan</p>
                <p class="h6 fw-bold">per kg</p>
                <p class="card-text" style="font-size:15px;" id="latundanPrice">₱30.00</p>
            </div>
            <div class="card-footer d-flex flex-column justify-content-between">
                <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span class="input-group-text" onclick="Latundan.value = decQuantity(Latundan)">-</span>
                    <input type="number" id="Latundan"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                    <span class="input-group-text" onclick="Latundan.value = incQuantity(Latundan)">+</span>
                </div><br>     
                <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(latundan, Latundan.value, latundanPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
            </div>
        </div>   
    </div>

<!--Start of 2nd row of products gallery-->
<div class="row g-2 m-1 justify-content-center">
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/senyorita.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="senorita">Banana Senorita</p>
            <p class="h6 fw-bold">per kg</p>
            <p class="card-text" style="font-size:15px;" id="senoritaPrice">₱30.00</p>
        </div>      
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                <span class="input-group-text" onclick="Senorita.value = decQuantity(Senorita)">-</span>
                <input type="number" id="Senorita"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Senorita.value = incQuantity(Senorita)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(senorita, Senorita.value, senoritaPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>  
    </div>
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/buko.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="buko">Buko</p>
            <p class="h6 fw-bold">per pc</p>
            <p class="card-text" style="font-size:15px;" id="bukoPrice">₱35.00</p>
        </div>  
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Buko.value = decQuantity(Buko)">-</span>
                <input type="text" id="Buko"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Buko.value = incQuantity(Buko)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(buko, Buko.value, bukoPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>     
    </div>       
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/calamansi.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="calamansi">Calamansi</p>
            <p class="h6 fw-bold"> per kg</p>
            <p class="card-text" style="font-size:15px;" id="calamansiPrice">₱65.00</p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Calamansi.value = decQuantity(Calamansi)">-</span>
                <input type="number" id="Calamansi"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Calamansi.value = incQuantity(Calamansi)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(calamansi, Calamansi.value, calamansiPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>    
    </div>       
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/chico.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="chico">Chico</p>
            <p class="h6 fw-bold"> per kg</p>
            <p class="card-text" style="font-size:15px;" id="chicoPrice">₱53.00</p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Chico.value = decQuantity(Chico)">-</span>
                <input type="text" id="Chico"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Chico.value = incQuantity(Chico)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(chico, Chico.value, chicoPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>
    </div>   
</div>
<!--Start of 3rd row of Products Gallery-->
<div class="row g-2 m-1 justify-content-center">
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/corn.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="corn">Corn</p>
            <p class="h6 fw-bold"> per kg</p>
            <p class="card-text" style="font-size:15px;" id="cornPrice">₱20.00</p>
        </div>      
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                <span class="input-group-text" onclick="Corn.value = decQuantity(Corn)">-</span>
                <input type="number" id="Corn"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Corn.value = incQuantity(Corn)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(corn, Corn.value, cornPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>  
    </div>
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/pipino.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="cucumber">Cucumber</p>
            <p class="h6 fw-bold"> per kg</p>
            <p class="card-text" style="font-size:15px;" id="cucumberPrice">₱50.00</p>
        </div>  
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Cucumber.value = decQuantity(Cucumber)">-</span>
                <input type="text" id="Cucumber"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Cucumber.value = incQuantity(Cucumber)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(cucumber, Cucumber.value, cucumberPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>     
    </div>       
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/dandan.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="dalandan">Dalandan</p>
            <p class="h6 fw-bold"> per kg</p>
            <p class="card-text" style="font-size:15px;" id="dalandanPrice">₱45.00</p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Dalandan.value = decQuantity(Dalandan)">-</span>
                <input type="number" id="Dalandan"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Dalandan.value = incQuantity(Dalandan)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(dalandan, Dalandan.value, dalandanPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>    
    </div>       
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/dragon.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="dragon">Dragon fruit</p>
            <p class="h6 fw-bold"> per kg</p>
            <p class="card-text" style="font-size:15px;" id="dragonPrice">₱100.00</p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Dragon.value = decQuantity(Dragon)">-</span>
                <input type="text" id="Dragon"  class="form-control text-center bg-white" value="1" min="0" placeholder="1">
                <span class="input-group-text" onclick="Dragon.value = incQuantity(Dragon)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(dragon, Dragon.value, dragonPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>
    </div>   
</div>
</div>
<!--End of Fruits Gallery-->
<div class="Spices">
<!--Start of Spices Gallery-->
<div class="row g-2 m-1 d-flex justify-content-center">
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/basil.png" class="card-img-top w-100">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="basil">Basil </p>
            <p>per 250g</p>
            <p class="card-text" style="font-size:15px;" id="basilPrice">₱27.50</p>
        </div>      
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
                <span class="input-group-text" onclick="Basil.value = decQuantity(Basil)">-</span>
                <input type="text" id="Basil" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
                <span class="input-group-text" onclick="Basil.value = incQuantity(Basil)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"onclick="addToCart(basil, Basil.value, basilPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>  
    </div>
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/chives.png" class="card-img-top w-100" style="height:200px; object-fit: cover;">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="chives">Chives</p>
            <p>per 50g</p>
            <p class="card-text" style="font-size:15px;" id="chivesPrice">₱32.00</p>
        </div>  
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Chives.value = decQuantity(Chives)">-</span>
                <input type="text" id="Chives" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
                <span class="input-group-text" onclick="Chives.value = incQuantity(Chives)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(chives, Chives.value, chivesPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>     
    </div>       
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/cilantro.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="cilantro">Cilantro</p>
            <p>per 50g</p>
            <p class="card-text" style="font-size:15px;" id="cilantroPrice">₱45.00</p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Cilantro.value = decQuantity(Cilantro)">-</span>
                <input type="text" id="Cilantro" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
                <span class="input-group-text" onclick="Cilantro.value = incQuantity(Cilantro)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(cilantro, Cilantro.value, cilantroPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>    
    </div>       
    <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
        <div class="inner">
            <img src="img/laurel.png" class="card-img-top">
        </div>
        <div class="card-body  text-center">
            <p class="h6 fw-bold" class="card-title" id="laurel">Laurel </p>
            <p>per pack</p>
            <p class="card-text" style="font-size:15px;" id="laurelPrice">₱15.00</p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-between">
            <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                <span class="input-group-text" onclick="Laurel.value = decQuantity(Laurel)">-</span>
                <input type="text" id="Laurel" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
                <span class="input-group-text" onclick="Laurel.value = incQuantity(Laurel)">+</span>
            </div><br>     
            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(laurel, Laurel.value, laurelPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
        </div>
    </div>   
</div>

<!--Start of 2nd row of products gallery-->
<div class="row g-2 m-1 justify-content-center">
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/himalayan.png" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="himalayan">Himalayan Salt </p>
        <p>per 200g</p>
        <p class="card-text" style="font-size:15px;" id="himalayanPrice">₱225.00</p>
    </div>      
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
            <span class="input-group-text" onclick="Himalayan.value = decQuantity(Himalayan)">-</span>
            <input type="text" id="Himalayan" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
            <span class="input-group-text" onclick="Himalayan.value = incQuantity(Himalayan)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(himalayan, Himalayan.value, himalayanPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>  
</div>
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/mint.png" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="mint">Mint leaves </p>
        <p>per 50g</p>
        <p class="card-text" style="font-size:15px;" id="mintPrice">₱35.00</p>
    </div>  
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="Mint.value = decQuantity(Mint)">-</span>
            <input type="text" id="Mint" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
            <span class="input-group-text" onclick="Mint.value = incQuantity(Mint)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(mint, Mint.value, mintPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>     
</div>       
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/honey.png" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="honey">Pure Honey </p>
        <p>per 1L bottle</p>
        <p class="card-text" style="font-size:15px;" id="honeyPrice">₱250.00</p>
    </div>
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="Honey.value = decQuantity(Honey)">-</span>
            <input type="text" id="Honey" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
            <span class="input-group-text" onclick="Honey.value = incQuantity(Honey)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(honey, Honey.value, honeyPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>    
</div>       
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/roack sesalt.png" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="seasalt">Sea Salt</p>
        <p>per kg</p>
        <p class="card-text" style="font-size:15px;" id="seasaltPrice">₱65.00</p>
    </div>
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="SeaSalt.value = decQuantity(SeaSalt)">-</span>
            <input type="text" id="SeaSalt" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
            <span class="input-group-text" onclick="SeaSalt.value = incQuantity(SeaSalt)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(seasalt, SeaSalt.value, seasaltPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>
</div>   
</div>
<!--Start of 3rd row of Products Gallery-->
<div class="row g-2 m-1 justify-content-center">
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/star.png" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="anise">Star Anise
        <p>per 50g</p>
        <p class="card-text" style="font-size:15px;" id="anisePrice">₱35.00</p>
    </div>      
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm input-group-sm mb-3 align-center  mt-auto d-flex">
            <span class="input-group-text" onclick="Anise.value = decQuantity(Anise)">-</span>
            <input type="text" id="Anise" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
            <span class="input-group-text" onclick="Anise.value = incQuantity(Anise)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(anise, Anise.value, anisePrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>  
</div>
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/salay.png" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="tanglad">Tanglad
        <p class="h6 fw-bold">per 50g</p>
        <p class="card-text" style="font-size:15px;" id="tangladPrice">₱12.00</p>
    </div>  
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="Tanglad.value = decQuantity(Tanglad)">-</span>
            <input type="text" id="Tanglad" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
            <span class="input-group-text" onclick="Tanglad.value = incQuantity(Tanglad)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(tanglad, Tanglad.value, tangladPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>     
</div>       
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/turmeric.png" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="turmeric">Turmeric Powder
        <p class="h6 fw-bold">per 50g</p>
        <p class="card-text" style="font-size:15px;" id="turmericPrice">₱49.00</p>
    </div>
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="Turmeric.value = decQuantity(Turmeric)">-</span>
            <input type="text" id="Turmeric" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
            <span class="input-group-text" onclick="Turmeric.value = incQuantity(Turmeric)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(turmeric, Turmeric.value, turmericPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>    
</div>       
<div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
    <div class="inner">
        <img src="img/pepp.png" class="card-img-top">
    </div>
    <div class="card-body  text-center">
        <p class="h6 fw-bold" class="card-title" id="peppercorn">Pamintang Buo
        <p class="h6 fw-bold">per 500g</p>
        <p class="card-text" style="font-size:15px;" id="peppercornPrice">₱65.00</p>
    </div>
    <div class="card-footer d-flex flex-column justify-content-between">
        <div class="input-group input-group-sm mb-3 align-center  mt-auto">
            <span class="input-group-text" onclick="Peppercorn.value = decQuantity(Peppercorn)">-</span>
            <input type="text" id="Peppercorn" value="1" class="form-control text-center bg-white" min="0" placeholder="1">
            <span class="input-group-text" onclick="Peppercorn.value = incQuantity(Peppercorn)">+</span>
        </div><br>     
        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(peppercorn, Peppercorn.value, peppercornPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
    </div>
</div>   
</div>
</div>
<!--End of Spices Gallery-->

<!--Start of Best Sellers-->
<div class="Best">
<!--start of Nav Tabs-->
<!--Nav Tabs-->
<div class="container-fluid mt-2">
    <ul class="nav nav-tabs nav-justified flex-column flex-sm-row">
        <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" aria-current="page" href="#UlamBundles">Ulam Bundles</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#FruitsBasket">Fruits Basket</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#SaladSet">Salad Set</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#Pantry">Pantry Essentials</a>
        </li>
    </ul>
    <div class="tab-content">
        <!--Ulam Bundles Tab-->
        <div class="tab-pane active" id="UlamBundles">
            <h3 class="mb-3 text-center">Ulam Bundles</h3>
            <p class="text-center">The Ulam Bundle has all the fresh vegetables, leafy greens and rekados (ginger, tomato, onion, garlic) you need for one ulam, to serve your family or friends. Sulit and convenient.</p>
            <p class="fst-italic text-center">*meats not included</p>
            <div class="row g-2 m-1 d-flex justify-content-center">
                <div class="col-12 col-md-6 col-lg-3 m-2 card shadow card shadow">
                <div class="inner">
                    <img src="img/pinakbet.jpg" class="card-img img-thumbnail"> 
                </div>
                    <div class="card-body text-center">   
                    <h5 class="card-title" style="background: rgba(0, 0, 0, 0.1);" id="pakbet">Pakbet</h5>
                    <p class="card-text" id="pakbetPrice">₱35.00</p>
                    </div>
                    <div class="card-footer d-flex flex-column justify-content-between">
                            <div class="input-group mb-3 align-center  mt-auto"  >
                                <span class="input-group-text" onclick="pakbetQTY.value = decQuantity(pakbetQTY)">-</span>
                                <input type="number" id="pakbetQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                                <span class="input-group-text" onclick="pakbetQTY.value = incQuantity(pakbetQTY)">+</span>
                            </div><br>     
                            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(pakbet, pakbetQTY.value, pakbetPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div> 
                </div>
                <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                    <div class="inner">
                        <img src="img/chopseuy.jpg" class="card-img img-thumbnail"> 
                    </div>
                    <div class="card-body text-center">   
                        <h5 class="card-title" style="background: rgba(0, 0, 0, 0.1);" id="chopseuy">Chop Seuy</h5>  
                        <p class="card-text" id="chopseuyPrice">₱35.00</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="chopQTY.value = decQuantity(chopQTY)">-</span>
                            <input type="number" id="chopQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="chopQTY.value = incQuantity(chopQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(chopseuy, chopQTY.value, chopseuyPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>    
                </div>
                <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                    <div class="inner">
                        <img src="img/gabi.jpg" class="card-img img-thumbnail"> 
                    </div>
                    <div class="card-body text-center">   
                        <h5 class="card-title" style="background: rgba(0, 0, 0, 0.1);" id="sigangGabi">Sinigang with Gabi</h5>                 
                        <p class="card-text" id="sigangGabiPrice">₱50.00</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="sGabiQTY.value = decQuantity(sGabiQTY)">-</span>
                            <input type="number" id="sGabiQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="sGabiQTY.value = incQuantity(sGabiQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(sigangGabi, sGabiQTY.value, sigangGabiPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>  
                </div>
                <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                    <div class="inner">
                        <img src="img/shrimp.jpg" class="card-img img-thumbnail"> 
                    </div>
                    <div class="card-body text-center">   
                        <h5 class="card-title" style="background: rgba(0, 0, 0, 0.1);" id="Sigang">Seafood Sinigang</h5>
                        <p class="card-text" id="SigangPrice">₱50.00</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text"onclick="sigangQTY.value = incQuantity(sigangQTY)">-</span>
                            <input type="number" id="sigangQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="sigangQTY.value = incQuantity(sigangQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Sigang, sigangQTY.value, SigangPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>  
                </div>
            </div>
            <br>
            <div class="row g-2 m-1 d-flex justify-content-center">
                
                <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                    <div class="inner">
                        <img src="img/karekare.jpg" class="card-img img-thumbnail">
                    </div> 
                    <div class="card-body">   
                        <h5 class="card-title text-center" style="background: rgba(0, 0, 0, 0.1);" id="Kare">Kare Kare</h5> 
                        <p class="card-text" id="KarePrice">₱50.00</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="kareQTY.value = decQuantity(kareQTY)">-</span>
                            <input type="number" id="kareQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="chopQTY.value = incQuantity(kareQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Kare, kareQTY.value, KarePrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                    <div class="inner">
                        <img src="img/monggo.jpg" class="card-img img-thumbnail"> 
                    </div>
                    <div class="card-body text-center">   
                        <h5 class="card-title" style="background: rgba(0, 0, 0, 0.1);" id="Munggo">Monggo</h5> 
                        <p class="card-text" id="MunggoPrice">₱40.00</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="munggoQTY.value = decQuantity(munggoQTY)">-</span>
                            <input type="number" id="munggoQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="munggoQTY.value = incQuantity(munggoQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Munggo, munggoQTY.value, MunggoPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                    <div class="inner">
                        <img src="img/misua.jpg" class="card-img img-thumbnail">
                    </div>
                    <div class="card-body  text-center">   
                        <h5 class="card-title" style="background: rgba(0, 0, 0, 0.1);" id="miswa">Miswa</h5>
                        <p class="card-text" id="miswaPrice">₱30.00</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="miswaQTY.value = decQuantity(miswaQTY)">-</span>
                            <input type="number" id="miswaQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="miswaQTY.value = incQuantity(miswaQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(miswa, miswaQTY.value, miswaPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                    <div class="inner">
                        <img src="img/nilaga.jpg" class="card-img img-thumbnail">
                    </div> 
                    <div class="card-body text-center">   
                        <h5 class="card-title" style="background: rgba(0, 0, 0, 0.1);" id="Laga">Nilaga or Bulalo</h5> 
                        <p class="card-text" id="LagaPrice">₱70.00</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="lagaQTY.value = decQuantity(lagaQTY)">-</span>
                            <input type="number" id="lagaQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="lagaQTY.value = incQuantity(lagaQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(Laga, lagaQTY.value, LagaPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

<!--Start of Fruits Basket Tab-->
<div class="tab-pane" id="FruitsBasket">
    <h3 class="mb-3 text-center">Fruits Basket</h3>
    <p class="text-center">Select the content of your own basket of delicious fruits. You can give it as a gift to your loved ones or to yourself.</p>
<!--Accordion-->
<div class="accordion accordion-flush" id="AccordionBasket">

    <div class="accordion-item">
        <h2 class="accordion-header" id="FruitsHeading">
            <button class="accordion-button collapsed" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#FruitsBody"
                    aria-expanded="true"
                    aria-controls="FruitsBody">
                    1. Choose your basket size
            </button>
        </h2>
        
        <div class="accordion-collapse collapse"
            id="FruitsBody"
            aria-labelledby="#FruitsHeading"
            data-bs-parent="#AccordionBasket">
            <div class="accordion-body">
                <div class="row g-2 mx-auto d-flex justify-content-center">
                    <div class="col-12 col-md-4 col-lg-4 m-2 card">
                        <img src="img/small.jpg" class="card-image">
                        <div class="card-body  text-center ">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Basket" id="smallBasket" checked>
                                <label class="form-check-label" for="smallBasket">
                                    Small
                                </label>
                                <p id="smallPrice">₱299.00</p>
                            </div>
                        </div>    
                    </div>   
                    <div class="col-12 col-md-4 col-lg-4 m-2 card">
                        <img src="img/meduim.jpg" class="card-image">
                        <div class="card-body  text-center ">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Basket" id="medBasket">
                                <label class="form-check-label" for="medBasket">
                                    Medium
                                </label>
                                <p id="mediumPrice">₱399.00</p>        
                            </div>
                        </div>    
                    </div>   
                    <div class="col-12 col-md-4 col-lg-4 m-2 card">
                        <img src="img/large.jpg" class="card-image">
                        <div class="card-body  text-center ">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Basket" id="largeBasket">
                                <label class="form-check-label" for="largeBasket">
                                    Large
                                </label>
                                <p id="largePrice">₱599.00</p>       
                            </div>
                        </div>    
                    </div>     
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="Fruits2Heading">
            <button class="accordion-button collapsed" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Fruits2Body"
                    aria-expanded="true"
                    aria-controls="Fruits2Body">
                    2. Choose the contents of your basket
            </button>
        </h2>
        <div class="accordion-collapse collapse"
                id="Fruits2Body"
                aria-labelledby="#Fruits2Heading"
                data-bs-parent="#AccordionBasket">
                <div class="accordion-body container">
                    <div class="container text-center">
                            <p>Small: 7 pcs    </p>
                            <p>Medium: 10 pcs</p>
                            <p>Large: 15 pcs</p>
                    </div>
                    <div class="row g-2 m-1 d-flex justify-content-center">
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/pineapple.png" style="border-radius: 1rem;">
                            </div>   
                            <p class="card-title fw-bold text-center">Pineapple</p>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="pineappleQty.value = decQuantity(pineappleQty)">-</span>
                                    <input type="number" id="pineappleQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="pineappleQty.value = incQuantity(pineappleQty)">+</span>
                                </div> 
                            </div><br>    
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/avocado.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Avocado</p>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="avoQty.value = decQuantity(avoQty)">-</span>
                                    <input type="number" id="avoQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="avoQty.value = incQuantity(avoQty)">+</span>
                                </div> 
                            </div><br>   
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/apple.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Apple</p>   
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="appleQty.value = decQuantity(appleQty)">-</span>
                                    <input type="number" id="appleQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="appleQty.value = incQuantity(appleQty)">+</span>
                                </div> 
                            </div><br>
                        </div>
                    </div>
                    <div class="row g-2 m-1 d-flex justify-content-center">
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/lemon.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Lemon</p>    
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="lemonQty.value = decQuantity(lemonQty)">-</span>
                                    <input type="number" id="lemonQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="lemonQty.value = incQuantity(lemonQty)">+</span>
                                </div> 
                            </div><br>   
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/banana.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Banana</p>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="bananaQty.value = decQuantity(bananaQty)">-</span>
                                    <input type="number" id="bananaQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="bananaQty.value = incQuantity(bananaQty)">+</span>
                                </div> 
                            </div><br>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/dragonFruit.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Dragon Fruit</p>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="dragonQty.value = decQuantity(dragonQty)">-</span>
                                    <input type="number" id="dragonQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="dragonQty.value = incQuantity(dragonQty)">+</span>
                                </div> 
                            </div><br>    
                        </div>
                    </div>
                    <div class="row g-2 m-1 d-flex justify-content-center">
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/rambutan.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Rambutan</p>    
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="rambutanQty.value = decQuantity(rambutanQty)">-</span>
                                    <input type="number" id="rambutanQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="rambutanQty.value = incQuantity(rambutanQty)">+</span>
                                </div> 
                            </div><br>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/grapes.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Grapes</p>    
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="grapesQty.value = decQuantity(grapesQty)">-</span>
                                    <input type="number" id="grapesQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="grapesQty.value = incQuantity(grapesQty)">+</span>
                                </div> 
                            </div><br>  
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/mango.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Mango</p>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="mangoQty.value = decQuantity(mangoQty)">-</span>
                                    <input type="number" id="mangoQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="mangoQty.value = incQuantity(mangoQty)">+</span>
                                </div> 
                            </div><br>
                        </div>
                    </div>
                    <div class="row g-2 m-1 d-flex justify-content-center">
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/pear.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Pear</p>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="pearQty.value = decQuantity(pearQty)">-</span>
                                    <input type="number" id="pearQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="pearQty.value = incQuantity(pearQty)">+</span>
                                </div> 
                            </div><br>   
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/papaya.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Papaya</p>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="papayaQty.value = decQuantity(papayaQty)">-</span>
                                    <input type="number" id="papayaQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="papayaQty.value = incQuantity(papayaQty)">+</span>
                                </div> 
                            </div><br>    
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ms-1 card shadow">
                            <div class="inner">
                                <img src="img/orange.png" style="border-radius: 1rem;">
                            </div>
                            <p class="card-title fw-bold text-center">Orange</p>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div class="input-group mb-3 align-center  mt-auto">
                                    <span class="input-group-text" onclick="orangeQty.value = decQuantity(orangeQty)">-</span>
                                    <input type="number" id="orangeQty"  class="form-control text-center bg-white" value="0" min="0" placeholder="0">
                                    <span class="input-group-text" onclick="orangeQty.value = incQuantity(orangeQty)">+</span>
                                </div> 
                            </div><br>    
                        </div>
                    </div>
                        <br>
                        <button class="btn btn-lg" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;"  data-bs-toggle="modal" data-bs-target="#FBasket" onclick="printFruitBasket();"><i class="bi bi-cart4"></i> Confirm basket</button>
                    
                </div> 
              
        </div>
    </div>
</div>                        
</div>
    
        
        <!--Modal-->
        <div class="modal fade" id="FBasket" tabindex="-1">
            <div class="modal-dialog"> <!--dialog box-->
                <div class="modal-content">
                <!--start of modal header-->
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="modalTitle">
                        Your Fruits Basket</h5>
                        <button class="btn-close" 
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="close">
                        </button>  <!--X button sa dialog box-->
                </div>
                <!--End of modal header-->

                <!--start of modal body-->
                <div class="modal-body">
                    <p id="basketSize">Your fruits basket size is:</p>
                    <table class="table table-striped" id="BasketTable">
                        <thead>
                            <th>Quantity</th>
                            <th>Contents</th>
                        </thead>
                        <tbody id="basketContents"></tbody>
                    </table>
                    <p class="text-end fw-bold" id="price">Total:</p>
                </div>
                <!--End of modal body-->
                <!--start of modal footer-->
                <div class="modal-footer">
                    <button class="btn"
                            type="submit" id="addCart" style="background-color:#A2DBB7; border-radius:5px; box-shadow:5px 5px grey;">
                            <i class="bi bi-cart4"></i> &nbsp;  Add to Cart 
                    </button>
                    </a>
                    <button class="btn"
                            type="button" style="background-color:#A2DBB7; border-radius:5px; box-shadow:5px 5px grey;">
                            Cancel
                    </button>
                </div>
                <!--End of modal footer-->
                </div>
            </div>
        </div>
        <!--End of Fruits Tab-->    
        
        <!--Salad Set Tab-->
        <div class="tab-pane" id="SaladSet">
            <div class="row g-0 m-1 d-flex justify-content-center">
                <h3 class="mb-3 text-center">Salad Set</h3>
                <!--Start of Carousel-->
                <center>
                
                 <div class="col-md-12 text-center">
                    <a class="btn mb-3 mr-1" href="#SaladCarousel" role="button" data-bs-slide="prev" style="background-color:#A2DBB7;"><i class="bi bi-caret-left-square-fill"></i></a>
                     <a class="btn mb-3" href="#SaladCarousel" role="button" data-bs-slide="next" style="background-color:#A2DBB7;"><i class="bi bi-caret-right-square-fill"></i></a>
                </div>
                <div class="container d-flex mt-3 mx-0 p-0">
                    <div id="SaladCarousel" class="carousel slide carousel-fade carousel-dark" data-ride="carousel">
                        <!--Images-->
                        <div class="carousel-inner w-100">
                            <div class="carousel-item active">
                                    <div class="row g-2 m-1 d-flex justify-content-center">
                                        <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                            <div class="inner"> 
                                                <img src="img/ampalayaSalad.png" class="card-img img-thumbnail m-auto" style="height: 250px;"> 
                                            </div>                      
                                            <div class="card-body">  
                                                <h5 class="card-title" id="ampSalad">Ampalaya Salad</h5>
                                                <p class="card-text">Includes a large ampalaya, tomato and red onion which is good for 2-3 persons</p>
                                                <p id="ampSaladPrice">₱100.00</p>
                                            </div> 
                                            <div class="card-footer d-flex flex-column justify-content-between">
                                                <div class="input-group mb-3 align-center  mt-auto"  >
                                                    <span class="input-group-text" onclick="ampSaladQTY.value = decQuantity(ampSaladQTY)">-</span>
                                                    <input type="number" id="ampSaladQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                                                    <span class="input-group-text" onclick="ampSaladQTY.value = incQuantity(ampSaladQTY)">+</span>
                                                </div><br>     
                                                <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(ampSalad, ampSaladQTY.value, ampSaladPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                                            </div>    
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                            <div class="inner"> 
                                                <img src="img/cucumberSalad.png" class="card-img img-thumbnail m-auto" style="height: 250px;"> 
                                            </div>                      
                                            <div class="card-body"> 
                                                <h5 class="card-title" id="cucumSalad">Cucumber Salad</h5>
                                                <p class="card-text">Includes cucumber, tomato and red onion which is good for 2-3 persons</p>
                                                <p id="cucumSaladPrice">₱100.00</p>
                                            </div> 
                                            <div class="card-footer d-flex flex-column justify-content-between">
                                                <div class="input-group mb-3 align-center  mt-auto"  >
                                                    <span class="input-group-text" onclick="cucumSaladQTY.value = decQuantity(cucumSaladQTY)">-</span>
                                                    <input type="number" id="cucumSaladQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                                                    <span class="input-group-text" onclick="cucumSaladQTY.value = incQuantity(cucumSaladQTY)">+</span>
                                                </div><br>     
                                                <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(cucumSalad, cucumSaladQTY.value, cucumSaladPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>    
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                            <div class="inner"> 
                                                <img src="img/EnsaladangTalong.png" class="card-img img-thumbnail m-auto" style="height: 250px;">  
                                            </div>                     
                                            <div class="card-body">                    
                                                <h5 class="card-title" id="talongSalad">Ensaladang Talong</h5>
                                                <p class="card-text">Includes eggplants, tomatoes, red onions which is good for 2-3 persons</p>
                                                <p id="talongSaladPrice">₱100.00</p>
                                            </div>     
                                            <div class="card-footer d-flex flex-column justify-content-between">
                                                <div class="input-group mb-3 align-center  mt-auto"  >
                                                    <span class="input-group-text" onclick="talongSaladQTY.value = decQuantity(talongSaladQTY)">-</span>
                                                    <input type="number" id="talongSaladQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                                                    <span class="input-group-text" onclick="talongSaladQTY.value = incQuantity(talongSaladQTY)">+</span>
                                                </div><br>     
                                                <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(talongSalad, talongSaladQTY.value, talongSaladPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                            <div class="inner"> 
                                                <img src="img/green-salad.jpg" class="card-img img-thumbnail m-auto" style="height: 250px;">   
                                            </div>                    
                                            <div class="card-body">                    
                                                <h5 class="card-title" id="greenSalad">Green Salad</h5>
                                                <p class="card-text">Includes red onion, tomatoes, Avocado, cucumber, and lettuce which is good for 2-3 persons</p>
                                                <p id="greenSaladPrice">₱100.00</p>
                                            </div>     
                                            <div class="card-footer d-flex flex-column justify-content-between">
                                                <div class="input-group mb-3 align-center  mt-auto"  >
                                                    <span class="input-group-text" onclick="greenSaladQTY.value = decQuantity(greenSaladQTY)">-</span>
                                                    <input type="number" id="greenSaladQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                                                    <span class="input-group-text" onclick="greenSaladQTY.value = incQuantity(greenSaladQTY)">+</span>
                                                </div><br>     
                                                <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(greenSalad, greenSaladQTY.value, greenSaladPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>    
                            </div>
                            <div class="carousel-item"> 
                                <div class="row g-2 m-1 d-flex justify-content-center">
                                        
                                    <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                        <div class="inner"> 
                                            <img src="img/lato.png" class="card-img img-thumbnail m-auto" style="height: 250px;">
                                        </div>                       
                                        <div class="card-body">                    
                                            <h5 class="card-title" id="lato">Lato (Seaweed) Salad</h5>
                                            <p class="card-text">Includes lato, red onion and tomato which is good for 2-3 persons</p>
                                            <p id="latoPrice">₱100.00</p>
                                        </div>         
                                        <div class="card-footer d-flex flex-column justify-content-between">
                                            <div class="input-group mb-3 align-center  mt-auto"  >
                                                <span class="input-group-text" onclick="latoQTY.value = decQuantity(latoQTY)">-</span>
                                                <input type="number" id="latoQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                                                <span class="input-group-text" onclick="latoQTY.value = incQuantity(latoQTY)">+</span>
                                            </div><br>     
                                            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(lato, latoQTY.value, latoPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                        <div class="inner"> 
                                            <img src="img/MangoTomatoSalad.png" class="card-img img-thumbnail m-auto" style="height: 250px;">   
                                        </div>                    
                                        <div class="card-body">                    
                                            <h5 class="card-title" id="mangoSalad">Mango Tomato Salad</h5>
                                            <p class="card-text">Includes large green mango, tomatoes, and red onion which is good for 2-3 persons</p>
                                            <p id="mangoSaladPrice">₱100.00</p>
                                        </div> 
                                        <div class="card-footer d-flex flex-column justify-content-between">
                                            <div class="input-group mb-3 align-center  mt-auto"  >
                                                <span class="input-group-text" onclick="mangoSaladQTY.value = decQuantity(mangoSaladQTY)">-</span>
                                                <input type="number" id="mangoSaladQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                                                <span class="input-group-text" onclick="mangoSaladQTY.value = incQuantity(mangoSaladQTY)">+</span>
                                            </div><br>     
                                            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(mangoSalad, mangoSaladQTY.value, mangoSaladPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                                        </div>    
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 m-2 card shadow">
                                        <div class="inner"> 
                                            <img src="img/talbos.png" class="card-img img-thumbnail m-auto" style="height: 250px;">     
                                        </div>                     
                                        <div class="card-body">                    
                                            <h5 class="card-title" id="talbosSalad">Kamote Tops (Talbos) Salad</h5>
                                            <p class="card-text">Includes kamote tops, tomatoes, and red onion which is good for 2-3 persons</p>
                                            <p id="talbosSaladPrice">₱100.00</p>
                                        </div>        
                                        <div class="card-footer d-flex flex-column justify-content-between">
                                            <div class="input-group mb-3 align-center  mt-auto"  >
                                                <span class="input-group-text" onclick="talbosSaladQTY.value = decQuantity(talbosSaladQTY)">-</span>
                                                <input type="number" id="talbosSaladQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                                                <span class="input-group-text" onclick="talbosSaladQTY.value = incQuantity(talbosSaladQTY)">+</span>
                                            </div><br>     
                                            <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(talbosSalad, talbosSaladQTY.value, talbosSaladPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>

        <!--Start of Pantry Essentials-->
        <div class="tab-pane" id="Pantry">
            <div class="row p-1  text-center">
                <h3 class="mb-3">Pantry Essentials</h3>
                <p>If you're looking for a gift to your loved ones who love to cook, it's the perfect gift set. You can also have it for your own pantry.</p>
            </div>
            <div class="row g-2 m-1 d-flex justify-content-center">
                <div class="col-12 col-md-6 col-lg-4 p-2 card">
                    <img src="img/herbs6pieces.png" class="card-img rounded-circle w-75 m-auto">                       
                    <div class="card-body text-center">                    
                        <h5 class="card-title" id="setA">Set A</h5>
                        <p id="setAPrice">₱180.00</p>
                        <p class="card-text">Consists of randomly available herbs and spices of 6 variety</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="setAQTY.value = decQuantity(setAQTY)">-</span>
                            <input type="number" id="setAQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="setAQTY.value = incQuantity(setAQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(setA, setAQTY.value, setAPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 p-2 card">
                    <img src="img/herbs3pieces.png" class="card-img rounded-circle w-75 m-auto">                       
                    <div class="card-body text-center">                    
                        <h5 class="card-title" id="setB">Set B</h5>
                        <p id="setBPrice">₱150.00</p>
                        <p class="card-text">Boxed set of garlic flakes, Paprika and ground pepper.</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="setBQTY.value = decQuantity(setBQTY)">-</span>
                            <input type="number" id="setBQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="setBQTY.value = incQuantity(setBQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(setB, setBQTY.value, setBPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>    
                </div>
                <div class="col-12 col-md-6 col-lg-4 p-2 card">
                    <img src="img/duo.png" class="card-img rounded-circle w-75 m-auto">                       
                    <div class="card-body text-center">                    
                        <h5 class="card-title" id="setC">Set C</h5>
                        <p id="setCPrice">₱75.00</p>
                        <p class="card-text">Perfect Duo of Salt and pepper</p>
                    </div> 
                    <div class="card-footer d-flex flex-column justify-content-between">
                        <div class="input-group mb-3 align-center  mt-auto"  >
                            <span class="input-group-text" onclick="setCQTY.value = decQuantity(setCQTY)">-</span>
                            <input type="number" id="setCQTY"  class="form-control text-center bg-white" value="1" min="0" placeholder="0">
                            <span class="input-group-text" onclick="setCQTY.value = incQuantity(setCQTY)">+</span>
                        </div><br>     
                        <button class="btn btn-sm" style="background-color: #A2DBB7; border-radius:5px; box-shadow:5px 5px grey;" onclick="addToCart(setC, setCQTY.value, setCPrice);"><i class="bi bi-cart4" style="font-size:20px;"></i> &nbsp;  Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<br>
{/* <!--End of Nav tabs--> */}

{/* <!--End of Best Sellers--> */}

</div>
{/* <!--End of Products Field--> */}


        </section>
    )
}
export default Produce;