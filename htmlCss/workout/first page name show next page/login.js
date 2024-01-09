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
	
	
	
	alert('Form submitted successfully! Navigating to the next page...');

    return true;
  }
 
