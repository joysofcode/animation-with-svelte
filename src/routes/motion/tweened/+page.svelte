<script lang="ts">
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'

	let pokemon = {
		name: 'Pikachu',
		hp: 48,
		level: 20
	}

	let currentHp = tweened(pokemon.hp)
	let duration = 2000
	let interval: NodeJS.Timer

	function attack() {
		$currentHp -= 8
	}

	onMount(() => {
		interval = setInterval(attack, duration)
		return () => clearInterval(interval)
	})

	$: if ($currentHp < 0) {
		clearInterval(interval)
		$currentHp = pokemon.hp
		interval = setInterval(attack, duration)
	}
</script>

<div class="simulator">
	<h2>Pokémon Simulator</h2>

	<div class="stats">
		<div class="info">
			<span class="name">{pokemon.name}</span>
			<span class="level">Lv{pokemon.level}</span>
		</div>

		<div class="health">
			<div class="bar">
				<span>HP</span>
				<progress
					id="file"
					max={pokemon.hp}
					value={$currentHp}
					class:yellow={$currentHp <= 24}
					class:red={$currentHp < 16}
				/>
			</div>
			<div class="values">
				{pokemon.hp} / {Math.trunc($currentHp)}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.simulator {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-content: center;
		font-family: 'Press Start 2P', cursive;
		background-image: linear-gradient(
				to bottom,
				hsl(0 0% 0% / 40%) 100%,
				transparent
			),
			url('/images/background.webp');
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
	}

	h2 {
		text-align: center;
	}

	.stats {
		padding: 2rem;
		margin: 2rem 0;
		color: black;
		background-color: lightyellow;
		border: 4px solid black;
		border-top-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}

	.info {
		display: flex;
		justify-content: space-between;

		.name {
			text-transform: uppercase;
		}
	}

	.health {
		.bar {
			width: min-content;
			display: flex;
			margin-top: 0.4rem;
			margin-left: auto;
			padding-left: 0.4rem;
			color: gold;
			background-color: darkslategray;
			border: 2px solid darkslategray;
			border-radius: 1rem;
			overflow: hidden;
		}

		.values {
			margin-top: 0.4rem;
			text-align: right;
		}
	}

	progress {
		appearance: none;
	}

	::-webkit-progress-bar {
		background-color: darkslategray;
	}

	::-webkit-progress-value {
		background-color: springgreen;
		border: 2px solid white;
		border-radius: 1rem;
		transition: background-color 0.3s ease;
	}

	.yellow::-webkit-progress-value {
		background-color: yellow;
	}

	.red::-webkit-progress-value {
		background-color: tomato;
	}
</style>
