let products = JSON.parse(localStorage.getItem("products")) || []

const table = document.getElementById("table")

function render(list=products){

table.innerHTML = `
<tr>
<th>Name</th>
<th>Price</th>
<th>Delete</th>
</tr>
`

list.forEach((p,i)=>{

table.innerHTML += `
<tr>
<td>${p.name}</td>
<td>${p.price}</td>
<td><button onclick="remove(${i})">Delete</button></td>
</tr>
`

})

}

function addProduct(){

let name = document.getElementById("name").value
let price = document.getElementById("price").value

products.push({name,price})

localStorage.setItem("products",JSON.stringify(products))

render()

}

function remove(i){

products.splice(i,1)

localStorage.setItem("products",JSON.stringify(products))

render()

}

function search(){

let value = document.getElementById("search").value.toLowerCase()

let filtered = products.filter(p=>p.name.toLowerCase().includes(value))

render(filtered)

}

render()





