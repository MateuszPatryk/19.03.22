const sayHello = () => { console.log("Hello") }; //jak są nawiasy wąsate to musi być return, bo nie zwróci

const sayHello2 = () => { console.log("Hello") };

function sayHello3() {

    return "hello"
}
console.log(sayHello() + ", Marcin")
console.log(sayHello2() + ", Marcin")
console.log(sayHello3() + ", Marcin")

module.exports = {

    sayHello,
    sayHello3,
    sayHello2
}

console.log