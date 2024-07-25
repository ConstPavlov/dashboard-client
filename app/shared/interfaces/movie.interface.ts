import { IReview } from '@/shared/interfaces/review.interface'
import { Ibase } from '@/shared/interfaces/base.interface'

export interface IMovie extends Ibase {
	name: string
	rating: number | null
	poster: string
	views: number
	reviews?: IReview[]
	fees: number
}

export interface IMovieDto extends Pick<IMovie, 'name' | 'fees' | 'poster'> {}
