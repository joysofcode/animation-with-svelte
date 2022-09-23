import { animate, spring } from 'motion'
import type { Action } from 'svelte/action'

type SpringInParams = {
	scale: number
	rotate: number
}
type SpringInAction = Action<HTMLElement, SpringInParams>

export const springIn: SpringInAction = (node, params) => {
	if (!params) return

	animate(
		node,
		{
			scale: params.scale,
			rotate: params.rotate
		},
		{
			easing: spring()
		}
	)
}
