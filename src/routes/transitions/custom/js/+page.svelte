<script lang="ts">
	import { onMount } from 'svelte'
	import Animate from '$lib/animate.svelte'
	import type { TransitionConfig } from 'svelte/transition'

	type TypewriterParams = { speed?: number }
	type Typewriter = (
		node: Element,
		params?: TypewriterParams
	) => TransitionConfig

	let audio: HTMLAudioElement

	onMount(() => {
		audio = new Audio('/audio/typewriter.mp3')
		audio.volume = 0.4
		audio.loop = true

		return () => {
			audio.pause()
			audio.currentTime = 0
		}
	})

	const typewriter: Typewriter = (
		node,
		{ speed = 1 } = {}
	) => {
		const text = node.textContent ?? ''
		const duration = text.length / (speed * 0.01)

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t)
				node.textContent = text.slice(0, i)
			}
		}
	}

	const play = () => audio.play()
	const pause = () => audio.pause()
</script>

<Animate>
	<p
		in:typewriter
		on:introstart={play}
		on:introend={pause}
		class="text"
	>
		“There are no mistakes, only happy accidents.”
	</p>
</Animate>

<div class="typewriter" />

<style lang="scss">
	.typewriter {
		width: 100vw;
		height: 100vh;
		background-image: url('/images/typewriter.webp');
		background-size: cover;
		background-position: center;
	}

	.text {
		width: 100%;
		position: absolute;
		top: 20%;
		padding: 0 3rem;
		font-family: 'Special Elite', cursive;
		font-size: 3rem;
		color: hsl(220 20% 20% / 80%);
	}
</style>
