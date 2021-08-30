// // inheritances
// class Person{

//     constructor(pname,lastname){
//         this.pname = pname,
//         this.lastname = lastname
//     }
//     walk(){
//         console.log('walking')
//     }


// }
// class student extends Person{

//     displayName(){
//         console.log(this.lastname)
//     }
// }

// let pranali = new student("tejas","pansare")
// console.log(pranali.lastname)
// pranali.walk()



class Granmother {
    constructor(gName, lastName, age) {
        this.gName = gName,
            this.lastName = lastName,
            this.age = age
    }
    displayName() {
        console.log('My name is ${this.gName}and My age is${this.age}')
    }
}

class Mother extends Granmother {
    constructor(gName, lastName, age, fName, fage) {
        super(gName, lastName, age)
        this.fName = fName,
            this.fage = fage
    }

    displayName() {
        console.log('My name is ${this.fName}and My age is${this.fage}')
    }
}

class son extends Mother {
    constructor(gName, lastName, age, fName, fage, sName, slastName) {
        super(gName, lastName, age, fName, fage)
        this.sName = sName,
        this.slastName = slastName
    }
    displayName() {
        console.log('My name is ${this.sName}and My lastname is${this.slastName}')
    }
}


// let kaveri = new Mother('suman','jare',63,'kaveri',42)
// console.log(kaveri)
// kaveri.displayName()
let p = new son('suman', 'jare', 63, 'kaveri', 42, 'pranali', 'pansare')
console.log(p)
p.displayName