import styles from './Field.module.scss'
import React, { forwardRef } from 'react'
import { IField } from '@/ui/Field/field.interface'
import cn from 'classnames'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type, Icon = 'text', style, ...rest }, ref) => {
		return (
			<div
				className={cn(styles.input, {
					[styles.withicon]: !!Icon
				})}
				style={style}
			>
				{Icon && (
					<div className={styles.icon}>
						<Icon />
					</div>
				)}
				<input ref={ref} type={type} {...rest} />
				{error && <div className={styles.error}>{error.message} </div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
