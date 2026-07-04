/*Price Handling*/

//Prices
prices = {
    "clear-nh-oil-price": 67,
    "black-nh-oil-price": 67,
    "black-v3-price": 67,
    "wheelwell-price": 67,
    "boss-wax-hybrid-price": [67, 69], // [car, truck]
    "brine-wash-price": 67,
    "full-chasis-price": 67,
    "needle-scaling-price": 67,
    "rustoration-price": 67,
    "hd-oil-package-price": 67
}


//Script for implimenting the thing or something
keys = Object.keys(prices)

for(let i = 0; i < keys.length; i++){
    val = ""
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
    document.getElementById(keys[i]).innerHTML = val
}
