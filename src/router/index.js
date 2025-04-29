import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import CartView from '../views/CartView.vue'
import MediaPlayerView from '../views/MediaPlayerView.vue'
import MediaView from '../views/MediaView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/store',
			name: 'store',
			component: StoreView,
		},
		{
			path: '/store/:id',
			name: 'store-item',
			component: MediaView,
		},
		{
			path: '/media/:id',
			name: 'media',
			component: MediaPlayerView,
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartView,
		},
		{
			path: '/about',
			name: 'about',
			redirect: () => {
				window.location.href = 'https://hstudio.ch';
			},
		},
	],
})

export default router
