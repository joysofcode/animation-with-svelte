<script>
	import { fade } from 'svelte/transition'
	import Animate from '$lib/animate.svelte'
</script>

<Animate>
	<div class="boxes">
		{#each { length: 12 } as _, i}
			<div in:fade={{ delay: 300 * i }} class="box" />
		{/each}
	</div>
</Animate>

<style>
	.boxes {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.box {
		width: 140px;
		height: 140px;
		background-color: aquamarine;
		border-radius: 1rem;
		box-shadow: 0 0 10px hsl(0 0% 0% / 10%);
	}
</style>
