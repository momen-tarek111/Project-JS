var Email=document.querySelector(".user-email");
var pass=document.querySelector(".user-pass");
var logbtn=document.querySelector(".log_user");
let getEmail = localStorage.getItem("Email");
let getPassword = localStorage.getItem("Password");
var spanMassage=document.querySelector(".login-massage");
logbtn.addEventListener("click",function(e){
    e.preventDefault()
    if (Email.value==="" || pass.value===""){
        if(!(spanMassage.classList.contains("d-none"))){
            spanMassage.classList.add("d-block");
            spanMassage.innerHTML="Please Enter All of Data"
        }
        else{
            spanMassage.innerHTML="Please Enter All of Data"
        }
    }
    else {
        if ( (getEmail && getEmail.trim() === Email.value.trim() && getPassword && getPassword === pass.value )  )
        {
            setTimeout ( () => {
                window.location = "index.html"
            } , 500)
        } else {
            if(spanMassage.classList.contains("d-none")){
                spanMassage.classList.remove("d-none");
                spanMassage.innerHTML="The Password OR Email is error"
            }
            else{
                spanMassage.innerHTML="The Password OR Email is error"
            }
        }
    }
})

