<script lang="ts">
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'

	import Animate from '$lib/animate.svelte'

	const lines = [
		'the magical',
		'',
		'disappearing',
		'',
		'UI framework.',
		'🪄'
	]
</script>

<Animate>
	<div class="lines">
		{#each lines as line, i}
			<div class="overflow">
				<span
					class="line"
					in:fly={{
						y: 100,
						delay: 300 * i,
						easing: backOut
					}}
				>
					{line}
				</span>
			</div>
		{/each}
	</div>
</Animate>

<style lang="scss">
	.lines {
		max-width: 800px;
		font-size: 3rem;
		font-weight: 900;
		text-align: center;

		.overflow {
			display: inline-block;
			overflow: hidden;
			vertical-align: bottom;
		}

		.line {
			display: inline-block;
			margin: 0.2rem;
			text-transform: uppercase;
			text-shadow: 2px 0 10px hsl(0 0% 0% / 20%);
		}
	}
</style>
