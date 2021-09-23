let ollist = document.querySelector('ol')
let lilist = document.querySelectorAll('li')
let button = document.querySelector('#addbutton')
let input = document.querySelector('input')

button.addEventListener('click', function () {

    let newElement = document.createElement('li')
    newElement.textContent = input.value
    CreateButton(newElement)

    ollist.appendChild(newElement)

})

function CreateButton(li) {

    let removeButton = document.createElement('button')
    removeButton.textContent = "Remove"
    removeButton.classList = "remove"
    li.appendChild(removeButton)


    let upButton = document.createElement('button')
    upButton.textContent = "Up"
    upButton.classList = "up"
    li.appendChild(upButton)


    let downButton = document.createElement('button')
    downButton.textContent = "Down"
    downButton.classList = "down"
    li.appendChild(downButton)


}
Array.from(lilist).forEach(function (el, index) {
    if (index % 2 == 0) {
        el.style.color = "orange"
    }
    else {
        el.style.color = "pink"
    }

})


