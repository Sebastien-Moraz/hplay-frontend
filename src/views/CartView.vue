<!-- src/views/CartView.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import CartService from '@/services/CartService';

const cartItems = ref([]);

const loadCart = () => {
	cartItems.value = CartService.getCart();
};

const removeFromCart = (id) => {
	cartItems.value = CartService.removeMedia(id);
};

const clearCart = () => {
	cartItems.value = CartService.clearCart();
};

const getTotal = () => {
	return cartItems.value.reduce((total, item) => total + item.price, 0).toFixed(2);
};

const checkout = () => {
	alert('Procéder au paiement');
};

onMounted(() => {
	loadCart();
});
</script>

<template>
	<div class="cart">
		<h1>Panier</h1>

		<div v-if="cartItems.length === 0" class="empty-cart">
			Votre panier est vide
		</div>

		<div v-else class="cart-items">
			<div v-for="item in cartItems" :key="item.id" class="cart-item">
				<img :src="item.preview" :alt="item.name" class="item-preview">
				<div class="item-info">
					<h3>{{ item.name }}</h3>
					<p>{{ item.price }} CHF</p>
				</div>
				<button @click="removeFromCart(item.id)" class="remove-button">
					Supprimer
				</button>
			</div>

			<div class="cart-summary">
				<p class="total">Total: {{ getTotal() }} CHF</p>
				<button @click="clearCart" class="clear-button">Vider le panier</button>
				<button class="checkout-button" @click="checkout">
					Procéder au paiement
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.cart {
	padding: 20px;
	max-width: 800px;
	margin: 0 auto;
}

.empty-cart {
	text-align: center;
	padding: 40px;
	font-size: 1.2em;
}

.cart-items {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.cart-item {
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 20px;
	background-color: #1d1d1d;
	border-radius: 8px;
}

.item-preview {
	width: 100px;
	height: 60px;
	object-fit: cover;
	border-radius: 4px;
}

.item-info {
	flex-grow: 1;
}

.cart-summary {
	margin-top: 20px;
	padding: 20px;
	background-color: #1d1d1d;
	border-radius: 8px;
	text-align: right;
}

.total {
	font-size: 1.2em;
	font-weight: bold;
}

.remove-button {
	background-color: #ff4444;
	width: auto;
	height: auto;
}

.clear-button, .checkout-button {
	background-color: #ff4444;
	width: auto;
	height: auto;
	margin-left: 10px;
}
</style>