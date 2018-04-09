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

body {
  height: 100vh;
}

h1, h2, h3 {
  font-family: 'Lato', sans-serif;
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
