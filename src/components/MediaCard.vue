<script setup>
import Media from "@/libs/Media.js";

defineProps({
	media: {
		type: Media,
		required: true,
	},
});

const truncate = (text, maxLength) => {
	return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
const tagsLimit = 4;
const titleLimit = 20;
const descriptionLimit = 50;
</script>

<template>
	<RouterLink :to="`/store/${media.id}`">
		<div class="video-card" :key="media.id">
			<img :src="media.preview" :alt="media.name" class="video-thumbnail" />
			<div class="video-info">
				<h2 class="video-title">{{ truncate(media.name, titleLimit) }}</h2>
				<p class="video-description">{{ truncate(media.description, descriptionLimit) }}</p>
				<p v-if="media.price > 0" class="video-price">{{ media.price }} CHF</p>
				<p v-else class="video-price">Gratuit</p>
				<div class="video-tags">
     <span
				 v-for="(tag, index) in media.tags.slice(0, tagsLimit)"
				 :key="tag"
				 class="video-tag"
		 >
       {{ tag }}
     </span>
					<span v-if="media.tags.length > tagsLimit" class="video-tag">...</span>
				</div>
			</div>
			
		</div>
	</RouterLink>
</template>

<style scoped>
.video-card {
	border-radius: 8px;
	overflow: hidden;
	width: 300px;
	background-color: #EA0029;
	transition: 0.2s;
}

.video-card:hover {
	box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
	background-color: #ce0026;
	scale: 1.02;
	transition: 0.3s ease;
	
}

.video-thumbnail {
	width: 100%;
	height: 180px;
	object-fit: cover;
}

.video-info {
	padding: 1px 10px 10px;
}

.video-title {
	font-size: 18px;
	font-weight: bold;
	margin: 0 0 8px;
}

.video-description {
	font-size: 14px;
	margin: 0 0 8px;
}

.video-price {
	font-size: 16px;
	font-weight: bold;
	margin: 0 0 8px;
}

.video-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.video-tag {
	background-color: #f0f0f0;
	border-radius: 4px;
	padding: 4px 8px;
	font-size: 12px;
	color: #333;
	font-weight: bold;
}
</style>