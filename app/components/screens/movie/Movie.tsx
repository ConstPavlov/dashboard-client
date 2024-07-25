// 'use client'
import React, { FC, useEffect } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { MovieService } from '@/services/movie.service'
import styles from './Movie.module.scss'
import Image from 'next/image'
import Layout from '@/ui/Layout/Layout'
import Reviews from '@/screens/movie/reviews/Reviews'
import { ViewsService } from '@/services/views.service'

const Movie: FC = () => {
	const { query } = useRouter()
	const movieId = query?.id && !isNaN(Number(query.id)) ? Number(query.id) : 0

	console.log(movieId)
	const { data: movie, isLoading } = useQuery({
		queryKey: ['get movie', query?.id],
		queryFn: () => MovieService.getMovieById(movieId),
		enabled: !!movieId,
		select: ({ data }) => data
	})

	const { mutate } = useMutation({
		// queryKey: ['update count opened'],
		mutationFn: () => ViewsService.updateViews(movieId.toString())
	})

	useEffect(() => {
		if (movieId) {
			mutate()
		}
	}, [movieId, mutate])
	return (
		<Layout title={'Kostya'}>
			<div className={styles.wrapper}>
				<div className={styles.poster}>
					<div className={styles.img}>
						{movie?.poster && (
							<Image
								src={movie?.poster || ''}
								alt={movie?.name || ''}
								width={250}
								height={350}
							/>
						)}
					</div>
				</div>
				<div className={styles.detail}>
					<h1 className={styles.title}>{`${movie?.name}`}</h1>
					<div className={styles.rating}>{movie?.rating?.toFixed(1)}</div>
					<div className={styles.listName}>
						<ul>
							<li>
								<span>Сборы в мире</span>
								<span>${movie?.fees.toLocaleString()}</span>
							</li>
						</ul>
					</div>

					<Reviews
						movieId={movieId}
						reviews={movie?.reviews || []}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Movie
