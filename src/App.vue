<script setup>
import { RouterView } from 'vue-router'
import Headers from './components/Header/index.vue'
</script>

<template>
  <component :is="$route.meta.Layout" />
</template>
