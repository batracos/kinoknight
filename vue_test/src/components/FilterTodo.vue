<template>
	<div id="filter">
		Max amount:
		<select @change="fetchSomeTodos($event)">
			<option value="50">50</option>
			<option value="20">20</option>
			<option value="10">10</option>
			<option value="5">5</option>
		</select>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		name: "FilterTodo",
		methods: {
			...mapActions(["fetchSomeTodos"])
		}
	}
</script>

<style scoped>
	#filter {
		text-align: right;
	}

</style>
