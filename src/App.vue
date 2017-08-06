<template>
  <div class="p2" id="app">
    <router-view></router-view>
    <div class='footer center p3' itemscope itemtype="http://schema.org/LocalBusiness">
      <span itemprop="name">Zen Hapkido</span> <br/>
      <span itemprop="telephone">(310) 962-1772</span><br/>
      <div itemprop=”address” itemscope itemtype=”http://schema.org/PostalAddress”>
        <span>Located at <a href="http://fitandfearless.com" target="blank">Fit and Fearless</a></span>
        <br>
        <span itemprop="streetAddress">2800 I-35 #100</span>
        <br>
        <span itemprop="addressLocality">Austin</span>,<span itemprop="addressRegion">TX</span> <span itemprop="postalCode">78704</span>
      </div>
      <meta itemprop="latitude" content="30.228794" />
      <meta itemprop="longitude" content="-97.745007" />
    </div>
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
