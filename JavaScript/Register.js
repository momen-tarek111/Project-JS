var FirstName=document.querySelector(".User_First_Name");
var LastName=document.querySelector(".User_Last_Name");
var Email=document.querySelector(".User_Email");
var MobileNumber=document.querySelector(".User_Mobile_Number")
var pass=document.querySelector(".User_Password");
var repatePass=document.querySelector(".User_Repate_Password");
var regbtn=document.querySelector(".reg_btn");
let getEmail = localStorage.getItem("Email");
let getPassword = localStorage.getItem("Password");
var spanMassage=document.querySelector(".register-massage");

regbtn.addEventListener ("click" , function (e){
    e.preventDefault()
    if (FirstName.value==="" || LastName.value==="" || Email.value ==="" ||MobileNumber.value==="" || pass.value==="" || repatePass.value ===""){
        if(spanMassage.classList.contains("d-none")){
            spanMassage.classList.remove("d-none")
            spanMassage.innerHTML="Please Enter All of Data"
        }
        else{
            spanMassage.innerHTML="Please Enter All of Data"
        }
    } 
    else {
        if(pass.value!=repatePass.value){
            if(spanMassage.classList.contains("d-none")){
                spanMassage.classList.remove("d-none");
                spanMassage.innerHTML="the Password and repate it's must be the same"
            }
            else{
                spanMassage.innerHTML="the Password and repate it's must be the same"
            }
        }
        else{
            localStorage.setItem("FirstName" , FirstName.value);
            localStorage.setItem("LastName" , LastName.value);
            localStorage.setItem("Email" , Email.value);
            localStorage.setItem("MobileNumber" , MobileNumber.value);
            localStorage.setItem("Password" , pass.value);
            localStorage.setItem("RepatePassword" , repatePass.value); 
            setTimeout ( () => {
                window.location = "Login.html"
            } , 500)
        }
    }
})

