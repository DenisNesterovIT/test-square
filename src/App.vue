<template>
  <div class="container">
    <Square />
  </div>
</template>

<script>
import Square from './components/Square.vue'

export default {
  name: 'App',
  components: {
    Square
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  margin: 0;
  padding: 0;
  height: 100vh;
  position: relative;
}
</style>