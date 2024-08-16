<template>
  <div>
    <h1>All recipes</h1>

    <div>
      <ol class="space-y-4">
        <li
          v-for="recipe in props.fetchedAllRecipes"
          :key="recipe.name"
          class="border border-black p-4"
        >
          <div>Name: {{ recipe.name }}</div>
          <div>From HelloFresh: {{ recipe.hellofresh ? 'Yes' : 'No' }}</div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

import type { RecipeType } from './types'

const props = defineProps({
  fetchedAllRecipes: {
    type: Array as PropType<RecipeType[]>,
    required: true,
  },
})
</script>
