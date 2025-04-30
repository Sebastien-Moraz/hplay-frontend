<script setup>
import CartService from '@/services/CartService';
import { ref } from 'vue';
import Media from "@/libs/Media.js";

const props = defineProps({
	media: {
		type: Media,
		required: true,
		validator: (value) => value instanceof Media,
	},
});

const isInCart = ref(CartService.isInCart(props.media.id));

const addToCart = () => {
	CartService.addMedia(props.media);
	isInCart.value = true;
};

const removeFromCart = () => {
	CartService.removeMedia(props.media.id);
	isInCart.value = false;
};
</script>

<template>
	<button class="button-store" @click="addToCart" v-if="!isInCart" style="background-color: #EA0029">
		<div  v-if="media.price > 0">
			{{ media.price }} CHF Panier
		</div>
		<div v-else>
			Gratuit
		</div>
	</button>
	<button class="button-store" v-else @click="removeFromCart" style="background-color: #7a7a7a">
		Retirer du panier
	</button>
</template>

<style scoped>

</style>