import inquirer from "inquirer";

console.log("Welcome to codewithdaniyal - CURRENCY CONVERTOR")

let  exchangeRate:any  = {
    "USD" : 1,
    "EUR" : 1.1497,
    "GBP" : 1.3110,
    "JPY" : 129.53,
    "PKR" : 280
}

let userAnswer = await inquirer.prompt([
    {
        type: "list",
        name: "currency",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "GBP", "JPY", "PKR"]
    },
    {
        type: "list",
        name: "toCurrency",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "GBP", "JPY", "PKR"]
    },
    {
        type: "input",
        name: "amount",
        message: "Enter the amount to convert"
    }
]);

let fromCurrency = exchangeRate[userAnswer.currency]

let toAmount = exchangeRate[userAnswer.toCurrency]

let amount = userAnswer.amount

let baseAmount = amount / fromCurrency
let convertedAmount = baseAmount * toAmount

console.log(`The converted amount is ${convertedAmount}`)