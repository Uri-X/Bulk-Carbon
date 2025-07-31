// Handle signup
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!username || !password) return alert("All fields are required!");

  localStorage.setItem("bulkcarbon_user", JSON.stringify({ username, password }));
  alert("Account created successfully!");
  window.location.href = "login.html";
});

// Handle login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const user = JSON.parse(localStorage.getItem("bulkcarbon_user"));

  if (!user || user.username !== username || user.password !== password) {
    return alert("Invalid credentials!");
  }

  localStorage.setItem("bulkcarbon_loggedIn", "true");
  alert("Login successful!");
  window.location.href = "index.html";
});

// Optional: Redirect unauthenticated users
if (window.location.pathname.includes("index.html")) {
  const isLoggedIn = localStorage.getItem("bulkcarbon_loggedIn") === "true";
  if (!isLoggedIn) {
    alert("Please log in to continue.");
    window.location.href = "login.html";
  }
}
