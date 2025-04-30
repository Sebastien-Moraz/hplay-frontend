<script setup>

import MediaPreview from "@/components/MediaPreview.vue";
import Media from "@/libs/Media.js";
import {useRoute} from "vue-router";
let storeId =  useRoute().params.id;

const media = new Media(
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
</script>

<template>
	<div class="media-view">
		<MediaPreview :media="media" />
	</div>
</template>

<style scoped>

</style>