var signUpName = document.getElementById('signUpName');
var signUpEmail = document.getElementById('signUpEmail');
var signUpPass = document.getElementById('signUpPass');

var signUpArray = [];

if (localStorage.getItem('users') == null) {
    signUpArray = [];
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'));
}

function signUp() {
    if (!isEmpty()) {
        document.getElementById('exist').innerHTML = `<p class="text-danger fs-5 m-2 fw-bold">All inputs are required</p>`;
        return;
    }

    var signUp = {
        name: signUpName.value,
        email: signUpEmail.value,
        pass: signUpPass.value
    };

    if (signUpArray.length === 0 || !isEmailExist()) {
        signUpArray.push(signUp);
        localStorage.setItem('users', JSON.stringify(signUpArray));
        document.getElementById('exist').innerHTML = `<p class="text-success fs-5 fw-bold">Success</p>`;
    } else {
        document.getElementById('exist').innerHTML = `<p class="text-danger fs-5 m-2 fw-bold">Email already exists</p>`;
    }
}

function isEmpty() {
    return signUpName.value !== "" && signUpEmail.value !== "" && signUpPass.value !== "";
}

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() === signUpEmail.value.toLowerCase()) {
            return true;
        }
    }
    return false;
}


// --------------------------------------------for login---------------------------------------------

var SignInEmail=document.getElementById('SignInEmail');
var SignInPassword=document.getElementById('SignInPassword');



function LogIn(){

    function LogInIsEmpty(){
        if(SignInEmail.value == "" || SignInPassword.value == "" ){
                     return false;
       }
       else {
           return true;
       }
    }
   
    if(LogInIsEmpty()==false){
        document.getElementById('incorrect').innerHTML =`<p class="text-danger fs-5 m-2 fw-bold">All inputs are required</p>`;
         return false;
    }
    else{
        var foundUser=false;
       for(var i = 0 ; i< signUpArray.length; i++){
        if(signUpArray[i].email.toLowerCase()== SignInEmail.value.toLowerCase() && signUpArray[i].pass.toLowerCase()==SignInPassword.value.toLowerCase()){

            localStorage.setItem('sessionUser',signUpArray[i].name);
            
            foundUser=true;
           
        }
       }


    }

    if(foundUser){
        window.location.href = 'home.html';
      


    }
    else{
        document.getElementById('incorrect').innerHTML=`<p class="text-danger fs-5 m-2 fw-bold">Incorrect email or password</p>`;
    }



}
      
var username = localStorage.getItem('sessionUser');
if (username) {
  document.getElementById('hi').innerHTML= "Welcome " + username;
}


function logOut(){

  localStorage.removeItem('sessionUser');

}

