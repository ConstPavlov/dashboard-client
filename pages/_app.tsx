'use client'
import { AppProps } from 'next/app'
import React from 'react'
import { Providers } from '../app/providers'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	)
}

export default MyApp
