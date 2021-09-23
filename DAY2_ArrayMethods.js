// // // // / Push
// // // let student = ["pranali", "sanchita", "Aishu"]
// // // updatestudets = [student.push("komal")]
// // // console.log(updatestudets)

// // // // pop
// // // updatestudets = [student.pop()]
// // // console.log(updatestudets)

// // // // shift

// // // updatestudets = [student.shift()]
// // // console.log(updatestudets)

// // // // Unshift
// // // updatestudets = student.unshift()
// // // console.log(updatestudets)

// // // // Indexof
// // // let firstName = student.indexOf("sanchita")
// // // console.log(firstName)


// // // forEach


// // // let student = ["pranali", "sanchita", "Aishu"]
// // // let array = student.forEach(function (el, index, arr) {

// // //     console.log(`WELCOME${el}!`)
// // // })
// // // console.log(array) *********undefine becz.does not retrun foreach method********


// // // // Map
// // // // let student2 = ["pranali", "sanchita", "Aishu","kaveri"]
// // // // let student = student2.map(function(el,arr,index){
// // // //     return `Welcome ${el}`
// // // // })
// // // // console.log(student2)

// // // // Filter
// // // let student2 = ["pranali", "sanchita", "Aishu", "kaveri"]
// // // let newarr = student2.filter(function (el, arr, index) {
// // //     return el.length < 6
// // // })
// // // console.log(student2)

// // // // Reduce 

// // // let marks = [300,400,500]
// // // let add = marks.reduce(function(acc,el,index,arr){
// // //     return acc + el
// // // },0)
// // // // console.log(add) = 1200

// // // every

// // students = ["p", "s", "A", "k"]
// // let newarr = students.every(function(el,index,arr){
// //     return el.length == 1
// // })
// // console.log(newarr)


// // // some

// // // students = ["pranali", "sanchita", "Aishu", "kaveri"]
// // // let newarr = students.some(function(el,index,arr){
// // //     return el.length > 5
// // // })
// // // console.log(newarr)

// // // find ---  array element ?--- condition 


// // let person = [

// //     {
// //         firstName:"pranali",
// //         age:22
    
// //     },

// //     {
// //         firstName:"sanchita",
// //         age:21,   
// //     }

// // ]
// // let student = person.find(function(el,index,arr){
// //     return el.age = 22
// // })
// // console.log(student)



// // // findIndex
// // let student2 = person.findIndex(function(el){
// //     return el.age == 21
// // })
// //  console.log(student2) 

//  // Associavity of operation

// let twoD = [[2,3,4],[5,6,7]]
// console.log(twoD[0][2])
// console.log(twoD[1][twoD[1].length-1])

// let newarr = twoD.flat()
// console.log(newarr)



// // sort (sort with string works differently -----)
// let markss = [-1,1,2,3]
// markss.sort()
// console.log(markss)


// splice
let names = ["pranali","Dilip","Pansare"]
let person = names.splice(1,2,"kaveri","tejas")
console.log(names)

//fill

let newarr =[1,2,3,3,4,5,6]
console.log(newarr.length)
newarr.fill("D",2,7) // 6th --- lastindex
console.log(newarr)



