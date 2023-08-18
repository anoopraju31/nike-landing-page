import React from 'react'
import { Button } from '../components'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { statistics } from '@/utills/statistics'

const Hero = () => {
	return (
		<section className='xl:padding-l wide:padding-r padding-b'>
			<div
				id='home'
				className='w-full min-h-screen p-2 flex flex-col xl:flex-row justify-center gap-10 max-container'>
				<div className='relative w-full xl:w-2/5 max-xl:padding-x pt-28 flex flex-col justify-center items-start'>
					<p className='text-xl font-montserrat text-coral-red'>
						{' '}
						Our Summary Collections{' '}
					</p>
					<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
						<span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
							{' '}
							The New Arrival{' '}
						</span>
						<br />
						<span className='text-coral-red inline-block mt-3'> Nike </span>
						Shoes
					</h1>
					<p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
						Discover stylish Nike arrivals, quality comfort, and innovation for
						your active life.
					</p>

					<Button label='Shop Now' Icon={AiOutlineArrowRight} />

					<div className='w-full mt-20 flex justify-start items-start flex-wrap gap-16'>
						{statistics.map((stat, idx) => (
							<div key={idx} className=''>
								<p className='text-4xl font-palanquin font-bold'>
									{' '}
									{stat.value}{' '}
								</p>
								<p className='leading-7 font-montserrat text-slate-gray'>
									{' '}
									{stat.label}{' '}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
