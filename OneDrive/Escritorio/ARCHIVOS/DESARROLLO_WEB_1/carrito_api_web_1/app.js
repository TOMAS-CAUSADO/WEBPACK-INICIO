
const productos = document.getElementById("productos")

document.addEventListener('DOMContentLoaded', e=> {(fetchData)})
const fetchData = async () => {
    const res = await fetch("api.json")
    const data = await res.json()
    pintarCards(data)

}

const pintarCards = data => {
    const templateCard = document.getElementById("template-productos")
    
}