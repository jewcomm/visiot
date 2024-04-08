// test
const order = require('./order.js')

test ( "Testing 41", () => {
    let income = 41
    const expectedOrder = [21,20]
    let calculatedOrder = order(income)
    expect(calculatedOrder).toEqual(expectedOrder);
})

test ( "Testing 60", () => {
    let income = 60
    const expectedOrder = [30,30]
    let calculatedOrder = order(income)
    expect(calculatedOrder).toEqual(expectedOrder);
})

test ( "Testing 126", () => {
    let income = 126
    const expectedOrder = [32,32,31,31]
    let calculatedOrder = order(income)
    expect(calculatedOrder).toEqual(expectedOrder);
})

test ( "Testing 1000", () => {
    let income = 1000
    const expectedOrder = [
        40, 40, 40, 40, 40, 40, 40, 40,
        40, 40, 40, 40, 40, 40, 40, 40,
        40, 40, 40, 40, 40, 40, 40, 40,
        40
      ]
    let calculatedOrder = order(income)
    expect(calculatedOrder).toEqual(expectedOrder);
})

test ( "Testing 999", () => {
    let income = 999
    const expectedOrder = [
        40, 40, 40, 40, 40, 40, 40, 40,
        40, 40, 40, 40, 40, 40, 40, 40,
        40, 40, 40, 40, 40, 40, 40, 40,
        39
      ]
    let calculatedOrder = order(income)
    expect(calculatedOrder).toEqual(expectedOrder);
})

test ( "Testing 40", () => {
    let income = 40
    const expectedOrder = [40]
    let calculatedOrder = order(income)
    expect(calculatedOrder).toEqual(expectedOrder);
})

test ( "Testing 23", () => {
    let income = 23
    const expectedOrder = [23]
    let calculatedOrder = order(income)
    expect(calculatedOrder).toEqual(expectedOrder);
})

test ( "Testing -1", () => {
    let income = -1
    const expectedOrder = []
    let calculatedOrder = order(income)
    expect(calculatedOrder).toEqual(expectedOrder);
})
