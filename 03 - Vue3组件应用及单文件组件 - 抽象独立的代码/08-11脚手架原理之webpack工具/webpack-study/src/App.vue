<template>
  <div @click="handleClick" class="title">{{ message }}</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue3!'
    }
  }
}
</script>

<style lang="less" scoped></style>
