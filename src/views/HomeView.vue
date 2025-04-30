<script setup>
import Media from "@/libs/Media.js";
import MediaList from "@/components/MediaList.vue";
import { ref, onMounted } from "vue";

let medias = ref([]);

// Get the media list from the API
const loadMedias = () => {
	//TODO: remove this and replace with API call
	let media = new Media(
			1,
			"Video demo",
			"Ceci est la description de la vidéo de demonstration",
			10.95,
			"https://mfc.koppa.pro/img/hero/hero-1.jpg",
			[
				"2025",
				"test",
				"test desastreux",
				"2022",
				"2023",
			]
	);

	let medias = [];
	for (let i = 0; i < 10; i++) {
		medias.push(media);
	}
	return medias;
};

// Load the media list when the component is mounted
onMounted(() => {
	medias.value = loadMedias();
});

</script>

<template>
	<div class="home">
		<img src="@/assets/menSeeScreen.jpg" class="menSeeScreen" alt="men see screen"/>
		<h1>Dernière sortie</h1>
		<MediaList :medias="medias" />
		<h1>En voir plus</h1>
		<RouterLink to="/store">
			<button class="button-store">Aller dans le store</button>
		</RouterLink>
	</div>
</template>

<style scoped>
.menSeeScreen {
	width: 100%;
	height: 100vh;
	object-fit: cover;
	top: 0;
	left: 0;
}
.button-store {
	display: block;
	margin: 1px auto;
}
</style>