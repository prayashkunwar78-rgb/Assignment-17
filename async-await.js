// ===============================
// ASYNC / AWAIT
// ===============================

// async keyword makes a function return a promise
async function checkNumberAsync(num) {

    // Checking even condition
    if (num % 2 === 0) {

        // return works like resolve
        return "Number is EVEN";

    } else {

        // throw works like reject
        throw "Number is ODD";
    }
}

// Function to handle async function
async function runCheck() {
    try {
        // await waits for promise result
        let result = await checkNumberAsync(9);

        // prints result if success
        console.log(result);

    } catch (error) {

        // handles error if promise fails
        console.log(error);
    }
}

// Calling function
runCheck();

// -------------------------------
// Mock user data example
// -------------------------------

// async function to simulate API call
async function getUserData() {

    // returning promise with delay
    return new Promise(function (resolve) {

        // delay of 2 seconds
        setTimeout(function () {

            // sending fake user data
            resolve({
                name: "Prayash",
                age: 20,
                city: "Dhading"
            });

        }, 2000);
    });
}

// Function to display user data
async function showUser() {

    // waiting for user data
    let user = await getUserData();

    // printing user object
    console.log(user);
}

// Calling function
showUser();


