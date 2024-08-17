<template>
  <div class="flex flex-col items-center space-y-10">
    <h2 class="text-4xl">
      Add recipe
    </h2>

    <div class="space-y-2">
      <div>
        <label for="newRecipeName">
          Recipe name
        </label>

        <input
          id="newRecipeName"
          v-model="newRecipeName"
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
          v-model="newRecipeHelloFresh"
          type="checkbox"
          class="w-4 h-4"
        >
      </div>
    </div>


    <button
      class="bg-black text-white px-4 py-2 rounded-full text-xl"
      @click="addNewRecipe"
    >
      Add recipe
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'

import { db } from '#firebase'

const newRecipeName = ref('')
const newRecipeHelloFresh = ref(false)

const addNewRecipe = async () => {
  try {
    await addDoc(collection(db, 'recipes'), {
      name: newRecipeName.value,
      helloFresh: newRecipeHelloFresh.value,
    })

    newRecipeName.value = ''
    newRecipeHelloFresh.value = false
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}
</script>
