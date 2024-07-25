import React, { FC, useEffect, useRef } from 'react'
import styles from '../Reviews.module.scss'
import { IReview } from '@/shared/interfaces/review.interface'
import Image from 'next/image'
import { useInView } from 'framer-motion'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	const refReview = useRef(null)
	const isInView = useInView(refReview)

	useEffect(() => {}, [isInView])
	return (
		<div className={styles.review} ref={refReview}>
			<div className={styles.avatarBlock}>
				<Image
					className={styles.avatar}
					src={review.user.avatarPath}
					alt={review.user.name}
					width={50}
					height={50}
				/>
				<p className={styles.name}>{review.user.name}</p>
			</div>
			<h2 className={styles.description}>{review.description}</h2>
		</div>
	)
}

export default ReviewItem
