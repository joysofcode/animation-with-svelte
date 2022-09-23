<script lang="ts">
	import { getPrefersReducedMotion } from './media'

	const prefersReducedMotion = getPrefersReducedMotion()

	// change animation value based on user preference
	const value = prefersReducedMotion ? 'Yes' : 'No'
</script>

<h1>Prefers Reduced Motion: {value}</h1>
