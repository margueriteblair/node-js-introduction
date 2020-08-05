window.onload = () => {
    const header = document.createElement('h1')
    const form = document.createElement('form')
    const email = document.createElement('input');
    const password = document.createElement('input')

    document.body.appendChild(header);
    document.body.appendChild(form);
    form.appendChild(email);
    form.appendChild(password);


    header.id = 'header'
    header.innerText = "Sign In"
    form.id = 'form';
    email.id = 'email'
    email.name = 'email'
    email.placeholder = 'Email'
    password.id = 'pswd';
    password.name = 'pass';
    password.placeholder = 'Password'

}