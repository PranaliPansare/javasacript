

let headingOne = document.querySelector('h1')
let element = document.querySelector('#newId')
console.log(element)

let elementTwo = document.querySelector('.newClass')
console.log(elementTwo)

let buttonButton = document.querySelector('button[name="addButton"]')
console.log(buttonButton)



let inputText = document.querySelector('input[type="text"]')
console.log(inputText)



buttonButton.addEventListener('click',function(){

    elementTwo.textContent = inputText.value // orange
    elementTwo.style.color = inputText.value // orange

    

})


console.log(headingOne.textContent)
console.log(headingOne['textContent'])

headingOne['textContent'] = "redasfdsf"

