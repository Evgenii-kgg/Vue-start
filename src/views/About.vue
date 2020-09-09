<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="../assets/logo.png">
    <ToDoList :items="items"/>
    <Editor/>
    <FilterList :items="items"/>
    <SortList/>
  </div>
</template>

<script>
import ToDoList from '../components/ToDoList'
import Editor from '../components/Editor'
import FilterList from '../components/FilterList'
import SortList from '../components/SortList'
export default {
  name: 'app',
  components: {
    ToDoList,
    Editor,
    FilterList,
    SortList
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
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
