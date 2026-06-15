const { use } = require("react");

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit" , function(event){
    event.preventDefault();

    if(username.value == ""){
        errorMessage.textContent = "Username is required";
        return;
    }

    if(password.value == ""){
        errorMessage.textContent = "Password is required";
        return;
    }

    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password.value);
    if(!isValidPassword){
        errorMessage.textContent = 
        "Password must be 8+ characters and contain uppercase, lowercase, number, and special character.";
        return;
    }

    errorMessage.textContent = "";
    window.location.href = "login-success.html";
});
