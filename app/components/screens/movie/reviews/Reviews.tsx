import React, { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import AddReviewForm from '@/screens/movie/reviews/add-review-form/AddReviewForm'
import { IReviews } from '@/screens/movie/reviews/reviews.interface'
import styles from './Reviews.module.scss'
import ReviewItem from '@/screens/movie/reviews/review-item/ReviewItem'

const Reviews: FC<IReviews> = ({ movieId, reviews, isLoading }) => {
	const { user } = useAuth()
	// const { data, isLoading } = useQuery({
	// 	queryKey: ['get comments', movieId],
	// 	queryFn: () => {},
	// 	select: ({ data }) => data
	// })
	return (
		<div className={'mt-10'}>
			<div className={styles.addRev}>
				{user && <AddReviewForm movieId={movieId} />}
			</div>
			{isLoading
				? 'Загрузка'
				: reviews?.length
					? reviews?.map((review) => (
							<ReviewItem review={review} key={review.id} />
						))
					: 'Reviews not found'}
		</div>
	)
}

export default Reviews

// <ReviewItem review={review} key={review.id} />
