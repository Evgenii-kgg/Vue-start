<template>
  <div id="app">
    <img src="../assets/logo.png">
    <ToDoList :items="items"/>
    <Editor/>
    <FilterList :items="items"/>
  </div>
</template>

<script>
import ToDoList from './ToDoList'
import Editor from './Editor'
import FilterList from './FilterList'
export default {
  name: 'Try',
  components: {
    ToDoList,
    Editor,
    FilterList
  },
  data () {
    return {
      items: [
        { id: 0, name: 'Angular', status: true },
        { id: 1, name: 'React', status: true },
        { id: 2, name: 'Vue', status: true },
        { id: 3, name: 'Node', status: false }
      ]
    }
  },
  methods: {
    addTodo (name, status) {
      const isStatus = (status === 'true')
      this.items.push({ id: this.items.length, name: name, status: isStatus })
    }
    // deleteItem (id) {
    //   this.items = this.items.filter(el => {
    //     return el.id !== id
    //   })
    // },
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
