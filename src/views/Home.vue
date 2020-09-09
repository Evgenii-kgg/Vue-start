<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home Work with Router</h1>
<!--    <Try msg="Welcome to Your Vue.js App"/>-->
    <div>
      <button @click="User(1)">
        User1
      </button>
    </div>
    <p>{{ Count }}</p>
    <button @click="$store.commit('increment')">Add+1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      name: 'Jon'
    }
  },
  methods: {
    User (id) {
      this.$router.push(`/user/:${id}`)
    }
  },
  computed: {
    ...mapState({
      Count: state => state.count
    })
  }
}
</script>
