<template>
  <div class="hero">
    <div class="flex justify-center">
      <img class="logo" src="../assets/logo.jpg">
    </div>
    <!--
    The _editable attribute makes the next
    DOM-element clickable so the sidebar can
    show the right component.
    -->
    <div v-editable="blok" class="hero__inner">
      <h1>
        <!--
        You can access every attribute you
        define in the schema in the blok variable
        -->
        {{blok.title}}
      </h1>
      <div v-html="contentHtml">
      </div>
    </div>
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

<<style>
  .logo {
    width: 100%;
    height: 100%;
    max-width: 500px;
    padding: 15px;
    margin: 0 auto;
  }
</style>

