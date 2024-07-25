import React from 'react'
import { IHome } from '@/screens/home/home.interface'
import Layout from '@/ui/Layout/Layout'
import MovieItem from '@/ui/movie-item/MovieItem'
import styles from './Home.module.scss'
import { NextPage } from 'next'

const Home: NextPage<IHome> = ({ newMovies }) => {
	// const queryClient = useQueryClient()
	console.log(newMovies)
	return (
		<Layout title={'Home page'}>
			<h1 className={styles.title}>New movies</h1>
			<div className={styles.catalog}>
				{newMovies ? (
					newMovies.map((movie) => <MovieItem movie={movie} key={movie.id} />)
				) : (
					<div> Movies not found</div>
				)}
			</div>
		</Layout>
	)
}

export default Home
