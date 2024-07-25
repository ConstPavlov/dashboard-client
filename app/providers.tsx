import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React, { PropsWithChildren } from 'react'
import AuthProvider from './providers/auth-provider/AuthProvider'
import '@/assets/styles/globals.scss'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false
		}
	}
})

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>{children}</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
