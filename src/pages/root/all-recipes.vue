<template>
  <div class="flex flex-col items-center space-y-16">
    <h2 class="text-4xl">
      All recipes
    </h2>

    <div>
      <ol class="space-y-4">
        <RouterLink
          :to="{name: 'add-recipe'}"
          class="bg-black text-white px-3 py-1 rounded-full text-md"
        >
          Add recipe
        </RouterLink>

        <li
          v-for="recipe in props.fetchedAllRecipes"
          :key="recipe.name"
          class="border border-black py-4 px-16"
        >
          <div>Name: {{ recipe.name }}</div>
          <div>From HelloFresh: {{ recipe.hellofresh ? 'Yes' : 'No' }}</div>

          <div class="mt-4 space-x-2">
            <button
              class="bg-black text-white px-3 py-1 rounded-full text-md"
              @click="removeRecipe(recipe.id)"
            >
              Remove
            </button>

            <button
              :to="{name: 'edit-recipe', params: { recipeId: recipe.id }}"
              class="bg-black text-white px-3 py-1 rounded-full text-md"
              @click="navigateToEditRecipe(recipe.id)"
            >
              Edit
            </button>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { useRouter } from 'vue-router'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '#firebase'

import type { RecipeType } from './types'

const props = defineProps({
  fetchedAllRecipes: {
    type: Array as PropType<RecipeType[]>,
    required: true,
  },
})

const router = useRouter()

const removeRecipe = async (recipeId: string) => await deleteDoc(doc(db, 'recipes', recipeId))

const navigateToEditRecipe = (id: string) => router.push({ name: 'edit-recipe', params: { recipeId: id } })
</script>
