import Image from 'next/image'
import Link from 'next/link'

import { navLinks } from '@/utills/navLinks'

const Navbar = () => {
	return (
		<header className='w-full padding-x py-8 absolute z-10'>
			<nav className='flex justify-between items-center max-container'>
				<Link href='/'>
					<Image
						src='/images/header-logo.svg'
						alt='Logo'
						width={130}
						height={29}
					/>
				</Link>

				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map(({ href, label }) => (
						<li key={label}>
							<Link
								className='font-montserrat leading-normal text-lg text-slate-gray'
								href={href}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
