import inquirer from "inquirer";

//Initialize the balance and pin code
let myBalance = 5000;
let myPin = 1234;

//Print welcome message
console.log("Welcome to the ATM Machine");

let pinAnswer = await inquirer.prompt ([
    {
        name: "pin", 
        type: "number",
        message: "Enter your pin code:",
    },
]);

if(pinAnswer.pin === myPin) {
    console.log("Pin is correct, login successful!")
//if pin is correct
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "SElect an operation:",
            choices: ["Withdraw amount", "Check Balance"]
        }
    ])

if(operationAnswer.operation === "Withdraw amount") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw:"
        }
    ])
    if(amountAns.amount > myBalance) {
        console.log("Insufficient Balance!")
    }
    else{
        myBalance -= amountAns.amount
        console.log(`${amountAns.amount} Withdraw succesfully!`)
        console.log(`Your remaining balance is ${myBalance}`)
    }
}
else if(operationAnswer.operation === "Check Balance") {
    console.log(`Your current balance is ${myBalance}`)
}
}
//if pin is wrong
else {
    console.log("Pin is incorrect, Try again !")
};
