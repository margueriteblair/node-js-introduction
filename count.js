module.exports.counter = function(arr) {
    return 'There are ' + arr.length + " elements in this array."
}

module.exports.adder = function(a, b) {
    return `The sum of the two numbers is ${a+b}.`
}

module.exports.pi = 3.14


// module.exports = {
//     counter = counter,
//     pi = this.pi,
//     adder = this.adder
// };