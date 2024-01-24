let togglePassword=document.querySelector('#togglePassword');
let password=document.querySelector('#password');

togglePassword.addEventListener('click',function(){
    const type=password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type)
    this.classList.toggle("bi-eye")
})

const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
})