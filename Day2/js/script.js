const loginForm = document.getElementById("loginForm");
const messageBox = document.getElementById("messageBox");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "admin") {
    messageBox.style.color = "green";
    messageBox.textContent = "Login successful!";
  } else {
    messageBox.style.color = "red";
    messageBox.textContent = "Invalid credentials!";
  }
});
