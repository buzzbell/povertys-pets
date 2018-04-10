<template lang="pug">
  .container
    .row.justify-content-center.mnt-5
      .col-6.bg-white.box-shadow.rounded-top
        h3 So you're ready to be a better person
        form
          .form-group
            label Full Name
            input.form-control(type="text" required)
            small check this helper text
          .form-group
            label Email Address
            input.form-control(type="email" required)
          .form-group
            label Phone Number
            input.form-control(type="tel" required)

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

<style scoped>
  .mnt-5 {
    margin-top: -55px;
  }
</style>
