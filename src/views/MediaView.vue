<script setup>
import CartService from '@/services/CartService';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import Media from "@/libs/Media.js"; 
let storeId =  useRoute().params.id;


const media = ref( new Media(
	1, 
	"Video demo",
	"Ceci est la description de la vidéo de demonstration",
	10.95, 
	"https://mfc.koppa.pro/img/hero/hero-1.jpg",
	[
		"2025",
		"test",
		"test différent",
		"2022",
		"2023",
	]
));
const isInCart = ref(false);
const checkIfInCart = () => {
	isInCart.value = CartService.isInCart(media.value.id);
};
const addToCart = () => {
	CartService.addMedia(media.value);
	isInCart.value = true;
};

const removeFromCart = () => {
	CartService.removeMedia(media.value.id);
	isInCart.value = false;
};
</script>

<template>
	<div class="media-view">
		<img :src="media.preview" class="media-preview" alt="Media preview"/>
		<div class="media-info">
			<h2 class="media-title">{{ media.name }}</h2>
			<p class="media-description">{{ media.description }}</p>
			<button class="button-store" @click="addToCart" v-if="!isInCart">
				{{ media.price }} CHF Panier
			</button>
			<button class="button-store" v-else @click="removeFromCart">
				Retirer du panier
			</button>
			<div class="media-tags">
				<span
					v-for="(tag, index) in media.tags"
					:key="tag"
					class="media-tag"
				>
					{{ tag }}
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>

.media-view {
	display: flex;
	gap: 20px;
	padding: 20px;
	align-items: center;
	text-align: center;
}

.media-preview {
	width: 60%;
	aspect-ratio: 16/9;
	object-fit: cover;
	top: 0;
	left: 0;
}
.media-info {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
}

.media-title {
	font-size: 24px;
	font-weight: bold;
}

.media-description {
	font-size: 16px;
	margin: 0 0 8px;
}

.media-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

.media-tag {
	background-color: #1d1d1d;
	color: white;
	padding: 0 8px;
	border-radius: 20px;
	cursor: pointer;
	border: 2px solid #EA0029;
	transition: all 0.3s ease;
	font-size: 16px;
}

@media (max-width: 768px) {
	.media-view {
		flex-direction: column;
	}
	.media-preview {
		width: 100%;
	}
}

</style>