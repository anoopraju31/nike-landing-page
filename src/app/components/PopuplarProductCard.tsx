import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

import { Product } from '@/utills/popularProducts'

const PopuplarProductCard = ({ imgURL, name, price }: Product) => {
	return (
		<div className='w-full flex flex-1 flex-col'>
			{/* Image */}
			<Image src={imgURL} alt={name} width={348} height={348} />

			{/* Ratings */}
			<div className='mt-8 flex justify-start gap-2.5'>
				<AiFillStar size={24} className='text-coral-red ' />

				<p className='font-montserrat text-xl leading-normal text-slate-gray'>
					(4.5)
				</p>
			</div>

			{/* Name */}
			<h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
				{name}
			</h3>

			{/* Price */}
			<p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
				{price}
			</p>
		</div>
	)
}

export default PopuplarProductCard
