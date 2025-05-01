<script setup>
import {ref, onMounted} from "vue";
import MediaPreview from "@/components/MediaPreview.vue";
import Media from "@/libs/Media.js";
import {useRoute} from "vue-router";
let storeId =  useRoute().params.id;

const media = ref(null);

// Get the media data from the API
const loadMedia = () => {
	//TODO: remove this and replace with API call
	//TODO: check if media is already bought by the user
	return new Media(
			storeId,
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
	);
}

// Load media when the component is mounted
onMounted(() => {
	media.value = loadMedia();
});
</script>

<template>
	<div class="media-view">
		<MediaPreview v-if="media" :media="media" />
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

@media (max-width: 768px) {
	.media-view {
		flex-direction: column;
	}
}
</style>