// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

//let data = ()
//for price in data:
//	if price < 3:
//    data.push(price)


let data = []

for (let price in amdPrices.sort((a, b) => a - b) ) {

    if (price < 3) {
        data.push(amdPrices[price])
    }

}

console.log("The three lowest prices are " + data.join(", "))