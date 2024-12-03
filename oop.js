let fruit = new Object();
fruit.name = "grapes";
fruit.calories = 300;
fruit.price = 6;
fruit.printFruit = function () {
    console.log("name" + ": " + this.name + " " + "calories" + ": " + this.calories + "price" + ": " + this.price);
}
let fruits = [
    {
        name: "orange",
        calories: 420,
        price: 3,
        printFruit: function () {
            console.log("name" + ": " + this.name + " " + "calories" + ": " + this.calories + "price" + ": " + this.price);
        }
    },
    {
        name: "apple",
        calories: 200,
        price: 4,
        printFruit: function () {
            console.log("name" + ": " + this.name + " " + "calories" + ": " + this.calories + "price" + ": " + this.price);
        }
    },
    fruit
]

function printDetails() {
    for (let i = 0; i < fruits.length; i++) {
        fruits[i].printFruit();
    }
}
printDetails();
fruits[0].color = "orange";
fruits.forEach(element => {
    if ('color' in element)
        element.printFruit();
});
console.log("=================");
for (const key in fruits[0]) {
    if (typeof fruits[0][key] !== 'function')
        console.log(key, fruits[0][key]);
}
console.log("=================");
delete (fruits[1].price);
for (const key in fruits[1]) {
    if (typeof fruits[1][key] !== 'function')
        document.querySelector("#delete").innerHTML += key + " " + fruits[1][key];
}
console.log("=================");
document.querySelector("#changePrice").onblur = () => {
    let n = document.querySelector("#changePrice").innerHTML;
    fruits[1].price  = n;
    fruits[1].printFruit();
}
console.log("=================");
document.querySelector("#num").onblur = () => {
    let n = document.querySelector("#num").value;
    let f = fruits.filter(x=>x.calories>n)
    for(const x of f)
    {
      x.printFruit();
    }
}
console.log("=================");
for( const x of fruits)
{
   Object.defineProperties(x,"Price",{
    get() {return x.price},
    set(val){if(val>10&&val<10000) {x.price = val} }
   })
}




