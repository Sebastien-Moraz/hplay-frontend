<<script setup>
import { ref } from "vue";
import MediaList from "@/components/MediaList.vue";
import Search from "@/components/Search.vue";

const medias = ref([]);
</script>

<template>
	<div class="store">
		<h1 class="store-title">Magasin</h1>
		<Search @update:medias="medias = $event" />
		<div>
			<MediaList :medias="medias" />
		</div>
	</div>
</template>

<style scoped>
.store {
	padding: 20px;
}
</style>