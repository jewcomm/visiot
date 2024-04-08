// tax

const { continueStatement } = require("@babel/types")
const { count } = require("console")

const brackets = [0, 100000, 250000, 1000000]
const taxRates = [0, 0.05, 0.10, 0.20]

function tax (income) {
    let result = 0

    for (let i = 0; i <= brackets.length; i++){
        if (income > brackets[i]) {
            if (income > brackets[i]) {
                result = tax(brackets[i]) + ((income - brackets[i]) * taxRates[i]) 
            }
        }
    }

    return result
}

module.exports = tax