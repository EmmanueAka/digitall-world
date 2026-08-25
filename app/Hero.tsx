import React from 'react'
import InteractiveLogo from "@/components/InteractiveLogo";

const Hero = () => {
	return (
		<section className='px-16 '>
			<div className='h-24'>

			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
				<div className='mt-12 mr-24 flex flex-col justify-start max-w-5xl mx-auto space-y-10'>
						<h1 className='font-bold text-5xl'>
							Precision in Execution. <br />
							Vision in Strategy.
						</h1>
					<div className='mx-auto'>
						<p className='text-sm text-gray-600'>
							We engineer digital architecture. Bridging the gap between robust publishing systems, cutting-edge digital design, and cohesive brand identities for modern enterprises.
						</p>
					</div>
					<div>
						<button className='bg-tertiary-container shimmer-btn transition-transform duration-300 hover:glass-panel rounded-full hover:scale-105 active:scale-95 cursor-pointer px-4 py-2'>
							Start Your Project
						</button>
						<button className='text-on-primary-fixed-variant glass-card hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:text-on-primary-container rounded-full hover:bg-on-primary-container cursor-pointer px-4 py-2 ml-4'>
							View Portfolio
						</button>
					</div>
				</div>
				<div className='flex justify-end '>
					<img src='/heroimg.jpg' alt='hero-img showing a realistic wierd frame' className='w-[500px] h-[450px] rounded-lg'/>
				</div>
			</div>
		</section>
	)
}
export default Hero
