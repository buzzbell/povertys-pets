<template>
  <div class="hero">
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
