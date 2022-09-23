<script lang="ts">
	import { goto } from '$app/navigation'

	const pages = [
		'/',
		'/graphics',
		'/transitions/fade',
		'/transitions/fly',
		'/transitions/stagger',
		'/transitions/examples',
		'/transitions/local',
		'/transitions/key',
		'/transitions/page',
		'/transitions/custom/css',
		'/transitions/custom/js',
		'/transitions/deferred',
		'/animate/flip',
		'/motion/tweened',
		'/motion/spring',
		'/flip/svelte',
		'/flip/gsap',
		'/actions',
		'/accessibility'
	]
	let currentPage = 0

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			if (currentPage === pages.length - 1) return
			currentPage += 1
			const nextPage = currentPage
			goto(pages[nextPage])
		}

		if (event.key === 'ArrowLeft') {
			if (currentPage <= 0) return
			currentPage -= 1
			const previousPage = currentPage
			goto(pages[previousPage])
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
