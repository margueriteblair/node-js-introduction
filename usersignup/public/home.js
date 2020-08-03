const hello = document.createElement('h1')
document.body.appendChild(hello)
hello.innerText = 'Hello World'


window.onload = () => {
    //create a form and append to a div

    //create blank elements 
    //set properties and event listeners
    //append to the dom
    const mainDiv = document.createElement('div');
    const form = document.createElement('form');
    const emailInput = document.createElement('input')
    const passwordInput = document.createElement('input')
    const passwordConfirm = document.createElement('input')
    const userNameInput = document.createElement('input')
    const submitButton = document.createElement('button')


    document.body.appendChild(mainDiv);
    mainDiv.appendChild(form);
    mainDiv.appendChild(submitButton)
    form.appendChild(emailInput)
    form.appendChild(passwordInput)
    form.appendChild(passwordConfirm)
    form.appendChild(userNameInput)
}