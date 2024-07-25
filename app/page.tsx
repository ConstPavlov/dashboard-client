'use client'
import { IHome } from '@/screens/home/home.interface'
import React, { useEffect, useState } from 'react'
import Home from '@/screens/home/Home'
import { IMovie } from '@/shared/interfaces/movie.interface'
import { MovieService } from '@/services/movie.service'
import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './providers/auth-provider/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false
		}
	}
})
const HomePage: NextPage<IHome> = (props) => {
	const [newMovies, setNewMovies] = useState<IMovie[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await MovieService.getAll()
				setNewMovies(data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Home newMovies={newMovies} />
			</AuthProvider>
		</QueryClientProvider>
	)
}
export default HomePage
