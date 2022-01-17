<template>
  <b-container>
    <b-card-group columns>
      <router-link :to="'/blog/' + post.slug"
      v-for="(post,index) in posts"
      :key="post.slug + '_' + index">
        <b-card
          :title="post.title"
          :img-src="post.cover_image || 'http://via.placeholder.com/250x250'"
          :img-alt="post.title"
          img-top
          style="max-width: 20rem;"
          :footer="post.date"
        >
          <b-card-text>
            {{post.excerpt}}
          </b-card-text>
        </b-card>
      </router-link>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  name: 'blog-home',
  data () {
    return {
      page_title: 'Blog',
      posts: []
    }
  },
  methods: {
    getPosts () {
      this.posts = [...this.$posts]
    }
  },
  created () {
    this.getPosts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
