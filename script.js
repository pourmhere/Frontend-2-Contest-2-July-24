const emailInput = document.getElementById("email");
const emailError = document.getElementById('errMsgE');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('errMsgP');
const btnSubmit = document.getElementById("submit")
const successMessage = document.getElementById('successMsg');

function validateEmail() {
    emailInput.addEventListener("input", () => {
        const emailValue = emailInput.value;

        if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
            emailError.style.display = 'none';
            return true;
        } else {
            emailError.style.display = 'block';
            successMessage.style.display = 'none';
            return false;
        }
    })
    const emailValue = emailInput.value;

    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailError.style.display = 'none';
        return true;
    } else {
        emailError.style.display = 'block';
        successMessage.style.display = 'none';
        return false;
    }
}


function validatePassword() {

    passwordInput.addEventListener("input", () => {
        const passwordValue = passwordInput.value;
        console.log(passwordValue);
        console.log(passwordValue.length);
        if (passwordValue.length > 8) {
            passwordError.style.display = 'none';

            goodToGO();

            return true;
        } else {
            passwordError.style.display = 'block';
            successMessage.style.display = 'none';
            return false;
        }
    })
    const passwordValue = passwordInput.value;
    console.log(passwordValue);
    console.log(passwordValue.length);
    if (passwordValue.length > 8) {
        passwordError.style.display = 'none';

        goodToGO();

        return true;
    } else {
        passwordError.style.display = 'block';
        successMessage.style.display = 'none';
        return false;
    }
}



function goodToGO() {
    console.log("sdfsdf :here")
    successMessage.style.display = 'block';
    successMessage.innerText = "All good to go!"
}

btnSubmit.addEventListener("click", handleSubmit)
validatePassword();
validateEmail();

function handleSubmit(event) {
    event.preventDefault();
    console.log(emailInput.value);

    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    if (emailValid && passwordValid) {

        if (confirm("Do you want to submit the form?")) {
            alert("Successful Signup!");
            document.getElementById('signup-form').reset();
            successMessage.style.display = 'none';

        } else {
            document.getElementById('signup-form').reset();
            successMessage.style.display = 'none';

        }
    }
}
