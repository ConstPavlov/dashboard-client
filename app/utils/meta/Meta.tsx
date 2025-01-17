import React, { FC } from 'react'
import Head from 'next/head'
import { IMeta } from '@/utils/meta/meta.interface'

const Meta: FC<IMeta> = ({ description, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				{description ? (
					<meta
						itemProp='description'
						name='description'
						content={description}
					/>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
		</>
	)
}

export default Meta
