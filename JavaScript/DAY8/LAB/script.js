function User(username, email, password) {
    let _username = username;
    let _email = email;
    let _password = password;
    let _loggedIn = false;
 
 
    const usernameRegex = /^[a-zA-Z0-9_]{4,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
 
    this.checkUsername = function(username) {
        return usernameRegex.test(username);
    };
 
 
    this.checkEmail = function(email) {
        return emailRegex.test(email);
    };
 
 
    this.checkPassword = function(password) {
        return passwordRegex.test(password);
    };
   
 
 
    this.login = function(passwordAttempt) {
        console.log("Stored Password:", _password);
        console.log("Attempted Password:", passwordAttempt);
       
        if (passwordAttempt === _password) {
            _loggedIn = true;
            console.log(`Welcome, ${_username}!`);
            updateContainer('Logged in successfully');
        }
        else {
            console.log('Incorrect password');
        }
    };    
        
 
 
    this.logout = function() {
        _loggedIn = false;
        console.log(`Goodbye, ${_username}!`);
        updateContainer('Logged out successfully');
    };
 
 
    this.resetPassword = function(newPassword) {
        _password = newPassword;
        console.log('Password reset successful');
    };
 
 
    this.getUsername = function() {
        return _username;
    };
 
 
    this.getEmail = function() {
        return _email;
    };
 }
 
 
 function updateContainer(message) {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = `<div class="success">${message}</div>`;
    } else {
        console.error("Container element not found");
    }
 }
 
 
 
 
 function submitted() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
 
 
    document.getElementById('t1').innerHTML = '';
 
 
    if (!username || !email || !password) {
        document.getElementById('t1').innerHTML = 'Please fill out all fields';
        return;
    }
 
 
    const newUser = new User(username, email, password);
    if (!newUser.checkUsername(username) || !newUser.checkPassword(password) || !newUser.checkEmail(email)) {
        document.getElementById('t1').innerHTML = 'Invalid username, email, or password';
        return;
    }
    newUser.login(password);
 }
 
 
 function loggedout() {
    const username = document.getElementById('username').value;
    const newUser = new User(username, '', '');
    newUser.logout();
 }
 
 
 function forget() {
    const username = document.getElementById('username').value;
    const newUser = new User(username, '', '');
    const newPassword = prompt("Enter new password:");
    if (!newUser.checkUsername(username) || !newUser.checkPassword(newPassword)) {
        console.log('Invalid username or password');
        return;
    }
    const confirmPassword = prompt("Confirm new password:");
    if (newPassword === confirmPassword) {
        newUser.resetPassword(newPassword);
        console.log('Password changed successfully');
        updateContainer('Password changed successfully');
    } else {
        console.log('Passwords do not match');
    }
 }