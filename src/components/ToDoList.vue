<template>
  <ul v-highlight>
    <TodoItem
      v-for="(item, index) in items"
      :item="item"
      :key="index"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem'
import Hi from '../mixins/Hi'
export default {
  name: 'ToDoList',
  mixins: [Hi],
  components: {
    TodoItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  directives: {
    highlight: {
      bind (el) {
        el.style.fontWeight = 'bold'
      }
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

<style scoped>
ul {
  margin: 0 auto;
  width: 450px;
  padding: 0;
}
li {
  width: 100%;
  height: 25px;
  line-height: 25px;
  border: 1px solid;
  border-bottom: 0;
  list-style-type: none;
  text-align: left;
  padding-left: 15px;
}
li:last-child {
  border-bottom: 1px solid;
}
</style>
