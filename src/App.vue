<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" style="margin-bottom:20px">
      <router-link to="/">
        <b-navbar-brand>Home</b-navbar-brand>
      </router-link>
      <b-navbar-nav class="ml-auto">
        <router-link :to="'/edit/blog/' + $route.params.slug" style="padding-right:10px">
          <b-button v-if="$route.params.slug" size="sm" class="my-2 my-sm-0">Edit</b-button>
        </router-link>
        <router-link to="/create/blog/">
          <b-button size="sm" class="my-2 my-sm-0">Create</b-button>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
