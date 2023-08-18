import React from 'react'

interface Props {
	label: string
	Icon?: React.ComponentType
}

const Button = ({ label, Icon }: Props) => {
	return (
		<button className='py-4 px-7 flex justify-center items-center gap-2 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
			<span> {label} </span>
			{Icon && (
				<div className='w-6 h-6 ml-2 rounded-full flex justify-center items-center bg-white text-coral-red'>
					<Icon />
				</div>
			)}
		</button>
	)
}

export default Button
