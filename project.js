// Fetch users and display them
const container = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const div = document.createElement("div");

      div.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
        <hr>
      `;

      // Save selected user
      div.addEventListener("click", () => {
        localStorage.setItem("selectedUser", JSON.stringify(user));
      });

      container.appendChild(div);
    });
  });

// Show saved user on reload
window.onload = function () {
  const savedUser = JSON.parse(localStorage.getItem("selectedUser"));

  if (savedUser) {
    document.getElementById("selected").innerText =
      "Last Selected: " +
      savedUser.name +
      " - " +
      savedUser.email;
  }
};

/*
Real-world use:
- APIs: get data from server
- Async: handle loading data
- LocalStorage: save user choice
*/