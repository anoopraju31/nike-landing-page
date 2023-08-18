import React from 'react'
import { Button } from '../components'
import Image from 'next/image'

const SuperQuality = () => {
	return (
		<section className='padding'>
			<div
				id='about-us'
				className='w-full max-container flex justify-between items-center max-lg:flex-col gap-10'>
				<div className='flex-1 flex flex-col'>
					<h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
						We Provide You
						<span className='text-coral-red'> Super </span>
						<span className='text-coral-red'>Quality </span> Shoes
					</h2>
					<p className='mt-4 lg:max-w-lg info-text'>
						Ensuring premium comfort and style, our meticulously crafted
						footwear is designed to elevate your experience, providing you with
						unmatched quality, innovation, and a touch of elegance.
					</p>
					<p className='mt-6 lg:max-w-lg info-text'>
						Our dedication to detail and excellence ensures your satisfaction
					</p>
					<div className='mt-11'>
						<Button label='View details' />
					</div>
				</div>

				<div className='flex-1 flex justify-center items-center'>
					<Image
						src='/images/shoe8.svg'
						alt='product details'
						width={570}
						height={522}
						className='object-contain'
					/>
				</div>
			</div>
		</section>
	)
}

export default SuperQuality
