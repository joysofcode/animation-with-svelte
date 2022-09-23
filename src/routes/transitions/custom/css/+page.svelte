<script lang="ts">
	import Modal from './modal.svelte'

	let showModal = false
	let audio: HTMLAudioElement

	const open = () => (showModal = true)
	const close = () => (showModal = false)
</script>

<button on:click={open}>Show modal 🎷</button>

{#if showModal}
	<Modal on:close={close}>
		<img
			src="https://i.giphy.com/media/Ju7l5y9osyymQ/giphy.webp"
			alt="Man is dancing"
		/>
	</Modal>
{/if}

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
