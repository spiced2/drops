<template>
	<div class="container">
		<div>
			<h1 class="title">dots</h1>

			<div class="grid grid-cols-8 gap-1 p-10">
				<Dot v-for="n in 64" :key="n" class="p-4 w-6 h-8"></Dot>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS

.container {

@apply min-h-screen flex justify-center items-center text-center mx-auto;

}

*/

.container {
	margin: 0 auto;

	min-height: 100vh;

	display: flex;

	justify-content: center;

	align-items: center;

	text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
		BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif;

	display: block;

	font-weight: 300;

	font-size: 100px;

	color: #35495e;

	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;

	font-size: 42px;

	color: #526488;

	word-spacing: 5px;

	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
