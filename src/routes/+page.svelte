<h1>Animation With Svelte 🎩🪄🐇🌹</h1>

<div class="navigation">
	Use <kbd>Left</kbd> and <kbd>Right</kbd>
	arrow keys to navigate.
</div>

<style lang="scss">
	h1 {
		max-width: 600px;
		text-align: center;
	}

	.navigation {
		display: flex;
		justify-content: center;
		color: hsl(220 20% 60%);

		kbd {
			display: flex;
			align-items: center;
			margin: 0 0.2rem;
			padding: 0.4rem;
			font-weight: 700;
			font-size: 0.8rem;
			line-height: 1;
			color: hsl(220 20% 80%);
			background-color: hsl(220 20% 24%);
			box-shadow: 0 0 10px hsl(0 0% 0% / 10%);
			border: 1px solid hsl(220 20% 28%);
			border-radius: 8px;
		}
	}
</style>
