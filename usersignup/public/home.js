

window.onload = () => {
//create a form and append to a div
//create blank elements 
//set properties and event listeners
//append to the dom
const header = document.createElement('h1')
const mainDiv = document.createElement('div');
const form = document.createElement('form');
const emailInput = document.createElement('input')
const passwordInput = document.createElement('input')
const passwordConfirm = document.createElement('input')
const userNameInput = document.createElement('input')
const submitButton = document.createElement('button')

emailInput.placeholder = 'Email';
emailInput.type = 'email';
emailInput.id = 'email'
emailInput.name = 'email'
passwordInput.placeholder = 'Password';
passwordInput.type = 'password'
passwordInput.name = 'pswd1'
passwordInput.id = 'pswd1'
passwordConfirm.placeholder = 'Confirm Password';
passwordConfirm.type = 'password';
passwordConfirm.id = 'pswd2';
passwordConfirm.name = 'pswd2'
userNameInput.placeholder = 'Username';
userNameInput.type = 'text'
userNameInput.name = 'username';
userNameInput.id = 'username'
submitButton.innerText = 'Submit';
header.innerText = 'Register Today!';


document.body.appendChild(header)
document.body.appendChild(mainDiv);
mainDiv.appendChild(form);
mainDiv.appendChild(submitButton)
form.appendChild(emailInput)
form.appendChild(passwordInput)
form.appendChild(passwordConfirm)
form.appendChild(userNameInput)

let inputs = document.querySelectorAll('input');
for (const input of inputs) {
    input.classList.add('input');
}

submitButton.addEventListener('mouseup', () => {
    console.log('You submitted your information!')
    for (const child of form.children) {
        console.log(child)
    }
    //console.log(form.children)
})


}