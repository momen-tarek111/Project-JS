var welcomemassage=document.querySelector(".WelcomeMassage");
var welcomemassageh3=document.querySelector(".WelcomeMassage h3");
var usercart=document.querySelector(".Cart_User");
var logina=document.querySelector(".login_a");
var rega=document.querySelector(".reg_a");
var logouta=document.querySelector(".logout_a");
var allProducts=document.querySelector(".producs");
var dropcartm=document.querySelector(".dropdown-menu");
var dropcartli=document.querySelectorAll(".dropdown-menu li");
var dropcartlip=document.querySelectorAll(".dropdown-menu li div p");
var dropcart=document.querySelector(".dropdown");
var cartcount=document.querySelector(".bage-cart");
var lilast=document.querySelector(".lastli");
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
let favProducts = localStorage.getItem("FavProdducts") ? JSON.parse(localStorage.getItem("FavProdducts")) : [];
if(localStorage.getItem("Email")){
    if(addedItem.length!=0){
        dropcartm.lastElementChild.remove();
        console.log(typeof addedItem)
        let y = addedItem.map((item) => {
            return`
                <li class="mx-2 mt-2" numid="${item.id}">
                <div class="d-flex justify-content-between bg-white p-2 rounded-3">
                <p style="color:#000000;font-weight: bold;"class="mb-0">${item.title}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="me-2" style="color: #d1ab5f; font-weight: bold; font-size: 20px; display: block;">${item.countinCart}</span>
                    <i class="fas fa-plus me-2" style="color:green;font-size: 14px; display: block;" onClick="increase(${item.id})"></i>
                    <i class="fas fa-minus" style="color:red;font-size: 14px; display: block;"onClick="decrease(${item.id})"></i>
                </div>
            </div>
        </li>
            `
        })
        dropcartm.innerHTML = y.join(' ');
        dropcartm.append(lilast);
        cartcount.innerHTML=addedItem.length;
        dropcart.classList.remove("d-none");
    }
    logouta.classList.remove("d-none");
    welcomemassage.classList.remove("d-none");
    usercart.classList.remove("d-none");
    usercart.classList.add("d-flex");
    welcomemassageh3.innerHTML= "Welcome " + localStorage.getItem("FirstName");
}
else{
    logina.classList.remove("d-none");
    rega.classList.remove("d-none");
}
var products = [
    {
        id:1,
        title: "T-Shirt Adidas",
        price: "100",
        imageUrl : "./images/OIP.jpg",
        category: "Clothes Sports",
        countinCart:0
    },
    {
        id:2,
        title: "Wireless Earbuds",
        price: "120",
        imageUrl : "./images/op.jpeg",
        category: "accessories",
        countinCart:0
    },
    {
        id:3,
        title: "STEEL STRAW METAL BOTTLE",
        price: "50",
        imageUrl : "./images/product4.jpg",
        category: "accessories",
        countinCart:0
    },
    {
        id:4,
        title: "Adiddas Glasses",
        price: "60",
        imageUrl : "./images/21273442_fpx.jpeg",
        category: "Men accessories",
        countinCart:0
    },
    {
        id:5,
        title: "Adiddas Cap",
        price: "20",
        imageUrl : "./images/OIP (1).jpeg",
        category: "Men accessories",
        countinCart:0
    },
    {
        id:6,
        title: "Adiddas Jacket",
        price: "140",
        imageUrl : "./images/utilitas_hooded_parka.jpeg.webp",
        category: "Fashion",
        countinCart:0
    },
    {
        id:7,
        title: "Adiddas Shoes",
        price: "140",
        imageUrl : "./images/Ub-22-indigo-white-blue-300x300.jpg",
        category: "shoeses",
        countinCart:0
    },
    {
        id:8,
        title: "Adiddas Backpack",
        price: "180",
        imageUrl : "./images/badge.jpeg",
        category: "Bages",
        countinCart:0
    },
    {
        id:9,
        title: "Adiddas Shoes",
        price: "130",
        imageUrl : "./images/ff.jpeg",
        category: "Women Bages",
        countinCart:0
    }
]
function drawItems (){
    
    let y = products.map((item) => {
            return`
        <div class="card mb-5 col-lg-4 col-md-6 pro"prodid="${item.id}">
            <div style="padding: 0 15px;"><img class="card-img-top h-100" src="${item.imageUrl}" alt="Card image"></div>
            <div class="card-body px-4" style="display: flex;flex-direction: column;justify-content: end;">
                <p class="product-details-p price"><span>Product: </span><span class="cart-p-span">${item.title}</span></p>
                <p class="price"><span>Price: </span><span class="cart-p-span">${item.price}$</span></p>
                <p class="price"><span>Category: </span><span class="cart-p-span">${item.category}</span></p>
                <div class="d-flex justify-content-between mt-4"><button class="btn addtodrop" id="outsideButton" style="background-color: #d1ab5f;" onClick="check(this,${item.id})">Add to Cart</button><i class="fs-4 far fa-heart fav-heart" onClick="addToFav(this,${item.id})"></i></div>
            </div>
        </div>
        `
    })
    allProducts.innerHTML = y.join(' ');
}
drawItems ();

function addToFav(i,id){
    if(i.classList.contains("far")){
        i.classList.remove("far");
        i.classList.add("fas");
        i.classList.add("text-danger");
        favpro=products.find((m)=>m.id==id);
        favProducts=[...favProducts,favpro];
        localStorage.setItem("FavProdducts" , JSON.stringify(favProducts))
    }
    else{
        i.classList.add("far");
        i.classList.remove("fas");
        i.classList.remove("text-danger");
        favProducts=favProducts.filter(m=>m.id!=id);
        localStorage.setItem("FavProdducts" , JSON.stringify(favProducts))
    }
}

function check(btn,id){
    
    if(!(welcomemassage.classList.contains("d-none"))){
        if(btn.classList.contains("btn-danger")){
            btn.classList.remove("btn-danger");
            btn.style.backgroundColor = "#d1ab5f";
            btn.innerHTML="Add To Cart";
            RemoveCart(id)
        }
        else{
            btn.removeAttribute("style");
            btn.classList.add("btn-danger");
            btn.innerHTML="Remove From Cart";
            AddToList(id);
        }
        
    }else {
        window.location ="Login.html"
    }
}
function AddToList(id){
    var boll=true;
    var productitem=products.find((item)=>item.id===id);

    dropcartlip.forEach(m=>{
        if(productitem.title==m.innerHTML){
            var vc= m.nextElementSibling.firstElementChild;
            var i=+(vc.innerHTML);
            vc.innerHTML=i+1;
            addedItem.forEach(m=>{
                if(m.id==productitem.id){
                    m.cartcount+=1;
                    localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem))
                }
            })
            boll=false;
        }
    })
    if(boll){
        productitem.countinCart=1;
        addedItem = [...addedItem , productitem]
        localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        dropcartm.lastElementChild.remove();
        if(cartcount.innerHTML==""&&dropcart.classList.contains("d-none")){
            cartcount.innerHTML="1";
            dropcart.classList.remove("d-none");
        }
        else{
            cartcount.innerHTML=(+(cartcount.innerHTML))+1;
        }
        dropcartm.innerHTML+=
        `
        <li class="mx-2 mt-2" numid="${id}">
            <div class="d-flex justify-content-between bg-white p-2 rounded-3">
                <p style="color:#000000;font-weight: bold;"class="mb-0">${productitem.title}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="me-2" style="color: #d1ab5f; font-weight: bold; font-size: 20px; display: block;">1</span>
                    <i class="fas fa-plus me-2" style="color:green;font-size: 14px; display: block;" onClick="increase(${id})"></i>
                    <i class="fas fa-minus" style="color:red;font-size: 14px; display: block;"onClick="decrease(${id})"></i>
                </div>
            </div>
        </li>`
        dropcartm.append(lilast)
    }
}
function RemoveCart(id){
    addedItem=addedItem.filter(m=>m.id!==id);
    localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
    var removeProduct=document.querySelector(`[prodid="${id}"]`);
    var changebutton=removeProduct.lastElementChild.lastElementChild.firstElementChild;
    changebutton.classList.remove("btn-danger");
    changebutton.style.backgroundColor = "#d1ab5f";
    changebutton.innerHTML="Add To Cart";
    dropcartli=document.querySelectorAll(".dropdown-menu li");
    dropcartli.forEach(m=>{
        if(id==+(m.getAttribute("numid"))){
            m.remove();
        }
    })
    if(cartcount.innerHTML=="1"){
        cartcount.innerHTML=""
        dropcart.classList.add("d-none");
    }
    else{
        cartcount.innerHTML=(+(cartcount.innerHTML))-1;
    }
}
function increase(id){
    addedItem.forEach(m=>{
        if(m.id===id){
            m.countinCart+=1;
        }
    })
    localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
    var productcartcount=document.querySelector(`[numid="${id}"]`);
    productcartcount.firstElementChild.lastElementChild.firstElementChild.innerHTML=1+(+(productcartcount.firstElementChild.lastElementChild.firstElementChild.innerHTML));
}
function decrease(id){
    var productcartcount=document.querySelector(`[numid="${id}"]`)
    addedItem.forEach(m=>{
        if(m.id==id){
            m.countinCart-=1;
        }
    })
    if(productcartcount.firstElementChild.lastElementChild.firstElementChild.innerHTML=="1"){
        RemoveCart(id);
    }
    else{
        localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        productcartcount.firstElementChild.lastElementChild.firstElementChild.innerHTML=(+(productcartcount.firstElementChild.lastElementChild.firstElementChild.innerHTML))-1;
    }
}
document.querySelector(".dropdown").addEventListener('click', function (event) { 
     
    event.stopPropagation(); 
});
var allpro=document.querySelectorAll(".pro");
var sel=document.querySelector(".seltag")
document.querySelector(".ser").addEventListener("input",function(){
    var serword=this.value.toLowerCase();
    allpro.forEach(m=>{
        if(sel.value=="1"){
            var proName=m.lastElementChild.firstElementChild.lastElementChild.textContent.toLowerCase();
            console.log(proName)
            if(!(proName.includes(serword))){
                m.classList.add("d-none");
            }
            else {
                if(m.classList.contains("d-none")){
                    m.classList.remove("d-none")
                }
            }
        }
        else if (sel.value=="2"){
            var catName=m.lastElementChild.querySelector(":nth-child(3)").lastElementChild.textContent.toLowerCase();
            if(!(catName.includes(serword))){
                m.classList.add("d-none");
            }
            else {
                if(m.classList.contains("d-none")){
                    m.classList.remove("d-none")
                }
            }
        }
    })
})
var ser=document.querySelector(".ser");
if(ser.value=""){
    allpro.forEach(m=>{
        if(m.classList.contains("d-none")){
            m.classList.remove("d-none")
        }
    })
}
if(favProducts.length!=0){
    var prods=document.querySelectorAll(".pro")
    prods.forEach(m=>{
        favProducts.forEach(n=>{

            if(n.id===(+(m.getAttribute("prodid")))){
                var i= m.lastElementChild.lastElementChild.lastElementChild;
                i.classList.remove("far");
                i.classList.add("fas");
                i.classList.add("text-danger");
            }
        })
    })
}
if(addedItem.length!=0){
    var prods=document.querySelectorAll(".pro")
    prods.forEach(m=>{
        addedItem.forEach(n=>{

            if(n.id===(+(m.getAttribute("prodid")))){
                var i= m.lastElementChild.lastElementChild.firstElementChild;
                i.removeAttribute("style");
                i.classList.add("btn-danger");
                i.innerHTML="Remove From Cart";
            }
        })
    })
}