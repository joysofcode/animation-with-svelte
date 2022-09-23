<script lang="ts">
	import { onMount, tick } from 'svelte'

	let play = false

	onMount(() => {
		play = true
	})

	async function replay() {
		play = false
		await tick()
		play = true
	}
</script>

{#if play}
	<slot />
{/if}

<button on:click={replay}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24"
		height="24"
		stroke="currentColor"
		stroke-width="1.5"
		fill="none"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
		/>
	</svg>
</button>

<style lang="scss">
	button {
		position: absolute;
		bottom: 4%;
		right: 4%;
		height: 24px;
		width: 24px;
		border-radius: 50%;
		padding: 1.4rem;
		transition: background 0.3s ease;
	}

	button:hover {
		background-color: aquamarine;
	}
</style>
