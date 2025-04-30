<script setup>
import MediaList from "@/components/MediaList.vue";
import Media from "@/libs/Media.js";
import MediaPlayer from "@/components/MediaPlayer.vue";
import { useRoute } from "vue-router";
import {onMounted, ref} from "vue";

let storeId = useRoute().params.id;
let media = ref(null);
let recommendedMedias = ref([]);
let mediaToken = ref(null);

// Get the media data from the API
const loadMedia = () => {
	//TODO: remove this and replace with API call
	return new Media(
			storeId,
			"Video demo",
			"Ceci est la description de la vidéo de demonstration",
			10.95,
			"https://mfc.koppa.pro/img/hero/hero-1.jpg",
			["2025", "test", "demo"]
	);
}

// Get the recommended media data by tags from the API
const loadRecommendedMedias = () => {
	//TODO: remove this and replace with API call
	let recommendedMedias = [];
	for (let i = 0; i < 2; i++) {
		recommendedMedias.push(media.value);
	}
	return recommendedMedias;
}

// Get the media token from the API
const loadMediaToken = () => {
	//TODO: remove this and replace with API call
	return "token=st=1746019450~exp=1754060280~acl=/_hls_/1jijk03u2im16/1jhvl2uqfrkau/*~hmac=5fb791fd30855b93d8a553cf332ea33ccc2f584022dbc9f0f9308fcada96da09";
}

// Load media, recommended media and token when the component is mounted
onMounted(() => {
	media.value = loadMedia();
	recommendedMedias.value = loadRecommendedMedias();
	mediaToken.value = loadMediaToken();
});
</script>

<template>
	<div class="media-view">
		<MediaPlayer v-if="media" :media="media" :token="mediaToken" />
		<div class="recommendations">
			<h2 class="recommendations-title">Recommandations</h2>
			<MediaList :medias="recommendedMedias" />
		</div>
	</div>
</template>

<style scoped>
.media-view {
	display: flex;
	gap: 20px;
	padding: 20px;
}

.recommendations {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.recommendations-title {
	text-align: center;
	color: white;
}

@media (max-width: 1024px) {
	.media-view {
		flex-direction: column;
	}

	.recommendations {
		width: 100%;
	}
}

@media (max-width: 768px) {
	.media-view {
		padding: 10px;
	}

	.recommendations-title {
		font-size: 1.2em;
	}
}
</style>