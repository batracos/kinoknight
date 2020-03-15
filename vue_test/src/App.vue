<template>
	<div id="app">
		<Header />
		<router-view/>
		<Footer />
	</div>
</template>

<script>
	import Header from "./components/layout/header"
	import Footer from "./components/layout/footer"
	export default {
		name: "app",
		components: {
			Header,
			Footer
		}
	}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
