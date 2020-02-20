import React, {useContext} from 'react';
import CartContext from "../contexts/CartContext";
import Item from './ShoppingCartItem';

function ShoppingCart() {
	const {cart} = useContext(CartContext);

	function getCartTotal() {
		return cart.reduce((acc, {price}) => acc + price, 0).toFixed(2);
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => <Item key={item.id} {...item} />)}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
}

export default ShoppingCart;
