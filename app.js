let myName = "Don"
let greeting = "Hello World"

let happy = true
let sad = false

let unassigned

let noValue = null

let me = {
    happy: true,
    born: 1998,
    died: null
}

let addNum = 3 + 5 //8

addNum += 10 //18

let subNum = 5 - 2 //3

subNum -= 1 //2

let multNum = 5 * 2 //10

multNum *= 3 //30

let divNum = 12 / 2 //6

divNum /= 2 //3

let incNum = 0

incNum ++  //1

let decNum = 1

decNum -- //0

10 == 12 //false

10 == "10" //true

10 === "10" //false

10 != 5 //true

10 !== 10 //false

10 !== "10" //true

10 < 5 //false

10 > 5 //true

10 <= 10 //true

10 >= 0 //true

let num1 = 10
let num2 = 20

if(num1 < num2){
    console.log("Number 1 is less than number 2")
} else if(num1 > num2) {
    console.log("Number 1 is greater than number 2")
} else {
    console.log("number 1 is the same as number 2")
}

let letter = "n"

switch(letter){
    case "n":
    console.log("n")
    break;
    case "N":
    console.log("N")
    break;
    case "a":
    console.log("a")
    break;
}

let apple = "apple"
let orange = "orange"
let pear = "pear"

let fruits = []

fruits.push("apple") //["apple"]

fruits.push(orange) //["apple", "orange"]

fruits.push(pear) //["apple", "orange", "pear"]

//0: "apple"
//1: "orange"
//2: "pear"

fruits[0] //apple

fruits[1] //orange

fruits[2] //pear

for(let count = 0;count <= 10;count++){
    console.log(count)
}

let number = 0
while(number <=10){
    console.log(number)
    number++
}

let counter = 0

do{
    console.log(counter)
    counter++
}while(counter <= 10)




