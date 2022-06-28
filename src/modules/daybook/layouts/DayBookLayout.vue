<template>
	<Navbar />

	<div
		class="d-flex row justify-content-md-center justify-content-center align-items-center"
		v-if="isLoading"
	>
		<div class="col-3 alert alert-info text-center mt-5">
			Espere por favor...
			<h3 class="mt-2">
				<i class="fas fa-spinner fa-spin"></i>
			</h3>
		</div>
	</div>
	<div class="d-flex" v-else="isLoading">
		<div class="col-4">
			<EntryList />
		</div>
		<div class="col">
			<router-view />
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
export default {
	components: {
		Navbar: defineAsyncComponent(() =>
			import('../components/Navbar.vue')
		),
		EntryList: defineAsyncComponent(() =>
			import('../components/EntryList.vue')
		)
	},
	methods: {
		...mapActions('daybook', ['loadEntries'])
	},

	computed: {
		...mapState('daybook', ['isLoading'])
	},
	created() {
		this.loadEntries();
	}
};
</script>
