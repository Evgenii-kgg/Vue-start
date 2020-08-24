<template >
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <div id="example-1">
      <button v-on:click="counter += 1">+1</button>
      <p>Кнопка выше была нажата {{ counter }} раз</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TryComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
