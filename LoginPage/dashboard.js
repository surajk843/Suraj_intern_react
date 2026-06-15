const welcomeMessage = document.getElementById("welcomeMessage");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const user = JSON.parse(localStorage.getItem("user"));


if(!user || isLoggedIn !== "true"){
    window.location.href = "index.html";
}

welcomeMessage.textContent = `Welcome ${user.firstName}`;


logoutBtn.addEventListener("click", function(){
    localStorage.removeItem(
        "isLoggedIn"
    );
    window.location.href = "index.html";
})