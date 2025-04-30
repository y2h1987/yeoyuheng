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



function aboveAverage(prices, movingAverage) {
    let abovePxCnt = 0 ; 

    for (let key in prices) { 
        if (prices[key] > movingAverage) {
            abovePxCnt++;
        }
    }

    return abovePxCnt;
}



console.log("Number of days AMD was above the 7-day SMA is: " + aboveAverage(amdPrices, calculateMovingAverage(amdPrices,7)));

// Write your code below
