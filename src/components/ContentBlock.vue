<template>
  <div class="class-times">
    <!--
    The _editable attribute makes the next
    DOM-element clickable so the sidebar can
    show the right component.
    -->
    <div v-editable="blok" class="class-times__inner">
      <h2>
        <!--
        You can access every attribute you
        define in the schema in the blok variable
        -->
        {{blok.title}}
      </h2>
      <div v-html="contentHtml">
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['blok'],
  data () {
    return {
      contentHtml: marked(this.blok.content)
    }
  }
}
</script>
