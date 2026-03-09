async function loadInventory(){

const res = await fetch("http://localhost:5001/api/inventory")

const data = await res.json()

console.log(data)

}
async function addProduct(){

let name=document.getElementById("name").value
let price=document.getElementById("price").value
let quantity=document.getElementById("quantity").value

await fetch("http://localhost:5001/api/inventory",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name,price,quantity})

})

loadInventory()

}







