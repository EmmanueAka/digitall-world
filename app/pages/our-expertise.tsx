"use client";

import React from 'react'
import { CARD_LIST } from "@/lib/constants";
import Link from "next/link";

interface ExpertiseCard {
	title: string;
	desc: string;
	icon?: React.ComponentType<{ className?: string }>;
	href: string;
}

const OurExpertise = () => {
	return (
		<section className='mt-32 px-6 md:px-16 mx-auto font-sans text-black'>
			{/* Section Header */}
			<div className='mb-12 border-b border-[#6c757d]/10 pb-4'>
				<h2 className='text-3xl font-black uppercase tracking-tight'>Our Expertise</h2>
				<p className='text-sm font-medium text-[#445d80] mt-1'>
					Deep multi-disciplinary design and production development frameworks.
				</p>
			</div>

			{/* Responsive Grid Matrix Layout */}
			<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6'>
				{(CARD_LIST as ExpertiseCard[]).map((card, id) => {
					// 1. Assign the component function to a Capitalized variable name
					const IconComponent = card.icon;

					return (
						<div
							key={id}
							className='flex flex-col justify-between p-6 bg-surface-bright border border-[#6c757d]/15 rounded-2xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:border-[#e2881c]/30 group'
						>
							<div>
								{/* Icon Placeholder Frame Block */}
								<div className='w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white mb-6 group-hover:bg-[#e2881c] transition-colors duration-300 shadow-inner'>
									{IconComponent ? (
										// 2. Render it properly as a dynamic self-closing React JSX Component tag
										<IconComponent className="w-6 h-6 text-[#00A8E8] group-hover:text-white transition-colors" />
									) : (
										// Default Fallback
										<svg className="w-6 h-6 text-[#00A8E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									)}
								</div>

								{/* Content Metadata Area */}
								<h3 className='font-black text-lg tracking-tight mb-2 group-hover:text-[#e2881c] transition-colors duration-200'>
									{card.title}
								</h3>
								<p className='text-sm leading-relaxed text-[#445d80] font-medium'>
									{card.desc}
								</p>
							</div>

							{/* Subtle Context Action Indicator */}
							<div className='mt-6 pt-4 border-t border-[#6c757d]/5 flex items-center text-xs font-bold uppercase tracking-wider text-[#445d80] group-hover:text-[#e2881c] transition-colors'>
								<Link href={card.href} >
								<span>Learn More</span>
								</Link>
								<svg className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
								</svg>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default OurExpertise
