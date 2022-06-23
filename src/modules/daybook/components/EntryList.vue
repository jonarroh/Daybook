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
			<Entry v-for="entry in 100" :key="entry"> </Entry>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
	components: {
		Entry: defineAsyncComponent(() => import('./Entry.vue'))
	}
};
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
