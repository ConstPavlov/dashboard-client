// import { GetStaticProps } from 'next'
// import { IHome } from '@/screens/home/home.interface'
// import { MovieService } from '@/services/movie.service'
//
// export const getStaticProps: GetStaticProps<IHome> = async () => {
// 	try {
// 		const { data: newMovies } = await MovieService.getAll()
// 		console.log(newMovies)
// 		console.log(newMovies)
// 		return {
// 			props: {
// 				newMovies
// 			},
// 			revalidate: 60
// 		}
// 	} catch (e) {
// 		console.error(e)
// 		return {
// 			props: {
// 				newMovies: []
// 			}
// 		}
// 	}
// }
