const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function max(amdPrices) {
    let maxPrice = amdPrices[0];

    for (let key in amdPrices) {
        if (amdPrices[key] > maxPrice) {
            maxPrice = amdPrices[key];
        }
    }

    return maxPrice
}


console.log("AMD 52-week high is " + max(amdPrices)); 