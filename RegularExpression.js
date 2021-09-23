let firstName = "ninad"
// let amol = {

//     age:34,
//     firstName:"amolrao",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }
// }


// let chinmay = {

//     age:37,
//     firstName:"chinmay",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }

//}


// console.log(amol.age)
// console.log(amol.firstName)
// amol.displayName()

// let lastName = new String("Chinmay")
// let deshpande = "deshpande"
// console.log(lastName.toUpperCase())
// console.log(lastName.length)


// let names = ["chinmay","poorva","abhisha","ram"]
// let lastName = new Array(5)
// lastName[0] = "deshpande"
// lastName[1] = "vyas"
// lastName[2] = "burande"
// lastName[3] = "dani"
// lastName[4] = "hh"
// console.log(lastName)

// String  Array  Regex

// Person


class Person{

    constructor(age, firstName){
        this.firstName = firstName
        this.age = age

    }
    display(){
        console.log(`My name is ${this.firstName}`)
    }

}
let amol = new Person(23,"amol")
let chinmay = new Person(24,"chinmay")
//--------------------------------------
console.log(amol)
console.log(chinmay)


//-------------------------->

let students = new Array(2) //[amol,chinmay]
students[0] = amol
students[1] = chinmay

for(let i = 0 ; i < students.length ; i++ ){

    let obj = students[i]
    for(let key in obj){
        console.log(key , obj[key])
    }

}

// let regex1 = new RegExp("hello");
// let regex2 = /worlds/;
let regex2 = /python/i;
let rr  = "Hi i am to PYTHON and learning python"
let h = rr.search(regex2)
console.log(h)

let regex3 = /python/gi;
let rra  = "Hi i am to PYTHON and learning python"
let gg = rra.match(regex3)
console.log(gg)

let dd = rra.replace(regex3,"js")
console.log(dd)





















// //let firstName = "ninad"
// let amol = {

//     age:34,
//     firstName:"amolrao",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }
// }

// let chinmay = {

//     age:37,
//     firstName:"chinmay",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }

//}