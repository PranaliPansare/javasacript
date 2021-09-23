let lilist = document.querySelector('li')
let Ollist = document.querySelector('Ol')
let Button = document.querySelector('#addButton')
let Input = document.querySelector('input')

for (let i = 0; i < lilist.length; i++) {
    // console.log(lilist[i])
    CreateButton(lilist[i])

}

Ollist.addEventListener('click', function (event) {
    //  console.log(event.target)

    if (event.target.tagName == "BUTTON") {

        if (event.target.classList == "Remove") {
            let li = event.target.parentElement
            let Ol = event.target.parentElement
            Ol.removeChild(li)

        }



        if (event.target.classList == "down") {
            let li = event.target.parentElement
            let ol = li.parentElement
            let nextSibling = li.nextElementSibling
            if (nextElementSibling) {
                ol.insertBefore(nextSibling, li)
    
        
            }
        }
        if (event.target.classList == "up") {

            let li = event.target.parentElement
            let ol = li.parentElement
            let previous = li.previousElementSibling
            if (previous) {
                ol.insertBefore(li, previous)
            }
        }
    }
})



Button.addEventListener('click', function () {

    let newElement = document.createElement('li')
    newElement.textContent = Input.value
    CreateButton(newElement)
    Ollist.appendChild(newElement)

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

