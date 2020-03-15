<template>
	<header class="header">
		<h1>TodoList</h1>
		<nav id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/contact">Contact</router-link>
		</nav>
	</header>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style scoped>

	#nav {
		padding: 30px;
	}

	#nav a {
		color: #fff;
		text-decoration: none;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	.header {
		background-color: #333;
		color: #fff;
		text-align: center;
		padding: 10px;
	}

	.header a {
		color: #fff;
		padding-right: 5px;
	}

</style>