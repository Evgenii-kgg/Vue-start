<template>
  <transition name="fade">
    <li>
      <div>{{ list.name }}</div>
      <div>
        <input
          type="checkbox"
          value="list.name"
          id="list.name"
          v-model="list.status"
          :checked="list.status"
        />
        <label for="list.name">Learned</label>
      </div>
      <div>
        <button @click="deleteItem(list.id)">
          Delete
        </button>
      </div>
    </li>
  </transition>
</template>

<script>
export default {
  name: 'FilterItem',
  props: {
    list: {
      type: Object,
      required: true,
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      status: {
        type: Boolean,
        required: true
      }
    }
  },
  methods: {
    deleteItem (id) {
      this.$parent.deleteItem(id)
    }
  }
}
</script>

<style scoped>
div {
  float: left;
  width: 33%;
  height: 25px;
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
