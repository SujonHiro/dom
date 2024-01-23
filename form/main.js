
//show the message with a type of the input
function showMessage(input,message,type){
    const msg=input.parentNode.querySelector('small')
    msg.innerText=message;
    input.className= type ? 'success':'error';
    return type;
}

function showError(input,message){
    return showMessage(input,message,false)
}

function showSuccess(input){
  return showMessage(input,"",true)
}


function hasValues(input,message){
    if(input.value.trim() === ""){
       return showError(input,message)
    }
    return showSuccess(input)
}

function validateEmail(input,reqMsg,invMsg){
    if(!hasValues(input,reqMsg)){
        return false
    }
    const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    let email=input.value.trim()
    if(!emailRegex.test(email)){
        return showError(input,invMsg)
    }
    return true
}

const form=document.querySelector("#signup")


const NAME_REQ="Please enter your name";
const REQ_EMAIL="Please enter your email";
const INVALID_EMAIL="Please enter a valid email";

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let nameInput=hasValues(form.elements["name"],NAME_REQ);
    let emailInput=validateEmail(form.elements["email"],REQ_EMAIL,INVALID_EMAIL);

    if(nameInput && emailInput){
        alert("Form Submitted")
    }
})
