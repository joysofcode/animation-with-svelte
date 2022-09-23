<svelte:head>
	<script
		async
		src="https://platform.twitter.com/widgets.js"
		charset="utf-8"></script>
</svelte:head>

<div class="tweets">
	<div class="tweet">
		<blockquote class="twitter-tweet">
			<p lang="en" dir="ltr">
				🇺🇸
				<a
					href="https://twitter.com/chasekalisz?ref_src=twsrc%5Etfw"
				>
					@chasekalisz
				</a>
				won gold and 🇺🇸 Jay Litherland won silver in the men’s
				400-meter individual medley, the first medals for the
				U.S. in Tokyo.
				<a href="https://t.co/oGx14Hwtpn">
					https://t.co/oGx14Hwtpn
				</a>
				<a href="https://t.co/Bhg2kgJjLj">
					pic.twitter.com/Bhg2kgJjLj
				</a>
			</p>
			&mdash; NYT Graphics (@nytgraphics)
			<a
				href="https://twitter.com/nytgraphics/status/1419112809955201027?ref_src=twsrc%5Etfw"
			>
				July 25, 2021
			</a>
		</blockquote>
	</div>

	<div class="tweet">
		<blockquote class="twitter-tweet">
			<p lang="en" dir="ltr">
				Rich (<a
					href="https://twitter.com/Rich_Harris?ref_src=twsrc%5Etfw"
				>
					@Rich_Harris
				</a>) works at the
				<a
					href="https://twitter.com/nytimes?ref_src=twsrc%5Etfw"
				>
					@nytimes
				</a>
				creating visualizations for articles from code! What
				did he enjoy making for the
				<a
					href="https://twitter.com/Olympics?ref_src=twsrc%5Etfw"
				>
					@Olympics
				</a>?<br /><br />E15 out Friday!
				<a href="https://t.co/Po2CTSj74N">
					pic.twitter.com/Po2CTSj74N
				</a>
			</p>
			&mdash; devtools.fm (@DevtoolsFM)<a
				href="https://twitter.com/DevtoolsFM/status/1445132813745930253?ref_src=twsrc%5Etfw"
			>
				October 4, 2021
			</a>
		</blockquote>
	</div>
</div>

<style>
	.tweets {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		padding: 2rem;
	}
</style>
