<template>
	<span class="login100-form-title p-b-41"> Registrar </span>
	<form
		class="login100-form validate-form p-b-33 p-t-5"
		@submit.prevent="onSubmit"
	>
		<div
			class="wrap-input100 validate-input"
			data-validate="ingrese su usuario"
		>
			<input
				v-model="userForm.username"
				class="input100"
				type="text"
				placeholder="Usuario"
				required
			/>
			<span class="focus-input100" data-placeholder="&#xe82a;"></span>
		</div>
		<div
			class="wrap-input100 validate-input"
			data-validate="ingrese su correo"
		>
			<input
				v-model="userForm.email"
				class="input100"
				type="email"
				placeholder="Correo"
				required
			/>
			<span class="focus-input100" data-placeholder="&#xe818;"></span>
		</div>

		<div
			class="wrap-input100 validate-input"
			data-validate="ponga su contraseña"
		>
			<input
				v-model="userForm.password"
				class="input100"
				type="password"
				placeholder="Contraseña"
				required
			/>
			<span class="focus-input100" data-placeholder="&#xe80f;"></span>
		</div>

		<div class="container-login100-form-btn m-t-32">
			<button type="submit" class="login100-form-btn">
				Registrar
			</button>
		</div>

		<div class="container-login100-form-btn m-t-32">
			<router-link :to="{ name: 'login' }"
				>Ya tengo cuenta</router-link
			>
		</div>
	</form>
</template>
<script setup>
import { ref } from 'vue';
import useAuth from '../components/useAuth';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const router = useRouter();
const { createUser } = useAuth();
const userForm = ref({
	username: '',
	email: '',
	password: ''
});

const onSubmit = async () => {
	const { ok, message } = await createUser(userForm.value);
	if (!ok) {
		return Swal.fire({
			title: 'Error',
			text: message,
			icon: 'error'
		});
	}
	router.push({ name: 'no-entry' });
};
</script>

<style lang="scss" scoped>
@import '../css/auth.css';
@import '../css/util.css';
</style>
