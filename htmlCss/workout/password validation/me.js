//password eye-icon validation
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.textContent = '👁️';
    } else {
      passwordInput.type = 'password';
      eyeIcon.textContent = '👁️';
    }
  }
 
function validatePassword() {
    let username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Check if fields are empty
    if (username.trim() === '') {
      //usernameError.textContent = 'Username is required';
	  document.getElementById("message").textContent = "Username is required.";
      return false;
    }

    if (password.trim() === '') {
      //passwordError.textContent = 'Password is required';
	  document.getElementById("message").textContent = "Password is required.";
      return false;
    }
    
	
	if(password.length<=5){
		alert("Password is in valid.please enter minimum 5 digit with special charcter");
		return false;
	}
	
	var users = {
            "fin7": "isl@123",
            "fin5": "isl@123",
        };
        document.getElementById("myForm").addEventListener("submit", function (event) {
            event.preventDefault();
            var usernameInput = document.getElementById("username").value;
            var passwordInput = document.getElementById("password").value;

            console.log(users[usernameInput] + "::" + passwordInput);

            if (users[usernameInput] === passwordInput) {
                window.location.href = "me2.html";
            } else {
                document.getElementById("message").textContent = "Invalid username or password. Please try again.";
            }
        });
	
	alert('Form submitted successfully! Navigating to the next page...');

    return true;
  }
 
