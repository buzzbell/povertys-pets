<template lang="pug">
  section
    .container
      .h3 Application to Adopt a Pet
      p nstructions: Please read this application, fill in the blanks, and submit the application so that our staff may review it. The information that you provide in this application and during our interview will help us find a good match for you.
      b Please note: This adoption form will take about 10 minutes to complete.
      .row.justify-content-center
        .col-6.bg-white.box-shadow.mt-5.mb-5
          form
            .form-group
              label Full Name
              input.form-control(type="text" required)
            .form-group
              label Email Address
              input.form-control(type="email" required)
            .form-group
              label Phone Number
              input.form-control(type="tel" required)
            .form-group
              label How will your new pet spend its night?
              select.form-control
                option What up
                option Basement
                option Inside
                option somewhere
            h5 What type of pet are you looking for?
            .form-check.form-check-inline
              input.form-check-input(type="radio" name="GenderSelect" id="malefemale" value="male-or-female")
              label.form-check-lable(for="malefemale") Male or Female
            .form-check.form-check-inline
              input.form-check-input(type="radio" name="GenderSelect" id="male" value="choosemale")
              label.form-check-lable(for="male") Male
            .form-check.form-check-inline
              input.form-check-input(type="radio" name="GenderSelect" id="female" value="choosefemale")
              label.form-check-lable(for="female") Female
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

</style>
