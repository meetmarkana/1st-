class Car{
    brand = ''
    setBrand(newbrand){
        this.brand = newbrand
    }
}

var mycar = new Car
mycar.setBrand("Hundai");
console.log(mycar.brand)