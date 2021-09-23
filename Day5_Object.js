// let person = {
//     firstName: 'pranali',
//     lastName: 'pansare',
//     age: 22

// }


// // Fetching the value from an Object
// // Dot notation
// console.log(person.firstName)

// // Bracket Notataion
// console.log(person['lastName'])

// // Updatring the value  from Object
// person.firstName = 'kaveri'
// console.log(person)

// // Adding property to Object
// person.language = 'marathi'
// person['language'] = 'hindi'
// console.log(person)

 let h = [1, 8, 9, 55, 4, 7]
// for (let i = 0; i < h.length; i++) {
//     console.log(i)
// }

for (let i = 0; i < h.length; i++) {
    console.log(h[i])
}

// person2 = {
//     firstName: 'pranali',
//     lastName: 'pansare',
//     age: 22,
//     rollNumber: 68
// }

// console.log(person2['firstName'])

// for (key in person2) {
//     console.log(key)
// }

// for (key in person2) {
//     console.log(key, person2[key])
// }


// // delete is used to deletr some property
// delete person2.firstName
// console.log(person2)


let students = [
    {
        firstName:"pranali",
        age:25,
        skills:["python","javascript","css","sql"]
    },
    {
        firstName:"komal",
        age:28,
        skills:["javascript","css"]
    },
    {
        firstName:"sanchita",
        age:27,
        skills:["python","javascript"]
    }

]

 //console.log(students[0]['firstName'])
// console.log(students[2]['firstName'])
// console.log(students[2]['skills'].length)
// Average age of all students


for(let i = 0 ; i < students.length ;i++){
    if(students[i].age < 25){
        console.log(students[i].firstName)
    }
}

let sum = 0 

for(let i = 0 ; i < students.length ;i++){
    sum = students[i].age  + sum
}
console.log(sum/students.length)

// Name with skills
for(let i = 0 ; i < students.length ;i++){
    console.log(` ${students[i].firstName} : ${students[i].skills.length} `)
    // chinmay : 4
}

// Name the person with python skill

for(let i = 0 ; i < students.length ;i++){
    if(students[i].skills.indexOf("python")>=0){
        console.log(students[i].firstName)
    }
}









let firstName = "chinmay"
let lastName = "deshpande"
console.log(`My first name is ${firstName} and my last name is ${lastName}`)






