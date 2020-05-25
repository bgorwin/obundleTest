// I added this file path to the <script> tag on the base.html file and it would
// not link to this page. src="../../assets/js/theme/addToCartTest.js" defer. Any
// tips for this would be appreciated, was not able to have it linked on live website,
// but it worked on local.

function createCart(url, cartItems) {
	return fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(cartItems)
	}).then((response) => response.json());
}

function addingItemToCart() {
	createCart('/api/storefront/carts', {
		lineItems: [
			{
				quantity: 1,
				productId: 86
			},
			{
				quantity: 1,
				productId: 88
			},
			{
				quantity: 1,
				productId: 107
			}
		]
	})
		.then((data) => console.log(JSON.stringify(data)))
		.catch((error) => console.error(error));
}

document
	.getElementById('obundleButton')
	.addEventListener('click', addingItemToCart);
