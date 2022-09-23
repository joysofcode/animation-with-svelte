<script lang="ts">
	import { crossfade } from 'svelte/transition'

	const [send, receive] = crossfade({})

	type Card = {
		id: number
		content: string
		selected: boolean
	}

	let cards: Card[] = [
		{ id: 1, content: '🎩', selected: false },
		{ id: 2, content: '🪄', selected: false },
		{ id: 3, content: '🐇', selected: false },
		{ id: 4, content: '🌹', selected: false }
	]

	$: stack = cards.filter((card) => card.selected)
	$: hand = cards.filter((card) => !card.selected)

	function dealCard() {
		const emojis = ['🎩', '🪄', '🐇', '🌹']
		const index = Math.floor(Math.random() * emojis.length)

		cards = [
			...cards,
			{
				id: cards.length + 1,
				content: emojis[index],
				selected: false
			}
		]
	}

	function returnToStack(cardFromHand: Card) {
		const index = cards.findIndex(
			(card) => card === cardFromHand
		)
		cards[index].selected = true
	}

	function returnToHand(cardFromDeck: Card) {
		const index = cards.findIndex(
			(card) => card === cardFromDeck
		)
		cards[index].selected = false
	}
</script>

<svelte:window on:mousewheel={dealCard} />

<div class="note">This doesn't work.</div>

<div class="table">
	<div class="deck">
		{#each stack as card, i (card)}
			<div
				class="card"
				on:click={() => returnToHand(card)}
				in:receive={{ key: card.id }}
				out:send={{ key: card.id }}
				style:--index={i}
			>
				{card.content}
			</div>
		{/each}
	</div>

	<div class="hand" style:--cards={hand.length}>
		{#each hand as card, i (card)}
			<div class="peek">
				<div
					class="card"
					on:click={() => returnToStack(card)}
					in:receive={{ key: card.id }}
					out:send={{ key: card.id }}
					style:--index={i}
				>
					{card.content}
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.deck {
		width: 220px;
		height: 300px;
		display: grid;
		position: absolute;
		left: 50%;
		top: 50%;
		padding: 0.3rem;
		transform: translate(-50%, -80%);
		background-color: hsl(220 20% 20%);
		border: 6px dashed hsl(220 20% 40%);
		border-radius: 1rem;

		> * {
			grid-area: 1 / -1;
		}

		.card {
			margin: 0;
			transform: rotate(calc(var(--index) * -2deg));
		}
	}

	.hand {
		--angle: 120;

		position: absolute;
		bottom: -20px;
		display: flex;
		justify-content: center;
	}

	.card {
		width: 200px;
		height: 280px;
		position: relative;
		display: grid;
		place-content: center;
		margin-left: -160px;
		z-index: calc(var(--cards) - var(--index));
		font-size: 4rem;
		color: hsl(220 20% 20%);
		background-color: hsl(220 20% 98%);
		box-shadow: 0 0 20px hsl(0 0% 0% / 20%);
		border-radius: 1rem;
		user-select: none;

		--previous: calc(
			var(--angle) / var(--cards) * (var(--index) + 1)
		);
		--next: calc(
			var(--angle) / 2 + (var(--angle) / var(--cards)) / 2
		);
		--rotation: calc(var(--previous) - var(--next));

		transform: rotate(calc(var(--rotation) * 1deg));
		transform-origin: bottom center;

		&:hover {
			cursor: pointer;
		}
	}

	.peek {
		transition: all 0.3s cubic-bezier(0, 0.44, 0.6, 1);
	}

	.peek:hover {
		z-index: 100;
		transform: translateY(-20px) scale(1.04);
	}

	.note {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
</style>
