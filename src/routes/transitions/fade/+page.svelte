<script lang="ts">
	import { fade } from 'svelte/transition'

	let animate = false
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	Animate
</label>

{#if animate}
	<p transition:fade>
		There are no mistakes, only happy accidents.
	</p>
{/if}

<style>
	label {
		position: absolute;
		bottom: 4%;
		left: 4%;
		font-size: 1rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
</style>
