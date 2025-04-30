<script setup>
import MediaCard from "@/components/MediaCard.vue";
import Media from "@/libs/Media.js";

defineProps({
	medias: {
		type: Array,
		required: true,
		validator: (value) => value.every((item) => item instanceof Media),
	},
});
</script>

<template>
	<div class="media-list">
		<MediaCard class="media-card" v-for="media in medias" :key="media.id" :media="media" />
	</div>
</template>

<style scoped>
.media-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	padding: 20px;
}
</style>