<template>
  <div class="min-h-screen bg-gray-900">
    <!-- Navigation -->
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <h1 class="text-2xl font-bold text-white">HPlay</h1>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a href="#" class="text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Movies</a>
                <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">TV Shows</a>
                <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My List</a>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button class="text-gray-300 hover:text-white p-2 rounded-full">
              <SearchIcon class="h-6 w-6" />
            </button>
            <button class="text-gray-300 hover:text-white p-2 rounded-full ml-4">
              <BellIcon class="h-6 w-6" />
            </button>
            <div class="ml-4">
              <img class="h-8 w-8 rounded-full" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="User profile" />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <!-- Featured Content -->
      <div class="relative rounded-lg overflow-hidden h-[500px] mb-8">
        <img src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg" alt="Featured content" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50">
          <div class="absolute bottom-0 left-0 p-8">
            <h2 class="text-4xl font-bold text-white mb-4">Featured Title</h2>
            <p class="text-gray-200 mb-6 max-w-2xl">A brief description of the featured content goes here. This could be a movie or TV show synopsis.</p>
            <div class="flex space-x-4">
              <button class="bg-white text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 flex items-center">
                <PlayIcon class="h-5 w-5 mr-2" />
                Play
              </button>
              <button class="bg-gray-500/75 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500/50 flex items-center">
                <InformationCircleIcon class="h-5 w-5 mr-2" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Sections -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">Trending Now</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="n in 6" :key="n" class="aspect-[2/3] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
            <img :src="`https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg`" alt="Movie poster" class="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">Continue Watching</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="n in 6" :key="n" class="aspect-[2/3] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
            <img :src="`https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg`" alt="Movie poster" class="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon, BellIcon, PlayIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
</script>