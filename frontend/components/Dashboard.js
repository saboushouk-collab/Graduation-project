let products = JSON.parse(localStorage.getItem("products")) || []
let sales = JSON.parse(localStorage.getItem("sales")) || []

document.getElementById("products").innerText = products.length
document.getElementById("sales").innerText = sales.length

let total = 0

sales.forEach(s=>{
total += Number(s.price)
})

document.getElementById("money").innerText = "$"+total

const ctx = document.getElementById("chart")

new Chart(ctx,{

type:"bar",

data:{
labels:["Products","Sales"],
datasets:[{
label:"System Data",
data:[products.length,sales.length]
}]
}

})

