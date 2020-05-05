let ready = function () {
    document.querySelector("#form-submit").addEventListener("click", validate)
};

// Load Docuemnt
if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    ready();
}
else {
    document.addEventListener("DOMContentLoaded", ready);
}

function validate (event) {
    
    event.preventDefault();

    formGroupArr = document.querySelectorAll(".form-group");

    for (let i = 0; i < formGroupArr.length; i++) {
        
        input  = formGroupArr[i].querySelector("input");

        small = formGroupArr[i].querySelector("small");

        removeActiveClass(small);
        removeErrorInput(input);

        if (input.getAttribute("type") == "email") {
            if (!validateEmail(input.value)) {
                addErrorValidation(small, "Please provide a valid email adress");
            }
        }
    }
}

// Validate Email
function validateEmail (email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Add error 
function addErrorValidation (element, error) {
    addErrorInput(input);
    addActiveClass(small);
    addDanger(small);
    element.innerText = error;
}

// Add active class
function addActiveClass(element) {
    element.classList.add("active");
}
//Add error classes
function addDanger (element) {
    element.classList.add("red");
}

//Add error class
function addErrorInput (element) {
    element.classList.add("error");
}

// Remove error class
function removeErrorInput (element) {
    element.classList.remove("error");
}

// Remove active class
function removeActiveClass(element) {
    element.classList.remove("active");
}
