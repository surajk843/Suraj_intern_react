const registerForm = document.getElementById("registerForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

registerForm.addEventListener("submit",function(){
    event.preventDefault();

    if(firstName.value === ""){
        errorMessage.textContent = "Enter the First Name";
        return;
    }
    if(lastName.value === ""){
        errorMessage.textContent = "Enter the Last Name";
        return;
    }
    if(mobile.value === ""){
        errorMessage.textContent = "Enter the Mobile No";
        return;
    }
    if(email.value === ""){
        errorMessage.textContent = "Enter Email first";
        return;
    }
    if(password === ""){
        errorMessage.textContent = "Enter the Password";
        return;
    }
    if(confirmPassword === ""){
        errorMessage.textContent = "Please confirm the password";
        return;
    }
     const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){
        errorMessage.textContent =
        "Enter a valid email address";
        return;
    }

    const isValidPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
    .test(password.value);

    if(!isValidPassword){
        errorMessage.textContent =
        "Password must be 8+ characters and contain uppercase, lowercase, number, and special character.";
        return;
    }

    if(password.value !== confirmPassword.value){
        errorMessage.textContent = "Password do not match"
        return;
    }
    errorMessage.textContent = "";

    successMessage.textContent =
    "Registration Successful! Redirecting to Login Page...";

    setTimeout(function(){

    window.location.href = "index.html";

    }, 3000);

})
