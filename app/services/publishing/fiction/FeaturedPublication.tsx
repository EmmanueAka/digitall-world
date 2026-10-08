import React from 'react'
import Link from "next/link";

const FEATURED_CARD = [
	{img: "/book3.jpg", title: "The Silent Architect", sub: "Thriller / Print & Digital"},
	{img: "/book2.jpg", title: "Echoes in Code", sub: "Sci-Fi / EPUB Optimization"},
	{img: "/book1.jpg", title: "Structural Integrity", sub: "Literary Fiction / Cover Design"},
]
const FeaturedPublication = () => {
	return (
		<section className='px-24 mt-24'>
			<div className='flex flex-row justify-between'>
				<h3 className='font-bold text-2xl'>Featured Publication</h3>
				<span className='flex flex-row items-center justify-center gap-2 group  text-sm'>
					<Link href='/portfolio' className='group-hover:text-secondary'>View Full Portfolio</Link>
					<span className='material-symbols-outlined text-[8px] group-hover:translate-x-1 transition-transform duration-300 hover:text-on-secondary-fixed-variant'>arrow_forward</span>
				</span>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full mt-8'>
				{FEATURED_CARD.map((card, idx) => (
					<div key={idx} className='flex flex-col items-start  justify-between'>
						<div className='group relative overflow-hidden'>
							<img src={card.img} className='object-cover w-[300px] h-82 group-hover:scale-105 transition-transform duration-300 ease-in'/>
						</div>
						<p className='font-semibold mt-2 group-hover:text-sky-700'>{card.title}</p>
						<p className='text-[10px] group-hover:text-sky-700'>{card.sub}</p>
					</div>
				))}
			</div>
		</section>
	)
}
export default FeaturedPublication
