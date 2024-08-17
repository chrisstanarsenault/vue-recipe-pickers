<template>
  <div class="flex flex-col items-center space-y-16">
    <h2 class="text-4xl">
      Recipe Picker
    </h2>

    <div class="space-y-4">
      <div class="flex space-x-4">
        <label for="amountToChoose">
          Amount of recipes to choose:
        </label>

        <input
          id="amountToChoose"
          v-model="amountToChoose"
          class="w-16 border border-black pl-2"
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
</template>

<script setup lang='ts'>
import { ref, type PropType, watch } from 'vue'
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
const amountToChoose = ref(1)

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

watch(() => props.fetchedChosenRecipes, (fetchedChosenRecipes) => {
  chosenRecipes.value = fetchedChosenRecipes
})
</script>
