import React, { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
import { IButton } from '@/ui/Button/button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
