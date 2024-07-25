import interceptor from '../api/interceptor'
import { IReview, IReviewDto } from '@/shared/interfaces/review.interface'

export const ReviewsService = {
	async createReview(body: IReviewDto) {
		console.log(body)
		return interceptor.post<IReview>(`review`, body)
	}
}
