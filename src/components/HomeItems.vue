<template lang="pug">
  section.pb-5
    .d-flex.justify-content-center
      .px-5.py-2.bg-white.box-shadow.rounded(style="margin-top:-30px;")
        h1 Ways to get involved with Poverty's Pets

    .container.text-center.mt-5
      .row
        .col-6.col-md-3
          .box-shadow.bg-white.rounded.grow
            a(href="/adopt")
              h3.py-2.mb-0
                |Adopt
                i.fas.fa-caret-right(data-fa-transform="right-6")
          <img src="../assets/pp-adopt.jpg" class="img-fluid rounded-bottom mt-5" />
        .col-6.col-md-3
          .box-shadow.bg-white.rounded.grow
            a(href="#")
              h3.py-2.mb-0
                |Donate
                i.fas.fa-caret-right(data-fa-transform="right-6")
          <img src="../assets/pp-donate.jpg" class="img-fluid rounded-bottom mt-5" />
        .col-6.col-md-3
          .box-shadow.bg-white.rounded.grow
            a(href="/foster")
              h3.py-2.mb-0
                |Foster
                i.fas.fa-caret-right(data-fa-transform="right-6")
          <img src="../assets/pp-programs.jpg" class="img-fluid rounded-bottom mt-5" />
        .col-6.col-md-3
          .box-shadow.bg-white.rounded.grow
            a(href="#")
              h3.py-2.mb-0
                |Volunteer
                i.fas.fa-caret-right(data-fa-transform="right-6")
          <img src="../assets/pp-involved.jpg" class="img-fluid rounded-bottom mt-5" />
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
  .grow {
    transition: all .2s ease-in-out;
    &:hover { transform: scale(1.1);}
  }

  // img {
  //   display: none;
  // }

  // @media on screen (min-width: 500px) {
  //   img {
  //     display: block;
  //   }
  // }

</style>
