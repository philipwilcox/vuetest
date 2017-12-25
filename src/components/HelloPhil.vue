<template>
  <div class="helloPhil">
    <h1>{{ msg }}</h1>
    <div>{{long}}</div>
    <h2>Essential Links</h2>
    <ul>
      <!-- This was a static list, I've made it dynamic -->
      <li v-for="link in links.essential" :key="link.href">
        <a :href="link.href" target="_blank">{{link.label}}</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloPhil',
  data () {
    return {
      msg: 'Welcome to My Test Vue.js App',
      long: 'This is a simple testbed for getting familiar with modifying Vue single-file components.',
      links: {
        essential: [
          {href: 'https://www.latimes.com', label: 'Los Angeles Times'},
          {href: 'https://www.newyorker.com', label: 'The New Yorker'},
          {href: 'https://www.nytimes.com', label: 'New York Times'}
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ff6600;
}
</style>
