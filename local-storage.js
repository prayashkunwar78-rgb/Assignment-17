
// ======================================
// LOCAL STORAGE IN JAVASCRIPT
// ======================================
// localStorage is used to store data in the browser.
// Data remains even after page refresh or browser close.

window.onload = function () {

  // Get form and display element from HTML
  const form = document.getElementById("form");
  const savedText = document.getElementById("saved");

  // ======================================
  // LOAD SAVED DATA ON PAGE LOAD
  // ======================================
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  // If data exists, show it on page
  if (name && email) {
    savedText.innerText = name + " - " + email;
  }

  // ======================================
  // SAVE DATA ON FORM SUBMIT
  // ======================================
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop page reload

      const nameValue = document.getElementById("name").value;
      const emailValue = document.getElementById("email").value;

      // Save data in browser storage
      localStorage.setItem("name", nameValue);
      localStorage.setItem("email", emailValue);

      // Show saved data on screen
      savedText.innerText = nameValue + " - " + emailValue;

      alert("Data saved successfully!");
    });
  }
};

// ======================================
// CLEAR LOCAL STORAGE DATA
// ======================================
// This function is global so HTML can access it
window.clearData = function () {

  // Remove data from localStorage
  localStorage.removeItem("name");
  localStorage.removeItem("email");

  // Clear displayed text
  document.getElementById("saved").innerText = "";

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  alert("Data cleared successfully!");
};

/*
======================================
DIFFERENCE:

localStorage:
- Stores data permanently in browser
- Data stays after refresh

sessionStorage:
- Stores data temporarily
- Cleared when tab is closed

*/