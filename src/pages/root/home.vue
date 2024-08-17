<template>
  <div class="w-full my-20 space-y-10">
    <RouterView
      :fetched-all-recipes="fetchedAllRecipes"
      :fetched-chosen-recipes="fetchedChosenRecipes"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { onSnapshot, collection } from 'firebase/firestore'

import { db } from '#firebase'

import type { RecipeType } from './types'

const fetchedChosenRecipes = ref<RecipeType[]>([])
const fetchedAllRecipes = ref<RecipeType[]>([])

onMounted(async () => {
  // const unsub = onSnapshot(doc(db, 'cities', 'SF'), (doc) => {
  //   console.log('Current data: ', doc.data())
  // })

  // const querySnapshot = await getDocs(collection(db, 'recipes'))

  // querySnapshot.forEach((doc) => {
  //   if (doc) {
  //     fetchedRecipes.value.push({ name: doc.id, ...doc.data() })
  //   }
  // })

  onSnapshot(collection(db, 'recipes'), (querySnapshot) => {
    const recipes: RecipeType[] = []

    querySnapshot.forEach((doc) => {
      recipes.push({ id: doc.id, name: doc.data().name, hellofresh: doc.data().hellofresh })
    })

    fetchedAllRecipes.value = recipes
  })
})
</script>
