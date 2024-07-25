'use client'
import React, {
	createContext,
	FC,
	PropsWithChildren,
	ReactNode,
	useEffect,
	useState
} from 'react'
import { IContext, TypeUserState } from './auth.interface'
import Cookies from 'js-cookie'
import { AuthService } from '@/services/auth/auth.service'
import { usePathname } from 'next/navigation'

export const AuthContext = createContext({} as IContext)

interface BaseLayoutProps {
	children?: ReactNode
}
const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)
	const pathname = usePathname()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) {
			const user = JSON.parse(localStorage.getItem('user') || '')
			console.log(user)
			setUser(user)
		}
	}, [])

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken && !user) {
			AuthService.logout()
			setUser(null)
		}
	}, [pathname]) // eslint-disable-line
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
