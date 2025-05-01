<script setup>
import Search from "@/components/Search.vue";
import MediaList from "@/components/MediaList.vue";
import {ref} from "vue";

const medias = ref([]);
</script>

<template>
	<div class="my-media">
		<h1 class="my-media-title">Mes Médias</h1>
		<Search @update:medias="medias = $event" :isPosed="true" />
		<MediaList :medias="medias" :itemsType="'media'" />
	</div>
</template>

<style scoped>

</style>