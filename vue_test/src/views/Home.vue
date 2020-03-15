<template>
	<div id="app">
		<AddTodo v-on:add-todo="addTodo" />
		<TodoList
			v-bind:todoList="todos_data"
			v-on:del-todo="deleteTodo"
		/>
	</div>
</template>

<script>
import TodoList from "../components/TodoList"
import AddTodo from "../components/AddTodo"
import axios from "axios"

export default {
	name: "Home",
	components: {
		TodoList,
		AddTodo
	},
	data() {
		return {
			todos_data: [
				// {
				// 	id: 1,
				// 	title: "fai un bel sito",
				// 	completed: false
				// },
				// {
				// 	id: 2,
				// 	title: "ama marghi",
				// 	completed: true
				// }
			]
		}
	},
	methods: {
		deleteTodo(id) {
			axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
				.then(() => this.todos_data = this.todos_data.filter(todo => todo.id !== id))
				.catch(err => console.log(err))
		},
		addTodo(newTodo) {
			const {title, completed} = newTodo
			axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed})
				.then(res => this.todos_data = [...this.todos_data, res.data])
				.catch(err => console.log(err))
		}
	},
	created() {
		axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then(res => this.todos_data = res.data)
			.catch(err => console.log(err))
	}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		text-align: center;
	}

	.btn {
		display: inline-block;;
		border: none;
		background-color: #555;
		color: #fff;
		padding: 7px 20px;
		cursor: pointer;
	}

	.btn:hover {
		background-color: #666;
	}
</style>
