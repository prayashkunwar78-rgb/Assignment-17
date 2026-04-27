// localStorage is used to store data in the browser
// Data stays even after page reload

const form = document.getElementById("form");

// Save data on submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
});

// Load saved data on page reload
window.onload = function () {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  if (name && email) {
    document.getElementById("saved").innerText =
      name + " - " + email;
  }
};

// Clear stored data
function clearData() {
  localStorage.clear();
}

/*
Difference:
localStorage vs sessionStorage:
- localStorage: permanent until manually cleared
- sessionStorage: cleared when tab is closed

Use case:
- Saving user preferences
- Remember login info
*/