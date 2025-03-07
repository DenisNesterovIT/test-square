<template>
  <div class="square"></div>
</template>

<script>
export default {
  name: 'Square'
}
</script>

<style scoped lang="scss">
.square {
  width: 200px;
  height: 200px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>