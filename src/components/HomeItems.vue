<template lang="pug">
  section
    .container.text-center
      .row
        .col-6.col-md-3
          a.btn.btn-outline-primary.btn-lg.btn-block.mt-3(href="/adopt")
            |Adopt
            i.fas.fa-caret-right(data-fa-transform="right-6")

        .col-6.col-md-3
          a.btn.btn-outline-primary.btn-lg.btn-block.mt-3(href="#")
            |Donate
            i.fas.fa-caret-right(data-fa-transform="right-6")

        .col-6.col-md-3
          a.btn.btn-outline-primary.btn-lg.btn-block.mt-3(href="/foster")
            |Services
            i.fas.fa-caret-right(data-fa-transform="right-6")

        .col-6.col-md-3
          a.btn.btn-outline-primary.btn-lg.btn-block.mt-3(href="#")
            |Get Involved
            i.fas.fa-caret-right(data-fa-transform="right-6")

      .row
        .col-6.col-md-3
          <img src="../assets/pp-adopt.jpg" class="img-fluid rounded mt-3" />
        .col-6.col-md-3
          <img src="../assets/pp-donate.jpg" class="img-fluid rounded mt-3" />
        .col-6.col-md-3
          <img src="../assets/pp-programs.jpg" class="img-fluid rounded mt-3" />
        .col-6.col-md-3
          <img src="../assets/pp-involved.jpg" class="img-fluid rounded mt-3" />

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
