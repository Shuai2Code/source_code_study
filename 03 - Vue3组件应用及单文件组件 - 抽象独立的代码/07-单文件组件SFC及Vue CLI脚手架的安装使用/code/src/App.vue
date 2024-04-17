<template>
  <img alt="Vue logo" :src="src">
  <h1 class="title">根组件的title</h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import logo from './assets/logo.png'
import './assets/common.css'

export default {
  name: 'App',
  data(){
    return {
      src: logo
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
