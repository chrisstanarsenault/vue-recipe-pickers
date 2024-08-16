import { createRouter, createWebHistory } from 'vue-router'

import Home from '#pages/root/home.vue'
import AllRecipes from '#pages/root/all-recipes.vue'
import RecipePicker from '#pages/root/recipe-picker.vue'

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
          path: 'recipe-picker',
          name: 'recipe-picker',
          component: RecipePicker,
        },
      ],
    },
  ],
})

export default router
