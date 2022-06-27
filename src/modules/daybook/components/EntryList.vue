<template>
	<div class="entry-list-container">
		<div class="px-2 pt-2 py-2">
			<input
				type="text"
				class="form-control"
				placeholder="buscar entradas"
				v-model="term"
			/>
		</div>

		<div class="entry-scrollarea">
			<Entry
				v-for="entry in entriesByTerm"
				:key="entry.id"
				:entry="entry"
			>
			</Entry>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
export default {
	components: {
		Entry: defineAsyncComponent(() => import('./Entry.vue'))
	},
	computed: {
		...mapGetters('daybook', ['getEntriesByTerm']),
		entriesByTerm() {
			return this.getEntriesByTerm(this.term);
		}
	},
	data() {
		return {
			term: ''
		};
	}
};
</script>

<style lang="scss" scoped>
.entry-list-container {
	border-right: 1px solid #2c3250;
	height: 100vh;
	overflow: hidden;
}
.entry-scrollarea {
	height: calc(100vh - 50px);
	overflow: scroll;
	overflow-x: hidden;
}
</style>
