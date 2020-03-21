<template>
	<div>
		<form @submit.prevent="onSubmit">
			<input type="text" v-model="title" name="title" placeholder="add todo...">
			<input type="submit" value="submit" class="btn">
		</form>
	</div>
</template>

<script>
	import {mapActions} from "vuex";
	export default {
		name: "AddTodo",
		data() {
			return {
				title: ""
			}
		},
		methods: {
			...mapActions(["postTodo"]),
			onSubmit() {
				this.postTodo(this.title)
			}
		}
	}
</script>

<style scoped>
	form {
		display: flex;
	}

	input[type="text"] {
		flex: 10;
		padding: 5px;
	}

	input[type="submit"] {
		flex: 2;
	}
</style>