<template>
  <b-container class="bv-example-row" >
    <b-row class="justify-content-md-center">
      <b-col col lg="2"></b-col>
      <b-col cols="12" md="auto">
        <h1>{{post.title}}</h1>
        <h5>{{post.date}}</h5>
        <b-img :src="post.cover_image || 'http://via.placeholder.com/250x250'" fluid alt="Responsive image" style="max-height:200px"></b-img>
        <h3>{{post.excerpt}}</h3>
        <span style="text-align:left" v-html="post.html"></span>
      </b-col>
      <b-col col lg="2"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import showdown from 'showdown'
var converter = new showdown.Converter()
export default {
  name: 'blog-home',
  data () {
    return {
      post: {}
    }
  },
  methods: {
    getPost () {
      var results = this.$posts.filter(post => post.slug === this.$route.params.slug)
      if (results.length > 0) {
        this.post = results[0]
        this.post.html = converter.makeHtml(this.post.markdown)
      } else {
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
