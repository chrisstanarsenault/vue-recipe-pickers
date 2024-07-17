<template>
  <div class="w-full my-20 space-y-10">
    <div class="flex flex-col items-center space-y-20">
      <h1 class="text-4xl">
        Recipe Picker
      </h1>

      <button
        class="bg-black text-white px-4 py-2 rounded-full text-xl"
        @click="pickRecipes(5)"
      >
        Pick recipes
      </button>
    </div>

    <div class="text-2xl flex flex-col items-center space-y-20">
      <div v-if="!chosenRecipes.length">
        No recipes yet
      </div>

      <div v-else>
        <div
          v-for="(recipe, index) in chosenRecipes"
          :key="recipe"
        >
          {{ index + 1 }}. {{ recipe }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const chosenRecipes = ref([])
const recipes = [
  'Spaghetti',
  'Pizza',
  'Burger',
  'Salad',
  'Soup',
  'Sandwich',
  'Pasta',
  'Taco',
  'Burrito',
  'Sushi',
]

const pickRecipes = (amount: number) => {
  chosenRecipes.value = []
  const indexesUsed = []

  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * recipes.length)
    if (indexesUsed.includes(randomIndex)) {
      i--
      continue
    } else {
      indexesUsed.push(randomIndex)
    }
    chosenRecipes.value.push(recipes[randomIndex])
  }
}
</script>
