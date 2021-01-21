<template>
  <div id="app">
    <svg-sprite/>
    <img alt="Vue logo" src="@/../assets/logo.png">
    <HelloWorld msg="Welcome to the svg-sprite test, a svg should show below"/>
    <svg-icon icon="fullScreen" class="example-icon"/>
  </div>
</template>

<script>
import one from '@abi-software/svg-sprite'
import HelloWorld from './components/HelloWorld.vue'
window.what = one
export default {
  name: 'App',
  components: {
    HelloWorld,
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
