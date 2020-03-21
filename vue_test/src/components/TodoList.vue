<template>
	<div>
		<div v-for="elem in getAllTodos" :key="elem.id">
			<Todo :todo="elem" />
		</div>
	</div>
</template>

<script>
import Todo from "./Todo.vue";
import {mapGetters, mapActions} from "vuex";
export default {
	name: 'TodoList',
	components: {
		Todo
	},
	methods: {
		...mapActions(["fetchTodos"])
	},
	computed: mapGetters(["getAllTodos"]),
	props: ['todoList'],
	created() { this.fetchTodos() }
}
</script>

<style scoped>

</style>
