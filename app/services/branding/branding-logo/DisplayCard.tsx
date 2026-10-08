import React from 'react'
import {BRANDING_CARD} from "@/lib/constants";

export const DisplayCard = () => {
	return (
		<section className='px-16'>
			<div className="relative w-full overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm mt-8">
				<img alt="Multi-Surface Identity System and 3D Brand Artifacts"
				     className="w-full h-[360px] md:h-[520px] object-cover"
				     src="/brandinghero.jpeg"/>
				<div
					className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
					<div className="flex items-center gap-3 text-surface-container-lowest">
						<span className="material-symbols-outlined text-primary-fixed">verified</span>
						<div className="flex flex-col">
							<span className="font-label-md text-label-md text-surface-container-lowest tracking-wide">Multi-Surface Identity System • 3D Tangible Artifacts • Hex/Pantone Precision Specs</span>
							<span className="font-caption text-caption text-surface-variant opacity-80">Physical brand expressions mapped with mathematical color accuracy and structural lucidity</span>
						</div>
					</div>
					<div className="flex items-center gap-2">
					<span
						className="px-3 py-1 rounded bg-surface-container-lowest/20 backdrop-blur-md text-surface-container-lowest font-caption text-caption uppercase tracking-wider">Acrylic Transparencies</span>
						<span
							className="px-3 py-1 rounded bg-surface-container-lowest/20 backdrop-blur-md text-surface-container-lowest font-caption text-caption uppercase tracking-wider">Editorial Typographics</span>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 '>
				{BRANDING_CARD.map((card, idx) => (
					<div key={idx} className='p-6 flex flex-col space-y-3 bg-white rounded-md shadow-md'>
						<span className='uppercase text-[10px] font-bold text-primary mt-4'>{card.head}</span>
						<div className='flex flex-row gap-2 justify-baseline'>
							<p className='text-black text-[46px] font-semibold '>{card.title}</p>
							<span className='text-gray-700 flex  text-sm font-semibold items-end'>{card.sub}</span>
						</div>
						<p className='text-sm text-gray-700 '>{card.desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}
