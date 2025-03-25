/*
Steven Gaona STE2342585
Date: 3/24/25
*/

//DOM declarations: 
const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const formError = document.getElementById("formError");
const successMessage = document.getElementById("successMessage");
const nameGreenCheck = document.getElementById("name-green-check");
const emailGreenCheck = document.getElementById("email-green-check");


//these variables hold a boolean state for both the email and name inputs 
let nameValid = true; 
let emailValid = true;

//this function takes a parameter and then clears the innerText of the given element
 function clearErrorMessage(message) {
    message.innerText = ""
 }

 //this function determines if the name input is valid. it checks to see if the input is an empty string and then checks to see if the input matches the regular expression
function nameValidation() {
    let nameRegEx = /^[a-zA-Z\s]+$/;

    if (nameInput.value.trim() == "") {
        nameError.innerText = "Name field cannot be blank";
        nameGreenCheck.innerHTML = "";
        nameValid = false;
    } else if (!nameRegEx.test(nameInput.value.trim())) {
        nameError.innerText = "Name field must contain only letters and spaces";
        nameGreenCheck.innerHTML = "";
        nameValid = false;
    } else {
        nameValid = true
        nameGreenCheck.innerText = "✅"
        clearErrorMessage(nameError)
    }
}

//this code determines the state of the email input. it checks for an empty string and also to see if the input matches the regular expression. 
function emailValidation() {
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailInput.value.trim() == "") {
        emailError.innerText = "Email field cannot be empty";
        emailGreenCheck.innerText = ""
        emailValid = false;
    } else if (!emailRegEx.test(emailInput.value.trim())) {
        emailError.innerText = "Please use a valid email format";
        emailGreenCheck.innerText = ""
        emailValid = false;
    } else {
        emailValid = true
        emailGreenCheck.innerText = "✅";
        clearErrorMessage(emailError)
    }
}

//this funcntion determines the state of the entire form. it checks to see if both the email and name input are both valid and then outputs an error or success message. 
function formValidation() {
    if (!nameValid || !emailValid) {
        formError.innerText = "Please make sure form is filled out correctly"
        clearErrorMessage(successMessage)
    } else if (nameValid && emailValid) {
        successMessage.innerText = "Form submitted successfully!"
        clearErrorMessage(formError)
    } 
}

//and here i called all of my functions into the submit event listener for the form while preventing the page refresh
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    nameValidation();
    emailValidation();
    formValidation();
});

