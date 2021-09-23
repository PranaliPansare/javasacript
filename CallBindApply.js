let bike = {
    brand:'KTM',
    getBrand:function(){
        return this.brand
    }

}

let bike2 = {
    brand:'KTM2'

}


let r = bike.getBrand()
console.log(r)

let b = bike.getBrand.bind(bike2)
console.log(b())




// let b = function(){
//     return bike2.brand
// }
// bind
console.log(b())


// call apply 

//var brand = "defaultBrand"


function getCompany(prefix){
    console.log(prefix + this.brand)
}

getCompany('Hi this is')

let audi = {
    brand:"Audi"
}

let BMW = {
    brand:"BMW"
}

getCompany.call(audi,'New to ')
getCompany.call(BMW,'New a ')

//---------------------------->

getCompany.apply(audi,['New to '])
getCompany.apply(BMW,['New a '])

