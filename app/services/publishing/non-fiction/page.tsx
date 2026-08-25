import React from 'react'
import Hero from "@/app/services/publishing/non-fiction/hero";
import GridBased from "@/app/services/publishing/non-fiction/Grid-Based";
import Visual from "@/app/services/publishing/non-fiction/Visual";
import FeaturedNonFiction from "@/app/services/publishing/non-fiction/Featured-non-fiction";

const Page = () => {
	return (
		<main>
			<Hero />
			<GridBased />
			<FeaturedNonFiction />
			<div className='h-full w-full mt-12 flex items-center justify-center'>
				<div className='h-[400px] w-[650px] mx-auto bg-white border border-gray-300 rounded-lg flex flex-col justify-center items-center'>
					<h3 className='font-serif text-4xl font-semibold'>Ready to Architect Your Book?</h3>
					<p className='text-center text-sm max-w-lg text-wrap mt-6 '>Submit your manuscript details and structural requirements. Our team will provide a comprehensive proposal for layout, data visualization, and formatting execution.</p>
					<button className='px-4 py-2 shimmer-btn bg-tertiary-container flex flex-row items-center justify-center gap-2 text-white mt-6 group transition-transform duration-300 rounded'>
						Start a Project
						<span className='material-symbols-outlined text-[12px] group-hover:translate-x-1 transition-transform duration-300'>arrow_forward</span>
					</button>
				</div>
			</div>
		</main>
	)
}
export default Page
