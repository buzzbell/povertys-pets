<template>
  <div class="contact-form">
    <div class="contact-form__inner p1 border" v-if="this.formSubmitted" v-html="confirmationHtml">
    </div>
    <div v-else v-editable="blok" class="contact-form__inner p1 border">
      <h3>
        {{blok.title}}
      </h3>
      <div v-html="contentHtml" style="max-width: 450px;">
      </div>

      <form id="contact-form" v-on:submit.prevent="submitForm" class="md-col-8">
        <p>
          <label>Name</label>
          <input v-model="fields.name" type="text" name="name" class="block col-12 mb1 field" required>
        </p>
        <p>
          <label>Email</label>
          <input v-model="fields.email" type="email" name="email" class="block col-12 mb1 field" required>
        </p>
        <p>
          <label>Phone</label>
          <input v-model="fields.phone" type="tel" name="phone" class="block col-12 mb1 field">
        </p>
        <p>
          <button type=”submit” class="btn btn-primary">Send</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

export default {
  props: ['blok'],
  data () {
    return {
      contentHtml: marked(this.blok.description),
      confirmationHtml: marked(this.blok.confirmation_text),
      formSubmitted: false,
      fields: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    submitForm: function () {
      axios({
        method: 'post',
        // add to process vars
        url: `https://api.airtable.com/v0/${this.blok.airtable_id}?api_key=keyQ7d9g5zw7EJXwu`,
        headers: {
          'Content-type': 'application/json'
        },
        data: {
          'fields': {
            'Name': this.fields.name,
            'Email': this.fields.email,
            'Phone': this.fields.phone
          }
        }
      })
      // use success // error to change behavior here
      this.formSubmitted = true
    }
  }
}
</script>

<style scoped>
  label {
    font-size: 1.3rem;
  }
</style>
