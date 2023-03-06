const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(number) {
  // Check if the number entered is a positive integer
  if (isNaN(number) || number < 0 || !Number.isInteger(Number(number))) {
    console.log("Please enter a positive integer.");
    rl.close();
  } else {
    let factorial = 1;
    // Calculate the factorial of the number entered
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    console.log(`The factorial of ${number} is ${factorial}.`);
    rl.close();
  }
});
