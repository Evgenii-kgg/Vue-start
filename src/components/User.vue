<template>
  <div id="app">
    <div>Пользователь {{ $route.params.id }}</div>
  </div>
</template>

<script>

export default {
  name: 'User',
  components: {
    // Dinamic,
  },
  data () {
    return {
      items: [
        { id: 0, name: 'User1' },
        { id: 1, name: 'User2' },
        { id: 2, name: 'User3' },
        { id: 3, name: 'User4' }
      ]
    }
  },
  methods: {
    deleteItem (id) {
      this.items = this.items.filter(el => {
        return el.id !== id
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
