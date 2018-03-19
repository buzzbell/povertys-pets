<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 900px;
}

h1, h2 {
  text-align: center;
}

.banner-box {
  background-color: #4D4689;
  color: white;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
.banner-box > a {
  color: white;
}
</style>
