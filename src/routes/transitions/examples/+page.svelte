<script lang="ts">
	import {
		fade,
		blur,
		fly,
		slide,
		scale,
		draw
	} from 'svelte/transition'

	import Animate from '$lib/animate.svelte'
</script>

<Animate>
	<div class="transitions">
		<div class="transition">
			<span in:fade={{ duration: 1000 }}>Fade</span>
		</div>

		<div class="transition">
			<span in:blur={{ duration: 1000 }}>Blur</span>
		</div>

		<div class="transition">
			<span in:fly={{ y: 200, duration: 1000 }}>Fly</span>
		</div>

		<div class="transition">
			<span in:slide={{ duration: 1000 }}>Slide</span>
		</div>

		<div class="transition">
			<span in:scale={{ duration: 1000 }}>Scale</span>
		</div>

		<div class="transition">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="48px"
				height="48px"
				stroke="currentColor"
				stroke-width="1.4"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
			>
				<path
					in:draw={{ duration: 1500 }}
					d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
				/>
				<polyline
					in:draw={{ duration: 2000 }}
					points="22 4 12 14.01 9 11.01"
				/>
			</svg>
		</div>
	</div>
</Animate>

<style lang="scss">
	.transitions {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.transition {
		display: grid;
		place-content: center;
		background-color: hsl(220 20% 24%);
		padding: 6rem;
		border-radius: 1rem;
		box-shadow: 2px 0 10px hsl(0 0% 0% / 20%);
		overflow: hidden;
	}

	span {
		font-size: 2rem;
		font-weight: 700;
		text-shadow: 2px 0 10px hsl(0 0% 0% / 20%);
	}
</style>
