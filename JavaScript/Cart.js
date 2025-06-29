let ProductsInCart = localStorage.getItem("ProductsInCart");
let favProducts = localStorage.getItem("FavProdducts");
let allProducts = document.querySelector(".cart_products");
let carouselproducts= document.querySelector(".carousel");
var curdiv=document.querySelector(".curdiv");
var prodiv= document.querySelector(".prodiv")
var totalprice=0;
if(ProductsInCart){
    let item = JSON.parse(ProductsInCart) ;
    item.forEach(element => {
        totalprice+=((+(element.price))*element.countinCart);
    });
    drawCartProducts(item);
}
let item= JSON.parse(favProducts);
if(item.length!=0){
    
    
    drawCartcCarouselProducts(item);
}
else{
    
    curdiv.classList.add("d-none")
    
}
function drawCartProducts(products){
    let y = products.map((item) => {
        return `
            <div class="col-lg-6 mb-5">
                <div class="product-cart rounded-5 px-5 d-flex py-4 justify-content-between"style="background-color: #e5e6ea;">
                    <div class="me-5">
                        <img  style="height: 200px" src="${item.imageUrl}" alt="" srcset="">
                    </div>
                    <div class="d-flex flex-column align-items-start justify-content-between">
                        <p class="fw-bold fs-5"><span>Product: </span><span>${item.title}</span></p>
                        <p class="fw-bold fs-5"> <span>Category: </span><span>${item.category}</span></p>
                        <p class="fw-bold fs-5"><span>Price: </span><span>${item.price}</span><span>$</span></p>
                        <div class="d-flex align-items-center">
                            <span class="d-block me-3 fw-bold fs-4" countcartid="${item.id}">${item.countinCart}</span>
                            <i class="fas fa-plus me-3" onClick="plusCart(${item.id})" style="color:green;font-size: 18px; display: block;"></i>
                            <i class="fas fa-minus me-5"onClick="minusCart(${item.id})" style="color:red;font-size: 18px; display: block;"></i>
                            <button class="btn btn-danger rmcart" onClick="rmfromcart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    allProducts.innerHTML = y.join(' ');
}
var rmcart=document.querySelector(".rmcart");
var faplus=document.querySelector(".fa-plus");
var fainus=document.querySelector(".fa-minus");
function drawCartcCarouselProducts(products){
    let y = products.map((item) => {
        return `
            <div class="col-lg-4 carousel-cell mb-1">
                <div class="cell rounded-4 py-4 px-5" style="background-color: #e5e6ea;">
                    <img src="${item.imageUrl}" alt="" style="height: 250px; width: 100%; margin: auto;">
                    <div class="mt-4">
                        <p class="fw-bold fs-6"><span>Product: </span><span>${item.title}</span></p>
                        <div class="d-flex justify-content-between">
                            <p class="fw-bold fs-6">
                                <span>Category: </span>
                                <span>${item.category}</span>
                            </p>
                            <i class="fas fa-heart fav-heart" style="color:red;font-size: 25px;" onClick="removefav(${item.id})"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    carouselproducts.innerHTML = y.join(' ');
}
var totalPrice=document.querySelector(".totalPriceCart");
totalPrice.innerHTML=totalprice;

function rmfromcart(id){
    let item = JSON.parse(localStorage.getItem("ProductsInCart"));
    let item2 = JSON.parse(localStorage.getItem("FavProdducts"));

    item.forEach(s=>{
        if(s.id===id){
            totalPrice.innerHTML=totalPrice.innerHTML=(+(totalPrice.innerHTML)-((+(s.price))*s.countinCart));
        }
    })
    item=item.filter(m=>m.id!==id);
    localStorage.setItem("ProductsInCart" , JSON.stringify(item))
    if(item.length==0){
        if(item2.length==0){
            window.location="index.html"
        }
        else{
            prodiv.classList.add("d-none");
        }
    }
    else{
        window.location = "Cart.html";
    }
}
function plusCart(id){
    let item = JSON.parse(localStorage.getItem("ProductsInCart"));
    var ds=document.querySelector(`[countcartid="${id}"]`);
    item.forEach(m=>{
        if(m.id===id){

            m.countinCart+=1;
            ds.innerHTML=m.countinCart;
            totalPrice.innerHTML=(+(totalPrice.innerHTML)+(+(m.price)))
        }
    })
    localStorage.setItem("ProductsInCart" , JSON.stringify(item))
}
function minusCart(id){
    let item = JSON.parse(localStorage.getItem("ProductsInCart")) ;
    var ds=document.querySelector(`[countcartid="${id}"]`);
    item.forEach(m=>{
        if(m.id===id){
            
            if(m.countinCart==1){
                // rmfromcart(id);
                item.forEach(s=>{
                    if(s.id===id){
                        totalPrice.innerHTML=totalPrice.innerHTML=(+(totalPrice.innerHTML)-((+(s.price))*s.countinCart));
                    }
                })
                item=item.filter(m=>m.id!==id);
                localStorage.setItem("ProductsInCart" , JSON.stringify(item))
                if(item.length==0){
                    window.location="index.html"
                }
                else{
                    window.location = "Cart.html";
                }
            }
            else{
                m.countinCart-=1;
                ds.innerHTML=m.countinCart;
                totalPrice.innerHTML=(+(totalPrice.innerHTML)-m.price)
            }
        }
    })
    localStorage.setItem("ProductsInCart" , JSON.stringify(item))
}
function removefav(id){
    var item=JSON.parse(localStorage.getItem("FavProdducts"));
    var item2=JSON.parse(localStorage.getItem("ProductsInCart"));

    item=item.filter(m=>m.id!=id)
    localStorage.setItem("FavProdducts" , JSON.stringify(item))
    if (item.length==0){
        if(item2.length==0){
            window.location="index.html"
        }
        else{
            curdiv.classList.add("d-none");
        }
        
    }
    else{
        location.reload();
    }
    
}