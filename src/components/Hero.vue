<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white" style="background:linear-gradient(to bottom,#9ECAE7 95%,rgba(255,255,255,0) 100%)!important">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Programs
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Rescue</a>
                <a class="dropdown-item" href="#">Columbus House</a>
                <a class="dropdown-item" href="#">Education</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <button class="btn btn-success my-2 mr-2" type="submit">Donate Now</button>
        </div>
      </nav>
    </header>
    <section style="background: linear-gradient(to bottom,#9ECAE7 99%,rgba(255,255,255,0) 100%)" class="text-center pb-5">
        <img class="logo" src="../assets/logo.jpg" style="position:relative;z-index:1040;">
      <!--
      The _editable attribute makes the next
      DOM-element clickable so the sidebar can
      show the right component.
      -->
      <div v-editable="blok" class="container">
        <h1>{{blok.title}}</h1>
        <div v-html="contentHtml">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data () {
    return {
      contentHtml: this.blok.content
    }
  }
}
</script>

<style>
  header {
    height: 60px;
  }
  .logo {
    width: 100%;
    height: 100%;
    max-width: 500px;
    padding: 15px;
    margin: 0 auto;
  }
</style>

