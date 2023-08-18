import React from 'react'
import { Button } from '../components'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { statistics } from '@/utills/statistics'

const Hero = () => {
	return (
		<section className='xl:padding-l wide:padding-r padding-b'>
			<div
				id='home'
				className='w-full min-h-screen p-2 flex flex-col xl:flex-row gap-10 max-container'>
				<div className='relative w-full xl:w-2/5 max-xl:padding-x pt-28 flex flex-col justify-center items-center'>
					<p className=''> Our Summary Collections </p>
					<h1 className=''>
						<span> The New Arrival </span>
						<br />
						<span> Nike </span>
						Shoes
					</h1>
					<p className=''>
						Discover stylish Nike arrivals, quality comfort, and innovation for
						your active life.
					</p>

					<Button label='Shop Now' Icon={AiOutlineArrowRight} />

					<div className='w-full mt-20 flex justify-start items-start flex-wrap gap-16'>
						{statistics.map((stat, idx) => (
							<div key={idx} className=''>
								<p className=''> {stat.value} </p>
								<p className=''> {stat.label} </p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
