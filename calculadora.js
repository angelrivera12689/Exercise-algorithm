const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    const sum = Number(num1) + Number(num2);
    const subtract = Number(num1) - Number(num2);

    console.log(`Sum: ${sum}`);
    console.log(`Subtraction: ${subtract}`);

    rl.close();
  });
});
