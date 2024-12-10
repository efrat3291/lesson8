const sum = () => {
    let n1 = document.querySelector("#num1").value
    let n2 = document.querySelector("#num2").value
    let sum = (Number(n1)+Number(n2))
    alert(sum)
}

const mul = () => {
    let n1 = document.querySelector("#num1").value
    let n2 = document.querySelector("#num2").value
    let sum = (Number(n1)*Number(n2))
    alert(sum)
}

const power = () => {
    let n1 = document.querySelector("#num1").value
    let n2 = document.querySelector("#num2").value
    let sum = (Number(n1)**Number(n2))
    alert(sum)
}
const save = () => {
    let name = document.querySelector("#name").value||"אורח"
    let pass = document.querySelector("#pass").value||"1234"
    let a = ("name"+": "+name+"  "+ "pass"+": "+pass)
    alert(a)
}

const binary = () =>{
    let n1 = document.querySelector("#num1").value
    let n2 = document.querySelector("#num2").value
    alert((parseInt(n1,2)+parseInt(n2,2)).toString(2))
}