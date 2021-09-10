<template>
  <div>
    <h1>HI THIS IS A VUE MICROFROTNEND</h1>
    Microfrontend 
    {{this.name}} mounted with "somevalue" Property: 
    {{this.somevalue}}
  </div>
</template>

<script>

export default {
  props: ['somevalue', 'name'],
  name: 'App',
  components: {
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
