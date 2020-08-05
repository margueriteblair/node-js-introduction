window.onload = () => {
    const header = document.createElement('h1')
    const form = document.createElement('form')
    const email = document.createElement('input');
    const password = document.createElement('input')
    const signInButton = document.createElement('button');

    document.body.appendChild(header);
    document.body.appendChild(form);
    form.appendChild(email);
    form.appendChild(password);
    document.body.appendChild(signInButton);


    header.id = 'header'
    header.innerText = "Sign In"
    form.id = 'form';
    email.id = 'email'
    email.name = 'email'
    email.type = 'email'
    email.placeholder = 'Email'
    password.id = 'pswd';
    password.type = 'password'
    password.name = 'pass';
    password.placeholder = 'Password'
    signInButton.innerText = 'Sign In'

    signInButton.onclick = logData;

    function logData() {
        console.log('Data was submitted')

        const reqBody = {}; //setting an empty object for the request body
        const xhr = new XMLHttpRequest();
        xhr.open('PATCH', PATH)
        xhr.onload = () => {
            //log something
        }
        xhr.send()
    }

}