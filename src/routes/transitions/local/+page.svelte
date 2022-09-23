<script lang="ts">
	import { fade, slide } from 'svelte/transition'

	let parent = true
	let children = [1, 2]

	function add() {
		children = [...children, children.length + 1]
	}
</script>

<div class="controls">
	<label>
		<input type="checkbox" bind:checked={parent} />
		Parent
	</label>
</div>

{#if parent}
	<div class="parent" transition:fade>
		<span>Parent</span>
		{#each children as child}
			<div class="child" transition:slide|local>Child</div>
		{/each}
		<button on:click={add}>Add</button>
	</div>
{/if}

<style lang="scss">
	.controls {
		position: absolute;
		bottom: 4%;
		left: 4%;
		font-size: 1rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.parent {
		width: 400px;
		display: grid;
		gap: 1rem;
		margin-bottom: 1rem;
		padding: 1rem;
		background-color: hsl(220 20% 24%);
		box-shadow: 0 0 10px hsl(0 0% 0% / 10%);
		border: 1px solid hsl(220 20% 28%);
		border-radius: 1rem;
		overflow: hidden;

		span {
			font-weight: 700;
			font-size: 2rem;
		}

		.child {
			padding: 1rem;
			background-color: hsl(220 20% 28%);
			box-shadow: 0 0 10px hsl(0 0% 0% / 10%);
			border: 1px solid hsl(220 20% 32%);
			border-radius: 1rem;
		}
	}
</style>
