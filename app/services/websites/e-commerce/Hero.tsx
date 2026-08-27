import React from 'react'
import Image from "next/image";

const Hero = () => {
	return (
		<section className='mt-24 px-12'>
			<div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
					<div className='max-w-lg'>
						<h1 className='mt-4 font-serif font-semibold text-[62px] leading-18 max-w-2xl'>Digital <br/>Architecture & <br/>Web Design</h1>
						<p className='mt-6 text-sm'>We build scalable, high-performance web experiences. From complex e-commerce ecosystems to sleek corporate portfolios, our structural approach ensures aesthetic brilliance meets technical rigor.</p>
						<button className='mt-6 bg-tertiary-container flex items-center justify-center gap-2 transition-transform duration-300 group hover:scale-105 active:scale-95 px-4 py-2 shimmer-btn text-white'>
							Request a Website Audit
							<span className='material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300'>arrow_forward</span>
						</button>
					</div>
					<div className='relative w-full h-full flex items-center justify-center'>
						<Image src='https://lh3.googleusercontent.com/aida-public/AB6AXuCGIEL1IPjPsp1FMZ-KxnxsLv5l7D_lnTr7CArn48zgYX-UFZFOVKj9lXmIc7OjDonAXZucd5XQDzCErrwP8tTK3-puTskKu-9m6SpHCo5GNh-RTOJcZACHoTErhojDAxCm4HMjQVzpJP37NWKUEFOTIKZQJsZsuw_Va7yHFhNRWkXJbY8FRar7rchxqycHsRjMuYY1bKgFO81WgSKGPOksUAKCEj3fHibOs2xAZj87RiAnT_FKHGrWtQ' alt='hero section e-commerce website' fill className='object-cover w-full h-full'/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero
