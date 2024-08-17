<template>
  <div class="flex flex-col items-center space-y-20">
    <h1 class="text-4xl">
      Recipe Picker
    </h1>

    <div class="space-y-4">
      <div class="flex space-x-4">
        <label for="amountToChoose">
          Amount of recipes to choose:
        </label>

        <input
          id="amountToChoose"
          v-model="amountToChoose"
          class="w-16 border border-black"
          type="number"
          min="1"
          :max="fetchedAllRecipes.length"
        >
      </div>

      <button
        class="bg-black text-white px-4 py-2 rounded-full text-xl w-full"
        @click="pickRecipes(amountToChoose)"
      >
        Pick recipes
      </button>
    </div>

    <button
      class="bg-black text-white px-4 py-2 rounded-full text-xl"
      @click="toggleAddRecipe"
    >
      Add recipe
    </button>
  </div>


  <div class="text-2xl flex flex-col items-center space-y-20">
    <div v-if="!chosenRecipes.length">
      No recipes yet
    </div>

    <div v-else>
      <div
        v-for="(recipe, index) in chosenRecipes"
        :key="recipe.name"
      >
        {{ index + 1 }}. {{ recipe.name }}
      </div>
    </div>
  </div>

  <div v-if="isAddingRecipe">
    <label for="newRecipeName">
      Recipe name
    </label>

    <input
      id="newRecipeName"
      v-model="newRecipeName"
      class="border border-black"
      type="text"
    >

    <label for="newRecipeHelloFresh">
      Is this from HelloFresh
    </label>

    <input
      id="newRecipeHelloFresh"
      v-model="newRecipeHelloFresh"
      type="checkbox"
    >

    <button
      class="bg-black text-white px-4 py-2 rounded-full text-xl"
      @click="addNewRecipe"
    >
      Add recipe
    </button>
  </div>
</template>

<script setup lang='ts'>
import { ref, type PropType, watch } from 'vue'
import { db } from '#firebase'
import { collection, addDoc, deleteDoc } from 'firebase/firestore'
import { RecipeType } from './types'

const props = defineProps({
  fetchedAllRecipes: {
    type: Array as PropType<RecipeType[]>,
    required: true,
  },

  fetchedChosenRecipes: {
    type: Array as PropType<RecipeType[]>,
    required: true,
  },
})

const chosenRecipes = ref<RecipeType[]>([])
const isAddingRecipe = ref(false)
const amountToChoose = ref(1)
const newRecipeName = ref('')
const newRecipeHelloFresh = ref(false)

const pickRecipes = (amount: number) => {
  chosenRecipes.value = []
  const indexesUsed: number[] = []

  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * props.fetchedAllRecipes.length)
    if (indexesUsed.includes(randomIndex)) {
      i--
      continue
    } else {
      indexesUsed.push(randomIndex)
    }
    chosenRecipes.value.push(props.fetchedAllRecipes[randomIndex])
  }
}

const addNewRecipe = async () => {
  try {
    await addDoc(collection(db, 'recipes'), {
      name: newRecipeName.value,
      helloFresh: newRecipeHelloFresh.value,
    })

    newRecipeName.value = ''
    newRecipeHelloFresh.value = false
    isAddingRecipe.value = false
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}

const toggleAddRecipe = () => {
  isAddingRecipe.value = !isAddingRecipe.value
}

watch(() => props.fetchedChosenRecipes, (fetchedChosenRecipes) => {
  chosenRecipes.value = fetchedChosenRecipes
})
</script>
