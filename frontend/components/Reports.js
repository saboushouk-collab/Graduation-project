function Reports(){
document.getElementById("reportsSection").style.display="block"
document.getElementById("reportsSection").innerHTML=`
<h2>Reports</h2>
<p>Total Products: ${items.length}</p>
<p>Total Sales: ${sales.length}</p>
`
}

