import { Ibase } from '@/shared/interfaces/base.interface'

export interface IUser extends Ibase {
	name: string
	email: string
	avatarPath: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}
