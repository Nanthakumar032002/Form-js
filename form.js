const nameerror = document.getElementById("nameerror");
const numbererror =document.getElementById("numbererror");
const emailerror = document.getElementById("emailerror");
const Messageerror = document.getElementById("Messageerror");
const sumbite = document.getElementById("sumbiterror");

function Nameinput(){
    let nameinput = document.getElementById("nameinput").value;
    if(nameinput.length == 0){
        nameerror.innerHTML="Name is Required"
        return false
    }
    if(!nameinput.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML ="Write full Name"
        return false
    }
    nameerror.textContent ='✅';
    return true
}
function Numberinput(){
    let phonenumber = document.getElementById("phoneinput").value;

    if(phonenumber.length ==0){
        numbererror.textContent = "Phone number required"
        return false
    }
    if(phonenumber.length!==10){
        numbererror.textContent = "Number  should be 10 digits"
        return false
    }
    if(!phonenumber.match(/^[0-9]{10}$/)){
        numbererror.textContent = "must be 0 to 9"
        return false
    }if(phonenumber.length==10){
        numbererror.innerHTML = "✅"
        return true
    }
    
}
function Emailinput(){
    let emailinput = document.getElementById("emailinput").value;

    if(emailinput.length ==0){
        emailerror.textContent = "Email required"
        return false
    }
    if(!emailinput.match(/^[A-Za-z0-9._%+-]+@gmail\.com$/)){
        emailerror.innerHTML = "Email Invalid"
        return false
    }
    emailerror.textContent= "✅";
    return true;    
}

function Messagetext(){ 
    let YourMessage = document.getElementById("YourMessage").value;
    let require = 30;
    let left = require - YourMessage.length
    
    if(YourMessage.length==0){
        Messageerror.textContent = "Message required";
        return false
    }
    if(left >0){
        Messageerror.textContent=left +' more character required';
        return false;
    }
    
    if(YourMessage.length >16){
        Messageerror.textContent = "✅"
        return true
    }
}
function sumbitbutton(){
    if(!Nameinput() || !Numberinput() || !Emailinput() || !Messagetext()){
        sumbite.style.display = "block";
        sumbite.innerHTML="Please fix the error to sumbit";
        setTimeout(function(){
            sumbite.style.display="none";
        },3000)
        return false;
    }
    
}