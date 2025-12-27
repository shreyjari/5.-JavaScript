// Variable and Constant
const birthday = "1998-10-31";

// Function
function SayHello(name_){
    console.log("Hey " + name_ + " how are you doing?");
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getevens = (numbers) => {
    let evens = numbers.filter(number => number % 2 === 0);
    return evens;
    console.log(evens);
}

let normalname = "Shrey";
let javascriptname = normalname + 'Script';
console.log('Your JavaScript Name is ' + javascriptname);