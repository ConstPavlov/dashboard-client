import { axiosClassic } from '../../api/interceptor'
import { IAuthResponse } from '@/shared/interfaces/user.interface'
import {
	removeTokenToStorage,
	saveToStorage
} from '@/services/auth/auth.helper'

export const AuthService = {
	async login(email: string, password: string) {
		try {
			const response = await axiosClassic.post<IAuthResponse>('auth/login', {
				email,
				password
			})

			if (response.data.accessToken) saveToStorage(response.data)

			return response.data
		} catch (e) {
			console.error('Login error:', e)
			throw e
		}
	},

	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>('auth/register', {
			email,
			password
		})
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},
	logout() {
		removeTokenToStorage()
		localStorage.removeItem('user')
	}
}
