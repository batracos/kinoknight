<template>
	<div id="app">
		<AddTodo />
		<FilterTodo />
		<TodoList />
	</div>
</template>

<script>
import TodoList from "../components/TodoList"
import AddTodo from "../components/AddTodo"
import FilterTodo from "../components/FilterTodo"

export default {
	name: "Home",
	components: {
		TodoList,
		AddTodo,
		FilterTodo
	}
}
</script>

<style>
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
