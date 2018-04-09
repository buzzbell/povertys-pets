<!-- storyblok injected content -->
<template>
  <div class="container">
    <div v-editable="blok">
      <div v-html="contentHtml"></div>
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
