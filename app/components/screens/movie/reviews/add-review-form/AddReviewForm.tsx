import React, { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IReviewDto } from '@/shared/interfaces/review.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ReviewsService } from '@/services/reviews.service'
import Field from '@/ui/Field/Field'
import { MdSend } from 'react-icons/md'
import stylesForm from '@/components/ui/Layout/header/login-form/LoginForm.module.scss'
// import { queryClient } from '../../../../../providers'
import styles from './AddReviewForm.module.scss'

const AddReviewForm: FC<{ movieId: number }> = ({ movieId }) => {
	const queryClient = useQueryClient()
	const [validMovieId, setValidMovieId] =
		useState<NonNullable<number | null>>(null)

	useEffect(() => {
		if (movieId !== 0) {
			setValidMovieId(movieId)
		}
	}, [movieId])
	const {
		register,
		formState: { errors },
		reset,
		handleSubmit
	} = useForm<IReviewDto>({
		mode: 'onChange'
	})
	console.log(movieId)

	const { mutateAsync } = useMutation({
		mutationKey: ['add review'],
		mutationFn: (data: IReviewDto) =>
			ReviewsService.createReview({ ...data, movieId: validMovieId }),

		async onSuccess(data) {
			reset()
			if (validMovieId) {
				await queryClient.invalidateQueries({
					queryKey: ['get movie', movieId.toString()]
				})
				debugger
			}
		}
	})

	const onsubmit: SubmitHandler<IReviewDto> = async (data) => {
		if (validMovieId !== null) {
			await mutateAsync(data)
		} else {
			console.error('Invalid movieId')
		}
	}

	return (
		<form className={stylesForm.form} onSubmit={handleSubmit(onsubmit)}>
			<div className={styles.description}>
				<Field
					{...register('description', {
						required: 'Description is required'
					})}
					error={errors?.description}
					placeholder={'Add a public review'}
					className={''}
				/>

				<button className={styles.button}>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddReviewForm
