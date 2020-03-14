<template>
  <div>
    <div v-for="elem in todoList" v-bind:key="elem.id">
      <Todo v-bind:todo="elem" v-on:del-todo="$emit('del-todo', elem.id)" />
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue"
export default {
  name: 'TodoList',
  components: {
    Todo
  },
  props: ['todoList']
}
</script>

<style scoped>

</style>
