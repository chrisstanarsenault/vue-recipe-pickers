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

          <button
            class="bg-black text-white px-4 py-2 rounded-full text-xl"
            @click="removeRecipe(recipe.id)"
          >
            Remove
          </button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '#firebase'

import type { RecipeType } from './types'

const props = defineProps({
  fetchedAllRecipes: {
    type: Array as PropType<RecipeType[]>,
    required: true,
  },
})

const removeRecipe = async (recipeId: string) => {
  await deleteDoc(doc(db, 'recipes', recipeId))
}
</script>
