function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// function validateEmail(email) {
//     let re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }
let btn = document.getElementById("btn");
let error = document.getElementById("err-ms");
let email = document.getElementById("email");

btn.addEventListener("click",(event)=>{
    event.preventDefault()
    if(validateEmail(email.value)){
        error.style.display = 'none'
        email.style.border = "1px solid hsl(223, 100%, 88%)"
        alert("خلص انقلع")
    }
    else{
        error.style.display = 'block'
        email.style.border = "1px solid red"
    }
})
