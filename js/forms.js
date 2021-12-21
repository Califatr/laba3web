var loginButton = document.getElementById("open-forms-button");
var loginForm = document.getElementById("loginForm");
var signupForm = document.getElementById("signupForm")
var formContainer = document.getElementById("form_container");
var closeForm_button1 = document.getElementById("closeForm_button1");
var closeForm_button2 = document.getElementById("closeForm_button2");
var toggleToSignupForm = document.getElementById("toggle_toSignupForm");
var toggleToLoginForm = document.getElementById("toggle_toLoginForm");


loginButton.onclick = function () {
    formContainer.classList.add("active");
    loginForm.classList.add("active");
}

closeForm_button1.onclick = function () {
    formContainer.classList.remove("active");
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
}

closeForm_button2.onclick = function () {
    formContainer.classList.remove("active");
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
}

toggleToSignupForm.onclick = function () {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
}

toggleToLoginForm.onclick = function () {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
}