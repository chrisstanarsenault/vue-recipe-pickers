<template>
  <div class="p-8 border border-b-black flex justify-end space-x-4 text-lg bg-black">
    <RouterLink
      :to="{name: 'all-recipes'}"
      class="text-white"
      :class="[route.name === 'all-recipes' ? 'font-bold underline underline-offset-2' : '']"
    >
      All recipes
    </RouterLink>

    <RouterLink
      :to="{name: 'pick-recipes'}"
      class="text-white"
      :class="[route.name === 'pick-recipes' ? 'font-bold underline underline-offset-2' : '']"
    >
      Pick recipes
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
