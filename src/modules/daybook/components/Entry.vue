<template>
	<div
		class="entry-container mb-3 pointer p-2"
		@click="$router.push({ name: 'Entry', params: { id: 1 } })"
	>
		<div class="entry-title d-flex">
			<span class="text-success fs-5 ww-bold">15 </span>
			<span class="mx-1 fs-5">julio </span>
			<span class="mx-2 fw-light">2022, jueves</span>
		</div>
		<div class="entry-description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
			neque distinctio sunt et expedita eos voluptas quod, ea minus at
			deleniti? Fugit earum iure aperiam est officia ex consequatur
			hic.
		</div>
	</div>
</template>

<style lang="scss">
.entry-container {
	border-bottom: 1px solid #2c3250;
	transition: 0.2s all ease-in;

	&:hover {
		background-color: lighten($color: grey, $amount: 45);
	}

	.entry-description {
		font-size: 0.8em;
	}
}
</style>
