const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];


// Write your code below
function averageClose(prices, pxType) {

	let sum = 0;
	let count = prices.length;

	
	for (let key in prices) {
		sum += parseFloat(prices[key][pxType]);
	}

	let averageClose = sum/count;
	
	return Math.round(averageClose * 100) / 100;
}

console.log("Average closing price of Disney is " + averageClose(disneyData, "close"))

