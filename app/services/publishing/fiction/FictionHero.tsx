import React from 'react'

const FictionHero = () => {
	return (
		<section id='hero' className='px-24'>
			<div className='mt-24 w-full'>
				<div className='flex flex-row items-center gap-2 '>
					<div className=' uppercase tracking-widest mt-12 text-[10px] border border-gray-400/50 bg-gray-300/30  flex flex-row rounded-full px-1.5 items-center justify-start gap-2'>
					<div className='rounded-full bg-on-primary-container w-2 h-2'></div>
						Publishing Services
					</div>
				</div>
					<div className='flex items-start flex-col justify-start'>
						<div className='text-5xl font-black leading-12 font-serif mt-12 text-on-secondary-fixed-variant'>
							<p>Precision typography.<br/>
								Evocative Storytelling.</p>
						</div>
						<p className='mt-4 max-w-lg text-sm text-on-secondary-container'>We construct digital and physical reading experiences with rigorous attention to structural layout, typographic rhythm, and compelling cover aesthetics for authors and enterprise publishers.</p>

						<div className='mt-8 flex flex-row gap-3 items-center justify-start'>
							<button className='px-4 py-2 shimmer-btn text-white bg-on-secondary-container'>
								Get a Publishing Quote
							</button>
							<button className='bg-white border border-on-secondary-container/40 px-4 py-2'>View Case Studies</button>
						</div>
					</div>

			</div>
		</section>
	)
}
export default FictionHero
