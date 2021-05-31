	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 1.97
	},
	{
		name: "milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 4.35
	},
	{
		name: "cheese",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 6.40
	},
	{
		name: "cereal",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 3.97
	},
	{
		name: "cookies",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 2.50
	},
	{
		name: "apples",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.97
	},
	{
		name: "juice",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 2.75
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lactoseFree, nutFree, organic) {
	let product_names = [];

	prods.sort(function(a, b){return a.price - b.price});

	for (let i=0; i<prods.length; i+=1) {
		if (lactoseFree && !(prods[i].lactoseFree == lactoseFree)){
			continue;
		}
		if (nutFree && !(prods[i].nutFree == nutFree)){
			continue;
		}
		if (organic && !(prods[i].organic == organic)){
			continue;
		}
		product_names.push(prods[i].name  + " - $" + prods[i].price);
	}

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		for (let a=0; a<chosenProducts.length; a+=1) {
			if (chosenProducts[a].includes(products[i].name)){
				totalPrice += products[i].price;
			}
		}
	}
	return totalPrice;


}
