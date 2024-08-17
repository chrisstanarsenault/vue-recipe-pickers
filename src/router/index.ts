import { createRouter, createWebHistory } from 'vue-router'

import Home from '#pages/root/home.vue'
import AllRecipes from '#pages/root/all-recipes.vue'
import RecipePicker from '#pages/root/recipe-picker.vue'
import AddRecipe from '#pages/root/add-recipe.vue'
import EditRecipe from '#pages/root/edit-recipe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'recipe-picker' },
      component: Home,
      children: [
        {
          path: 'all-recipes',
          name: 'all-recipes',
          component: AllRecipes,
        },
        {
          path: 'pick-recipes',
          name: 'pick-recipes',
          component: RecipePicker,
        },
        {
          path: 'add-recipe',
          name: 'add-recipe',
          component: AddRecipe,
        },
        {
          path: 'edit-recipe/:recipeId',
          name: 'edit-recipe',
          component: EditRecipe,
        },
      ],
    },
  ],
})

export default router
