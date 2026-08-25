import React from 'react'

const Hero = () => {
	return (
		<section className='mt-24 px-12'>
			<div className='w-full h-auto'>
				<div className='mt-8'/>
				<div className='flex items-center gap-3 font-semibold text-primary text-sm'>
					<span className="w-8 h-[1px] bg-primary"></span>
					<span className='uppercase'>Non-Fiction Publishing</span>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8'>
					<div className='max-w-4xl mx-auto'>
						<h1 className='text-5xl font-bold font-serif'>Architectural Rigor.
							Complex Information Design.
						</h1>
						<p className='mt-8'>
							Structuring dense data into clear, readable knowledge. We apply a structural, grid-based logic to non-fiction publishing, ensuring that complex information architecture never overwhelms the reader, but rather guides them through a journey of technical clarity.
						</p>

						<button className='px-4 py-3 bg-tertiary-container shimmer-btn rounded-lg mt-8 text-white font-medium transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 active:scale-95'>Get a Publishing Quote</button>
					</div>
					<div className='flex justify-end mt-8 group overflow-hidden'>
						<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFrCPJeW7TqEkXNkhKYKxkrmv9PznYDoEKXiddbMGApTEaxMW4KfyvpZ7QsDtgm13UXuqu8WKw9gMMryxcAfDkIXk5wtPxyi5Cg_6icT_t1D_CqnzoJirgUvkXVCivwjTh1jukFWx3rrq_-h7DotirjoXCLJ0ClD29zq92DlyETOViei0bvz_7Ca4SQLLzKzADJgnVAIZp71YRhVywl4B_WkyyXwM_PVN5bS66g8PLYVmhKO9J6ffMPw" alt="Open Book for non-friction page" className="object-contain group-hover:scale-105 transition-transform duration-300"/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero
