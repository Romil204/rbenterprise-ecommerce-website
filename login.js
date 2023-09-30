const loginBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const loginLi = document.getElementById("login-li");

loginBtn.addEventListener("click", () => {
  loginForm.style.display = "block";
});

submitBtn.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Here, you can add your own logic to check the username and password against a database or other authentication system.
  // For this example, let's assume there's a user with the username "demo" and password "123456".
  if (username === "demo" && password === "123456") {
    alert("Login successful!");
    loginForm.style.display = "none";
    loginLi.innerHTML = `<a href="#">Logged in as ${username}</a>`;
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
