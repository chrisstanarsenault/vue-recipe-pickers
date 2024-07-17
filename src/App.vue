<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      :src="Logo"
      width="125"
      height="125"
    >

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>

        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <Home />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '#components/HelloWorld.vue'

import Home from '#pages/root/home.vue'

import Logo from '#assets/logo.svg'
</script>

<style scoped>

</style>
