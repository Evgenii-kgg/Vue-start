<template>
  <div>
    <ul v-highlight>
      <SortItem
        v-for="(list, index) in list"
        :list="list"
        :key="index"
      />
    </ul>
    <span>Отмеченные имена: {{ selectName }}</span>
  </div>
</template>

<script>
import SortItem from './SortItem'
import Hi from '../mixins/Hi'

export default {
  name: 'SortList',
  mixins: [Hi],
  components: {
    SortItem
  },
  directives: {
    highlight: {
      bind (el) {
        el.style.fontWeight = 'bold'
      }
    }
  },
  data () {
    return {
      name: '',
      final: '',
      status: false,
      checkedNames: [],
      list: [
        { id: 0, name: 'Don Quixote', status: true },
        { id: 1, name: 'Robinson Crusoe', status: true },
        { id: 2, name: 'Gulliver Travels', status: false },
        { id: 3, name: 'Frankenstein', status: false },
        { id: 4, name: 'Moby_Dick', status: false }
      ]
    }
  },
  computed: {
    // sortList () {
    //   const sortList = this.list
    //   return sortList
    // },
    selectName () {
      return this.list.filter((el) => el.status).map((el) => el.name)
    }
  },
  methods: {
    deleteItem (id) {
      this.list = this.list.filter(el => {
        return el.id !== id
      })
    }
    // SearchItem () {
    //   this.final = this.name
    // }
    // SearchItem () {
    //   this.list = this.list.filter(el => {
    //     return (
    //       el.status !== status
    //     )
    //   })
    // }
  }
}
</script>

<style scoped>
ul {
  margin: 25px auto;
  width: 450px;
  padding: 0;
}

li {
  width: 100%;
  height: 25px;
  line-height: 25px;
  border: 1px solid;
  border-bottom: 0;
  text-align: left;
  padding-left: 15px;
}

li:last-child {
  border-bottom: 1px solid;
}
</style>
