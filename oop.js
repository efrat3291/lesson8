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

function messageBox(color = "black", backgroundColor = "white", img, title = "", body = "") {
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.img = img;
    this.title = title;
    this.body = body;
    this.message = this.title + "/n" + this.body;
    Object.defineProperty(this, "Titel",
        {
            set(value) { this.title = value }
        })
    Object.defineProperty(this, "Body",
        {
            set(value) { this.body = value }
        })
    this.render = function () {
        const container = document.createElement("div");
        container.style.color = this.color;
        container.style.backgroundColor = this.backgroundColor;
        container.style.border = "1px solid #ccc";
        container.style.padding = "10px";
        container.style.borderRadius = "5px";
        container.style.maxWidth = "300px";

        if (this.img) {
            const imgElement = document.createElement("img");
            imgElement.src = this.img;
            imgElement.style.maxWidth = "50%";
            container.appendChild(imgElement);
        }
        const titleElement = document.createElement("h1");
        titleElement.textContent = this.title;
        container.appendChild(titleElement)

        const bodyElement = document.createElement("p");
        bodyElement.textContent = this.body;
        container.appendChild(bodyElement);

        return container;
    }
}

const infoBox = new messageBox("white", "blue", "", "Information", "This is an informational message.");

const warningBox = new messageBox("black", "yellow", "", "Warning", "This is a warning message.");

const errorBox = new messageBox("white", "red", "", "Error", "This is an error message.");

const messageTypes = {
    info: infoBox,
    warning: warningBox,
    error: errorBox
};
// document.body.appendChild(infoBox.render());
// document.body.appendChild(warningBox.render());
// document.body.appendChild(errorBox.render());
let form = document.querySelector("#form").onclick = () => {
    //function to new form
    let type = document.querySelector("#type").value;
    if (messageTypes[type]) {
        let title = document.querySelector("#title").value
        if (title != "")
            messageTypes[type].Titel = title;
        let body = document.querySelector("#body").value
        if (body != "")
            messageTypes[type].Body = body;
        const my_old = document.querySelector("#element");
        console.log(my_old);

        const my_new = document.createElement("div");
        my_new.id = "element";
        my_new.appendChild(messageTypes[type].render());
        document.querySelector("#element").replaceWith(my_new);
        //document.body.appendChild(messageTypes[type].render())
    }
}




