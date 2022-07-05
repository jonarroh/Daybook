<script>
export default {};
</script>

<template>
	<h1 v-if="authStatus === 'authenticating'">{{ authStatus }}</h1>
	<router-view></router-view>
</template>

<script setup>
import useAuth from './modules/auth/components/useAuth';

const { authStatus, checkAuth } = useAuth();

checkAuth();
</script>
