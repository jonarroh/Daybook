<template>
	<div class="entry-list-container">
		<div class="px-2 pt-2 py-2">
			<input
				type="text"
				class="form-control"
				placeholder="buscar entradas"
			/>
		</div>

		<div class="entry-scrollarea">
			<h2 v-for="entry in 100" :key="entry">Entry</h2>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-list-container {
	border-right: 1px solid #2c3250;
	height: calc(100vh - 50px);
}
.entry-scrollarea {
	height: calc(100vh - 120px);
	overflow: scroll;
	overflow-x: hidden;
}
</style>
