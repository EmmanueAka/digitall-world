import React from 'react'
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const FEATURED_CARDS = [
	{img: "/featured1.jpg", title: "Publishing", Desc: "Global News Network"},
	{img: "/featured2.jpg", title: "Web", Desc: "Apex Financial Group"},
	{img: "/featured3.jpg", title: "Mobile", Desc: "Lumina Health App"}
]

const FeaturedProjects = () => {
	return (
		<section className='px-8 mt-16 text-black'>
			<div className='flex items-center justify-between'>
				<h2 className='font-bold text-4xl'>Featured Projects</h2>
				<span className='flex items-center justify-center gap-2 group'>
					<Link href='' className='group-hover:text-primary'>View All Projects</Link>
					<ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
				</span>
			</div>
			<div className='border-b-3 border-gray-400 w-12 mt-2'/>
				<div className='grid grid-cols-1 md:grid-cols-3 mt-12'>
					{FEATURED_CARDS.map((card, idx) => (
						<div key={idx} className='flex flex-col items-center gap-4  justify-between'>
							<div className='space-y-2 group'>
								<div className='rounded-lg overflow-hidden'>
									<img src={card.img} alt={card.title} className='w-[400px] h-82 gap-4d transition-transform duration-300 group-hover:scale-105'/>
								</div>
								<p className='text-xs uppercase text-gray-400 '>{card.title}</p>
								<h3 className='group-hover:text-on-secondary-fixed-variant font-semibold'>{card.Desc}</h3>
							</div>
						</div>
					))}
				</div>
		</section>
	)
}
export default FeaturedProjects
