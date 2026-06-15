
const email = document.getElementById("email");
const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit" , function(event){
    event.preventDefault();

    if(email.value == ""){
        errorMessage.textContent = "EmailID is required";
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

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(!storedUser){
        errorMessage.textContent = "No registered users found. Please register first.";
        return;
    }

    if(email.value == storedUser.email && password.value == storedUser.password){
        window.location.href = "login-success.html";
    }else{
        errorMessage.textContent = "Invalid Email or Password";
    }

});
