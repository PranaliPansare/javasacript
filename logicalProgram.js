
// // // //problem1
// // // let StringA = "I am learn to javascript"

// // // let j = StringA.split(" ") //[ 'Í' , 'am', 'new',"to","javascript"]
// // // let k = []
// // // function revString(namei) {
// // //     revStr = ""
// // //     for (let i = 0; i < namei.length; i++) {
// // //         revStr = namei[i] + revStr   //c + " " ----> yamnihc
// // //     }
// // //     return revStr
// // // }

// // // for (let i = 0; i < j.length; i++) {
// // //     k.push(revString(j[i])) // [ 'I', 'ma', 'wen', 'ot', 'tpircsavaj' ]
// // // }
// // // console.log(k.join(" "))
// // **********************************************************************


// // Program 1
// // let rev = "hello i am rohan"?


// // let String = ("i am learn to javascript")
// // let splitString = String.split('')
// // let NewString = ['']

// // function reverseString(newi) {
// //     revstr = " ";

// // }
// // for (i = 0; i < newi.lenght; i++) {
// //     revstr = namei[i] + revstr;
// // }
// // return revstr;
// // for (let i = 0; i < splitString.length; i++) {
// //     let NewString = [''].push(revString(splitString[i]));
// // }
// // console.log(newString1.join(" "));

// // *************************************************************************
// // Program 2
// // Highest and lowest number from an array
// let number = [11,33,44,55,66,77,-88]
// let highest = 0
// let lowest = number[0]
// for ( i = 0; i < number.length; i++) {
// //    console.log(i)
// //  console.log(number[i])

//     if (number[i] > highest) {
//         highest = number[i]
//     }
//     else if (number[i]< lowest){
//         lowest = number[i]
//     }

// }
//  console.log(highest)
// console.log(lowest)
// // // *******************************************************************
// // // Problem 3
// // // Reversing the string

// // let stringP = 'pranali,sanchita,komal, madhuri'
// // let stringB = "";
// // for (let i = stringP.length - 1; i >= 0; i--) {
// //     stringB += stringP[i];
// // }
// // console.log(stringB)
// // let revStr = stringP.split(",").reverse();
// // console.log(revStr);
// // // ************************************************
// // program 4
// // CChinmayY— remove first and last chracter
// let newString = "Pranali";
// let namei = "";
// for (let i = 0; i < newString.length; i++) {
//     if (i != 0 && i != newString.length - 1) {
//         namei = namei + newString[i];
//     }
// }
// console.log(namei);


// // ********************************************************
// // Program 5
// // remove the  .py exteion
// // let p = "python.py";
// // let B= "";
// // for (let i = 0; i <p.length; i++) {
// //   if (i == P.length - 1 || i == P.length - 2) {
// //     B = B + P[i];
// //   }
// // }
// // console.log(p);

// // *************************************************888
// // problem 6
// // Count the vowels from given string

// let song =
//     "i tried so hard and got so far But in the end it doesn't even matter";
// let count1 = 0;
// for (let s = 0; s < song.length; s++) {
//     if (
//         song[s] == "a" ||song[s] == "e" ||song[s] == "i" ||song[s] == "o" ||song[s] == "u"
//     )
//      {
//         count1++;
//     }
// }
// console.log(count1);

// // ***********************************************************
// // Program 7
// // [[1, 2, 5], [4, 6, -9], [100, -200, -300]]
// // let newStr = [
// //     [1, 2, 5],
// //     [4, 6, -9],
// //     [100, -200, -300]
// // ]
// // let arr = [];
// // for (let i = 0; i < newStr.length; i++) {
// //     for (let B= 0; B < newStr[i].length; j++) {
// //         arr.push(newStr[i][B])
// //     }
// // }
// // console.log(arr)
// *************************************************************************************

// // // program 8
// // // Sorting the array have differant type of elements

// // // let multiArray = [
// // //   24,
// // //   "Pranali",
// // //   "Pansare",
// // //   -22,
// // //   "komal",
// // //   4,
// // //   "sanchita",
// // //   "tejas",
// // //   -365,
// // // ];
// // // let digits = [];
// // // let alphabets = [];
// // // for (let m = 0; m < multiArray.length; m++) {
// // //   if (typeof multiArray[m] == "number") {
// // //     digits.push(multiArray[m]);
// // //   } else {
// // //     alphabets.push(multiArray[m]);
// // //   }
// // // }
// // // digits.sort(function (a, b) {
// // //   return a - b;
// // // });

// // alphabets.sort();

// // // let newArray = digits.concat(alphabets);
// // // console.log(newArray);
// // // *********************************************************************
// // // Program  9
// // // a4b3c2d1?

// // // function Compressed(string) {
// // //     let CompressedString = "";
// // //     let count1 = 0;
// // //     for (let i = 0; i < string.length; i++) {
// // //       count1++;
// // //       if (string[i] != string[i + 1]) {
// // //         CompressedString += string[i] + count1;
// // //         count1 = 0;
// // //       }
// // //     }
// // //     console.log(CompressedString);
// // //   }
// // //   Compressed("aaaabbbccd");
// // // //   ****************************************************
// // // // Problem 10

// // // let numString = [123];
// // // let newstr = "";
// // // for (let i = numString.length - 1; i >= 0; i--) {
// // //   newstr += numString[i];
// // // }
// // // console.log(`ans${newstr}`);

// // // *************************************************8
// // //   program 11
// // Min Max
// let newarr  = [33,55,66,77,345,98,-45]
// let Max = newarr[0]
// let Min = newarr[0]
// for(let i =0;i<newarr.length;i++){
//     // console.log(i)
//     // console.log(newarr[i])
//     if(newarr[i] > Max){
//         Max=newarr[i]
//     }
//     else(newarr[i]< Min)
//         Min=newarr[i]
//     }

// console.log(Max)
// console.log(Min)
// *********************************************************************
// Program 12
// Q. crate Object{
// }
let obj = "AAaaBBbbCCccDDdd"
let obj2 = {}
obj = obj.toLowerCase()

for(let i = 0 ; i < obj.length ; i++){
        if(obj2.hasOwnProperty(obj[i])){
            obj2[obj[i]] = obj2[obj[i]] + 1
       }
        else{
            obj2[obj[i]] = 1
        }
    }
    console.log(obj2)
//****************************************************************************
// program13
// Q. count the special Characters ans Number?

let newstr = "123AAAAbaca34@353543534535354sca"
let alphabets=0
let num= 0
let specialC=0
for(let i = 0 ; i < newstr.length ; i++){
        if(Number(newstr[i])){
            num = num + 1
        } 
        else if(typeof newstr[i] === "string"){
            alphabets= alphabets+ 1
        }
        else{
            specialC = specialC + 1
        }
    }
    console.log(alphabets)
    console.log(num)

// *********************************************************************************
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// let gaa = "123AAAAbaca34@353543534535354sca"
// let al = 0
// let num = 0
// let sc = 0

// for(let i = 0 ; i < gaa.length ; i++){
//     if(Number(gaa[i])){
//         num = num + 1
//     } 
//     else if(typeof gaa[i] === "string"){
//         al = al + 1
//     }
//     else{
//         sc = sc + 1
//     }
// }
// console.log(al)
// console.log(num)




















