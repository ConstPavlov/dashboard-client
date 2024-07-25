import { MotionProps, Variants } from 'framer-motion'

export const FADE_IN: MotionProps = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	viewport: { once: true },
	transition: { duration: 1.4 }
}

export const SMOOTH_IN: MotionProps = {
	initial: { x: '-100%' },
	whileInView: { y: '0' },
	viewport: { once: true },
	transition: {
		ease: 'linear',
		duration: 3
	}
}

export const menuAnimation: Variants = {
	open: {
		scaleX: 1,
		scaleY: 1,
		scaleZ: 1,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 30,
			damping: 8
		}
	},
	closed: {
		scaleX: 0.3,
		scaleY: 0.3,
		scaleZ: 0.3,
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 30,
			damping: 8
		}
	}
}
