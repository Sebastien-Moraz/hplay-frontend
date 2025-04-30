<script setup>
import MediaList from "@/components/MediaList.vue";
import Media from "@/libs/Media.js";

let media = new Media(
		1,
		"Video demo",
		"Ceci est la description de la vidéo de demonstration",
		10.95,
		"https://mfc.koppa.pro/img/hero/hero-1.jpg",
		["2025", "test", "demo"]
);

let recommendedMedias = [];
for (let i = 0; i < 2; i++) {
	recommendedMedias.push(media);
}
</script>

<template>
	<div class="media-view">
		<div class="video-section">
			<iframe
					class="video-player"
					src="https://player.vod2.infomaniak.com/embed/1jijk03u2imb6?token=st=1745849566~exp=1745938680~acl=/_hls_/1jijk03u2im16/1jhvl2uqfrkau/*~hmac=658ec59edd27cd0b422039deb8ffb0801ab930a7163e6d13ffad2aeaa30c1d22"
					title="Video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
			/>
			<div class="video-info">
				<h2 class="video-title">Video demo</h2>
				<p class="video-description">
					Ceci est la description de la vidéo de demonstration.
				</p>
			</div>
		</div>
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

.video-section {
	flex: 3;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.video-player {
	margin-top: 68px;
	width: 100%;
	aspect-ratio: 16 / 9;
	border-radius: 8px;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.video-info {
	padding: 10px;
	border-radius: 8px;
}

.video-title {
	font-size: 2em;
	font-weight: bold;
	margin-bottom: 10px;
}

.video-description {
	font-size: 1.2em;
	line-height: 1.6;
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

/* Tablet and mobile responsiveness */
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

	.video-title {
		font-size: 1.5em;
	}

	.video-description {
		font-size: 1em;
	}

	.recommendations-title {
		font-size: 1.2em;
	}
}

@media (max-width: 480px) {
	.video-info {
		padding: 5px;
	}

	.video-title {
		font-size: 1.2em;
	}
}
</style>