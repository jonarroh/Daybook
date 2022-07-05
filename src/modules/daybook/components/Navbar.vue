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
				{{ username }}</router-link
			>
		</a>
		<div class="d-flex">
			<button class="btn btn-outline-info mx-2" @click="onLogout">
				<i class="fa fa-sign-out-alt"></i>
			</button>
		</div>
	</nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useAuth from '../../auth/components/useAuth';
const router = useRouter();
const { username, logout } = useAuth();
const onLogout = () => {
	logout();
	router.push({ name: 'login' });
};
</script>
