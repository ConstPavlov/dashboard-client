import React, { FC } from 'react'
import LoginForm from '@/ui/Layout/header/login-form/LoginForm'
import Logo from '@/ui/Layout/header/Logo'
import styles from './Header.module.scss'
import { CiLogout } from 'react-icons/ci'
import { AuthService } from '@/services/auth/auth.service'
import { useRouter } from 'next/navigation'
import Search from '@/ui/Layout/header/search/Search'

const Header: FC = () => {
	const router = useRouter()
	const loginOutHandler = () => {
		AuthService.logout()
		console.log(localStorage.getItem('user'))
		router.refresh()
	}
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<div className={styles.loginBtns}>
				<button onClick={loginOutHandler} className={styles.button}>
					<CiLogout />
				</button>
				<LoginForm />
			</div>
		</header>
	)
}

export default Header
