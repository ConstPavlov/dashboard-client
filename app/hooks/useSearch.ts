import { ChangeEvent, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { MovieService } from '@/services/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 1000)

	const { isSuccess, data, isError, error } = useQuery({
		queryKey: ['search movie', debounceSearch],
		queryFn: () => MovieService.getAll(debounceSearch),
		select: ({ data }) => data.slice(0, 4),
		enabled: !!debounceSearch
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
		console.log(e.target.value)
	}

	return {
		handleSearch,
		isSuccess,
		data,
		searchTerm
	}
}
