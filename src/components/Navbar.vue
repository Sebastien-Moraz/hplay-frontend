<script setup>
import {RouterLink} from 'vue-router'
import {onMounted, ref} from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = (event) => {
	if (event.target.closest('.burger-menu')) {
		isMenuOpen.value = !isMenuOpen.value;
	} else {
		isMenuOpen.value = false;
	}
}

onMounted(() => {
	document.addEventListener('click', toggleMenu)
})
</script>

<template>
	<nav class="navbar">
		<!-- Logo -->
		<div class="logo">
			<RouterLink to="/">
				<img src="@/assets/logo.png" alt="Logo"/>
			</RouterLink>
		</div>

		<!-- Burger Menu -->
		<img src="@/assets/burgerMenu.svg" alt="Logo" class="burger-menu"/>

		<!-- Menu Links -->
		<ul class="menu" :class="{ open: isMenuOpen }">
			<li>
				<RouterLink to="/">Home</RouterLink>
			</li>
			<li>
				<RouterLink to="/store">Magasin</RouterLink>
			</li>
			<li>
				<RouterLink to="/cart">Panier</RouterLink>
			</li>
			<li>
				<RouterLink to="/about">À propos</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #1d1d1d;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
}

.logo img {
	height: 40px;
}

.burger-menu {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 40px;
	height: 40px;
	cursor: pointer;
}

.burger-menu span {
	display: block;
	height: 3px;
	background-color: #333;
	border-radius: 2px;
}

.menu {
	display: none;
	flex-direction: column;
	position: absolute;
	top: 60px;
	right: 1rem;
	background-color: black;
	border: 1px solid #ddd;
	border-radius: 5px;
	padding: 1rem;
	z-index: 1000;
}

.menu.open {
	display: flex;
}

.menu li {
	margin: 0.5rem 0;
}

.menu a {
	text-decoration: none;
	font-size: 1.4rem;
	color: white;
	font-weight: bold;
}

.menu a.router-link-exact-active {
	color: red;
}

@media (min-width: 768px) {
	.burger-menu {
		display: none;

	}

	.menu {
		display: flex;
		position: static;
		flex-direction: row;
		background: none;
		border: none;
		padding: 0;

	}

	.menu li {
		margin: 0 1rem;
	}
}
</style>