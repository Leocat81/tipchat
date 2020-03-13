<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      active: 0
    }
  },

  methods: {
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
