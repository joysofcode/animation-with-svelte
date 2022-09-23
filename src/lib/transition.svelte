<script lang="ts">
	import { slide } from 'svelte/transition'

	export let key: string
	export let duration: number = 300
</script>

{#key key}
	<div
		in:slide={{ duration, delay: duration }}
		out:slide={{ duration }}
	>
		<slot />
	</div>
{/key}

<style>
	div {
		position: absolute;
		inset: 0;
		display: grid;
		place-content: center;
	}
</style>
