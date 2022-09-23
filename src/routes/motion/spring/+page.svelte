<script lang="ts">
	import { spring } from 'svelte/motion'
	import type { Action } from 'svelte/action'

	import Animate from '$lib/animate.svelte'

	type SpringInParams = {
		scale: number
		rotate: number
	}
	type SpringInAction = Action<HTMLElement, SpringInParams>

	const springIn: SpringInAction = (node, params) => {
		if (!params) return

		const { scale, rotate } = params
		const value = { rotate: 0, scale: 1 }
		const options = { stiffness: 0.1, damping: 0.6 }

		// create spring store
		let transition = spring(value, options)

		// subscribe to store
		const unsubscribe = transition.subscribe(
			({ rotate, scale }) => {
				node.style.transform = `scale(${scale}) rotate(${rotate}deg)`
			}
		)

		// store update starts animation
		transition.set({ scale, rotate })

		return {
			destroy: () => unsubscribe()
		}
	}
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
