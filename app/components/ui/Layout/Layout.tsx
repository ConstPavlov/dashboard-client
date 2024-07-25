'use client'
import React, { FC, PropsWithChildren } from 'react'
import Header from '@/ui/Layout/header/Header'
import styles from 'page.module.scss'
import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

// export const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			refetchOnWindowFocus: false
// 		}
// 	}
// })
const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<main className={styles.main}>
				<Header />
				{children}
			</main>
		</>
	)
}

export default Layout
