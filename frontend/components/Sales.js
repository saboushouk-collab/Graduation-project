let sales = JSON.parse(localStorage.getItem("sales")) || []

function addSale(){

let product = document.getElementById("product").value
let price = document.getElementById("price").value

sales.push({product,price})

localStorage.setItem("sales",JSON.stringify(sales))

alert("Sale added")

}
