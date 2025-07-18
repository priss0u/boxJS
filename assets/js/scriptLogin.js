document.addEventListener("DOMContentLoaded", function (){
    let myBtn = document.getElementById("myBtn");
    myBtn.addEventListener("click", function(){
        let inputPassword = document.getElementById("pass");
        
        console.log(inputPassword);
        console.log(inputPassword.type);

        if(inputPassword.type == "password"){
            inputPassword.type = "text";
        }else{
            inputPassword.type = "password";
        }
    })
});