<template>
	<h1>home</h1>
	<button class="btn btn-warning">
		<router-link to="/about">About</router-link>
	</button>
	<button @click="goToDayBook" class="btn btn-primary">
		DayBook
	</button>
</template>

<script>
export default {
	methods: {
		goToDayBook() {
			this.$router.push({ name: 'daybook' });
		}
	}
};
</script>
