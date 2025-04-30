const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
function averageClose(prices, index) {

	let sum = 0;
	let count = prices.length;

	for (let key in prices) {
		sum += prices[key][index];
	}

	let averageClose = sum/count;

	return Math.round(averageClose * 100) / 100;
}

console.log("Average closing price of MSFT is " + averageClose(msftData, 3));