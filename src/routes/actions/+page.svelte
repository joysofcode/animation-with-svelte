<script lang="ts">
	import Animate from '$lib/animate.svelte'
	import { springIn } from './animations'
</script>

<Animate>
	<div
		class="box"
		use:springIn={{ scale: 2, rotate: 90 }}
	/>
</Animate>

<style>
	.box {
		width: 140px;
		height: 140px;
		background-color: aquamarine;
		border-radius: 1rem;
		box-shadow: 0 0 10px hsl(0 0% 0% / 10%);
	}
</style>
