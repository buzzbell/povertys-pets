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
      <p v-for="class_time in blok.class_time">
        <b>{{class_time.week_day}}</b>
        {{class_time.times}}
        <!-- <component  :blok="item" :is="item.component"></component> -->
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
