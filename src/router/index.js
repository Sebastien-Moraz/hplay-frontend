import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import CartView from '../views/CartView.vue'
import MediaPlayerView from '../views/MediaPlayerView.vue'
import MediaView from '../views/MediaView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import MyMediaView from '../views/MyMediaView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {top: 0}
		}
	},
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
			meta: {
				requiredAuth: true,
			},
		},
		{
			path: '/media/:id',
			name: 'media',
			component: MediaPlayerView,
			meta: {
				requiredAuth: true,
			},
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartView,
			meta: {
				requiredAuth: true,
			},
		},
		{
			path: '/about',
			name: 'about',
			redirect: () => {
				window.location.href = 'https://hstudio.ch';
			},
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView,
		},
		{
			path: '/profile',
			name: 'profile',
			component: ProfileView,
			meta: {
				requiredAuth: true,
			},
		},
		{
			path: '/my-media',
			name: 'my-media',
			component: MyMediaView,
			meta: {
				requiredAuth: true,
			},
		},
	],
});

// check if the user is logged in
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('jwtToken');
	if (to.meta.requiredAuth && !token) {
		localStorage.setItem('redirectUrl', to.fullPath);
		next("/login");
	} else {
		next();
	}
});

export default router
