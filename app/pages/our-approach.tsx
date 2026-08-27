import React from 'react'
import {CARD_APPROACH} from "@/lib/constants";


interface CardProps {
	title: string;
	desc: string;
	icon?: React.ComponentType<{className?: string}>
}
const OurApproach = () => {
	return (
		<section className='mt-16 bg-surface-container h-auto border-2 border-outline/30 text-black'>
			<div></div>
			<div className='flex flex-col items-center justify-center mt-16 max-w-3xl mx-auto px-8'>
				<h2 className='text-4xl font-bold'>Our Approach</h2>
				<div className='max-w-2xl mx-auto text-sm mt-2 text-gray-500'>The DigitAll World methodology ensures structurally sound, strategically aligned outcomes from day one
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 px-4 mb-24'>
				{(CARD_APPROACH as CardProps[]).map((item, id) => {
					const CardIcon = item.icon;
					return (
						<div key={id} className='flex flex-col items-center justify-between gap-4 mt-4'>
							<div className='h-12 w-12 rounded-xl border-2 border-gray-300/70 bg-white shadow-inner text-on-primary-fixed flex items-center justify-center'>
								{CardIcon ? (
									<CardIcon className='w-6 h-6 text-on-secondary-fixed-variant group-hover:text-white transition-colors' />
								) : <svg>

								</svg>
								}
							</div>
							<h3 className='font-bold text-2xl tracking-light'>
								{item.title}
							</h3>
							<p className='text-center text-lg leading-relaxed text-[#445d80] font-medium px-4'>
								{item.desc}
							</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}
export default OurApproach
