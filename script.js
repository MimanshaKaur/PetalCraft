//contact us page form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid=true;

    const FirstName = document.getElementById('first-name');
    const LastName = document.getElementById('last-name');
    const email = document.getElementById('email-address');
    const message = document.getElementById('message');

    if(!FirstName.value.trim()) {
        isValid=false;
        document.getElementById('first_name_error').style.display = 'block';
    }
    else{
        document.getElementById('first_name_error').style.display = 'none';
    }

    if (!LastName.value.trim()) {
        isValid = false;
        document.getElementById('last_name_error').style.display = 'block';
    } else {
        document.getElementById('last_name_error').style.display = 'none';
    }

    if(!email.value.trim() || !email.value.includes('@')) {
        isValid=false
        document.getElementById('email_error').style.display = 'block';
    }
    else{
        document.getElementById('email_error').style.display='none';
    }

    if (!message.value.trim()) {
        isValid = false;
        document.getElementById('message_error').style.display = 'block';
    } else {
        document.getElementById('message_error').style.display = 'none';
    }

    if (isValid) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('contact-form').reset();
    }
});

//login page form validation
document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();
    let isValid = true;

    const email = document.getElementById('Email-address');
    const pwd = document.getElementById('Password');

    if(!email.value.trim() || !email.value.includes('@')) {
        isValid = false;
        document.getElementById('Email_error').style.display = 'block';
    }else {
        document.getElementById('Email_error').style.display = 'none';
    }

    if(!pwd.value.trim()) {
        isValid = false;
        document.getElementById('Password_error').style.display = 'block';
    }else {
        document.getElementById('Password_error').style.display = 'none';
    }

    if(isValid){
        document.getElementById('login_success').style.display = 'block';
        document.getElementById('login-form').reset();
    }
});