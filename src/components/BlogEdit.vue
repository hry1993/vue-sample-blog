<template>
  <b-container style="text-align:left">
    <div>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Title:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            placeholder="Enter title"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Excerpt:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.excerpt"
            placeholder="Enter excerpt"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Cover Image(Link or base64):" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.cover_image"
            placeholder="Enter link or base64"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Blog(Markdown):" label-for="input-4">
          <b-form-textarea
            id="textarea"
            v-model="form.markdown"
            placeholder="Enter blog in markdown"
            rows="3"
            max-rows="6"
            @change="markdownToHtml"
          ></b-form-textarea>
        </b-form-group>
        <div style="text-align:center">
          <b-button type="submit"  variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
      <b-card class="mt-3" header="Blog content preview">
        <span v-html="form.html"></span>
      </b-card>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import showdown from 'showdown'
var converter = new showdown.Converter()
export default {
  name: 'blog-home',
  data () {
    return {
      form: {
        title: '',
        excerpt: '',
        cover_image: null,
        markdown: '',
        html: ''
      },
      index: -1
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      var today = new Date()
      this.form.date = today.toDateString()
      this.form.slug = this.form.title.replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '-')
      console.log(this.form.slug)
      var checkExists = this.$posts.findIndex(post => post.slug === this.form.slug)
      console.log(checkExists)
      if (checkExists !== this.index && checkExists > -1) {
        alert('This post title is already used!!!')
      } else {
        this.$posts[this.index] = {...this.form}
        this.$router.push('/blog/' + this.form.slug)
      }
    },
    onReset (event) {
      event.preventDefault()
      this.form = {...this.$posts[this.index]}
      this.form.html = converter.makeHtml(this.form.markdown)
    },
    markdownToHtml () {
      this.form.html = converter.makeHtml(this.form.markdown)
    },
    getPost () {
      this.index = this.$posts.findIndex(post => post.slug === this.$route.params.slug)
      console.log(this.index)
      if (this.index > -1) {
        this.form = {...this.$posts[this.index]}
        this.form.html = converter.makeHtml(this.form.markdown)
      } else {
        console.log(this.$route.params.slug)
        this.$router.push('/')
      }
    }
  },
  created () {
    this.getPost()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
