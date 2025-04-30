<script setup>
import MediaList from "@/components/MediaList.vue";
import Media from "@/libs/Media.js";
import MediaPlayer from "@/components/MediaPlayer.vue";

let media = new Media(
		1,
		"Video demo",
		"Ceci est la description de la vidéo de demonstration",
		10.95,
		"https://mfc.koppa.pro/img/hero/hero-1.jpg",
		["2025", "test", "demo"]
);

let mediaToken = "token=st=1746000032~exp=1756479480~acl=/_hls_/1jijk03u2im16/1jhvl2uqfrkau/*~hmac=ea9c08764c3c293a8ff549832495579b1437efcf33829d7ad48a8d78a21d90f9";

let recommendedMedias = [];
for (let i = 0; i < 2; i++) {
	recommendedMedias.push(media);
}
</script>

<template>
	<div class="media-view">
		<MediaPlayer :media="media" :token="mediaToken" />
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