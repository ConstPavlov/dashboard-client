import React, { FC } from 'react'
import Field from '@/ui/Field/Field'
import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSearch } from '@/hooks/useSearch'
import MovieItem from '@/ui/movie-item/MovieItem'
import styles from './Search.module.scss'
import { menuAnimation } from '@/utils/animations/fade'

const Search: FC = () => {
	const { handleSearch, isSuccess, data, searchTerm } = useSearch()
	return (
		<div className={styles.search_top}>
			<label>
				<Field
					type='text'
					placeholder='Search movies...'
					value={searchTerm}
					onChange={(event) => handleSearch(event)}
					Icon={FaSearch}
				/>
			</label>
			{isSuccess && (
				<motion.div
					initial={false}
					animate={isSuccess ? 'open' : 'closed'}
					variants={menuAnimation}
					className={styles.result}
				>
					{data?.length ? (
						data.map((movie) => <MovieItem movie={movie} key={movie.id} />)
					) : (
						<div>Movies not found</div>
					)}
				</motion.div>
			)}
		</div>
	)
}

export default Search
