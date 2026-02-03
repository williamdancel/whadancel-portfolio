<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div class="max-w-6xl mx-auto px-6 py-4 flex gap-6">
        <router-link 
          to="/" 
          class="text-white font-semibold hover:text-blue-400 px-4 py-2 rounded-lg hover:bg-white/5"
          :class="{ 'bg-blue-600/20 text-blue-300': $route.path === '/' }"
        >
          My Portfolio
        </router-link>
        <router-link 
          to="/mgwm" 
          class="text-white font-semibold hover:text-red-400 px-4 py-2 rounded-lg hover:bg-white/5"
          :class="{ 'bg-red-600/20 text-red-300': $route.path === '/mgwm' }"
        >
          Makagago
        </router-link>
      </div>
    </nav>
    
    <div class="pt-20">
      <RouterView />
    </div>
  </div>
</template>