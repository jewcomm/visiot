// tax

const { continueStatement } = require("@babel/types")
const { count } = require("console")

function order(numOrders) {
    let numTrucks = Math.ceil(numOrders / 40);
    let ordersPerTruck = Math.floor(numOrders / numTrucks);
    
    let ordersPerTruckList = new Array(numTrucks).fill(ordersPerTruck);

    let remainingOrders = numOrders - ordersPerTruck * numTrucks;
    for (let i = 0; i < remainingOrders; i++) {
        ordersPerTruckList[i % numTrucks] += 1;
    }

    return ordersPerTruckList;
}

module.exports = order