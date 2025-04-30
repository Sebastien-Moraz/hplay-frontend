<script setup>
import { ref, onMounted } from 'vue';
import MediaList from "@/components/MediaList.vue";
import Media from "@/libs/Media.js";

const searchQuery = ref('');
const selectedTags = ref([]);
const medias = ref([]);
const tags = ref([
	"2025",
	"test",
	"test différent",
	"2022",
	"2023",
]);
tags.value.sort((a, b) => a.localeCompare(b));
const isLoading = ref(false);

const toggleTag = (tag) => {
	const index = selectedTags.value.indexOf(tag);
	if (index === -1) {
		selectedTags.value.push(tag);
	} else {
		selectedTags.value.splice(index, 1);
	}
	fetchMedia();
};

const fetchMedia = async () => {
	isLoading.value = true;
	let tmp = [];
	let media = new Media(
			1,
			"Video demo",
			"Ceci est la description de la vidéo de demonstration",
			10.95,
			"https://mfc.koppa.pro/img/hero/hero-1.jpg",
			["2025", "test", "demo"]
	)
	for (let i = 0; i < 20; i++) {
		tmp.push(media);
	}
	medias.value = tmp;
	await new Promise(resolve => setTimeout(resolve, 1000));
	isLoading.value = false;
};

const handleSearch = () => {
	fetchMedia();
};

onMounted(() => {
	fetchMedia();
});
</script>

<template>
	<div class="store">
		<h1 class="store-title">Magasin</h1>
		<div class="search-section">
			<div class="search-container">
				<input
						type="text"
						class="search-input"
						v-model="searchQuery"
						placeholder="Rechercher..."
						@keyup.enter="handleSearch"
				/>
			</div>
			<div class="tags-container">
        <span
						v-for="tag in tags"
						:key="tag"
						class="tag"
						:class="{ 'tag-selected': selectedTags.includes(tag) }"
						@click="toggleTag(tag)"
				>
          {{ tag }}
        </span>
			</div>
		</div>

		<div v-if="isLoading" class="loading">
			Chargement...
		</div>
		<div>
			<MediaList :medias="medias" />
		</div>
	</div>
</template>

<style scoped>
.store {
	padding: 20px;
}

.search-section {
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.search-container {
	width: 100%;
	margin: 0 auto;
	display: flex;
	gap: 10px;
	justify-content: center;
}

.search-input {
	max-width: 600px;
	text-align: center;
}

.tags-container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	margin-top: 10px;
}

.tag {
	background-color: #1d1d1d;
	color: white;
	padding: 0 8px;
	border-radius: 20px;
	cursor: pointer;
	border: 2px solid #EA0029;
	transition: all 0.3s ease;
	font-size: 16px;
}

.tag:hover {
	background-color: #EA0029;
}

.tag-selected {
	background-color: #EA0029;
}

input {
	flex: 1;
	padding: 12px;
	border: 2px solid #EA0029;
	border-radius: 8px;
	font-size: 16px;
	background-color: #1d1d1d;
	color: white;
}

input:focus {
	outline: none;
	border-color: #ce0026;
}

.search-button {
	padding: 12px 24px;
	background-color: #EA0029;
	color: white;
	border: none;
	border-radius: 8px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.search-button:hover {
	background-color: #ce0026;
}

.loading {
	text-align: center;
	padding: 40px;
	font-size: 1.2em;
	color: #EA0029;
}

@media (max-width: 768px) {
	.search-container {
		flex-direction: column;
	}

	.search-button {
		width: 100%;
	}
	
	.search-input {
		max-width: 100%;
	}
}
</style>