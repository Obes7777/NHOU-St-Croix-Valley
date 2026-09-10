/*Price Handling*/

//Prices

//Pull this data from the file eventually
const prices = {
    "clear-nh-oil-price": 295,
    "black-nh-oil-price": 315,
    "black-v3-price": 399,
    "wheelwell-price": 39,
    "boss-wax-hybrid-price": [1425, 1525], // [car, truck]
    "brine-wash-price": 159,
    "full-chasis-price": 399,
    "needle-scaling-price": 75,
    "rustoration-price": 899,
    "hd-oil-package-price": 599
}


//Script for implimenting the prices or something
const keys = Object.keys(prices)

for(let i = 0; i < keys.length; i++){
    let val = ""
    switch(keys[i]){
        case "black-nh-oil-price":
            val = `$${prices[keys[i]]} + Tax (Truck/Suv)`
            break
        case "wheelwell-price":
            val = `$${prices[keys[i]]}/Axle + Tax`
            break
        case "boss-wax-hybrid-price":
            val = `Car/Sedan: $${prices[keys[i]][0]} + Tax \n Truck: $${prices[keys[i]][1]} + Tax`
            break
        case "needle-scaling-price":
            val = `$${prices[keys[i]]}/Half Hour`
            break
        default:    
            val = `$${prices[keys[i]]} + Tax`
    }
    const priceElement = document.getElementById(keys[i])
    if (priceElement) {
        priceElement.innerHTML = val
    }
}


// Side bar handling
const sidebarButton = document.getElementById("side-bar-btn")

if (sidebarButton) {
    sidebarButton.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("nav-open")
        sidebarButton.setAttribute("aria-expanded", String(isOpen))
        sidebarButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu")
    })
}