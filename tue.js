let firstInput = document.getElementById("num1")
firstInput.addEventListener("input", num1handler)

let secondInput = document.getElementById("num2")
secondInput.addEventListener("input", num2handler)

let button = document.getElementById("addbtn")
button.addEventListener("click", addNums)

let result= document.getElementById("result")
let num1,num2;
function num1handler(e) {

     num1 =parseInt(e.target.value)
   
}
function num2handler(e) {
    num2 =parseInt(e.target.value)
   
}


function addNums() {
   let sum=num1+num2
    result.append(sum)


}