// Fetch API is used to get data from a server (API)

// Fetch users data
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); // convert to JSON
  })
  .then((data) => {
    console.log("Users:", data);

    const output = document.getElementById("output");

    // Display in HTML
    data.forEach((user) => {
      output.innerHTML += `<p>${user.name} - ${user.email}</p>`;
    });
  })
  .catch((error) => {
    console.log("Error fetching users:", error);
  });

// Fetch joke API
fetch("https://official-joke-api.appspot.com/random_joke")
  .then((res) => res.json())
  .then((data) => {
    console.log("Joke:", data);
  })
  .catch((err) => console.log("Error:", err));

/*
Difference:
Fetch API vs XMLHttpRequest:
- Fetch is modern and easier
- XMLHttpRequest is older and more complex

Why error handling is important:
- Network can fail
- API may not respond
- Prevents app from crashing
*/