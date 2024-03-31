import inquirer from "inquirer";

let  myBalance = 10000; //RS
let myPin = 23232;


let pinanswer = await inquirer.prompt([
    {
        name: "pincode",
        message: "enter your pin",
        type: "number"

    }
]);
if(pinanswer.pincode === myPin)
{
console.log("correct pin code")

let opretionAns = await inquirer.prompt(
    [
        {
            name: "opretion",
            message: "please select one option",
            type: "list",
            choices: ['withdraw','check balance'],
        }
    ]
)
    console.log(opretionAns)

if(opretionAns.opretion === "withdraw"){

    let amountans = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter the amount to withdraw Rs",
            type: "number"
        }
    ]);

if (myBalance < amountans.amount){
    console.log("insufficient balance")
}else if (myBalance -= amountans.amount){
    console.log("your current balance is Rs" + myBalance)
}

   
}
else if (opretionAns.opretion){
    console.log("your balancs is" + myBalance)
}
  
}
else
{
console.log('incorrect pin code')
}