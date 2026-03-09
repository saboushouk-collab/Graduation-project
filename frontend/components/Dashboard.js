async function loadDashboard(){

const inv = await fetch("http://localhost:5001/api/inventory")
const sales = await fetch("http://localhost:5001/api/sales")

const inventory = await inv.json()
const salesData = await sales.json()

document.getElementById("products").innerText = inventory.length
document.getElementById("sales").innerText = salesData.length

}

loadDashboard()

const ctx=document.getElementById("salesChart")

new Chart(ctx,{
type:"bar",
data:{
labels:["Mon","Tue","Wed","Thu","Fri"],
datasets:[{
label:"Sales",
data:[200,400,300,500,600]
}]
}
})