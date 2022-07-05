<template>
	<span class="login100-form-title p-b-41"> Ingresar </span>
	<form
		class="login100-form validate-form p-b-33 p-t-5"
		@submit.prevent="onSubmit"
	>
		<div
			class="wrap-input100 validate-input"
			data-validate="ingrese su correo"
		>
			<input
				class="input100"
				type="text"
				placeholder="Correo"
				required
				v-model="userForm.email"
			/>
			<span class="focus-input100" data-placeholder="&#xe82a;"></span>
		</div>

		<div
			class="wrap-input100 validate-input"
			data-validate="ponga su contraseña"
		>
			<input
				class="input100"
				type="password"
				placeholder="Contraseña"
				required
				v-model="userForm.password"
			/>
			<span class="focus-input100" data-placeholder="&#xe80f;"></span>
		</div>

		<div class="container-login100-form-btn m-t-32">
			<button type="submit" class="login100-form-btn">Login</button>
		</div>

		<div class="container-login100-form-btn m-t-32">
			<router-link :to="{ name: 'registrar' }"
				>¿No tienes cuenta?</router-link
			>
		</div>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from '../components/useAuth';
import Swal from 'sweetalert2';

const router = useRouter();
const { loginUser } = useAuth();
const userForm = ref({
	email: '',
	password: ''
});

const onSubmit = async () => {
	const { ok, message } = await loginUser(userForm.value);
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
