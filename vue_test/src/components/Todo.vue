<template>
	<div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
		<p>
			<input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed">
			{{todo.title}}
			<button @click="$emit('del-todo', todo.id)">x</button>
		</p>
	</div>
</template>

<script>
	export default {
		name: "Todo",
		props: ["todo"],
		methods: {
			markComplete() {
				this.todo.completed = !this.todo.completed
			}
		}
	}
</script>

<style scoped>

	.todo-item {
		border-bottom: 1px gray dotted;
		background-color: #e4e4e4;
		padding: 10px
	}

	.is-complete {
		text-decoration: line-through;
	}
</style>
