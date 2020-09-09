<template>
  <div>
    <ul v-highlight>
      <FilterItem
        v-for="(list, index) in filteredList"
        :list="list"
        :key="index"
      />
    </ul>
    <div>
      <input
        type="text"
        v-model="name"
      />
    </div>
    <button @click="SearchItem">
      Search
    </button>
  </div>
</template>

<script>
import FilterItem from './FilterItem'
import Hi from '../mixins/Hi'

export default {
  name: 'FilterList',
  mixins: [Hi],
  components: {
    FilterItem
  },
  // props: {
  //   list: {
  //     type: Array,
  //     required: true
  //   }
  // },
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
      list: [
        { id: 0, name: 'Jon', status: true },
        { id: 1, name: 'Mike', status: true },
        { id: 2, name: 'Lily', status: true },
        { id: 3, name: 'Andy', status: false },
        { id: 4, name: 'Grace', status: false },
        { id: 5, name: 'Phoebe', status: false },
        { id: 6, name: 'Jacob', status: false }
      ]
    }
  },
  computed: {
    filteredList () {
      return (
        this.list.filter(el => {
          return (
            el.name.includes(this.final)
          )
        })
      )
    }
  },
  methods: {
    deleteItem (id) {
      this.list = this.list.filter(el => {
        return el.id !== id
      })
    },
    SearchItem () {
      this.final = this.name
    }
    // SearchItem () {
    //   if (name.length > 0) {
    //     this.list = this.list.filter(el => {
    //       return (
    //         el.name !== name
    //       )
    //     })
    //   } else alert('Invalid name')
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
