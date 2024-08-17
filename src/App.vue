<template>
  <div>
    <Header />

    <div class="mx-auto max-w-screen-layout">
      <Home />
    </div>
  </div>
</template>

<script setup lang="ts">
import Home from '#pages/root/home.vue'

import Header from '#components/header.vue'
</script>
