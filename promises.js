// ========================================
// PROMISES IN JAVASCRIPT
// ========================================

/*
DEFINITION:
A Promise is an object in JavaScript that represents
the eventual completion (success) or failure (error)
of an asynchronous operation.

It is mainly used to handle tasks that take time like:
- Fetching data from API
- Loading files
- Database operations
*/

// ----------------------------------------
// PROMISE STATES EXPLAINED
// ----------------------------------------
/*
1. pending
   - Initial state
   - Promise is created but not completed yet

2. fulfilled
   - Operation completed successfully
   - resolve() is called

3. rejected
   - Operation failed
   - reject() is called
*/

// ----------------------------------------
// EXAMPLE 1: CHECK EVEN OR ODD NUMBER
// ----------------------------------------

// Function that checks whether a number is even or odd
function checkNumber(num) {

    // Creating and returning a Promise
    return new Promise(function (resolve, reject) {

        // Condition to check even number
        if (num % 2 === 0) {

            // resolve() means promise is fulfilled
            resolve("Success: Number is EVEN");

        } else {

            // reject() means promise is rejected
            reject("Error: Number is ODD");
        }
    });
}

// ----------------------------------------
// CONSUMING PROMISE USING then, catch, finally
// ----------------------------------------

checkNumber(6)

    // then() executes when promise is fulfilled
    .then(function (result) {
        console.log(result);
    })

    // catch() executes when promise is rejected
    .catch(function (error) {
        console.log(error);
    })

    // finally() executes in both success and failure
    .finally(function () {
        console.log("Number checking completed");
    });

/*
DIFFERENCE BETWEEN resolve AND reject:

resolve():
- Called when operation is successful
- Moves promise state to fulfilled
- then() executes

reject():
- Called when operation fails
- Moves promise state to rejected
- catch() executes
*/

// ----------------------------------------
// EXAMPLE 2: SIMULATING DATA LOADING
// ----------------------------------------

/*
This example shows a real-world async task.
Data loading usually takes time.
setTimeout is used to simulate delay.
*/

function loadData() {

    // Returning a promise
    return new Promise(function (resolve, reject) {

        // Simulating network delay of 2 seconds
        setTimeout(function () {

            // Simulating successful data loading
            resolve("Data loaded successfully ");

            // NOTE:
            // If something went wrong, we could use:
            // reject("Failed to load data");

        }, 2000);
    });
}

// Consuming the data loading promise
loadData()
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });

/*
WHY PROMISES ARE IMPORTANT IN REAL WORLD:

1. JavaScript is single-threaded
2. Time-consuming tasks should not block execution
3. Promises handle async operations cleanly
4. Avoid callback hell
5. Improve readability and maintainability

REAL-WORLD USE CASES:
- API requests
- User authentication
- File upload/download
- Payment processing
*/
