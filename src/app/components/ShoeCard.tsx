import Image from 'next/image'
import React from 'react'

interface Props {
	imgUrl: string
	bigShoeImg: string
	changeBigShoeImg: (imgUrl: string) => void
}

const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeImg }: Props) => {
	const handleClick = () => {
		if (imgUrl !== bigShoeImg) changeBigShoeImg(imgUrl)
	}

	return (
		<div
			className={`border-2 rounded-xl ${
				bigShoeImg === imgUrl ? 'border-coral-red' : 'border-transparent'
			} cursor-pointer max-sm:flex-1`}
			onClick={handleClick}>
			<div className='sm:w-40 sm:h-40 p-2 flex max-sm:flex-1 justify-center items-center bg-card bg-center bg-cover rounded-xl'>
				<Image
					src={imgUrl}
					alt={imgUrl}
					width={127}
					height={103}
					className='object-contain'
				/>
			</div>
		</div>
	)
}

export default ShoeCard
