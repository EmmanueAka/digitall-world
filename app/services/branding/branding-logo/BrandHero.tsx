import React from 'react'

export const BrandHero = () => {
	return (
		<section className='px-16 mt-24'>
			<div className='uppercase  rounded-full text-[10px] flex flex-row gap-3 px-2 py-0.5 font-bold text-primary bg-primary/10 flex-wrap min-w-auto max-w-[270px]'>
				<div className='w-3 h-3 rounded-full bg-primary'/>
				brand architecture &amp; identity systems</div>
			<div className='font-semibold text-black font-serif text-[46px] mt-8 max-w-[550px]'>
				<h1>Commanding Brand Identities Engineered for Distinction</h1>
			</div>
			<div className='flex items-end justify-between w-full'>
				<p className='text-gray-600 mt-8 max-w-[550px]'>We architect multi-dimensional visual identities, memorable logomarks, and living design systems that bridge architectural precision with unforgettable emotional resonance.</p>
				<div className='flex items-center justify-between gap-4'>
					<button className='bg-primary px-3 py-2 shimmer-btn transition-transform duration-300 hover:scale-105 active:scale-95'>Schedule Brand Discovery</button>
					<button className='bg-white px-3 py-2 border text-primary  border-gray-300'>Explore Identity Matrix</button>
				</div>
			</div>
		</section>
	)
}
