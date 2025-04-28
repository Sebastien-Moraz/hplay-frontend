<script setup>
import MediaPreview from "@/components/MediaPreview.vue";
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
		<MediaPreview v-for="media in medias" :key="media.id" :media="media" />
	</div>
</template>

<style scoped>
.media-list {
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	justify-content: center;
}
</style>