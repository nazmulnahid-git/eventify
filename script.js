// script.js

function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("All fields are required.");
    return false;
  }

  // Example validation
  if (!email.includes("@")) {
    alert("Enter a valid email.");
    return false;
  }

  alert("Login successful");
  return true;
}
