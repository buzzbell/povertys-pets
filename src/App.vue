<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

h1, h2, h3 {
  font-family: 'Lato', sans-serif;
}

.box-shadow {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

</style>
