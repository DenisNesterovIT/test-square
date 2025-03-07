<script setup lang="ts">
import Square from './components/Square.vue';
</script>

<template>
  <section class="container">
    <Square/>
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>
