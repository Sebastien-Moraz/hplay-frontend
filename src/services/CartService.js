export default class CartService {
	static KEY = 'shopping-cart';

	static getCart() {
		const cart = localStorage.getItem(this.KEY);
		return cart ? JSON.parse(cart) : [];
	}

	static addMedia(media) {
		const cart = this.getCart();
		const existingItem = cart.find(item => item.id === media.id);

		if (!existingItem) {
			cart.push({
				id: media.id,
				name: media.name,
				price: media.price,
				preview: media.preview,
			});
			localStorage.setItem(this.KEY, JSON.stringify(cart));
		}
		return cart;
	}

	static removeMedia(mediaId) {
		const cart = this.getCart();
		const updatedCart = cart.filter(item => item.id !== mediaId);
		localStorage.setItem(this.KEY, JSON.stringify(updatedCart));
		return updatedCart;
	}
	
	static isInCart(mediaId) {
		const cart = this.getCart();
		return cart.some(item => item.id === mediaId);
	}

	static clearCart() {
		localStorage.removeItem(this.KEY);
		return [];
	}
}