const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value    
    const emailValue = email.value    
    const passwordValue = password.value    
    const passwordConfirmationValue = passwordConfirmation.value
    
    if (usernameValue === '') {
        setErrorFor(username, "O nome de usuário é obrigatório");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar a mensagem de erro
    small.innerText = message;

    //Adicionar a classe de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}
