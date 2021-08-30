// // Class


// class person {
//     fullName = null
//     age = null
//     rollno = null
// }

// // Setting the object properties outside the class

// let pranali = new person
// pranali.age = 22
// pranali.fullName = "pranali Pansare"
// pranali.rollno = 68
// console.log(pranali)

// setting the properies using the function

// class Person2{  

//         age= null
//         roll = null
//         fullName = null

//         setAge(a){
//             this.age = a
//         }

//         setRoll(rollno){
//             this.roll = rollno
//         }

//         fullName(name){
//             this.fullName = name
//         }

//     }
//     let pranali=new Person2()
//     pranali.setAge(22)
//     console.log(pranali)

// // seeting the peroperties using constructor

class students {
    constructor(fullName, age, rollno) {
        this.fname = fullName,
            this.ageNo = age,
            this.rollNo = rollno
    }


}

let pranali = new students("tejas", 20, 34)
let sanchita = new students("aishu", 21, 33)
let komal = new students("kaveri", 23, 33)


// looping
let newarr = [pranali, sanchita, komal]
let sum = 0
for (let i = 0; i < newarr.length; i++) {
    // console.log(newarr)
    sum = sum + newarr[i].ageNo
}
console.log(sum / newarr.length)


class Bank {

    constructor(name, accountNo,bal){
        this.fullName = name,
        this.accNo = accountNo,
        this.transactions = []
        this.bal = bal
    }

    depoist(amount){

        this.transactions.push(amount)
        this.bal = this.bal + amount
        console.log(`The amount of ${amount } added to you account`)
        console.log(`your current bal is ${this.bal}`)
        return this.bal

    }

    withdraw(amount){
        if(amount < this.bal){
            this.transactions.push(-amount)
            this.bal = this.bal - amount
            console.log(`The amount of ${amount } deducted from you account`)
            console.log(`your current bal is ${this.bal}`)
            return
        }
        else{
            console.log('In sufficient bal to withdraw')
        }


    }

   }

let sbi =  new Bank("pranali",46386468,5000)
sbi.depoist(1000)
sbi.withdraw(500)
sbi.depoist(4000)
sbi.withdraw(600)
sbi.depoist(7000)
sbi.withdraw(300)
console.log(pranali.transactions)


