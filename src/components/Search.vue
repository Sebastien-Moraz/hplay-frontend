<script setup>
import { ref, onMounted } from "vue";
import Media from "@/libs/Media.js";

const emit = defineEmits(["update:medias"]); // Déclare l'événement

const searchQuery = ref('');
const selectedTags = ref([]);
const tags = ref([]);
const isLoading = ref(false);

const fetchTags = async () => {
	tags.value = ["2025", "test", "test différent", "2022", "2023"];
	tags.value.sort((a, b) => a.localeCompare(b));
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
	);
	for (let i = 0; i < 20; i++) {
		tmp.push(media);
	}
	await new Promise((resolve) => setTimeout(resolve, 1000));
	isLoading.value = false;
	return tmp;
};

const toggleTag = (tag) => {
	const index = selectedTags.value.indexOf(tag);
	if (index === -1) {
		selectedTags.value.push(tag);
	} else {
		selectedTags.value.splice(index, 1);
	}
	emitMedia();
};

const emitMedia = async () => {
	const medias = await fetchMedia();
	emit("update:medias", medias); // Utilisation de emit
};

const handleSearch = () => {
	emitMedia();
};

onMounted(() => {
	fetchTags();
	emitMedia();
});
</script>

<template>
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
		<div v-if="isLoading" class="loading">
			Chargement...
		</div>
	</div>
</template>

<style scoped>
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

.loading {
	text-align: center;
	font-size: 1.2em;
	color: #EA0029;
}

@media (max-width: 768px) {
	.search-container {
		flex-direction: column;
	}

	.search-input {
		max-width: 100%;
	}
}
</style>