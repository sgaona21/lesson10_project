/*
Steven Gaona STE2342585
Date: 3/24/25
*/

const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const submitButton = document.querySelector("button")
const formError = document.getElementById("formError");
const successMessage = document.getElementById("successMessage");

let nameValid = true; 
let emailValid = true;


 function clearErrorMessage(message) {
    message.innerText = ""
 }

function nameValidation() {
    let nameRegEx = /^[a-zA-Z\s]+$/;

    if (nameInput.value.trim() == "") {
        nameError.innerText = "Name field cannot be blank";
        nameValid = false;
    } else if (!nameRegEx.test(nameInput.value.trim())) {
        nameError.innerText = "Name field must contain only letters and spaces";
        nameValid = false;
    } else {
        nameValid = true
        clearErrorMessage(nameError)
    }
}

function emailValidation() {
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailInput.value.trim() == "") {
        emailError.innerText = "Email field cannot be empty";
        emailValid = false;
    } else if (!emailRegEx.test(emailInput.value.trim())) {
        emailError.innerText = "Please use a valid email format";
        emailValid = false;
    } else {
        emailValid = true
        clearErrorMessage(emailError)
    }
}

function formValidation() {
    if (!nameValid || !emailValid) {
        formError.innerText = "Please make sure form is filled out correctly"
        clearErrorMessage(successMessage)
    } else if (nameValid && emailValid) {
        successMessage.innerText = "Form submitted successfully!"
        clearErrorMessage(formError)
    } 
}

myForm.addEventListener("submit", () => {
    event.preventDefault();
    nameValidation();
    emailValidation();
    formValidation();
});