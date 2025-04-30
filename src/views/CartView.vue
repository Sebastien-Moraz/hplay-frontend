<script setup>
import { ref, onMounted } from 'vue';
import CartService from '@/services/CartService';
import MediaCartList from '@/components/MediaCartList.vue';

const cartItems = ref([]);

const loadCart = () => {
	cartItems.value = CartService.getCart();
};

const clearCart = () => {
	CartService.clearCart();
	cartItems.value = [];
};

const getTotal = () => {
	return cartItems.value.reduce((total, item) => total + item.price, 0).toFixed(2);
};

const handleItemRemoved = (id) => {
	cartItems.value = cartItems.value.filter((item) => item.id !== id);
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
		<div v-else>
			<MediaCartList :items="cartItems" @item-removed="handleItemRemoved" />
			<div class="cart-summary">
				<p class="total">Total: {{ getTotal() }} CHF</p>
				<button @click="clearCart" class="clear-button">Vider le panier</button>
				<button class="checkout-button" @click="checkout">Procéder au paiement</button>
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

.clear-button, .checkout-button {
	background-color: #ff4444;
	width: auto;
	height: auto;
	margin-left: 10px;
}
</style>