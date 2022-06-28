<script>
	import { goto } from '$app/navigation';

	const CloseModal = () => {
		goto('auth/signup');
	};
</script>

<div class="posi-modal modal modal-sheet d-block py-5" tabindex="-1" role="dialog" id="modalSheet">
	<div class="modal-dialog" role="document">
		<div class="modal-content rounded-6 shadow">
			<div class="modal-header border-bottom-0">
				<h5 class="modal-title">Your not Registerd <i class="bi bi-emoji-frown" /></h5>
				<button
					on:click={CloseModal}
					type="button"
					class="btn-close"
					data-bs-dismiss="modal"
					aria-label="Close"
				/>
			</div>
			<div class="modal-footer flex-column border-top-0">
				<button on:click={CloseModal} type="button" class="btn btn-lg btn-primary w-100 mx-0 mb-2"
					>Close</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.posi-modal {
		background: linear-gradient(90deg, rgba(230, 93, 162, 0.5) 0%, rgba(114, 214, 249, 0.5) 100%);
	}
</style>
