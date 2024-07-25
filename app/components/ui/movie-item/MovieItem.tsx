import React, { FC } from 'react'
import { IMovie } from '@/shared/interfaces/movie.interface'
import Link from 'next/link'
import styles from './MovieItem.module.scss'
import Image from 'next/image'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	console.log(movie.poster)
	return (
		<Link href={`/movie/${movie.id}`}>
			<div className={styles.item}>
				<div>
					{movie.rating && (
						<div className={styles.rating}>{movie.rating.toFixed(1)}</div>
					)}
				</div>

				<div className={styles.poster}>
					<Image
						src={movie.poster || ''}
						alt={movie.name}
						width={250}
						height={350}
						layout='responsive'
					/>
				</div>
				<div className={styles.heading}>{movie.name}</div>
				<div className={styles.fees}>fees: {movie.fees}</div>
			</div>
		</Link>
	)
}

export default MovieItem
