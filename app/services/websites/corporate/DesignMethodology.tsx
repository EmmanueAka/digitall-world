import React from 'react'
import {DESIGN_METHOD_CARDS, FEATURED_CORPORATE_CARD} from "@/lib/constants";


const DesignMethodology = () => {
	return (
		<section >
			<div className='px-12 mt-24'>
				<div className='px-8'>
					<div className='font-semibold text-3xl '>Design Methodology</div>
					<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6'>
						{DESIGN_METHOD_CARDS.map((card, idx) => (
							<div key={idx} className='flex flex-col justify-center items-start gap-4'>
								<span className='material-symbols-outlined bg-primary/30 text-primary p-2'>{card.icon}</span>
								<span className='text-xl font-semibold'>{card.title}</span>
								<p className='text-sm '>{card.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
				<div className='mt-24 bg-[#fff] w-full min-h-72 h-auto px-24'>
					<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 relative'>
						{FEATURED_CORPORATE_CARD.map((card, id) => (
							<div key={id} className='flex flex-col justify-between items-start gap-4 mb-12'>
								<div className='bg-primary/10 h-52 w-full mt-8 flex items-center justify-center'>
									<span className='material-symbols-outlined text-gray-600 '>{card.icon}</span>
								</div>
								<div className='space-y-2 flex items-start flex-col justify-center'>
									<p className='text-xs font-bold text-primary uppercase'>{card.title}</p>
									<h3 className='font-semibold '>{card.sub}</h3>
									<p className='text-sm max-w-lg'>{card.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			<div className='min-h-[300px] flex flex-col items-center justify-center space-y-5'>
				<h3 className='font-serif font-semibold text-4xl max-w-2xl text-center'>Ready to Architect Your Corporate Presence?</h3>
				<p className='text-center text-sm max-w-2xl'>Partner with DigitalArch to engineer a digital platform that reflects the scale, security, and sophistication of your enterprise.</p>
				<button className='bg-tertiary-container py-3 px-4 text-white shimmer-btn transition-transform duration-300 hover:scale-105 active:scale-95'>Consult with our Strategist</button>
			</div>
		</section>
	)
}
export default DesignMethodology
