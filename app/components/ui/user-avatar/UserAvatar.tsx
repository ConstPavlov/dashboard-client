import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{ avatarPath: string; link: string; title?: string }> = ({
	avatarPath,
	link,
	title
}) => {
	return (
		<Link href={link}>
			<Image
				title={title}
				className={styles.avatar}
				src={avatarPath}
				alt={'img avatar'}
				width={40}
				height={40}
			/>
		</Link>
	)
}

export default UserAvatar
