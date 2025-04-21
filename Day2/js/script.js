// Get references to the login form and message box elements
const loginForm = document.getElementById("loginForm");
const messageBox = document.getElementById("messageBox");

// Add an event listener to handle the form submission
loginForm.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the trimmed values of the username and password input fields
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Check if the username and password match the predefined credentials
  if (username === "admin" && password === "admin") {
    // Display a success message in green if credentials are correct
    messageBox.style.color = "green";
    messageBox.textContent = "Login successful!";
  } else {
    // Display an error message in red if credentials are incorrect
    messageBox.style.color = "red";
    messageBox.textContent = "Invalid credentials!";
  }
});
