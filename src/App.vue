<template>
  <div id="app">
    <svg-sprite-color/>
    <img alt="Vue logo" src="@/../assets/logo.png">
    <HelloWorld msg="Welcome to the svg-sprite test, a svg should show below"/>
    <svg-icon icon="fullScreen" class="example-icon"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

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
