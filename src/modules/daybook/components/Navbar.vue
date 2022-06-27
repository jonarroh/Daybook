<template>
	<nav class="navbar bg-primary">
		<a class="navbar-brand text-white">
			<img
				src="@/assets/logo.png"
				alt="vue logo"
				width="50"
				class="d-inline-block aling-text-top mx-2"
			/>
			<router-link
				to="/daybook"
				class="text-white text-decoration-none"
			>
				Day Book</router-link
			>
		</a>
		<div class="d-flex">
			<button class="btn btn-outline-info mx-2">
				<i class="fa fa-sign-out-alt"></i>
			</button>
		</div>
	</nav>
</template>
