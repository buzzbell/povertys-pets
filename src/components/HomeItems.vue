<template lang="pug">
  section.pb-5
    .d-flex.justify-content-center
      .px-5.py-2.bg-white.box-shadow.rounded(style="margin-top:-30px;")
        h1 Ways to get involved with Poverty's Pets

    .container.text-center.mt-5
      .row
        .col-6.col-md-3
          .box-shadow.bg-white.rounded
            a(href="#")
              h3.py-2.mb-0
                |Adopt
                i.fas.fa-caret-right(data-fa-transform="right-6")
              <img src="../assets/pp-adopt.jpg" class="img-fluid rounded-bottom" />
        .col-6.col-md-3
          .box-shadow.bg-white.rounded
            a(href="#")
              h3.py-2.mb-0
                |Donate
                i.fas.fa-caret-right(data-fa-transform="right-6")
              <img src="../assets/pp-donate.jpg" class="img-fluid rounded-bottom" />
        .col-6.col-md-3
          .box-shadow.bg-white.rounded
            a(href="#")
              h3.py-2.mb-0
                |Foster
                i.fas.fa-caret-right(data-fa-transform="right-6")
              <img src="../assets/pp-programs.jpg" class="img-fluid rounded-bottom" />
        .col-6.col-md-3
          .box-shadow.bg-white.rounded
            a(href="#")
              h3.py-2.mb-0
                |Volunteer
                i.fas.fa-caret-right(data-fa-transform="right-6")
              <img src="../assets/pp-involved.jpg" class="img-fluid rounded-bottom" />
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

<style lang="scss" scoped>
  span {
    font-family: 'Nanum Brush Script', cursive;
    font-size: 5rem;
  }
  .box-shadow {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all .2s ease-in-out;
    &:hover { transform: scale(1.1);}
  }

  section {
    background: #f1f1f1;
  }

</style>
