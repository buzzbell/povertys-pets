<template lang="pug">
  <div class="class-times">
    <div v-editable="blok" class="class-times__inner">
      h2 {{blok.title}}
      <p v-for="class_time in blok.class_time">
        <b>{{class_time.week_day}}</b>
        <b>{{class_time.times}}</b>
      </p>
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

<style lang="scss">

  .class-times__inner {
    background: blue;
  }

</style>
