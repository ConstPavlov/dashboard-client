import { IUser } from '@/shared/interfaces/user.interface'
import { IMovie } from '@/shared/interfaces/movie.interface'
import { Ibase } from '@/shared/interfaces/base.interface'

export interface IReview extends Ibase {
	user: IUser
	movie: IMovie
	description: string
}

export interface IReviewDto extends Pick<IReview, 'description'> {
	movieId: number
}
