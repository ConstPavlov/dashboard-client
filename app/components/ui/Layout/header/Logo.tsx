import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link className={styles.logoLink} href={'/'}>
			<h1 className={styles.logo}>Kostya Cinema</h1>
		</Link>
	)
}

export default Logo
