import interceptor, { axiosClassic } from '../api/interceptor'
import { IMovie, IMovieDto } from '@/shared/interfaces/movie.interface'

export const MovieService = {
	async getMovieById(movieId: number) {
		return axiosClassic.get<IMovie>(`movie/${movieId}`)
	},

	async getAll(searchTerm?: string) {
		try {
			return axiosClassic.get<IMovie[]>('movie', {
				params: searchTerm ? { searchTerm } : {}
			})
		} catch (err) {
			console.error('Error fetching movies:', err)
			throw err
		}
	},

	async createMovie() {
		return interceptor.post<string>('movie')
	},
	async updateMovie(id: string, body: IMovieDto) {
		return interceptor.put<IMovie>(`movie/${id}`, body)
	},
	async deleteMovie(id: string) {
		return interceptor.delete(`movie/${id}`)
	}
}
