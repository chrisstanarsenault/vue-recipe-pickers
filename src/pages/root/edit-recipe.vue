<template>
  <div class="flex flex-col items-center space-y-10">
    <h2 class="text-4xl">
      Edit recipe
    </h2>

    <div class="space-y-2">
      <div>
        <label for="newRecipeName">
          Recipe name
        </label>

        <input
          id="newRecipeName"
          v-model="recipeName"
          class="border border-black"
          type="text"
        >
      </div>

      <div>
        <label for="newRecipeHelloFresh">
          Is this from HelloFresh
        </label>

        <input
          id="newRecipeHelloFresh"
          v-model="recipeIsHelloFresh"
          type="checkbox"
          class="w-4 h-4"
        >
      </div>
    </div>

    <button
      class="bg-black text-white px-4 py-2 rounded-full text-xl"
      @click="editRecipe"
    >
      Edit recipe
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

import { db } from '#firebase'

const route = useRoute()
const router = useRouter()

const recipeName = ref('')
const recipeIsHelloFresh = ref(false)

const recipeId = route.params.recipeId as string

const editRecipe = () => {
  try {
    updateDoc(doc(db, 'recipes', recipeId), {
      name: recipeName.value,
      hellofresh: recipeIsHelloFresh.value,
    })

    recipeName.value = ''
    recipeIsHelloFresh.value = false

    router.push({ name: 'all-recipes' })
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}

const getRecipe = async () => {
  try {
    const recipeDoc = await getDoc(doc(db, 'recipes', recipeId))

    if (recipeDoc.exists()) {
      const data = recipeDoc.data()

      recipeName.value = data.name
      recipeIsHelloFresh.value = data.hellofresh
    }
  } catch (error) {
    console.error('Error getting document: ', error)
  }
}

onMounted(() => {
  getRecipe()
})
</script>
