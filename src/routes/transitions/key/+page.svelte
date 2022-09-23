<script lang="ts">
	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'

	let notifications = 0

	onMount(() => {
		const interval = setInterval(() => {
			notifications += 1
		}, 2000)

		return () => clearInterval(interval)
	})
</script>

<div class="notifications">
	<div class="count">
		{#key notifications}
			<span in:scale>{notifications}</span>
		{/key}
	</div>

	<svg
		class="bell"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke-width="1.5"
		stroke="currentColor"
	>
		<path
			d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</div>

<style lang="scss">
	.notifications {
		position: relative;

		.count {
			width: 48px;
			height: 48px;
			position: absolute;
			top: -10px;
			right: -10px;
			display: grid;
			place-content: center;
			padding: 2rem;
			font-size: 2rem;
			font-weight: 700;
			color: tomato;
			background-color: white;
			border-radius: 50%;
		}

		.bell {
			width: 140px;
			height: 140px;
		}
	}
</style>
