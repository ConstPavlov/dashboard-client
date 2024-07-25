import { Providers } from './providers'
import React from 'react'

export const wrapPage = (Page: React.ComponentType<any>) => {
	return (props: React.ComponentProps<typeof Page>) => {
		return (
			<Providers>
				<Page {...props} />
			</Providers>
		)
	}
}
wrapPage.displayName = 'wrapPage' // Добавление displayName
