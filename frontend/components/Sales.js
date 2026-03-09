async function loadSales(){

const res = await fetch("http://localhost:5001/api/sales")

const data = await res.json()

console.log(data)

}

loadSales()

async function addSale(){

let product=document.getElementById("product").value
let price=document.getElementById("price").value

await fetch("http://localhost:5001/api/sales",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({product,price})

})

loadSales()

}

