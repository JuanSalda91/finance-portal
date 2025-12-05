//############### USER LOGIN FORM VALIDATION ###############//

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // 1. Select Elements
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
  
    // 2. Listen for the Form Submit
    loginForm.addEventListener("submit", function (event) {
      
      // Prevent the default form submission (so page doesn't reload instantly)
      event.preventDefault();
  
      // Reset error messages
      usernameError.textContent = "";
      passwordError.textContent = "";
      
      let isValid = true;
  
      // --- Validation Logic ---
  
      // Check Username
      if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Please enter your username.";
        isValid = false;
      }
  
      // Check Password
      if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Please enter your password.";
        isValid = false;
      } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
      }
  
      // --- Redirect Logic ---
      if (isValid) {
        // This line redirects the browser to the dashboard page
        window.location.href = "maindash.html";
      }
    });
  });
  