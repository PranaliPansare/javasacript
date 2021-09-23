
// //   properties and method

// //     human - name , age , color 
// //     methods - eat() , walk()
// //     function inside object method

// // *********************************************************************************************** 
// // // // function declaration 
// // function add(){
// //     console.log(10+8)
// // }
// // add()

// // // // function expression

// // let add = function (){
// //     console.log(10+8)
// // }
// // add()


// // // // Arrow function

// // let add = ()=> {
// //     console.log(10+8)
// // }
// // add()

// // let Pranali = {
// //     'fullName': "Pranali Pansare",
// //     'age': 22,

// //     'talk': function () {
// //         console.log('hello ' + this.fullName)


// //     }

// // }

// // let sanchita = {
// //     'fullName': "sanchita Dhole",
// //     'age': 24,

// //     'talk': function () {
// //         console.log('WELCOME ' + this.fullName)


// //     }

// // }

// // console.log(sanchita.age)
// // Pranali.talk()
// // sanchita.talk()



// //-----------------------------

// // let x  = 10

// // function add(){

// //     x = 30

// //     console.log(x) //30

// //     x = 40

// //     console.log(x) // 40




// // }
// // add()
// // console.log(x)



// // difference between let , const ,var

// // var x = 10 
// // console.log(x)

// // {
// //     console.log(x)

// // }

// // program 2


// // {
// //     var x = 10 
// //     console.log(x)  // 10
// // }

// // console.log(x) //10

// // program 3

// // variable defined with let keyword is blocked scope

// // {
// //     let x = 10 
// //     console.log(x)
// // }

// // console.log(x)


// // program 4

// // {
// //     const x = 10 
// //     console.log(x)
// // }

// // console.log(x)



// // let and const are blocked scope and var is function scoped


// //  let d = 10

// // {

// //     d = 30
// //     console.log(d) // 30


// // }

// // console.log(d) // 30


// //  program 5


// // let d = 10
// // {
// //     let d = 30
// //     console.log(d)  //30
// // }

// // console.log(d)  // 10


// // program  6

// // const r = 50;
// // {
// //     const r = 10 
// //     console.log(r)
// // }
// // console.log(r)
// //---------------------------->


// // program 6
// // var f = 10
// // function add() {
// //     var f = 30
// //     console.log(f) // 30

// // }
// // console.log(f) // 10
// // add()

// // ----------


// // program 6
// // var f = 10
// // function add(){
// //      f = 30
// //     console.log(f) // 30

// // }
// // console.log(f) // 10
// // add()



// // program 7

// let d = 400
// var f = 10
// function add() {

//     let d = 30
//     f = 30
//     console.log(f) //30
//     {
//         let d = 45
//         console.log(d) //45
//     }

//     d = 70
//     {
//         console.log(d) //70
//     }

// }
// console.log(f) //10
// add()
// console.log(d)//400




const d = 10
{
   let  d = 56
    console.log(d)
}
console.log(d)