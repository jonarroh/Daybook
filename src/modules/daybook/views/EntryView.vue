<template>
	<template v-if="entry">
		<div class="entry-title d-flex justify-content-between p-2">
			<div>
				<span class="text-success fs-3 fw-bold">{{ day }} </span>
				<span class="mx-1 fs-3">{{ month }} </span>
				<span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
			</div>
			<div>
				<button
					class="btn btn-danger mx-2"
					v-if="entry.id"
					@click="deleteEntry"
				>
					Borrar
					<i class="fas fa-trash-alt"></i>
				</button>
				<button class="btn btn-primary">
					Subir foto
					<i class="fas fa-upload"></i>
				</button>
			</div>
		</div>
		<hr />
		<div class="d-flex flex-column h-75 px-3">
			<textarea
				placeholder="¿Que sucedio hoy?"
				class="form-control"
				v-model="entry.text"
			></textarea>
		</div>
		<Fab icon="fa-upload" @on:click="saveEntry" />
		<img
			src="https://www.semana.es/wp-content/uploads/4355.jpg"
			alt="Entry-picture"
			class="img-thumbnail"
		/>
	</template>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear';
import Swal from 'sweetalert2';

export default {
	props: {
		id: {
			type: String,
			required: true
		}
	},
	components: {
		Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
	},
	data() {
		return {
			entry: null
		};
	},

	computed: {
		...mapGetters('daybook', ['getEntriesById']),
		day() {
			const { day } = getDayMonthYear(this.entry.date);
			return day;
		},
		month() {
			const { month } = getDayMonthYear(this.entry.date);
			return month;
		},
		yearDay() {
			const { yearDay } = getDayMonthYear(this.entry.date);
			return yearDay;
		}
	},
	methods: {
		loadEntry() {
			let entry;
			if (this.id === 'new') {
				entry = {
					date: new Date().getTime(),
					text: ''
				};
			} else {
				entry = this.getEntriesById(this.id);
				if (!entry) return this.$router.push({ name: 'no-entry' });
			}

			this.entry = entry;
		},
		async saveEntry() {
			if (this.entry.text === '') {
				Swal.fire({
					title: 'Campo vacio',
					text: 'Ingresa un texto',
					icon: 'error'
				});
				return;
			}
			new Swal({
				title: 'Cargando...',
				text: 'Espere un momento',
				allowOutsideClick: false
			});
			Swal.showLoading();
			if (this.entry.id) {
				await this.updateEntries(this.entry);
			} else {
				const id = await this.createEntries(this.entry);

				this.$router.push({
					name: 'Entry',
					params: { id }
				});
			}
			Swal.fire(
				'Guardado',
				'Entrada registrada correctamente',
				'success'
			);
		},
		async deleteEntry() {
			const { isConfirmed } = await Swal.fire({
				title: '¿Estas seguro?',
				text: 'Esta accion no se puede revertir',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#2c3e50',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Si, borrar'
			});
			if (isConfirmed) {
				new Swal({
					title: 'Cargando...',
					text: 'Espere un momento',
					allowOutsideClick: false
				});
				await this.deleteEntries(this.entry.id);
				this.$router.push({ name: 'no-entry' });
				Swal.fire(
					'Borrado',
					'Entrada borrada correctamente',
					'success'
				);
			}
		},
		...mapActions('daybook', ['updateEntries']),
		...mapActions('daybook', ['createEntries']),
		...mapActions('daybook', ['deleteEntries'])
	},
	created() {
		this.loadEntry();
	},
	watch: {
		id() {
			this.loadEntry();
		}
	}
};
</script>

<style lang="scss" scoped>
textarea {
	font-size: 1.2em;
	border: none;
	height: 100%;

	&:focus {
		outline: none;
	}
}
img {
	width: 200px;
	position: fixed;
	bottom: 100px;
	right: 20px;
	box-shadow: 0 0 10px rgba($color: #000, $alpha: 0.2);
}
</style>
