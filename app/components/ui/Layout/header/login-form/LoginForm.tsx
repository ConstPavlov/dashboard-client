'use client'
import React, { FC, useState } from 'react'
import { useOutside } from '@/hooks/useOutside'

import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFields } from '@/ui/Layout/header/login-form/login-form.interface'
import { useAuth } from '@/hooks/useAuth'
import { FaUserCircle } from 'react-icons/fa'
import Field from '@/ui/Field/Field'
import {
	validEmail,
	validPassword
} from '@/ui/Layout/header/login-form/login-form.constants'
import styles from './LoginForm.module.scss'
import UserAvatar from '@/ui/user-avatar/UserAvatar'
import Button from '@/ui/Button/Button'
import { motion } from 'framer-motion'
import { menuAnimation } from '@/utils/animations/fade'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AuthService } from '@/services/auth/auth.service'

const LoginForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')
	const { setUser, user } = useAuth()

	const { error } = useQuery({
		queryKey: ['login'],
		queryFn: async (data: any) => AuthService.login(data.email, data.password)
	})

	const loginMutation = useMutation({
		mutationKey: ['login'],
		mutationFn: async (data: IAuthFields) =>
			AuthService.login(data.email, data.password),
		onSuccess(data: any) {
			if (setUser) setUser(data.user)
			reset()
			setIsShow(false)
		}
	})

	const registerMutation = useMutation({
		mutationKey: ['register'],
		mutationFn: async (data: IAuthFields) =>
			AuthService.login(data.email, data.password),
		onSuccess(data: any) {
			if (setUser) setUser(data.user)
			reset()
			setIsShow(false)
		}
	})

	const loginSync = loginMutation.mutate
	const registerSync = registerMutation.mutate

	//
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') loginSync(data)
		if (type === 'register') registerSync(data)
	}

	return (
		<div className={styles.form_wrapper} ref={ref}>
			{user ? (
				<UserAvatar
					link='/dashboard'
					title={'Перрейти в дашборд'}
					avatarPath={user.avatarPath || ''}
				/>
			) : (
				<button onClick={() => setIsShow(!isShow)} className={styles.button}>
					<FaUserCircle />
				</button>
			)}
			<motion.div
				initial={false}
				animate={isShow ? 'open' : 'closed'}
				variants={menuAnimation}
			>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div>
						<Field
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Invalid email format'
								}
							})}
							placeholder='Email'
							error={errors?.email}
						/>
						<Field
							{...register('password', {
								required: 'Password is required',
								pattern: {
									value: validPassword,
									message: 'Invalid password format'
								}
							})}
							placeholder='Password'
							error={errors?.password}
							type={'password'}
						/>
						<div className={styles.signInBtn}>
							<Button onClick={() => setType('login')}>Login</Button>
						</div>
						<button
							className={styles.register}
							onClick={() => setType('register')}
						>
							Register
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	)
}

export default LoginForm
