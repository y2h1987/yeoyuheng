const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function calculateMovingAverage(prices, period) {
    
    let movingAverages = [];

    while (prices.length >= period) {
    
        let sum = 0 ;
        for (let i = 0; i < period ; i++) {
            sum = prices[i] + sum;
        }
        movingAverages.push((sum/period).toFixed(2));
        prices.shift();
        
    }
    return movingAverages;
}


console.log("The 7-day SMA of AMD is " + calculateMovingAverage(amdPrices,7));


//console.log(calculateMovingAverage(amdPrices,3)); 