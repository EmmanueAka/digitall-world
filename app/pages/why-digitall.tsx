import React from 'react'
import {WHY_CARD} from "@/lib/constants";

interface WhyDigitallProps {
	title: string;
	desc: string;
	icon?: React.ComponentType<{ className?: string }>
}

const WhyDigitall = () => {
	return (
		<section className='mt-12 h-auto flex items-center justify-center w-full bg-surface-variant px-8 text-black'>
			<div className='mt-12 flex flex-row justify-between items-center gap-4 mb-12 px-8'>
				<div className='space-y-3'>
					<h2 className='font-bold text-2xl'>Why DigitAll World</h2>
					<p className=' text-gray-500'>We don&apos;t just build websites; we engineer digital platforms designed to weather the complexities of modern business scaling.</p>
					<div className='border-b-3 border-gray-400/50 w-12' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ml-4 gap-4'>
					{(WHY_CARD as WhyDigitallProps[]).map((card, idx) => {
						const WhyIcon = card.icon;
						return (
							<div key={idx} className='flex flex-col max-w-xl mx-auto shadow-md justify-center items-start gap-3 bg-white px-4 py-2'>
								{WhyIcon ? (
									<WhyIcon className="w-6 h-6 text-on-secondary-container"/>
								) : <svg>

								</svg>
								}
								<h3 className='font-black text-lg'>{card.title}</h3>
								<p className='text-gray-600'>{card.desc}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
export default WhyDigitall
